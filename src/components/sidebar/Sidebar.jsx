import React, { useState } from 'react';
import './Sidebar.css';
import { 
  LayoutDashboard, 
  User, 
  Bell, 
  MessageSquare, 
  Star, 
  Settings, 
  HelpCircle, 
  Phone 
} from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, badge: null },
    { name: 'My profile', icon: User, badge: null },
    { name: 'Job alerts', icon: Bell, badge: 2 },
    { name: 'Messages', icon: MessageSquare, badge: null },
    { name: 'Saved', icon: Star, badge: null },
    { name: 'Settings', icon: Settings, badge: null },
    { name: 'FAQ', icon: HelpCircle, badge: null },
    { name: 'Contacts', icon: Phone, badge: null }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
      
        <h3>Kamalhujazov N.</h3>
        <p>Student</p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.name}
              className={`menu-item ${activeItem === item.name ? 'active' : ''}`}
              onClick={() => setActiveItem(item.name)}
            >
              <IconComponent size={20} />
              <span>{item.name}</span>
              {item.badge && <span className="badge">{item.badge}</span>}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;