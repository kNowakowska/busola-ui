import Container from "@/lib/components/website/Container";

export default function Banner() {
  return (
    <div className="h-[50vh] w-full">
      <Container className="h-full w-full bg-[url(/map-with-shadows.png)] bg-center bg-contain bg-no-repeat flex flex-col justify-center items-center p-15 space-y-10 my-20">
        <h2 className="text-4xl font-black tracking-wide">
          Matura z Geografii nie musi być trudna!
        </h2>
        <p className="text-2xl">
          Oszczędź czas, nerwy i pieniądze korzystając z mojej pomocy!
        </p>
      </Container>
    </div>
  );
}
