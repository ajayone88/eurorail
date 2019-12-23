import React  from "react";
import Classes  from "./Header.css";
import { Link } from "react-router-dom";


const Header = (props) => {
    return(
       <div className={Classes.HeaderContainer}>
          <div className={Classes.HeaderInnerContainer}>
              <div className={Classes.HeaderTitle}>
                  <label>Eurorail</label>
              </div>
              <div className={Classes.Header}>
                  <div className={Classes.HeaderReact}></div>
                  <nav>
                      <ul>
                          <li><Link to={"/"}>Home</Link></li>
                          <li><Link to={"/contact-list"}>Contact List</Link></li>
                      </ul>
                  </nav>
                  <div className={Classes.BurgerMenu} onClick={props.click}>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
              </div>
              <div className={Classes.BurgerMenuOptions} onClick={props.click}>
                  <div  className={Classes.BurgerMenuOptionsBlock} style={props.display ? {display:'none'} : {display:'block'}}>
                      <div><Link to={"/"}>Home</Link></div>
                      <div><Link to={"/contact-list"}>Contact List</Link></div>
                  </div>
              </div>
          </div>
       </div>
    );
};

export default Header