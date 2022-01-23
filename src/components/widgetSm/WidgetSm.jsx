import React from 'react';
import './widgetSm.css';
import Avatar from '../../images/avatar-perfil.jpg';
import { Visibility } from '@material-ui/icons';

export function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmItem">
                    <img src={Avatar} alt="avatarUser" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Vitor Mota</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>
						Display
                    </button>
                </li>
				<li className="widgetSmItem">
                    <img src={Avatar} alt="avatarUser" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Vitor Mota</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>
						Display
                    </button>
                </li>
				<li className="widgetSmItem">
                    <img src={Avatar} alt="avatarUser" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Vitor Mota</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>
						Display
                    </button>
                </li>
				<li className="widgetSmItem">
                    <img src={Avatar} alt="avatarUser" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Vitor Mota</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>
						Display
                    </button>
                </li>
				<li className="widgetSmItem">
                    <img src={Avatar} alt="avatarUser" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Vitor Mota</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className='widgetSmIcon'/>
						Display
                    </button>
                </li>
            </ul>
        </div>
    );
}
