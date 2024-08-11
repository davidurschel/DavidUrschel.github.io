import React from "react";
import styles from "../style";
import "../constants/formStyles.css";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const config = {
      SecureToken: "03cb4490-bbb8-4375-9d6b-e2dad985ec10",

      To: "durschel@ualberta.ca",
      From: "internalmessageself@gmail.com",
      Subject: formState.subject,
      Body:
        "<b>Message: </b>" +
        formState.message +
        "<br/><b>Sent by: </b>" +
        formState.name +
        "<br/><b>Sender email: </b>" +
        formState.email,
    };

    try {
      window.Email.send(config).then(alert("Email sent successfully"));
    } catch {
      alert("Failed to send email");
    }
  };

  return (
    <div className="bg-primary w-full flex flex-col items-center">
      <div className={`${styles.heading2} mb-16`}>Contact Me</div>
      {/* {<form onSubmit={submitHandler}>
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
      </form>} */}

      <div className="mt-2 mb-24">
        Send an email to{" "}
        <a
          className="text-blue-600 underline"
          href={
            "mailto:durschel@ualberta.ca?body=%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0ASent via DavidUrschel.com"
          }
        >
          durschel@ualberta.ca
        </a>
        .
      </div>
    </div>
  );
}
