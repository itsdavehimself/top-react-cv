export default function DisplayCV({ personalForm, employmentArr, educationArr }) {
  return(
    <div className="cv">
      {personalForm.name}
      <br></br>
      {personalForm.email}
      <br></br>
      {personalForm.phone}
      <br></br>
      {personalForm.address}
      <br></br>
      <br></br>
      {employmentArr.map((employmentItem, index) =>
            <div key={index}>
              {employmentItem.company}
              <br></br>
              {employmentItem.position}
              <br></br>
              {employmentItem.startDate}
              <br></br>
              {employmentItem.endDate}
              <br></br>
              {employmentItem.city}
              <br></br>
              {employmentItem.description}
              <br></br>
            </div>
          )}
      <br></br>
      <br></br>
      {educationArr.map((educationItem, index) =>
            <div key={index}>
              {educationItem.school}
              <br></br>
              {educationItem.degree}
              <br></br>
              {educationItem.startYear}
              <br></br>
              {educationItem.endYear}
              <br></br>
              {educationItem.city}
              <br></br>
              {educationItem.gpa}
              <br></br>
              {educationItem.achievements}
            </div>
          )}
    </div>
  )
}