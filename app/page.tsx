"use client";

import { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const CONTRACT_PAGE_1 = `MARRËVESHJE BASHKËPUNIMI
(Partnership & Grant Collaboration Agreement)

Kjo marrëveshje lidhet dhe hyn në fuqi në datën e nënshkrimit ndërmjet palëve të mëposhtme:

--------------------------------------------------

Neni 1 – Palët Kontraktuese

Kjo marrëveshje lidhet ndërmjet:

1. Convex SHPK, person juridik i regjistruar sipas legjislacionit në fuqi, i përfaqësuar nga Erion Ahmeti, në vijim "Convex"

dhe

2. Nura Legacy, e përfaqësuar nga Bledar Gjata, në vijim "Nura"

Në vijim të përbashkëta si "Palët".

--------------------------------------------------

Neni 2 – Baza Ligjore

Kjo marrëveshje rregullohet dhe interpretohet në përputhje me:

- Ligjet në fuqi të Republikës së Shqipërisë
- Ligjet në fuqi të Republikës së Kosovës

Në rast mospërputhjeje, zbatohet juridiksioni i përcaktuar në Nenin 11.

--------------------------------------------------

Neni 3 – Qëllimi i Marrëveshjes

Qëllimi i kësaj marrëveshjeje është bashkëpunimi ndërmjet palëve për:

- Zhvillimin dhe shkallëzimin e projektit Nura AI
- Krijimin e partneriteteve strategjike
- Ndërtimin e ekipit operacional
- Aplikimin dhe përfitimin e granteve

--------------------------------------------------

Neni 4 – Detyrimet e Convex

Convex merr përsipër:

- Krijimin e partneriteteve strategjike
- Ndërtimin dhe menaxhimin e ekipit
- Strategjinë për scaling
- Mbështetje operative dhe këshillimore

--------------------------------------------------

Neni 5 – Detyrimet e Nura

Nura merr përsipër:

- Zhvillimin e projektit Nura AI
- Aplikimin në grante
- Transparencë të plotë financiare
- Bashkëpunim aktiv me Convex

--------------------------------------------------

Neni 6 – Kompensimi dhe Pagesat

- Convex përfiton 10% të çdo granti
- Pagesa bëhet brenda 7 ditëve
- Penalitet: 5% në javë për vonesa

--------------------------------------------------

Neni 7 – Transparenca dhe Auditimi

- Nura duhet të raportojë çdo grant
- Convex ka të drejtë auditimi

--------------------------------------------------

Neni 8 – Konfidencialiteti

- Të gjitha informacionet janë konfidenciale
- Detyrimi vazhdon 2 vite pas përfundimit

--------------------------------------------------

Neni 9 – Kohëzgjatja

- Marrëveshja është pa afat
- Deri në ndërprerje nga palët

--------------------------------------------------

Neni 10 – Ndërprerja

- 30 ditë njoftim paraprak
- Convex ruan të drejtën mbi grantet ekzistuese

--------------------------------------------------

Neni 11 – Juridiksioni

- Gjykata Themelore në Prishtinë
- Ose marrëveshje tjetër me shkrim

--------------------------------------------------

Neni 12 – Moskonkurrenca

- Nura nuk përdor palë të treta pa leje
- Convex ka rol ekskluziv në scaling

--------------------------------------------------

Neni 13 – Forca Madhore

- Përjashtime për raste të jashtëzakonshme

--------------------------------------------------

Neni 14 – Dispozita të Fundit

- Ndryshimet vetëm me shkrim
- Nenet e tjera mbeten në fuqi

--------------------------------------------------

NËNSHKRIMET

Për Convex SHPK
Erion Ahmeti
Nënshkrimi: _______________________
Data: _______________________

Për Nura Legacy
Bledar Gjata
Nënshkrimi: _______________________
Data: _______________________`;

const CONTRACT_PAGE_2 = `--------------------------------------------------
--------------------------------------------------

SHTOJCA A – MBROJTJA E CONVEX

Neni A1 – Mosdeklarimi i granteve

Në rast se Nura, në mënyrë të qëllimshme ose jo, nuk deklaron një grant të fituar ose fsheh të ardhura që burojnë nga grantet:

- Detyrohet të paguajë menjëherë Convex shumën e papaguar
- Plus penalitet prej 3 (tre) herë vlerës së detyrimit të papaguar
- Plus çdo dëm financiar, reputacional apo operacional të shkaktuar ndaj Convex

Ky detyrim konsiderohet detyrim i menjëhershëm dhe i padiskutueshëm.

--------------------------------------------------

Neni A2 – Pagesa Automatike dhe Detyrimi i Menjëhershëm

- 10% e Convex konsiderohet detyrim i lindur automatikisht në momentin e përfitimit të grantit
- Nuk kërkohet faturë, njoftim apo kërkesë shtesë për pagesë
- Çdo vonesë konsiderohet shkelje kontraktuale

--------------------------------------------------

Neni A3 – E Drejta e Monitorimit dhe Verifikimit

Convex ka të drejtë të plotë për:

- Verifikimin e çdo aplikimi për grant
- Akses në dokumentacionin përkatës
- Akses në komunikime relevante (email, platforma grantesh, etj.)

Refuzimi për të ofruar këtë informacion konsiderohet shkelje e rëndë e marrëveshjes.

--------------------------------------------------

Neni A4 – Klauzola Anti-Anashkalim (Non-Circumvention)

Nura nuk ka të drejtë të:

- Përdorë partnerët, kontaktet apo strategjitë e krijuara nga Convex
- Aplikojë në grante apo të realizojë marrëveshje pa përfshirjen e Convex

Në rast shkeljeje:

- Penalitet minimal: 10,000€  
OSE  
- 3 (tre) herë vlera e përfitimit të realizuar (cilado më e lartë)

--------------------------------------------------

Neni A5 – E Drejta mbi Grantet e Gjeneruara

- Çdo grant i aplikuar gjatë periudhës së bashkëpunimit konsiderohet rezultat i bashkëpunimit
- Convex ruan të drejtën mbi 10% edhe nëse:
  - Pagesa e grantit realizohet pas ndërprerjes së marrëveshjes
  - Marrëveshja është përfunduar

--------------------------------------------------

Neni A6 – Ndërprerja e Menjëhershme nga Convex

Convex ka të drejtë të ndërpresë marrëveshjen menjëherë nëse:

- Ka mungesë transparence
- Ka vonesa në pagesa mbi 7 ditë
- Ka dyshime të arsyeshme për mashtrim

Pa asnjë detyrim ndaj Nura.

--------------------------------------------------

Neni A7 – Shpenzimet Ligjore dhe Dëmshpërblimi

Në çdo konflikt:

- Pala që rezulton në shkelje mban përgjegjësi për:
  - Të gjitha kostot ligjore
  - Avokatët
  - Procedurat gjyqësore
  - Çdo dëm të shkaktuar

--------------------------------------------------

Neni A8 – Ekzekutimi dhe Titulli Ekzekutiv

- Kjo marrëveshje dhe shtojcat e saj përbëjnë titull ekzekutiv pas noterizimit
- Lejojnë fillimin e menjëhershëm të procedurave përmbarimore pa nevojë për vendim gjyqësor të gjatë

--------------------------------------------------

Neni A9 – Prioriteti i Shtojcës

Në rast konflikti ndërmjet:

- Marrëveshjes bazë  
dhe  
- Kësaj shtojce  

Kjo shtojcë ka përparësi për çështjet që lidhen me mbrojtjen e Convex.

--------------------------------------------------
--------------------------------------------------

SHTOJCA B – GARANCI PERSONALE

Neni B1 – Deklarimi i Garancisë Personale

Unë, Bledar Gjata, në cilësinë time si përfaqësues i Nura Legacy dhe si person fizik, deklaroj se:

- Marr përgjegjësi personale, të plotë dhe të pakushtëzuar për çdo detyrim financiar ndaj Convex SHPK
- Kjo përfshin:
  - Pagesat e përqindjes së granteve
  - Penalitetet
  - Dëmet financiare dhe çdo detyrim tjetër që rrjedh nga kjo marrëveshje

--------------------------------------------------

Neni B2 – Përgjegjësia e Drejtpërdrejtë

Në rast se Nura Legacy:

- Nuk kryen pagesat
OSE
- Shkel detyrimet kontraktuale

Atëherë:

- Convex ka të drejtë të kërkojë përmbushjen e detyrimeve direkt nga Bledar Gjata si person fizik

--------------------------------------------------

Neni B3 – Karakteri i Garancisë

Kjo garanci është:

- E pakthyeshme
- E pakushtëzuar
- E zbatueshme menjëherë pa kushte shtesë

--------------------------------------------------

Neni B4 – Fuqia dhe Zbatueshmëria Ligjore

- Kjo garanci ka të njëjtën fuqi ligjore si marrëveshja kryesore
- Është e zbatueshme në:
  - Republikën e Kosovës
  - Republikën e Shqipërisë

--------------------------------------------------

Neni B5 – Ekzekutimi Noterial

- Me noterizimin e kësaj marrëveshjeje:
  - Kjo garanci bëhet titull ekzekutiv
  - Lejon përmbarim të drejtpërdrejtë ndaj personit fizik pa procedura të gjata gjyqësore

--------------------------------------------------

Neni B6 – Vazhdimësia e Garancisë

- Kjo garanci mbetet në fuqi edhe pas:
  - Ndërprerjes së marrëveshjes
  - Përfundimit të bashkëpunimit
- Deri në shlyerjen e plotë të çdo detyrimi ndaj Convex

--------------------------------------------------

NËNSHKRIM SHTESË (GARANCI PERSONALE)

Bledar Gjata (Person Fizik)
Nënshkrimi: _______________________
Data: _______________________

--------------------------------------------------`;

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
                Marrëveshje Bashkëpunimi
              </h1>
              <p className="text-xl text-slate-600 font-semibold">Convex SHPK × Nura Legacy</p>
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
                  <h3 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Nura Legacy</h3>
                </div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                  Representative Name
                </label>
                <input
                  type="text"
                  value={nuraName}
                  onChange={(e) => setNuraName(e.target.value)}
                  placeholder="Bledar Gjata"
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
                    <p className="text-sm text-amber-700 font-semibold mt-1">Bledar Gjata - Individual</p>
                  </div>
                </div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                  Full Name (Individual)
                </label>
                <input
                  type="text"
                  value={nuraPersonalName}
                  onChange={(e) => setNuraPersonalName(e.target.value)}
                  placeholder="Bledar Gjata"
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
