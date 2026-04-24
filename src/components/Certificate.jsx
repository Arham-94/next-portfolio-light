"use client";
import { useState, useEffect } from "react";
import "@/css/Certificate.css";
import Image from "next/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { certificates } from "@/db/certificates";
import CertificateViewer from "./CertificateViewer";
import CustomLoader from "./CustomLoader";

const Certificate = () => {
  if (!certificates || certificates.length === 0) return null;

  const [certificateIndex, setCertificateIndex] = useState(0);
  const [isActiveCertificateViewerBox, setIsActiveCertificateViewerBox] =
    useState(false);

  const [loading, setLoading] = useState(true);

  const certificateShown = certificates[certificateIndex];

  const nextCertificate = () =>
    setCertificateIndex((prev) =>
      prev + 1 >= certificates.length ? 0 : prev + 1,
    );

  const previousCertificate = () =>
    setCertificateIndex((prev) =>
      prev - 1 < 0 ? certificates.length - 1 : prev - 1,
    );

  // ✅ Reset loader when certificate changes
  useEffect(() => {
    setLoading(true);
  }, [certificateIndex]);

  return (
    <>
      <CertificateViewer
        certificateSrc={certificateShown.path}
        certificateTitle={certificateShown.title}
        isActive={isActiveCertificateViewerBox}
        onClose={() => setIsActiveCertificateViewerBox(false)}
      />

      <div className="section" id="certificates">
        <div className="heading sectionHeading gradientText">
          Certification.
        </div>

        <div className="glass certificateDisplayContainer">
          <div className="subHeading certificateTitle gradientText">
            {certificateShown.title}
          </div>

          <div
            className="certificateCover"
            onClick={() => setIsActiveCertificateViewerBox(true)}
          ></div>

          <div
            className="tinyBtn glass certificateLeftBtn"
            onClick={previousCertificate}
          >
            <FaArrowAltCircleLeft size={20} />
          </div>

          <div
            className="tinyBtn glass certificateRightBtn"
            onClick={nextCertificate}
          >
            <FaArrowAltCircleRight size={20} />
          </div>

          <div className="certificateDisplay">
            {loading && <CustomLoader />}

            {certificateShown.path && (
              <Image
                key={certificateShown.path} // 🔥 important
                src={certificateShown.path}
                alt={certificateShown.title}
                fill
                onLoad={() => setLoading(false)} // ✅ correct trigger
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
