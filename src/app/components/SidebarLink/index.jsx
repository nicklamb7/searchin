import React from 'react';
import './style.scss';

function SidebarLink(props) {
  return (
    <li className="sidebar-link">
      {props.title}
    </li>
  )
}

export default SidebarLink;
