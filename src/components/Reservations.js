import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
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
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext.js";


const Reservations = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            type: '',
            comment: '',
            date: '',
            time: '',
            guests: '',
        },
        onSubmit: async (values) => {
            await SubmitEvent(values);
            if (response) {
                onOpen('error', response.message);
                return
            }
            onOpen('success', 'Your reservation has been confirmed');
            formik.resetForm();
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            phone: Yup.string()
                .required('Required'),
            type: Yup.string().oneOf(['birthday', 'anniversary', 'other']),
            comment: Yup.string(),
            date: Yup.date()
                .required('Required'),
            time: Yup.string()
                .required('Required'),
            guests: Yup.number()
                .required('Required'),
        }),

    })
    const [sliderValue, setSliderValue] = useState(2)

    const inputStyles = {
        borderColor: '#527066',
        borderWidth: '2px',
        borderRadius: '12px',
        bg: '#34BD93',
        color: '#192E27',
    }
    return (
        <section className="resCont subPage">
            <h2>Reservations</h2>
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
                                    <Input
                                        id="time"
                                        name="time"
                                        size="md"
                                        type="time"
                                        style={inputStyles}
                                        onChange={formik.handleChange}
                                        value={formik.values.time}
                                        onBlur={formik.handleBlur}
                                        {...formik.getFieldProps("time")}
                                    />
                                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                                    <FormLabel pb={45} htmlFor="guests">Number of Guests* </FormLabel>
                                    <Slider defaultValue={2} min={2} max={12} step={1} aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                                        <SliderTrack
                                            bg="#527066"
                                        >
                                            <SliderFilledTrack
                                                bg='#2F5E4E'
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
                                >
                                    Submit
                                </Button>
                            </VStack>
                        </form>
                    </Box>
                </VStack>
            </div>
        </section>
    );
}

export default Reservations;