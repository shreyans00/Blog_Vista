import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../../constants/data";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #6495ed;
  color: #fff;
  text-decoration: none;
  &:hover {
    background: #4169e1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 8px;
  border-radius: 5px;

  &:hover {
    background: #f0f0f0;
  }

  &.active {
    background: #d0d0d0; /* Color for active link */
  }
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <Link
        to={`/create${category ? `?category=${category}` : ""}`}
        style={{ textDecoration: "none" }}
      >
        <StyledButton variant="contained">Create Blog</StyledButton>
      </Link>

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              <StyledLink to={"/"} className={!category ? "active" : ""}>
                All Categories
              </StyledLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((cat) => (
            <TableRow key={cat.id}>
              <TableCell>
                <StyledLink
                  to={`/?category=${cat.type}`}
                  className={cat.type === category ? "active" : ""}
                >
                  {cat.type}
                </StyledLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
