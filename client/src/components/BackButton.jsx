import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackButton = ({ url }) => {
  return (
    <Link to={url} className='btn btn-outline btn-success my-3 btn-sm sm:btn-md' >
      <FaArrowCircleLeft className='text-2xl mr-3 sm:text-3xl' /> Back
    </Link>
  );
};

export default BackButton;
