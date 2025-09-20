import { Button } from "@/lib/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="md:pb-auto mx-auto flex h-full w-full flex-col items-center justify-center gap-y-10 pt-20 pb-10">
      <h2 className="block text-center text-xl font-bold md:text-left md:text-3xl">
        Strona nie znaleziona
      </h2>
      <p className="text-center text-base md:text-lg">
        Nie udało się znaleźć strony, której szukasz.
      </p>
      <Button>
        <Link href="/">Wróć do strony głównej</Link>
      </Button>
    </div>
  );
}
