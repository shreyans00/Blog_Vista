import { AppBar, Toolbar, styled, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: #ffffff;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
`;

const Logo = styled("img")`
  width: 100px;
  height: auto;
`;

const Header = () => {
  const navigate = useNavigate();

  const logout = async () => navigate("/account");

  return (
    <Component>
      <Logo src="./logo.png" alt="blog logo" />
      <Container>
        {/* <Link to="/"> */}

        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </Container>
      <Button onClick={logout}>LOGOUT</Button>
    </Component>
  );
};

export default Header;
