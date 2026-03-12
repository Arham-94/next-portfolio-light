import Background from "@/components/Background";
import CertificateViewer from "@/components/CertificateViewer";
import { certificates } from "@/db/certificates";
export default async function Page({ params }) {
  const { id } = await params;
  const certificateShown = certificates[id - 1];
  return (
    <>
      <Background />
      <CertificateViewer
        certificateSrc={certificateShown.path}
        certificateTitle={certificateShown.title}
      />
    </>
  );
}
