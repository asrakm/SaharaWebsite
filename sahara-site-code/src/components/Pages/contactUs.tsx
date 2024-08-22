import "./contactUs.css";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Contact: React.FC = () => {
  // initialize variable and set functions
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //will stop the page from refreshing

    // checks if the recaptcha was executed
    if (!executeRecaptcha) {
      console.error("reCAPTCHA not loaded");
      return;
    }

    const token = await executeRecaptcha("contact_form"); // save the token from the recaptcha in a variable

    // will send the users information to be sent as an email
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, token }),
      });

      // will check if the email successfully sent
      if (response.ok) {
        alert("Message successfully sent.");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error: ", error);
      alert("Failed to send messgae.");
    }
  };

  return (
    <>
      <form className="emailForm" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Contact;
