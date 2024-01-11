/* 
    This component shares information about the founder of Shared Vision.
    It imports styles from the './about.styles.scss' file.
*/

import './about.styles.scss';

const About = () => {
    return (
        <div>
            <header className="about-header">
                <h1>About Me</h1>
            </header>
            <div className="about-container">
                <img className='profile-pic' src='/profile_pic.jpeg' alt='profile picture' height='200px' width='200px' />
                <p className="about-desc">
                    Hi! My name is Laura Gaber and I am the founder and head tutor of Shared Vision Tutoring.
                    After graduating with a B.S in software engineering and professionally practicing in that field,
                    I returned to school to earn my teaching certificate. Eventually, I taught high-school Algebra 2 Honors and
                    Foundations of Programming. (Fun fact: I coded the web application you're currently using!). Previous to earning my degree, I tutored university students in computer programming
                    and advanced math. I have also worked with K-12 students, helping them with different coursework.
                    I have experience working with a wide range of age groups with a diverse set of personalities and abilities.
                    I love my students and it brings me so much joy watching them challenge themselves to eventually reap the benefits of their hard work.
                </p>
            </div>
        </div>
    )
}

export default About;