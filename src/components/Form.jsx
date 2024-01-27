import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import {collection, addDoc} from 'firebase/firestore';

import {db} from '../lib/firebaseConnection'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log('Form Data: ', data);
      const docData = await addDoc(collection(db,'users'),
      {data:data})
      toast.success('Form Submitted successfully 😉', {
        description: `${data.name} thank you for your message. I will be in contact with you`,
        duration: 5000
      });
    } catch (error) {
      console.error("Error submitting form: ", error);
      toast.error('Failed to submit form. Please try again');
    }
  };

  const handleCopyEmail = () => {
    let email = document.querySelector('#my-mail');
    navigator.clipboard.writeText(email.textContent)
      .then(() => {
        toast.success('Email copied', {
          duration: 5000
        });
      })
      .catch((error) => {
        console.log('Copy to clipboard failed: ', error);
        toast.error('Failed to Copy Email');
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-8 bg-gray-100 rounded-lg">
      <Toaster position='bottom-center' />
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Contact Me</h2>
      </div>

      <div className="mb-4 flex">
        <h2 id='my-mail' className="text-xl text-gray-700">MiguelAngelCabreraVictoria@gmail.com</h2>
        <span className='cursor-pointer' onClick={handleCopyEmail}>
          <img  src="https://i.imgur.com/zHgKDpN.png" alt="Copy Email" className='w-6 h-6 md:ml-10 ml-4'/>
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name='name'
            placeholder='Complete Name'
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 8,
                message: "Name should be at least 8 characters long"
              },
              maxLength: {
                value: 50,
                message: "Name should not exceed 50 characters"
              }
            })}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder='example@mail.com'
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: 'Invalid email format'
              }
            })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            style={{ resize: 'none' }}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            {...register('message', {
              required: 'Message is required'
            })}
          >Leave me a Message</textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
