import { useState } from "react";
import Nav from "../components/Nav";
import Loading from "../components/Loading";
import Toast from "../components/Toast";
import ReCAPTCHA from "react-google-recaptcha";
import Head from "next/head";
import Image from "next/image";
const API_KEY = process.env.NEXT_PUBLIC_RECAPTURE_CLIENT;
console.log("API_KEY", API_KEY);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState("");

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
      details: "germiston, south africa",
    },
  ];

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      name,
      email,
      message,
    };

    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // }).then((res) => {
    console.log(res);
    console.log("Response received");
    // if (res.status === 200) {
    //   setLoading(false);
    //   setSubmitted(true);
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    // } else {
    setLoading(false);
    setNotify("show");
    // }
    // });
  };
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      {loading && <Loading />}
      <Toast notify={notify} setNotify={() => setNotify("")} />
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
                <h5 className="text-capitalize">{info.details}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mt-5">
        <form className="row" onSubmit={handleSubmit}>
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
                      name="title"
                      value={name}
                      placeholder="Name"
                      className="d-block my-4 w-100 p-2 form-control"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      required
                      aria-describedby="emailHelp"
                      type="email"
                      name="title"
                      value={email}
                      placeholder="Email"
                      className="d-block my-4 w-100 p-2 form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <textarea
                  required
                  name="content"
                  id="description"
                  cols="30"
                  rows="6"
                  placeholder="Content"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
