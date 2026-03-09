import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Regulamin | Domki u Elizy",
  description:
    "Szczegółowe informacje dotyczące rezerwacji, zasad pobytu oraz regulaminu strefy wellness w Domkach u Elizy.",
};

type Locale = "pl" | "en";

type Section = {
  title: string;
  paragraphs: string[];
  highlight?: {
    label: string;
    lines: string[];
  };
};

const sectionsByLocale: Record<Locale, Section[]> = {
  pl: [
    {
      title: "Ogólne warunki rezerwacji",
      paragraphs: [
        "Rezerwację przyjmujemy telefonicznie pod numerem 606 991 325 w godzinach od 9.00 do 21.00 lub online poprzez formularz rezerwacyjny na naszej stronie luksusowedomki.net (zakładka Rezerwacja). Wstępnych ustaleń można dokonywać również mailowo: 79bula@wp.pl.",
        "Niezbędne jest podanie danych gościa oraz numeru telefonu do kontaktu. Po dokonaniu rezerwacji online otrzymują Państwo potwierdzenie na wskazany adres e-mail, na którym widnieje kwota zadatku.",
        "Wysokość zadatku wynosi 30% wartości pobytu. W okresie sylwestrowym pobieramy 50% wartości całego pobytu, a pobyt jednodniowy opłacamy w 100% z góry.",
        "Zadatek należy wpłacić w terminie 3 dni roboczych od daty rezerwacji wstępnej. Późniejsza wpłata jest możliwa wyłącznie po telefonicznym uzgodnieniu. Brak wpłaty skutkuje anulowaniem rezerwacji.",
        "Dokonanie rezerwacji uważa się za potwierdzone po zaksięgowaniu zadatku. Całkowite rozliczenie następuje w dniu przyjazdu i nie podlega zwrotowi. Wpłata zadatku oznacza akceptację niniejszego regulaminu.",
        "Skrócenie pobytu traktowane jest jako rezygnacja i wymaga uregulowania rachunku za cały deklarowany okres.",
        "Wpłacone zadatki nie podlegają zwrotowi, z wyjątkiem rezygnacji zgłoszonej co najmniej 30 dni przed rozpoczęciem pobytu. W okresie sylwestrowym zadatek jest bezzwrotny.",
        "Płatność rozliczana jest rachunkiem (paragonem) lub fakturą VAT wystawianą po wcześniejszym ustaleniu.",
        "Podając dane osobowe, wyrażają Państwo zgodę na ich przetwarzanie w celu realizacji rezerwacji, zgodnie z przepisami o ochronie danych osobowych.",
        "Goście korzystający z systemu kafeteryjnego MyBenefit proszeni są o wcześniejszy kontakt z recepcją w celu ustalenia dostępności terminu. Po zalogowaniu do panelu należy wprowadzić dane pobytu; system obliczy kwotę oraz ewentualną dopłatę. Po otrzymaniu potwierdzenia płatności akceptujemy rezerwację i wysyłamy potwierdzenie mailowe.",
        "Realizujemy także bony TravelPass. W przypadku wyższej wartości bonów niż koszt pobytu różnica nie podlega zwrotowi. Paragon przekazujemy po przyjeździe, natomiast faktury nie wystawiamy dla płatności z MyBenefit.",
        "Uzgodniony i niezrealizowany pobyt przepada, a płatności po akceptacji w systemie nie zwracamy. Termin można zmienić jedynie na minimum 30 dni przed przyjazdem.",
      ],
      highlight: {
        label: "Dane firmy i numer konta",
        lines: [
          "F.H.U. Niki-Eliz Tarchała Krzysztof",
          "ul. Szkolna 14c m3, 34-500 Zakopane",
          "NIP 7361424392",
          "Bank Pekao S.A. 43 1240 5165 1111 0010 6557 3474",
        ],
      },
    },
    {
      title: "Regulamin obiektu",
      paragraphs: [
        "W obiekcie Domki u Elizy obowiązuje zakaz palenia. Dozwolone jest palenie wyłącznie na balkonach, na zewnątrz budynku oraz w budynku grill.",
        "Doba hotelowa trwa od godziny 15:00 do 11:00 dnia następnego. Ewentualne przedłużenie pobytu należy ustalić wcześniej.",
        "Goście są kwaterowani w godzinach 15:00–23:00. Przyjazd przed 15:00 lub po 22:00, a także pozostawienie bagażu czy samochodu przed meldunkiem wymaga wcześniejszego uzgodnienia.",
        "Niestawienie się Gości do godziny 09:00 rano dnia następnego traktowane jest jako rezygnacja z pobytu.",
        "Goście zobowiązani są do meldunku i dopłaty za pobyt w dniu przyjazdu. Otrzymują klucze (chip) oraz pilot do bramy parkingu.",
        "Zakazuje się użyczania domku osobom niezameldowanym. Odwiedzający mogą przebywać w godzinach 10:00–20:00.",
        "Cisza nocna obowiązuje od 22:00 do 6:00. Zachowanie w ciągu dnia nie powinno zakłócać wypoczynku innych gości. Na wieczorne spotkania zapraszamy do naszego budynku grillowego.",
        "Palenie ognia w budynku grill dozwolone jest do godziny 24:00. Po zakończeniu grillowania palenisko należy wygasić.",
        "Parking jest bezpłatny, zamykany i monitorowany. Właściciele nie ponoszą odpowiedzialności za pojazdy ani pozostawione w nich rzeczy. Rowery i narty można przechować w wyznaczonym miejscu.",
        "Goście ponoszą odpowiedzialność materialną za szkody powstałe z ich winy i zobowiązani są zgłosić je niezwłocznie właścicielom.",
        "Goście łamiący regulamin lub zakłócający spokój innych mogą zostać poproszeni o opuszczenie obiektu bez zwrotu kosztów.",
        "W dniu wyjazdu domek należy zdać w stanie niepogorszonym oraz oddać klucze i pilot do bramy.",
        "Nie przyjmujemy zwierząt. Rezerwacja noclegu jest równoznaczna z akceptacją regulaminu obiektu.",
      ],
    },
    {
      title: "Regulamin korzystania z sauny suchej i jacuzzi",
      paragraphs: [
        "Sauna i jacuzzi czynne są codziennie w godzinach 10:00–22:00.",
        "Z urządzeń mogą samodzielnie korzystać osoby pełnoletnie; dzieci wyłącznie pod opieką dorosłych.",
        "Przed wejściem do sauny należy zdjąć metalowe przedmioty, okulary, szkła kontaktowe i obuwie. Obowiązkowy jest prysznic – także przed wejściem do wanny jacuzzi.",
        "Sauna i wanna z hydromasażem służą wyłącznie relaksowi i odnowie biologicznej. Nie wolno niszczyć wyposażenia ani polewać kamieni olejkami (wyłącznie wodą). Po skorzystaniu należy wyłączyć urządzenia i zasunąć pokrywę jacuzzi.",
        "Obowiązuje zakaz palenia tytoniu oraz spożywania alkoholu i środków odurzających. Osoby pod ich wpływem nie mogą korzystać ze strefy.",
        "Nie odpowiadamy za przedmioty pozostawione w strefie spa. Wszelkie nieprawidłowości prosimy zgłaszać do recepcji.",
        "Domki u Elizy nie ponoszą odpowiedzialności za skutki zdrowotne korzystania z sauny ani za zdarzenia wynikające ze złamania regulaminu.",
        "Pamiętaj: niektóre choroby i dolegliwości stanowią przeciwwskazanie do korzystania z sauny i jacuzzi – w razie wątpliwości skonsultuj się z lekarzem.",
      ],
    },
  ],
  en: [
    {
      title: "General booking terms",
      paragraphs: [
        "Bookings are accepted by phone at +48 606 991 325 between 9:00 a.m. and 9:00 p.m., or online via the booking form on luksusowedomki.net (Reservation tab). Preliminary arrangements may also be made by email at 79bula@wp.pl.",
        "Providing your personal details and a contact phone number is required. After making an online booking, you will receive confirmation with the deposit amount to the email address provided.",
        "The deposit is 30% of the total stay value. For the New Year’s Eve period, the deposit is 50% of the total stay value, and a one-night stay must be paid 100% in advance.",
        "The deposit must be paid within 3 business days from the date of the preliminary booking. Payment after this deadline is possible only after prior phone confirmation. Failure to pay results in cancellation of the booking.",
        "A booking is considered confirmed once the agreed deposit is credited to our bank account. The remaining balance for the stay is settled on the day of arrival and is non-refundable.",
        "Paying the deposit after the preliminary booking constitutes acceptance of these terms and conditions by the person making the reservation.",
        "Shortening the stay is treated as a cancellation and requires payment for the entire declared stay.",
        "Deposits paid to the company account are non-refundable. A deposit is refunded only if the cancellation occurs at least 30 days before the planned start date of the stay. The exception is the New Year’s Eve period, for which the deposit is non-refundable.",
        "Payment is settled with a standard receipt or a VAT invoice issued only if arranged in advance.",
        "By making a booking, you provide personal data and consent to its inclusion in the service’s database for the purposes of carrying out the booking in accordance with data protection regulations.",
        "Guests using the MyBenefit cafeteria system must first confirm availability with reception, then make a booking by phone or via luksusowedomki.net. After logging into the MyBenefit panel, enter the stay details; the system will calculate the amount and redirect to online payment if points are insufficient.",
        "After we receive payment confirmation from MyBenefit, we accept the agreed amount, verify the data, and send booking confirmation by email. We do not accept payments in the system without prior confirmation of availability.",
        "We also accept TravelPass vouchers. If their value is lower than the cost of the stay, the difference can be paid on site. If the voucher value is higher, the difference is not refunded. A receipt is provided upon arrival, and we do not issue invoices for stays paid through MyBenefit.",
        "An agreed but unused stay is forfeited. Payments accepted in the system are non-refundable. The date may be changed only if requested at least 30 days before arrival.",
      ],
      highlight: {
        label: "Company details & bank account",
        lines: [
          "F.H.U. Niki-Eliz Tarchała Krzysztof",
          "Szkolna 14c m3, 34-500 Zakopane",
          "Tax ID (NIP): 7361424392",
          "Bank Pekao S.A. 43 1240 5165 1111 0010 6557 3474",
        ],
      },
    },
    {
      title: "Property rules",
      paragraphs: [
        "Smoking is prohibited inside the property. Smoking is permitted on balconies, outside the building, and in the BBQ/grill house.",
        "The hotel day runs from 3:00 p.m. to 11:00 a.m. the following day. Extending the stay requires prior arrangements.",
        "Check-in hours are 3:00 p.m.–11:00 p.m. Arrival before 3:00 p.m., arrival after 10:00 p.m., leaving luggage at reception, or parking a car earlier requires prior confirmation.",
        "Failure to arrive by 9:00 a.m. the next day is considered a cancellation of the stay.",
        "Guests are required to complete check-in and pay the remaining balance on the day of arrival. They receive a door key chip and a parking gate remote.",
        "It is forbidden to make the accommodation available to unregistered persons. Visitors may stay between 10:00 a.m. and 8:00 p.m.",
        "Quiet hours apply from 10:00 p.m. to 6:00 a.m. Daytime behaviour should also not disturb other guests. For evening gatherings, please use the BBQ/grill area.",
        "Lighting a fire in the BBQ/grill building is allowed until midnight. After grilling, the fire must be extinguished.",
        "Parking is free, closed, and monitored 24/7 but not guarded. The owners are not responsible for vehicles or belongings left inside them. Bicycles and skis may be stored in the designated area.",
        "Guests are financially liable for any damage or destruction of property caused by their fault and must report it immediately to the owners.",
        "Guests who violate the rules or disturb others may be asked to leave the property without a refund.",
        "On the day of departure, guests must leave the cottage in no worse condition and return the key chip and parking remote to reception.",
        "Pets are not accepted. Renting accommodation at Domki u Elizy is equivalent to accepting these rules.",
      ],
    },
    {
      title: "Rules for using the dry sauna and jacuzzi",
      paragraphs: [
        "The sauna and jacuzzi are open daily from 10:00 a.m. to 10:00 p.m.",
        "Only adult guests may use the facilities independently; children may enter only under adult supervision.",
        "Before entering the sauna, remove all metal items, glasses, contact lenses, and footwear. Showering is mandatory, including before entering the jacuzzi tub.",
        "Use the sauna and jacuzzi solely for relaxation and wellness purposes. Do not damage the equipment and do not pour oils onto the stones—only water. After use, switch off the devices and cover the jacuzzi.",
        "Smoking, bringing in, or consuming alcohol and intoxicating substances is prohibited in the spa area. Persons under the influence may not use the facilities.",
        "We are not responsible for items left in the spa area. Please report any irregularities to reception.",
        "Domki u Elizy is not responsible for any health consequences related to sauna use or for incidents resulting from breaking these rules.",
        "Remember: certain medical conditions may contraindicate the use of the sauna and jacuzzi—consult a doctor if you have any doubts.",
      ],
    },
  ],
};

