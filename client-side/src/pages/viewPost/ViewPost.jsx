import React from 'react'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./viewPost.css";
import PostInfo from '../../components/postInfo/PostInfo';
import MakeComments from '../../components/makeComments/MakeComments';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Post from '../../components/post/Post';

export default function ViewPost() {
   
    const postId = useParams().postId;
    const [posts, setPosts] = useState('');
    useEffect(() => {
    if(postId) {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/" + postId);
      setPosts(
        res.data
      );
    };
    fetchPosts();
  }
  }, [postId]);
    console.log(posts);
    return (
    <>
      
      <Topbar />
      <div className="homeContainer">
        <Sidebar/>
      <div className="makeComment">
        <MakeComments post={posts}/>
      </div>
        <PostInfo post={posts}/>
      <div  className="postContainer">
        <Post post={posts}/>
        </div>
        <Rightbar/>
      </div>
    </>
    );
}
