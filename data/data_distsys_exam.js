var questions = [
{
   "id":"0",
   "chapter":"Eksamen 2006:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver synkronisering i distribuerte systemer står overfor i forhold til synkronisering i sentraliserte systemer",
   "answer":"Unngå avhengighet av enkeltnoder / enkeltmeldinger <br /> Unngå / begrens flaskehalser i systemet (noder / lenker) <br /> Begrens meldingsmengder / prosesseringsforsinkelser"
},

{
   "id":"1",
   "chapter":"Eksamen 2006:",
   "question":"Beskriv og vurder ringalgoritmen for distribuert primas utvelgelse (distributed process election)",
   "answer":"Start Valg-rutine: <br />1a) Send Valg-melding m/ Egen identifikator <br />Får Valg-melding: <br />2a) Med høyere identifikator og Egen ikke inkludert / Egen inkludert: <br /> - Send videre m/ Gitt identifikator <br />2b) Med lavere identifikator og Egen ikke inkludert: <br /> - Send videre m/ Egen identifikator <br />2c) Med lavere identifikator og Egen inkludert: <br /> - Stopp Valg-melding <br />2d) Med samme identifikator og Egen inkludert: <br /> Send Sjef-melding m/ Egen identifikator <br />Får Sjef-melding: <br />3a) Med høyere identifikator: Send videre m/ Gitt identifikator <br />3b) Med samme identifikator: Avslutt rutine <br /> <br />Vurdering <br />Det totale antall meldinger kan bli høyt (-> 3N) <br />Den totale forsinkelse kan bli lang (-> 3N) <br />Hver node må kjenne adressen til alle de andre i ringen Ingen virkelig god algoritme, men denne er mye brukt"
},

{
   "id":"2",
   "chapter":"Eksamen 2006:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver filsystemer for distribuerte omgivelser står overfor i forhold til filsystemer for sentraliserte omgivelser",
   "answer":"Ulike filer kan være plassert på forskjellige noder, under ulike aksessregimer (autonomi), på ulik form (modell) og med permanente kopier (replikater) og/eller temporære kopier (cacher) på andre noder igjen."
},

{
   "id":"3",
   "chapter":"Eksamen 2006:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver databasesystemer for distribuerte omgivelser står overfor i forhold til databasesystemer for sentraliserte omgivelser",
   "answer":"Dataene kan bli oppdelt i mindre fragmenter som så blir fordelt på ulike noder <br />Fragmentene kan igjen forefinnes i flere kopier som tilsvarende repliseres på ulike noder"
},

{
   "id":"4",
   "chapter":"Eksamen 2006:",
   "question":"Beskriv og vurder algoritmen for 2-fase-låsing (2-phase-locking)",
   "answer":"<ul><li>Enhver transaksjon kreves å sette en lås på ethvert dataelement før det skal aksesseres / oppdateres, og å fjerne låsen igjen når dataelementet ikke lenger skal aksesseres / oppdateres </li> <li>Systemet forventes kun å tillate kompatible låser mellom ulike transaksjoner - dvs. at låser som ikke kan tillates samtidig på et gitt dataelement, faktisk ikke aksepteres på vegne av ulike transaksjoner </li> <li>En transaksjon kan ikke sette en ny lås etter at en av dens eksisterende låser er fjernet – dvs. alle dens låser settes før noen av dem fjernes </li></ul> En funksjonelt sett god algoritme – men samtidig en effektivitetsmessig krevende algoritme. Den tillater kun serialiserbare utførelser, men den tillater mindre parallellitet enn hva full serialiserbarhet tilsier."
},

{
   "id":"5",
   "chapter":"Eksamen 2006:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver pålitelighet i distribuerte systemer står overfor i forhold til pålitelighet i sentraliserte systemer",
   "answer":"Noder kan feile uavhengig av hverandre, og meldinger mellom noder kan forsvinne, dubliseres, ødelegges, omrokkeres, avlyttes og/eller manipuleres Et system må likevel kunne brukes selv om noen noder er tilgjengelige mens andre noder er utilgjengelige på et vilkårlig tidspunkt, og et system bør også kunne brukes som om det hadde bestått av en eneste node"
},

{
   "id":"6",
   "chapter":"Eksamen 2006:",
   "question":"Beskriv og vurder en algoritme for sikring av atomiskhet (atomicity) ved meldingsutveksling (message exchange)",
   "answer":"<ul><li>Avsender sender meldingen til alle tiltenkte mottakere - med beskjed om å bekrefte mottaket og samtidig avvente agering på mottaket </li> <li>Mottakere som ikke bekrefter å ha fått meldingen, vil få den tilsendt et visst antall ganger til </li> <li>Hvis absolutt alle mottakere bekrefter mottaket, vil alle få beskjed om å agere på mottaket. Hvis minst en mottaker ikke bekrefter mottaket, vil alle få beskjed om å kansellere mottaket.</li></ul> En funksjonelt sett god algoritme – men samtidig en effektivitetsmessig krevende algoritme. Den sikrer atomiskhet, men den krever fire meldingsrunder."
},

{
   "id":"7",
   "chapter":"Eksamen 2006:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver navnetjenester i distribuerte systemer står overfor i forhold til navnetjenester i sentraliserte systemer",
   "answer":"Navnerommet kan være fysisk fordelt på ulike navnetjenere – og det på en helt annen måte enn den måten navnerommet logisk er oppdelt på Således vil både replikasjon av adresseinformasjon og caching av søkeresultater på ulike noder kunne variere. Likeledes vil navigasjon mot navn og binding av navn ved opprulling av flernivånavn kunne variere."
},

{
   "id":"8",
   "chapter":"Eksamen 2006:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver delt lager i distribuerte systemer står overfor i forhold til delt lager i sentraliserte systemer",
   "answer":"Et distribuert delt lager tilsier en simulering av felles lager i en omgivelse uten felles lager. Dette gir både funksjonalitetsspørsmål (hvordan bør det gjøres for at det skal bli mest likt et felles lager) og effektivitetsspørsmål (hvordan bør det gjøres for at skal bli raskest nok)."
},

{
   "id":"9",
   "chapter":"Eksamen 2006:",
   "question":"Beskriv og vurder algoritmen for lesing og skriving av dataelementer i IVY/MIRAGE",
   "answer":"Sidebasert (dvs. OS-simulering) – Sekvensiell konsistens (som lagringskrav) <br />* Måte: <br />Globale sider er spredt på lokale noder – Ingen eier en gitt side permanent <br />En gitt side kan være skitten (W-tilstand) eller ren (R-tilstand) <br />En skitten side vil finnes i en kopi – En ren side kan finnes i flere kopier <br />En ønsket side kan være på tilsvarende node eller ikke <br />* Resultat: <br />6 ulike tilfeller for leseaksess & 6 ulike tilfeller for skriveaksess <br />Eier-lokalisering: <br />Benytt sentral forvalter / Forfølg sannsynlig eier <br />Kopi-lokalisering: <br />Forvalter evt. eier(e) holder kopiliste(r) / Forespørrer benytter kringkasting <br />Flere aktive aktører gjør spontane invalideringer mulig: <br />Behov for nye sideutbyttingsalgoritmer <br /> <br />Vurdering: En god algoritme – som dekker mange relevante aspekter for aksessering og oppdatering i et distribuert delt lager"
},

{
   "id":"10",
   "chapter":"Eksamen 2006:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver multimediasystemer for distribuerte omgivelser står overfor i forhold til multimediasystemer for sentraliserte omgivelser",
   "answer":"Svært korte tur-retur tider kreves for interaktive MM-applikasjoner. <br /> Store, skiftende ressurskrav som ikke kan monopolisere parallelt kjørende applikasjoner"
},

{
   "id":"11",
   "chapter":"Eksamen 2006:",
   "question":"Beskriv og vurder bøttebufferalgoritmen (token bucket algorithm)",
   "answer":"* En mediakilde tøyles ved at det innsettes en spesiell buffer mellom den og en medieavtaker <br />* Bufferen inkluderer en generator som kontinuerlig fyller en bøtte med buffertoken <br />* Bøttebufferen vil nedskalere uten helt å fjerne variasjonene i mediastrømmen <br /> Vurdering: En ganske effektiv algoritme – ved at den implementerer en lineært bundet ankomststrøm"
},

{
   "id":"12",
   "chapter":"Eksamen 2006:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver sikkerhet i distribuerte systemer står overfor i forhold til sikkerhet i sentraliserte systemer",
   "answer":"Forespørsler og resultater kan gå via meldinger over ett / flere nett hvor de kan lett kan utsettes for ulike former for manipulasjon (aksess og endring i ulike former). Kontroll av ulike aspekter blir vanskeligere på tvers av noder (identitet og rettigheter generelt sett)"
},

{
   "id":"13",
   "chapter":"Eksamen 2006:",
   "question":"Beskriv og vurder Needham-Schroeder algoritmen for meldingsautentisering (message authentication)",
   "answer":"Autentisering (av aktør A og B seg imellom via en tjener S) <br />1) A->S: A, B, N<subA <br />2) S->A: {N<sub>A</sub>, B, K<sub>AB</sub>, {K<sub>AB</sub>, A}K<sub>B</sub>}K<sub>A</sub> <br />3) A->B: {K<sub>AB</sub>, A}K<sub>B</sub> <br />4) B->A: {N<sub>B</sub>}K<sub>AB</sub> <br />5) A->B: {N<sub>B</sub>-1}K<sub>AB</sub><br /> Vurdering: En funksjonelt sett ganske riktig algoritme - kun manglende et tidsmerke i melding nr. 3"
},

{
   "id":"14",
   "chapter":"Eksamen 2008:",
   "question":"Drøft kort noen ulike former for ordning (ordering) som kan kreves i forbindelse med kommunikasjon mellom grupper av prosesser i distribuerte systemer, og diskuter kort aktuelle måter å implementere minst to slike former for ordning på",
   "answer":"Ulike former <ul> <li>Uordnet – Ingen intern ordning</li> <li>Kausalt ordnet – Intern ordning tilsvarende eventuelt årsak-virknings forhold</li> <li>Totalt ordnet – Intern ordning uansett</li> <li>Synkront ordnet – Ekstern, dobbel barriere</li> </ul> Implementasjon: <ul> <li>Uordnet – Ingen spesielle tiltak</li> <li>Kausalt ordnet –Logiske klokker + nodeidentifikatorer (/ vektorklokker – egentlig unødvendig)</li> <li>Totalt ordnet – Logiske klokker + nodeidentifikatorer (/ vektorklokker – egentlig unødvendig)</li> <li>Synkront ordnet – Logiske klokker (/ vektorklokker) + Ekstra nodekom. & -nodesynkronisering</li> </ul>"
},

{
   "id":"15",
   "chapter":"Eksamen 2008:",
   "question":"Angi kort overordnete krav som bør stilles til algoritmer for å foreta primas utvelgelse (secretary election) i et distribuert system, og illustrer minst en aktuell algoritme for å løse denne oppgaven",
   "answer":"Overordnede krav: <ul> <li>Oppnå absolutt primas utvelgelse</li> <li>Sikre at alle aktive prosesser involveres</li> <li>Sikre at ingen passiv prosess ødelegger</li> <li>Unngå vranglås og utsulting</li> <li>Unngå avhengighet av enkeltnoder eller enkeltmeldinger</li> <li>Unngå eller begrens flaskehalser i systemet (noder og lenker)</li> <li>Begrens meldingsmengder og prosesseringsforsinkelser</li> </ul> Distribuert algoritme: Start Valg-rutine: <br />1a) Send Valg-melding til alle med høyere identifikator <br /> <br />Får Valg-melding (fra noen lavere): <br />2a) Send OK-melding til avsender <br />2b) Start Valg-prosess som over <br /> <br />Får OK-melding (fra noen høyere): <br />3a) Gi opp for andre <br /> <br />Får ingen melding (fra noen høyere): <br />4a) Send Sjef-melding til alle m/Egen identifikator<br /><br /> Andre muligheter er Sentralisert algoritme og ringalgoritme"
},

{
   "id":"16",
   "chapter":"Eksamen 2008:",
   "question":"Begrunn kort om 2PL-løsningen fra sentraliserte databasesystemer kan anvendes direkte i distribuerte databasesystemer med fragmentering <strong>men uten</strong> replisering (fragmented, non-replicated distributed databases). Hvis noen nye problemer må løses i tillegg, skal dette illustreres med eksempler. Tilhørende nye løsninger skal eventuelt kort beskrives.",
   "answer":"Tilstrekkelighet: Basis 2PL er direkte anvendbar <br />Nye problemer: Kun effektivitestsutfordringer (Vranglåser oppdages senere, og tilhørende aborter kaster bort mer arbeid), ingen korrekthetsproblemer.<br /> Tilhørende løsninger: Intet spesielt"
},

{
   "id":"17",
   "chapter":"Eksamen 2008:",
   "question":"Begrunn også kort om 2PL-løsningen fra sentraliserte databasesystemer kan anvendes direkte i distribuerte databasesystemer med fragmentering <strong>så vel</strong> som replisering (fragmented, replicated distributed databases). Hvis noen nye problemer må løses i tillegg, skal dette illustreres med eksempler. Tilhørende nye løsninger skal eventuelt kort beskrives.",
   "answer":"Tilstrekkelighet: Basis 2PL er nesten direkte anvendbar. <br />Nye problemer: Både effektivitetsutfordringer (Vranglåser oppdages senere, og tilhørende aborter kaster bort mer arbeid) og korrethetsproblemer (Låsing av et / flere fysiske replikater må føre til låsing av tilhørende logiske objekt). Tilhørende løsninger<br /> - Sentralisert låsing (På sentral node)<br /> - Sentralisert / distribuert låsing (Av primær-kopi / master-element)<br /> - Distribuert låsing (Spenn: W låser alle og R låser en - W og R låser begge en majoritet)<br /> <br /> Tofase-skriving (2PW – 2 phase write) i databasesystemer tilsier at alle objekter som skal oppdateres må skrives til en logg før noe objekt blir skrevet til databasen. 2PW er nok til å sikre seg mot gale resultater i forbindelse med transaksjoner som feiler under utførelse i sentraliserte databaser."
},

{
   "id":"18",
   "chapter":"Eksamen 2008:",
   "question":"Begrunn kort om 2PW-løsningen fra sentraliserte databasesystemer kan anvendes direkte i distribuerte databasesystemer med fragmentering men uten replisering (fragmented, non-replicated distributed databases). Hvis noen nye problemer må løses i tillegg, skal dette illustreres med eksempler. Tilhørende nye løsninger skal eventuelt kort beskrives.",
   "answer":"Tilstrekkelighet: 2PW sikrer kun atomiskhet (m.h.t. feil) innen en node (alt-eller-intet).<br /> Nye problemer: Trenger også å sikre atomiskhet (m.h.t. feil og autonomi) mellom flere noder (alle eller ingen). Tilstandssyn (oppfatning av hvilke logiske objekter er tilgjengelige eller ikke) er ikke et ekstra problem.<br /> Tilhørende løsninger: 2PC: 1.fase (stemming), 2.fase (utføring) / 3PC: 1.fase (stemming), 2.fase (orientering), 3.fase (utføring)<br />"
},

{
   "id":"19",
   "chapter":"Eksamen 2008:",
   "question":"Begrunn også kort om 2PW-løsningen fra sentraliserte databasesystemer kan anvendes direkte i distribuerte databasesystemer med fragmentering så vel som replisering (fragmented, replicated distributed databases). Hvis noen nye problemer må løses i tillegg, skal dette illustreres med eksempler. Tilhørende nye løsninger skal eventuelt kort beskrives.",
   "answer":"Tilstrekkelighet: 2PW sikrer kun atomiskhet (m.h.t. feil) innen en node (alt-eller-intet).<br /> Nye problemer: Trenger også å sikre atomiskhet (m.h.t. feil og autonomi) mellom flere noder (alle eller ingen).<br /> Tilstandssyn (oppfatning av hvilke logiske objekter er tilgjengelige eller ikke) er dog et ekstra problem.<br /> Tilhørende løsninger: PC: / 3PC: Med både nodefeil og kommunikasjonsfeil kreves egne protokoller for å utpeke partisjon for oppdatering. (Med kun nodefeil kreves intet ekstra)."
},

{
   "id":"20",
   "chapter":"Eksamen 2008:",
   "question":"Angi kort overordnete krav som bør stilles til et distribuert filsystem, og diskuter kort viktige komponenter som må implementeres i et slikt system",
   "answer":"Overordnede krav: <ul> <li>Sikre ekte globalt filsystem</li> <li>Tilby ulike former for konsistensoppnåelse</li> <li>Tilby ulike former for oppdateringssemantikk</li> <li>Håndter både feiltoleranse og mobilitetstoleranse</li> <li>Utnytt klientmaskiner</li> <li>Utnytt datacaching</li> <li>Begrens beregningsspredning</li> <li>Begrens datareplisering</li> </ul> Viktige komponenter: <ul> <li>Sikre ekte globalt filsystem</li> <li>Tilby ulike former for konsistensoppnåelse</li> <li>Tilby ulike former for oppdateringssemantikk</li> <li>Håndter både feiltoleranse og mobilitetstoleranse</li> <li>Utnytt klientmaskiner</li> <li>Utnytt datacaching</li> <li>Begrens beregningsspredning</li> <li>Begrens datareplisering</li> </ul>"
},

{
   "id":"21",
   "chapter":"Eksamen 2008:",
   "question":"Angi kort overordnete krav som bør stilles til en distribuert navnetjeneste, og diskuter kort viktige komponenter som må implementeres i en slik tjeneste",
   "answer":"Overordnede krav: <ul> <li>Tilby hierarkisk navnerom:<br /> Separat for hvert enkelt organisasjonsenhet etc. – full frihet etter behov</li> <li>Tilby tilpassete navnetjenere:<br /> Samlet for flere organisasjonsenheter etc. – full tilpasning til last</li> <li>Anvend gradvis binding av navn:<br /> Åpner således opp for utnyttelse av aliaser</li> <li>Anvend iterativ binding av navn:<br /> Åpner således opp for utnyttelse av caching</li> </ul> Viktige komponenter: <ul> <li>Implementer nødvendige operasjoner – for maskiner, brukere og tjenester:<br /> Registrer (Hvem, hva)<br /> Finn (Hva)<br /></li> Deregistrer (Hvem, hva) <li>Implementer caching og replikasjon:<br /> Sikrer ytelse og tilgjengelighet</li> </ul>"
},

{
   "id":"22",
   "chapter":"Eksamen 2008:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver multimediasystemer for distribuerte omgivelser står overfor i forhold til multimediasystemer for sentraliserte omgivelser",
   "answer":"Svært korte tur-retur tider kreves for interaktive MM-applikasjoner<br /> Store, skiftende ressurskrav som ikke kan monopolisere parallelt kjørende applikasjoner"
},

{
   "id":"23",
   "chapter":"Eksamen 2008:",
   "question":"Beskriv og vurder bøttebufferalgoritmen (token bucket algorithm)",
   "answer":"* En mediakilde tøyles ved at det innsettes en spesiell buffer mellom den og en medieavtaker<br /> * Bufferen inkluderer en generator som kontinuerlig fyller en bøtte med buffertoken<br /> * Bøttebufferen vil nedskalere uten helt å fjerne variasjonene i mediastrømmen<br /><br /> En ganske effektiv algoritme – ved at den implementerer en lineært bundet ankomststrøm"
},

{
   "id":"24",
   "chapter":"Eksamen 2008:",
   "question":"Angi hvilke ekstra utfordringer og oppgaver sikkerhet i distribuerte systemer står overfor i forhold til sikkerhet i sentraliserte systemer",
   "answer":"Forespørsler og resultater kan gå via meldinger over ett / flere nett hvor de kan lett kan utsettes for ulike former for manipulasjon (aksess og endring i ulike former). Kontroll av ulike aspekter blir vanskeligere på tvers av noder (identitet og rettigheter generelt sett)"
},

{
   "id":"25",
   "chapter":"Eksamen 2008:",
   "question":"Beskriv og vurder Needham-Schroeder algoritmen for meldingsautentisering (message authentication)",
   "answer":"Autentisering (av aktør A og B seg imellom via en tjener S) <br />1) A->S: A, B, N<subA <br />2) S->A: {N<sub>A</sub>, B, K<sub>AB</sub>, {K<sub>AB</sub>, A}K<sub>B</sub>}K<sub>A</sub> <br />3) A->B: {K<sub>AB</sub>, A}K<sub>B</sub> <br />4) B->A: {N<sub>B</sub>}K<sub>AB</sub> <br />5) A->B: {N<sub>B</sub>-1}K<sub>AB</sub><br /> Vurdering: En funksjonelt sett ganske riktig algoritme - kun manglende et tidsmerke i melding nr. 3"
},

{
   "id":"26",
   "chapter":"Eksamen 2011:",
   "question":"Forklar/definer kort følgende begreper: Arbitrære/bysantinske feil",
   "answer":"Systemmodeller: Det kan oppstå alle typer feil: meldinger forsvinner, ankommer flere ganger eller blir endret underveis. Den verste typen feilsemantikk.<br /><br /> Koordinering og enighet: Feilaktige prosesser kan sende vilkårlige meldinger med vilkårlige verdier til vilkårlig tid. De kan også unnlate å sende meldinger."
},

{
   "id":"27",
   "chapter":"Eksamen 2011:",
   "question":"Forklar/definer kort følgende begreper: Maskering av feil",
   "answer":"Gjemmer bort enkelte typer feil for brukeren og/eller tjenester i høyere lag. Det er to måter å gjøre det på: Enten å gjemme feilen helt bort, eller å konvertere den til en mindre alvorlig feiltype (f.eks. kaste en melding med feil sjekksum for å konvertere en arbitrær feil til en unnlatelsesfeil)."
},

{
   "id":"28",
   "chapter":"Eksamen 2011:",
   "question":"Forklar/definer kort følgende begreper: Marshalling",
   "answer":"Konvertering av data fra et lokalt format til et format for utveksling mellom prosesser. Må ta høyde for ting som byte order, tegnsett og parameterrekkefølge. Marshalling kan forutsette at strukturen er kjent på begge sider (f.eks. CORBA), eller sende med metadata som beskriver strukturen (f.eks. XML)."
},

{
   "id":"29",
   "chapter":"Eksamen 2011:",
   "question":"Forklar/definer kort følgende begreper: Overlay network",
   "answer":"Et rutingnettverk implementert oppå et annet nettverk, typisk i applikasjonslaget. Ruter meldinger på andre måter enn IP-ruting, f.eks. ruting basert på objekt-ID i Pastry. Det finnes både strukturerte og ustrukturerte overlay networks."
},

{
   "id":"30",
   "chapter":"Eksamen 2011:",
   "question":"Forklar/definer kort følgende begreper: Passiv replisering",
   "answer":"Også kalt primary-backup. Det er ett primærreplikat og ett eller flere backup-/slavereplikater. Primærreplikatet håndterer kommunikasjonen med front end og sender oppdateringer til slavene. Dersom det oppstår feil, forfremmes en av slavene til primær."
},

{
   "id":"31",
   "chapter":"Eksamen 2011:",
   "question":"Forklar kort forskjellen på kallsemantikkene kanskje (maybe), minst én gang (at least once) og maksimalt én gang (at most once).",
   "answer":"Kanskje: Fjernkallet kan utføres eller ikke utføres. Vi får kanskje-semantikk når ingen systemer feiltoleranse er satt i verk. Tåler ikke unnlatelsesfeil (forespørsel eller svar kommer ikke frem) og krasj (tjeneren med objektet man gjør fjernkall til krasjer). <br /><br /> Minst én gang: Fjernkallet utføres minst én gang, og klienten får svar som garanterer at operasjonen er utført minst én gang eller unntak dersom det ikke kom svar. Kan oppnås ved å sende forespørsler om igjen dersom det ikke kommer svar (maskerer unnlatelsesfeil). Tåler ikke krasj og arbitrære feil. Idempotente operasjoner brukes for å kunne gjenta operasjoner uten uheldige konsekvenser. <br /><br /> Maksimalt én gang: Klienten får svar som garanterer at operasjonen er utført nøyaktig én gang eller unntak dersom svar ikke kommer. Kan oppnås ved å repetere forespørsel og cache svar på tjeneren."
},

{
   "id":"32",
   "chapter":"Eksamen 2011:",
   "question":"Hva er idempotente operasjoner og hvorfor trenger vi dem?",
   "answer":"En idempotent operasjon er en operasjon som kan utføres gjentatte ganger og hver gang har samme resultat som om den ble utført bare én gang. Idempotente operasjoner brukes for å unngå feil når vi gjentar meldinger. F.eks. vil en operasjon som setter saldoen på en bankkonto til 10 kr kunne gjentas dersom tjeneren ikke svarer, mens en operasjon som trekker fra 1 kr vil kunne føre til at et større beløp trekkes fra kontoen dersom den gjentas."
},

{
   "id":"33",
   "chapter":"Eksamen 2011:",
   "question":"I Network File System (NFS) brukes lookup til å slå opp filsystemstien (path name translation) steg for steg ved kall til open, creat og stat. Hvorfor er dette et problem og hva gjøres for å bøte på problemet?",
   "answer":"Det blir veldig mange lookup-forespørsler til tjeneren. Samlet er det mange kall til open, creat og stat, og når lookup slår opp stien iterativt for hvert av disse kallene, blir det en roundtrip for hver del av filsystemstien. Det blir både stor belastning og lang ventetid. <br /><br /> Klienten cacher lookup-resultater for å redusere antallet forespørsler. Dette fungerer fordi applikasjoner og brukere typisk aksesserer filer i et lite antall filkataloger (lokalitetsprinsippet holder)."
},

{
   "id":"34",
   "chapter":"Eksamen 2011:",
   "question":"I Network File System (NFS) brukes lookup til å slå opp filsystemstien (path name translation) steg for steg ved kall til open, creat og stat. Hvordan påvirkes denne mekanismen av avstanden mellom klient og tjener (f.eks. i samme bygning eller på forskjellige kontinenter)?",
   "answer":"Hvert lookup-kall vil bruke lengre tid når avstanden øker siden nettverksforsinkelsen også øker. Spesielt vil dette merkes når det gjøres flere lookup-kall i sekvens for å slå opp en sti i flere deler. Det vil da bli en veldig merkbar forsinkelse. <br /><br /> Cachingen vil gi større ytelsesforbedring i et system hvor tjener og klient står langt fra hverandre."
},

{
   "id":"35",
   "chapter":"Eksamen 2011:",
   "question":"Hvorfor er ikke lokal samtidighetskontroll (concurrency control) på hver deltaker tilstrekkelig til å garantere global serialiserbarhet?",
   "answer":"De lokale samtidighetskontrollene kan utføre operasjoner i forskjellig rekkefølge. Historien kan være serialiserbar lokalt, men på andre noder kan historien være stokket om med transaksjonene i en annen rekkefølge."
},

{
   "id":"36",
   "chapter":"Eksamen 2011:",
   "question":"Hvordan oppstår distribuert vranglås?",
   "answer":"En transaksjon A venter på en annen transaksjon B på en node. På en annen node venter B på A, eller så kan det være flere ledd, slik at B venter på C som igjen venter på A. Siden dette skjer på forskjellige noder, kan det oppstå uten at det er sykluser i de lokale venter-på-grafene."
},

{
   "id":"37",
   "chapter":"Eksamen 2011:",
   "question":"Hva er forskjellen på fysiske og logiske klokker?",
   "answer":"Fysiske klokker måler tid. Kan utlede rekkefølge ved å sammenligne tidspunkter. Logiske klokker brukes for å ordne hendelser i en rekkefølge. Kan for eksempel bare være en teller som økes med 1 hver gang noe skjer."
},

{
   "id":"38",
   "chapter":"Eksamen 2011:",
   "question":"Anta et distribuert system med to prosesser p1 og p2. p1 har en lokal historie med tre hendelser e1, e2, e3 (i denne rekkefølgen) og p2 har en lokal historie med to hendelser f1 og f2 (i denne rekkefølgen). Anta videre at e1 er sending av en melding som mottas i f1 og at f2 er sending av en melding som mottas i e3. (e2 er en hendelse som bare endrer tilstanden i p1). Kan dette distribuerte systemet ha vært i en tilstand der e2 var sist skjedde hendelse i p1 samtidig som f1 var sist skjedde hendelse i p2? Evaluer både “possibly” og “definitely”.",
   "answer":"Bruker Sxy for global tilstand der sist skjedde hendelse i p1 er ex og sist skjedde hendelse i p2 er fy. Skal dermed finne ut om S21 er «possibly» eller «definitely». <br />Vi får disse mulige tilstandsovergangene: <br />S00 => S10 <br />S10 => S11 eller S10 => S20 <br />S11 => S21 eller S11 => S12 <br />S20 => S21 <br />S21 => S22 <br />S12 => S22 <br />S22 => S23 <br /> <br />«definitly» er ikke riktig siden vi kan gå S00 => S10 => S11 => S12 => S22 => S23 <br />«possibly» er riktig siden vi kan gå S00 => S10 => S20 => S21 => S22 => S23"
},

{
   "id":"39",
   "chapter":"Eksamen 2011:",
   "question":"Anta at man skal bruke en sentral tjener for å sikre gjensidig utelukkelse (mutual exclusion). I hvilken grad kan denne algoritmen håndtere at en deltakende prosess krasjer?",
   "answer":"Håndterer ikke at tjeneren krasjer eller prosessen som har token krasjer. Algoritmen stopper hvis tjener ikke kan kontaktes eller hvis token forsvinner. Går greit hvis prosess uten token krasjer."
},

{
   "id":"40",
   "chapter":"Eksamen 2011:",
   "question":"Hva er kausal rekkefølge (causal ordering) av multicast-meldinger? Beskriv kort hvordan det kan implementeres.",
   "answer":"Meldinger er ordnet basert på skjedde-før relasjonen. Dvs at hvis sending av en melding skjedde før sending av en annen melding skal den første meldingen leveres først til alle mottakere. Kan implementeres ved bruk av vektorklokker. Alle deltakere har sin egen vektorklokke som viser antall meldinger fra andre deltakere som har kunnet påvirke nåtilstand. Vektorklokkeverdier legges ved meldinger ved sending. Ved mottak av en melding legges den i en kø hvis mottatte vektorklokkeverdier viser at det er en eller flere meldinger som mangler (skjedde-før mottatt melding)."
},

{
   "id":"41",
   "chapter":"Eksamen 2012:",
   "question":"Hva er fordelene ved et distribuert system i forhold til et sentralisert system?",
   "answer":"Distribuerte systemer muligjør deling av ressurser mellom flere brukere. Det gjør det også mulig å slå sammen ressurser som er delt i utgangspunktet eller ressurser som er for mye for en enkelt sentralisert maskin. Gjennom dette kan man oppnå større grad av skalerbarhet og tilgjengelighet. Distribuerte systemer gjør det også mulig med samhandling mellom deltakere (eks: lynmeldinger, videokonferanser)"
},

{
   "id":"42",
   "chapter":"Eksamen 2012:",
   "question":"Heterogenitet er en typisk utfordring for distribuerte systemer. Beskriv kort hvordan heterogenitet kan håndteres.",
   "answer":"Man kan definere standarder for hvordan (del-)systemer skal oppføre seg og for hvilket grensesnitt de skal ha. Man kan introdusere mellomvare som utligner forskjeller mellom individuelle deltakere. Man kan bruke virtuelle maskiner som gjør det mulig å kjøre samme kode på flere plattformer."
},

{
   "id":"43",
   "chapter":"Eksamen 2012:",
   "question":"Er det ønskelig å gjøre fjernkall helt transparente (dvs. helt likt lokale funksjons-/metodekall)? Diskuter fordeler og ulemper",
   "answer":"Det forsøkes som regel å gjøre syntaksen så lik som mulig mellom fjernkall og lokale kall, men helt transparent er det i praksis umulig å få til (det tar f.eks. alltid lenger tid å gjøre et fjernkall), og det er som regel heller ikke ønskelig, siden man ønsker utvidet feilhåndtering av fjernkall. I motsetning til lokale kall kan fjernkall feile, f.eks. hvis nettverksforbindelsen går ned eller hvis motparten krasjer. Derfor er det ikke alltid ønskelig å gjøre dem helt transparante, siden slik transparens vil hindre feildeteksjon og -håndtering.<br /><br /> Fordelene ved å gjøre fjernkall transparente, er at man ikke trenger å skille mellom fjernkall og lokale kall og at det derfor blir lettere å skrive og vedlikeholde koden, f.eks. ved at marshalling og unmarshalling gjøres automatisk. Det gjør også grensesnittet mer fleksibelt siden det ikke er nødvendig å endre koden hvis man senere velger å flytte på objekter eller funksjoner. Man slipper også å forholde seg til marshalling og unmarshalling og håndtering av nettverksfeil ved å sende meldinger på nytt.<br /><br /> Ulempene er at man gjemmer bort kompleksitet og semantiske forskjeller mellom fjernkall og lokale kall. Lokale kall har en nøyaktig-en-gang-semantikk, mens fjernkall kan ha flere andre semantikker (maybe, at-least-once, at-most-once). Dette vil ikke komme frem i et helt transparent grensesnitt. Det mye som kan gå galt i et fjernkall, og effektiv håndtering av feilsituasjoner er ikke mulig når kallene er transparente. F.eks. kan det være ønskelig å skille mellom at nettverket går ned og at motparten krasjer. <br /><br /> Gjeldende praksis er at man gjør syntaksen lik, og at forskjellene blir tydeliggjort i grensesnittet, f.eks. ved å deklarere at fjernkall kaster unntak ved feil."
},

{
   "id":"44",
   "chapter":"Eksamen 2012:",
   "question":"Anta at vi har to klient-tjener-applikasjoner. Typisk bruksmønster for applikasjon A er at en klient kobler seg opp mot tjeneren, sender en forespørsel, får svar og kobler seg ned. For applikasjon B er det derimot mange forespørsler/svar for hver klient-oppkobling. Hvilken trådarkitektur ville du valgt for tjeneren for applikasjon A? Hva med applikasjon B? Begrunn svaret.",
   "answer":"A: En tråd per forespørsel og en tråd per forbindelse blir det samme i dette tilfellet. Det gir typisk mye overhead å starte en tråd per forespørsel. Kan derfor være fornuftig med en ”worker pool architecture” der forespørsler blir lagt i en felles kø som håndteres av et sett med alltid eksisterende tråder. B: En tråd per forbindelse gir god mening her ettersom mange forespørsler skal håndteres for en gitt forbindelse. Overhead i forbindelse med starting av tråder bør ikke bli et problem her ettersom samme tråd vil svare på mange forespørsler. Hvis man antar at klienten kan genererere ny forespørsel før svar på forrige, kan det gi mening med flere tråder per forbindelse og benytte samtidige kall (”concurrent invocations”). Gitt fornuftige antagelser utover det som er beskrevet i oppgaveteksten, kan tråd per objekt vurderes for både A og B."
},

{
   "id":"45",
   "chapter":"Eksamen 2012:",
   "question":"Oppslag (”routing”) i et likemannsnettverk skjer som regel steg for steg. Hvorfor er dette nødvendig? Hvorfor kan ikke oppslag i steden alltid gjøres direkte fra avsender til mottaker? Begrunn svaret",
   "answer":"For at likemannsnettverket skal være skalerbart, kan ikke alle noder vite om alle andre noder. Dette gjelder spesielt ved høy churn. Konsekvensen er at direkte oppslag er umulig og at forespørsler må rutes steg for steg."
},

{
   "id":"46",
   "chapter":"Eksamen 2012:",
   "question":"Alice og Bob har hver sine offentlige og private nøkler. Av disse fire nøklene, kjenner Alice tre – alle unntatt Bob sin private nøkkel. Gi eksempler på hva Alice kan bruke hver av disse tre nøklene til. (Ett eksempel per nøkkel er nok.)",
   "answer":"AlicePub: Kan gis til Bob slik at Bob kan bruke den til å kryptere meldinger til Alice siden bare AlicePriv kan dekryptere.<br /> AlicePriv: Kan brukes for å signere meldinger da kun AlicePub vil kunne dekryptere meldingen og dermed bevise at meldingen kom fra Alice.<br /> BobPub: Kan brukes til å sende krypterte meldinger til Bob da kun BobPriv vil kunne dekryptere meldingen."
},

{
   "id":"47",
   "chapter":"Eksamen 2012:",
   "question":"Tenk at du skal lage en ny krypteringsalgoritme. Ville du holdt algoritmen (og implementasjonen) hemmelig eller ikke? Begrunn svaret.",
   "answer":"Hvis man gjør algoritmen og implementasjonen offentlig, vil flere kunne delta i å finne mulige feil og mangler. Det vil kunne gjøre algoritmen og implementasjonen sterkere og lettere å stole på. Det er nøklene som skal være hemmeligheten – ikke algoritmen."
},

{
   "id":"48",
   "chapter":"Eksamen 2012:",
   "question":"Hvorfor egner Andrew File System (AFS) seg bedre enn Network File System (NFS) til å lagre hjemmekatalogene til ansatte ved et universitet? Vil de samme fordelene gjelde for en student som bruker forskjellige maskiner på forskjellige datasaler? Hvorfor/hvorfor ikke?",
   "answer":"En av de største forskjellene mellom AFS og NFS er at AFS har en persistent (dvs. overlever reboot) cache av hele filer på lokal disk, mens NFS bare cacher diskblokker i RAM. En ansatt som nesten utelukkende bruker sin egen kontor-PC vil derfor oppleve at de fleste filene allerede er cachet på lokal disk når han skal bruke dem. Ved bruk må klienten spørre tjenren om det har kommet nye versjoner av filen, og kun i veldig få tilfeller der den ansatte eller andre har endret en fil i hjemmekatalogen fra et annet sted vil det være nødvendig å lese nye data fra tjeneren.<br /><br /> En student som flytter mellom maskiner vil normalt ikke oppleve den samme effekten. Filer blir oppdatert på forskjellige maskiner, så mye av effekten ved å bygge opp en lokal cache med arbeidssettet vil forsvinne. Det betyr ikke at fordlene forsvinner helt, men de blir redusert. Hvis studenten har en fast maskin på hver datasal og det ikke er alt for mange andre brukere som spiser av cachekapasiteten, vil det imidlertid være mulig å bygge opp et rimelig arbeidssett på hver av dem og bare oppdatere endringene når det blir nødvendig. Det kan også være en fordel å bruke AFS selv om cachen må bygges opp for hver sesjon, f.eks. hvis studenten gjør operasjoner som bruker filene mye. Filene vil da ligge lokalt i stedet for å hentes over nett (hvis blokkcachen i NFS ikke er stor nok til å holde alt)"
},

{
   "id":"49",
   "chapter":"Eksamen 2012:",
   "question":"Anta et distribuert system med to prosesser p1 og p2. Prosess p1 har en lokal historie med fire hendelser e1-e4 og p2 har en lokal historie med tre hendelser f1-f3. Prosess p1 har en lokal variabel v1 og p2 har en lokal variabel v2. Begge variablene har verdien 0 i utgangspunktet. Detaljer om hendelsene er gitt under: <img src='img/2012_oppg7.png' /> Har summen av v1 og v2 noen gang vært 10? Begrunn svaret",
   "answer":"Bruker Sxy for global tilstand der sist skjedde hendelse i p1 er ex og sist skjedde hendelse i p2 er fy. Vi får disse mulige tilstandsovergangene: <br />S00 => S10 <br />S10 => S20 eller S10 => S11 <br />S20 => S30 eller S20 => S21 <br />S11 => S21 <br />S30 => S31 <br />S21 => S31 eller S22 <br />Osv. I både S21 og S31 er summen lik 10. Siden vi ikke kan unngå å gå innom enten S21 eller S31, vet vi ”definitly” at summen har vært 10 (ikke bare ”possibly”)"
},

{
   "id":"50",
   "chapter":"Eksamen 2012:",
   "question":"Forklar ved hjelp av et eksempel hvordan multicast-meldinger kan være FIFO-ordnet uten å samtidig være kausalt ordnet.",
   "answer":"FIFO ordner bare meldinger sendt fra samme avsender. Anta at node A sender to meldinger. Disse to meldingene blir levert i samme rekkefølge hos nodene A, B og C. Vi har dermed FIFO-ordning. Men anta at C sender en melding etter å ha fått levert A sin første melding (denne meldingen er dermed kausalt avhengig av As første melding). Anta at denne meldingen blir levert hos node B før As første melding. Vi har da ikke kausal ordning (men fremdeles FIFO-ordning)."
},

{
   "id":"51",
   "chapter":"Eksamen 2012:",
   "question":"Hvilket problem bruker man 2PC for å løse? Hvorfor må deltakerene logge (til disk) beslutninger som tas før meldinger sendes?",
   "answer":"To-fase-commit brukes for å koordinere deltakere i distribuerte transaksjoner. Det sikrer at alle deltakere er enige om commit/abort og at en transaksjon ikke introduserer inkonsistens ved at den kun har effekt hos noen av deltakerene. Logging til disk før meldingssendelse gjøres for å forhindre at deltakere kan ombestemme seg etter krasj. Hvis melding sendes før logging og en node krasjer etter at den har sendt en melding men før den har logget meldingen, kan den ombestemme seg når den restarter fordi den ikke har noen anelse om beslutningen den tok (og informerte andre om) før den krasjet."
},

{
   "id":"52",
   "chapter":"Eksamen 2012:",
   "question":"Både Google File System (GFS) og Bigtable bruker sentraliserte mastere, men skalerer likevel godt. Hvorfor fungerer dette? Hvilke fordeler er det ved å gjøre systemene avhengige av en sentralisert master?",
   "answer":"Det fungerer fordi trafikken mellom klient og master er redusert til et minimum, slik at det aller meste av trafikken kan gjøres direkte mellom klient og slaver uten å involvere masteren. I GFS og Bigtable gjøres dette ved at masterene bare håndterer metadata og administrative oppgaver, mens all lesing og skriving av data går direkte mot slavene.<br /><br /> Fordlene med sentralisert master er at det reduserer behovet for koordinering og distribuert enighet. Når det bare er én master, er denne den autorative kilden for alle, og den trenger ikke bli enig med andre for å kunne svare på forespørsler. Dette gjør f.eks. at masteren har overblikk og kan gjøre lastbalansering både av CPU-last og datalagring.<br /><br /> Sentralisert master gir også en mye enklere arkitektur, noe som øker utviklernes og brukernes forståelse og reduserer mulighetene for feil. Klare skiller i arkitekturen gjør også systemet mer fleksibelt og utvidbart. F.eks. har Google pga. stor last utvidet til multi-master uten å endre den overordnede arkitekturen."
},

];