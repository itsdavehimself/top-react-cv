import Panel from "./panel";

export default function EmploymentPanel({ title, isActive, onShow }) {
  return (
    <Panel title={title} isActive={isActive} onShow={onShow}>
      <form className="employment">
        <div className="employment-input">
          <label htmlFor="company">Company name </label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            placeholder="The Coding Company"
          />
          <br></br>
          <label htmlFor="position">Position title </label>
          <input 
            type="text" 
            id="position" 
            name="position" 
            placeholder="Junior Web Developer"
          />
          <br></br>
          <label htmlFor="start-date">Start date </label>
          <input 
            type="text" 
            id="start-date" 
            name="start-date" 
            placeholder="August 2020"
          />
          <br></br>
          <label htmlFor="end-date">End date </label>
          <input 
            type="text" 
            id="end-date" 
            name="end-date" 
            placeholder="July 2023"
          />
          <br></br>
          <label htmlFor="company-city">City </label>
          <input 
            type="text" 
            id="company-city" 
            name="company-city" 
            placeholder="Chicago, IL"
          />
          <br></br>
          <label htmlFor="job-description">Job description </label>
          <input 
            type="text" 
            id="job-description" 
            name="job-description" 
            placeholder="Enter position details" 
          />
        </div>
      </form>
    </Panel>
  );
}