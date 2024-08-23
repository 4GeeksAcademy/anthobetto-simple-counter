import React from "react";

export const SimpleCounter = () => {
    let Counter = 0;

    const Counting = () => {
        const six = Math.floor(Counter / 100000) % 10;
        const five = Math.floor(Counter / 10000) % 10;
        const four = Math.floor(Counter / 1000) % 10;
        const three = Math.floor(Counter / 100) % 10;
        const two = Math.floor(Counter / 10) % 10;
        const one = Math.floor(Counter / 1) % 10;

        document.querySelector(".six").textContent = six;
        document.querySelector(".five").textContent = five;
        document.querySelector(".four").textContent = four;
        document.querySelector(".three").textContent = three;
        document.querySelector(".two").textContent = two;
        document.querySelector(".one").textContent = one;

        Counter++;
    };

    setInterval(Counting, 1000);

    return (
        <div className="WebCounter">
            <div className="time">
                <i className="far fa-clock" />
            </div>
            <div className="six">0</div>
            <div className="five">0</div>
            <div className="separacion">:</div>
            <div className="four">0</div>
            <div className="three">0</div>
            <div className="separacion">:</div>
            <div className="two">0</div>
            <div className="one">0</div>
            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" className="btn btn-outline-success">
                        Start
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                        Reset
                    </button>
                </div>
        </div>
    );
};

