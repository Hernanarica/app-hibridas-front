import useForm from '../../hooks/useForm';
import { login } from '../../services';

export function Login() {
  const { formData, handleInputchange, reset } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    login(formData);

    reset();
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
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  onChange={ handleInputchange }
                  value={ formData.email }
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Contraseña
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  onChange={ handleInputchange }
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
                Iniciar sesion
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
