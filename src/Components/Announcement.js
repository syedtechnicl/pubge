import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Announcement = () => {
  return (
    <>
      <marquee behavior="" direction="" style={{ color: "red" }}>
        <p color="red" style={{ paddingTop: "10px" }}>
          "My name is Habeeb Khan. If you wish to participate in our PUBG games,
          please contact me via WhatsApp at 7899991563.""My name is Habeeb Khan.
          If you wish to participate in our PUBG games, please contact me via
          WhatsApp at 7899991563.""My name is Habeeb Khan. If you wish to
          participate in our PUBG games, please contact me via WhatsApp at
          7899991563.""My name is Habeeb Khan. If you wish to participate in our
          PUBG games, please contact me via WhatsApp at 7899991563.""My name is
          Habeeb Khan. If you wish to participate in our PUBG games, please
          contact me via WhatsApp at 7899991563."{" "}
        </p>
      </marquee>

      <SimpleGrid columns={[1, 2]} spacing={1}>
        <Box>
          <Text p={15} fontSize="2xl" id="about">
            ABOUT
          </Text>
          <Text p={3} lineHeight={2} fontStyle={"italic"}>
            🔫🎮 Welcome to the battlegrounds of PUBG MOBILE CHAMPIONSHIP 2024!
            Calling all college students to gear up and join the ultimate
            showdown with a jaw-dropping prize pool exceeding 50 Lakh INR! 🏆 🚀
            Teams will carve their path to glory through intense matches, where
            skill and strategy reign supreme. But remember, it's not just about
            winning; it's about embracing the thrill and camaraderie of
            competitive gaming! 🌟 Think you have what it takes to dominate the
            battlefield and capture the attention of millions? Compete over four
            adrenaline-fueled weekends to claim the coveted title of regional
            streamer! Show off your prowess and charisma to win the hearts of
            fans across the nation! 🌍 Join forces with players from every
            corner of India as you battle it out for supremacy and fame. This
            isn't just any tournament; it's a chance to etch your name in the
            annals of e-sports history! 💰 Get ready to attract the attention of
            the biggest sponsors in gaming history as you showcase your skills
            in this monumental event. The spotlight is yours for the taking! 🎯
            It's time to step onto the battlefield, prove your worth, and seize
            your moment of glory! Don't hesitate—register now and embark on your
            journey to PUBG MOBILE immortality! Solo warriors, this is your time
            to shine! 💥
          </Text>
        </Box>
        <Box>
          <Img
            p={10}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBH_hJ0oOa23kLufg-y-5Zzw0N_yO3r1bY-Q&usqp=CAU"
            alt="No IMG"
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Announcement;
