import './UploadImages.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useMutation, gql } from '@apollo/client';

const MULTI_UPLOAD = gql`
  mutation UploadObjectsMutation($files: [Upload!]!, $bucketName: String!) {
    uploadObjects(files: $files, bucketName: $bucketName) {
      url
      key
    }
  }
`;

const UploadImages = ({ labelButton, dispatchToRedux }) => {
  const { type, keyName } = dispatchToRedux;
  const dispatch = useDispatch();
  const [mutate, { data, loading, error }] = useMutation(MULTI_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files,
    },
  }) => validity.valid && mutate({ variables: { files, bucketName: 'paradize' } });

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log({
      type: type,
      payload: {
        [keyName]: data.uploadObjects.map((image) => `images/${image.key}`),
      },
    });
    dispatch({
      type: type,
      payload: {
        [keyName]: data.uploadObjects.map((image) => `images/${image.key}`),
      },
    });
  }
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
