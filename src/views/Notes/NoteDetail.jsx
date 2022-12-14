import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Note } from './Note';

const postContent = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum?',
    name: 'My name is ...',
  },
];

export function NoteDetail() {
  const { id } = useParams();
  const [ post, setPost ] = useState({});
  const [ comments, setComments ] = useState([]);

  useEffect(() => {
    getpostbyId(id)
      .then(res => {
        setPost(res);
      });

    // getAllComments(id)
    //   .then(res => {
    //     console.log(res);
    //   });
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
      const fetchData = await fetch(`http://localhost:9001/api/comment/getAll/${id}`);
      return await fetchData.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section className='w-full flex h-[calc(100vh-64px)]'>
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
            { postContent.map(item => <Note { ...item } /> ) }
          </div>
        </div>

      </div>
    </section>
  );
}
