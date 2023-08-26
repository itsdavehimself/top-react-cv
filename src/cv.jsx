export default function DisplayCV({ personalForm }) {
  return(
    <div className="cv">
      {personalForm.name}
      <br></br>
      {personalForm.email}
      <br></br>
      {personalForm.phone}
      <br></br>
      {personalForm.address}
    </div>
  )
}