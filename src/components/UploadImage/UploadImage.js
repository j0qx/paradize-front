import './uploadImage.scss';
import { useMutation, gql } from '@apollo/client';

const SINGLE_UPLOAD = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

const UploadImage = () => {
  const [mutate, { loading, error }] = useMutation(SINGLE_UPLOAD);
  const onChange = ({
    target: {
      validity,
      files: [file],
    },
  }) => validity.valid && mutate({ variables: { file } });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  console.log(mutate);
  return (
    <div>
      <input type="file" required onChange={onChange} />
    </div>
  );
};

export default UploadImage;
