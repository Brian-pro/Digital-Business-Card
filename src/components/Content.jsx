export default function Content () {
    return (
        <div className="content-container">
            <div className="personal-info">
                <h1 className="name">Brian Rizer</h1>
                <h2 className="occupation">Frontend Developer</h2>
                <p className="email">brizer1234@gmail.com</p>
            </div>
            <div className="contact-links">
                <a href="" className="contact-button email-button" target= "_blank"><i className="fa-solid fa-envelope contact-icon"></i>Email</a>
                <a href="https://www.linkedin.com/in/brian-rizer-a2ba62209/" target= "_blank" className="contact-button linkedIn-button"><i className="fa-brands fa-linkedin contact-icon"></i>LinkedIn</a>
            </div>
            <div className="topic-section">
                <h4 className="topic-header">About</h4>
                <p className="topic-content">I am a frontend developer with an interest in developing and honing my skills in the field of web development. I am currently looking to take my first steps towards a new field in technology.</p>
                <h4 className="topic-header">Interests</h4>
                <p className="topic-content">Coffee enthusiast. Avid gamer. Cat dad. D&D fanatic. Love coding, maybe a bit too much, during my free time! </p>
            </div>
        </div>
    )
}