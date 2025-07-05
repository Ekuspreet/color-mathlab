import './App.css'
import ColorOutput from './components/ColorOutput'
import ColorPickerGroup from './components/ColorPickerGroup'
import FunctionSelect from './components/FunctionSelect'
import Header from './components/Header'
import Title from './components/Title'
function App() {

  return (
    <>
      {/* We Need The Following Elements */}
      {/* Header Line */}
      <Header />
      {/* Left side for color inputs and outputs. and right side is for fucntion selectors */}
      <div className="flex">
        <div className="io flex-1">
      {/* Color Picker */}
      <Title content='INPUTS FOR FUNCTION VARIABLES'/>
      <ColorPickerGroup />
      <Title content='FUNCTION OUTPUT'/>
      <ColorOutput />
        </div>
        <div className="function w-96">
          <Title content='FUNCTION SELECTOR'/>
          <FunctionSelect />
        </div>
      </div>
    </>
  )
}

export default App
