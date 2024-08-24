import React, { useState, useEffect } from "react";

export const SimpleCounter = () => {
    const [counter, setCounter] = useState(0);
    const [runStart, setRunStart] = useState(false);

    const handleStart = () => {
        setRunStart(!runStart);
    }

    const handleReset = () =>{
        setCounter(0);
        setRunStart(false);
    }

    useEffect(() => {
        if (runStart) {
            const intervalId = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [runStart]);

    return (
        <div className="WebCounter">
            <div className="time">
                <i className="far fa-clock" />
            </div>
            <div>{Math.floor(counter / 100000) % 10}</div>
            <div>{Math.floor(counter / 10000) % 10}</div>
            <div>:</div>
            <div>{Math.floor(counter / 1000) % 10}</div>
            <div>{Math.floor(counter / 100) % 10}</div>
            <div>:</div>
            <div>{Math.floor(counter / 10) % 10}</div>
            <div>{Math.floor(counter / 1) % 10}</div>
            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button onClick={handleStart} type="button" className="btn btn-outline-success">
                    {runStart ? "Pause" : counter == 0 ? "Start" : "Continue"}
                    </button>
                    <button onClick={handleReset}type="button" className="btn btn-outline-danger">
                        Reset
                    </button>
                </div>
        </div>
    );
};