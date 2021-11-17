import './UploadImages.scss';
import PropTypes from 'prop-types';

import { useMutation, gql } from '@apollo/client';

const MULTI_UPLOAD = gql`
  mutation UploadObjectsMutation($files: [Upload!]!, $bucketName: String!) {
    uploadObjects(files: $files, bucketName: $bucketName) {
      url
      key
    }
  }
`;

const UploadImages = ({ labelButton }) => {
  const [mutate, { data, loading, error }] = useMutation(MULTI_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files,
    },
  }) => validity.valid && mutate({ variables: { files, bucketName: 'paradize' } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  if (data) {
    console.log(data);
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
};

export default UploadImages;
