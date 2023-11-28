import React from "react";
import footerImage from "../../../assets/images/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {

    const copyrightYear = new Date().getFullYear();

    return (
        <footer style={{
            background: `url(${footerImage})`,
            backgroundSize: 'cover'
        }} className="p-10 text-black mt-16">

            <div className="footer flex flex-col lg:flex-row justify-around">
                <nav>
                    <header className="footer-title">Services</header>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </nav>
            </div>

            <div className="text-center mt-32">
                <p>© Doctors Portal {copyrightYear}</p>
            </div>

        </footer>
    );
};

export default Footer;