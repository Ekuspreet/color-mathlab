import { useContext, useEffect } from 'react'
import ColorPicker from './ColorPicker'
import { InputContext } from '../contexts/InputProvider'
import { OutputContext } from '../contexts/OutputProvider';
import { FunctionContext } from '../contexts/FunctionProvider';
import { ColorCalculator } from '../calculations';


const ColorPickerGroup = () => {
const { numberOfInputs, inputs, setInputs } = useContext(InputContext);
const { output, setOutput } = useContext(OutputContext);
const { selectedFunction } = useContext(FunctionContext);
  useEffect(() => {
    console.log(
      inputs,
      selectedFunction,
      output)
      
      
      setOutput(
      ColorCalculator(inputs, selectedFunction)
      );
  }, [inputs, selectedFunction]);
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