import "./index.css";
import weddingPic from "../../assets/homePhotos/wedding.jpeg";
import birthdayPic from "../../assets/homePhotos/birthday.jpg";
import workPic from "../../assets/homePhotos/company.jpg";
import holdidayPic from "../../assets/homePhotos/holiday.jpg";

const Home: React.FC = () => {
  const onClickContact = () => {
    window.location.href = "/contactUs";
  };

  const onClickGallery = () => {
    window.location.href = "/gallery";
  };

  return (
    <div className="homePage">
      <div className="hero-image">
        <div className="hero-content">
          <h1 className="pageHeader" style={{ fontSize: 40 }}>
            <i>
              Create Unforgettable Moments at <br></br>
              <span style={{ fontSize: 60 }}>Sahara Banquet Hall</span>
            </i>
          </h1>
          <p id="heroInfo" style={{ fontSize: 25 }}>
            At Sahara Banquet Hall, we specialize in creating beautiful and
            memorable events. From weddings to corporate gatherings, our elegant
            venue is designed to make every occasion special.
          </p>
          <button onClick={onClickContact}>Book Your Event</button>
        </div>
        <button id="galleryButton" onClick={onClickGallery}>
          See More Photos
        </button>
      </div>

      <div id="about-us">
        <div className="aboutContainer">
          <h1 className="headers">About Us</h1>
          <p className="sectionInfo">
            Sahara Banquet Hall is a family owned business and has been
            delivering results since we opened in 2015. Our goal is to provide
            both a superior customer experience and tremendous value for our
            customers in their banquet hall needs for Wedding Venues,
            Quinceaneras, Birthdays, Private Parties and Business Events. We
            would like to prove to our customers that we offer competitive
            prices that can’t be beat.
          </p>
        </div>
      </div>

      <section id="services">
        <div className="serviceContainer">
          <h1 className="headers" id="serviceHeader">
            Our Services
          </h1>
          <p id="serviceDesc">
            At Sahara Banquet Hall, we specialize in creating personalized
            decorations to suit your unique event. Whether you envision a grand,
            opulent setup or a simple, elegant ambiance, we will work with you
            to bring your vision to life. From festive winter wonderlands to
            vibrant summer celebrations, you can choose from a variety of themes
            or collaborate with us to design a custom theme that reflects your
            style and preferences. If you prefer a personal touch, you are
            welcome to bring your own decorations. We’ll assist in setting up
            and integrating your items with our venue’s design. Whether it’s
            custom centerpieces, unique table settings, or other personal
            touches, we will ensure they complement our space beautifully.
          </p>
          <div className="services">
            <div className="service">
              <img className="servicePictures" src={weddingPic}></img>
              <figcaption className="pictureCaptions">
                <h3 className="serviceH3">Weddings</h3>
                {/*<p className="serviceInfo">
                  Our team is committed to transforming your vision into a
                  reality, ensuring your special occasion is a true reflection
                  of your love and unique personality.
                </p>*/}
              </figcaption>
            </div>

            <div className="service">
              <img className="servicePictures" src={workPic}></img>
              <figcaption className="pictureCaptions">
                <h3 className="serviceH3">Business Events</h3>
                {/*<p className="serviceInfo">
                  We provide companies and businesses a place to host their
                  Social Events, Conventions, Training and Tradeshows.
                </p>*/}
              </figcaption>
            </div>
            <div className="service">
              <img className="servicePictures" src={birthdayPic}></img>
              <figcaption className="pictureCaptions">
                <h3 className="serviceH3">Birthday Celebrations</h3>
                {/*<p className="serviceInfo">
                  We would love to plan your next Birthday Celebration at Sahara
                  Hall. We will do our best to design and decorate to your
                  specific needs.
                </p>*/}
              </figcaption>
            </div>
            <div className="service">
              <img className="servicePictures" src={holdidayPic}></img>
              <figcaption className="pictureCaptions">
                <h3 className="serviceH3">Holiday Parties</h3>
                {/*<p className="serviceInfo">
                  Book your next Holiday Party with us. We will provide
                  decorations and space to host your next big Holiday Party.
                </p>*/}
              </figcaption>
            </div>
            <button id="contactButton" onClick={onClickContact}>
              Book Your Event
            </button>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <h1 className="headers">What Our Clients Say</h1>
          <blockquote>
            "The Sahara Banquet Hall provided an exceptional experience for our
            wedding. The staff was professional, and the venue was stunning!" -
            Jane Doe
          </blockquote>
          <blockquote>
            "We hosted our corporate event here and couldn’t be happier. The
            service was excellent, and the setup was perfect." - John Smith
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;
