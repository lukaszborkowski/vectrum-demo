import React from "react";

export const HomePage = () => {
  return (
    <main
      className="bg-white overflow-x-hidden min-h-screen relative max-w-[1800px] mx-auto"
      id="quiz"
    >
      <div className="absolute hidden xl:block top-0 left-0">
        <img src="/bg_1.png" alt="logo" />
      </div>
      <div className="absolute top-[50%] left-0">
        <img src="/bg_4.png" alt="logo" />
      </div>
      <div className="absolute top-[10%] right-[-100px]">
        <img src="/bg_2.png" alt="logo" />
      </div>
      <div className="absolute hidden xl:block top-[0%] right-[400px] w-[200px]'">
        <img src="/bg_3.png" alt="logo" style={{ width: "400px", height: "auto" }} />
      </div>

      <div className="absolute  hidden xl:block top-[-100px] right-[00px] w-[400px]'">
        <img src="/bg_6.png" alt="logo" style={{ width: "400px", height: "auto" }} />
      </div>

      <div className="absolute hidden xl:block bottom-[0px] right-[00px] w-[400px]'">
        <img src="/bg_12.png" alt="logo" style={{ width: "400px", height: "auto" }} />
      </div>

      <section className=" bg-white bg-opacity-[0.1] py-10 sm:py-16 lg:py-12">
        <div
          className="relative mt-2 xl:mt-24 px-4 mx-auto max-w-6xl text-center sm:px-6 lg:px-8 shadow-2xl"
          style={{
            border: "1px solid #cccccc",
            backdropFilter: "blur(15px) brightness(100%)",
            borderRadius: "1rem",
            padding: "6rem 2rem",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-1">
            <div className="relative">
              <h1 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-4xl xl:text-5xl">
                Osiągnij wymarzoną sylwetkę <br /> z KetoVibe.
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Rozwiąż nasz quiz, <br /> aby uzyskać osobisty plan posiłków <br /> i osiągnąć swoje
                cele wagowe!
              </p>

              <div className="flex justify-center mt-8 lg:mt-16 space-x-4">
                <a
                  // href="https://form.ketovibe.co/keto-vibe-woman"
                  href={`https://form.ketovibe.co/keto-vibe-woman${window?.location?.search}`}
                  title="Kobieta"
                  className="button-shadow inline-flex items-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-yellow-400 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 mr-2">
                    <path
                      fill="currentColor"
                      d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z"
                    />
                  </svg>
                  Kobieta
                </a>

                <a
                  href={`https://form.ketovibe.co/keto-vibe-man${window?.location?.search}`}
                  title="Mężczyzna"
                  className="button-shadow inline-flex items-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-yellow-400 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 mr-2">
                    <path
                      fill="currentColor"
                      d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z"
                    />
                  </svg>
                  Mężczyzna
                </a>
              </div>

              <div className="mx-auto max-w-3xl pt-16">
                <img src="/bg_8.png" alt="KetoVibe Image 1" />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-3xl xl:text-4xl pt-12 md:pt-32">
                Ponad <span className="text-yellow-500">5000 </span>przepisów <br /> stworzonych
                przez naszych ekspertów.
              </h3>
              <div className="mx-auto max-w-3xl pt-16">
                <img src="/bg_15.png" alt="KetoVibe Image 2" />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-3xl xl:text-4xl pt-12 md:pt-32">
                Dołącz do <span className="text-yellow-500">1M+ </span> klientów
                <br /> w Polsce i na całym świecie
              </h3>

              <a
                href="#quiz"
                className="inline-flex mt-8 items-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:bg-yellow-400"
                role="button"
              >
                Rozpocznij już teraz
              </a>

              <h3 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-3xl xl:text-4xl pt-12 md:pt-32">
                Co otrzymujesz?
              </h3>
              <ul className="space-y-2 mt-8 mx-auto max-w-[800px] text-start">
                <li className="text-lg">
                  <strong>🍽️ Spersonalizowany plan diety</strong> - Indywidualnie dobrane menu
                  dostosowane do potrzeb i celów użytkownika, stworzone przez najlepszych dietetyków
                  w kraju.
                </li>
                <li className="text-lg">
                  <strong>📱 Dostęp do aplikacji mobilnej</strong> - Wygodna aplikacja do śledzenia
                  postępów, przepisów i planu diety.
                </li>
                <li className="text-lg">
                  <strong>💻 Dostęp do aplikacji webowej</strong> - Możliwość korzystania z
                  aplikacji na komputerze.
                </li>

                <li className="text-lg">
                  <strong>📖 Baza przepisów keto</strong> - Szeroka gama przepisów na dania
                  ketogeniczne, w tym śniadania, obiady, kolacje i przekąski.
                </li>
                <li className="text-lg">
                  <strong>🛒 Lista zakupów</strong> - Automatycznie generowane listy zakupów na
                  podstawie planu diety.
                </li>
                <li className="text-lg">
                  <strong>🔢 Śledzenie makroskładników</strong> - Narzędzie do monitorowania
                  spożycia białek, tłuszczów i węglowodanów.
                </li>
                <li className="text-lg">
                  <strong>📊 Śledzenie postępów</strong> - Możliwość rejestrowania wagi, wymiarów i
                  innych wskaźników zdrowotnych.
                </li>
                <li className="text-lg">
                  <strong>🌐 Społeczność użytkowników</strong> - Dostęp do grup wsparcia i forum,
                  gdzie można dzielić się doświadczeniami i poradami.
                </li>
              </ul>

              <h3 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-3xl xl:text-4xl pt-12 md:pt-32">
                Zacznij swoją <span className="text-yellow-500">Keto </span> przygodę już dziś!
              </h3>

              <a
                href="#quiz"
                className="inline-flex mt-8 items-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:bg-yellow-400"
                role="button"
              >
                Rozpocznij już teraz
              </a>

              <h3 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-3xl xl:text-4xl pt-12 md:pt-32">
                Im się udało, Tobie też może
              </h3>
              <div className="mx-auto max-w-3xl pt-16">
                <img src="/bg_13.png" alt="KetoVibe Image 2" />
              </div>

              <Opinie />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Opinie = () => {
  const reviews = [
    {
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Jan K.",
      stars: 5,
      text: "Dieta keto zmieniła moje życie. Czuję się pełen energii i schudłem 10 kg w ciągu 2 miesięcy!",
    },
    {
      img: "https://s3.us-west-002.backblazeb2.com/betterme/e4c9e4284cb59e1507604ff73c156597955b3c2bfecc17f78a6e81d0d2732383",
      name: "Anna B.",
      stars: 4,
      text: "Dieta keto pomogła mi poprawić wyniki zdrowotne i poziom cukru we krwi. Polecam każdemu!",
    },
    {
      img: "https://s3.us-west-002.backblazeb2.com/betterme/304f0a8389fefacc82a502375baa6b54346d7b6f4b5332634556d11dcd6fdb0a",
      name: "Piotr W.",
      stars: 5,
      text: "Od kiedy zacząłem dietę keto, nie tylko schudłem, ale również mam lepszą koncentrację i więcej energii.",
    },
    {
      img: "https://unimeal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkatie.c863b51c.png&w=32&q=75",
      name: "Katarzyna Z.",
      stars: 5,
      text: "Dieta keto jest niesamowita! Czuję się świetnie i moja skóra nigdy nie wyglądała lepiej.",
    },
    {
      img: "https://s3.us-west-002.backblazeb2.com/betterme/0798af1682947a722029f310ecaed7d05ff769fc33038c62a826b00ed3e2a56b",
      name: "Marek L.",
      stars: 4,
      text: "Początki były trudne, ale teraz nie wyobrażam sobie innej diety. Keto jest super!",
    },
    {
      img: "https://s3.us-west-002.backblazeb2.com/betterme/40cead588a75dc060bc0e9aad029eba676dede184b95c26405dd72d8c40fe71f",
      name: "Magdalena K.",
      stars: 5,
      text: "Dzięki diecie keto poprawiłam swoje samopoczucie i wygląd. Czuję się zdrowa i pełna życia.",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h3 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-3xl xl:text-4xl pt-12 md:pt-32">
          Przeczytaj opinie naszych klientów
        </h3>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="mb-8 sm:break-inside-avoid">
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 border border-gray-200">
                <div className="flex  gap-4">
                  <img alt="" src={review.img} className="size-8 rounded-full object-cover" />
                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      {[...Array(review.stars)].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-0.5 text-lg text-start font-medium text-gray-900">
                      {review.name}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-start text-gray-700">{review.text}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
