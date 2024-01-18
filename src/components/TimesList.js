import React, { useState } from 'react';

function TimesList({ selectCallback }) {
    const [selectedTimeId, setSelectedTimeId] = useState(null);
    const [times, setTimes] = useState([
        { title: '5:00', id: 0, isAvailable: true },
        { title: '5:15', id: 1, isAvailable: true },
        { title: '5:30', id: 2, isAvailable: true },
        { title: '6:00', id: 3, isAvailable: true },
        { title: '6:15', id: 4, isAvailable: true },
        { title: '6:30', id: 5, isAvailable: true },
        { title: '7:00', id: 6, isAvailable: true },
        { title: '7:15', id: 7, isAvailable: true },
        { title: '7:30', id: 8, isAvailable: true },
        // { title: '8:00', id: 9, isAvailable: true },
        // { title: '8:15', id: 10, isAvailable: true },
        // { title: '8:30', id: 11, isAvailable: true },
        // { title: '9:00', id: 12, isAvailable: true },
        // { title: '9:15', id: 13, isAvailable: true },
        // { title: '9:30', id: 14, isAvailable: true }
    ]);

    const handleReservation = (timeId) => {
        setTimes(times.map(time =>
            time.id === timeId ? { ...time, isAvailable: false } : time
        ));

        setSelectedTimeId(null);
    };


    const onClickWithCallback = (id) => {
        setSelectedTimeId(id)

        // call the callback passed from parent
        // and pass to it our time object
        selectCallback(times[id])
    }

    // const getSelectedTimeTitle = () => {
    //     const selectedTime = times.find(time => time.id === selectedTimeId);
    //     return selectedTime ? selectedTime.title : 'No time selected';
    // };

    return (
        <div>
            {/* <h3>Selected Time: {getSelectedTimeTitle()}</h3> */}
            <div className="time-grid">
                {times.map((time) => (
                    <button
                        key={time.id}
                        className={`time-button ${selectedTimeId === time.id ? 'selected' : ''} ${!time.isAvailable ? 'disabled' : ''}`}
                        onClick={() => onClickWithCallback(time.id)}
                        disabled={!time.isAvailable}
                        id="time"
                        name="time"
                        size="md"
                        type="button"
                    // onChange={formik.handleChange}
                    // value={formik.values.time}
                    // onBlur={formik.handleBlur}
                    // {...formik.getFieldProps("time")}
                    >
                        {time.title}
                    </button>
                ))}
            </div>
            {/* {selectedTimeId !== null && (
                <button onClick={() => handleReservation(selectedTimeId)}>Confirm Reservation</button>
            )} */}
        </div>
    );
};

export default TimesList;