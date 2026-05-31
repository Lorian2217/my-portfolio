"use client";

import { useEffect, useState } from "react";
import LeadModal from "../components/modal";

export default function ModalProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openModal = () => setIsOpen(true);

    window.addEventListener("openLeadModal", openModal);

    return () => {
      window.removeEventListener("openLeadModal", openModal);
    };
  }, []);

  return (
    <LeadModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
}