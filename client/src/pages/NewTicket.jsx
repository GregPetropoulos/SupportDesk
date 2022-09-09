import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTicket, reset } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const NewTicket = () => {
  // useSelector for auth state
  const { user } = useSelector((state) => state.auth);

  // useSelector for ticket state
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );

  // Initialize dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      //reset the state and navigate to the '/tickets'
      dispatch(reset());
      toast.success();
      navigate('/tickets');
    }
    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatching the local state values(product,description) as an object to the reducer passed as ticketData in ticketSlice
    dispatch(createTicket({ product, description }));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className='flex'>
        <BackButton url='/' />
      </div>
      <section className='flex-col items-center justify-center text-center mb-5'>
        <h1 className=' sm:text-2xl font-bold'>Create New Ticket</h1>
        <p className='text-sm'>Please fill out form below</p>
      </section>

      <section className='flex-row items-center justify-between my-2'>
        <div className='form-control items-center space-y-6 w-full'>
          <label
            htmlFor='name'
            className='input-group input-group-vertical w-auto sm:w-1/2 sm:input-group-lg'>
            <span className=''>Customer Name</span>
            <input
              type='text'
              className='input input-bordered sm:input-lg'
              value={name}
              disabled
            />
          </label>
          <label
            htmlFor='email'
            className='input-group input-group-vertical w-auto sm:w-1/2 sm:input-group-lg'>
            <span>Customer Email</span>
            <input
              type='text'
              className='input input-bordered  sm:input-lg'
              value={email}
              disabled
            />
          </label>
        </div>

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className='flex-col items-center justify-center space-y-6 w-full mt-4 '>
          <div className='form-control items-center'>
            <label
              htmlFor='product'
              className='input-group input-group-vertical'>
              Product
            </label>
            <select
              className='select select-primary select-bordered text-accent  max-w-xs sm:w-full mt-4'
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}>
              <option disable="true">Pick a device</option>
              <option value='iPhone'>iPhone</option>
              <option value='Macbook Pro'>Macbook Pro</option>
              <option value='iMac'>iMac</option>
              <option value='iPad'>iPad</option>
            </select>
          </div>
          <div className='form-control items-center'>
            <label htmlFor='description' className='label-text mb-3'>
              Description of the issue
            </label>
            <textarea
              name='description'
              id='description'
              className='textarea textarea-primary textarea-bordered h-24 text-accent placeholder-accent w-1/2'
              value={description}
              placeholder='Problem Statement, Device, Browser Version, etc '
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className='form-control items-center '>
            <button className='btn btn-block-inline w-1/2'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewTicket;
