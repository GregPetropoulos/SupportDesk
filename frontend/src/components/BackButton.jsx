import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackButton = ({ url }) => {
  return (
    <Link to={url} className='btn btn-outline btn-success my-3' >
      <FaArrowCircleLeft className='text-3xl mr-3' /> Back
    </Link>
  );
};

export default BackButton;
