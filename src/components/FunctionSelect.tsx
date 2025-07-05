import { useContext, useEffect } from "react";
import { functions } from "../functions";
import { InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import { FunctionContext } from "../contexts/FunctionProvider";
import { InputContext } from "../contexts/InputProvider";
const FunctionSelect = () => {
    const { setNumberOfInputs } = useContext(InputContext);
    const {selectedFunction, setSelectedFunction} = useContext(FunctionContext);

        useEffect(() => {
            const savedFunction = localStorage.getItem(`selectedFunction`);
            if (savedFunction) {
                try {
                    const parsedFunction = JSON.parse(savedFunction);
                    setSelectedFunction(functions.find(fn => fn.id === parsedFunction.id) || functions[0]);
                } catch (error) {
                    console.error('Failed to parse saved function:', error);
                }
            }
        }, []); 

    useEffect(() => {
        setNumberOfInputs(selectedFunction.numberOfInputs);
    }, [selectedFunction]);

    return (
        <div className="flex flex-col  border min-h-[calc(100vh-8em)] overflow-y-auto">
            {functions.map((fn) => (
            <button
                key={fn.id}
                type="button"
                className={` text-left border p-2  cursor-pointer ${
                selectedFunction.id === fn.id ? " bg-base-content/40" : "hover:bg-base-content/20"
                }`}
                onClick={() => {
                    const newFunction = functions.find(f => f.id === fn.id) || functions[0];
                    setSelectedFunction(newFunction);
                    localStorage.setItem('selectedFunction', JSON.stringify(newFunction));
                }}
            >
                {fn.name || `Function ${fn.id + 1}`} : <InlineMath math={fn.description} />
            </button>
            ))}
        </div>
    );
};

export default FunctionSelect;