import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PDFViewer from "pdf-viewer-reactjs";

export default function ReadingSite() {
  return (
    <div style={{ backgroundColor: "#304D63" }}>
      <Container className="py-5 border">
        <PDFViewer
          document={{
            url: "https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf",
          }}
          scale={1.3}
        />
      </Container>
    </div>
  );
}
