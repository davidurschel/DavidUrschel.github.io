import React from "react";
import styles from "../style";
import "../constants/formStyles.css";
import { useState } from "react";
import { EMAIL } from "../constants";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formState, setFormState] = useState({});
  const EMAILJS_PUBLIC_KEY="bYSKWDquz40CHUYEE"

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    emailjs.init(EMAILJS_PUBLIC_KEY);
    emailjs.send(
      "default_service",
      "template_ugc92lm",
      {
        subject: formState.subject,
        message: formState.message,
        name: formState.name,
        sender_email: formState.email,
      },
    )
    .then((response) => {
      alert("Email sent successfully");
    })
    .catch((error) => {
      alert("Failed to send email: " + error.text);
    });
  };

  return (
    <div className="bg-primary w-full flex flex-col items-center">
      <div className={`${styles.heading2} mb-16`}>Contact Me</div>
      {<form onSubmit={submitHandler}>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          required
          onChange={changeHandler}
        ></input>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          required
          onChange={changeHandler}
        ></input>
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          required
          onChange={changeHandler}
        ></input>
        <textarea
          type="text"
          id="message"
          rows="4"
          placeholder="Message"
          required
          onChange={changeHandler}
        ></textarea>
        <button
          className="bg-stone-200 hover:bg-zinc-400 p-4 mx-auto font-poppins text-lg rounded-full mt-4"
          type="submit"
        >
          {"Send ->"}
        </button>
      </form>}

      <div className="mt-2 mb-24">
        Send an email to{" "}
        <a
          className="text-blue-600 underline"
          href={
            `mailto:${EMAIL}?body=%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0ASent via DavidUrschel.github.io`
          }
        >
          durschel@ualberta.ca
        </a>
        .
      </div>
    </div>
  );
}
