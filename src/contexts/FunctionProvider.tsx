import { createContext, useState, type ReactNode } from "react"
import { functions } from "../functions"

type FunctionType = typeof functions[0];

type FunctionContext = {
  selectedFunction: FunctionType;
  setSelectedFunction: React.Dispatch<React.SetStateAction<FunctionType>>;
};

const FunctionContext = createContext<FunctionContext>({
  selectedFunction: functions[0],
  setSelectedFunction: () => {},
})

const FunctionProvider = ({children} : {children: ReactNode}) => {
  const [selectedFunction, setSelectedFunction] = useState(functions[0])
  return (
    <FunctionContext.Provider value={{ selectedFunction, setSelectedFunction}}>
      {children}
    </FunctionContext.Provider>
  );
};

export {FunctionProvider, FunctionContext};
