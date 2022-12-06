import { useReducer } from 'react';
import { PostsContext } from '../state/context';
import { postsReducer } from '../state/reducers';
import { postDeleteService, postGetAllService } from '../services';

const initialState = [];

export function PostsContextProvider({ children }) {
	const [ posts, dispatch ] = useReducer(postsReducer, initialState);
	
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
	
	const value = {
		posts,
		getAllPosts,
		deletePost,
	}
	
	return (
		<PostsContext.Provider value={ value }>
			{ children }
		</PostsContext.Provider>
	);
}