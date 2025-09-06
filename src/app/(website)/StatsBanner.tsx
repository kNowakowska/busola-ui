import Container from "@/lib/components/website/Container";
import Image from "next/image";

export default function StatsBanner() {
  return (
    <div className="h-auto w-full bg-[var(--dark-beige)] py-20">
      <Container className="h-full flex flex-row items-center">
        <div className="w-1/3 h-full flex flex-col items-center space-y-10 px-10">
          <Image src="/stats2.png" alt="Stat 1" width={80} height={80} />
          <p className="text-xl whiteText">10 lat doświadczenia</p>
        </div>
        <div className="w-1/3 h-full flex flex-col items-center space-y-10 px-10 border-r-2 border-white border-l-2">
          <Image src="/stats3.png" alt="Stat 2" width={80} height={80} />
          <p className="text-xl whiteText">100+ kursantów</p>
        </div>
        <div className="w-1/3 h-full flex flex-col items-center space-y-10 px-10">
          <Image src="/stats1.png" alt="Stat 3" width={80} height={80} />
          <p className="text-xl whiteText">
            72% średni wynik moich uczniów na maturze
          </p>
        </div>
      </Container>
    </div>
  );
}
