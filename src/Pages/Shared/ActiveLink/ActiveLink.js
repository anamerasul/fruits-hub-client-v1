import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const ActiveLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link style={{ color: match ? "#fbff03" : "#f2f7f4" }} to={to} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
