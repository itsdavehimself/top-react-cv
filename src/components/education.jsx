import { useState } from "react";
import Panel from "./panel";

export default function EducationPanel({ title, isActive, onShow, educationForm, setEducationForm, educationArr, addEducationArr, deleteEducationArr, saveEditedEducation }) {
  const [isAddingEducation, setIsAddingEducation] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [schoolValue, setSchoolValue] = useState('');
  const [degreeValue, setDegreeValue] = useState('');
  const [startYearValue, setStartYearValue] = useState('');
  const [endYearValue, setEndYearValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [GPAValue, setGPAValue] = useState('');
  const [achievementsValue, setAchievementsValue] = useState('');

  function handleSchoolChange(e) {
    setSchoolValue(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegreeValue(e.target.value)
  }

  function handleStartYearChange(e) {
    setStartYearValue(e.target.value)
  }

  function handleEndYearChange(e) {
    setEndYearValue(e.target.value)
  }

  function handleCityChange(e) {
    setCityValue(e.target.value)
  }

  function handleGPAChange(e) {
    setGPAValue(e.target.value)
  }

  function handleAchievementsChange(e) {
    setAchievementsValue(e.target.value)
  }

  function addEducation() {
    setIsAddingEducation(true);
    setSchoolValue('');
    setDegreeValue('');
    setStartYearValue('');
    setEndYearValue('');
    setCityValue('');
    setGPAValue('');
    setAchievementsValue('');
  }

  function submitEducation() {
    const values = { school: schoolValue,
      degree: degreeValue,
      startYear: startYearValue,
      endYear: endYearValue,
      city: cityValue,
      gpa: GPAValue,
      achievements: achievementsValue,
    }
    addEducationArr(values);
    setEducationForm({
      school: schoolValue,
      degree: degreeValue,
      startYear: startYearValue,
      endYear: endYearValue,
      city: cityValue,
      gpa: GPAValue,
      achievements: achievementsValue,
    })
    setIsAddingEducation(false);
  }

  function cancelAddEducation() {
    setIsAddingEducation(false);
  }

  return (
    <Panel title={title} isActive={isActive} onShow={onShow}>
      {(!isAddingEducation && !isEditingEducation) && (
      <button className="add-btn" onClick={addEducation}>+ Education</button>
      )}
      {(isAddingEducation || isEditingEducation) && (
        <form className="education">
          <div className="input-group">
          <label htmlFor="school">School </label>
          <input 
            type="text" 
            id="school" 
            name="school" 
            placeholder="University of Chicago"
            onChange={handleSchoolChange}
            value={schoolValue}
          />
          </div>
          <div className="input-group">
          <label htmlFor="degree">Degree </label>
          <input 
            type="text" 
            id="degree" 
            name="degree" 
            placeholder="B.S. Computer Science"
            onChange={handleDegreeChange}
            value={degreeValue}
          />
          </div>
          <div className="input-group">
          <label htmlFor="start-year">Start year </label>
          <input 
            type="number" 
            id="start-year" 
            name="start-year" 
            placeholder="2016" 
            min="1900" 
            max="2030"
            onChange={handleStartYearChange}
            value={startYearValue}
          />
          </div>
          <div className="input-group">
          <label htmlFor="end-year">End year </label>
          <input 
            type="number" 
            id="end-year" 
            name="end-year" 
            placeholder="2020" 
            min="1900" 
            max="2030"
            onChange={handleEndYearChange}
            value={endYearValue}
          />
          </div>
          <div className="input-group">
          <label htmlFor="school-city">City </label>
          <input 
            type="text" 
            id="school-city" 
            name="school-city" 
            placeholder="Chicago, IL"
            onChange={handleCityChange}
            value={cityValue}
          />
          </div>
          <div className="input-group">
          <label htmlFor="gpa">GPA </label>
          <input 
            type="number" 
            id="gpa" 
            name="gpa" 
            placeholder="3.9" 
            step="0.1" 
            min="0" 
            max="4"
            onChangeCapture={handleGPAChange}
            value={GPAValue}
          />
          </div>
          <div className="input-group">
          <label htmlFor="additional-achievement">Additional achievements </label>
          <input 
            type="text" 
            id="additional-achievement" 
            name="additional-achievement" 
            placeholder="Presidential Scholarship" 
            onChange={handleAchievementsChange}
            value={achievementsValue}
          />
          </div>
        {isAddingEducation && (
          <>
          <div className="btn-section">
            <button className="main-btn save-btn" onClick={submitEducation}>Add</button>
            <button className="main-btn" onClick={cancelAddEducation}>Cancel</button>
          </div>
          </>
        )}
        {isEditingEducation && (
          <div className="btn-section">
            <button className="main-btn save-btn" type="button" onClick={() => {
              const editedData = {
                school: schoolValue,
                degree: degreeValue,
                startYear: startYearValue,
                endYear: endYearValue,
                city: cityValue,
                gpa: GPAValue,
                achievements: achievementsValue,
              };
              saveEditedEducation(editingIndex, editedData);
              setIsEditingEducation(false);
              setEditingIndex(null);
              }}>Save</button>
            <button className="main-btn" type="button" onClick={() => {
              setIsEditingEducation(false);
              setSchoolValue('');
              setDegreeValue('');
              setStartYearValue('');
              setEndYearValue('');
              setCityValue('');
              setGPAValue('');
              setAchievementsValue('');
            }}>Cancel</button>
          </div>
        )}

      </form>
      )}
      {educationArr.length > 0 && (
        <div className="tabs">
          {educationArr.map((educationItem, index) =>
          <div className="tab" key={index}>
            <div className="tab-info">
            {educationItem.school}
            </div>
            <div className="tab-btns">
            <button className="main-btn" onClick={() => {
              setIsEditingEducation(true);
              setEditingIndex(index);
              const educationItem = educationArr[index];
                setSchoolValue(educationItem.school);
                setDegreeValue(educationItem.degree);
                setStartYearValue(educationItem.startYear);
                setEndYearValue(educationItem.endYear);
                setCityValue(educationItem.city);
                setGPAValue(educationItem.gpa);
                setAchievementsValue(educationItem.achievements);
            }}>Edit</button>
            <button className="main-btn delete-btn" onClick={() => deleteEducationArr(index)}>Delete</button>
            </div>
          </div>)}
        </div>
      )}
    </Panel>
  );
}