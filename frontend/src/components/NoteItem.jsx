import { useSelector } from 'react-redux';

const NoteItem = ({ note }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className={`${note.isStaff? 'bg-secondary text-neutral':'bg-neutral'}`}
    >
      <h4 className='text-left text-lg md:text-2xl'>
        Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}
      </h4>
      <p>{note.text}</p>
      <div className='text-xs'>
        {new Date(note.createdAt).toLocaleString('en-US')}
      </div>
      <hr></hr>
    </div>
  );
};

export default NoteItem;
