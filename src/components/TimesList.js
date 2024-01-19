function TimesList({ times, selectedTimeId, onTimeSelect }) {
    return (
        <div>
            <div className="time-grid">
                {times.map((time) => (
                    <button
                        key={time.id}
                        className={`time-button ${time.id === selectedTimeId ? 'selected' : ''}`}
                        onClick={() => onTimeSelect(time.id)}
                        disabled={!time.isAvailable}
                        type="button"
                        aria-label="Select Time"
                    >
                        {time.title}
                    </button>
                ))};
            </div>
        </div>
    );
};

export default TimesList;