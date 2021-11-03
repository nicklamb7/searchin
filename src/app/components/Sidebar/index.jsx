import React from 'react';
import './style.scss';
import SidebarLink from '../SidebarLink';

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <div className="top-section">
        <div className="profile-image"></div>
        <h3 className="user-name">Nick Lamb</h3>
      </div>
      <div className="middle-section">
        <ul>
          <SidebarLink title="Home"/>
          <SidebarLink title="Searching"/>
          <SidebarLink title="Suggestions"/>
          <SidebarLink title="Listings"/>
          <SidebarLink title="Orders"/>
          <SidebarLink title="Profile"/>
          <SidebarLink title="Settings"/>
        </ul>
      </div>
      <div className="bottom-section">
        <button>Try Searchin Pro</button>
      </div>
    </aside>
  )
}

export default Sidebar;
