import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  return (
    <div className=' grid grid-cols-3  justify-between items-center bg-neutral-400 mb-5 mt-2 p-x-2.5 p-y-5 rounded text-center font-bold'>
      <div className='text-left text-xs sm:text-lg'>
        {new Date(ticket.createdAt).toLocaleString('en-US')}
      </div>
      <div className='text-xs sm:text-lg'>{ticket.product}</div>
      <div
        className={` text-xs text-center p-0 pb-px w-14 status status-${ticket.status} sm:text-md sm:p-2 sm:w-1/2`}>
        {ticket.status}
      </div>
      <div className='flex m-3'>
        <Link
          to={`/ticket/${ticket._id}`}
          className='btn btn-accent btn-xs text-sm sm:w-1/4'>
          View
        </Link>
      </div>
    </div>
  );
};

export default TicketItem;
