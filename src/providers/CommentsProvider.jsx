import { useReducer, useId } from 'react';
import { CommentsContext } from '../state/context';
import { commentsReducer } from '../state/reducers';
import moment from 'moment/min/moment-with-locales';
moment.locale('es-mx');

export function CommentsProvider({ children }) {
  const [ comments, dispatch ] = useReducer(commentsReducer, []);
  const commentId = new Date().getTime();

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
          'auth-token': JSON.parse(localStorage.getItem('userCredentials')).token,
        },
        body: JSON.stringify(data)
      });

      const resJson = await fetchData.json();

      dispatch({
        type: 'add',
        payload: {
          ...data,
          date: moment().format('LLL')
        }
      });

    } catch (error) {
      throw new Error(error);
    }
  }

  const deleteComment = async (id) => {
    try {
      await fetch(`http://localhost:9001/api/comment/delete-comment/${ id }`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': JSON.parse(localStorage.getItem('userCredentials')).token,
        },
      });

      dispatch({
        type: 'delete',
        payload: id
      });
    } catch (error) {
      throw new Error(err);
    }
  }

  const values = {
    comments,
    getAllComments,
    createComment,
    deleteComment
  }

  return (
    <CommentsContext.Provider value={ values }>
      { children }
    </CommentsContext.Provider>
  );
}