import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/vancouver/home',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'Jobs',
        path: '/vancouver/jobs',
        icon: <BsIcons.BsFillBagFill/>
    },
    {
        title: 'Workers',
        path: '/vancouver/workers',
        icon: <BsIcons.BsPeople/>
    },
    {
        title: 'Employers',
        path: '/vancouver/employers',
        icon: <BsIcons.BsFillPeopleFill/>
    },
    {
        title: 'Finances',
        path: '/vancouver/finances',
        icon: <FaIcons.FaDollarSign/>
    },
    {
        title: 'Settings',
        path: '/vancouver/settings',
        icon: <IoIcons.IoIosSettings />
    }
]