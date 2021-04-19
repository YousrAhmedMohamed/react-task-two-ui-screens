import React, { useState } from "react";
import Logo from '../../assets/images/logo.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Bell from '../../assets/images/bell.png';
import { Link } from "react-router-dom";

export default function Header() {

    const [activeTab, setActiveTab] = useState('0');
    const tabs = [{ id: '0', name: "Projects" }, { id: '1', name: "Community" }, { id: '2', name: "Courses" }]
    return (<div className="header-body">
        <div className="tabs">
            <img src={Logo} className="logo" alt="logo" />
            {tabs.map(tab => <Link to={`/${tab.name}`} className="link">
                <span onClick={() => setActiveTab(tab.id)}
                    id={tab?.id}
                    className={tab?.id === activeTab ? 'active' : 'disable'}
                >{tab?.name}</span>
            </Link>)}
        </div>
        <div className="user">
            <img src={Bell} alt="bell" />
            <NotificationsIcon />
            <span className="user-span">User</span>
        </div>
    </div >)
}