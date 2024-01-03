import { Box, styled, Typography, Link } from "@mui/material";
import { LinkedIn, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px top -100px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: -30px;
  text-align: center;
`;

const Title = styled(Typography)`
  color: rgb(14, 75, 82);
  margin-bottom: 20px;
`;

const IconLink = styled(Link)`
  font-size: 2.5rem;
  margin: 0 10px;
  color: #4caf50;
  &:hover {
    color: #388e3c;
  }
`;

const Contact = () => {
  return (
    <Box>
      <Banner>
        <Typography variant="h3">Getting in touch is easy!</Typography>
      </Banner>
      <Wrapper>
        <Title variant="h5">
          Reach out to me on
          <IconLink
            href="https://www.linkedin.com/in/shreyans-b39844299/"
            target="_blank"
          >
            <LinkedIn />
          </IconLink>
          or send me an Email
          <IconLink href="mailto:shreyansraj3@gmail.com?Subject=Let's plan a virtual coffee!!!">
            <Email />
          </IconLink>
        </Title>
      </Wrapper>
    </Box>
  );
};

export default Contact;
