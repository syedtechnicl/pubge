import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  Radio,
  RadioGroup,
  Button,
  useToast,
  Img,
} from "@chakra-ui/react";

const Register = () => {
  const toast = useToast();

  return (
    <>
      <center>
        <div id="Qrscanner" className="nnpp"></div>
      </center>

      <br />

      <Box p={4} maxWidth="500px" margin="auto" id="register">
        <Heading as="h1" mb={8}>
          Registration Form
        </Heading>

        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
            <Input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="mobile">Payment ScreenShort</FormLabel>
            <Input
              type="file"
              id="mobile"
              placeholder="Enter your mobile number"
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="age">Age</FormLabel>
            <Input
              type="number"
              id="age"
              placeholder="Enter your age"
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <RadioGroup id="gender" defaultValue="male">
              <Stack direction="row">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <br />
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Register;
