"use client";

import { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const CONTRACT_PAGE_1 = `MARRËVESHJE SHËRBIMI DHE NDAREJE TË TË ARDHURAVE
(Service & Revenue Sharing Agreement)

--------------------------------------------------

Neni 1 – Pala Kontraktuese

Kjo marrëveshje lidhet ndërmjet:

Festim Bunjaku, pronar dhe operator i aplikacionit "Trimmr" (në vijim "Klienti")

dhe

Convex SHPK, person juridik i regjistruar sipas legjislacionit në fuqi në Republikën e Kosovës, i përfaqësuar nga Erion Ahmeti (në vijim "Ofruesi i Shërbimit")

Klienti dhe Ofruesi i Shërbimit në vijim referohen si "Palët".

--------------------------------------------------

Neni 2 – Pranimi i Marrëveshjes

Kjo marrëveshje konsiderohet e pranuar dhe hyn në fuqi në momentin e nënshkrimit elektronik nga Klienti.

--------------------------------------------------

Neni 3 – Qëllimi

Qëllimi i kësaj marrëveshjeje është ofrimi i shërbimeve të:

– lead generation
– marketing dhe outreach
– strategji rritjeje dhe scaling

me synim rritjen e klientëve dhe të ardhurave të aplikacionit "Trimmr".

--------------------------------------------------

Neni 4 – Shërbimet

Ofruesi i Shërbimit angazhohet të ofrojë:

– gjenerim klientësh potencial (leads)
– ndërtim strategjie shitjeje
– optimizim të proceseve të konvertimit
– mbështetje operative dhe këshillimore

Raportimi javor i Ofruesit përfshin:
(a) numrin e prospekteve të kontaktuara,
(b) kanalin e kontaktit,
(c) statusin e secilit prospekt,
(d) takimet e caktuara dhe të mbajtura,
(e) lead-et e kualifikuara,
(f) klientët e konvertuar,
(g) arsyet kryesore të refuzimit,
(h) feedback-un e tregut dhe rekomandimet operative.

Me “lead” nënkuptohet business client që bëhet paying subscriber. Numri minimal i prospekteve të kontaktuara është 50+ në muaj.

Ofruesi nuk garanton rezultate fikse numerike.

--------------------------------------------------

Neni 5 – Detyrimet e Klientit

Klienti bie dakord që:

– të bashkëpunojë në mënyrë aktive
– të mos pengojë procesin e shitjes
– të raportojë saktë çdo klient të ardhur nga Ofruesi
– të mos fshehë të ardhura apo marrëveshje

--------------------------------------------------

Neni 6 – Pagesat

Klienti bie dakord për:

– pagesë fikse prej 50€ në muaj
– pagesë prej 30% të të ardhurave NETO nga abonimet që hyjnë në Trimmr (tarifa 14.99€ është tax inclusive)

Pagesat e revenue share prej 30% bëhen në baza mujore për 12 muaj nga momenti kur klienti fillon të paguajë (jo gjatë trial).

Ofruesi është në dijeni që Paddle nuk lejon payout pa arritur 100€ fitim; revenue share paguhet pas çdo payout nga Paddle dhe jo në momentin kur klientët e aplikacionit paguajnë.

Pagesat:

– bëhen në fund të çdo muaji kalendarik
– duhet të kryhen brenda 5 ditëve nga përfundimi i muajit

--------------------------------------------------

Neni 7 – Penalitetet

Në rast vonese pagese:

– aplikohet penalitet prej 5% në javë mbi shumën e papaguar
– Ofruesi ka të drejtë të ndërpresë menjëherë shërbimet

--------------------------------------------------

Neni 8 – Pronësia e Leads

Të gjithë lead-et dhe klientët e gjeneruar nga Ofruesi konsiderohen pronë komerciale e Ofruesit për qëllime financiare.

Klienti bie dakord që:

– nuk mund të anashkalojë Ofruesin në bashkëpunim me këta klientë
– çdo të ardhur nga këta klientë i nënshtrohet automatikisht pagesës prej 30%

Kjo e drejtë mbetet në fuqi për 24 muaj pas përfundimit të bashkëpunimit.

Në rast shkeljeje:

– Klienti detyrohet të paguajë 100% të vlerës së kontratës me klientin përkatës
– plus çdo dëm financiar dhe ligjor

--------------------------------------------------

Neni 9 – Transparenca dhe Auditimi

Ofruesi ka të drejtë të kërkojë verifikim të:

– komunikimeve me klientët
– kontratave
– pagesave

Klienti është i detyruar të bashkëpunojë plotësisht.

--------------------------------------------------

Neni 10 – Konfidencialiteti

Palët bien dakord të ruajnë konfidencialitet për:

– strategjitë
– klientët
– të dhënat e biznesit

Ky detyrim vazhdon për 2 vite pas përfundimit të marrëveshjes.

--------------------------------------------------

Neni 11 – Moskonkurrenca

Klienti nuk mund të angazhojë palë të treta për shërbime të njëjta pa miratim me shkrim nga Ofruesi gjatë kohëzgjatjes së kësaj marrëveshjeje.`;

const CONTRACT_PAGE_2 = `--------------------------------------------------

Neni 12 – Kohëzgjatja

Kjo marrëveshje është e vlefshme për një periudhë të pacaktuar.

--------------------------------------------------

Neni 13 – Ndërprerja

Çdo palë mund të ndërpresë marrëveshjen me 30 ditë njoftim paraprak.

Të drejtat e Ofruesit mbi klientët e gjeneruar mbeten në fuqi edhe pas ndërprerjes.

Në rast mbylljeje të aplikacionit Trimmr, kjo marrëveshje përfundon automatikisht dhe çdo përgjegjësi financiare e Klientit ndaj Ofruesit shuhet.

--------------------------------------------------

Neni 14 – Forca Madhore

Asnjë palë nuk mban përgjegjësi për moszbatim për shkak të:

– fatkeqësive natyrore
– luftës
– vendimeve shtetërore

--------------------------------------------------

Neni 15 – Juridiksioni

Çdo mosmarrëveshje zgjidhet fillimisht në mënyrë miqësore.

Në rast dështimi:
– juridiksioni kompetent është Gjykata Themelore në Prishtinë, Republika e Kosovës

--------------------------------------------------

Neni 16 – Dispozita të Fundit

– Kjo marrëveshje përbën marrëveshjen e plotë ndërmjet palëve
– Çdo ndryshim bëhet vetëm me marrëveshje të shkruar
– Nëse një nen është i pavlefshëm, pjesa tjetër mbetet në fuqi

--------------------------------------------------
--------------------------------------------------

SHTOJCA A – KUADRI I TRANSPARENCËS DHE BASHKËPUNIMIT

Neni A1 – Transparenca e të Ardhurave

Klienti angazhohet të deklarojë në mënyrë të saktë dhe të plotë çdo të ardhur të gjeneruar nga klientët e siguruar nga Ofruesi i Shërbimit.

Në rast mospërputhjeje:

– detyrimet financiare ndaj Ofruesit mbeten të plota dhe të pagueshme
– palët angazhohen të zgjidhin situatën në mënyrë transparente dhe profesionale
– në rast dëmi të provuar, mund të kërkohet kompensim proporcional

--------------------------------------------------

Neni A2 – Detyrimi i Pagesës

Detyrimi për pagesë lind automatikisht në momentin kur realizohen të ardhura nga klientët e siguruar nga Ofruesi i Shërbimit.

Pagesa konsiderohet detyrim kontraktual i drejtpërdrejtë dhe nuk kërkon procedura shtesë për aktivizim.

--------------------------------------------------

Neni A3 – Verifikimi dhe Bashkëpunimi

Ofruesi ka të drejtë të kërkojë verifikim të arsyeshëm lidhur me:

– klientët e gjeneruar
– të ardhurat e lidhura me ta
– informacionet përkatëse operative

Klienti angazhohet të bashkëpunojë në mënyrë të hapur dhe në kohë.

--------------------------------------------------

SHTOJCA B – ANGAZHIM PERSONAL

Neni B1 – Angazhimi Personal

Klienti deklaron se merr përgjegjësi personale për respektimin e detyrimeve të kësaj marrëveshjeje.

--------------------------------------------------

Neni B2 – Përmbushja e Detyrimeve

Në rast mospërmbushjeje nga struktura e biznesit, detyrimet mbeten të vlefshme dhe të zbatueshme ndaj personit përgjegjës.

--------------------------------------------------

Neni B3 – Karakteri i Angazhimit

Ky angazhim është pjesë integrale e marrëveshjes dhe synon të sigurojë një bashkëpunim të qëndrueshëm dhe të besueshëm ndërmjet palëve.

--------------------------------------------------

Neni B4 – Fuqia Ligjore

Ky angazhim ka të njëjtën fuqi ligjore si marrëveshja kryesore dhe zbatohet në përputhje me ligjin në fuqi.

--------------------------------------------------

Neni B5 – Vazhdimësia

Ky angazhim mbetet në fuqi deri në përmbushjen e plotë të detyrimeve që rrjedhin nga kjo marrëveshje.

--------------------------------------------------

PRANIMI

Duke pranuar këtë marrëveshje, Klienti konfirmon se:

– ka lexuar dhe kuptuar kushtet
– bie dakord me to
– angazhohet për bashkëpunim korrekt dhe transparent

--------------------------------------------------

NËNSHKRIMET

Për Convex SHPK
Erion Ahmeti
Nënshkrimi: _______________________
Data: _______________________

Për Trimmr (Klient)
Festim Bunjaku
Nënshkrimi: _______________________
Data: _______________________`;

export default function Home() {
  const [step, setStep] = useState<"contract" | "signatures" | "success">("contract");
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [nuraName, setNuraName] = useState("");
  const [nuraPersonalName, setNuraPersonalName] = useState("");
  const [nuraPersonalId, setNuraPersonalId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const nuraSigRef = useRef<SignatureCanvas>(null);
  const nuraPersonalSigRef = useRef<SignatureCanvas>(null);

  const handleAcceptContract = () => {
    setStep("signatures");
  };

  const handleSubmit = async () => {
    if (!nuraSigRef.current || !nuraPersonalSigRef.current) return;
    
    if (nuraSigRef.current.isEmpty() || nuraPersonalSigRef.current.isEmpty()) {
      alert("Please complete both signatures!");
      return;
    }

    if (!nuraName.trim() || !nuraPersonalName.trim() || !nuraPersonalId.trim()) {
      alert("Please complete all required fields!");
      return;
    }

    setIsSubmitting(true);

    try {
      const nuraSignature = nuraSigRef.current.toDataURL();
      const nuraPersonalSignature = nuraPersonalSigRef.current.toDataURL();

      // Send signatures to backend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          convexSignature: nuraSignature,
          nuraSignature: nuraPersonalSignature,
          convexName: nuraName.trim(),
          nuraName: nuraPersonalName.trim(),
          nuraPersonalId: nuraPersonalId.trim(),
          signedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to process contract');
      }

      const result = await response.json();
      
      setStep("success");
    } catch (error) {
      console.error("Error:", error);
      alert("Ndodhi një gabim gjatë dërgimit të email-it. Ju lutem provoni përsëri.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {step === "contract" && (
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 border-t-4 border-blue-600 transition-all duration-300">
            <div className="text-center mb-10">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wider shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Official Contract
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3 tracking-tight">
                Marrëveshje Shërbimi
              </h1>
              <p className="text-xl text-slate-600 font-semibold">Convex SHPK × Trimmr</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date().toLocaleDateString('sq-AL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>

            <div className="mb-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setCurrentPage(1)}
                className={`px-8 py-3 rounded-md font-bold uppercase tracking-wide transition-all duration-200 ${
                  currentPage === 1
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Page 1 - Main Agreement
                </div>
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`px-8 py-3 rounded-md font-bold uppercase tracking-wide transition-all duration-200 ${
                  currentPage === 2
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Page 2 - Appendices
                </div>
              </button>
            </div>

            <div className="mb-8">
              <div className="bg-slate-50 rounded-lg p-8 max-h-[500px] overflow-y-auto border-2 border-slate-200 shadow-inner">
                <pre className="whitespace-pre-wrap text-sm text-slate-800 font-sans leading-relaxed">
                  {currentPage === 1 ? CONTRACT_PAGE_1 : CONTRACT_PAGE_2}
                </pre>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {currentPage === 1 && (
                <button
                  onClick={() => setCurrentPage(2)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-8 rounded-md transition-all duration-200 border border-slate-300 shadow-md uppercase tracking-wide"
                >
                  <div className="flex items-center gap-2">
                    View Page 2
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              )}
              {currentPage === 2 && (
                <button
                  onClick={() => setCurrentPage(1)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-8 rounded-md transition-all duration-200 border border-slate-300 shadow-md uppercase tracking-wide"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Back to Page 1
                  </div>
                </button>
              )}
              <button
                onClick={handleAcceptContract}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-200 uppercase tracking-wide"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Accept & Sign Contract
                </div>
              </button>
            </div>
          </div>
        )}

        {step === "signatures" && (
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 border-t-4 border-blue-600 transition-all duration-300">
            <div className="text-center mb-10">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wider shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Step 2 of 2
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3 tracking-tight">
                Contract Signature
              </h1>
              <p className="text-lg text-slate-600 font-medium">Please complete the information and sign below</p>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-lg p-8 border-2 border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-md flex items-center justify-center font-bold shadow-lg text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Trimmr (Client)</h3>
                </div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                  Client Name
                </label>
                <input
                  type="text"
                  value={nuraName}
                  onChange={(e) => setNuraName(e.target.value)}
                  placeholder="Festim Bunjaku"
                  className="w-full px-5 py-3 border-2 border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white shadow-sm text-lg"
                />
                <label className="block text-sm font-bold text-slate-700 mt-6 mb-3 uppercase tracking-wide">
                  Electronic Signature
                </label>
                <div className="border-2 border-slate-300 rounded-md bg-white shadow-md overflow-hidden">
                  <SignatureCanvas
                    ref={nuraSigRef}
                    canvasProps={{
                      className: "w-full h-48",
                    }}
                  />
                </div>
                <button
                  onClick={() => nuraSigRef.current?.clear()}
                  className="mt-3 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-bold transition-colors uppercase tracking-wide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Clear Signature
                </button>
              </div>

              <div className="bg-amber-50 rounded-lg p-8 border-2 border-amber-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-amber-600 text-white w-12 h-12 rounded-md flex items-center justify-center font-bold shadow-lg text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Personal Guarantee</h3>
                    <p className="text-sm text-amber-700 font-semibold mt-1">Festim Bunjaku - Individual</p>
                  </div>
                </div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                  Full Name (Individual)
                </label>
                <input
                  type="text"
                  value={nuraPersonalName}
                  onChange={(e) => setNuraPersonalName(e.target.value)}
                  placeholder="Festim Bunjaku"
                  className="w-full px-5 py-3 border-2 border-amber-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white shadow-sm text-lg"
                />
                <label className="block text-sm font-bold text-slate-700 mt-6 mb-3 uppercase tracking-wide">
                  Personal ID Number
                </label>
                <input
                  type="text"
                  value={nuraPersonalId}
                  onChange={(e) => setNuraPersonalId(e.target.value)}
                  placeholder="ID Number / Passport Number"
                  className="w-full px-5 py-3 border-2 border-amber-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white shadow-sm text-lg"
                />
                <label className="block text-sm font-bold text-slate-700 mt-6 mb-3 uppercase tracking-wide">
                  Personal Signature (Appendix B)
                </label>
                <div className="border-2 border-amber-300 rounded-md bg-white shadow-md overflow-hidden">
                  <SignatureCanvas
                    ref={nuraPersonalSigRef}
                    canvasProps={{
                      className: "w-full h-48",
                    }}
                  />
                </div>
                <button
                  onClick={() => nuraPersonalSigRef.current?.clear()}
                  className="mt-3 flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 font-bold transition-colors uppercase tracking-wide"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Clear Signature
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setStep("contract")}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-8 rounded-md transition-all duration-200 border border-slate-300 shadow-md uppercase tracking-wide"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  Go Back
                </div>
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold py-4 px-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-200 disabled:cursor-not-allowed uppercase tracking-wide"
              >
                <div className="flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Sign & Submit Contract
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 border-t-4 border-blue-600 transition-all duration-300">
            <div className="text-center">
              <div className="mb-8 relative">
                <div className="relative inline-block">
                  <div className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl">
                    <svg
                      className="w-14 h-14 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="inline-block mb-6">
                  <div className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-md text-sm font-bold uppercase tracking-wider shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
                  Contract Successfully Signed!
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                  The contract has been saved in the system and automatically sent to the specified email addresses.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6 mb-8 border-2 border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-blue-600 w-12 h-12 rounded-md flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">Signed</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-blue-600 w-12 h-12 rounded-md flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">Saved</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-blue-600 w-12 h-12 rounded-md flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">Sent</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-200 uppercase tracking-wide"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Return to Home
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
