import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Loading from "../components/Loading";
import Toast from "../components/Toast";
// import ReCAPTCHA from "react-google-recaptcha";
import Head from "next/head";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMP_ID = process.env.NEXT_PUBLIC_TEMP_ID;
const EMAILJS_API_KEY = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

const defaultForm = {
  name: "",
  email: "",
  message: "",
};
export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState(defaultForm);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const contact = [
    {
      name: "fas fa-envelope-open-text",

      bg: "#FDC128",
      label: "email",
      details: "lerato.m029@gmail.com",
    },
    {
      name: "fas fa-map-marked",

      bg: "#16333F",
      label: "location",
      details: "Midrand, South Africa",
    },
  ];

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMP_ID,
        {
          from_name: form.name,
          to_name: "Lerato",
          from_email: form.email,
          to_email: "lerato.m029@gmail.com",
          message: form.message,
        },
        EMAILJS_API_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setForm(defaultForm);
        },
        (error) => {
          setLoading(false);
          console.log(error);
        }
      );
    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {

    // if (res.status === 200) {
    //   setLoading(false);
    //   setSubmitted(true);
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    // } else {

    // }
    // });
  };
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      {loading && <Loading />}
      <Toast hasError={hasError} setHasError={() => setHasError(!hasError)} />
      <Nav />
      <div className="container-fluid landing ">
        <h2 className="mb-5 text-center">Contact Details</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 m-0 ">
        {contact.map((info) => (
          <div key={info.name} className="col mx-0 gx-0 prime">
            <div
              className="card  text-white "
              style={{
                background: `${info.bg}`,
                height: "21rem",
                borderRadius: "0",
              }}
              title={info.label}
            >
              <div className="card-text text-center mt-5">
                <h1 className=" mt-5 " style={{ cursor: "pointer" }}>
                  <i className={`${info.name}`}></i>
                </h1>
                <h5 className="">{info.details}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mt-5">
        <form className="row" onSubmit={handleSubmit} ref={formRef}>
          <div
            className="col-md-6 middle card"
            style={{
              height: "21rem",
              borderRadius: "0",
            }}
          >
            <Image
              layout="fill"
              src="/table.svg"
              className="card-img slide-top"
              alt="Lerato mokgwabona"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <div
            className={`col-md-6 opaqueBorder m-0 ${submitted ? "middle" : ""}`}
          >
            {submitted ? (
              <h1 className="fw-bold textDark text-center mt-5">
                Message Sent! <i className="fas fa-thumbs-up"></i>
              </h1>
            ) : (
              <>
                <div className="row ">
                  <h5 className="text-secondary text-capitalize mt-5">
                    let's keep in touch!
                  </h5>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      placeholder="Name"
                      className="d-block my-4 w-100 p-2 form-control"
                      required
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      required
                      aria-describedby="emailHelp"
                      type="email"
                      name="email"
                      value={form.email}
                      placeholder="Email"
                      className="d-block my-4 w-100 p-2 form-control"
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <textarea
                  required
                  name="message"
                  id="description"
                  cols="30"
                  rows="6"
                  placeholder="Content"
                  value={form.message}
                  onChange={handleFormChange}
                  className="d-block my-4 w-100 p-2 form-control"
                />

                <button type="submit" className="btn btn-success px-4 my-4">
                  Submit
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
