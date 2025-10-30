// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// // Viewer controls intentionally removed — buttons were simplified per user request
// import cvPdf from "../../Assets/Ahmad_Dalleh_CV.pdf";
// import ResumeViewer from "./ResumeViewer";
// import { AiOutlineDownload } from "react-icons/ai"; // ✅ Add this import


// function ResumeNew() {
//   const pdfPath = cvPdf;

//   const handlePrint = () => {
//     // Open the PDF in a new window and attempt to trigger print.
//     const win = window.open(pdfPath, "_blank", "noopener,noreferrer");
//     if (!win) return;
//     try {
//       // Attempt to print after load; fallback to timeout if onload isn't available.
//       win.focus();
//       win.onload = () => {
//         try {
//           win.print();
//         } catch (e) {
//           // ignore
//         }
//       };
//       // Fallback: try again after 1s in case onload doesn't fire for PDFs
//       setTimeout(() => {
//         try {
//           win.print();
//         } catch (e) {
//           // ignore
//         }
//       }, 1000);
//     } catch (e) {
//       // ignore
//     }
//   };

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         {/* Action buttons removed per request — the embedded CV displays without controls */}

//         <Row style={{ paddingTop: 30 }}>
//           <Col md={12}>
//             {/* Use a richer PDF viewer with navigation and zoom */}
//             <ResumeViewer file={pdfPath} />
//           </Col>
//         </Row>
//         <Row style={{ justifyContent: "center", marginTop: 18 }}>
//           <Button
//             variant="primary"
//             href={pdfPath}
//             download="Ahmad_Dalleh_CV.pdf"
//             aria-label="Download CV"
//             style={{ maxWidth: "220px" }}
//             >
//             </Button>
//             <AiOutlineDownload />&nbsp;Download CV
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import { AiOutlineDownload } from "react-icons/ai";
// import cvPdf from "../../Assets/Ahmad_Dalleh_CV.pdf";
// import ResumeViewer from "./ResumeViewer";

// function ResumeNew() {
//   const pdfPath = cvPdf;

//   const handlePrint = () => {
//     const win = window.open(pdfPath, "_blank", "noopener,noreferrer");
//     if (!win) return;
//     try {
//       win.focus();
//       win.onload = () => {
//         try {
//           win.print();
//         } catch (e) {}
//       };
//       setTimeout(() => {
//         try {
//           win.print();
//         } catch (e) {}
//       }, 1000);
//     } catch (e) {}
//   };

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         {/* Move the Resume Viewer to the top */}
//         <Row style={{ paddingTop: "10px" }}>
//           <Col md={12}>
//             <ResumeViewer file={pdfPath} />
//           </Col>
//         </Row>

//         {/* Centered download button below */}
//         <Row style={{ justifyContent: "center", marginTop: "20px" }}>
//           <Button
//             variant="primary"
//             href={pdfPath}
//             download="Ahmad_Dalleh_CV.pdf"
//             aria-label="Download CV"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               maxWidth: "220px",
//               justifyContent: "center",
//               fontWeight: "500",
//             }}
//           >
//             <AiOutlineDownload size={20} />
//             Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }
// export default ResumeNew;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import { AiOutlineDownload } from "react-icons/ai";
// import cvPdf from "../../Assets/Ahmad_Dalleh_CV.pdf";
// import ResumeViewer from "./ResumeViewer";

// function ResumeNew() {
//   const pdfPath = cvPdf;

//   // ✅ Force file download instead of opening it in browser
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = pdfPath;
//     link.download = "Ahmad_Dalleh_CV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         {/* Download button first */}
//         <Row style={{ justifyContent: "center", marginTop: "20px" }}>
//           <Button
//             variant="primary"
//             onClick={handleDownload}
//             aria-label="Download CV"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               maxWidth: "220px",
//               justifyContent: "center",
//               fontWeight: "500",
//             }}
//           >
//             <AiOutlineDownload size={20} />
//             Download CV
//           </Button>
//         </Row>

//         {/* Then the CV viewer below */}
//         <Row style={{ paddingTop: "20px" }}>
//           <Col md={12}>
//             <ResumeViewer file={pdfPath} />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import { AiOutlineDownload } from "react-icons/ai";
// import cvPdf from "../../Assets/Ahmad_Dalleh_CV.pdf";
// import ResumeViewer from "./ResumeViewer";

// function ResumeNew() {
//   const pdfPath = cvPdf;

//   // ✅ Open CV in a new tab
//   const handleOpenCV = () => {
//     window.open(pdfPath, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />

//         {/* Download (open) button at the top */}
//         <Row style={{ justifyContent: "center", marginTop: "20px" }}>
//           <Button
//             variant="primary"
//             onClick={handleOpenCV}
//             aria-label="Open CV"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               maxWidth: "220px",
//               justifyContent: "center",
//               fontWeight: "500",
//             }}
//           >
//             <AiOutlineDownload size={20} />
//             Open CV
//           </Button>
//         </Row>

//         {/* CV viewer below */}
//         <Row style={{ paddingTop: "20px" }}>
//           <Col md={12}>
//             <ResumeViewer file={pdfPath} />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import cvPdf from "../../Assets/Ahmad_Dalleh_CV.pdf";
import ResumeViewer from "./ResumeViewer";

function ResumeNew() {
  const handleOpenCV = () => {
    try {
      // This builds a correct full URL even after deployment
      const pdfURL = `${window.location.origin}${cvPdf.startsWith("/") ? cvPdf : "/" + cvPdf}`;
      window.open(pdfURL, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("Failed to open CV:", err);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Button before CV */}
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            onClick={handleOpenCV}
            aria-label="Open CV"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              maxWidth: "220px",
              justifyContent: "center",
              fontWeight: "500",
            }}
          >
            <AiOutlineDownload size={20} />
            Open CV
          </Button>
        </Row>

        {/* CV below */}
        <Row style={{ paddingTop: "20px" }}>
          <Col md={12}>
            <ResumeViewer file={cvPdf} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
