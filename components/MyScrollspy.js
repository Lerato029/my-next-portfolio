///NAV NAV

import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
import Scrollspy from "react-scrollspy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faPenNib,
  faUsers,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

function MyScrollspy() {
  const router = useRouter();

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary  middle "
      sticky="top"
      style={{ top: "40px" }}
    >
      <Scrollspy
        className="flex m-0 p-0"
        items={["uxui", "websites", "gdesign", "articles"]}
        currentClassName="active"
      >
        <li className="py-2 px-4 textLight">
          <a href="#uxui">
            <FontAwesomeIcon icon={faUsers} />

            <span className="smHide"> UX/UI</span>
          </a>
        </li>
        <li className="py-2 px-4 textLight">
          <a href="#websites">
            {" "}
            <FontAwesomeIcon icon={faLaptopCode} />{" "}
            <span className="smHide">Websites</span>
          </a>
        </li>
        <li className="py-2 px-4 textLight">
          <a href="#gdesign">
            {" "}
            <FontAwesomeIcon icon={faPenNib} />{" "}
            <span className="smHide ">Graphic Design</span>
          </a>
        </li>

        <li className="p-2 textLight">
          <a href="#articles">
            {" "}
            <FontAwesomeIcon icon={faNewspaper} />{" "}
            <span className="smHide ">Articles</span>
          </a>
        </li>
      </Scrollspy>
    </Navbar>
  );
}

export default MyScrollspy;

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
