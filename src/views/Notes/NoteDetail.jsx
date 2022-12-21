import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ChatBubbleBottomCenterIcon, ChevronLeftIcon } from '@heroicons/react/24/outline/index.js';
import useForm from '../../hooks/useForm';
import { CommentsContext, UserContext } from '../../state/context';
import { Note } from './Note';

export function NoteDetail() {
  const { comments, getAllComments, createComment } = useContext(CommentsContext);
  const { state: { _id: idUser } } = useContext(UserContext);
  const { id: idPost } = useParams();
  const navigate = useNavigate();
  const [ post, setPost ] = useState({});
  const { formData: { comment }, handleInputChange, reset } = useForm({
    comment: ''
  });

  useEffect(() => {

    getpostbyId(idPost)
      .then(res => {
        setPost(res);
      });

      setTimeout(() => {
        getAllComments(idPost);
    }, 500);

  }, []);

  const getpostbyId = async (id) => {
    try {
      const fetchData = await fetch(`http://localhost:9001/api/post/${id}`);
      return await fetchData.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    createComment(comment, idPost, idUser)
      .then(res => {

        reset();

        toast.success('Comentario creado', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }

  return (
    <section className='w-full h-[calc(100vh-64px)]'>
      <div className='p-2'>
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={ () => navigate('/notas') }
        >
          <ChevronLeftIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          Volver
        </button>
      </div>
      <div className='flex h-full'>
        <div className='w-8/12 p-2'>
          <h2 className='text-4xl font-medium'>{ post.title }</h2>
          <hr className='my-2' />
          <p>{ post.text }</p>
        </div>
        <div className='flex flex-col gap-5 px-2 pt-2 w-4/12'>
          <div>
            <form
              action="#"
              method="post"
              className='text-end'
              onSubmit={ handleSubmit }
              >
              <div>
                <label htmlFor="comment" className='sr-only'>Comentario</label>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder='Escribe un comentario'
                  className="w-full h-24 border shadow-sm rounded"
                  onChange={ handleInputChange }
                  value={ comment }
                  ></textarea>
              </div>
              <button type='submit' className='px-3 py-2 bg-indigo-600 text-white rounded'>Comentar</button>
            </form>
          </div>
          <div className='relative h-full overflow-y-auto'>
            <div className='sticky top-0 w-full h-10 rotate-180 bg-gradient-to-t from-white'></div>
            <div className='space-y-2'>
              {
                comments.length < 1 &&
                <div className='flex items-center justify-center gap-2 bg-indigo-600 py-2 rounded text-center font-medium text-white'>
                  <ChatBubbleBottomCenterIcon className='h-6 w-6'/>
                  Sin comentarios
                </div>
              }
              {
                comments.length >= 1 && <Note comments={ comments } />
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}