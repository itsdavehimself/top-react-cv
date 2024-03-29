import { useState } from 'react'
import DisplayCV from '/src/components/cv'
import PersonalInfoPanel from "/src/components/personal-info";
import EmploymentPanel from "/src/components/employment";
import EducationPanel from "/src/components/education";
import '/src/styles/App.css'

function App() {
  const [personalForm, setPersonalForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handlePersonalInfoChange = (newPersonalForm) => {
    setPersonalForm(newPersonalForm);
  };

  const [employmentForm, setEmploymentForm] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    city: '',
    description: '',
  });

  const [employmentArr, setEmploymentArr] = useState([]);

  const addEmploymentArr = (employment) => {
    setEmploymentArr([...employmentArr, employment]);
  }

  const deleteEmploymentArr = (index) => {
    const updatedEmploymentArr = [...employmentArr];
    updatedEmploymentArr.splice(index, 1);
    setEmploymentArr(updatedEmploymentArr);
  }

  const saveEditedEmployment = (index, editedData) => {
    const updatedEmploymentArr = [...employmentArr];
    updatedEmploymentArr[index] = editedData;
    setEmploymentArr(updatedEmploymentArr);
  }

  const [educationArr, setEducationArr] = useState([]);

  const [educationForm, setEducationForm] = useState({
    school: '',
    degree: '',
    startYear: '',
    endYear: '',
    city: '',
    gpa: '',
    achievements: '',
  })

  const addEducationArr = (education) => {
    setEducationArr([...educationArr, education]);
  }

  const deleteEducationArr = (index) => {
    const updatedEducationArr = [...educationArr];
    updatedEducationArr.splice(index, 1);
    setEducationArr(updatedEducationArr);
  }

  const saveEditedEducation = (index, editedData) => {
    const updatedEducationArr = [...educationArr];
    updatedEducationArr[index] = editedData;
    setEducationArr(updatedEducationArr);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='App'>
      <div className='user-forms'>
        <PersonalInfoPanel
          title = "Personal Information"
          isActive = {activeIndex === 0}
          onShow = {() => setActiveIndex(0)}
          personalForm={personalForm}
          setPersonalForm={handlePersonalInfoChange}
        />
        <EmploymentPanel
          title = "Employment"
          isActive = {activeIndex === 1}
          onShow = {() => setActiveIndex(1)}
          employmentForm={employmentForm}
          setEmploymentForm={setEmploymentForm}
          employmentArr={employmentArr}
          addEmploymentArr={addEmploymentArr}
          deleteEmploymentArr={deleteEmploymentArr}
          saveEditedEmployment={saveEditedEmployment}
        />
        <EducationPanel
          title = "Education"
          isActive = {activeIndex === 2}
          onShow = {() => setActiveIndex(2)}
          educationForm={educationForm}
          setEducationForm={setEducationForm}
          educationArr={educationArr}
          addEducationArr={addEducationArr}
          deleteEducationArr={deleteEducationArr}
          saveEditedEducation={saveEditedEducation}
        />
      </div>
      <div className='cv-display'>
        <DisplayCV
        personalForm={personalForm}
        employmentArr={employmentArr}
        educationArr={educationArr}
        deleteEmploymentArr={deleteEmploymentArr}/>
      </div>
    </div>
  )
}

export default App
