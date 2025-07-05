import { useContext } from "react";
import { OutputContext } from "../contexts/OutputProvider";

const ColorOutput = () => {
    const { output } = useContext(OutputContext);
    const { red, green, blue } = output;
    return (
        <div className="border min-h-[calc(100vh-26.95em)] p-2 flex flex-col">
            <div className="output-feilds flex">
                <div className="flex-1 border p-2">Red: {red}</div>
                <div className="flex-1 border p-2">Green: {green}</div>
                <div className="flex-1 border p-2">Blue: {blue}</div>
            </div>
            <div
                className="w-full h-40 rounded-md mt-4  flex-1"
                style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
            >

            </div>

        </div>
    );
};

export default ColorOutput;