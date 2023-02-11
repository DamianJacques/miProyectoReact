import { Heading, Center, Box, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="Home-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="./Img/Home.jpg"
            alt="Acsis"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Home;