import { useState } from "react";

function Clock(props) {
    const [date, setDate] = useState(new Date());

    function tick() {
        setDate(new Date());
    }

    setInterval(tick, 1000);

    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;