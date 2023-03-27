import styles from "./Footer.css";
export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-section">
                <p className="title">ResumeBuilder.com</p>
                <p>ResumeBuilder is a place where you can build your resume in a good format And our service is absolutely free.</p>
                <p>&copy; 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>saurabhshuklamtss1@gmail.com</p>
                <p>+91-8630607542</p>
                <p>Ambedakar Nagar</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
    )
}