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
      <BackButton url='/'/>
      <h1>Tickets</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
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
