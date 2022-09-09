import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTicket, closeTicket } from '../features/tickets/ticketSlice';
import {
  getNotes,
  createNote,
  reset as notesReset
} from '../features/notes/noteSlice';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import NoteItem from '../components/NoteItem';

//* Modal
// *-----------------
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '200px',
    background: '#58C7F3'
  }
  // *STOPPED HERE-----------------------------
};
// Reaches into the index.html and mounts onto the root
Modal.setAppElement('#root');
// *-----------------

const Ticket = () => {
  // State for modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState('');

  // From ticket state, state.tickets is plural cause thats what it's named in the store
  const { isLoading, ticket, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  // Get the state notes, renamed loading
  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );

  //   To get the ticketId
  const params = useParams();
  const dispatch = useDispatch();
  //   gets the ticketId from url
  const { ticketId } = useParams();
  const navigate = useNavigate();

  // *Call getTicket pass in the id from params with useEffect
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
  }, [isError, message, ticketId]);

  //*Close Ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success('Ticket Closed');
    navigate('/tickets');
  };

  //*Open/Close Modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  //* CREATE NOTE SUBMIT
  const onNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({ noteText, ticketId }));
    closeModal();
  };

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  return (
    <div className='flex flex-col w-full space-y-6'>
      <header className='flex  '>
        <BackButton url='/tickets' />
      </header>
      {/* Card1*/}
      <div className=' card shadow-xl bg-neutral text-neutral-content sm:w-1/2 md:w-1/3 '>
        <div className='flex card-body md:text-left'>
          <h2 className='w-full justify-center card-title sm:justify-end '>
            <span
              className={` ${
                ticket.status === 'closed'
                  ? 'status-closed'
                  : ticket.status === 'open'
                  ? 'status-open'
                  : 'status-new'
              }`}>
              {ticket.status}
            </span>
          </h2>
          <p className='justify-center break-words '>
            <span className='font-bold'>Ticket ID</span> : {ticket._id}
          </p>
          <p className=''>
            <span className='font-bold'>Submission Date</span>{' '}
            {new Date(ticket.createdAt).toLocaleString('en-US')}
          </p>
          <div className='card-actions justify-center sm:justify-end'>
            {ticket.status !== 'closed' && (
              <button
                className='btn btn-accent btn-sm hover:scale-125 sm:btn-md'
                onClick={openModal}>
                <FaPlus className='mr-3 ' /> Add Note
              </button>
            )}
            {ticket.status !== 'closed' && (
              <button
                className='btn btn-error btn-sm hover:scale-125 sm:btn-md'
                onClick={onTicketClose}>
                Close Ticket
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Need to fix this 2nd card at 275px right side is off some how */}
      <hr></hr>
      {/* Card2 */}
      <div className=' card bg-neutral w-full text-neutral-content '>
        <div className='flex card-body items-center text-center'>
          <h3 className='card-title'>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
        <h3 className='font-bold bg-accent text-base-200'>Notes</h3>
        {notes.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Add Note'>
        <div className='flex justify-end '>
          <button
            className='btn btn-xs btn-error btn-close '
            onClick={closeModal}>
            X
          </button>
        </div>
        <h2 className='font-bold text-neutral'>Add Note</h2>

        <form onSubmit={onNoteSubmit} className=' h-200px w-200px space-y-3 '>
          <div className='form-control'>
            <textarea
              name='noteText'
              id='noteText'
              className='textarea placeholder-primary'
              placeholder='Note text'
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}></textarea>
          </div>
          <button type='submit' className='btn btn-sm btn-accent'>
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Ticket;
