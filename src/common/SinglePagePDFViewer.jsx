import React, { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import "pdfjs-dist/legacy/build/pdf.worker";
pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/[version]/pdf.worker.min.js';

const SinglePagePDFViewer = ({ pdfUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const firstPage = await pdf.getPage(1);
      const viewport = firstPage.getViewport({ scale: 1 });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.height = 600; // Set canvas height
      canvas.width = viewport.width * (600 / viewport.height); // Scale width to maintain aspect ratio
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      firstPage.render(renderContext);
    };

    fetchPdf();
  }, [pdfUrl]);

  return <canvas ref={canvasRef} />;
};

export default SinglePagePDFViewer;
