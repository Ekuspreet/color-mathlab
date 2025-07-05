import { useContext } from 'react'
import ColorPicker from './ColorPicker'
import { InputContext } from '../contexts/InputProvider'


const ColorPickerGroup = () => {
const { numberOfInputs, inputs, setInputs } = useContext(InputContext);
  return (
    <div className="flex flex-col md:flex-row ">
      {
        Array.from({ length: numberOfInputs }, (_, i) => (
          <ColorPicker key={i} id={i} inputs={inputs} setInputs={setInputs}/>
        ))
      }
    </div>
  )
}

export default ColorPickerGroup