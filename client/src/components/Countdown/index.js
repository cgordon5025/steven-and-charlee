import React, { useState, useEffect } from "react";

const Countdown = () => {

    const [expiryTime, setExpiryTime] = useState("14 jan 2024 08:00:00");
    const [countdownTime, setCountdownTime] = useState(
        {
            countdownDays: '',
            countdownHours: '',
            countdownMinutes: '',
            countdownSeconds: ''
        }
    );

    const countdownTimer = () => {
        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;
            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60) / 1000));

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }
            setCountdownTime(runningCountdownTime)

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
                setExpiryTime(false)
            }
        }, 1000);
    }

    useEffect(() => {
        countdownTimer()
    });

    return (
        <>
            {expiryTime !== false ? (
                // <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div>
                    <h1 className="text-center"> Countdown to Our Wedding</h1>
                    <div style={{ display: "flex", justifyContent: "center", justifyContent: "space-evenly" }}>
                        <h2>{countdownTime.countdownDays}<span> : Days</span></h2>
                        <h2>{countdownTime.countdownHours}<span> : Hours</span></h2>
                        <h2>{countdownTime.countdownMinutes}<span> : Minutes</span></h2>
                        <h2>{countdownTime.countdownSeconds}<span> : Seconds</span></h2>
                    </div>
                </div>
            ) : (
                <h2>We got married on *insert date here*</h2>
            )}
        </>
    )
}

export default Countdown