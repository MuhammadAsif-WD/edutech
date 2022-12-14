import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="d-flex">
      <Link
        style={{
          color: match ? "#64748b" : "white",
          textDecoration: match ? "none" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default NavLink;
