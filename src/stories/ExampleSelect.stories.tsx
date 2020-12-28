import React, {useMemo, useState} from 'react';
import {SecondSelect} from "../Components/SecondSelect/SecondSelect";
import s from './ExampleSelect.module.css'


export default {
    title: 'ExampleSelect',
}


export const WithValue = () => {
    const [valueFirst, setValueFirst] = useState('2')
    const [valueSecond, setValueSecond] = useState('2')
    const [valueThird, setValueThird] = useState('2')
    const [counter, setCounter] = useState(0);

    const arrayOfCity = [
        {value: '1', title: 'Minsk', countryID: 1, population: 100},
        {value: '2', title: 'Molodechno', countryID: 1, population: 1000},
        {value: '3', title: 'Dzerzhinsk', countryID: 1, population: 100},
        {value: '4', title: 'Moscow', countryID: 2, population: 500},
        {value: '5', title: 'SNP', countryID: 2, population: 500},
        {value: '6', title: 'Smolensk', countryID: 2, population: 1000},
        {value: '7', title: 'Kiev', countryID: 3, population: 1000},
        {value: '8', title: 'Chernigov', countryID: 3, population: 100},
        {value: '9', title: 'Lvov', countryID: 3, population: 500}
    ]

    const cityForFirstSelect = useMemo(() =>arrayOfCity.filter(c => c.countryID === 1), [arrayOfCity])
    const cityForSecondSelect = useMemo(() => arrayOfCity.filter(c => c.population === 500), [arrayOfCity])
    const cityForThirdSelect = useMemo(() => arrayOfCity.filter(c => c.title.indexOf('o') === 1), [arrayOfCity])



    return (<div className={s.exampleSelect}>
        <SecondSelect
            onChange={setValueFirst}
            value={valueFirst}
            items={cityForFirstSelect}
        />
        <button onClick={() => {
            setCounter(counter + 1)
            console.log(counter)
        }}>+
        </button>
        <SecondSelect
            onChange={setValueSecond}
            value={valueSecond}
            items={cityForSecondSelect}
        />
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <SecondSelect
            onChange={setValueThird}
            value={valueThird}
            items={cityForThirdSelect}
        />
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
    </div>)
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return (<>
        <SecondSelect
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}
            ]}
        />
    </>)
}

