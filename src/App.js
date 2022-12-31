import React, { useState } from 'react';

function Squares() {
    const [green, setGreen] = useState(true);
    const [red, setRed] = useState(false);

    function GreenClick() {
        setGreen(false);
        setRed(true);
    }

    function RedClick() {
        setRed(false);
        setGreen(true);
    }

    return (
        <div>
            {green && <div style={{ width: 950, height: 100, background: 'green' }} onClick={GreenClick} />}
            {red && <div style={{ width: 950, height: 100, background: 'red' }} onClick={RedClick} />}
            <div style={{ width: 950, height: 100, background: "blue" }} />
        </div>
    );
}

export default Squares;