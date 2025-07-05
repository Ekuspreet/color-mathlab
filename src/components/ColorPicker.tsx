import React, { useEffect } from 'react'
type Color = {
    red: number;
    green: number;
    blue: number;
}
const ColorPicker = ({id, inputs, setInputs}: {id: number, inputs: Color[], setInputs: React.Dispatch<React.SetStateAction<Color[]>>}) => {
    const color = inputs[id];
    
    // Load from localStorage on component mount
    useEffect(() => {
        const savedColor = localStorage.getItem(`colorPicker-${id}`);
        if (savedColor) {
            try {
                const parsedColor = JSON.parse(savedColor);
                setColor(parsedColor);
            } catch (error) {
                console.error('Failed to parse saved color:', error);
            }
        }
    }, [id]);
    
    const setColor = (newColor: Color) => {
        setInputs(prev => ({ ...prev, [id]: newColor }))
        // Save to localStorage
        localStorage.setItem(`colorPicker-${id}`, JSON.stringify(newColor));
      
    }

    const handleChange = (colorComponent: 'red' | 'green' | 'blue') => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setColor({ ...color, [colorComponent]: value });
    }

    return (
        <div className="flex flex-col p-2 border flex-1">
            <div className="mb-2 flex items-center gap-2">
                <input
                    type="range"
                    min={0}
                    max={255}
                    value={color.red}
                    onChange={handleChange('red')}
                    className="range range-error flex-1"
                />
                <input
                    type="number"
                    min={0}
                    max={255}
                    value={color.red}
                    onChange={handleChange('red')}
                    className="input input-bordered w-16 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    style={{ MozAppearance: 'textfield' }}
                />
            </div>
            <div className="mb-2 flex items-center gap-2">
                <input
                    type="range"
                    min={0}
                    max={255}
                    value={color.green}
                    onChange={handleChange('green')}
                    className="range range-success flex-1"
                />
                <input
                    type="number"
                    min={0}
                    max={255}
                    value={color.green}
                    onChange={handleChange('green')}
                    className="input input-bordered w-16 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    style={{ MozAppearance: 'textfield' }}
                />
            </div>
            <div className="mb-2 flex items-center gap-2">
                <input
                    type="range"
                    min={0}
                    max={255}
                    value={color.blue}
                    onChange={handleChange('blue')}
                    className="range range-info flex-1"
                />
                <input
                    type="number"
                    min={0}
                    max={255}
                    value={color.blue}
                    onChange={handleChange('blue')}
                    className="input input-bordered w-16 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    style={{ MozAppearance: 'textfield' }}
                />
            </div>
            <input
                type="color"
                value={`#${color.red.toString(16).padStart(2, '0')}${color.green.toString(16).padStart(2, '0')}${color.blue.toString(16).padStart(2, '0')}`}
                onChange={(e) => {
                    const hex = e.target.value
                    const red = parseInt(hex.slice(1, 3), 16)
                    const green = parseInt(hex.slice(3, 5), 16)
                    const blue = parseInt(hex.slice(5, 7), 16)
                    setColor({ red, green, blue })
                }}
                className="w-full h-16 rounded-md mt-4 cursor-pointer"
            />
        </div>
    )
}

export default ColorPicker