import { type FC } from "react";
import { motion } from "motion/react";
import type { Certificate } from "./constants";

interface CertificateItemProps {
  certificate: Certificate;
}

const CertificateItem: FC<CertificateItemProps> = ({ certificate }) => {
  const hasBadge = "badgeUrl" in certificate;

  return (
    <motion.a
      href={certificate.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${certificate.name} certificate from ${certificate.issuer} (opens in new tab)`}
      className="flex flex-col items-center gap-2 w-44 text-center rounded-xl
      focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
      whileHover={{ y: -4, scale: 1.05 }}
    >
      <img
        src={hasBadge ? certificate.badgeUrl : certificate.issuerLogoUrl}
        alt=""
        width="128"
        height="128"
        className={`w-20 h-20 md:w-28 md:h-28 object-contain ${hasBadge ? "" : "rounded-xl bg-foreground p-3 md:p-5"}`}
      />
      <span className="text-lg font-semibold leading-tight">
        {certificate.name}
      </span>
      <span>{certificate.issuer}</span>
    </motion.a>
  );
};

export default CertificateItem;
