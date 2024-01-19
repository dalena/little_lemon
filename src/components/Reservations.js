import React, { useState } from 'react';
import ReservationForm from './ReservationForm';
import ConfirmedBooking from './ConfirmedBooking';

const Reservations = () => {
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});

    const handleBookingSubmit = (values) => {
        setBookingDetails(values);
        setBookingConfirmed(true);
    };
    return (
        <section className="resCont subPage">
            <h2>Reservations</h2>
            {!bookingConfirmed ? (
                <ReservationForm onBookingSubmit={handleBookingSubmit} />
            ) : (
                <ConfirmedBooking bookingDetails={bookingDetails} />
            )}
        </section>
    );
}

export default Reservations;