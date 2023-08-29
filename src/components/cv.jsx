import '/src/styles/cv.css'
import React, { useRef, useEffect } from "react";


export default function DisplayCV({ personalForm, employmentArr, educationArr }) {
  const leftSectionContainerRef = useRef(null);

  useEffect(() => {
    if (leftSectionContainerRef.current) {
      const leftSections = leftSectionContainerRef.current.querySelectorAll(
        ".left-section"
      );

      let maxWidth = 0;

      leftSections.forEach((leftSection) => {
        const width = leftSection.offsetWidth;
        if (width > maxWidth) {
          maxWidth = width;
        }
      });

      leftSections.forEach((leftSection) => {
        leftSection.style.width = `${maxWidth + 12}px`;
      });
    }
  }, [employmentArr]);

  return(
    <div className="cv">
      <div className="cv-personal">
        <div className="cv-name">
          {personalForm.name}
        </div>
        <div className="cv-details">
          <div className="email">
            {personalForm.email}
          </div>
          <div className="phone">
            {personalForm.phone}
          </div>
          <div className="address">
            {personalForm.address}
          </div>
        </div>
      </div>
      <div className="employment-section" ref={leftSectionContainerRef}>
        {(employmentArr && employmentArr.length > 0) && (
          <div className="history-header">
            Professional History
          </div>
        )}
        {employmentArr.map((employmentItem, index) =>
              <div className="history-item" key={index}>
                <div className="left-section">
                  <div className="cv-dates">
                    {employmentItem.startDate} - {employmentItem.endDate}
                  </div>
                  <div className="cv-city">
                    {employmentItem.city}
                  </div>
                </div>
                <div className="right-section">
                  <div className="institution-title">
                  {employmentItem.company}
                  </div>
                  <div className="secondary-info">
                  {employmentItem.position}
                  </div>
                  <div className="description">
                  {employmentItem.description}
                  </div>
                </div>
              </div>
            )}
      </div>
      <div className="education-section">
        {(educationArr && educationArr.length > 0) && (
          <div className="history-header">
            Education
          </div>
        )}
      {educationArr.map((educationItem, index) =>
            <div className="history-item" key={index}>
              <div className="left-section education">
                <div className="cv-dates">
                  {educationItem.startYear} - {educationItem.endYear}
                </div>
                <div className="cv-city">
                  {educationItem.city}
                </div>
              </div>
              <div className="right-section">
                <div className="institution-title">
                  {educationItem.school}
                </div>
                <div className="secondary-info">
                  {educationItem.degree}
                </div>
                <div className="gpa">
                  GPA: {educationItem.gpa}
                </div>
                <div className="description">
                  {educationItem.achievements}
                </div>
              </div>
            </div>
          )}
        
      </div>
    </div>
  )
}