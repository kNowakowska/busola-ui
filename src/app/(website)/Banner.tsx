import Container from "@/lib/components/website/Container";

export default function Banner() {
  return (
    <div id="banner" className="md:h-[50vh] h-autow-full">
      <Container className="h-full w-full bg-[url(/map-with-shadows.png)] bg-center bg-contain bg-no-repeat flex flex-col justify-center items-center md:p-15 p-10 md:space-y-10 space-y-5 md:my-20 my-10">
        <h2 className="md:text-4xl text-2xl font-black tracking-wide">
          Matura z Geografii nie musi być trudna!
        </h2>
        <p className="md:text-2xl text-base ">
          Oszczędź czas, nerwy i pieniądze korzystając z mojej pomocy!
        </p>
      </Container>
    </div>
  );
}
