import "./topbar.css";
import { Search, Person, Chat, Notifications,Anchor } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import 'bootstrap/dist/css/bootstrap.css';

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    // <div className="topbarContainer">
    //   <div className="topbarLeft">
    //     <Link to="/" style={{ textDecoration: "none" }}>
    //     <span className="logo">COLLEGE PORT  <Anchor style={{ position: "absolute", top: "17px"}}/></span>
    //     </Link>
    //   </div>
    //   <div className="topbarCenter">
    //     <div className="searchbar">
    //       <Search className="searchIcon" />
    //       <input
    //         placeholder="Search for friend, post or video"
    //         className="searchInput"
    //       />
    //     </div>
    //   </div>
    //   <div className="topbarRight">
    //     <div className="topbarLinks">
    //       <span className="topbarLink">Homepage</span>
    //       <span className="topbarLink">Timeline</span>
    //     </div>
    //     <div className="topbarIcons">
    //       <div className="topbarIconItem">
    //         <Person />
    //         <span className="topbarIconBadge">1</span>
    //       </div>
    //       <div className="topbarIconItem">
    //         <Chat />
    //         <span className="topbarIconBadge">2</span>
    //       </div>
    //       <div className="topbarIconItem">
    //         <Notifications />
    //         <span className="topbarIconBadge">1</span>
    //       </div>
    //     </div>
    //     <Link to={`/profile/${user.username}`}>
    //       <img
    //         src={
    //           user.profilePicture
    //             ? PF + user.profilePicture
    //             : PF + "person/noAvatar.png"
    //         }
    //         alt=""
    //         className="topbarImg"
    //       />
    //     </Link>
    //   </div>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-light  " style={{backgroundColor: "#6dfffa"}} >
  <div class="container-fluid p-3" >
  <Link to="/" style={{ textDecoration: "none" }}>
    <span className="logo me-5">COLLEGE PORT  <Anchor style={{ position: "absolute", top: "30px"}}/></span>
    </Link>
    <div class="container-sm w-50 ">
    <form class="d-flex ">
        <input class="form-control rounded"  type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success " type="submit">Search</button>
      </form>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  ms-auto me-5 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {user.username}
           
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Bookmarks</a></li>
            <li><a class="dropdown-item" href="/changeDetails">Change Details</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/logout">Log out</a></li>
          </ul>
        </li>
      </ul> 
    </div>
  </div>
</nav>

  );
}