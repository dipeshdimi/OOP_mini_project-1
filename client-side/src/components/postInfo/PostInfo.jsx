import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./postInfo.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Comment from "../comment/Comment";

export default function PostInfo({ post}) {
  const [comments, setComments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/"+ post._id+ "/comments" );
      setComments(
        res.data
      );
    };
    fetchPosts();
  }, [post, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {comments.map((p) => (
          <Comment key={p._id} comment={p} />
        ))}
      </div>
    </div>
  );
}