import DisplayCV from './cv'
import Accordion from './input-component'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='user-forms'>
      <Accordion />
      </div>
      <div className='cv-display'>
        <DisplayCV />
      </div>
    </div>
  )
}

export default App
