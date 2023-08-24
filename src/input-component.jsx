import { useState } from 'react';

export default function InputAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Panel
        title="Personal Information"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <form className="personal-info">
          <div className="name-input">
            <label htmlFor="name">Full name </label>
            <input type="text" id="name" name="name" placeholder="Ava Williams" />
            <br></br>
            <label htmlFor="email">Email </label>
            <input type="email" id="email" name="email" placeholder="avawilliams@gmail.com"/>
            <br></br>
            <label htmlFor="phone-number">Phone number </label>
            <input type="tel" id="phone-number" name="phone-number" placeholder="123-456-7890"/>
            <br></br>
            <label htmlFor="address">Address </label>
            <input type="text" id="address" name="address" placeholder="123 Main St. Chicago, IL 60007"/>
          </div>
        </form>
      </Panel>
      <Panel
        title="Employment"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
      <form className="employment">
        <div className="employment-input">
          <label htmlFor="company">Company name </label>
          <input type="text" id="company" name="company" placeholder="The Coding Company" />
          <br></br>
          <label htmlFor="position">Position title </label>
          <input type="text" id="position" name="position" placeholder="Junior Web Developer"/>
          <br></br>
          <label htmlFor="start-date">Start date </label>
          <input type="text" id="start-date" name="start-date" placeholder="August 2020"/>
          <br></br>
          <label htmlFor="end-date">End date </label>
          <input type="text" id="end-date" name="end-date" placeholder="July 2023"/>
          <br></br>
          <label htmlFor="company-city">City </label>
          <input type="text" id="company-city" name="company-city" placeholder="Chicago, IL"/>
          <br></br>
          <label htmlFor="job-description">Job description </label>
          <input type="text" id="job-description" name="job-description" placeholder="Enter position details" />
        </div>
      </form>
      </Panel>
      <Panel
        title="Education"
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}
      >
        <form className="education">
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
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="input-panel">
      <h2>{title}</h2>
      {isActive ? (
        <div>{children}</div>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
