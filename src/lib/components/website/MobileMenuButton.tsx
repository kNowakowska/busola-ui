import { useMediaQuery } from "react-responsive";

import HamburgerIcon from "@/lib/icons/HamburgerIcon";

export default function MobileMenuButton({ onClick }: { onClick: () => void }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <button className="icon justify-self-end md:m-0 m-2" onClick={onClick}>
      <HamburgerIcon size={isMobile ? 30 : 40} />
    </button>
  );
}
