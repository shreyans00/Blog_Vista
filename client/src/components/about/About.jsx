import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, LinkedIn, Facebook, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 52vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #rgb(14, 75, 82)
  text-align: center;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: -30px;
`;

const Title = styled(Typography)`
  color: rgb(14, 75, 82);
  margin-block: 1em;
  font-size: 2em;
  text-align: center;
  font-weight: bold;
`;

const Text = styled(Typography)`
  color: rgb(14, 75, 82);
  line-height: 1.8;
`;

const StyledLink = styled(Link)`
  color: #4caf50;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const InteractiveIcon = styled(Box)`
  display: inline-block;
  margin-right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #4caf50;
  }
`;

const About = () => {
  return (
    <Box>
      <Banner>
        <Typography variant="h3">BLOG_VISTA</Typography>
      </Banner>
      <Wrapper>
        <Title variant="h5">Elevating Experiences, Weaving Narratives</Title>
        <Text>
          Blog_Vista is an innovative application designed with the primary
          objective of curating and showcasing the unique perspectives of
          diverse bloggers through their thoughtfully crafted write-ups. This
          platform is dedicated to fostering a sense of community, where
          individuals from all walks of life can immerse themselves in a
          plethora of engaging narratives.
          <br />
          In the Blog_Vista family, every member has the opportunity to explore
          a wealth of blogs spanning a wide array of topics, from personal
          reflections to expert analyses. Furthermore, our interactive platform
          encourages active participation by allowing users to engage with the
          content through comments, creating a dynamic and inclusive space for
          meaningful discussions.
          <br />
          Blog_Vista is more than just an application; it is a collective
          endeavor to capture moments and craft stories that resonate with the
          richness of the human experience.
          <br />
          Join us on Blog_Vista and become part of a vibrant community that
          celebrates the art of storytelling.{" "}
          <StyledLink href="https://github.com/shreyans00" target="_blank">
            <GitHub />
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/shreyans-b39844299/"
            target="_blank"
          >
            <LinkedIn />
          </StyledLink>
          <StyledLink
            href="https://www.facebook.com/shreyans.raj.16"
            target="_blank"
          >
            <Facebook />
          </StyledLink>
          <InteractiveIcon>
            <StyledLink href="mailto:shreyansraj3@gmail.com">
              <Email />
            </StyledLink>
          </InteractiveIcon>
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
