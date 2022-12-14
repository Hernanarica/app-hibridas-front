export function Note({ comments }) {
  return (
    <>
      {
        comments.map(comment => (
          <div className='flex flex-col gap-3 p-2 border shadow-sm rounded-lg' key={ comment._id }>
            <div>
              <p>{ comment.text }</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='block w-10 h-10 bg-gray-600 rounded-full'></div>
              <span>{ comment.date }</span>
            </div>
          </div>
        ))
      }
    </>
  );
}