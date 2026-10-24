import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Icon, { IconName } from "./Icon";
import { contactChannels, profile } from "../data/profile";
import "../assets/styles/Contact.scss";

const iconNames: Record<string, IconName> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Medium: "medium",
  LeetCode: "leetcode",
  Goodreads: "goodreads",
  HackerRank: "hackerrank",
};

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const form = useRef<HTMLFormElement | null>(null);

  const validate = () => {
    const next: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "That email address looks incomplete.";
    }
    if (!message.trim()) next.message = "Please write a short message.";
    return next;
  };

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ state: "error", message: "Have a look at the highlighted fields." });
      return;
    }

    setStatus({ state: "sending" });

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_hh7es0t";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_im1bms6";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "rrvcf1sHUgT5ehkl8";

    emailjs.send(serviceId, templateId, { name, email, message }, publicKey).then(
      () => {
        setStatus({ state: "sent", message: "Message sent. I will get back to you soon." });
        setName("");
        setEmail("");
        setMessage("");
      },
      () => {
        setStatus({
          state: "error",
          message: `That did not go through. Email me directly at ${profile.email}.`,
        });
      },
    );
  };

  return (
    <section className="section container contact" aria-labelledby="contact-heading">
      <header className="page-head">
        <p className="eyebrow">Contact</p>
        <h1 id="contact-heading">Let&apos;s talk</h1>
        <p className="lede">
          If you want to discuss a project, an opening on your team, or something I wrote, my inbox
          is open. The form below reaches the same place as email.
        </p>
      </header>

      <div className="contact__grid">
        <div className="contact__direct">
          <div className="contact__block">
            <p className="contact__label mono">Email</p>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <div className="contact__block">
            <p className="contact__label mono">Elsewhere</p>
            <ul className="contact__channels">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  <a href={channel.href} target="_blank" rel="noreferrer">
                    <Icon name={iconNames[channel.label]} className="contact__channel-icon" />
                    <span className="contact__channel-name">{channel.label}</span>
                    <span className="contact__channel-handle mono">{channel.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          ref={form}
          noValidate
          autoComplete="on"
          className="contact-form"
          onSubmit={sendEmail}
        >
          <div className="contact-form__row">
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                onChange={(event) => setName(event.target.value)}
              />
              {errors.name && (
                <p className="field__error" id="contact-name-error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                onChange={(event) => setEmail(event.target.value)}
              />
              {errors.email && (
                <p className="field__error" id="contact-email-error">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              value={message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              onChange={(event) => setMessage(event.target.value)}
            />
            {errors.message && (
              <p className="field__error" id="contact-message-error">
                {errors.message}
              </p>
            )}
          </div>

          <div className="contact-form__actions">
            <button className="button" type="submit" disabled={status.state === "sending"}>
              {status.state === "sending" ? "Sending..." : "Send message"}
            </button>
            <p
              className={`contact-form__status${
                status.state === "error" ? " is-error" : ""
              }${status.state === "sent" ? " is-sent" : ""}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
