import Panel from "./panel";
import { useState } from "react";

export default function EmploymentPanel({ title, isActive, onShow, employmentForm, setEmploymentForm, addEmploymentArr, employmentArr, deleteEmploymentArr }) {
  const [isAddingEmployment, setIsAddingEmployment] = useState(false);
  const [companyValue, setCompanyValue] = useState('');
  const [positionValue, setPositionValue] = useState('');
  const [startDateValue, setStartDateValue] = useState('');
  const [endDateValue, setEndDateValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  function handleCompanyChange(e) {
    setCompanyValue(e.target.value);
  }

  function handlePositionChange(e) {
    setPositionValue(e.target.value);
  }

  function handleStartDateChange(e) {
    setStartDateValue(e.target.value);
  }

  function handleEndDateChange(e) {
    setEndDateValue(e.target.value);
  }

  function handleCityChange(e) {
    setCityValue(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescriptionValue(e.target.value);
  }

  function addEmployment() {
    setIsAddingEmployment(true);
  }

  function submitEmployment() {
    const values = { company: companyValue,
      position: positionValue,
      startDate: startDateValue,
      endDate: endDateValue,
      city: cityValue,
      description: descriptionValue,
    }
    addEmploymentArr(values);
    setEmploymentForm({
      company: companyValue,
      position: positionValue,
      startDate: startDateValue,
      endDate: endDateValue,
      city: cityValue,
      description: descriptionValue,
    })
    setIsAddingEmployment(false);
  }

  function cancelAddEmployment() {
    setIsAddingEmployment(false);
  }

  return (
    <Panel title={title} isActive={isActive} onShow={onShow} showSaveButton={false}>
      <button className="add-employment" onClick={addEmployment}>Add employment history</button>
      {isAddingEmployment && (
      <form className="employment">
      <div className="employment-input">
        <label htmlFor="company">Company name </label>
        <input 
          type="text" 
          id="company" 
          name="company" 
          placeholder="The Coding Company"
          onChange={handleCompanyChange}
        />
        <br></br>
        <label htmlFor="position">Position title </label>
        <input 
          type="text" 
          id="position" 
          name="position" 
          placeholder="Junior Web Developer"
          onChange={handlePositionChange}
        />
        <br></br>
        <label htmlFor="start-date">Start date </label>
        <input 
          type="text" 
          id="start-date" 
          name="start-date" 
          placeholder="August 2020"
          onChange={handleStartDateChange}
        />
        <br></br>
        <label htmlFor="end-date">End date </label>
        <input 
          type="text" 
          id="end-date" 
          name="end-date" 
          placeholder="July 2023"
          onChange={handleEndDateChange}
        />
        <br></br>
        <label htmlFor="company-city">City </label>
        <input 
          type="text" 
          id="company-city" 
          name="company-city" 
          placeholder="Chicago, IL"
          onChange={handleCityChange}
        />
        <br></br>
        <label htmlFor="job-description">Job description </label>
        <input 
          type="text" 
          id="job-description" 
          name="job-description" 
          placeholder="Enter position details"
          onChange={handleDescriptionChange} 
        />
      </div>
      <button onClick={submitEmployment}>Add</button>
      <button onClick={cancelAddEmployment}>Delete</button>
    </form>
      )}
      {employmentArr.length > 0 && (
        <div className="employment-tabs">
          {employmentArr.map((employmentItem, index) =>
            <div key={index}>
              {employmentItem.company}
              <button onClick={() => deleteEmploymentArr(index)}>Delete</button>
            </div>
          )}
        </div>
      )}
    </Panel>
  );
}