import PersonalInfo from './personal-info'
import Education from './education'
import Employment from './employment'
import DisplayCV from './cv'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='user-forms'>
        <PersonalInfo />
        <Education />
        <Employment />
      </div>
      <div className='cv-display'>
        <DisplayCV />
      </div>
    </div>
  )
}

export default App
