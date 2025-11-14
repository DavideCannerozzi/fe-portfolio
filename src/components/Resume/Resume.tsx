import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import Buttons from "../Buttons/Buttons";

export default function Resume() {
  const handleDownload = () => {
    if (window.gtag) {
      window.gtag("event", "Download Resume");
    }
  };
  return (
    <section id="resume">
      <h2>
        <span role="img" aria-label="resume" className="text-3xl">
          📄
        </span>
        Resume
      </h2>
      <div className="w-full max-w-[800px] h-[600px] border border-gray-300 shadow-xl">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl="/cv_CannerozziDavideFE01.pdf" />
        </Worker>
      </div>

      <div className="flex justify-center mt-12">
        <Buttons
          text="Download my Resume"
          href="/cv_CannerozziDavideFE01.pdf"
          onClick={handleDownload}
        />
      </div>
    </section>
  );
}
