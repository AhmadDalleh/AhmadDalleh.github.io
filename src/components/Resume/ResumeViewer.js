import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";



// Use the CDN worker for pdf.js (works without extra bundler config)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumeViewer({ file }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 18, alignItems: "center" }}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading={<div style={{ color: "#fff" }}>Loading CV…</div>}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
}

