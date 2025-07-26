import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div>
          <Image
            src="/busola-korepetycje-logo-puste-2.png"
            alt="Busola"
            width={150}
            height={150}
          />
        </div>
        <nav className=" md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            O mnie
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Oferta
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Opinie
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Kontakt
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Blog
          </a>
        </nav>
        <div className=" md:flex items-center space-x-5">
          <a href="/sign-in" className="text-gray-600 hover:text-blue-600">
            Zaloguj się
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-blue-600">Menu</button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Grzegorz Natanek
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Doświadczony nauczyciel{" "}
            <strong className="text-blue-600">geografii</strong>, który
            przygotuje Cię na matury i olimpiady
          </p>
          <button className="mt-10 bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition duration-300">
            umów się!
          </button>
        </section>

        {/* Intro Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Matura z Geografii nie musi być trudna!
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Oszczędź czas, nerwy i pieniądze korzystając z mojej pomocy!
            </p>
          </div>
        </section>

        {/* About Me Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/pwil0313g.jpg"
                alt="Grzegorz Natanek"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900">Kim jestem?</h3>
              <p className="mt-6 text-gray-600">
                Cześć! Nazywam się Grzegorz Natanek i od ponad 10 lat pomagam
                uczniom osiągać sukcesy w nauce geografii. Ukończyłem
                Uniwersytet Komisji Edukacji Narodowej, a jako egzaminator
                maturalny z geografii doskonale wiem, na co zwracają uwagę
                sprawdzający matury i jak najlepiej przygotować się do egzaminu.
              </p>
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Co mogę Ci zaproponować?
            </h2>
            <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-10">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                  Indywidualne korepetycje online
                </div>
                <ul className="mt-6 space-y-3 text-gray-600">
                  <li>
                    <strong className="text-gray-800">
                      Skuteczne przygotowanie do matury
                    </strong>{" "}
                    – omówienie zagadnień, analiza arkuszy, strategie
                    egzaminacyjne
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Oszczędność czasu na dojazdy
                    </strong>{" "}
                    – zajęcia prowadzone online na platformach Google Meet i MS
                    OneNote
                  </li>
                  <li>
                    <strong className="text-gray-800">
                      Indywidualne podejście
                    </strong>{" "}
                    – dostosowanie tempa i metod nauczania do ucznia
                  </li>
                  <li>
                    <strong className="text-gray-800">Sprawdzone metody</strong>{" "}
                    <strong>pracy</strong> – moi uczniowie regularnie osiągają
                    wysokie wyniki na maturze
                  </li>
                  <li>
                    <strong className="text-gray-800">Przystępna cena</strong> –
                    Od 100 zł za 60 min lekcji
                  </li>
                </ul>
                <button className="mt-10 w-full bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition duration-300">
                  umów się!
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="flex justify-center text-center space-x-12 md:space-x-20">
              <div>
                <div className="text-5xl font-extrabold text-blue-600">
                  10 lat
                </div>
                <div className="mt-2 text-gray-500">doświadczenia</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-blue-600">
                  100+
                </div>
                <div className="mt-2 text-gray-500">kursantów</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-blue-600">72%</div>
                <div className="mt-2 text-gray-500">
                  średni wynik moich uczniów na maturze
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opinions Section */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Opinie
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                "Świetne przygotowanie do matury, polecam!"
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                "Zajęcia w miłej atmosferze, wszystko super wyjaśnione."
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                "Dzięki tym korepetycjom zdałem maturę na 90%!"
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                "Pełen profesjonalizm i zaangażowanie."
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">Kontakt</h2>
            <p className="mt-4 text-gray-600">
              Masz pytania lub chcesz umówić się na korepetycje? Napisz do mnie
              – chętnie pomogę i wspólnie zaplanujemy Twoją drogę do sukcesu na
              maturze!
            </p>
            <div className="mt-10 space-y-4 text-lg">
              <p>
                <strong>Telefon:</strong>{" "}
                <a
                  href="tel:508808422"
                  className="text-blue-600 hover:underline"
                >
                  508 808 422
                </a>
              </p>
              <p>
                <strong>Mail:</strong>{" "}
                <a
                  href="mailto:korkizgegry.krakow@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  korkizgegry.krakow@gmail.com
                </a>
              </p>
              <p>
                <strong>Facebook:</strong>{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  busola.korepetycje
                </a>
              </p>
              <p>
                <strong>Instagram:</strong>{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  busola_korepetycje
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">Busola</h3>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-400">
              Mail
            </a>
          </div>
          <div className="mt-10 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Busola - Korepetycje z
              geografii. Wszelkie prawa zastrzeżone.
            </p>
            <div className="mt-4 space-x-6">
              <a href="#" className="hover:underline">
                Zarejestruj się
              </a>
              <a href="#" className="hover:underline">
                Zaloguj się
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
