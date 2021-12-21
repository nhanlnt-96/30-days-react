import React from 'react';
import Title from "../../title/Title";

import '../Day6.css';

const checkOddEven = (number) => {
    return number % 2 === 0 ? 'even' : 'odd';
}

const checkPrime = (number, i) => {
    if (number <= 2)
        return (number === 2) ? true : false;

    if (number % i === 0)
        return false;

    if (i * i > number)
        return true;

    return checkPrime(number, i + 1)
}

const Ex02 = () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 21];
    return (
        <>
            <Title title={'Number generator'}
                   subtitle={'In the following design, evens are green, odds are yellow and prime numbers are red'}/>
            <div className="table-container">
                {
                    array.map((val, index) => (
                        <div key={index} className="item"
                             style={{backgroundColor: checkPrime(val, 2) ? '#EB5A51' : checkOddEven(val) === 'even' ? '#5CC074' : '#FADB44'}}>{val}</div>
                    ))
                }
            </div>
        </>
    )
        ;
};

export default Ex02;