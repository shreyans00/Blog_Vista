import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
    center/cover no-repeat;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  // Adding animation
  animation: scaleAnimation 5s ease-in-out;

  @keyframes scaleAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  perspective: 1000px;
`;

const Heading = styled(Typography)`
  font-size: 60px;
  color: rgb(14, 75, 82);
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  &:hover {
    background-color: rgb(14, 75, 82);
    color: white;
  }
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BlogVista</Heading>
      <SubHeading>Elevate Your Thoughts</SubHeading>
    </Image>
  );
};

export default Banner;
