// //import link to allow navigation to other pages
// import Link from "next/link";
// import { useRouter } from "next/router";

// export default function Nav() {
//   const router = useRouter();
//   const isActive = (r) => {
//     if (router.pathname === r) {x
//       return "nav-link active";
//     } else {
//       return "nav-link";
//     }
//   };
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark ">
//       <div className="container-fluid">
//         <Link href="/">
//           <a className="navbar-brand" href="#">
//             Lerato Mokgwabona
//           </a>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarText"
//           aria-controls="navbarText"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarText">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
//             <li className="nav-item ">
//               <Link href="/">
//                 <a className={isActive("/")}>Home</a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/about">
//                 <a className={isActive("/about")}>About</a>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/contact">
//                 <a className={isActive("/contact")}>Contact</a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

///NAV NAV
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useRouter } from "next/router";

function MyNav() {
  const router = useRouter();
  const isActive = (r) => {
    if (router.pathname === r) {
      return "active";
    } else {
      return "";
    }
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-dark" sticky="top">
      <Container fluid>
        <Navbar.Brand className="textLight" href="/">
          Lerato Nyalungu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/" className={`${isActive("/")} textLight`}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={`${isActive("/about")} textLight`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={`${isActive("/contact")} textLight`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;

// import React from "react";
// import Scrollspy from "react-scrollspy";

// export default function Nav() {
//   return (
//     <div className="App">
//       <div>
//         <section id="section-1">
//           <h2>Section 1</h2>
//           <p>
//             What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
//             printing and typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text ever since the 1500s, when an unknown
//             printer took a galley of type and scrambled it to make a type
//             specimen book. It has survived not only five centuries, but also the
//             leap into electronic typesetting, remaining essentially unchanged.
//             It was popularised in the 1960s with the release of Letraset sheets
//             containing Lorem Ipsum passages, and more recently with desktop
//             publishing software like Aldus PageMaker including versions of Lorem
//             Ipsum. Why do we use it? It is a long established fact that a reader
//             will be distracted by the readable content of a page when looking at
//             its layout. The point of using Lorem Ipsum is that it has a
//             more-or-less normal distribution of letters, as opposed to using
//             'Content here, content here', making it look like readable English.
//             Many desktop publishing packages and web page editors now use Lorem
//             Ipsum as their default model text, and a search for 'lorem ipsum'
//             will uncover many web sites still in their infancy. Various versions
//             have evolved over the years, sometimes by accident, sometimes on
//             purpose (injected humour and the like). Where does it come from?
//             Contrary to popular belief, Lorem Ipsum is not simply random text.
//             It has roots in a piece of classical Latin literature from 45 BC,
//             making it over 2000 years old. Richard McClintock, a Latin professor
//             at Hampden-Sydney College in Virginia, looked up one of the more
//             obscure Latin words, consectetur, from a Lorem Ipsum passage, and
//             going through the cites of the word in classical literature,
//             discovered the undoubtable source. Lorem Ipsum comes from sections
//             1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
//             of Good and Evil) by Cicero, written in 45 BC. This book is a
//             treatise on the theory of ethics, very popular during the
//             Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
//             amet..", comes from a line in section 1.10.32. The standard chunk of
//             Lorem Ipsum used since the 1500s is reproduced below for those
//             interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
//             Malorum" by Cicero are also reproduced in their exact original form,
//             accompanied by English versions from the 1914 translation by H.
//             Rackham. Where can I get some? There are many variations of passages
//             of Lorem Ipsum available, but the majority have suffered alteration
//             in some form, by injected humour, or randomised words which don't
//             look even slightly believable. If you are going to use a passage of
//             Lorem Ipsum, you need to be sure there isn't anything embarrassing
//             hidden in the middle of text. All the Lorem Ipsum generators on the
//             Internet tend to repeat predefined chunks as necessary, making this
//             the first true generator on the Internet. It uses a dictionary of
//             over 200 Latin words, combined with a handful of model sentence
//             structures, to generate Lorem Ipsum which looks reasonable. The
//             generated Lorem Ipsum is therefore always free from repetition,
//             injected humour, or non-characteristic words etc.
//           </p>
//         </section>
//         <section id="section-2">
//           <h2>Section 2</h2>
//           <p>
//             What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
//             printing and typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text ever since the 1500s, when an unknown
//             printer took a galley of type and scrambled it to make a type
//             specimen book. It has survived not only five centuries, but also the
//             leap into electronic typesetting, remaining essentially unchanged.
//             It was popularised in the 1960s with the release of Letraset sheets
//             containing Lorem Ipsum passages, and more recently with desktop
//             publishing software like Aldus PageMaker including versions of Lorem
//             Ipsum. Why do we use it? It is a long established fact that a reader
//             will be distracted by the readable content of a page when looking at
//             its layout. The point of using Lorem Ipsum is that it has a
//             more-or-less normal distribution of letters, as opposed to using
//             'Content here, content here', making it look like readable English.
//             Many desktop publishing packages and web page editors now use Lorem
//             Ipsum as their default model text, and a search for 'lorem ipsum'
//             will uncover many web sites still in their infancy. Various versions
//             have evolved over the years, sometimes by accident, sometimes on
//             purpose (injected humour and the like). Where does it come from?
//             Contrary to popular belief, Lorem Ipsum is not simply random text.
//             It has roots in a piece of classical Latin literature from 45 BC,
//             making it over 2000 years old. Richard McClintock, a Latin professor
//             at Hampden-Sydney College in Virginia, looked up one of the more
//             obscure Latin words, consectetur, from a Lorem Ipsum passage, and
//             going through the cites of the word in classical literature,
//             discovered the undoubtable source. Lorem Ipsum comes from sections
//             1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
//             of Good and Evil) by Cicero, written in 45 BC. This book is a
//             treatise on the theory of ethics, very popular during the
//             Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
//             amet..", comes from a line in section 1.10.32. The standard chunk of
//             Lorem Ipsum used since the 1500s is reproduced below for those
//             interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
//             Malorum" by Cicero are also reproduced in their exact original form,
//             accompanied by English versions from the 1914 translation by H.
//             Rackham. Where can I get some? There are many variations of passages
//             of Lorem Ipsum available, but the majority have suffered alteration
//             in some form, by injected humour, or randomised words which don't
//             look even slightly believable. If you are going to use a passage of
//             Lorem Ipsum, you need to be sure there isn't anything embarrassing
//             hidden in the middle of text. All the Lorem Ipsum generators on the
//             Internet tend to repeat predefined chunks as necessary, making this
//             the first true generator on the Internet. It uses a dictionary of
//             over 200 Latin words, combined with a handful of model sentence
//             structures, to generate Lorem Ipsum which looks reasonable. The
//             generated Lorem Ipsum is therefore always free from repetition,
//             injected humour, or non-characteristic words etc.
//           </p>
//         </section>
//         <section id="section-3">
//           <h2>Section 3</h2>
//           <p>
//             What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
//             printing and typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text ever since the 1500s, when an unknown
//             printer took a galley of type and scrambled it to make a type
//             specimen book. It has survived not only five centuries, but also the
//             leap into electronic typesetting, remaining essentially unchanged.
//             It was popularised in the 1960s with the release of Letraset sheets
//             containing Lorem Ipsum passages, and more recently with desktop
//             publishing software like Aldus PageMaker including versions of Lorem
//             Ipsum. Why do we use it? It is a long established fact that a reader
//             will be distracted by the readable content of a page when looking at
//             its layout. The point of using Lorem Ipsum is that it has a
//             more-or-less normal distribution of letters, as opposed to using
//             'Content here, content here', making it look like readable English.
//             Many desktop publishing packages and web page editors now use Lorem
//             Ipsum as their default model text, and a search for 'lorem ipsum'
//             will uncover many web sites still in their infancy. Various versions
//             have evolved over the years, sometimes by accident, sometimes on
//             purpose (injected humour and the like). Where does it come from?
//             Contrary to popular belief, Lorem Ipsum is not simply random text.
//             It has roots in a piece of classical Latin literature from 45 BC,
//             making it over 2000 years old. Richard McClintock, a Latin professor
//             at Hampden-Sydney College in Virginia, looked up one of the more
//             obscure Latin words, consectetur, from a Lorem Ipsum passage, and
//             going through the cites of the word in classical literature,
//             discovered the undoubtable source. Lorem Ipsum comes from sections
//             1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
//             of Good and Evil) by Cicero, written in 45 BC. This book is a
//             treatise on the theory of ethics, very popular during the
//             Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
//             amet..", comes from a line in section 1.10.32. The standard chunk of
//             Lorem Ipsum used since the 1500s is reproduced below for those
//             interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
//             Malorum" by Cicero are also reproduced in their exact original form,
//             accompanied by English versions from the 1914 translation by H.
//             Rackham. Where can I get some? There are many variations of passages
//             of Lorem Ipsum available, but the majority have suffered alteration
//             in some form, by injected humour, or randomised words which don't
//             look even slightly believable. If you are going to use a passage of
//             Lorem Ipsum, you need to be sure there isn't anything embarrassing
//             hidden in the middle of text. All the Lorem Ipsum generators on the
//             Internet tend to repeat predefined chunks as necessary, making this
//             the first true generator on the Internet. It uses a dictionary of
//             over 200 Latin words, combined with a handful of model sentence
//             structures, to generate Lorem Ipsum which looks reasonable. The
//             generated Lorem Ipsum is therefore always free from repetition,
//             injected humour, or non-characteristic words etc.
//           </p>
//         </section>
//         <section id="section-4">
//           <h2>Section 4</h2>
//           <p>
//             What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
//             printing and typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text ever since the 1500s, when an unknown
//             printer took a galley of type and scrambled it to make a type
//             specimen book. It has survived not only five centuries, but also the
//             leap into electronic typesetting, remaining essentially unchanged.
//             It was popularised in the 1960s with the release of Letraset sheets
//             containing Lorem Ipsum passages, and more recently with desktop
//             publishing software like Aldus PageMaker including versions of Lorem
//             Ipsum. Why do we use it? It is a long established fact that a reader
//             will be distracted by the readable content of a page when looking at
//             its layout. The point of using Lorem Ipsum is that it has a
//             more-or-less normal distribution of letters, as opposed to using
//             'Content here, content here', making it look like readable English.
//             Many desktop publishing packages and web page editors now use Lorem
//             Ipsum as their default model text, and a search for 'lorem ipsum'
//             will uncover many web sites still in their infancy. Various versions
//             have evolved over the years, sometimes by accident, sometimes on
//             purpose (injected humour and the like). Where does it come from?
//             Contrary to popular belief, Lorem Ipsum is not simply random text.
//             It has roots in a piece of classical Latin literature from 45 BC,
//             making it over 2000 years old. Richard McClintock, a Latin professor
//             at Hampden-Sydney College in Virginia, looked up one of the more
//             obscure Latin words, consectetur, from a Lorem Ipsum passage, and
//             going through the cites of the word in classical literature,
//             discovered the undoubtable source. Lorem Ipsum comes from sections
//             1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
//             of Good and Evil) by Cicero, written in 45 BC. This book is a
//             treatise on the theory of ethics, very popular during the
//             Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
//             amet..", comes from a line in section 1.10.32. The standard chunk of
//             Lorem Ipsum used since the 1500s is reproduced below for those
//             interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
//             Malorum" by Cicero are also reproduced in their exact original form,
//             accompanied by English versions from the 1914 translation by H.
//             Rackham. Where can I get some? There are many variations of passages
//             of Lorem Ipsum available, but the majority have suffered alteration
//             in some form, by injected humour, or randomised words which don't
//             look even slightly believable. If you are going to use a passage of
//             Lorem Ipsum, you need to be sure there isn't anything embarrassing
//             hidden in the middle of text. All the Lorem Ipsum generators on the
//             Internet tend to repeat predefined chunks as necessary, making this
//             the first true generator on the Internet. It uses a dictionary of
//             over 200 Latin words, combined with a handful of model sentence
//             structures, to generate Lorem Ipsum which looks reasonable. The
//             generated Lorem Ipsum is therefore always free from repetition,
//             injected humour, or non-characteristic words etc.
//           </p>
//         </section>
//         <section id="section-5">
//           <h2>Section 5</h2>
//           <p>
//             What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
//             printing and typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text ever since the 1500s, when an unknown
//             printer took a galley of type and scrambled it to make a type
//             specimen book. It has survived not only five centuries, but also the
//             leap into electronic typesetting, remaining essentially unchanged.
//             It was popularised in the 1960s with the release of Letraset sheets
//             containing Lorem Ipsum passages, and more recently with desktop
//             publishing software like Aldus PageMaker including versions of Lorem
//             Ipsum. Why do we use it? It is a long established fact that a reader
//             will be distracted by the readable content of a page when looking at
//             its layout. The point of using Lorem Ipsum is that it has a
//             more-or-less normal distribution of letters, as opposed to using
//             'Content here, content here', making it look like readable English.
//             Many desktop publishing packages and web page editors now use Lorem
//             Ipsum as their default model text, and a search for 'lorem ipsum'
//             will uncover many web sites still in their infancy. Various versions
//             have evolved over the years, sometimes by accident, sometimes on
//             purpose (injected humour and the like). Where does it come from?
//             Contrary to popular belief, Lorem Ipsum is not simply random text.
//             It has roots in a piece of classical Latin literature from 45 BC,
//             making it over 2000 years old. Richard McClintock, a Latin professor
//             at Hampden-Sydney College in Virginia, looked up one of the more
//             obscure Latin words, consectetur, from a Lorem Ipsum passage, and
//             going through the cites of the word in classical literature,
//             discovered the undoubtable source. Lorem Ipsum comes from sections
//             1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
//             of Good and Evil) by Cicero, written in 45 BC. This book is a
//             treatise on the theory of ethics, very popular during the
//             Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
//             amet..", comes from a line in section 1.10.32. The standard chunk of
//             Lorem Ipsum used since the 1500s is reproduced below for those
//             interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
//             Malorum" by Cicero are also reproduced in their exact original form,
//             accompanied by English versions from the 1914 translation by H.
//             Rackham. Where can I get some? There are many variations of passages
//             of Lorem Ipsum available, but the majority have suffered alteration
//             in some form, by injected humour, or randomised words which don't
//             look even slightly believable. If you are going to use a passage of
//             Lorem Ipsum, you need to be sure there isn't anything embarrassing
//             hidden in the middle of text. All the Lorem Ipsum generators on the
//             Internet tend to repeat predefined chunks as necessary, making this
//             the first true generator on the Internet. It uses a dictionary of
//             over 200 Latin words, combined with a handful of model sentence
//             structures, to generate Lorem Ipsum which looks reasonable. The
//             generated Lorem Ipsum is therefore always free from repetition,
//             injected humour, or non-characteristic words etc.
//           </p>
//         </section>
//       </div>
//       <Scrollspy
//         className="scrollspy"
//         items={[
//           "section-1",
//           "section-2",
//           "section-3",
//           "section-4",
//           "section-5",
//         ]}
//         currentClassName="isCurrent"
//       >
//         <li>
//           <a href="#section-1">section 1</a>
//         </li>
//         <li>
//           <a href="#section-2">section 2</a>
//         </li>
//         <li>
//           <a href="#section-3">section 3</a>
//         </li>
//         <li>
//           <a href="#section-4">section 4</a>
//         </li>
//         <li>
//           <a href="#section-5">section 5</a>
//         </li>
//       </Scrollspy>
//     </div>
//   );
// }
