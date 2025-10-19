import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Nav() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top py-4 ${
                scrolled ? "bg-dark shadow-sm" : "bg-transparent"
            } transition-all`}
        >
            <div className="container">
                <a className="navbar-brand text-white fw-bold fs-4" href="#">
                    <img src="	https://html.themexriver.com/topapp/images/logo.png" alt="" />
                </a>

                <button
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        {["home", "features", "how-it-works", "pricing", "blog", "contact"].map((item) => (
                            <li className="nav-item" key={item}>
                                <Link
                                    to={item}
                                    smooth={true}
                                    duration={100}
                                    spy={true}
                                    onSetActive={handleSetActive}
                                    className={`nav-link text-capitalize ${
                                        activeLink === item ? "text-white fw-semibold" : "text-white"
                                    }`}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <div className="nav-btn">
                            <button>Download App</button>
                        </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
