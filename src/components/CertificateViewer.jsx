"use client";
import Image from "next/image";
import "../css/CertificateViewer.css";
import { FiX } from "react-icons/fi";

const CertificateViewer = ({
  certificateSrc,
  certificateTitle,
  isActive,
  onClose,
}) => {
  if (!isActive) return null;

  return (
    <div className="certificateViewerBox">
      <div className="certificateViewerCloser tinyBtn glass" onClick={onClose}>
        <FiX size={25} />
      </div>

      <div className="glass certificateInnerBox">
        {certificateSrc && (
          <Image
            key={certificateSrc} // 🔥 force re-render when src changes
            src={certificateSrc}
            alt={certificateTitle}
            height={500}
            width={700}
            onLoad={() => setLoading(false)} // ✅ more reliable
          />
        )}
      </div>
    </div>
  );
};

export default CertificateViewer;
