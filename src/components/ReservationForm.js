import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    Textarea,
    VStack,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import TimesList from "./TimesList.js";

function convertTo12HourFormat(time) {
    const [hours, minutes] = time.split(':');
    const hrs = parseInt(hours, 10);
    const suffix = hrs >= 12 ? 'PM' : 'AM';
    const convertedHours = hrs % 12 || 12; // converts '00' to '12'

    return `${convertedHours}:${minutes} ${suffix}`;
}

const ReservationForm = ({ onBookingSubmit }) => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: 2,
            type: '',
            comment: '',
        },
        onSubmit: async (values) => {
            const updatedTimes = times.map(time =>
                time.id === selectedTimeId ? { ...time, isAvailable: false } : time
            );
            setTimes(updatedTimes);
            // alert(JSON.stringify(values, null, 2));
            formik.resetForm();
            onBookingSubmit(values);
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            phone: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid'),
            type: Yup.string().oneOf(['birthday', 'anniversary', 'other']),
            comment: Yup.string(),
            date: Yup.string()
                .required('Required'),
            time: Yup.string()
                .required('Required'),
            guests: Yup.number()
        }),

    });
    // console.log(formik);
    const [sliderValue, setSliderValue] = useState(2)

    const inputStyles = {
        borderColor: '#527066',
        borderWidth: '2px',
        borderRadius: '12px',
        bg: '#34BD93',
        color: '#192E27',
    }
    const [selectedTimeId, setSelectedTimeId] = useState(null);
    const [times, setTimes] = useState([]);
    useEffect(() => {
        const fetchTimesForDate = async (selectedDate) => {
            try {
                const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
                const response = await fetch('available_times_2024.json');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setTimes(data[formattedDate] || []);
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
                setTimes([]);
            }
        };

        if (formik.values.date) {
            const selectedDate = new Date(formik.values.date);
            fetchTimesForDate(selectedDate);
        } else {
            setTimes([]);
        }
    }, [formik.values.date]);

    const handleTimeSelect = (selectedTimeString) => {
        setSelectedTimeId(selectedTimeString); // Store the original 24-hour format
        const convertedTime = convertTo12HourFormat(selectedTimeString);
        formik.setFieldValue("time", convertedTime); // Store the converted 12-hour format in Formik
    };
    return (
        <div className="resBox">
            <VStack rounded={26} w="640px" p={34} alignItems="flex-start" background="#BAD1CA"
                boxShadow="dark-lg"
                mb={50}>
                <Box p={12} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={9}>
                            <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                                <FormLabel htmlFor="date">Select Date*</FormLabel>
                                <Input
                                    id="date"
                                    name="date"
                                    size="md"
                                    type="date"
                                    style={inputStyles}
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("date")}

                                />
                                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                                <FormLabel htmlFor="time">Select Time*</FormLabel>
                                <TimesList
                                    times={times}
                                    selectedTime={selectedTimeId}
                                    onTimeSelect={handleTimeSelect}
                                />
                                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                                <FormLabel pb={45} htmlFor="guests">Number of Guests* </FormLabel>
                                <Slider defaultValue={2} min={2} max={12} step={1} aria-label='slider-ex-6' onChange={(val) => {
                                    setSliderValue(val);
                                    formik.setFieldValue("guests", val)
                                }}>
                                    <SliderTrack
                                        bg="#527066"
                                    >
                                        <SliderFilledTrack
                                            bg='#3b8069'
                                        >
                                        </SliderFilledTrack>
                                    </SliderTrack>
                                    <SliderMark
                                        value={sliderValue}
                                        textAlign='center'
                                        bg='#192E27'
                                        color='white'
                                        mt='-10'
                                        ml='-5'
                                        w='12'
                                        id="guests"
                                        name="guests"
                                        type="range"
                                    >
                                        {sliderValue}
                                    </SliderMark>
                                    <SliderThumb />
                                </Slider>
                                <FormErrorMessage></FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="type">Occassion</FormLabel>
                                <Select
                                    id="type"
                                    name="type"
                                    placeholder="Select an Occasion"
                                    style={inputStyles}
                                    onChange={formik.handleChange}
                                    value={formik.values.type}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("type")}
                                >
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">
                                        Anniversary
                                    </option>
                                    <option value="other">Other</option>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="comment">Additional Comments</FormLabel>
                                <Textarea
                                    id="comment"
                                    name="comment"
                                    height={140}
                                    style={inputStyles}
                                    onChange={formik.handleChange}
                                    value={formik.values.comment}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("comment")}
                                />
                            </FormControl>
                            <Divider
                                borderColor="#495E57"
                                borderWidth={1}
                            >
                            </Divider>
                            <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                                <FormLabel htmlFor="name">Name*</FormLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    style={inputStyles}
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("name")}
                                />
                                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email*</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    style={inputStyles}
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("email")}
                                />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.errors.phone && formik.touched.phone}>
                                <FormLabel htmlFor="phone">Phone number*</FormLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    style={inputStyles}
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    onBlur={formik.handleBlur}
                                    {...formik.getFieldProps("phone")}
                                />
                                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                            </FormControl>
                            <Button
                                type="submit"
                                width="full"
                                borderRadius={0}
                                className="reserve"
                                aria-label="Submit Reservation"
                            >
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </div>
    );
}

export default ReservationForm;