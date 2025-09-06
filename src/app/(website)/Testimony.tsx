import PhotoSlider from "@/lib/components/PhotoSlider";
import Container from "@/lib/components/website/Container";

export default function Testimony() {
  return (
    <div id="testimony" className="h-auto w-full bg-[var(--light-blue)]">
      <Container className="md:space-y-20 space-y-10 md:py-20 py-10 ">
        <h2 className="md:text-4xl text-3xl font-black tracking-wide">
          Opinie
        </h2>
        <div className="flex flex-row items-center gap-5">
          <PhotoSlider
            images={[
              "/opinion1.png",
              "/opinion2.png",
              "/opinion4.png",
              "/opinia-asia.png",
            ]}
          />
        </div>
      </Container>
    </div>
  );
}
