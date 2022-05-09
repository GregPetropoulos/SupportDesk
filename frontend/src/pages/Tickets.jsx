import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import TicketItem from '../components/TicketItem';

const Tickets = () => {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  //This useEffect to handle clean up and memory leak issue of react
  useEffect(() => {
    //In order clear the state after unmount must use return
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    // dispatch an action to reducer and this will get all the tickets of the user in the state via slice and service
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <header className='flex w-screen sm:w-full'>
        <BackButton url='/' />
      </header>
      <h1 className='w-screen text-2xl font-bold text-center sm:w-full sm:text-3xl md:text-4xl'>
        Tickets
      </h1>
      <div className='w-screen bg-base-150 sm:text-md sm:w-full md:text-md'>
        <div className='grid grid-cols-3 justify-around items-center bg-secondary rounded text-center text-sm font-bold my-2 mb-8 w-screen  sm:text-2xl sm:w-full md:text-3xl'>
          <div className='md:text-left md:pl-14'>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
};

export default Tickets;
