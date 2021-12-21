import "./comment.css";
import { MoreVert} from "@material-ui/icons";
import {BookmarkAdd,ThumbUpOutlinedIcon,ThumbUpIcon } from "@mui/icons-material"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Comment({comment}) {
  const [like, setLike] = useState(comment.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(comment.likes.includes(currentUser._id));
  }, [currentUser._id, comment.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${comment.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [comment.userId]);

  const likeHandler = () => {
    try {
      axios.put("/comments/" + comment._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
    return (
        <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <Link to={`/profile/${user.username}`}>
                <img
                  className="postProfileImg"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                />
              </Link>
              <span className="postUsername">{user.username}</span>
              <span className="postDate">{format(comment.createdAt)}</span>
            </div>
            <div className="postTopRight">
              <BookmarkAdd  />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{comment?.desc}</span>
            <img className="postImg" src={PF + comment.img} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src={`${PF}like.png`}
                onClick={likeHandler}
                alt=""
              />  
              <span className="postLikeCounter">{like} people liked this</span>
            </div>
          </div>
        </div>
      </div>
    );
}
