import React, { useState } from "react";
import Face from '../../assets/icons/Face.png';
import Home from '../../assets/icons/Home.png';
import Icon from '../../assets/icons/Icon.png';
import Time from '../../assets/icons/Time.png';
import Video from '../../assets/icons/Video.png';
import Avatar from '../../assets/icons/Avatar.jpg';
import Search from '../../assets/icons/Search.png';
import {SidebarWrap, MenuItem, ProfileInfo, Profile, AdditionalMenu} from "./Sidebar.styles";


const sidebarData=[
    {
        icon:Search,
        name:"Search"
    },
    {
        icon:Home,
        name:"Home"
    },
    {
        icon:Video,
        name:"TV Shows"
    },
    {
        icon:Icon,
        name:"Movies"
    },
    {
        icon:Face,
        name:"Genres"
    },
    {
        icon:Time,
        name:"Watch Later"
    }
]

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SidebarWrap isOpen={isOpen}>
            <Profile  isOpen={isOpen}
                      onMouseEnter={() => setIsOpen(true)}
                      onMouseLeave={() => setIsOpen(false)}>
                <ProfileInfo isOpen={isOpen}>
                    <img src={Avatar} alt="Profile Picture"/>
                    <span>Daniel</span>
                </ProfileInfo>
                    {sidebarData.map((item, index) => (
                        <MenuItem key={index} isOpen={isOpen}>
                            <div className={`${item.name === "Home" && isOpen ? "activeRow": "row"}`}>
                                <img src={item.icon} alt={item.name} />
                                <span className={`${item.name === "Home" ? "activeName": "name"}`}>{item.name}</span>
                            </div>
                        </MenuItem>
                    ))}
                </Profile>
                <AdditionalMenu isOpen={isOpen}>
                    <span>Language</span>
                    <span>Get Help</span>
                    <span>Exit</span>
                </AdditionalMenu>
        </SidebarWrap>
    );
}

export default Sidebar;