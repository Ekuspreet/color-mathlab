import { createContext, useState, type ReactNode } from "react";
import { functions } from "../functions";
type Color = {
    red: number;
    green: number;
    blue: number;
}
type InputContext = {
    numberOfInputs: number;
    setNumberOfInputs: React.Dispatch<React.SetStateAction<number>>;
    inputs: Color[];
    setInputs: React.Dispatch<React.SetStateAction<Color[]>>;
}

const InputContext = createContext<InputContext>({
    numberOfInputs: functions[0].numberOfInputs,
    setNumberOfInputs: () => {},
    inputs: [],
    setInputs: () => {},
});

const InputProvider = ({ children }: { children: ReactNode }) => {
    const [numberOfInputs, setNumberOfInputs] = useState(functions[0].numberOfInputs);
    const [inputs, setInputs] = useState<Color[]>(Array.from({ length: numberOfInputs }, () => ({ red: 128, green: 128, blue: 128 })));

    return (
        <InputContext.Provider value={{ numberOfInputs, setNumberOfInputs, inputs, setInputs }}>
            {children}
        </InputContext.Provider>
    );
};
export { InputProvider, InputContext };