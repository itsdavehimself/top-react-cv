export default function DisplayCV({ personalForm, employmentArr }) {
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
            </div>
          )}

    </div>
  )
}