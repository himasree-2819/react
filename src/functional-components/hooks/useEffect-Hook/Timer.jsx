import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {


        const Interval = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);
        //setInterval creates a timer that runs every 1000 milliseconds(1 second)//

        //cleanup function
        return () => clearInterval(Interval);

    }, []); //empty depandacy - run once on mount //

    return (
        <div>
            <p>Timer: {seconds} seconds</p>
        </div>
    )
}

export default Timer