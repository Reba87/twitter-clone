import { NavLink} from "react-router-dom";
import "./leftPane.scss";
import {twitter,home,explore,notifications,messages,bookmarks,list,profile,more} from "./icons" 

const LeftPane = () => {
  return (
    <div className="left-pane">
      <div className="container">
        <header>{twitter}</header>
        <nav>
          <NavLink to="/">
            <span>{home}Home</span>
          </NavLink>
          <NavLink to="/explore">
            <span>{explore}Explore</span>
          </NavLink>
          <NavLink to="/notifications">
            <span>{notifications}Notifications</span>
          </NavLink>
          <NavLink to="/messages">
            <span>{messages}Messages</span>
          </NavLink>
          <NavLink to="/bookmarks">
            <span>{bookmarks}Bookmarks</span>
          </NavLink>
          <NavLink to="/lists">
            <span>{list}Lists</span>
          </NavLink>
          <NavLink to="/profile">
            <span>{profile}Profile</span>
          </NavLink>
          <button className="more">
            <span>{more}More</span>
          </button>
        </nav>
        <buton className="tweet">Tweet</buton>

        <footer>
          <buton className="accout">
            <div className="photo">
              <img
                alt="user"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU"
              />
            </div>
            <div className="">
              <div className="name"> Rafael Bravo</div>
              <div className="username">@RafaelBravo</div>
            </div>
          </buton>
        </footer>
      </div>
    </div>
  );
};

export default LeftPane;
