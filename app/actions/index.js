import { FETCH_POSTS } from './constants'

export function fetchPosts = () => ({
	type: FETCH_POSTS,
	payload: { response: [] } //mock data
})