export function Note({ title, name}) {
  return (
    <div className='flex flex-col gap-3 p-2 border shadow-sm rounded-lg'>
      <div>
        <p>{ title }</p>
      </div>
      <div className='flex items-center gap-2'>
        <div className='block w-10 h-10 bg-gray-600 rounded-full'></div>
        <span>{ name }</span>
      </div>
    </div>
  );
}