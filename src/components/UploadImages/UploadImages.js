import './UploadImages.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import gql from 'graphql-tag';
import url from '../../store/graphql/endpoint';
import { uploadPictures } from '../../store/graphql/queries';

const UploadImages = ({ labelButton, dispatchToRedux }) => {
  const { type, keyName } = dispatchToRedux;
  const dispatch = useDispatch();

  const resizeFile = (
    file,
    maxWidth,
    maxHeight,
    compressFormat,
    quality,
    rotation,
    outputType,
    minWidth,
    minHeight,
  ) => new Promise((resolve) => {
    Resizer.imageFileResizer(
      file, // Is the file of the image which will resized.
      maxWidth, // Is the maxWidth of the resized new image.
      maxHeight, // Is the maxHeight of the resized new image.
      compressFormat, // Is the compressFormat of the resized new image.
      quality, // Is the quality of the resized new image.
      rotation, // Is the degree of clockwise rotation to apply to uploaded image.
      (uri) => {
        resolve(uri);
      }, // Is the callBack function of the resized new image URI.
      outputType, // Is the output type of the resized new image.
      minWidth, // Is the minWidth of the resized new image.
      minHeight, // Is the minHeight of the resized new image.,
    );
  });

  function FileListItems(files) {
    const b = new ClipboardEvent('').clipboardData || new DataTransfer();
    for (let i = 0, len = files.length; i < len; i += 1) b.items.add(files[i]);
    return b.files;
  }

  const resizeImageFn = async (files) => {
    const maxWidth = 800;
    const maxHeight = 800;
    const compressFormat = 'PNG';
    const quality = 100;
    const rotation = 0;
    const outputType = 'file';
    const minWidth = 10;
    const minHeight = 10;

    const filesResized = await Promise.all(Array.from(files).map(async (file) => {
      const resizedImage = await resizeFile(
        file,
        maxWidth,
        maxHeight,
        compressFormat,
        quality,
        rotation,
        outputType,
        minWidth,
        minHeight,
      );
      return resizedImage;
    }));
    return filesResized;
  };

  const onChange = async ({
    target: {
      validity,
      files,
    },
  }) => {
    if (validity.valid) {
      const filesResized = await resizeImageFn(files);
      // eslint-disable-next-line no-param-reassign
      files = new FileListItems(filesResized);
      files = JSON.stringify(files);

      axios.post(url, {
        query: `
        mutation UploadObjects($files: [Upload!]!, $bucketName: String!) {
          uploadObjects(files: $files, bucketName: $bucketName) {
            url
            key
          }
        }
        `,
        variables: {
          files,
          bucketName: 'paradize',
        },
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((data) => {
        console.log('data:', data);
        dispatch({
          type: type,
          payload: {
            [keyName]: data.uploadObjects.map((image) => `images/${image.key}`),
          },
        });
      })
        .catch((error) => {
          console.log(error);
          console.log('files_error:', files);
        });
    }
  };
  return (
    <div>
      <label className="labelButton" htmlFor="files">
        <input type="file" name="file" id="files" multiple className="inputfile" required onChange={onChange} />
        {labelButton}
      </label>
    </div>
  );
};

UploadImages.propTypes = {
  labelButton: PropTypes.string.isRequired,
  dispatchToRedux: PropTypes.shape({
    type: PropTypes.string.isRequired,
    keyName: PropTypes.string.isRequired,
  }).isRequired,
};

export default UploadImages;
