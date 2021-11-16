import PropTypes from 'prop-types';
import './uploadImage.scss';
import { useMutation, gql } from '@apollo/client';

const SINGLE_UPLOAD = gql`
  mutation Mutation($file: Upload!, $bucketName: String!) {
    uploadObject(file: $file, bucketName: $bucketName) {
      url
      key
    }
  }
`;

const UploadImage = ({ labelButton }) => {
  const [mutate, { data, loading, error }] = useMutation(SINGLE_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }) => validity.valid && mutate({ variables: { file, bucketName: 'oparadize' } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  if (data) {
    console.log(data);
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
};

export default UploadImage;
