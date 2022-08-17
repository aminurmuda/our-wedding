import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <div className='center'
            >
                <DateTimeDisplay value={days} type={'Hari'} isDanger={days <= 3} />
                <span style={{ width: "17px" }}></span>
                <DateTimeDisplay value={hours} type={'Jam'} isDanger={false} />
                <span style={{ width: "17px" }}></span>
                <DateTimeDisplay value={minutes} type={'Menit'} isDanger={false} />
                <span style={{ width: "17px" }}></span>
                <DateTimeDisplay value={seconds} type={'Detik'} isDanger={false} />
            </div>
        </div>
    );
};

const Countdown = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default Countdown;
