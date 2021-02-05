import React, {useEffect, useState} from 'react';
import {AnalogClock} from "./AnalogClock";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

export interface ClockViewPropsType {
    date: Date
}

interface PropsType {
    mode: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = (props) => {
    let view;
    const [date, setDate] = useState<Date>(new Date());
    useEffect(() => {

        const intervalId = setInterval(() => setDate(new Date()), 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])
    switch (props.mode) {
        case "digital":
            view = <DigitalClockView date={date}/>
            break
        case "analog":
        default:
            view = <AnalogClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}