const GradientCard = ({
  title,
  paragraphs,
  highlight,
}: Section) => (
  <article
    className="rounded-3xl bg-white/90 p-8 shadow-[0_35px_80px_rgba(29,25,22,0.12)] border border-white/60"
    style={{ backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(246,240,231,0.95))" }}
  >
    <h2 className="text-2xl font-semibold tracking-tight text-[#1D1916]">{title}</h2>
    <div className="mt-6 space-y-4 text-[#5B574F] leading-relaxed">
      {paragraphs.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </div>
    {highlight && (
      <div className="mt-8 rounded-2xl bg-[#F5E8D9] px-5 py-4 text-sm text-[#4D483F]">
        <p className="font-semibold uppercase tracking-[0.2em] text-[#9E521F] text-xs">
          {highlight.label}
        </p>
        <div className="mt-2 space-y-1">
          {highlight.lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    )}
  </article>
);

export default async function RegulationsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = sectionsByLocale[locale] ?? sectionsByLocale.pl;

  const hero =
    locale === "pl"
      ? {
          eyebrow: "Domki u Elizy",
          title: "Regulamin pobytu i rezerwacji",
          description:
            "Poznaj zasady rezerwacji, warunki pobytu oraz wytyczne dotyczące korzystania ze strefy wellness. Dzięki temu Twój wyjazd będzie w pełni komfortowy i bezpieczny.",
        }
      : {
          eyebrow: "Domki u Elizy",
          title: "Terms & Conditions",
          description:
            "Learn about our booking policy, house rules, and wellness guidelines so your stay is seamless, safe, and comfortable.",
        };

  return (
    <main className="bg-[#F6F0E7] text-[#1D1916]">
      <Navigation />
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: "#F1E3D2" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 left-8 h-64 w-64 rounded-full bg-[#CFA262]/30 blur-[160px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#6F8541]/25 blur-[140px]" />
        </div>
        <Container>
          <div className="relative z-10 space-y-6 text-left max-w-3xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9E521F]">{hero.eyebrow}</p>
            <h1 className="text-4xl font-semibold leading-tight text-[#1D1916]">{hero.title}</h1>
            <p className="text-lg text-[#5B574F]">{hero.description}</p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {data.map((section) => (
              <GradientCard key={section.title} {...section} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
