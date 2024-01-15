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
import { useAlertContext } from "../context/alertContext";


const Reservations = () => {
    const [sliderValue, setSliderValue] = useState(50)

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }
    const inputStyles = {
        borderColor:'#527066',
        borderWidth:'2px',
        borderRadius:'12px',
        bg:'#34BD93',
        color: '#192E27',
   }
    return (
        <section className="resCont subPage">
            <h2>Reservations</h2>
            <div className="resBox">
                <VStack rounded={26} w="640px" p={34} alignItems="flex-start" background="#7A998F">
                    <Box p={12} rounded="md" w="100%">
                        <form>
                            <VStack spacing={9}>
                                <FormControl isInvalid={false}>
                                    <FormLabel htmlFor="date">Select Date*</FormLabel>
                                    <Input
                                        id="date"
                                        name="date"
                                        size="md"
                                        type="date"
                                        style={inputStyles}

                                    />
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={false}>
                                    <FormLabel htmlFor="time">Select Time*</FormLabel>
                                    <Input
                                        id="time"
                                        name="time"
                                        size="md"
                                        type="time"
                                        style={inputStyles}
                                    />
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={false}>
                                    <FormLabel pb={45} htmlFor="guests">Number of Guests* </FormLabel>
                                    <Slider defaultValue={2} min={2} max={12} step={1} aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                                        <SliderTrack
                                            bg="#527066"
                                        >
                                            <SliderFilledTrack
                                                bg='#273C35'
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
                                        <option value="hireMe">Birthday</option>
                                        <option value="openSource">
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
                                <FormControl isInvalid={false}>
                                    <FormLabel htmlFor="firstName">Name*</FormLabel>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        style={inputStyles}
                                    />
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={false}>
                                    <FormLabel htmlFor="email">Email*</FormLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        style={inputStyles}
                                    />
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={false}>
                                    <FormLabel htmlFor="phone">Phone number*</FormLabel>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="phone"
                                        style={inputStyles}
                                    />
                                    <FormErrorMessage></FormErrorMessage>
                                </FormControl>
                                <Button type="submit" colorScheme="purple" width="full">
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