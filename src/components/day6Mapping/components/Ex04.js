import React from 'react';
import Title from "../../title/Title";

const Ex04 = () => {
    const tenHighestPopulation = [
        {country: 'World', population: 7693165599},
        {country: 'China', population: 1377422166},
        {country: 'India', population: 1295210000},
        {country: 'United States of America', population: 323947000},
        {country: 'Indonesia', population: 258705000},
        {country: 'Brazil', population: 206135893},
        {country: 'Pakistan', population: 194125062},
        {country: 'Nigeria', population: 186988000},
        {country: 'Bangladesh', population: 161006790},
        {country: 'Russian Federation', population: 146599183},
        {country: 'Japan', population: 126960000},
    ]
    return (
        <>
            <Title title={'World population'} subtitle={'Make the following bar group using the given data'}/>
            <div className="progress-container">
                {
                    tenHighestPopulation.map((val, index) => (
                        <div key={index} className="progress-item">
                            <div className="country">{val.country}</div>
                            <div className="progress-bar-container">
                                <div className="progress-bar"
                                     style={{width: `${((val.population / tenHighestPopulation[0].population) * 100)}%`}}/>
                            </div>
                            <div className="population">{new Intl.NumberFormat().format(val.population)}</div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Ex04;