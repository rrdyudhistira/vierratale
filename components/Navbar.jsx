import Link from "next/link";
import { withRouter } from "next/router";

function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "Merchandise", href: "#merchandise" },
    { text: "About", href: "#about" },
    { text: "Contact Us", href: "#" },
  ];

  return (
    <nav className="navbar">
      <div className="container-navbar">
        {/* <image src="/favicon.jpg" height="60px" alt="logo">Logo</image> */}
        <ul className="nav-links">
          {navs.map((nav, idx) => (
            <li
              key={`nav-${idx}`}
              className={`nav-item ${router.pathname == nav.href ? "active" : ""
                }`}
            >
              <Link href={nav.href} passHref prefetch={false}>
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
