import { VStack, Box, Heading, Text } from '@chakra-ui/react';

const ConfirmedBooking = ({ bookingDetails }) => {
    const inputStyles = {
        color: '#192E27',
    }
    return (
        <div className="resBox">
            <VStack rounded={26} w="640px" p={54} alignItems="center" background="#BAD1CA"
                boxShadow="dark-lg"
                mb={50}>
                <Box pb="29px">
                    <Heading as="h3" size="lg" value={inputStyles} fontFamily="Markazi Text">You have successfully reserved a table!</Heading>
                </Box>
                {Object.entries(bookingDetails).map(([key, value]) => (
                    <Box textAlign="center" pt="35px" key={key}>
                        <Heading as="h4" size="md" pb="8px">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Heading>
                        <Text fontSize="24px" fontFamily="Karla">{value}</Text>
                    </Box>
                ))},
            </VStack>
        </div>

    );
};

export default ConfirmedBooking;