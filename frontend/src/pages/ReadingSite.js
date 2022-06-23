import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PDFViewer from "pdf-viewer-reactjs";

export default function ReadingSite() {
  return (
    <div style={{ backgroundColor: "#304D63" }}>
      <Container className="py-5 border">
        <PDFViewer
          document={{
            url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
          }}
          scale={1.3}
        />
      </Container>
    </div>
  );
}
