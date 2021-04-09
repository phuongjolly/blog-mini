import React, {useEffect} from "react";
import {postActions} from "../redux/PostReducers";
import {connect} from "react-redux";

function Posts({ posts, loadPosts }) {
    useEffect(() => {
        loadPosts();
    });

    return (
        <div>
            {posts && posts.map(p => <div key={p.id}>{p.content}</div>)}
        </div>
    );
}

export default connect(
    state => state.posts,
    postActions
)(Posts);