'use client';

import { useEffect, useState } from "react";
import { SketchPicker, ChromePicker, GithubPicker } from "react-color";
import Modal from "./Modal";

var { Alpha } = require("react-color/lib/components/common");

export default function ColorPicker({ selectedColor, setSelectedColor }) {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const handleColorChange = (color) => {
        setSelectedColor(color.hex);
    };

    return (
        <div className="" >


            <div onClick={() => setShowColorPicker(!showColorPicker)} className="h-10 w-full flex justify-center items-center border border-1 border-slate-500" style={{ backgroundColor: selectedColor }}>
                <h1>{selectedColor} </h1>
            </div>
            <div className="w-full  ">
                <div className={`modal ${showColorPicker ? "modal-open" : ""}`}>
                    <div className='modal-box relative flex flex-col  items-center'>
                        <label
                            onClick={() => setShowColorPicker(false)}
                            className='btn btn-sm btn-circle absolute right-2 top-2'
                        >
                            ✕
                        </label>
                        <SketchPicker
                            color={selectedColor}
                            onChangeComplete={handleColorChange}
                        />
                        <div className="h-10 w-full flex justify-center items-center border border-1 border-slate-500" style={{ backgroundColor: selectedColor }}>
                            <h1>{selectedColor} </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}