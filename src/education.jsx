import { useState } from "react";

export default function Education() {
  return (
    <form className="education">
      <h2>Education</h2>
      <div className="education-input">
        <label htmlFor="school">School </label>
        <input type="text" id="school" name="school" placeholder="University of Chicago" />
        <br></br>
        <label htmlFor="degree">Degree </label>
        <input type="text" id="degree" name="degree" placeholder="B.S. Computer Science"/>
        <br></br>
        <label htmlFor="start-year">Start year </label>
        <input type="number" id="start-year" name="start-year" placeholder="2016" min="1900" max="2030"/>
        <br></br>
        <label htmlFor="end-year">End year </label>
        <input type="number" id="end-year" name="end-year" placeholder="2020" min="1900" max="2030"/>
        <br></br>
        <label htmlFor="school-city">City </label>
        <input type="text" id="school-city" name="school-city" placeholder="Chicago, IL"/>
        <br></br>
        <label htmlFor="gpa">GPA </label>
        <input type="number" id="gpa" name="gpa" placeholder="3.9" step="0.1" min="0" max="4"/>
        <br></br>
        <label htmlFor="additional-achievement">Additional achievements </label>
        <input type="text" id="additional-achievement" name="additional-achievement" placeholder="Presidential Scholarship" />
      </div>
    </form>
  )
}