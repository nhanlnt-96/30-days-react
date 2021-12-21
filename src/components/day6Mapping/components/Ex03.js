import React from 'react';
import Title from "../../title/Title";

const Ex03 = () => {
    const hexaDecimal = [
        "#f0f8ff",
        "#faebd7",
        "#00ffff",
        "#7fffd4",
        "#f0ffff",
        "#f5f5dc",
        "#ffe4c4",
        "#000000",
        "#ffebcd",
        "#0000ff",
        "#8a2be2",
        "#a52a2a",
        "#deb887",
        "#5f9ea0",
        "#7fff00",
        "#d2691e",
        "#ff7f50",
        "#6495ed",
        "#fff8dc",
        "#dc143c",
        "#00ffff",
        "#00008b",
        "#008b8b",
        "#b8860b",
        "#a9a9a9",
        "#006400",
        "#a9a9a9",
        "#bdb76b",
        "#8b008b",
        "#556b2f",
        "#ff8c00",
        "#9932cc",
    ]
    return (
        <>
            <Title title={'Hexadecimal Colors'}
                   subtitle={'Create the following hexadecimal colors using React component'}/>
            <div className="table-container">
                {
                    hexaDecimal.map((val, index) => (
                        <div key={index} className="item" style={{backgroundColor: val, fontSize: "1em"}}>{val}</div>
                    ))
                }
            </div>
        </>
    );
};

export default Ex03;