function convertTo12HourFormat(time) {
    const [hours, minutes] = time.split(':');
    const hrs = parseInt(hours, 10);
    const suffix = hrs >= 12 ? 'PM' : 'AM';
    const convertedHours = hrs % 12 || 12; // converts '00' to '12'

    return `${convertedHours}:${minutes} ${suffix}`;
}

function TimesList({ times, selectedTime, onTimeSelect }) {
    return (
        <div className="time-grid">
            {times.map((timeEntry) => {
                const convertedTime = convertTo12HourFormat(timeEntry.time);
                return (
                    <button
                        key={timeEntry.time}
                        className={`time-button ${timeEntry.time === selectedTime ? 'selected' : ''}`}
                        onClick={() => onTimeSelect(timeEntry.time)}
                        disabled={!timeEntry.isAvailable}
                        type="button"
                    >
                        {convertedTime}
                    </button>
                );
            })}
        </div>
    );
};
export default TimesList;