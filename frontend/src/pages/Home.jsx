import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section className='hero min-h-screen bg-base-200'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-3xl font-bold'>What do you need help with?</h1>
            <p className='py-6'>Please choose from an option below</p>
          </div>
        </div>
      </section>
      <div className='flex-col space-y-3'>
        <Link to='/new-ticket' className='btn btn-secondary block '>
          <div className='flex justify-center pt-5'>
            <FaQuestionCircle className='mx-3' /> Create New Ticket
          </div>
        </Link>
        <Link to='/tickets' className='btn btn-secondary block'>
          <div className='flex justify-center pt-5'>
            <FaTicketAlt className='mx-3' /> View My Ticket
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
