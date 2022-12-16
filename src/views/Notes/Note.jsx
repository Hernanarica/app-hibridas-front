import { toast } from "react-toastify";
import { TrashIcon } from "@heroicons/react/24/outline";
import {useContext} from "react";
import {UserContext} from "../../state/context/index.js";

export function Note({ comments }) {
   const { state } = useContext(UserContext);
  const handleDeleteNote = (id) => {
    console.log('Deleting...', id);

    fetch(`http://localhost:9001/api/comment/delete-comment/${ id }`, {
      method: 'DELETE'
    }).then(res => {
      console.log(res);

      toast.success('Comentario eliminado', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }).catch(err => {
      throw new Error(err);
    })
  }
  
  return (
    <>
      {
        comments.map(comment => (
          <div className='flex flex-col gap-3 p-2 border shadow-sm rounded-lg' key={ comment._id }>
            <div>
              <p>{ comment.text }</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className="text-sm text-gray-500">{ comment.date }</span>
               { state._id === comment.fk_user && (
                   <button className="p-1" onClick={ () => handleDeleteNote(comment._id) }>
                      <TrashIcon className="h-4 w-4 text-red-600" />
                   </button>
               )}
            </div>
          </div>
        ))
      }
    </>
  );
}