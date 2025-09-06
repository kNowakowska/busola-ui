import PhotoSlider from "@/lib/components/PhotoSlider";
import Container from "@/lib/components/website/Container";

export default function Testimony() {
  return (
    <div className="h-auto w-full bg-[var(--light-blue)]">
      <Container className="space-y-20 py-20 ">
        <h2 className="text-4xl font-black tracking-wide">Opinie</h2>
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
