import React from "react";
import { Link } from "react-router-dom";

const pages = [
  {
    name: "لوحة التحكم",
    link: "/dashboard",
  },
];

export default function NavLinks() {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {pages.map((page, i) => (
        <li className="nav-item" key={i}>
          <Link
            to={page.link}
            className="nav-link active"
            aria-current={page.name}
          >
            {page.name}
          </Link>
        </li>
      ))}
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Another action
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Something else here
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled">Disabled</Link>
      </li>
    </ul>
  );
}
