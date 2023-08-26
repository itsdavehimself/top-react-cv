import { useState } from "react";
import Panel from "./panel";

export default function EducationPanel({ title, isActive, onShow, educationForm, setEducationForm, educationArr, addEducationArr, deleteEducationArr }) {
  const [isAddingEducation, setIsAddingEducation] = useState(false);
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
      <button className="add-button" onClick={addEducation}>Add education history</button>
      {isAddingEducation && (
        <form className="education">
        <div className="education-input">
          <label htmlFor="school">School </label>
          <input 
            type="text" 
            id="school" 
            name="school" 
            placeholder="University of Chicago"
            onChange={handleSchoolChange}
          />
          <br></br>
          <label htmlFor="degree">Degree </label>
          <input 
            type="text" 
            id="degree" 
            name="degree" 
            placeholder="B.S. Computer Science"
            onChange={handleDegreeChange}
          />
          <br></br>
          <label htmlFor="start-year">Start year </label>
          <input 
            type="number" 
            id="start-year" 
            name="start-year" 
            placeholder="2016" 
            min="1900" 
            max="2030"
            onChange={handleStartYearChange}
          />
          <br></br>
          <label htmlFor="end-year">End year </label>
          <input 
            type="number" 
            id="end-year" 
            name="end-year" 
            placeholder="2020" 
            min="1900" 
            max="2030"
            onChange={handleEndYearChange}
          />
          <br></br>
          <label htmlFor="school-city">City </label>
          <input 
            type="text" 
            id="school-city" 
            name="school-city" 
            placeholder="Chicago, IL"
            onChange={handleCityChange}
          />
          <br></br>
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
          />
          <br></br>
          <label htmlFor="additional-achievement">Additional achievements </label>
          <input 
            type="text" 
            id="additional-achievement" 
            name="additional-achievement" 
            placeholder="Presidential Scholarship" 
            onChange={handleAchievementsChange}
          />
        </div>
        <button onClick={submitEducation}>Add</button>
        <button onClick={cancelAddEducation}>Delete</button>
      </form>
      )}
      {educationArr.length > 0 && (
        <div className="tabs">
          {educationArr.map((educationItem, index) =>
          <div key={index}>
            {educationItem.school}
            <button onClick={() => console.log('hi')}>Edit</button>
            <button onClick={() => deleteEducationArr(index)}>Delete</button>
          </div>)}
        </div>
      )}
    </Panel>
  );
}