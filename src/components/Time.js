import React, {useState} from 'react';

const Time = () =>{

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function updateTime(){
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000);

    return (
        <div>
            <h3>{time}</h3>
        </div>
    );
}

export default Time;