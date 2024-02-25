import React, { useEffect, useState } from 'react'
import LoadingImg from "../Assets/Loading.gif"
import Navbar from '../Components/Navbar';
import { PiNotePencilDuotone } from "react-icons/pi";
import NotesContainer from '../Components/NotesContainer';
import noteMockData from '../Test/notes.json'
import AddNote from './AddNote';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [showAddNotes, setShowAddNotes] = useState(false);
  const [actveLabel, setActiveLabel] = useState(0);
  const searchPlaceholder = "Search something..";
  const [noteName, setNoteName] = useState("");
  const [styleView, setStyleView] = useState(false);
  const [notesList , setNotesList] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState({
    noteName : "",
  });
  const [noteLabelList,setNoteLabelList] = useState([ "All" , "General", "Parking","All" , "General", "Parking","All" , "General", "Parking"])

  const handleRefresh = () => {
    window.location.reload();
  };
  const onChangeSearchName = (e) => {
    const { name , value } = e.target;
    setNoteName(value);
  }

  useEffect(() => {
    setLoading(true);
    setNotesList(noteMockData);
    setTimeout(() => setLoading(false),1500)
  },[refresh])

  return (
    <>
    {loading && <div className='loading-bg basic-center-div'>
        <img src={LoadingImg} alt="Loading" />
      </div> }
    {
      showAddNotes && <AddNote onClose={() => setShowAddNotes(false)} />
    }
    <div className='main-page add-scroll-bar flex-col'>
      <Navbar searchName={noteName} changeSearchName={onChangeSearchName} styleView={styleView} changeStyleView={() => setStyleView(!styleView)} searchPlaceholder={searchPlaceholder} notesTile={selectedNotes.noteName} 
      refreshAction={() => setRefresh(!refresh)}
      />
      <div className='header-text'>Notes</div>
      <div className='filter-container'>
          <div className="filter-label-container">
            {noteLabelList.map((l,i) => {
              const active = i === actveLabel;
              return(
                <span key={i} onClick={() => setActiveLabel(i)} className={` label-card ${active && 'active'}`}>{l}</span>
              )
            })}
          </div>
          <buttton onClick={() => setShowAddNotes(true) } className="button-action new"><span className='button-icon'><PiNotePencilDuotone /></span>New Note</buttton>
      </div>
      <div className='mt-2 notes-container add-scroll-bar'>
        <NotesContainer selectNotes={(val) => setSelectedNotes(val)} styleView={styleView} notesList={notesList} />
      </div>
    </div>
    </>
  )
}

export default Home