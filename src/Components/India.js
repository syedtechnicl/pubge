import { Button, Center, Text } from "@chakra-ui/react";
import React from "react";

const India = () => {
  return (
    <>
      <div className="bacimage">
        <Text
          textAlign={"center"}
          p={10}
          color={"#fff"}
          fontWeight={"bold"}
          fontSize="6xl"
        >
          BATTLEGROUNDS MOB<span style={{ color: "red" }}>ILE</span> <br />{" "}
          INDIA <span style={{ color: "red" }}>2024</span>
        </Text>
        <Center>
          <Button bgColor={"#DD6B20"} size="lg">
            <a href="#register">Register</a>
          </Button>
        </Center>
      </div>
    </>
  );
};

export default India;
