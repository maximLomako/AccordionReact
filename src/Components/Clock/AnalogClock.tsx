import React, {useEffect, useState} from 'react';
import './analogClock.css'

interface PropsType {

}

export const AnalogClock: React.FC<PropsType> = () => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 1000)
        return () => {
            clearInterval(intervalId);
        }
    }, [])

    const secondRatio = date.getSeconds() / 60;
    const minuteRatio = ((secondRatio + date.getMinutes()) / 60);
    const hourRatio = ((minuteRatio + date.getHours()) / 12);

    const styleSecondArrow = { '--rotation': secondRatio * 360} as React.CSSProperties
    const styleMinuteArrow = { '--rotation': minuteRatio * 360} as React.CSSProperties
    const styleHourArrow = { '--rotation': hourRatio * 360} as React.CSSProperties

    return (
        <div className={'clock'}>
            <div className='hand hours' style={styleHourArrow}></div>
            <div className='hand minutes' style={styleMinuteArrow}></div>
            <div className='hand seconds' style={styleSecondArrow}></div>
            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
        </div>
    )
}

