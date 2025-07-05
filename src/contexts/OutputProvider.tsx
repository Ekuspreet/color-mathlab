import { createContext, useState, type ReactNode } from "react";
type Color = {
    red: number;
    green: number;
    blue: number;
}

type OutputContext = {
    output: Color;
    setOutput: React.Dispatch<React.SetStateAction<Color>>;
};
const OutputContext = createContext<OutputContext>({
    output: { red: 120, green: 128, blue: 158 },
    setOutput: () => {},
});

const OutputProvider = ({ children }: { children: ReactNode }) => {
    const [output, setOutput] = useState<Color>({ red: 10, green: 128, blue: 128 });

    return (
        <OutputContext.Provider value={{ output, setOutput }}>
            {children}
        </OutputContext.Provider>
    );
};

export { OutputProvider, OutputContext };