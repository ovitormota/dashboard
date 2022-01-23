import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import avatar from '../../images/avatar-perfil.jpg';
import { Link } from 'react-router-dom';

export function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="/">
                        <button className="logo">Admin Panel</button>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone className="topIcon" />
                        <span className="topIconBadge">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language className="topIcon" />
                        <span className="topIconBadge">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings className="topIcon" />
                    </div>
                    <img src={avatar} className="topAvatar" />
                </div>
            </div>
        </div>
    );
}
