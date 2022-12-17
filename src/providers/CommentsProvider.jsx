import { useReducer, useId } from 'react';
import { CommentsContext } from '../state/context';
import { commentsReducer } from '../state/reducers';

export function CommentsProvider({ children }) {
  const [ comments, dispatch ] = useReducer(commentsReducer, []);
  const commentId = useId();

  const getAllComments = async (id) => {
    try {
      const fetchData = await fetch(`http://localhost:9001/api/comments/${ id }`);
      const restJson = await fetchData.json();

      dispatch({
        type: 'getAll',
        payload: restJson
      });

    } catch (error) {
      throw new Error(error);
    }
  };

  const createComment = async (comment, idPost, idUser) => {
    try {

      const data = {
        text: comment,
        "fk_post": idPost,
        "fk_user": idUser,
        "_id": commentId
      }

      const fetchData = await fetch('http://localhost:9001/api/comment/create-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const resJson = await fetchData.json();

      dispatch({
        type: 'add',
        payload: data
      });

    } catch (error) {
      throw new Error(error);
    }
  }

  const values = {
    comments,
    getAllComments,
    createComment
  }

  return (
    <CommentsContext.Provider value={ values }>
      { children }
    </CommentsContext.Provider>
  );
}