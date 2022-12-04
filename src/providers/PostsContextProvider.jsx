import { useEffect, useReducer } from 'react';
import { PostsContext } from '../state/context';
import { postsReducer } from '../state/reducers';
import { postCreateService, postDeleteService, postGetAllService, postUpdateService } from '../services';
import { toast } from 'react-toastify';

const initialState = [];

export function PostsContextProvider({ children }) {
	const [ posts, dispatch ] = useReducer(postsReducer, initialState);
	
	useEffect(() => {
		getAllPosts();
	},[]);
	
	const getAllPosts = () => {
		postGetAllService().then(data => {
			dispatch({
				type: 'getAll',
				payload: data
			});
		}).catch(err => {
			throw new Error(err);
		});
	};
	
	const deletePost = (id) => {
		postDeleteService(id).then(r => {
			dispatch({
				type: 'delete',
				payload: { id }
			});
		}).catch(err => {
			throw new Error(err);
		});
	};
	
	const addPost = (post) => {
		postCreateService(post).then(r => {
			dispatch({
				type: 'add',
				payload: post
			});
		}). catch(err => {
			throw new Error(err);
		})
	};
	
	const updatePost = (post, id) => {
		postUpdateService(post, id).then(r => {
			dispatch({
				type: 'update',
				payload: {
					id,
					...post
				}
			});
		}). catch(err => {
			throw new Error(err);
		})
	};
	
	const value = {
		posts,
		deletePost,
		addPost,
		updatePost
	}
	
	return (
		<PostsContext.Provider value={ value }>
			{ children }
		</PostsContext.Provider>
	);
}