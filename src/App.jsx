import DisplayCV from './cv'
import InputPanels from './input-panels'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='user-forms'>
      <InputPanels />
      </div>
      <div className='cv-display'>
        <DisplayCV />
      </div>
    </div>
  )
}

export default App
