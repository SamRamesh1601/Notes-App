import React from "react";
import { IoIosSearch } from "react-icons/io";
import { TbDeviceTabletSearch } from "react-icons/tb";
import { MdArrowForwardIos } from "react-icons/md";
import { TbBellFilled } from "react-icons/tb";
import logoImg from "../Assets/logo.jpg"
import { PiArrowClockwiseBold } from "react-icons/pi";
import { CiGrid2H } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";

const Navbar = ({
  searchName,
  changeSearchName,
  searchPlaceholder,
  notesTile,
  styleView,
  changeStyleView,
  refreshAction
}) => {
  return (
    <div className="navbar-App">

      <div className={`nav-search-container ${!notesTile && 'not-selected'}`}>
        <span className="nav-icon">
          <IoIosSearch />
        </span>
        <input
          type="text"
          name="noteName"
          onChange={changeSearchName}
          value={searchName}
          placeholder={searchPlaceholder}
        />
      </div>

      {
       notesTile && 
      <div className="nav-selected-notes">
        <span className="nav-icon small">
          <TbDeviceTabletSearch />
        </span>
        <span className="note-selected-text">{notesTile || 'Untilled'}</span>
        <span className="nav-icon small">
          <MdArrowForwardIos />
        </span>
      </div>
        }

    <div className="nav-login-container">
        <span className="nav-icon logo" onClick={() => changeStyleView()}>
          {styleView ? <CiGrid41 /> :
          <CiGrid2H /> }
        </span>
        <span className="nav-icon logo" onClick={() => refreshAction()}>
          <PiArrowClockwiseBold />
        </span>
        <span className="nav-icon logo">
          <TbBellFilled />
        </span>
           <img className="nav-logo" src={logoImg} alt="Logo" />
      </div>

    </div>
  );
};

export default Navbar;
