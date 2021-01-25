import React, {useEffect, useState} from 'react';

interface PropsType {

}

export const Clock: React.FC<PropsType> = () => {
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => setDate(new Date()), 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])


    const getTwoDigitString = (number: number) => {
        return number < 10 ? '0' + number : number
    }

    return (
        <div>
            <span>{getTwoDigitString(date.getHours())}</span>
            :
            <span>{getTwoDigitString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitString(date.getSeconds())}</span>
        </div>
    )
}

