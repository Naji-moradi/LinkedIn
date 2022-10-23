import React from "react";
import { NAVBAR_ICONS, Posts_Data } from "../data/data";

import PublicIcon from "@mui/icons-material/Public";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import img1 from "../assets/image.jpg";

const Posts = () => {
  return (
    <div className="middleSide">
      <div className="top">
        <div className="searchDiv">
          <img src="https://najinet.com/img/naji3.png" alt="" />
          <input
            className="postInput"
            type="text"
            placeholder="Start a post"
            // disabled
          />
        </div>

        <div className="buttons">
          {NAVBAR_ICONS.map((el, i) => (
            <NavbarIcons key={i} icon={el.icon} text={el.text} />
          ))}
        </div>
      </div>
      {/* line after posting place start */}
      <div className="py-1 middleLine">
        <div class=" childp1 line-1"></div>
        <div className=" childp2 d-flex justify-content-between">
          <p>sort:</p>
          <p>Top</p>
          <p>▾</p>
        </div>
      </div>
      {/* line after posting place end */}
      {Posts_Data.map((el, i) => (
        <UserPosts
          key={i}
          avatar={el.avatar}
          name={el.name}
          about_avatar={el.about_avatar}
          about_post={el.about_post}
          post_picture={el.post_picture}
          time={el.time}
          likes={el.likes}
          icons={el.icons}
        />
      ))}
    </div>
  );
};

export default Posts;

const NavbarIcons = (props) => {
  return (
    <div className="btnicon">
      <span>{props.icon}</span>
      <span className="icontext">{props.text}</span>
    </div>
  );
};

function UserPosts(props) {
  return (
    <div className="postsMainDiv">
      <div className="d-flex justify-content-between border-bottom p-2">
        <div className=" d-flex justify-content-between ">
          <img className="profile-img1 pr-2" alt="imag" src={img1} />
          <p className="pl-2">
            <small>Ahmad likes this</small>
          </p>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="useDetails">
        <div className="avatarDetails">
          <img className="userAvatar" src={props.avatar} alt="" />
          <div>
            <h4>{props.name}</h4>
            <p>{props.about_avatar}</p>
            <div className="postime">
              <p>{props.time}</p>
              <div className="dot"></div>
              <PublicIcon className="earthIcon" />
            </div>
          </div>
        </div>
        <div className="followbtn align-middle">
          <p>+</p>
          <h5 className="pt-1">Follow</h5>
        </div>
      </div>
      <div className="aboutPost">
        <p>{props.about_post}</p>
      </div>
      <div className="postPicture">
        <img src={props.post_picture} alt="" />
      </div>
      <div className="likes">
        <div className="likeIcon">
          <div>
            <ThumbUpOffAltIcon fontSize="small" />
          </div>
          <div className="lightIcon">
            <TipsAndUpdatesIcon fontSize="small" />
          </div>
          <div className="lightIcon">
            <FavoriteBorderIcon fontSize="small" />
          </div>
        </div>
        <p>{props.likes}</p>
      </div>
      <div className="hr"></div>
      <div className="viewerReactionMain">
        {props.icons.map((e, i) => (
          <div key={i} className="viewerReaction">
            <h6>{e.icon}</h6>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
