import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import img from "assets/images/b3.png";
import img1 from "assets/images/001.png";
import img2 from "assets/images/002.png";
import img3 from "assets/images/003.png";
import img4 from "assets/images/004.png";
import img5 from "assets/images/005.png";
import img6 from "assets/images/006.png";

const sidebar = (props) => {

    /*--------------------------------------------------------------------------------*/
    /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
    /*--------------------------------------------------------------------------------*/
    const expandLogo = () => {
        document.getElementById("logobg").classList.toggle("expand-logo");
    }
    /*--------------------------------------------------------------------------------*/
    /*Verifies if routeName is the one active (in browser input)                      */
    /*--------------------------------------------------------------------------------*/

    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? 'selected' : '';
    }

    return (
        // <aside className="left-sidebar" id="sidebarbg" data-sidebarbg="skin6" onMouseEnter={expandLogo.bind(null)} onMouseLeave={expandLogo.bind(null)}>
        //     <div className="scroll-sidebar">
                <nav id="sidebar" className="sidebar-main">
                    <h1><img className="sidebar-head" src={img} /></h1>
                    <ul className="list-unstyled components mb-5">
                        <li className="sidebar-itm">
                            <img className="sidebar-img" src={img1}/>
                        </li>
                        <li className="sidebar-itm">
                            <img className="sidebar-img" src={img2}/>
                        </li>
                        <li className="sidebar-itm">
                            <img className="sidebar-img" src={img3}/></li>
                        <li className="sidebar-itm">
                            <img className="sidebar-img" src={img4}/></li>
                        <li className="sidebar-itm">
                            <img className="sidebar-img" src={img5}/></li>
                    </ul>
                </nav>
            // </div>
        // </aside>
    );
}
export default sidebar;
