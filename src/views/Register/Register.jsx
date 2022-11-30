import { toast } from 'react-toastify';
import useForm from "../../hooks/useForm";
import { registerService } from "../../services";
import { useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();
  const { formData, handleInputChange, reset } = useForm({
    name: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    registerService(formData).then(r => {
      console.log(r);
      
      if (r?.status === 'error') {
        toast.error(r.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        reset();
  
        toast.success('Usuario creado, inicia sesion', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  
        navigate('/iniciar-sesion');
      }
      
    });
  }
  
  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form
            className='space-y-6'
            action='#'
            method='POST'
            onSubmit={ handleSubmit }
          >
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Nombre
              </label>
              <div className='mt-1'>
                <input
                  id='name'
                  name='name'
                  type='text'
                  autoComplete='Nombre'
                  required
                  onChange={ handleInputChange }
                  value={ formData.name }
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='lastname'
                className='block text-sm font-medium text-gray-700'
              >
                Apellido
              </label>
              <div className='mt-1'>
                <input
                  id='lastname'
                  name='lastname'
                  type='text'
                  autoComplete='lastname'
                  required
                  onChange={ handleInputChange }
                  value={ formData.lastname }
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  onChange={ handleInputChange }
                  value={ formData.email }
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Contraseña
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  minLength="8"
                  onChange={ handleInputChange }
                  value={ formData.password }
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}