import PropTypes from 'prop-types';
import './uploadImage.scss';
import { useMutation, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';

const SINGLE_UPLOAD = gql`
  mutation Mutation($file: Upload!, $bucketName: String!) {
    uploadObject(file: $file, bucketName: $bucketName) {
      url
      key
    }
  }
`;

const UploadImage = ({ labelButton, dispatchToRedux }) => {
  const { type, keyName } = dispatchToRedux;
  const [mutate, { data, loading, error }] = useMutation(SINGLE_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }) => validity.valid && mutate({ variables: { file, bucketName: 'oparadize' } });

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log('keyName:', keyName);
    // eslint-disable-next-line react/prop-types
    useDispatch()({
      type,
      payload: {
        [keyName]: `images/${data.uploadObject.key}`,
      },
    });
  }
  return (
    <div>
      <label className="labelButton" htmlFor="file">
        <input type="file" name="file" id="file" className="inputfile" required onChange={onChange} />
        {labelButton}
      </label>
    </div>
  );
};

UploadImage.propTypes = {
  labelButton: PropTypes.string.isRequired,
  dispatchToRedux: PropTypes.shape({
    type: PropTypes.string.isRequired,
    keyName: PropTypes.string.isRequired,
  }).isRequired,
};

export default UploadImage;
