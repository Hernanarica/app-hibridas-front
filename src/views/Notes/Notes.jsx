import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Notes() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then(res => {
        setPosts(res);
      })
  }, []);

  const getAllPosts = async () => {
    try {
      const fetchData = await fetch('http://localhost:9001/api/posts');
      return await fetchData.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  if(posts.length < 1) return <h1>Loading...</h1>

  return (
    <div className='bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8'>
      <div className='relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl'>
        <div className='mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
          {
            posts.map(post => (
              <div key={ post._id }>
                <p className='text-sm text-gray-500'>
                  <time dateTime='2020-03-16'>{ post.created }</time>
                </p>
                <div className='mt-2 block'>
                  <p className='text-xl font-semibold text-gray-900'>
                    { post.title }
                 </p>
                 <p className='mt-3 text-base text-gray-500'>
                    { post.text }
                 </p>
              </div>
              <div className='mt-3'>
                 <Link
                     to={ `/post/detalle/${ post._id }` }
                     className='text-base font-semibold text-indigo-600 hover:text-indigo-500'
                 >
                    Ver más
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
