import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'

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
            <div className="scroll-sidebar">
            <Sidebar bgColor='black' isCollapsed={false}>
    
        <DropdownItem
          values={['First', 'Second', 'Third']}
          bgColor={'black'}>
        </DropdownItem>

        <Item bgColor='black'>
          <Icon><i className="fas fa-home"/></Icon>
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-info"/></Icon>
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-sitemap"/></Icon>
        </Item>
        <Item bgColor='black'>
          <Icon><i className="far fa-address-book"/></Icon>
        </Item>
        <Item bgColor='black'>
          <Icon><i className="fas fa-rss-square"/></Icon>
        </Item>
      </Sidebar>
            </div>
        // </aside>
    );
}
export default sidebar;
