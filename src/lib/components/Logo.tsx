import Image from "next/image";
import { Routes } from "../routes/routes";

export default function Logo() {
  return (
    <div>
      <a href={Routes.home()}>
        <Image
          src="/busola-korepetycje-logo-puste-2.png"
          alt="Busola"
          width={150}
          height={150}
        />
      </a>
    </div>
  );
}
