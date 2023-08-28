import Panel from "./panel";
import { useState } from "react";

export default function EmploymentPanel({ title, isActive, onShow, employmentForm, setEmploymentForm, addEmploymentArr, employmentArr, deleteEmploymentArr, saveEditedEmployment }) {
  const [isAddingEmployment, setIsAddingEmployment] = useState(false);
  const [isEditingEmployment, setIsEditingEmployment] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
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
    <Panel title={title} isActive={isActive} onShow={onShow}>
      {(!isAddingEmployment && !isEditingEmployment) && (
      <button className="add-btn" onClick={addEmployment}>+ Employment</button>
      )}
      {(isAddingEmployment || isEditingEmployment) && (
      <form className="employment">
        <div className="input-group">
        <label htmlFor="company">Company name </label>
        <input 
          type="text" 
          id="company" 
          name="company" 
          placeholder="The Coding Company"
          onChange={handleCompanyChange}
          value={companyValue}
        />
        </div>
        <div className="input-group">
        <label htmlFor="position">Position title </label>
        <input 
          type="text" 
          id="position" 
          name="position" 
          placeholder="Junior Web Developer"
          onChange={handlePositionChange}
          value={positionValue}
        />
        </div>
        <div className="input-group">
        <label htmlFor="start-date">Start date </label>
        <input 
          type="text" 
          id="start-date" 
          name="start-date" 
          placeholder="August 2020"
          onChange={handleStartDateChange}
          value={startDateValue}
        />
        </div>
        <div className="input-group">
        <label htmlFor="end-date">End date </label>
        <input 
          type="text" 
          id="end-date" 
          name="end-date" 
          placeholder="July 2023"
          onChange={handleEndDateChange}
          value={endDateValue}
        />
        </div>
        <div className="input-group">
          <label htmlFor="company-city">City </label>
        <input 
          type="text" 
          id="company-city" 
          name="company-city" 
          placeholder="Chicago, IL"
          onChange={handleCityChange}
          value={cityValue}
        />
        </div>
        <div className="input-group">
        <label htmlFor="job-description">Job description </label>
        <input 
          type="text" 
          id="job-description" 
          name="job-description" 
          placeholder="Enter position details"
          onChange={handleDescriptionChange} 
          value={descriptionValue}
        />
        </div>
      {isAddingEmployment && (
        <>
        <div className="btn-section">
          <button className="main-btn save-btn" onClick={submitEmployment}>Add</button>
          <button className="main-btn" onClick={cancelAddEmployment}>Cancel</button>
        </div>
        </>
      )}
      {isEditingEmployment && (
        <>
          <button type="button" onClick={() => {
            const editedData = {
              company: companyValue,
              position: positionValue,
              startDate: startDateValue,
              endDate: endDateValue,
              city: cityValue,
              description: descriptionValue,
            };
            saveEditedEmployment(editingIndex, editedData);
            setIsEditingEmployment(false);
            setEditingIndex(null);
          }}>Save changes</button>
          <button type="button" onClick={() => {
            setIsEditingEmployment(false);
            setCompanyValue('');
            setPositionValue('');
            setStartDateValue('');
            setEndDateValue('');
            setCityValue('');
            setDescriptionValue('');
          }}>Cancel</button>
        </>
      )}
      
    </form>
      )}
      {employmentArr.length > 0 && (
        <div className="tabs">
          {employmentArr.map((employmentItem, index) =>
            <div key={index}>
              {employmentItem.company}
              <button onClick={() => {
                setIsEditingEmployment(true);
                setEditingIndex(index);
                const employmentItem = employmentArr[index];
                  setCompanyValue(employmentItem.company);
                  setPositionValue(employmentItem.position);
                  setStartDateValue(employmentItem.startDate);
                  setEndDateValue(employmentItem.endDate);
                  setCityValue(employmentItem.city);
                  setDescriptionValue(employmentItem.description);

              }}>Edit</button>
              <button onClick={() => deleteEmploymentArr(index)}>Delete</button>
            </div>
          )}
        </div>
      )}
    </Panel>
  );
}