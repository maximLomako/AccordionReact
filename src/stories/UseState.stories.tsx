import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

const generateData = () => {
    console.log('generate ')
    return 1023020312312
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generateData);

    const changer = (state: number) => state + 1

    console.log('example1')
    console.log(counter)
    return (
        <>
            <button onClick={() => {
                setCounter(changer)
            }}>+
            </button>
            {counter}
        </>
    )
}