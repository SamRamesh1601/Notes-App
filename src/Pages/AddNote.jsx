import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import Select from 'react-select';
const isFocused = true; 
const customStyles = {
  control: (provided,state) => (
    {
    ...provided,
    backgroundColor : 'transparent',
    border: state.isFocused ? "none" : '2px solid #454545',
    borderRadius: '4px',
    color : "#555",
    fontSize : "0.95rem",
    padding : "4px 4px",
    color : "#e7ab06",
    boxShadow: state.isFocused ? '0 0 0 2px #454545' : null,
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#e7ab06',
    borderRadius: '20px',
    padding : "2px 8px",
    color: "#343434",
    fontWeight : "800"
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};
// option: (provided, state) => ({
//   ...provided,
//   backgroundColor: state.isFocused ? '#e7ab06' : null,
//   color: "#343434",
//   fontWeight: "800",
// }),

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];



const AddNote = ({ onClose }) => {
  return (
    <div className={"main-page add-notes-page basic-center-div"}>
      <div className="add-notes-container">
        <div className="add-notes-head-container">
          <span className="add-notes-text head">Add Note</span>
          <span className="add-notes-text icon" onClick={onClose}>
            <VscChromeClose />
          </span>
        </div>
        <div className="add-notes-input-container">
          <span className="add-notes-text input">Title</span>
          <input type="text" className="add-notes-input" />
        </div>
        <div className="add-notes-input-container">
          <Select
            options={options}
            isMulti
            placeholder="Select categories..."
            styles={customStyles}
          />
        </div>
        <div className="add-notes-input-container">
          <textarea
            type="text"
            className="add-notes-input text-area add-scroll-bar"
            placeholder="Write something can more..."
          />
        </div>
        <div className="add-notes-btn-container">
          <button className="button-action">Submit</button>
          <button  onClick={onClose} className="button-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
