import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChatBubbleBottomCenterIcon, ChevronLeftIcon } from '@heroicons/react/24/outline/index.js';
import { Note } from './Note';

export function NoteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ post, setPost ] = useState({});
  const [ comments, setComments ] = useState([]);

  useEffect(() => {

    getpostbyId(id)
      .then(res => {
        setPost(res);
      });

      setTimeout(() => {

        getAllComments(id)
          .then(res => {
            setComments(res);
          });

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

  const getAllComments = async (id) => {
    try {
      const fetchData = await fetch(`http://localhost:9001/api/comments/${ id }`);
      return await fetchData.json();
    } catch (error) {
      throw new Error(error);
    }
  };

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
          {/* { JSON.stringify(post) } */}
        </div>

        <div className='flex flex-col gap-5 px-2 pt-2 w-4/12'>
          <div>
            <form
              action=""
              method="post"
              className='text-end'
              >
              <div>
                <label htmlFor="comment" className='sr-only'>Comentario</label>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder='Escribe un comentario'
                  className="w-full h-24 border shadow-sm rounded"
                  ></textarea>
              </div>
              <button type='submit' className='px-3 py-2 bg-indigo-600 text-white rounded'>Comentar</button>
            </form>
          </div>
          <div className='relative h-full overflow-y-auto'>
            <div className='sticky top-0 w-full h-10 rotate-180 bg-gradient-to-t from-white'></div>
            <div className='space-y-2'>
              {
                comments.length <= 1 &&
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