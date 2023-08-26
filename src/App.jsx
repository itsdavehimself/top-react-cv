import { useState } from 'react'
import DisplayCV from './cv'
import PersonalInfoPanel from "./personal-info";
import EmploymentPanel from "./employment";
import EducationPanel from "./education";
import './App.css'

function App() {
  const [personalForm, setPersonalForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='App'>
      <div className='user-forms'>
        <PersonalInfoPanel
          title = "Personal Information"
          isActive = {activeIndex === 0}
          onShow = {() => setActiveIndex(0)}
          personalForm={personalForm}
          setPersonalForm={setPersonalForm}
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
        />
        <EducationPanel
          title = "Education"
          isActive = {activeIndex === 2}
          onShow = {() => setActiveIndex(2)}
        />
      </div>
      <div className='cv-display'>
        <DisplayCV
        personalForm={personalForm}
        employmentArr={employmentArr}
        deleteEmploymentArr={deleteEmploymentArr}/>
      </div>
    </div>
  )
}

export default App
