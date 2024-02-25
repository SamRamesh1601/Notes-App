import React, { useState, useRef} from 'react'
import { MdOutlineLocalPostOffice,MdOutlineWorkHistory } from "react-icons/md";
import { BsCalendar2Plus,BsCamera } from "react-icons/bs";
import { IoImageOutline,IoShareOutline,IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { LuTrash } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";
import { IoReorderThree } from "react-icons/io5";
import { MdOutlineWebhook } from "react-icons/md";
import { PiNotePencilDuotone } from "react-icons/pi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import AddNote from '../Pages/AddNote';

const Sidebar = ({ open }) => {
  const [toggleOpen, setToggleOpen] = useState(false)
  const isOpen = Boolean(toggleOpen);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const onNavigation = (path) => {
    navigate(path);
  }
  const handleMouseEnter = () => {
    setToggleOpen(true);
    };

    const handleMouseLeave = () => {
        setToggleOpen(false);
        
    };
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login')
    }
  const [showAddNotes, setShowAddNotes] = useState(false);

  const sidebarNav = [
    { name : 'Home' , img : <IoHomeOutline />, path : '/'}, 
    { name : 'New Notes' , img : <PiNotePencilDuotone />},
    { name : 'Remainder' , img : <HiOutlineBellAlert />},
    { name : 'Archieve' , img : <IoArchiveOutline />},
    { name : 'Trash' , img : <LuTrash />},
  ]
  return (
    <>
    {
      showAddNotes && <AddNote onClose={() => setShowAddNotes(false)} />
    }
     {/* <div className={`sidebar-app ${!isOpen && 'not-open'} basic-center-div `} ref={sidebarRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > */}
      <div className={`sidebar-app ${!isOpen && 'not-open'} basic-center-div flex-col`} >
            <div className={`sidebar-head basic-center-div  ${!isOpen && 'not-open'}`}>
              <div className={`mini-head-text unique ${!isOpen && 'not-show'}`}>CreatiNote</div>
              <span className='side-icon outline' onClick={() => setToggleOpen(!toggleOpen)}>{isOpen ? <MdOutlineWebhook /> : <IoReorderThree />}</span>

            </div>
            <div className={`mini-sub-sidebar ${!isOpen && 'not-open'} basic-center-div flex-col`}>
                {
                    sidebarNav.map((nav) => {
                        return(
                            <div onClick={() => nav.name === 'New Notes' ? setShowAddNotes(true) :onNavigation(nav.path || '/')} className={`mini-mini-sub-sidebar basic-center-div ${!isOpen && 'not-open'}`}>
                                <div className={`side-icon small ${!isOpen && 'not-open'}`}>{nav.img}</div>
                                <div className={`mini-head-text ${!isOpen && 'not-show'}`}>{nav.name}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={`sidebar-head bottom  basic-center-div ${!isOpen && 'not-open'}`}>
              <span className='side-icon'><MdOutlineSettings /></span>
              <div className={`mini-head-text big ${!isOpen && 'not-show'}`}>Settings</div>
            </div>
    </div>
    </>
  )
}

export default Sidebar

{/* <span className={`three-dot-icon ${!isOpen && 'not-open'}`}  onClick ={(e) => {  setToggleOpen(!toggleOpen); e.stopPropagation(); }} >{!isOpen ? <IoReorderThree /> : <IoCloseOutline />}</span> */}