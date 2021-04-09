import {Post} from "../models";
import {DataStore} from "@aws-amplify/datastore";

const initialState = {
    posts: [],
    isLoading: false,
    page: 0,
    pageSize: 12
};

const LOAD_POST = 'loadPost';
const LOAD_POST_SUCCESSFUL = 'loadPostSuccessful';
const LOAD_POST_FAILED = 'loadPostFailed';


export function postReducers(state = initialState, action) {
    switch (action.type) {
        case LOAD_POST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case LOAD_POST_SUCCESSFUL: {
            return {
                ...state,
                posts: action.data,
                page: action.page,
                pageSize: action.pageSize,
                isLoading: false
            };
        }
        case LOAD_POST_FAILED: {
            return {
                ...state,
                isLoading: false
            };
        }
        default: return state;
    }
}

export const postActions = {
    loadPosts(page = 0, pageSize =  12) {
        return async (dispatch) => {
            dispatch({
                type: LOAD_POST
            });
            try {
                const posts = await DataStore.query(Post);
                dispatch({
                    type: LOAD_POST_SUCCESSFUL,
                    data: posts
                });
            } catch (e) {
                dispatch({
                    type: LOAD_POST_FAILED
                });
            }
        }
    },

    loadHighLightPosts(page = 0, pageSize =  12) {
        return async (dispatch) => {
            dispatch({
                type: LOAD_POST
            });
            try {
                const posts = await DataStore.query(Post);
                const highLightPosts = posts && posts.filter(p => p.isHighlight);
                console.log(posts);
                console.log(highLightPosts);
                dispatch({
                    type: LOAD_POST_SUCCESSFUL,
                    data: highLightPosts
                });
            } catch (e) {
                dispatch({
                    type: LOAD_POST_FAILED
                });
            }
        }
    },
}