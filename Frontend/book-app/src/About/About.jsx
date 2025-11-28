import Style from "./About.module.css";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
function About() {
  return (
    <>
    <Navigation/>
    <div className={Style.container}>
      <section className={Style.hero}>
        <h1>About BookNest</h1>
        <p>
          Welcome to <b>BookNest</b> — your digital bookshelf!  
          We connect readers with stories, knowledge, and ideas that inspire.  
        </p>
      </section>
      <section className={Style.section}>
        <h2>Our Mission</h2>
        <p>
          Our goal is to make reading accessible, enjoyable, and personalized for
          everyone. Whether you’re into fiction, non-fiction, or academic books,
          BookNest brings all your favorites together in one place.
        </p>
      </section>

      
      <section className={Style.section}>
        <h2>Why Choose BookNest?</h2>
        <ul className={Style.features}>
          <li>📚 Huge collection of books across genres</li>
          <li>🔖 Bookmark and save your favorites</li>
          <li>🌙 Dark & light mode for comfortable reading</li>
          <li>🤝 Connect with a community of book lovers</li>
        </ul>
      </section>

      <section className={Style.team}>
        <h2>Meet the Team</h2>
        <div className={Style.teamGrid}>
          <div className={Style.card}>
            <img
              src="https://randomuser.me/api/portraits/men/22.jpg"
              alt="Founder"
            />
            <h3>Vicky Kumar</h3>
            <p>Founder & Book Enthusiast</p>
          </div>
          <div className={Style.card}>
            <img
              src="https://randomuser.me/api/portraits/women/33.jpg"
              alt="Designer"
            />
            <h3>Priya Sharma</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className={Style.card}>
            <img
              src="https://randomuser.me/api/portraits/men/77.jpg"
              alt="Developer"
            />
            <h3>Rahul Verma</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    </>
  );
}

export default About;
