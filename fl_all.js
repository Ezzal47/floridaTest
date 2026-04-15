// fl_all.js — Florida Class E Knowledge Test — Question Database
// Format: { cat, en, it, options:[{en,it},...], correct, explain_en, explain_it }
// Categorie: signs | laws | safety | alcohol | license
// Sessione 1: 195 domande | Sessione 2: +198 domande | Totale: 393
// =====================================================================

const QUESTIONS = [

  // ── ROAD SIGNS ──────────────────────────────────────────────
  {
    cat: "signs",
    en: "A red octagonal sign means:",
    it: "Un segnale ottagonale rosso significa:",
    options: [
      { en: "Slow down", it: "Rallentare" },
      { en: "Stop completely", it: "Fermarsi completamente" },
      { en: "Yield to traffic", it: "Dare la precedenza" },
      { en: "No entry", it: "Divieto di accesso" }
    ],
    correct: 1,
    explain_en: "The red octagon is universally the STOP sign. You must come to a complete stop before the stop line or crosswalk.",
    explain_it: "Il segno ottagonale rosso è universalmente il segnale di STOP. È obbligatorio fermarsi completamente prima della linea di arresto o del passaggio pedonale."
  },
  {
    cat: "signs",
    en: "A yellow diamond-shaped sign indicates:",
    it: "Un segnale a rombo giallo indica:",
    options: [
      { en: "A regulatory requirement", it: "Un obbligo normativo" },
      { en: "A warning of a potential hazard ahead", it: "Un avvertimento di pericolo potenziale" },
      { en: "A school zone", it: "Una zona scolastica" },
      { en: "A construction zone speed limit", it: "Limite di velocità in area di lavori" }
    ],
    correct: 1,
    explain_en: "Yellow diamond signs are warning signs. They alert drivers to road conditions or hazards ahead such as curves, intersections, or merging traffic.",
    explain_it: "I segnali a rombo giallo sono segnali di avvertimento. Avvisano i conducenti di condizioni stradali o pericoli, come curve, incroci o traffico in confluenza."
  },
  {
    cat: "signs",
    en: "A white rectangular sign with black lettering typically indicates:",
    it: "Un segnale rettangolare bianco con lettere nere indica tipicamente:",
    options: [
      { en: "A warning", it: "Un avvertimento" },
      { en: "A regulatory rule you must obey", it: "Una regola normativa da rispettare" },
      { en: "A guide or informational message", it: "Un messaggio informativo o di orientamento" },
      { en: "A temporary traffic condition", it: "Una condizione di traffico temporanea" }
    ],
    correct: 1,
    explain_en: "White rectangular signs with black text are regulatory signs (e.g. speed limits, no turn signs). Drivers must comply with them.",
    explain_it: "I segnali rettangolari bianchi con testo nero sono segnali normativi (es. limiti di velocità, divieti di svolta). I conducenti devono rispettarli."
  },
  {
    cat: "signs",
    en: "A triangular red-bordered sign with a pointed top is a:",
    it: "Un segnale triangolare con bordo rosso e punta verso l'alto è un segnale di:",
    options: [
      { en: "STOP sign", it: "STOP" },
      { en: "YIELD sign", it: "PRECEDENZA (YIELD)" },
      { en: "Warning sign", it: "Avvertimento" },
      { en: "No-passing zone sign", it: "Zona di sorpasso vietato" }
    ],
    correct: 1,
    explain_en: "The inverted red triangle (YIELD sign) means you must slow down and give the right-of-way to vehicles in the intersection or roadway you are entering.",
    explain_it: "Il triangolo rovesciato rosso (YIELD) significa che devi rallentare e cedere la precedenza ai veicoli nell'incrocio o nella carreggiata che stai per immettere."
  },
  {
    cat: "signs",
    en: "An orange sign in a construction or work zone means:",
    it: "Un segnale arancione in una zona di lavori stradali significa:",
    options: [
      { en: "Speed up to clear the zone quickly", it: "Accelerare per attraversare rapidamente la zona" },
      { en: "Temporary traffic control is in effect", it: "È in vigore un controllo del traffico temporaneo" },
      { en: "The road is permanently closed", it: "La strada è chiusa definitivamente" },
      { en: "Workers are not present", it: "Gli operai non sono presenti" }
    ],
    correct: 1,
    explain_en: "Orange signs indicate temporary traffic control measures in construction or work zones. Fines are doubled for violations in these zones.",
    explain_it: "I segnali arancioni indicano misure temporanee di controllo del traffico in zone di costruzione o lavori. Le multe sono raddoppiate per violazioni in queste zone."
  },
  {
    cat: "signs",
    en: "A green sign on the highway provides:",
    it: "Un segnale verde in autostrada fornisce:",
    options: [
      { en: "Speed limit information", it: "Informazioni sul limite di velocità" },
      { en: "Direction and distance information", it: "Informazioni su direzione e distanza" },
      { en: "Warning of hazards ahead", it: "Avvertimento di pericoli in avanti" },
      { en: "Regulatory instructions", it: "Istruzioni normative" }
    ],
    correct: 1,
    explain_en: "Green signs are guide signs. They provide directional and distance information to help drivers navigate to destinations.",
    explain_it: "I segnali verdi sono segnali di orientamento. Forniscono informazioni su direzione e distanza per aiutare i conducenti a navigare verso le destinazioni."
  },
  {
    cat: "signs",
    en: "When you see a pennant-shaped (elongated triangle pointing right) yellow sign, it means:",
    it: "Quando vedi un segnale a forma di pennacchio (triangolo allungato verso destra) giallo, significa:",
    options: [
      { en: "No U-turn ahead", it: "Divieto di inversione di marcia" },
      { en: "No passing zone begins here", it: "Inizia qui una zona di sorpasso vietato" },
      { en: "Merging traffic ahead", it: "Traffico in confluenza in avanti" },
      { en: "School zone warning", it: "Avviso di zona scolastica" }
    ],
    correct: 1,
    explain_en: "The pennant-shaped yellow sign marks the beginning of a no-passing zone. It is placed on the left side of the roadway.",
    explain_it: "Il segnale a forma di pennacchio giallo segna l'inizio di una zona di sorpasso vietato. È posizionato sul lato sinistro della carreggiata."
  },

  // ── TRAFFIC LAWS ─────────────────────────────────────────────
  {
    cat: "laws",
    en: "What is the speed limit in a school zone when children are present in Florida?",
    it: "Qual è il limite di velocità in una zona scolastica quando ci sono bambini presenti in Florida?",
    options: [
      { en: "15 mph", it: "15 miglia orarie" },
      { en: "20 mph", it: "20 miglia orarie" },
      { en: "25 mph", it: "25 miglia orarie" },
      { en: "30 mph", it: "30 miglia orarie" }
    ],
    correct: 1,
    explain_en: "In Florida, the speed limit in school zones when children are present is 20 mph. Violating school zone speed limits results in doubled fines.",
    explain_it: "In Florida, il limite di velocità nelle zone scolastiche quando ci sono bambini è 20 mph (circa 32 km/h). Le violazioni nelle zone scolastiche comportano multe raddoppiate."
  },
  {
    cat: "laws",
    en: "What is the maximum speed limit on most interstate highways in Florida?",
    it: "Qual è il limite di velocità massimo sulla maggior parte delle autostrade interstatali in Florida?",
    options: [
      { en: "55 mph", it: "55 miglia orarie" },
      { en: "65 mph", it: "65 miglia orarie" },
      { en: "70 mph", it: "70 miglia orarie" },
      { en: "75 mph", it: "75 miglia orarie" }
    ],
    correct: 2,
    explain_en: "The maximum speed limit on most Florida interstates is 70 mph. Some rural interstates may have posted limits of 70 mph; urban interstates are typically 65 mph.",
    explain_it: "Il limite di velocità massimo sulla maggior parte delle autostrade interstatali della Florida è 70 mph (circa 113 km/h). Le autostrade urbane hanno generalmente un limite di 65 mph."
  },
  {
    cat: "laws",
    en: "When must you turn on your headlights in Florida?",
    it: "Quando devi accendere i fari in Florida?",
    options: [
      { en: "Only at night", it: "Solo di notte" },
      { en: "From sunset to sunrise and when visibility is less than 1,000 feet", it: "Dal tramonto all'alba e quando la visibilità è inferiore a 300 metri" },
      { en: "Only in rain or fog", it: "Solo in caso di pioggia o nebbia" },
      { en: "Anytime you are on a highway", it: "Ogni volta che sei in autostrada" }
    ],
    correct: 1,
    explain_en: "Florida law requires headlights from sunset to sunrise and any time visibility is less than 1,000 feet. This includes rain, fog, smoke, or any other condition reducing visibility.",
    explain_it: "La legge della Florida richiede i fari dal tramonto all'alba e ogni volta che la visibilità è inferiore a 300 metri. Ciò include pioggia, nebbia, fumo o qualsiasi altra condizione che riduce la visibilità."
  },
  {
    cat: "laws",
    en: "Under Florida's Move Over Law, when approaching a stopped emergency vehicle with flashing lights on a multi-lane road, you must:",
    it: "In base alla legge Move Over della Florida, quando ti avvicini a un veicolo di emergenza fermo con luci lampeggianti su una strada a più corsie, devi:",
    options: [
      { en: "Maintain your speed and lane", it: "Mantenere velocità e corsia" },
      { en: "Move over one lane away from the vehicle OR reduce speed by 20 mph below the posted limit", it: "Spostarti di una corsia oppure ridurre la velocità di 20 mph sotto il limite" },
      { en: "Stop completely until the vehicle moves", it: "Fermarti completamente fino a quando il veicolo non si muove" },
      { en: "Flash your headlights as a warning", it: "Lampeggiare i fari come segnale" }
    ],
    correct: 1,
    explain_en: "Florida's Move Over Law requires drivers to move over one lane (if possible) OR slow down 20 mph below the posted limit when passing stationary emergency vehicles, tow trucks, and road maintenance vehicles with flashing lights.",
    explain_it: "La legge Move Over della Florida richiede di spostarsi di una corsia (se possibile) O ridurre la velocità di 20 mph sotto il limite quando si superano veicoli di emergenza, carroattrezzi e veicoli di manutenzione stradale fermi con luci lampeggianti."
  },
  {
    cat: "laws",
    en: "In Florida, when approaching a school bus with flashing red lights stopped on an undivided road, you must:",
    it: "In Florida, quando si avvicina uno scuolabus con luci rosse lampeggianti fermo su una strada non divisa, devi:",
    options: [
      { en: "Slow to 15 mph and proceed carefully", it: "Rallentare a 15 mph e procedere con cautela" },
      { en: "Stop at least 30 feet away and wait until the lights stop flashing", it: "Fermarsi a non meno di 9 metri e attendere che le luci smettano di lampeggiare" },
      { en: "Pass on the right side at reduced speed", it: "Superare sul lato destro a velocità ridotta" },
      { en: "Honk to alert children and proceed", it: "Suonare il clacson per avvisare i bambini e procedere" }
    ],
    correct: 1,
    explain_en: "All traffic on undivided roads must stop at least 30 feet from a stopped school bus with flashing red lights. You must wait until the lights stop and the stop arm is withdrawn.",
    explain_it: "Tutto il traffico su strade non divise deve fermarsi ad almeno 9 metri da uno scuolabus fermo con luci rosse lampeggianti. Devi attendere che le luci si spengano e il braccio di stop venga ritirato."
  },
  {
    cat: "laws",
    en: "At a four-way stop with no traffic signals, the right-of-way goes to:",
    it: "A un incrocio a quattro vie senza segnali, la precedenza spetta a:",
    options: [
      { en: "The vehicle coming from the left", it: "Il veicolo proveniente da sinistra" },
      { en: "The vehicle that arrived first; if simultaneous, the vehicle on the right", it: "Il veicolo arrivato prima; se simultaneo, al veicolo a destra" },
      { en: "The vehicle traveling straight ahead", it: "Il veicolo che va dritto" },
      { en: "The largest vehicle", it: "Il veicolo più grande" }
    ],
    correct: 1,
    explain_en: "At a four-way stop, the first vehicle to arrive goes first. If two vehicles arrive at the same time, the vehicle on the left yields to the vehicle on the right.",
    explain_it: "A un incrocio a quattro vie, il primo veicolo ad arrivare ha la precedenza. Se due veicoli arrivano simultaneamente, il veicolo a sinistra cede la precedenza al veicolo a destra."
  },
  {
    cat: "laws",
    en: "What is the proper following distance rule in Florida for normal driving conditions?",
    it: "Qual è la regola corretta per la distanza di sicurezza in Florida in condizioni normali di guida?",
    options: [
      { en: "1-second rule", it: "Regola del secondo" },
      { en: "3-second rule", it: "Regola dei 3 secondi" },
      { en: "10-car-length rule", it: "Regola dei 10 lunghezze auto" },
      { en: "50-foot minimum rule", it: "Regola del minimo 50 piedi" }
    ],
    correct: 1,
    explain_en: "The Florida Driver Handbook recommends the 3-second rule as a minimum following distance. In poor conditions (rain, fog, night), increase to 4–6 seconds.",
    explain_it: "Il manuale del conducente della Florida raccomanda la regola dei 3 secondi come distanza di sicurezza minima. In condizioni avverse (pioggia, nebbia, notte), aumentare a 4–6 secondi."
  },
  {
    cat: "laws",
    en: "When making a left turn at an intersection, you must yield to:",
    it: "Quando si effettua una svolta a sinistra a un incrocio, devi cedere la precedenza a:",
    options: [
      { en: "Vehicles behind you only", it: "Solo ai veicoli dietro di te" },
      { en: "Oncoming traffic and pedestrians in the crosswalk", it: "Il traffico in senso contrario e i pedoni sul passaggio pedonale" },
      { en: "Vehicles turning right from the opposite direction", it: "I veicoli che svoltano a destra dalla direzione opposta" },
      { en: "No one, you have the right-of-way", it: "Nessuno, hai la precedenza" }
    ],
    correct: 1,
    explain_en: "When turning left, you must yield to all oncoming vehicles and pedestrians crossing the intersection. Left-turning vehicles have the lowest right-of-way priority.",
    explain_it: "Svoltando a sinistra, devi cedere la precedenza a tutti i veicoli in arrivo e ai pedoni che attraversano l'incrocio. I veicoli che svoltano a sinistra hanno la priorità di precedenza più bassa."
  },
  {
    cat: "laws",
    en: "In Florida, you must use your turn signal at least how far before turning or changing lanes?",
    it: "In Florida, devi usare l'indicatore di direzione almeno a quale distanza prima di svoltare o cambiare corsia?",
    options: [
      { en: "50 feet (15 m)", it: "50 piedi (15 m)" },
      { en: "100 feet (30 m)", it: "100 piedi (30 m)" },
      { en: "200 feet (60 m)", it: "200 piedi (60 m)" },
      { en: "300 feet (90 m)", it: "300 piedi (90 m)" }
    ],
    correct: 1,
    explain_en: "Florida law requires drivers to signal at least 100 feet before turning in a residential area, and at least 200 feet before turning on a highway.",
    explain_it: "La legge della Florida richiede di segnalare almeno 100 piedi (30 m) prima di svoltare in zona residenziale e almeno 200 piedi (60 m) prima di svoltare in autostrada."
  },
  {
    cat: "laws",
    en: "When can you pass a vehicle on the right in Florida?",
    it: "Quando puoi sorpassare un veicolo a destra in Florida?",
    options: [
      { en: "Anytime you want", it: "In qualsiasi momento tu voglia" },
      { en: "When the vehicle ahead is making a left turn and there is a clear lane", it: "Quando il veicolo davanti sta svoltando a sinistra e c'è una corsia libera" },
      { en: "Only on one-way streets", it: "Solo su strade a senso unico" },
      { en: "Only when the posted speed is above 55 mph", it: "Solo quando il limite è superiore a 55 mph" }
    ],
    correct: 1,
    explain_en: "You may pass on the right when the vehicle ahead is turning left AND there is a usable lane on the right, or on one-way roads with two or more lanes.",
    explain_it: "Puoi sorpassare a destra quando il veicolo davanti sta svoltando a sinistra E c'è una corsia utilizzabile a destra, o su strade a senso unico con due o più corsie."
  },
  {
    cat: "laws",
    en: "A solid yellow center line on your side of the road means:",
    it: "Una linea centrale gialla continua sul tuo lato della strada significa:",
    options: [
      { en: "You may pass if it is safe to do so", it: "Puoi sorpassare se è sicuro farlo" },
      { en: "You must not pass (no-passing zone)", it: "Non puoi sorpassare (zona di sorpasso vietato)" },
      { en: "You may pass only at reduced speed", it: "Puoi sorpassare solo a velocità ridotta" },
      { en: "The road is one-way", it: "La strada è a senso unico" }
    ],
    correct: 1,
    explain_en: "A solid yellow line on your side means no passing. A broken yellow line means passing is permitted when safe.",
    explain_it: "Una linea gialla continua sul tuo lato significa divieto di sorpasso. Una linea gialla tratteggiata significa che il sorpasso è consentito quando è sicuro."
  },
  {
    cat: "laws",
    en: "Under Florida law, pedestrians in a crosswalk have the right-of-way:",
    it: "Secondo la legge della Florida, i pedoni in un passaggio pedonale hanno la precedenza:",
    options: [
      { en: "Only when traffic signals tell vehicles to stop", it: "Solo quando i semafori ordinano ai veicoli di fermarsi" },
      { en: "At all times, whether or not a traffic signal is present", it: "In qualsiasi momento, con o senza segnale semaforico" },
      { en: "Only during daylight hours", it: "Solo durante le ore diurne" },
      { en: "Only at marked crosswalks, not at intersections", it: "Solo ai passaggi pedonali segnalati, non agli incroci" }
    ],
    correct: 1,
    explain_en: "Florida law requires drivers to yield to pedestrians in any crosswalk, whether marked or unmarked, and whether or not a traffic signal is present.",
    explain_it: "La legge della Florida richiede ai conducenti di cedere la precedenza ai pedoni in qualsiasi passaggio pedonale, segnalato o meno, con o senza segnale semaforico."
  },
  {
    cat: "laws",
    en: "What should you do when you see a flashing red traffic signal?",
    it: "Cosa dovresti fare quando vedi un segnale semaforico rosso lampeggiante?",
    options: [
      { en: "Slow down and proceed with caution", it: "Rallentare e procedere con cautela" },
      { en: "Stop completely, then proceed when safe", it: "Fermarsi completamente, poi procedere quando è sicuro" },
      { en: "Yield to cross traffic", it: "Cedere la precedenza al traffico trasversale" },
      { en: "Treat it like a yield sign", it: "Trattarlo come un segnale di precedenza" }
    ],
    correct: 1,
    explain_en: "A flashing red light is treated like a STOP sign. Come to a complete stop, yield to traffic and pedestrians, and then proceed when safe.",
    explain_it: "Una luce rossa lampeggiante va trattata come un segnale di STOP. Fermarsi completamente, cedere la precedenza al traffico e ai pedoni, poi procedere quando è sicuro."
  },

  // ── SAFE DRIVING ─────────────────────────────────────────────
  {
    cat: "safety",
    en: "What is the safest thing to do when you become drowsy while driving?",
    it: "Qual è la cosa più sicura da fare quando ti vengono i colpi di sonno mentre guidi?",
    options: [
      { en: "Open a window and turn up the radio", it: "Aprire un finestrino e alzare la radio" },
      { en: "Drink coffee and keep driving", it: "Bere caffè e continuare a guidare" },
      { en: "Pull off the road safely and rest", it: "Accostare in modo sicuro e riposarsi" },
      { en: "Drive faster to reach your destination sooner", it: "Guidare più velocemente per arrivare prima a destinazione" }
    ],
    correct: 2,
    explain_en: "The only safe solution for drowsy driving is to stop and rest. Other methods provide only a brief, unreliable delay before fatigue returns.",
    explain_it: "L'unica soluzione sicura per la sonnolenza alla guida è fermarsi e riposarsi. Gli altri metodi offrono solo un breve e inaffidabile ritardo prima che la stanchezza ritorni."
  },
  {
    cat: "safety",
    en: "At highway speeds, your minimum following distance should be:",
    it: "Ad alta velocità, la tua distanza di sicurezza minima dovrebbe essere:",
    options: [
      { en: "2 seconds", it: "2 secondi" },
      { en: "3 seconds", it: "3 secondi" },
      { en: "4–6 seconds", it: "4–6 secondi" },
      { en: "1 second per 10 mph", it: "1 secondo per ogni 10 mph" }
    ],
    correct: 2,
    explain_en: "At highway speeds, or in poor conditions (rain, fog, night), the recommended following distance increases to 4–6 seconds to allow adequate stopping time.",
    explain_it: "Ad alta velocità, o in condizioni avverse (pioggia, nebbia, notte), la distanza di sicurezza raccomandata aumenta a 4–6 secondi per consentire un tempo di frenata adeguato."
  },
  {
    cat: "safety",
    en: "When driving in fog, you should use:",
    it: "Quando guidi nella nebbia, devi usare:",
    options: [
      { en: "High-beam headlights", it: "Abbaglianti" },
      { en: "Low-beam headlights or fog lights", it: "Anabbaglianti o fendinebbia" },
      { en: "Hazard lights only", it: "Solo le luci di pericolo" },
      { en: "No lights — they reduce visibility", it: "Nessuna luce — riducono la visibilità" }
    ],
    correct: 1,
    explain_en: "Use low-beam headlights or fog lights in fog, smoke, or rain. High beams reflect off the water droplets and actually reduce visibility.",
    explain_it: "Usa gli anabbaglianti o i fendinebbia in caso di nebbia, fumo o pioggia. Gli abbaglianti si riflettono sulle goccioline d'acqua e riducono effettivamente la visibilità."
  },
  {
    cat: "safety",
    en: "What is hydroplaning?",
    it: "Cos'è l'aquaplaning (idroplanazione)?",
    options: [
      { en: "Driving too fast in a flooded area", it: "Guidare troppo velocemente in una zona allagata" },
      { en: "When tires lose contact with the road because of water, causing loss of steering control", it: "Quando i pneumatici perdono il contatto con la strada a causa dell'acqua, causando perdita di controllo dello sterzo" },
      { en: "When your brakes fail on a wet road", it: "Quando i freni cedono su una strada bagnata" },
      { en: "Excessive windshield fogging in rain", it: "Eccessivo appannamento del parabrezza in caso di pioggia" }
    ],
    correct: 1,
    explain_en: "Hydroplaning occurs when a layer of water builds up between your tires and the road, causing loss of steering and braking control. Reduce speed in wet conditions.",
    explain_it: "L'aquaplaning si verifica quando si forma uno strato d'acqua tra i pneumatici e la strada, causando perdita del controllo dello sterzo e dei freni. Ridurre la velocità in condizioni bagnate."
  },
  {
    cat: "safety",
    en: "If your vehicle starts to skid, you should:",
    it: "Se il tuo veicolo inizia a slittare, dovresti:",
    options: [
      { en: "Slam on the brakes immediately", it: "Frenare bruscamente immediatamente" },
      { en: "Steer in the direction you want the front of the vehicle to go and ease off the gas", it: "Sterzare nella direzione in cui vuoi che vada la parte anteriore del veicolo e togliere il piede dal gas" },
      { en: "Turn the wheel sharply in the opposite direction", it: "Girare bruscamente il volante nella direzione opposta" },
      { en: "Accelerate to regain control", it: "Accelerare per riprendere il controllo" }
    ],
    correct: 1,
    explain_en: "In a skid, steer in the direction you want the front to go (into the skid) and ease off the accelerator. Avoid braking sharply as this worsens the skid.",
    explain_it: "In caso di slittamento, sterzare nella direzione in cui si vuole andare (verso lo slittamento) e togliere gradualmente il piede dall'acceleratore. Evitare la frenata brusca poiché peggiora lo slittamento."
  },
  {
    cat: "safety",
    en: "Which of the following is the most effective safety device in your vehicle?",
    it: "Quale dei seguenti è il dispositivo di sicurezza più efficace nel tuo veicolo?",
    options: [
      { en: "Airbags", it: "Airbag" },
      { en: "Anti-lock brakes (ABS)", it: "Freni antibloccaggio (ABS)" },
      { en: "Seat belt", it: "Cintura di sicurezza" },
      { en: "Electronic stability control", it: "Controllo elettronico della stabilità" }
    ],
    correct: 2,
    explain_en: "The seat belt is the single most effective life-saving device in a vehicle. Florida law requires all front-seat occupants and all passengers under 18 to wear seat belts.",
    explain_it: "La cintura di sicurezza è il singolo dispositivo più efficace per salvare vite in un veicolo. La legge della Florida richiede che tutti gli occupanti del sedile anteriore e tutti i passeggeri sotto i 18 anni indossino la cintura."
  },
  {
    cat: "safety",
    en: "What should you do when an emergency vehicle with flashing lights and siren approaches from behind?",
    it: "Cosa dovresti fare quando un veicolo di emergenza con luci lampeggianti e sirena si avvicina da dietro?",
    options: [
      { en: "Speed up to stay ahead of it", it: "Accelerare per restare davanti a esso" },
      { en: "Pull over to the right edge of the road and stop", it: "Accostare al bordo destro della strada e fermarsi" },
      { en: "Move to the center lane and slow down", it: "Spostarsi nella corsia centrale e rallentare" },
      { en: "Maintain your speed and watch in the mirror", it: "Mantenere la velocità e guardare nello specchio" }
    ],
    correct: 1,
    explain_en: "When an emergency vehicle approaches with lights and siren, pull to the right edge of the road and stop. Remain stopped until the vehicle has passed.",
    explain_it: "Quando si avvicina un veicolo di emergenza con luci e sirena, accostare al bordo destro della strada e fermarsi. Rimanere fermi fino al passaggio del veicolo."
  },
  {
    cat: "safety",
    en: "In Florida, it is illegal to text and drive. What does this mean?",
    it: "In Florida, è illegale scrivere messaggi mentre si guida. Cosa significa questo?",
    options: [
      { en: "You may text at red lights only", it: "Puoi mandare messaggi solo ai semafori rossi" },
      { en: "You may not manually type or read messages on a wireless device while driving", it: "Non puoi digitare o leggere manualmente messaggi su un dispositivo wireless durante la guida" },
      { en: "You may use voice-to-text at any time", it: "Puoi usare la voce per i messaggi in qualsiasi momento" },
      { en: "The law only applies to drivers under 18", it: "La legge si applica solo ai conducenti sotto i 18 anni" }
    ],
    correct: 1,
    explain_en: "Florida's texting while driving law prohibits manually typing, reading, or sending messages on a wireless device while driving. It is a primary offense — officers can stop you solely for this violation.",
    explain_it: "La legge della Florida sul messaggistica durante la guida vieta di digitare manualmente, leggere o inviare messaggi su un dispositivo wireless durante la guida. È un reato primario: gli agenti possono fermarti solo per questa violazione."
  },
  {
    cat: "safety",
    en: "Before backing up your vehicle, you should:",
    it: "Prima di fare retromarcia, dovresti:",
    options: [
      { en: "Check only the rearview mirror", it: "Controllare solo lo specchietto retrovisore interno" },
      { en: "Check mirrors and look over both shoulders for pedestrians and obstacles", it: "Controllare gli specchietti e guardare oltre entrambe le spalle per pedoni e ostacoli" },
      { en: "Tap the horn once and proceed", it: "Suonare il clacson una volta e procedere" },
      { en: "Turn on hazard lights before reversing", it: "Accendere le luci di pericolo prima di fare retromarcia" }
    ],
    correct: 1,
    explain_en: "Always check all mirrors and physically turn to look behind you (over both shoulders) before backing. Mirrors have blind spots that can hide children or obstacles.",
    explain_it: "Controlla sempre tutti gli specchietti e girare fisicamente a guardare dietro di te (oltre entrambe le spalle) prima di fare retromarcia. Gli specchietti hanno punti ciechi che possono nascondere bambini o ostacoli."
  },
  {
    cat: "safety",
    en: "What is the recommended hand position on the steering wheel?",
    it: "Qual è la posizione raccomandata delle mani sul volante?",
    options: [
      { en: "10 and 2 o'clock", it: "10 e 2 in punto" },
      { en: "9 and 3 o'clock", it: "9 e 3 in punto" },
      { en: "8 and 4 o'clock", it: "8 e 4 in punto" },
      { en: "One hand at 12 o'clock", it: "Una mano alle 12 in punto" }
    ],
    correct: 1,
    explain_en: "The current recommendation is 9 and 3 o'clock (or 8 and 4). This position provides better control and keeps hands away from airbag deployment zones compared to the older 10-and-2 position.",
    explain_it: "La raccomandazione attuale è 9 e 3 in punto (o 8 e 4). Questa posizione offre un controllo migliore e mantiene le mani lontane dalle zone di attivazione degli airbag rispetto alla vecchia posizione 10-e-2."
  },

  // ── DUI / ALCOHOL ─────────────────────────────────────────────
  {
    cat: "alcohol",
    en: "What is the legal Blood Alcohol Content (BAC) limit for drivers 21 and older in Florida?",
    it: "Qual è il limite legale di tasso alcolemico (BAC) per i conducenti di 21 anni e oltre in Florida?",
    options: [
      { en: "0.05%", it: "0,05%" },
      { en: "0.08%", it: "0,08%" },
      { en: "0.10%", it: "0,10%" },
      { en: "0.12%", it: "0,12%" }
    ],
    correct: 1,
    explain_en: "In Florida (and all U.S. states), the legal BAC limit for drivers 21 and older is 0.08%. For drivers under 21, the limit is 0.02% under Florida's Zero Tolerance Law.",
    explain_it: "In Florida (e in tutti gli stati USA), il limite legale di BAC per conducenti di 21 anni e oltre è 0,08%. Per i conducenti sotto i 21 anni, il limite è 0,02% ai sensi della legge Zero Tolerance della Florida."
  },
  {
    cat: "alcohol",
    en: "Under Florida's Implied Consent Law, refusing a breath or blood test when lawfully arrested for DUI will result in:",
    it: "In base alla legge del consenso implicito della Florida, rifiutarsi di sottoporsi a un test del respiro o del sangue quando si è legalmente arrestati per guida in stato di ebbrezza comporta:",
    options: [
      { en: "No penalty if you are found not guilty of DUI", it: "Nessuna sanzione se si viene ritenuti non colpevoli di DUI" },
      { en: "Automatic license suspension (1 year for first refusal)", it: "Sospensione automatica della patente (1 anno per il primo rifiuto)" },
      { en: "A fine only, no license suspension", it: "Solo una multa, nessuna sospensione della patente" },
      { en: "Community service requirement", it: "Obbligo di servizio alla comunità" }
    ],
    correct: 1,
    explain_en: "Under Florida's Implied Consent Law, refusal to submit to a chemical test results in an automatic 1-year license suspension for the first offense and 18 months for a second refusal.",
    explain_it: "Ai sensi della legge del consenso implicito della Florida, il rifiuto di sottoporsi a un test chimico comporta una sospensione automatica della patente di 1 anno per la prima infrazione e 18 mesi per un secondo rifiuto."
  },
  {
    cat: "alcohol",
    en: "Which of the following is TRUE about alcohol and driving?",
    it: "Quale delle seguenti affermazioni è VERA sull'alcol e la guida?",
    options: [
      { en: "Coffee sobers you up quickly", it: "Il caffè ti fa passare l'ubriachezza rapidamente" },
      { en: "Cold air sobers you up", it: "L'aria fredda ti fa passare l'ubriachezza" },
      { en: "Only time eliminates alcohol from your body", it: "Solo il tempo elimina l'alcol dal corpo" },
      { en: "Exercise speeds up alcohol metabolism", it: "L'esercizio fisico accelera il metabolismo dell'alcol" }
    ],
    correct: 2,
    explain_en: "Only time allows your body to eliminate alcohol. The liver processes approximately one standard drink per hour. Coffee, cold showers, food, and exercise do not speed this up.",
    explain_it: "Solo il tempo consente al corpo di eliminare l'alcol. Il fegato elabora circa un drink standard all'ora. Caffè, docce fredde, cibo ed esercizio fisico non accelerano questo processo."
  },
  {
    cat: "alcohol",
    en: "What is the BAC limit for drivers under 21 in Florida?",
    it: "Qual è il limite di BAC per i conducenti sotto i 21 anni in Florida?",
    options: [
      { en: "0.00%", it: "0,00%" },
      { en: "0.02%", it: "0,02%" },
      { en: "0.05%", it: "0,05%" },
      { en: "0.08%", it: "0,08%" }
    ],
    correct: 1,
    explain_en: "Florida has a Zero Tolerance Law for drivers under 21. A BAC of 0.02% or higher (essentially any measurable alcohol) results in license suspension.",
    explain_it: "La Florida ha una legge di tolleranza zero per i conducenti sotto i 21 anni. Un BAC di 0,02% o superiore (essenzialmente qualsiasi quantità misurabile di alcol) comporta la sospensione della patente."
  },
  {
    cat: "alcohol",
    en: "A first DUI conviction in Florida can result in:",
    it: "Una prima condanna per DUI in Florida può comportare:",
    options: [
      { en: "Only a fine with no other consequences", it: "Solo una multa senza altre conseguenze" },
      { en: "Fines, license revocation, possible jail time, and community service", it: "Multe, revoca della patente, eventuale carcere e servizio alla comunità" },
      { en: "A warning and mandatory alcohol education class only", it: "Solo un avviso e una classe obbligatoria di educazione sull'alcol" },
      { en: "Automatic 10-year license suspension", it: "Sospensione automatica della patente di 10 anni" }
    ],
    correct: 1,
    explain_en: "A first DUI in Florida can result in fines ($500–$2,000), up to 6 months in jail, up to 1 year license revocation, 50 hours of community service, and probation.",
    explain_it: "Una prima condanna per DUI in Florida può comportare multe ($500–$2.000), fino a 6 mesi di carcere, fino a 1 anno di revoca della patente, 50 ore di servizio alla comunità e libertà vigilata."
  },

  // ── LICENSE RULES ─────────────────────────────────────────────
  {
    cat: "license",
    en: "In Florida, you must report a change of address to the FLHSMV within:",
    it: "In Florida, devi comunicare un cambio di indirizzo al FLHSMV entro:",
    options: [
      { en: "10 days", it: "10 giorni" },
      { en: "30 days", it: "30 giorni" },
      { en: "60 days", it: "60 giorni" },
      { en: "90 days", it: "90 giorni" }
    ],
    correct: 1,
    explain_en: "Florida requires you to notify the FLHSMV of a change of address within 30 days. Failure to do so may result in fines.",
    explain_it: "La Florida richiede di notificare al FLHSMV un cambio di indirizzo entro 30 giorni. La mancata notifica può comportare sanzioni."
  },
  {
    cat: "license",
    en: "A Florida driver license must be renewed every:",
    it: "Una patente di guida della Florida deve essere rinnovata ogni:",
    options: [
      { en: "2 years", it: "2 anni" },
      { en: "4 years", it: "4 anni" },
      { en: "6 years", it: "6 anni" },
      { en: "8 years", it: "8 anni" }
    ],
    correct: 3,
    explain_en: "Standard Florida driver licenses are valid for 8 years. Drivers who are 80 or older must renew every 6 years.",
    explain_it: "Le patenti di guida standard della Florida sono valide per 8 anni. I conducenti di 80 anni e oltre devono rinnovarle ogni 6 anni."
  },
  {
    cat: "license",
    en: "Florida's point system suspends your license if you accumulate how many points in 12 months?",
    it: "Il sistema a punti della Florida sospende la tua patente se accumuli quanti punti in 12 mesi?",
    options: [
      { en: "8 points", it: "8 punti" },
      { en: "12 points", it: "12 punti" },
      { en: "15 points", it: "15 punti" },
      { en: "18 points", it: "18 punti" }
    ],
    correct: 1,
    explain_en: "In Florida, 12 points within 12 months = 30-day suspension; 18 points within 18 months = 3-month suspension; 24 points within 36 months = 1-year suspension.",
    explain_it: "In Florida: 12 punti in 12 mesi = sospensione di 30 giorni; 18 punti in 18 mesi = sospensione di 3 mesi; 24 punti in 36 mesi = sospensione di 1 anno."
  },
  {
    cat: "license",
    en: "If you receive a traffic citation and do not pay or contest it, what happens to your driving privilege?",
    it: "Se ricevi una multa per infrazione e non la paghi né la contesti, cosa succede alla tua autorizzazione a guidare?",
    options: [
      { en: "Nothing until you accumulate 3 unpaid citations", it: "Nulla finché non accumuli 3 infrazioni non pagate" },
      { en: "Your driver license may be suspended", it: "La tua patente potrebbe essere sospesa" },
      { en: "You receive a written warning", it: "Ricevi un avviso scritto" },
      { en: "The citation is automatically dismissed after 90 days", it: "La multa viene automaticamente archiviata dopo 90 giorni" }
    ],
    correct: 1,
    explain_en: "Failure to pay or contest a traffic citation in Florida results in a license suspension. You must either pay the fine or request a hearing.",
    explain_it: "La mancata risoluzione di una multa per infrazione in Florida comporta la sospensione della patente. Devi pagare la multa o richiedere un'udienza."
  },
  {
    cat: "license",
    en: "In Florida, who must wear a seat belt?",
    it: "In Florida, chi deve indossare la cintura di sicurezza?",
    options: [
      { en: "Only the driver", it: "Solo il conducente" },
      { en: "Driver and front-seat passengers only", it: "Solo il conducente e i passeggeri del sedile anteriore" },
      { en: "All front-seat occupants and all passengers under 18 regardless of seating position", it: "Tutti gli occupanti del sedile anteriore e tutti i passeggeri sotto i 18 anni indipendentemente dalla posizione" },
      { en: "Everyone in the vehicle regardless of age", it: "Tutti nel veicolo indipendentemente dall'età" }
    ],
    correct: 2,
    explain_en: "Florida's seat belt law requires all front-seat occupants and all passengers under 18 (in any seat) to wear a seat belt. Adults 18+ in back seats are not covered by the primary law but are strongly encouraged.",
    explain_it: "La legge della Florida sulle cinture di sicurezza richiede che tutti gli occupanti del sedile anteriore e tutti i passeggeri sotto i 18 anni (in qualsiasi sedile) indossino la cintura. Gli adulti di 18+ nei sedili posteriori non sono coperti dalla legge primaria ma sono fortemente incoraggiati."
  },
  {
    cat: "license",
    en: "Florida requires all drivers to carry minimum liability insurance. What are the required minimums?",
    it: "La Florida richiede a tutti i conducenti una copertura assicurativa minima di responsabilità. Quali sono i minimi richiesti?",
    options: [
      { en: "$10,000 PIP and $10,000 PDL", it: "$10.000 PIP e $10.000 PDL" },
      { en: "$25,000 bodily injury per person and $50,000 per accident", it: "$25.000 per lesioni per persona e $50.000 per incidente" },
      { en: "$100,000 bodily injury coverage only", it: "Solo $100.000 di copertura per lesioni" },
      { en: "$50,000 comprehensive coverage", it: "$50.000 di copertura completa" }
    ],
    correct: 0,
    explain_en: "Florida requires a minimum of $10,000 Personal Injury Protection (PIP) and $10,000 Property Damage Liability (PDL). Florida is a no-fault insurance state.",
    explain_it: "La Florida richiede un minimo di $10.000 di Personal Injury Protection (PIP) e $10.000 di Property Damage Liability (PDL). La Florida è uno stato assicurativo 'no-fault'."
  },
  {
    cat: "license",
    en: "A new Florida resident with a valid out-of-state license must obtain a Florida license within:",
    it: "Un nuovo residente in Florida con una patente valida di un altro stato deve ottenere una patente Florida entro:",
    options: [
      { en: "10 days of becoming a resident", it: "10 giorni dall'acquisizione della residenza" },
      { en: "30 days of becoming a resident", it: "30 giorni dall'acquisizione della residenza" },
      { en: "60 days of becoming a resident", it: "60 giorni dall'acquisizione della residenza" },
      { en: "90 days of becoming a resident", it: "90 giorni dall'acquisizione della residenza" }
    ],
    correct: 1,
    explain_en: "New Florida residents must obtain a Florida driver license within 30 days of establishing residency in the state.",
    explain_it: "I nuovi residenti in Florida devono ottenere una patente di guida Florida entro 30 giorni dall'acquisizione della residenza nello stato."
  },
  {
    cat: "license",
    en: "What does a 'habitual traffic offender' designation in Florida mean?",
    it: "Cosa significa la designazione di 'trasgressore abituale del traffico' in Florida?",
    options: [
      { en: "You receive 3 extra points per violation", it: "Ricevi 3 punti extra per violazione" },
      { en: "Your license is revoked for 5 years if you have 3 or more major convictions within 5 years", it: "La tua patente viene revocata per 5 anni se hai 3 o più condanne gravi entro 5 anni" },
      { en: "You must retake the driving test every year", it: "Devi sostenere nuovamente l'esame di guida ogni anno" },
      { en: "You are required to attend defensive driving school", it: "Sei obbligato a frequentare una scuola di guida difensiva" }
    ],
    correct: 1,
    explain_en: "A habitual traffic offender in Florida faces a mandatory 5-year license revocation for accumulating 3 or more major convictions (DUI, leaving the scene, etc.) within 5 years.",
    explain_it: "Un trasgressore abituale del traffico in Florida subisce una revoca obbligatoria della patente di 5 anni per aver accumulato 3 o più condanne gravi (DUI, fuga dalla scena, ecc.) entro 5 anni."
  },

  // ── MORE LAWS / SAFETY MIX ────────────────────────────────────
  {
    cat: "laws",
    en: "What is the legal definition of reckless driving in Florida?",
    it: "Qual è la definizione legale di guida spericolata in Florida?",
    options: [
      { en: "Driving more than 20 mph over the speed limit", it: "Guidare a più di 20 mph oltre il limite di velocità" },
      { en: "Driving with willful or wanton disregard for the safety of persons or property", it: "Guidare con deliberata o sconsiderata noncuranza per la sicurezza di persone o proprietà" },
      { en: "Running a red light", it: "Passare con il rosso" },
      { en: "Driving without a license", it: "Guidare senza patente" }
    ],
    correct: 1,
    explain_en: "Florida law defines reckless driving as driving with willful or wanton disregard for the safety of people or property. It is a criminal traffic offense.",
    explain_it: "La legge della Florida definisce la guida spericolata come guidare con deliberata o sconsiderata noncuranza per la sicurezza di persone o proprietà. È un reato penale stradale."
  },
  {
    cat: "laws",
    en: "When approaching a roundabout in Florida, you must:",
    it: "Quando ti avvicini a una rotatoria in Florida, devi:",
    options: [
      { en: "Accelerate to merge quickly", it: "Accelerare per immetterti rapidamente" },
      { en: "Yield to traffic already in the roundabout and enter when safe", it: "Cedere la precedenza al traffico già nella rotatoria e immetterti quando è sicuro" },
      { en: "Stop completely before entering", it: "Fermarti completamente prima di entrare" },
      { en: "Sound your horn to alert drivers in the circle", it: "Suonare il clacson per avvisare i conducenti nel cerchio" }
    ],
    correct: 1,
    explain_en: "At a roundabout, you must yield to vehicles already circulating inside the roundabout. Once it is safe, enter and travel counterclockwise to your exit.",
    explain_it: "In una rotatoria, devi cedere la precedenza ai veicoli già in circolazione all'interno. Una volta che è sicuro, entra e viaggia in senso antiorario fino alla tua uscita."
  },
  {
    cat: "safety",
    en: "What should you do if your brakes fail while driving?",
    it: "Cosa dovresti fare se i freni si guastano durante la guida?",
    options: [
      { en: "Turn off the ignition immediately", it: "Spegnere immediatamente il motore" },
      { en: "Pump the brakes (if not ABS), downshift, and steer to a safe area", it: "Pompare i freni (se non ABS), scalare marcia, e sterzare verso un'area sicura" },
      { en: "Open the door and drag your foot on the road", it: "Aprire la portiera e trascinare il piede sulla strada" },
      { en: "Swerve into oncoming traffic to slow down", it: "Sterzare verso il traffico in senso contrario per rallentare" }
    ],
    correct: 1,
    explain_en: "If brakes fail: pump rapidly (for non-ABS), downshift to slow the engine, use the emergency/parking brake gently, and guide the vehicle to a safe stop area.",
    explain_it: "Se i freni si guastano: pompare rapidamente (per non-ABS), scalare la marcia per rallentare il motore, usare delicatamente il freno di emergenza/parcheggio e guidare il veicolo verso un'area di arresto sicura."
  },
  {
    cat: "laws",
    en: "In Florida, what is the speed limit in a business or residential area unless otherwise posted?",
    it: "In Florida, qual è il limite di velocità in un'area commerciale o residenziale salvo diversa indicazione?",
    options: [
      { en: "25 mph", it: "25 mph" },
      { en: "30 mph", it: "30 mph" },
      { en: "35 mph", it: "35 mph" },
      { en: "45 mph", it: "45 mph" }
    ],
    correct: 1,
    explain_en: "In Florida, the default speed limit in a business or residential district is 30 mph unless otherwise posted by a sign.",
    explain_it: "In Florida, il limite di velocità predefinito in un quartiere commerciale o residenziale è 30 mph (circa 48 km/h) salvo diversa indicazione da un cartello."
  },
  {
    cat: "laws",
    en: "What does a flashing yellow traffic signal mean?",
    it: "Cosa significa un segnale semaforico giallo lampeggiante?",
    options: [
      { en: "Stop completely before proceeding", it: "Fermarsi completamente prima di procedere" },
      { en: "Slow down and proceed with caution", it: "Rallentare e procedere con cautela" },
      { en: "Prepare to stop — the light is about to turn red", it: "Prepararsi a fermarsi: il semaforo sta per diventare rosso" },
      { en: "The signal is out of order — treat it as a stop sign", it: "Il segnale è fuori servizio: trattarlo come un segnale di stop" }
    ],
    correct: 1,
    explain_en: "A flashing yellow light means slow down and proceed with caution. It does not require a full stop but does require increased alertness.",
    explain_it: "Una luce gialla lampeggiante significa rallentare e procedere con cautela. Non richiede un arresto completo ma richiede una maggiore attenzione."
  },
  {
    cat: "safety",
    en: "Florida's 'hands-free' law (effective 2020) primarily restricts:",
    it: "La legge 'hands-free' della Florida (in vigore dal 2020) principalmente limita:",
    options: [
      { en: "Using a GPS navigation device while driving", it: "L'uso di un dispositivo GPS durante la guida" },
      { en: "Holding a wireless device while driving in school or work zones", it: "Tenere in mano un dispositivo wireless mentre si guida nelle zone scolastiche o di lavoro" },
      { en: "Using Bluetooth headsets while driving", it: "L'uso di auricolari Bluetooth durante la guida" },
      { en: "Using the radio or music apps while driving", it: "L'uso della radio o di app musicali durante la guida" }
    ],
    correct: 1,
    explain_en: "Florida's hands-free law prohibits holding a wireless device while driving in designated school zones and active work zones. Violation is a primary offense.",
    explain_it: "La legge hands-free della Florida vieta di tenere in mano un dispositivo wireless mentre si guida nelle zone scolastiche designate e nelle zone di lavoro attive. La violazione è un reato primario."
  },
  {
    cat: "laws",
    en: "When two vehicles arrive at an uncontrolled intersection at the same time, which vehicle has the right of way?",
    it: "Quando due veicoli arrivano contemporaneamente a un incrocio non controllato, quale ha la precedenza?",
    options: [
      { en: "The vehicle on the left", it: "Il veicolo a sinistra" },
      { en: "The vehicle on the right", it: "Il veicolo a destra" },
      { en: "The larger vehicle", it: "Il veicolo più grande" },
      { en: "The faster-moving vehicle", it: "Il veicolo che si muove più velocemente" }
    ],
    correct: 1,
    explain_en: "When two vehicles reach an uncontrolled intersection simultaneously, the vehicle on the left must yield to the vehicle on the right.",
    explain_it: "Quando due veicoli raggiungono simultaneamente un incrocio non controllato, il veicolo a sinistra deve cedere la precedenza al veicolo a destra."
  },
  {
    cat: "safety",
    en: "What is the first thing you should do at the scene of an accident involving injuries?",
    it: "Qual è la prima cosa da fare sulla scena di un incidente con feriti?",
    options: [
      { en: "Exchange insurance information with the other driver", it: "Scambiare le informazioni assicurative con l'altro conducente" },
      { en: "Call 911 and render reasonable assistance", it: "Chiamare il 911 e prestare ragionevole assistenza" },
      { en: "Take photos of the scene before anything else", it: "Fare foto della scena prima di qualsiasi altra cosa" },
      { en: "Move all vehicles off the road immediately", it: "Spostare immediatamente tutti i veicoli dalla strada" }
    ],
    correct: 1,
    explain_en: "Florida law requires drivers involved in accidents with injuries to immediately call 911 and provide reasonable assistance to injured persons. Failure to do so ('hit and run') is a serious felony.",
    explain_it: "La legge della Florida richiede ai conducenti coinvolti in incidenti con feriti di chiamare immediatamente il 911 e prestare ragionevole assistenza alle persone ferite. La mancata ottemperanza ('hit and run') è un grave reato."
  },
  {
    cat: "laws",
    en: "In Florida, you may park no closer than how many feet from a fire hydrant?",
    it: "In Florida, non puoi parcheggiare a meno di quanti piedi da un idrante antincendio?",
    options: [
      { en: "10 feet (3 m)", it: "10 piedi (3 m)" },
      { en: "15 feet (4,5 m)", it: "15 piedi (4,5 m)" },
      { en: "20 feet (6 m)", it: "20 piedi (6 m)" },
      { en: "30 feet (9 m)", it: "30 piedi (9 m)" }
    ],
    correct: 1,
    explain_en: "Florida law prohibits parking within 15 feet of a fire hydrant. Violators may be fined and the vehicle towed.",
    explain_it: "La legge della Florida vieta di parcheggiare entro 15 piedi (circa 4,5 m) da un idrante antincendio. I trasgressori possono essere multati e il veicolo rimosso."
  },
  {
    cat: "laws",
    en: "When entering a highway from an on-ramp, you should:",
    it: "Quando si entra in autostrada da una rampa di accesso, dovresti:",
    options: [
      { en: "Stop at the end of the ramp and wait for a gap", it: "Fermarsi alla fine della rampa e aspettare un'apertura" },
      { en: "Accelerate to match highway speed and merge smoothly into traffic", it: "Accelerare per raggiungere la velocità dell'autostrada e immetterti fluidamente nel traffico" },
      { en: "Enter at a slow speed and force traffic to yield", it: "Entrare a bassa velocità e costringere il traffico a cedere la precedenza" },
      { en: "Flash your headlights to signal your entry", it: "Lampeggiare i fari per segnalare il tuo ingresso" }
    ],
    correct: 1,
    explain_en: "When entering a highway, use the acceleration lane to reach highway speed and merge smoothly into a gap in traffic. Highway drivers have the right-of-way but must make room if safe.",
    explain_it: "Quando si entra in autostrada, usare la corsia di accelerazione per raggiungere la velocità dell'autostrada e immettersi fluidamente in uno spazio nel traffico. I conducenti in autostrada hanno la precedenza ma devono fare spazio se sicuro."
  },

  // ── FINAL QUESTIONS (mixed) ───────────────────────────────────
  {
    cat: "safety",
    en: "Which is a characteristic of a safe driver?",
    it: "Qual è una caratteristica di un guidatore sicuro?",
    options: [
      { en: "Always driving at the maximum posted speed limit", it: "Guidare sempre al massimo del limite di velocità" },
      { en: "Scanning the road ahead and anticipating hazards", it: "Scansionare la strada davanti e anticipare i pericoli" },
      { en: "Driving aggressively to keep pace with traffic", it: "Guidare in modo aggressivo per stare al passo con il traffico" },
      { en: "Relying entirely on other drivers to avoid collisions", it: "Affidarsi interamente agli altri conducenti per evitare collisioni" }
    ],
    correct: 1,
    explain_en: "Safe drivers scan far ahead (12–15 seconds), identify potential hazards early, and maintain space to maneuver. Defensive driving is about anticipation, not reaction.",
    explain_it: "I guidatori sicuri scansionano lontano davanti (12–15 secondi), identificano precocemente i pericoli potenziali e mantengono spazio per manovrare. La guida difensiva riguarda l'anticipazione, non la reazione."
  },
  {
    cat: "laws",
    en: "You must stop your vehicle for a blind pedestrian who is:",
    it: "Devi fermarti per un pedone non vedente che sta:",
    options: [
      { en: "Only at a crosswalk with a traffic signal", it: "Solo a un passaggio pedonale con semaforo" },
      { en: "Using a white cane or guide dog at any crosswalk or intersection", it: "Usando un bastone bianco o cane guida a qualsiasi passaggio pedonale o incrocio" },
      { en: "Facing you from across the street", it: "Di fronte a te dall'altro lato della strada" },
      { en: "Only if the pedestrian has a disability card", it: "Solo se il pedone ha una tessera di disabilità" }
    ],
    correct: 1,
    explain_en: "Florida law requires all drivers to stop and yield to visually impaired pedestrians using a white cane or guide dog at any crosswalk or intersection. Failure is a serious offense.",
    explain_it: "La legge della Florida richiede a tutti i conducenti di fermarsi e cedere la precedenza ai pedoni con disabilità visiva che utilizzano un bastone bianco o cane guida a qualsiasi passaggio pedonale o incrocio."
  },
  {
    cat: "signs",
    en: "A blue highway sign provides information about:",
    it: "Un segnale autostradale blu fornisce informazioni su:",
    options: [
      { en: "Speed limits", it: "Limiti di velocità" },
      { en: "Motorist services (gas, food, lodging, hospitals)", it: "Servizi per automobilisti (carburante, cibo, alloggio, ospedali)" },
      { en: "Hazards and road conditions", it: "Pericoli e condizioni stradali" },
      { en: "State and national parks", it: "Parchi statali e nazionali" }
    ],
    correct: 1,
    explain_en: "Blue signs indicate motorist services, including gas stations, rest areas, restaurants, lodging, and hospitals. These help travelers find services along the route.",
    explain_it: "I segnali blu indicano servizi per automobilisti, tra cui stazioni di servizio, aree di sosta, ristoranti, alloggi e ospedali. Questi aiutano i viaggiatori a trovare servizi lungo il percorso."
  },
  {
    cat: "safety",
    en: "If you are involved in a crash causing more than $500 in property damage and no police respond, you must:",
    it: "Se sei coinvolto in un incidente che causa danni materiali superiori a $500 e la polizia non interviene, devi:",
    options: [
      { en: "Report it to the insurance company only", it: "Segnalarlo solo alla compagnia assicurativa" },
      { en: "File a written report (SR-13) with FLHSMV within 10 days", it: "Presentare una relazione scritta (SR-13) al FLHSMV entro 10 giorni" },
      { en: "No report is required if everyone agrees on blame", it: "Non è richiesta alcuna segnalazione se tutti concordano sulla responsabilità" },
      { en: "Report it within 30 days to the FLHSMV", it: "Segnalarlo al FLHSMV entro 30 giorni" }
    ],
    correct: 1,
    explain_en: "If police do not respond to a crash with $500+ in property damage or injury, the driver must file a written crash report (SR-13) with FLHSMV within 10 days.",
    explain_it: "Se la polizia non interviene a un incidente con $500+ di danni materiali o feriti, il conducente deve presentare una relazione scritta sull'incidente (SR-13) al FLHSMV entro 10 giorni."
  },

  // ══ SIGNS – additional (27 new) ══════════════════════════════

  {
    cat: "signs",
    en: "A green traffic signal means:",
    it: "Un semaforo verde significa:",
    options: [
      { en: "Proceed if the intersection is clear", it: "Procedere se l'incrocio è libero" },
      { en: "Slow down", it: "Rallentare" },
      { en: "Stop — prepare to yield", it: "Fermarsi — prepararsi a cedere la precedenza" },
      { en: "Emergency vehicles approaching", it: "Veicoli di emergenza in arrivo" }
    ],
    correct: 0,
    explain_en: "A green light means you may proceed if the intersection is clear and it is safe to do so. Always check for cross-traffic before entering.",
    explain_it: "Il verde significa che puoi procedere se l'incrocio è libero e sicuro. Verifica sempre il traffico trasversale prima di entrare."
  },
  {
    cat: "signs",
    en: "A flashing red traffic signal should be treated as:",
    it: "Un segnale semaforico rosso lampeggiante va trattato come:",
    options: [
      { en: "A yield sign", it: "Un segnale di precedenza YIELD" },
      { en: "A stop sign — stop, yield, then proceed when safe", it: "Un segnale STOP — fermarsi, cedere, poi procedere quando sicuro" },
      { en: "A green light", it: "Un semaforo verde" },
      { en: "A caution to slow down only", it: "Solo un invito a rallentare" }
    ],
    correct: 1,
    explain_en: "A flashing red signal must be treated exactly like a stop sign: come to a full stop, yield to traffic and pedestrians, and proceed when safe.",
    explain_it: "Un segnale rosso lampeggiante va trattato esattamente come uno stop: arresto completo, cedere la precedenza a traffico e pedoni, procedere quando sicuro."
  },
  {
    cat: "signs",
    en: "A flashing yellow traffic signal means:",
    it: "Un segnale semaforico giallo lampeggiante significa:",
    options: [
      { en: "Stop completely", it: "Fermarsi completamente" },
      { en: "Slow down and proceed with caution", it: "Rallentare e procedere con cautela" },
      { en: "The light is about to turn red", it: "Il semaforo sta per diventare rosso" },
      { en: "Yield to all cross traffic", it: "Cedere a tutto il traffico trasversale" }
    ],
    correct: 1,
    explain_en: "A flashing yellow means slow down and proceed with caution — no full stop is required unless traffic demands it.",
    explain_it: "Il giallo lampeggiante significa rallentare e procedere con cautela — non è richiesto un arresto completo a meno che il traffico lo imponga."
  },
  {
    cat: "signs",
    en: "A green arrow displayed with a red light means:",
    it: "Una freccia verde mostrata insieme a un semaforo rosso significa:",
    options: [
      { en: "Yield and then turn in the direction of the arrow", it: "Cedere e poi svoltare nella direzione della freccia" },
      { en: "You may move in the direction of the arrow — oncoming traffic is stopped", it: "Puoi muoverti nella direzione della freccia — il traffico opposto è fermo" },
      { en: "All traffic may proceed", it: "Tutto il traffico può procedere" },
      { en: "Pedestrians have right-of-way in the arrow direction", it: "I pedoni hanno la precedenza nella direzione della freccia" }
    ],
    correct: 1,
    explain_en: "A green arrow (protected signal) means you may move in that direction — conflicting traffic is stopped by a red light. It is a protected movement.",
    explain_it: "Una freccia verde (segnale protetto) indica che puoi muoverti in quella direzione — il traffico in conflitto è fermato dal rosso. È un movimento protetto."
  },
  {
    cat: "signs",
    en: "What does a yellow X signal above a traffic lane indicate?",
    it: "Cosa indica una X gialla sopra una corsia di traffico?",
    options: [
      { en: "The lane is open — proceed normally", it: "La corsia è aperta — procedere normalmente" },
      { en: "Prepare to leave this lane — it is about to close", it: "Prepararsi a lasciare questa corsia — sta per chiudersi" },
      { en: "The lane is reserved for high-occupancy vehicles", it: "La corsia è riservata ai veicoli ad alta occupazione" },
      { en: "Turning is required from this lane", it: "È obbligatorio svoltare da questa corsia" }
    ],
    correct: 1,
    explain_en: "A yellow X above a lane is a warning that the lane is closing. Drivers should safely move to an adjacent open lane.",
    explain_it: "Una X gialla sopra una corsia avvisa che la corsia sta per chiudersi. I conducenti devono spostarsi in sicurezza in una corsia adiacente aperta."
  },
  {
    cat: "signs",
    en: "What does a red X signal above a traffic lane mean?",
    it: "Cosa significa una X rossa sopra una corsia di traffico?",
    options: [
      { en: "Emergency vehicles only permitted", it: "Solo veicoli di emergenza consentiti" },
      { en: "The lane is closed — do not use it", it: "La corsia è chiusa — non usarla" },
      { en: "Trucks and buses prohibited", it: "Camion e autobus vietati" },
      { en: "Speed limit reduction in effect", it: "Riduzione del limite di velocità in vigore" }
    ],
    correct: 1,
    explain_en: "A red X above a lane means the lane is closed to traffic. Driving in a lane with a red X is illegal and dangerous.",
    explain_it: "Una X rossa sopra una corsia significa che quella corsia è chiusa al traffico. Guidarci è illegale e pericoloso."
  },
  {
    cat: "signs",
    en: "A pennant-shaped yellow sign on the LEFT side of the road indicates:",
    it: "Un segnale a pennant giallo sul lato SINISTRO della strada indica:",
    options: [
      { en: "No U-turn", it: "Divieto di inversione di marcia" },
      { en: "Beginning of a no-passing zone", it: "Inizio di una zona di divieto di sorpasso" },
      { en: "Slow vehicle turn-out ahead", it: "Piazzola di sosta veicoli lenti in avanti" },
      { en: "Road narrows from the left", it: "La strada si restringe dal lato sinistro" }
    ],
    correct: 1,
    explain_en: "The pennant-shaped sign marks the beginning of a no-passing zone. It always appears on the left side of the road.",
    explain_it: "Il segnale a pennant segna l'inizio di una zona di divieto di sorpasso. Appare sempre sul lato sinistro della strada."
  },
  {
    cat: "signs",
    en: "A 'Do Not Enter' sign means:",
    it: "Un segnale 'Do Not Enter' (Vietato Accesso) significa:",
    options: [
      { en: "Slow down to 15 mph", it: "Rallentare a 15 mph" },
      { en: "Do not enter this road or area", it: "Non entrare in questa strada o area" },
      { en: "Yield to oncoming traffic before entering", it: "Cedere al traffico in arrivo prima di entrare" },
      { en: "One-way street — enter with caution", it: "Strada a senso unico — entrare con cautela" }
    ],
    correct: 1,
    explain_en: "'Do Not Enter' prohibits entry into a roadway or area, usually on one-way streets or exit ramps. Entering is extremely dangerous and illegal.",
    explain_it: "'Do Not Enter' vieta l'accesso a una strada o area, solitamente su strade a senso unico o rampe di uscita. Entrare è estremamente pericoloso e illegale."
  },
  {
    cat: "signs",
    en: "A 'Wrong Way' sign means:",
    it: "Un segnale 'Wrong Way' (Senso Vietato) significa:",
    options: [
      { en: "You are entering a restricted zone", it: "Stai entrando in una zona riservata" },
      { en: "You are traveling against the flow of traffic — turn around immediately", it: "Stai viaggiando contromano — invertire immediatamente la marcia" },
      { en: "Speed reduction required ahead", it: "Riduzione della velocità richiesta in avanti" },
      { en: "Road is closed for construction", it: "Strada chiusa per lavori" }
    ],
    correct: 1,
    explain_en: "A 'Wrong Way' sign means you are headed into oncoming traffic. Stop, turn around safely, and exit the roadway immediately.",
    explain_it: "Un segnale 'Wrong Way' significa che stai andando contromano. Fermarsi, invertire in sicurezza e uscire immediatamente dalla carreggiata."
  },
  {
    cat: "signs",
    en: "A round yellow sign with an 'X' and the letters 'RR' means:",
    it: "Un segnale rotondo giallo con una 'X' e le lettere 'RR' significa:",
    options: [
      { en: "Railroad crossing ahead — be prepared to stop", it: "Passaggio a livello in avanti — prepararsi a fermarsi" },
      { en: "No passing zone 100 feet ahead", it: "Zona di divieto di sorpasso a 100 piedi" },
      { en: "Rest area with restrooms", it: "Area di sosta con servizi igienici" },
      { en: "Road narrows ahead", it: "La strada si restringe in avanti" }
    ],
    correct: 0,
    explain_en: "A round yellow sign with RR and an X is an advance warning of a railroad crossing ahead. Slow down and be prepared to stop if a train is coming.",
    explain_it: "Un segnale rotondo giallo con RR e una X è un avviso anticipato di un passaggio a livello in avanti. Rallentare e prepararsi a fermarsi se arriva un treno."
  },
  {
    cat: "signs",
    en: "Yellow pavement center-line markings separate:",
    it: "Le linee centrali gialle sul manto stradale separano:",
    options: [
      { en: "Lanes of traffic traveling in the same direction", it: "Corsie di traffico nella stessa direzione" },
      { en: "Traffic traveling in opposite directions", it: "Il traffico che viaggia in direzioni opposte" },
      { en: "Bicycle lanes from vehicle lanes", it: "Piste ciclabili dalle corsie per veicoli" },
      { en: "Parking from travel lanes", it: "Parcheggio dalle corsie di marcia" }
    ],
    correct: 1,
    explain_en: "Yellow center-line markings always separate traffic moving in opposite directions. White markings separate traffic moving in the same direction.",
    explain_it: "Le linee centrali gialle separano sempre il traffico che si muove in direzioni opposte. Le bianche separano il traffico nella stessa direzione."
  },
  {
    cat: "signs",
    en: "A solid white line at an intersection stop bar means:",
    it: "Una linea bianca continua alla linea di arresto di un incrocio significa:",
    options: [
      { en: "You may cross it at any time", it: "Puoi attraversarla in qualsiasi momento" },
      { en: "Stop here — do not cross the line when required to stop", it: "Fermati qui — non attraversare la linea quando sei obbligato a fermarti" },
      { en: "Yield to pedestrians only", it: "Cedere la precedenza solo ai pedoni" },
      { en: "No-parking zone begins here", it: "Inizia una zona di divieto di sosta" }
    ],
    correct: 1,
    explain_en: "A solid white stop bar marks where you must stop for a stop sign or red light. Your vehicle must not cross this line when stopping.",
    explain_it: "Una linea di arresto bianca continua segna dove devi fermarti per uno stop o un semaforo rosso. Il veicolo non deve attraversare questa linea quando si ferma."
  },
  {
    cat: "signs",
    en: "What color are guide signs on interstate highways?",
    it: "Di che colore sono i segnali informativi sulle autostrade interstatali?",
    options: [
      { en: "Blue", it: "Blu" },
      { en: "Brown", it: "Marrone" },
      { en: "Green", it: "Verde" },
      { en: "White", it: "Bianco" }
    ],
    correct: 2,
    explain_en: "Green signs are guide signs on interstates and highways. They give directional and distance information to exits and destinations.",
    explain_it: "I segnali verdi sono segnali informativi sulle autostrade interstatali. Forniscono informazioni su direzioni, distanze e destinazioni."
  },
  {
    cat: "signs",
    en: "Brown highway signs indicate:",
    it: "I segnali autostradali marroni indicano:",
    options: [
      { en: "Motorist services (gas, food)", it: "Servizi per automobilisti (carburante, cibo)" },
      { en: "Recreational areas and points of cultural interest", it: "Aree ricreative e punti di interesse culturale" },
      { en: "Construction zones", it: "Zone di lavori stradali" },
      { en: "Regulatory speed zones", it: "Zone di velocità normativa" }
    ],
    correct: 1,
    explain_en: "Brown signs indicate recreational areas, parks, historical landmarks, and cultural points of interest.",
    explain_it: "I segnali marroni indicano aree ricreative, parchi, siti storici e punti di interesse culturale."
  },
  {
    cat: "signs",
    en: "A 'Merge' sign warns that:",
    it: "Un segnale 'Merge' (Confluenza) avverte che:",
    options: [
      { en: "The road is splitting into two lanes", it: "La strada si divide in due corsie" },
      { en: "Two lanes of traffic will soon join into one", it: "Due corsie di traffico si uniranno presto in una" },
      { en: "You must stop and yield", it: "Devi fermarti e cedere la precedenza" },
      { en: "A lane is reserved for merging vehicles only", it: "Una corsia è riservata solo ai veicoli in confluenza" }
    ],
    correct: 1,
    explain_en: "A Merge sign warns that two lanes of traffic will soon combine into one. Adjust speed and position to merge safely.",
    explain_it: "Un segnale Merge avverte che due corsie di traffico si uniranno presto in una. Adeguare velocità e posizione per confluire in sicurezza."
  },
  {
    cat: "signs",
    en: "What shape is a STOP sign?",
    it: "Che forma ha un segnale STOP?",
    options: [
      { en: "Rectangle", it: "Rettangolo" },
      { en: "Pentagon", it: "Pentagono" },
      { en: "Octagon", it: "Ottagono" },
      { en: "Circle", it: "Cerchio" }
    ],
    correct: 2,
    explain_en: "The STOP sign is an octagon (8 sides). It is always red with white lettering. Its unique shape allows recognition even when obscured by snow or dirt.",
    explain_it: "Il segnale STOP è un ottagono (8 lati). È sempre rosso con lettere bianche. La sua forma unica consente il riconoscimento anche quando è oscurato."
  },
  {
    cat: "signs",
    en: "What shape is a YIELD sign?",
    it: "Che forma ha un segnale YIELD (Precedenza)?",
    options: [
      { en: "Octagon", it: "Ottagono" },
      { en: "Inverted triangle (point down)", it: "Triangolo capovolto (punta verso il basso)" },
      { en: "Diamond", it: "Rombo" },
      { en: "Pentagon", it: "Pentagono" }
    ],
    correct: 1,
    explain_en: "The YIELD sign is an inverted triangle with a red border — unique shape means drivers recognize it even without seeing the text.",
    explain_it: "Il segnale YIELD è un triangolo capovolto con bordo rosso — la forma unica consente il riconoscimento anche senza leggere il testo."
  },
  {
    cat: "signs",
    en: "A speed limit sign is classified as a:",
    it: "Un segnale di limite di velocità è classificato come:",
    options: [
      { en: "Warning sign", it: "Segnale di avvertimento" },
      { en: "Regulatory sign", it: "Segnale normativo" },
      { en: "Guide sign", it: "Segnale informativo" },
      { en: "Temporary sign", it: "Segnale temporaneo" }
    ],
    correct: 1,
    explain_en: "Speed limit signs are regulatory signs. They establish the maximum legal speed allowed and must be obeyed.",
    explain_it: "I segnali di limite di velocità sono normativi. Stabiliscono la velocità massima legale consentita e devono essere rispettati."
  },
  {
    cat: "signs",
    en: "A crosswalk marked with white lines means:",
    it: "Un passaggio pedonale segnato con linee bianche significa:",
    options: [
      { en: "Parking is permitted here", it: "Il parcheggio è consentito qui" },
      { en: "Pedestrians may be crossing — yield to them", it: "I pedoni potrebbero attraversare — cedergli la precedenza" },
      { en: "Bicycles only may cross here", it: "Solo le biciclette possono attraversare qui" },
      { en: "Speed up to clear the crossing", it: "Accelerare per liberare il passaggio" }
    ],
    correct: 1,
    explain_en: "Marked crosswalks indicate where pedestrians may cross. Florida law requires drivers to yield to any pedestrian in a crosswalk.",
    explain_it: "I passaggi pedonali segnalati indicano dove i pedoni possono attraversare. La legge della Florida richiede di cedere a qualsiasi pedone in un passaggio pedonale."
  },
  {
    cat: "signs",
    en: "A 'No U-Turn' sign means:",
    it: "Un segnale 'No U-Turn' (Divieto di Inversione) significa:",
    options: [
      { en: "U-turns are permitted with caution", it: "Le inversioni sono consentite con cautela" },
      { en: "U-turns are prohibited at this location", it: "Le inversioni sono vietate in questo punto" },
      { en: "U-turns allowed only for trucks", it: "Inversioni consentite solo ai camion" },
      { en: "Reduce speed before making a U-turn", it: "Ridurre la velocità prima dell'inversione" }
    ],
    correct: 1,
    explain_en: "A 'No U-Turn' sign prohibits making a U-turn at that intersection or location. Violating it is a moving violation.",
    explain_it: "Un segnale 'No U-Turn' vieta di eseguire un'inversione di marcia in quell'incrocio o punto. Violarlo è un'infrazione in movimento."
  },
  {
    cat: "signs",
    en: "When pavement markings are white and dashed (broken), they mean:",
    it: "Quando le linee sul manto stradale sono bianche e tratteggiate, significano:",
    options: [
      { en: "No lane change permitted", it: "Nessun cambio di corsia consentito" },
      { en: "Lane changes are permitted when safe", it: "I cambi di corsia sono consentiti quando sicuro" },
      { en: "Bicycle lane", it: "Corsia ciclabile" },
      { en: "No passing zone", it: "Zona di divieto di sorpasso" }
    ],
    correct: 1,
    explain_en: "White dashed lines separate lanes of same-direction traffic. You may change lanes when it is safe to do so.",
    explain_it: "Le linee bianche tratteggiate separano le corsie dello stesso senso di marcia. Puoi cambiare corsia quando è sicuro farlo."
  },
  {
    cat: "signs",
    en: "A 'Lane Ends' sign means:",
    it: "Un segnale 'Lane Ends' (Fine Corsia) significa:",
    options: [
      { en: "The road ends — no outlet", it: "La strada finisce — nessuna uscita" },
      { en: "Your lane is ending — merge safely into the adjacent lane", it: "La tua corsia sta finendo — immettiti in sicurezza nella corsia adiacente" },
      { en: "No passing allowed in this lane", it: "Sorpasso non consentito in questa corsia" },
      { en: "Reduce speed to 25 mph", it: "Ridurre la velocità a 25 mph" }
    ],
    correct: 1,
    explain_en: "A 'Lane Ends' sign means your current lane is ending. You must merge into the adjacent lane. Yield to traffic in the lane you are entering.",
    explain_it: "Un segnale 'Lane Ends' significa che la tua corsia sta finendo. Devi immetterti nella corsia adiacente, cedendo al traffico in quella corsia."
  },
  {
    cat: "signs",
    en: "What does a 'Keep Right' sign mean?",
    it: "Cosa significa un segnale 'Keep Right' (Tenersi a Destra)?",
    options: [
      { en: "Pass only on the right side of other vehicles", it: "Superare solo sul lato destro degli altri veicoli" },
      { en: "Stay to the right of a divider, island, or obstruction", it: "Tenersi a destra di uno spartitraffico, isola o ostacolo" },
      { en: "Right turn only at the next intersection", it: "Solo svolta a destra al prossimo incrocio" },
      { en: "Right lane is the slow lane — use it if below speed limit", it: "La corsia destra è quella lenta — usarla se sotto il limite" }
    ],
    correct: 1,
    explain_en: "A 'Keep Right' sign tells drivers to stay to the right side of a divider, median, island, or other obstruction in the roadway.",
    explain_it: "Un segnale 'Keep Right' indica ai conducenti di tenersi a destra di uno spartitraffico, mediana, isola o altro ostacolo nella carreggiata."
  },
  {
    cat: "signs",
    en: "What does a truck on a slope road sign indicate?",
    it: "Cosa indica un segnale raffigurante un camion su una strada in pendenza?",
    options: [
      { en: "Truck parking area ahead", it: "Area di parcheggio camion in avanti" },
      { en: "Steep hill ahead — trucks should use lower gears", it: "Pendenza ripida in avanti — i camion devono usare marce basse" },
      { en: "No trucks allowed on this road", it: "Camion non consentiti su questa strada" },
      { en: "Runaway truck ramp available on the right", it: "Rampa di emergenza per camion disponibile a destra" }
    ],
    correct: 1,
    explain_en: "A truck-on-slope sign warns of a steep grade ahead. Trucks should downshift and all drivers should increase following distance.",
    explain_it: "Un segnale con camion in pendenza avverte di una pendenza ripida in avanti. I camion devono scalare marcia e tutti i conducenti devono aumentare la distanza."
  },
  {
    cat: "signs",
    en: "A 'No Left Turn' sign means:",
    it: "Un segnale 'No Left Turn' (Divieto Svolta a Sinistra) significa:",
    options: [
      { en: "Left turns are required here", it: "Le svolte a sinistra sono obbligatorie qui" },
      { en: "Left turns are prohibited at this location", it: "Le svolte a sinistra sono vietate in questo punto" },
      { en: "Left turns allowed only when no oncoming traffic", it: "Svolte a sinistra consentite solo senza traffico in arrivo" },
      { en: "Yield before turning left", it: "Cedere la precedenza prima di svoltare a sinistra" }
    ],
    correct: 1,
    explain_en: "A 'No Left Turn' sign prohibits left turns at that intersection or location. Obeying it is mandatory.",
    explain_it: "Un segnale 'No Left Turn' vieta le svolte a sinistra a quell'incrocio o in quel punto. Rispettarlo è obbligatorio."
  },
  {
    cat: "signs",
    en: "A school zone sign is typically what color?",
    it: "Un segnale di zona scolastica è tipicamente di che colore?",
    options: [
      { en: "Yellow", it: "Giallo" },
      { en: "Fluorescent yellow-green", it: "Giallo-verde fluorescente" },
      { en: "Orange", it: "Arancione" },
      { en: "Red", it: "Rosso" }
    ],
    correct: 1,
    explain_en: "School zone and pedestrian warning signs use a distinctive fluorescent yellow-green color for maximum visibility.",
    explain_it: "I segnali di zona scolastica e di avvertimento pedonale usano un colore giallo-verde fluorescente per la massima visibilità."
  },
  {
    cat: "signs",
    en: "Double solid yellow center lines mean:",
    it: "Una doppia linea gialla continua al centro significa:",
    options: [
      { en: "Passing is allowed from both directions", it: "Il sorpasso è consentito da entrambe le direzioni" },
      { en: "Passing is prohibited from both directions", it: "Il sorpasso è vietato da entrambe le direzioni" },
      { en: "Passing is allowed only during daylight", it: "Il sorpasso è consentito solo di giorno" },
      { en: "The center lane is for left turns only", it: "La corsia centrale è solo per le svolte a sinistra" }
    ],
    correct: 1,
    explain_en: "Double solid yellow lines mean no passing is allowed from either direction. Neither lane may cross these lines to pass.",
    explain_it: "Una doppia linea gialla continua significa che il sorpasso è vietato da entrambe le direzioni. Nessuna corsia può attraversare queste linee per sorpassare."
  },

  // ══ TRAFFIC LAWS – additional (34 new) ═══════════════════════

  {
    cat: "laws",
    en: "On a Florida interstate highway, the maximum speed limit is typically:",
    it: "Su un'autostrada interstatale della Florida, il limite massimo di velocità è tipicamente:",
    options: [
      { en: "55 mph", it: "55 mph" },
      { en: "65 mph", it: "65 mph" },
      { en: "70 mph", it: "70 mph" },
      { en: "75 mph", it: "75 mph" }
    ],
    correct: 2,
    explain_en: "Most Florida interstates have a maximum speed of 70 mph. Urban interstates within city limits are typically 65 mph.",
    explain_it: "La maggior parte delle autostrade interstatali della Florida ha un limite massimo di 70 mph. Le autostrade urbane all'interno dei limiti della città sono tipicamente 65 mph."
  },
  {
    cat: "laws",
    en: "The speed limit in a Florida school zone when children are present is:",
    it: "Il limite di velocità in una zona scolastica della Florida con bambini presenti è:",
    options: [
      { en: "15 mph", it: "15 mph" },
      { en: "20 mph", it: "20 mph" },
      { en: "25 mph", it: "25 mph" },
      { en: "30 mph", it: "30 mph" }
    ],
    correct: 1,
    explain_en: "Florida school zones have a 20 mph speed limit when children are present. Traffic fines are doubled in school zones.",
    explain_it: "Le zone scolastiche della Florida hanno un limite di 20 mph con bambini presenti. Le multe per infrazioni stradali sono raddoppiate nelle zone scolastiche."
  },
  {
    cat: "laws",
    en: "When must you turn on your headlights in Florida?",
    it: "Quando devi accendere i fari in Florida?",
    options: [
      { en: "Only after dark", it: "Solo dopo il buio" },
      { en: "From sunset to sunrise and when visibility is less than 1,000 feet", it: "Dal tramonto all'alba e quando la visibilità è inferiore a 300 m" },
      { en: "Only in rain or heavy fog", it: "Solo in caso di pioggia o nebbia fitta" },
      { en: "Only on roads without streetlights", it: "Solo su strade senza illuminazione pubblica" }
    ],
    correct: 1,
    explain_en: "Florida requires headlights from sunset to sunrise and whenever visibility is reduced to less than 1,000 feet due to rain, fog, smoke, or other conditions.",
    explain_it: "La Florida richiede i fari dal tramonto all'alba e ogni volta che la visibilità si riduce a meno di 300 m a causa di pioggia, nebbia, fumo o altre condizioni."
  },
  {
    cat: "laws",
    en: "Florida's Move Over Law requires you, on a multi-lane road, to:",
    it: "La legge Move Over della Florida richiede su strade a più corsie di:",
    options: [
      { en: "Slow down by 20 mph and keep your lane", it: "Rallentare di 20 mph e mantenere la corsia" },
      { en: "Move one lane away from a stopped emergency vehicle OR reduce speed 20 mph below the limit", it: "Spostarti di una corsia dal veicolo di emergenza fermo O ridurre la velocità di 20 mph sotto il limite" },
      { en: "Stop completely until the emergency vehicle leaves", it: "Fermarti completamente finché il veicolo di emergenza non se ne va" },
      { en: "Flash your lights as a courtesy", it: "Lampeggiare i fari come gesto di cortesia" }
    ],
    correct: 1,
    explain_en: "Florida's Move Over Law: on multi-lane roads, move over one lane away from stopped emergency/tow/road maintenance vehicles, OR if unable, slow to 20 mph below the posted limit.",
    explain_it: "Legge Move Over della Florida: su strade a più corsie, spostarsi di una corsia dal veicolo fermo (emergenza/carro attrezzi/manutenzione), O se impossibile, rallentare a 20 mph sotto il limite."
  },
  {
    cat: "laws",
    en: "Florida's Move Over Law also covers:",
    it: "La legge Move Over della Florida copre anche:",
    options: [
      { en: "Any vehicle stopped on the shoulder", it: "Qualsiasi veicolo fermo sulla corsia di emergenza" },
      { en: "Tow trucks and road maintenance vehicles with flashing lights", it: "Carroattrezzi e veicoli di manutenzione stradale con luci lampeggianti" },
      { en: "School buses loading or unloading", it: "Scuolabus in fase di carico o scarico" },
      { en: "Parked delivery trucks", it: "Camion di consegna parcheggiati" }
    ],
    correct: 1,
    explain_en: "The Move Over Law covers emergency vehicles, tow trucks, and road maintenance vehicles operating with flashing lights — not just police and ambulances.",
    explain_it: "La legge Move Over copre i veicoli di emergenza, i carroattrezzi e i veicoli di manutenzione stradale con luci lampeggianti — non solo polizia e ambulanze."
  },
  {
    cat: "laws",
    en: "On a divided highway, when a school bus stops with flashing red lights, traffic on the OPPOSITE side of the median must:",
    it: "Su una strada divisa, quando uno scuolabus si ferma con luci rosse lampeggianti, il traffico sul lato OPPOSTO della mediana deve:",
    options: [
      { en: "Also stop and wait", it: "Fermarsi anche e aspettare" },
      { en: "NOT stop — only same-side traffic must stop", it: "NON fermarsi — solo il traffico sullo stesso lato deve fermarsi" },
      { en: "Slow to 15 mph", it: "Rallentare a 15 mph" },
      { en: "Stop only if children are visible", it: "Fermarsi solo se i bambini sono visibili" }
    ],
    correct: 1,
    explain_en: "On divided highways with a raised median, traffic on the opposite side does NOT need to stop for a school bus. Only traffic behind the bus must stop.",
    explain_it: "Su strade divise con mediana rialzata, il traffico sul lato opposto NON deve fermarsi per uno scuolabus. Solo il traffico dietro lo scuolabus deve fermarsi."
  },
  {
    cat: "laws",
    en: "At a four-way stop, if you arrive at the same time as the driver to your right, you should:",
    it: "A un incrocio a quattro vie, se arrivi contemporaneamente al conducente alla tua destra, dovresti:",
    options: [
      { en: "Proceed first — you are on the right", it: "Procedere per primo — sei a destra" },
      { en: "Yield to the driver on your right", it: "Cedere la precedenza al conducente alla tua destra" },
      { en: "Both proceed together", it: "Procedere entrambi insieme" },
      { en: "Honk to establish who goes first", it: "Suonare il clacson per stabilire chi va per primo" }
    ],
    correct: 1,
    explain_en: "At a 4-way stop with simultaneous arrivals, yield to the driver on your right. They have the right-of-way.",
    explain_it: "A un incrocio a 4 vie con arrivi simultanei, cedere la precedenza al conducente alla propria destra. Ha la precedenza."
  },
  {
    cat: "laws",
    en: "When turning left at a green light, you must yield to:",
    it: "Quando svolti a sinistra con semaforo verde, devi cedere la precedenza a:",
    options: [
      { en: "No one — you have a green light", it: "Nessuno — hai il verde" },
      { en: "Oncoming vehicles and pedestrians crossing in your path", it: "Veicoli in arrivo e pedoni che attraversano il tuo percorso" },
      { en: "Only pedestrians in the crosswalk", it: "Solo i pedoni nel passaggio pedonale" },
      { en: "Emergency vehicles only", it: "Solo i veicoli di emergenza" }
    ],
    correct: 1,
    explain_en: "A green light for left turns does NOT give you the right-of-way. You must still yield to oncoming traffic and pedestrians crossing in your path.",
    explain_it: "Un semaforo verde per le svolte a sinistra NON ti dà la precedenza. Devi comunque cedere ai veicoli in arrivo e ai pedoni che attraversano il tuo percorso."
  },
  {
    cat: "laws",
    en: "Florida requires you to signal at least how far before turning on a highway?",
    it: "La Florida richiede di segnalare ad almeno quanta distanza prima di svoltare in autostrada?",
    options: [
      { en: "100 feet (30 m)", it: "100 piedi (30 m)" },
      { en: "150 feet (45 m)", it: "150 piedi (45 m)" },
      { en: "200 feet (60 m)", it: "200 piedi (60 m)" },
      { en: "300 feet (90 m)", it: "300 piedi (90 m)" }
    ],
    correct: 2,
    explain_en: "On a highway, Florida law requires a turn signal at least 200 feet (about 60 m) before the turn. In residential areas, it's at least 100 feet.",
    explain_it: "In autostrada, la legge della Florida richiede di segnalare la svolta almeno 200 piedi (circa 60 m) prima. Nelle zone residenziali, almeno 100 piedi."
  },
  {
    cat: "laws",
    en: "Pedestrians on Florida roads have the right-of-way:",
    it: "I pedoni sulle strade della Florida hanno la precedenza:",
    options: [
      { en: "Only at marked crosswalks", it: "Solo ai passaggi pedonali segnalati" },
      { en: "At all crosswalks — marked or unmarked — and at intersections", it: "A tutti i passaggi pedonali — segnalati o meno — e agli incroci" },
      { en: "Only when a walk signal is displayed", it: "Solo quando è visualizzato il segnale di cammina" },
      { en: "Only in school and residential zones", it: "Solo nelle zone scolastiche e residenziali" }
    ],
    correct: 1,
    explain_en: "Florida law requires drivers to yield to pedestrians at any crosswalk — marked or unmarked — and at any intersection, at all times.",
    explain_it: "La legge della Florida richiede di cedere la precedenza ai pedoni a qualsiasi passaggio pedonale — segnalato o meno — e a qualsiasi incrocio, in qualsiasi momento."
  },
  {
    cat: "laws",
    en: "How close to a railroad crossing may you park?",
    it: "A quanti piedi da un passaggio a livello puoi parcheggiare?",
    options: [
      { en: "Within 30 feet (9 m) is fine", it: "Entro 30 piedi (9 m) va bene" },
      { en: "No closer than 50 feet (15 m)", it: "Non più vicino di 50 piedi (15 m)" },
      { en: "No closer than 100 feet (30 m)", it: "Non più vicino di 100 piedi (30 m)" },
      { en: "No restriction — park anywhere", it: "Nessuna restrizione — parcheggiare ovunque" }
    ],
    correct: 1,
    explain_en: "You may not park within 50 feet of a railroad crossing. This ensures emergency access and visibility for crossing traffic.",
    explain_it: "Non puoi parcheggiare entro 50 piedi (15 m) da un passaggio a livello. Questo garantisce accesso di emergenza e visibilità per il traffico."
  },
  {
    cat: "laws",
    en: "It is illegal to follow an emergency vehicle (lights/siren active) closer than:",
    it: "È illegale seguire un veicolo di emergenza (luci/sirena attive) a meno di:",
    options: [
      { en: "100 feet (30 m)", it: "100 piedi (30 m)" },
      { en: "300 feet (90 m)", it: "300 piedi (90 m)" },
      { en: "500 feet (150 m)", it: "500 piedi (150 m)" },
      { en: "1,000 feet (300 m)", it: "1.000 piedi (300 m)" }
    ],
    correct: 2,
    explain_en: "You may not follow a fire truck or other emergency vehicle with active lights/siren closer than 500 feet.",
    explain_it: "Non puoi seguire un'autopompa o altro veicolo di emergenza con luci/sirena attive a meno di 500 piedi (150 m)."
  },
  {
    cat: "laws",
    en: "When parked facing downhill with a curb, turn your front wheels:",
    it: "Quando parcheggi in discesa con marciapiede, gira le ruote anteriori:",
    options: [
      { en: "Away from the curb (left)", it: "Lontano dal marciapiede (a sinistra)" },
      { en: "Toward the curb (right)", it: "Verso il marciapiede (a destra)" },
      { en: "Straight — wheels straight is safest", it: "Dritte — le ruote dritte sono le più sicure" },
      { en: "It does not matter", it: "Non importa" }
    ],
    correct: 1,
    explain_en: "Facing downhill with a curb: turn wheels toward the curb (right). If brakes fail, the curb stops the car from rolling into traffic.",
    explain_it: "In discesa con marciapiede: girare le ruote verso il marciapiede (destra). Se i freni cedono, il marciapiede blocca l'auto prima che entri nel traffico."
  },
  {
    cat: "laws",
    en: "When parked facing uphill with a curb, turn your front wheels:",
    it: "Quando parcheggi in salita con marciapiede, gira le ruote anteriori:",
    options: [
      { en: "Toward the curb (right)", it: "Verso il marciapiede (a destra)" },
      { en: "Away from the curb (left)", it: "Lontano dal marciapiede (a sinistra)" },
      { en: "Straight ahead", it: "Dritte" },
      { en: "It does not matter", it: "Non importa" }
    ],
    correct: 1,
    explain_en: "Facing uphill with a curb: turn wheels away from the curb (left). If brakes fail, the car rolls back and the curb stops it.",
    explain_it: "In salita con marciapiede: girare le ruote lontano dal marciapiede (sinistra). Se i freni cedono, l'auto torna indietro e il marciapiede la blocca."
  },
  {
    cat: "laws",
    en: "When parked on a hill without a curb, your wheels should be turned:",
    it: "Quando parcheggi su una collina senza marciapiede, le ruote devono essere girate:",
    options: [
      { en: "Toward the road (left)", it: "Verso la strada (a sinistra)" },
      { en: "Away from the road toward the shoulder (right)", it: "Lontano dalla strada verso la corsia di emergenza (a destra)" },
      { en: "Straight ahead always", it: "Sempre dritte" },
      { en: "In the direction of traffic", it: "Nella direzione del traffico" }
    ],
    correct: 1,
    explain_en: "Without a curb: always turn wheels to the right (away from the road). If brakes fail, the car rolls off the road rather than into traffic.",
    explain_it: "Senza marciapiede: girare sempre le ruote a destra (lontano dalla strada). Se i freni cedono, l'auto esce dalla strada anziché entrare nel traffico."
  },
  {
    cat: "laws",
    en: "In Florida, a U-turn is illegal when:",
    it: "In Florida, un'inversione di marcia è illegale quando:",
    options: [
      { en: "Only in school zones", it: "Solo nelle zone scolastiche" },
      { en: "Prohibited by a sign, on curves, hills, or where visibility or safety is insufficient", it: "Vietata da un segnale, in curva, in salita, o dove visibilità o sicurezza sono insufficienti" },
      { en: "Only on interstate highways", it: "Solo sulle autostrade interstatali" },
      { en: "After 10 PM", it: "Dopo le 22:00" }
    ],
    correct: 1,
    explain_en: "U-turns are illegal where prohibited by a sign, on curves or hills, or wherever visibility is insufficient to make the maneuver safely.",
    explain_it: "Le inversioni sono illegali dove vietate da un segnale, in curva o salita, o ovunque la visibilità non sia sufficiente per eseguire la manovra in sicurezza."
  },
  {
    cat: "laws",
    en: "In Florida, you must dim your high beams within how many feet of an oncoming vehicle?",
    it: "In Florida, devi abbassare gli abbaglianti entro quanti piedi da un veicolo in arrivo?",
    options: [
      { en: "200 feet (60 m)", it: "200 piedi (60 m)" },
      { en: "300 feet (90 m)", it: "300 piedi (90 m)" },
      { en: "500 feet (150 m)", it: "500 piedi (150 m)" },
      { en: "1,000 feet (300 m)", it: "1.000 piedi (300 m)" }
    ],
    correct: 2,
    explain_en: "Dim your high beams within 500 feet of an oncoming vehicle and within 300 feet of a vehicle you are following.",
    explain_it: "Abbassa gli abbaglianti entro 500 piedi (150 m) da un veicolo in arrivo e entro 300 piedi (90 m) da un veicolo che stai seguendo."
  },
  {
    cat: "laws",
    en: "A right turn on red in Florida is permitted:",
    it: "Una svolta a destra con il rosso in Florida è consentita:",
    options: [
      { en: "Never", it: "Mai" },
      { en: "After a complete stop, yielding to all traffic and pedestrians, unless prohibited by a sign", it: "Dopo un arresto completo, cedendo la precedenza a traffico e pedoni, salvo segnale di divieto" },
      { en: "Only at intersections with a traffic light", it: "Solo agli incroci con semaforo" },
      { en: "Only when no pedestrians are present", it: "Solo quando non ci sono pedoni" }
    ],
    correct: 1,
    explain_en: "Right on red is generally allowed in Florida after a complete stop and yielding, unless a 'No Turn on Red' sign is posted.",
    explain_it: "La svolta a destra con il rosso è generalmente consentita in Florida dopo un arresto completo e la cessione della precedenza, salvo segnale 'No Turn on Red'."
  },
  {
    cat: "laws",
    en: "In Florida, a left turn on red is ONLY permitted when:",
    it: "In Florida, una svolta a sinistra con il rosso è consentita SOLO quando:",
    options: [
      { en: "No oncoming traffic is present", it: "Non c'è traffico in senso contrario" },
      { en: "Turning from a one-way street onto another one-way street, after stopping and yielding", it: "Si svolta da una strada a senso unico su un'altra a senso unico, dopo essersi fermati e aver ceduto la precedenza" },
      { en: "The turn is protected by a green arrow", it: "La svolta è protetta da una freccia verde" },
      { en: "It is always prohibited", it: "È sempre vietata" }
    ],
    correct: 1,
    explain_en: "Left on red is only legal in Florida when turning from a one-way street onto another one-way street, after stopping and yielding to all traffic.",
    explain_it: "La svolta a sinistra con il rosso è legale in Florida solo girando da una strada a senso unico su un'altra a senso unico, dopo essersi fermati e aver ceduto la precedenza."
  },
  {
    cat: "laws",
    en: "When must you report a crash to FLHSMV in writing?",
    it: "Quando devi segnalare un incidente al FLHSMV per iscritto?",
    options: [
      { en: "When damage exceeds $100", it: "Quando i danni superano $100" },
      { en: "When there are injuries, deaths, or property damage over $500 and police did not investigate", it: "Quando ci sono feriti, morti o danni materiali superiori a $500 e la polizia non ha investigato" },
      { en: "Only if you were at fault", it: "Solo se sei stato tu a causare l'incidente" },
      { en: "Only if 3 or more vehicles are involved", it: "Solo se sono coinvolti 3 o più veicoli" }
    ],
    correct: 1,
    explain_en: "If police do not investigate a crash with injuries, fatalities, or $500+ in property damage, you must file a written report with FLHSMV within 10 days.",
    explain_it: "Se la polizia non investiga un incidente con feriti, morti o $500+ di danni materiali, devi presentare una relazione scritta al FLHSMV entro 10 giorni."
  },
  {
    cat: "laws",
    en: "Florida's 'Open Container' law prohibits:",
    it: "La legge sul 'contenitore aperto' della Florida vieta:",
    options: [
      { en: "Drinking only while the vehicle is moving", it: "Bere solo mentre il veicolo è in movimento" },
      { en: "Having any open alcoholic beverage container anywhere in a vehicle on a public roadway", it: "Avere qualsiasi contenitore aperto di bevanda alcolica in qualsiasi punto del veicolo su una strada pubblica" },
      { en: "Alcohol in the trunk", it: "L'alcol nel bagagliaio" },
      { en: "Only the driver having an open container", it: "Solo il conducente avere un contenitore aperto" }
    ],
    correct: 1,
    explain_en: "Florida's open container law prohibits any open alcoholic beverage container anywhere inside the vehicle (including back seat and cup holders) on a public road.",
    explain_it: "La legge della Florida sui contenitori aperti vieta qualsiasi contenitore aperto di bevanda alcolica in qualsiasi punto del veicolo (inclusi sedile posteriore e portabicchieri) su una strada pubblica."
  },
  {
    cat: "laws",
    en: "In Florida, manually texting or reading messages while driving is:",
    it: "In Florida, inviare o leggere messaggi manualmente durante la guida è:",
    options: [
      { en: "Legal at red lights", it: "Legale ai semafori rossi" },
      { en: "A primary offense — police can stop you for this alone", it: "Un reato primario — la polizia può fermarti solo per questo" },
      { en: "Only prohibited for drivers under 18", it: "Vietato solo per i conducenti under 18" },
      { en: "A secondary offense — only ticketed with another violation", it: "Un reato secondario — multato solo con un'altra violazione" }
    ],
    correct: 1,
    explain_en: "Florida's texting-while-driving law is a primary offense — officers may stop and ticket you solely for texting. It applies at all times, including red lights.",
    explain_it: "La legge della Florida sulla guida con messaggi è un reato primario — gli agenti possono fermarti e multarti esclusivamente per i messaggi. Si applica in qualsiasi momento, inclusi i semafori rossi."
  },
  {
    cat: "laws",
    en: "When backing out of a driveway onto a street, you must yield to:",
    it: "Quando esci in retromarcia da un vialetto su una strada, devi cedere la precedenza a:",
    options: [
      { en: "Nothing — backing drivers have priority", it: "Niente — i conducenti in retromarcia hanno la priorità" },
      { en: "All approaching traffic and pedestrians", it: "Tutto il traffico in arrivo e ai pedoni" },
      { en: "Only vehicles coming from the left", it: "Solo i veicoli proveniente da sinistra" },
      { en: "Only vehicles coming from the right", it: "Solo i veicoli provenienti da destra" }
    ],
    correct: 1,
    explain_en: "When backing out of a driveway, you must yield to all approaching vehicles from both directions and to pedestrians on the sidewalk.",
    explain_it: "Quando si esce in retromarcia da un vialetto, si deve cedere la precedenza a tutti i veicoli in arrivo da entrambe le direzioni e ai pedoni sul marciapiede."
  },
  {
    cat: "laws",
    en: "Passing on the right is legal in Florida when:",
    it: "Sorpassare a destra è legale in Florida quando:",
    options: [
      { en: "You are in a hurry", it: "Sei di fretta" },
      { en: "The vehicle ahead is making a left turn and a paved right lane is available, or on a one-way street", it: "Il veicolo davanti sta svoltando a sinistra e c'è una corsia destra asfaltata, o su strade a senso unico" },
      { en: "Only on roads with 3 or more lanes", it: "Solo su strade con 3 o più corsie" },
      { en: "Only when the speed limit is above 45 mph", it: "Solo quando il limite è superiore a 45 mph" }
    ],
    correct: 1,
    explain_en: "Passing on the right is legal when the vehicle ahead is turning left and a usable right lane exists, or when traveling on a one-way street with multiple lanes.",
    explain_it: "Sorpassare a destra è legale quando il veicolo davanti svolta a sinistra ed esiste una corsia destra utilizzabile, o su strade a senso unico con più corsie."
  },
  {
    cat: "laws",
    en: "After passing a vehicle on a two-lane road, you should return to your lane when:",
    it: "Dopo aver sorpassato un veicolo su una strada a due corsie, dovresti rientrare quando:",
    options: [
      { en: "You are even with the passed vehicle", it: "Sei affiancato al veicolo sorpassato" },
      { en: "You can see the passed vehicle's headlights in your rearview mirror", it: "Puoi vedere i fari del veicolo sorpassato nel tuo specchietto retrovisore" },
      { en: "You have gained one car length ahead", it: "Hai guadagnato una lunghezza auto davanti" },
      { en: "Immediately after the pass is complete", it: "Immediatamente dopo che il sorpasso è completato" }
    ],
    correct: 1,
    explain_en: "Return to your lane only when you can see the passed vehicle's headlights in your rearview mirror — ensuring enough clearance.",
    explain_it: "Rientra nella tua corsia solo quando puoi vedere i fari del veicolo sorpassato nel retrovisore — assicurando una distanza sufficiente."
  },
  {
    cat: "laws",
    en: "Florida's 'Implied Consent' law means:",
    it: "La legge del 'consenso implicito' della Florida significa:",
    options: [
      { en: "You agree to speed checks on state highways", it: "Accetti i controlli di velocità sulle strade statali" },
      { en: "By driving in Florida you automatically consent to chemical testing if lawfully arrested for DUI", it: "Guidando in Florida acconsenti automaticamente al test chimico se arrestato legalmente per DUI" },
      { en: "Police can search your car without cause", it: "La polizia può perquisire la tua auto senza causa" },
      { en: "You waive the right to a jury trial for traffic violations", it: "Rinunci al diritto a un processo con giuria per le infrazioni stradali" }
    ],
    correct: 1,
    explain_en: "Implied Consent: operating a vehicle in Florida means you automatically consent to a chemical test (breath, blood, or urine) if lawfully arrested for DUI.",
    explain_it: "Consenso implicito: guidare in Florida significa che acconsenti automaticamente a un test chimico (respiro, sangue o urine) se arrestato legalmente per DUI."
  },
  {
    cat: "laws",
    en: "You must yield to a blind pedestrian who is using a white cane or guide dog:",
    it: "Devi cedere la precedenza a un pedone non vedente che usa un bastone bianco o cane guida:",
    options: [
      { en: "Only at signalized crosswalks", it: "Solo ai passaggi pedonali semaforizzati" },
      { en: "At any crosswalk or intersection, regardless of signals", it: "A qualsiasi passaggio pedonale o incrocio, indipendentemente dai segnali" },
      { en: "Only during school hours", it: "Solo durante le ore scolastiche" },
      { en: "Only if they look directly at you", it: "Solo se ti guardano direttamente" }
    ],
    correct: 1,
    explain_en: "Florida law requires ALL drivers to stop and yield to visually impaired pedestrians using a white cane or guide dog at any crosswalk or intersection.",
    explain_it: "La legge della Florida richiede a TUTTI i conducenti di fermarsi e cedere la precedenza ai pedoni non vedenti con bastone bianco o cane guida a qualsiasi passaggio pedonale o incrocio."
  },
  {
    cat: "laws",
    en: "How far from a stop sign are you prohibited from parking?",
    it: "A quanti piedi da un segnale di stop è vietato parcheggiare?",
    options: [
      { en: "10 feet (3 m)", it: "10 piedi (3 m)" },
      { en: "20 feet (6 m)", it: "20 piedi (6 m)" },
      { en: "30 feet (9 m)", it: "30 piedi (9 m)" },
      { en: "50 feet (15 m)", it: "50 piedi (15 m)" }
    ],
    correct: 2,
    explain_en: "You may not park within 30 feet of a stop sign. This keeps the sign visible to approaching drivers.",
    explain_it: "Non puoi parcheggiare entro 30 piedi (9 m) da un segnale di stop. Questo mantiene il segnale visibile ai conducenti in avvicinamento."
  },
  {
    cat: "laws",
    en: "Florida law defines 'careless driving' as:",
    it: "La legge della Florida definisce la 'guida negligente' come:",
    options: [
      { en: "The same as reckless driving", it: "Uguale alla guida spericolata" },
      { en: "Driving without due care and circumspection, creating a hazard to others", it: "Guidare senza la dovuta cura e circospezione, creando un pericolo per gli altri" },
      { en: "Any moving violation in a school zone", it: "Qualsiasi violazione in movimento in una zona scolastica" },
      { en: "Exceeding the speed limit by less than 5 mph", it: "Superare il limite di velocità di meno di 5 mph" }
    ],
    correct: 1,
    explain_en: "Careless driving is a civil (non-criminal) moving violation — driving without due care, creating a potential hazard. Reckless driving is a criminal offense requiring willful disregard.",
    explain_it: "La guida negligente è un'infrazione in movimento civile (non penale) — guidare senza la dovuta cura, creando un pericolo potenziale. La guida spericolata è un reato penale che richiede deliberata noncuranza."
  },
  {
    cat: "laws",
    en: "When passing a solid yellow line on YOUR side of the road, you may:",
    it: "Quando c'è una linea gialla continua sul TUO lato della strada, puoi:",
    options: [
      { en: "Pass if the road ahead is clear", it: "Sorpassare se la strada davanti è libera" },
      { en: "Not pass — the solid line on your side prohibits passing", it: "Non sorpassare — la linea continua sul tuo lato vieta il sorpasso" },
      { en: "Pass only slow vehicles (under 25 mph)", it: "Sorpassare solo veicoli lenti (sotto i 25 mph)" },
      { en: "Pass only during daylight hours", it: "Sorpassare solo durante le ore diurne" }
    ],
    correct: 1,
    explain_en: "A solid yellow line on your side of the road prohibits passing. A broken yellow on your side means passing is permitted when safe.",
    explain_it: "Una linea gialla continua sul tuo lato vieta il sorpasso. Una gialla tratteggiata sul tuo lato significa che il sorpasso è consentito quando sicuro."
  },
  {
    cat: "laws",
    en: "When can a vehicle legally drive in a bicycle lane?",
    it: "Quando un veicolo può legalmente circolare in una pista ciclabile?",
    options: [
      { en: "Never", it: "Mai" },
      { en: "Only when preparing to turn right — temporarily, for up to 200 feet", it: "Solo quando ci si prepara a svoltare a destra — temporaneamente, per un massimo di 60 m" },
      { en: "When traffic is heavy and the lane is empty", it: "Quando il traffico è intenso e la corsia è vuota" },
      { en: "Only motorcycles may use bicycle lanes", it: "Solo le motociclette possono usare le piste ciclabili" }
    ],
    correct: 1,
    explain_en: "In Florida, motor vehicles may enter a bicycle lane only when preparing to turn right, and only within the last 200 feet before the turn.",
    explain_it: "In Florida, i veicoli a motore possono entrare in una pista ciclabile solo quando si preparano a svoltare a destra, e solo negli ultimi 60 m prima della svolta."
  },
  {
    cat: "laws",
    en: "In Florida, if you miss your highway exit you should:",
    it: "In Florida, se perdi la tua uscita autostradale dovresti:",
    options: [
      { en: "Reverse on the shoulder to reach the exit", it: "Fare retromarcia sulla corsia di emergenza per raggiungere l'uscita" },
      { en: "Continue to the next exit and turn around safely", it: "Continuare fino alla prossima uscita e tornare indietro in sicurezza" },
      { en: "Make a U-turn on the highway", it: "Fare un'inversione sull'autostrada" },
      { en: "Drive through the gore area between the exit ramp and highway", it: "Attraversare l'area di gore tra la rampa di uscita e l'autostrada" }
    ],
    correct: 1,
    explain_en: "Never reverse or U-turn on a highway. Continue to the next exit and turn around. Reversing or U-turning on a highway is extremely dangerous and illegal.",
    explain_it: "Non fare mai retromarcia o inversioni sull'autostrada. Continua fino alla prossima uscita e torna indietro. Fare retromarcia o inversioni è estremamente pericoloso e illegale."
  },

  // ══ SAFE DRIVING – additional (35 new) ═══════════════════════

  {
    cat: "safety",
    en: "To avoid drowsy driving, the best approach is to:",
    it: "Per evitare la guida sonnolenta, il miglior approccio è:",
    options: [
      { en: "Drink coffee or energy drinks", it: "Bere caffè o bevande energetiche" },
      { en: "Turn up the radio and open windows", it: "Alzare la radio e aprire i finestrini" },
      { en: "Pull off safely and rest or sleep", it: "Accostare in sicurezza e riposarsi o dormire" },
      { en: "Drive faster to get to your destination sooner", it: "Guidare più veloce per arrivare prima a destinazione" }
    ],
    correct: 2,
    explain_en: "The only real cure for drowsy driving is stopping and resting. Coffee and other stimulants temporarily mask fatigue but do not restore full alertness.",
    explain_it: "L'unico vero rimedio alla guida sonnolenta è fermarsi e riposarsi. Il caffè e altri stimolanti mascherano temporaneamente la stanchezza ma non ripristinano la piena vigilanza."
  },
  {
    cat: "safety",
    en: "At highway speeds the safe following distance increases to at least:",
    it: "Ad alta velocità, la distanza di sicurezza aumenta ad almeno:",
    options: [
      { en: "1 second", it: "1 secondo" },
      { en: "2 seconds", it: "2 secondi" },
      { en: "4 to 6 seconds", it: "4-6 secondi" },
      { en: "The same 3-second rule applies always", it: "Si applica sempre la stessa regola dei 3 secondi" }
    ],
    correct: 2,
    explain_en: "At highway speeds or in poor conditions (rain, fog, night), increase your following distance to 4–6 seconds to allow adequate stopping time.",
    explain_it: "Ad alta velocità o in condizioni avverse (pioggia, nebbia, notte), aumenta la distanza a 4-6 secondi per avere tempo di frenata adeguato."
  },
  {
    cat: "safety",
    en: "In heavy fog or rain you should use:",
    it: "In caso di nebbia fitta o pioggia intensa dovresti usare:",
    options: [
      { en: "High-beam headlights for maximum visibility", it: "Abbaglianti per la massima visibilità" },
      { en: "Low-beam headlights or fog lights", it: "Anabbaglianti o fendinebbia" },
      { en: "Hazard lights only", it: "Solo luci di pericolo" },
      { en: "No lights — visibility is already poor", it: "Nessuna luce — la visibilità è già scarsa" }
    ],
    correct: 1,
    explain_en: "In fog or heavy rain, use low beams or fog lights. High beams reflect off water droplets and create glare that reduces visibility further.",
    explain_it: "In nebbia o pioggia intensa, usa anabbaglianti o fendinebbia. Gli abbaglianti si riflettono sulle goccioline d'acqua e creano un riverbero che riduce ulteriormente la visibilità."
  },
  {
    cat: "safety",
    en: "Hydroplaning occurs when:",
    it: "L'acquaplaning (hydroplaning) si verifica quando:",
    options: [
      { en: "You brake too hard and lock the wheels", it: "Freni troppo bruscamente e blocchi le ruote" },
      { en: "A water layer forms between tires and pavement, causing loss of traction", it: "Uno strato d'acqua si forma tra pneumatici e asfalto, causando perdita di trazione" },
      { en: "Your engine overheats in hot weather", it: "Il motore si surriscalda con il caldo" },
      { en: "Your windshield fogs up in rain", it: "Il parabrezza si appanna con la pioggia" }
    ],
    correct: 1,
    explain_en: "Hydroplaning happens when a layer of water builds between tires and the road, causing the vehicle to 'float' and lose steering/braking control. Reduce speed in wet conditions.",
    explain_it: "L'aquaplaning avviene quando uno strato d'acqua si accumula tra pneumatici e asfalto, causando la 'galleggiamento' del veicolo e la perdita del controllo. Ridurre la velocità."
  },
  {
    cat: "safety",
    en: "If your vehicle begins to hydroplane, you should:",
    it: "Se il tuo veicolo inizia ad avere aquaplaning, dovresti:",
    options: [
      { en: "Brake hard to regain traction", it: "Frenare bruscamente per recuperare la trazione" },
      { en: "Ease off the gas and steer straight until traction returns", it: "Togliere il piede dal gas e sterzare dritto finché la trazione non torna" },
      { en: "Sharply turn the wheel in the direction of the skid", it: "Girare bruscamente il volante nella direzione dello slittamento" },
      { en: "Accelerate slightly to regain grip", it: "Accelerare leggermente per recuperare l'aderenza" }
    ],
    correct: 1,
    explain_en: "In hydroplaning: ease off the gas, steer straight, and avoid sharp braking or sudden turns until the tires regain contact with the road.",
    explain_it: "In caso di aquaplaning: togliere il piede dal gas, sterzare dritto ed evitare frenate brusche o svolte improvvise finché i pneumatici non riprendono contatto con la strada."
  },
  {
    cat: "safety",
    en: "If your car starts to skid, you should:",
    it: "Se l'auto inizia a slittare, dovresti:",
    options: [
      { en: "Slam on the brakes immediately", it: "Frenare immediatamente e bruscamente" },
      { en: "Steer in the direction you want the front of the car to go and ease off the gas", it: "Sterzare nella direzione in cui vuoi che vada la parte anteriore dell'auto e togliere il gas" },
      { en: "Turn the wheel sharply in the opposite direction of the skid", it: "Girare bruscamente il volante nella direzione opposta allo slittamento" },
      { en: "Accelerate to power out of the skid", it: "Accelerare per uscire dallo slittamento" }
    ],
    correct: 1,
    explain_en: "In a skid: steer INTO the skid (toward where you want the front to go) and gently ease off the accelerator. Avoid sharp braking, which worsens the skid.",
    explain_it: "In caso di slittamento: sterza VERSO lo slittamento (nella direzione in cui vuoi che vada la parte anteriore) e togli delicatamente il gas. Evita frenate brusche."
  },
  {
    cat: "safety",
    en: "The most effective safety device in any vehicle is:",
    it: "Il dispositivo di sicurezza più efficace in qualsiasi veicolo è:",
    options: [
      { en: "The airbag", it: "L'airbag" },
      { en: "Anti-lock brakes (ABS)", it: "I freni ABS" },
      { en: "The seat belt", it: "La cintura di sicurezza" },
      { en: "Electronic stability control", it: "Il controllo elettronico della stabilità" }
    ],
    correct: 2,
    explain_en: "The seat belt is the single most effective life-saving device in a vehicle. It prevents ejection and reduces crash injury severity by up to 50%.",
    explain_it: "La cintura di sicurezza è il dispositivo salva-vita più efficace in un veicolo. Previene l'espulsione e riduce la gravità delle lesioni fino al 50%."
  },
  {
    cat: "safety",
    en: "What should you do when an emergency vehicle with siren and lights approaches from behind?",
    it: "Cosa dovresti fare quando un veicolo di emergenza con sirena e luci si avvicina da dietro?",
    options: [
      { en: "Speed up to get out of its way", it: "Accelerare per togliersi di mezzo" },
      { en: "Pull to the right edge of the road and stop", it: "Accostare al bordo destro della strada e fermarsi" },
      { en: "Stay in your lane and reduce speed", it: "Rimanere nella corsia e ridurre la velocità" },
      { en: "Move to the center lane", it: "Spostarsi alla corsia centrale" }
    ],
    correct: 1,
    explain_en: "Pull to the right edge of the road and stop. Stay stopped until the emergency vehicle has passed. Never block an intersection.",
    explain_it: "Accostare al bordo destro della strada e fermarsi. Rimanere fermi fino a quando il veicolo di emergenza è passato. Non bloccare mai un incrocio."
  },
  {
    cat: "safety",
    en: "Before backing your vehicle, you should:",
    it: "Prima di fare retromarcia, dovresti:",
    options: [
      { en: "Check only the rearview mirror", it: "Controllare solo lo specchietto retrovisore" },
      { en: "Check all mirrors and look over both shoulders", it: "Controllare tutti gli specchi e guardare oltre entrambe le spalle" },
      { en: "Sound the horn twice", it: "Suonare il clacson due volte" },
      { en: "Turn on your hazard lights", it: "Accendere le luci di pericolo" }
    ],
    correct: 1,
    explain_en: "Always check all mirrors AND look over both shoulders before reversing. Mirrors have blind spots — a physical check catches what mirrors miss.",
    explain_it: "Controlla sempre tutti gli specchi E guarda oltre entrambe le spalle prima di fare retromarcia. Gli specchi hanno punti ciechi — un controllo fisico coglie ciò che gli specchi non vedono."
  },
  {
    cat: "safety",
    en: "Current recommended steering wheel hand position is:",
    it: "La posizione attuale raccomandata delle mani sul volante è:",
    options: [
      { en: "10 and 2 o'clock", it: "10 e 2 in punto" },
      { en: "9 and 3 o'clock", it: "9 e 3 in punto" },
      { en: "8 and 4 o'clock", it: "8 e 4 in punto" },
      { en: "One hand at 12 o'clock", it: "Una mano alle 12 in punto" }
    ],
    correct: 1,
    explain_en: "9 and 3 is now the recommended position for better vehicle control and improved safety if the airbag deploys (10-and-2 can cause arm/hand injuries with airbag deployment).",
    explain_it: "9 e 3 è ora la posizione raccomandata per un migliore controllo del veicolo e maggiore sicurezza in caso di apertura dell'airbag (10 e 2 può causare lesioni braccio/mano con l'airbag aperto)."
  },
  {
    cat: "safety",
    en: "How often should you check your mirrors while driving?",
    it: "Con quale frequenza dovresti controllare gli specchi durante la guida?",
    options: [
      { en: "Only when changing lanes", it: "Solo quando cambi corsia" },
      { en: "Every 5 to 8 seconds", it: "Ogni 5-8 secondi" },
      { en: "Only when stopping", it: "Solo quando ti fermi" },
      { en: "Once per minute is sufficient", it: "Una volta al minuto è sufficiente" }
    ],
    correct: 1,
    explain_en: "You should check your mirrors every 5 to 8 seconds to maintain constant awareness of surrounding traffic conditions.",
    explain_it: "Dovresti controllare gli specchi ogni 5-8 secondi per mantenere una consapevolezza costante delle condizioni del traffico circostante."
  },
  {
    cat: "safety",
    en: "The three types of driver distraction are:",
    it: "I tre tipi di distrazione del conducente sono:",
    options: [
      { en: "Speed, fatigue, and alcohol", it: "Velocità, stanchezza e alcol" },
      { en: "Visual, manual, and cognitive", it: "Visiva, manuale e cognitiva" },
      { en: "Texting, phone calls, and eating", it: "Messaggi, telefonate e cibo" },
      { en: "Radio, GPS, and passengers", it: "Radio, GPS e passeggeri" }
    ],
    correct: 1,
    explain_en: "The 3 types: Visual (eyes off road), Manual (hands off wheel), Cognitive (mind off driving). Texting is dangerous because it involves all three simultaneously.",
    explain_it: "I 3 tipi: Visiva (occhi fuori strada), Manuale (mani fuori dal volante), Cognitiva (mente fuori dalla guida). I messaggi sono pericolosi perché coinvolgono tutti e tre simultaneamente."
  },
  {
    cat: "safety",
    en: "What is the safest way to deal with a tailgating driver?",
    it: "Qual è il modo più sicuro di gestire un conducente che ti segue troppo vicino?",
    options: [
      { en: "Slam your brakes to warn them", it: "Frenare bruscamente per avvisarli" },
      { en: "Gradually slow and allow them to pass, or pull over safely", it: "Rallentare gradualmente e lasciarli passare, o accostare in sicurezza" },
      { en: "Speed up to increase the distance", it: "Accelerare per aumentare la distanza" },
      { en: "Use your brake lights to signal your irritation", it: "Usare le luci dei freni per segnalare la tua irritazione" }
    ],
    correct: 1,
    explain_en: "Responding to a tailgater safely means slowing gradually to encourage them to pass, or pulling over to let them by. Never brake-check a tailgater.",
    explain_it: "Rispondere in sicurezza a chi ti segue troppo vicino significa rallentare gradualmente per incoraggiarli a passare, o accostare per lasciarli passare. Non frenare bruscamente."
  },
  {
    cat: "safety",
    en: "What is 'defensive driving'?",
    it: "Cos'è la 'guida difensiva'?",
    options: [
      { en: "Driving very slowly at all times to avoid all risks", it: "Guidare molto lentamente in ogni momento per evitare tutti i rischi" },
      { en: "Anticipating hazards and the actions of others to avoid collisions proactively", it: "Anticipare i pericoli e le azioni degli altri per evitare collisioni in modo proattivo" },
      { en: "Driving aggressively to control your space on the road", it: "Guidare in modo aggressivo per controllare il tuo spazio sulla strada" },
      { en: "Following all traffic laws strictly", it: "Seguire rigorosamente tutte le norme del traffico" }
    ],
    correct: 1,
    explain_en: "Defensive driving means proactively anticipating hazards, maintaining space, and managing your driving to avoid collisions — not just reacting to them.",
    explain_it: "La guida difensiva significa anticipare proattivamente i pericoli, mantenere lo spazio e gestire la guida per evitare collisioni — non solo reagire ad esse."
  },
  {
    cat: "safety",
    en: "How should you respond to an aggressive driver who is making threatening gestures?",
    it: "Come dovresti rispondere a un conducente aggressivo che fa gesti minacciosi?",
    options: [
      { en: "Match their aggression to show you are not intimidated", it: "Corrispondere alla loro aggressività per dimostrare che non sei intimidito" },
      { en: "Avoid eye contact, don't respond, and create distance", it: "Evitare il contatto visivo, non rispondere e creare distanza" },
      { en: "Stop your car and confront them", it: "Fermare la macchina e affrontarli" },
      { en: "Honk your horn repeatedly", it: "Suonare ripetutamente il clacson" }
    ],
    correct: 1,
    explain_en: "When confronted by an aggressive driver: stay calm, avoid eye contact, do not respond to gestures or honking, and put as much distance between you as possible.",
    explain_it: "Quando affrontato da un conducente aggressivo: rimanere calmo, evitare il contatto visivo, non rispondere a gesti o clacson e mettere più distanza possibile tra voi."
  },
  {
    cat: "safety",
    en: "When following a large truck, you should:",
    it: "Quando segui un camion grande, dovresti:",
    options: [
      { en: "Follow closely to draft and save fuel", it: "Seguire da vicino per sfruttare la scia e risparmiare carburante" },
      { en: "Increase following distance and avoid staying in the truck's blind spots", it: "Aumentare la distanza e evitare di restare nei punti ciechi del camion" },
      { en: "Pass quickly on the left at the first opportunity", it: "Superare rapidamente a sinistra alla prima occasione" },
      { en: "Honk before passing to alert the driver", it: "Suonare il clacson prima di sorpassare per avvisare il conducente" }
    ],
    correct: 1,
    explain_en: "Large trucks have massive blind spots (front, rear, and both sides). Increase your following distance and avoid lingering in the truck's blind zones.",
    explain_it: "I camion grandi hanno enormi punti ciechi (davanti, dietro e su entrambi i lati). Aumenta la distanza e evita di restare nelle zone cieche del camion."
  },
  {
    cat: "safety",
    en: "When sharing the road with motorcycles, you should:",
    it: "Quando condividi la strada con le motociclette, dovresti:",
    options: [
      { en: "Assume they can see you clearly", it: "Presupporre che ti vedano chiaramente" },
      { en: "Give them a full lane width and increase following distance", it: "Dargli l'intera larghezza della corsia e aumentare la distanza di sicurezza" },
      { en: "Pass them quickly — they are slower than cars", it: "Superarli rapidamente — sono più lenti delle auto" },
      { en: "Sound your horn when approaching them from behind", it: "Suonare il clacson quando li si avvicina da dietro" }
    ],
    correct: 1,
    explain_en: "Motorcycles are entitled to a full lane. They are harder to see and can stop faster than expected. Give extra space and check mirrors/blind spots carefully.",
    explain_it: "Le motociclette hanno diritto all'intera larghezza della corsia. Sono più difficili da vedere e possono fermarsi più velocemente del previsto. Dai spazio extra e controlla attentamente specchi e punti ciechi."
  },
  {
    cat: "safety",
    en: "In a work zone, speed limit violations:",
    it: "Nelle zone di lavori stradali, le violazioni del limite di velocità:",
    options: [
      { en: "Are treated the same as anywhere else", it: "Sono trattate come ovunque altro" },
      { en: "Result in doubled fines", it: "Comportano multe raddoppiate" },
      { en: "Are only enforced when workers are present", it: "Vengono applicate solo quando gli operai sono presenti" },
      { en: "Are ignored if below 10 mph over the limit", it: "Vengono ignorate se sotto i 10 mph oltre il limite" }
    ],
    correct: 1,
    explain_en: "Traffic fines are doubled in Florida work zones, whether workers are present or not. Always obey posted work zone speed limits.",
    explain_it: "Le multe stradali sono raddoppiate nelle zone di lavori in Florida, sia che gli operai siano presenti o meno. Rispettare sempre i limiti di velocità nelle zone di lavori."
  },
  {
    cat: "safety",
    en: "What does 'overdriving your headlights' mean?",
    it: "Cosa significa 'guidare oltre i propri fari' (overdriving)?",
    options: [
      { en: "Using high beams when low beams are required", it: "Usare gli abbaglianti quando sono richiesti gli anabbaglianti" },
      { en: "Driving at a speed where you cannot stop within the lit distance", it: "Guidare a una velocità in cui non riesci a fermarti entro la distanza illuminata" },
      { en: "Using your lights during the day unnecessarily", it: "Usare i fari di giorno inutilmente" },
      { en: "Driving with one headlight out", it: "Guidare con un faro guasto" }
    ],
    correct: 1,
    explain_en: "Overdriving headlights means going fast enough that your stopping distance exceeds the distance illuminated by your headlights — a dangerous situation at night.",
    explain_it: "Guidare oltre i propri fari significa andare abbastanza veloci da far sì che la distanza di frenata superi la distanza illuminata dai fari — situazione pericolosa di notte."
  },
  {
    cat: "safety",
    en: "When should you use hazard (emergency flasher) lights?",
    it: "Quando dovresti usare le luci di pericolo (emergenza)?",
    options: [
      { en: "Whenever driving slowly in traffic", it: "Ogni volta che guidi lentamente nel traffico" },
      { en: "When your vehicle is disabled, stopped, or is an unusual hazard to others", it: "Quando il tuo veicolo è in panne, fermo o costituisce un pericolo insolito per gli altri" },
      { en: "When driving through rain", it: "Quando guidi sotto la pioggia" },
      { en: "When driving in a construction zone", it: "Quando guidi in una zona di lavori" }
    ],
    correct: 1,
    explain_en: "Hazard lights are for when your vehicle is stopped or disabled and poses a hazard. Using them while driving (except in some states' laws) can confuse other drivers.",
    explain_it: "Le luci di pericolo servono quando il veicolo è fermo o in panne e costituisce un pericolo. Usarle mentre si guida può confondere gli altri conducenti."
  },
  {
    cat: "safety",
    en: "The most dangerous time to drive in rain is:",
    it: "Il momento più pericoloso per guidare sotto la pioggia è:",
    options: [
      { en: "During a heavy downpour", it: "Durante un forte acquazzone" },
      { en: "The first 10–15 minutes when oil and water mix on the road surface", it: "I primi 10-15 minuti quando olio e acqua si mescolano sulla superficie stradale" },
      { en: "After the rain has stopped", it: "Dopo che la pioggia ha smesso" },
      { en: "Only late at night in rain", it: "Solo tardi di notte con la pioggia" }
    ],
    correct: 1,
    explain_en: "When rain first starts, oil residue on the road mixes with water to create an extremely slippery surface. Roads become safer once rain washes the oil away.",
    explain_it: "Quando inizia a piovere, i residui di olio sulla strada si mescolano con l'acqua creando una superficie estremamente scivolosa. Le strade diventano più sicure dopo che la pioggia lava via l'olio."
  },
  {
    cat: "safety",
    en: "If you have ABS (Anti-lock Brake System) brakes and need to stop quickly, you should:",
    it: "Se hai freni ABS e devi fermarti rapidamente, dovresti:",
    options: [
      { en: "Pump the brakes rapidly", it: "Pompare i freni rapidamente" },
      { en: "Apply firm, steady pressure — do NOT pump the pedal", it: "Applicare una pressione ferma e costante — NON pompare il pedale" },
      { en: "Press gently to avoid skidding", it: "Premere delicatamente per evitare lo slittamento" },
      { en: "Apply the parking brake together with foot brake", it: "Applicare il freno di parcheggio insieme al freno a pedale" }
    ],
    correct: 1,
    explain_en: "With ABS brakes: press firmly and HOLD — the system pulses automatically to prevent lock-up while maintaining steering control. Pumping the pedal defeats ABS.",
    explain_it: "Con i freni ABS: premi con fermezza e MANTIENI — il sistema pulsa automaticamente per prevenire il bloccaggio mantenendo il controllo dello sterzo. Pompare il pedale annulla l'ABS."
  },
  {
    cat: "safety",
    en: "What are rumble strips used for?",
    it: "A cosa servono le bande sonore (rumble strips)?",
    options: [
      { en: "To slow vehicles before intersections", it: "Per rallentare i veicoli prima degli incroci" },
      { en: "To alert drowsy or inattentive drivers drifting out of their lane", it: "Per avvisare i conducenti assonnati o disattenti che escono dalla loro corsia" },
      { en: "To provide traction on slippery roads", it: "Per fornire trazione su strade scivolose" },
      { en: "To mark bicycle lanes", it: "Per segnalare le piste ciclabili" }
    ],
    correct: 1,
    explain_en: "Rumble strips generate vibrations and noise when a vehicle's tires cross them, alerting inattentive or drowsy drivers before they drift off the road.",
    explain_it: "Le bande sonore generano vibrazioni e rumore quando i pneumatici le attraversano, avvisando i conducenti disattenti o assonnati prima che escano dalla strada."
  },
  {
    cat: "safety",
    en: "A 'space cushion' in driving means:",
    it: "Un 'cuscinetto di spazio' nella guida significa:",
    options: [
      { en: "The extra padding in your car seat", it: "L'imbottitura extra nel sedile della tua auto" },
      { en: "Open space maintained around your vehicle on all sides", it: "Spazio aperto mantenuto intorno al tuo veicolo su tutti i lati" },
      { en: "Distance between your car and the sidewalk when parking", it: "Distanza tra la tua auto e il marciapiede quando parcheggi" },
      { en: "Minimum distance from other cars when parking", it: "Distanza minima dalle altre auto quando parcheggi" }
    ],
    correct: 1,
    explain_en: "A space cushion is the open area you intentionally maintain around your vehicle in all directions. It gives you time and space to react to sudden hazards.",
    explain_it: "Un cuscinetto di spazio è l'area aperta che mantieni intenzionalmente intorno al tuo veicolo in tutte le direzioni. Ti dà tempo e spazio per reagire ai pericoli improvvisi."
  },
  {
    cat: "safety",
    en: "What is the effect of carbon monoxide on drivers?",
    it: "Qual è l'effetto del monossido di carbonio sui conducenti?",
    options: [
      { en: "It improves alertness at low levels", it: "Migliora la vigilanza a bassi livelli" },
      { en: "It causes drowsiness, confusion, and can lead to unconsciousness or death", it: "Causa sonnolenza, confusione e può portare a perdita di coscienza o morte" },
      { en: "It only affects people with pre-existing health conditions", it: "Colpisce solo persone con condizioni di salute preesistenti" },
      { en: "It has no effect unless levels are very high", it: "Non ha effetti a meno che i livelli siano molto alti" }
    ],
    correct: 1,
    explain_en: "Carbon monoxide is odorless and colorless. Even low concentrations can cause severe drowsiness and loss of consciousness. Ensure good ventilation and maintain your exhaust system.",
    explain_it: "Il monossido di carbonio è inodore e incolore. Anche basse concentrazioni possono causare grave sonnolenza e perdita di coscienza. Assicurare buona ventilazione e mantenere il sistema di scarico."
  },
  {
    cat: "safety",
    en: "Night driving is more hazardous because:",
    it: "Guidare di notte è più pericoloso perché:",
    options: [
      { en: "Traffic is always heavier at night", it: "Il traffico è sempre più intenso di notte" },
      { en: "Visibility is reduced and glare from oncoming lights impairs vision", it: "La visibilità è ridotta e il riverbero dei fari in arrivo compromette la visione" },
      { en: "Speed limits are lower at night", it: "I limiti di velocità sono più bassi di notte" },
      { en: "Animals are never on the road during the day", it: "Gli animali non sono mai sulla strada di giorno" }
    ],
    correct: 1,
    explain_en: "Night driving is more dangerous due to reduced visibility, glare from oncoming headlights, driver fatigue, and difficulty judging distance and speed.",
    explain_it: "Guidare di notte è più pericoloso a causa della visibilità ridotta, del riverbero dei fari in arrivo, della stanchezza del conducente e della difficoltà nel giudicare distanza e velocità."
  },
  {
    cat: "safety",
    en: "The leading cause of traffic crashes is:",
    it: "La principale causa degli incidenti stradali è:",
    options: [
      { en: "Poor weather", it: "Maltempo" },
      { en: "Mechanical failure", it: "Guasto meccanico" },
      { en: "Driver error or inattention", it: "Errore del conducente o disattenzione" },
      { en: "Aggressive driving by other drivers", it: "Guida aggressiva di altri conducenti" }
    ],
    correct: 2,
    explain_en: "Driver error or inattention (including distraction, speeding, drowsiness, and impairment) is the leading cause of traffic crashes.",
    explain_it: "L'errore del conducente o la disattenzione (incluse distrazione, eccesso di velocità, sonnolenza e alterazione) è la principale causa degli incidenti stradali."
  },
  {
    cat: "safety",
    en: "When backing out of a parking space, you should:",
    it: "Quando esci in retromarcia da un posto auto, dovresti:",
    options: [
      { en: "Back out quickly to avoid holding up traffic", it: "Uscire rapidamente per non bloccare il traffico" },
      { en: "Check mirrors and look in all directions before and while backing", it: "Controllare gli specchi e guardare in tutte le direzioni prima e durante la retromarcia" },
      { en: "Sound the horn to warn pedestrians", it: "Suonare il clacson per avvisare i pedoni" },
      { en: "Only check to the left side", it: "Controllare solo il lato sinistro" }
    ],
    correct: 1,
    explain_en: "When reversing from a parking space, check all mirrors and look in all directions including over both shoulders to check for pedestrians, cyclists, and other vehicles.",
    explain_it: "Uscendo in retromarcia da un parcheggio, controlla tutti gli specchi e guarda in tutte le direzioni, incluso oltre entrambe le spalle, per pedoni, ciclisti e altri veicoli."
  },
  {
    cat: "safety",
    en: "Scanning far ahead while driving helps you:",
    it: "Scansionare lontano davanti durante la guida ti aiuta a:",
    options: [
      { en: "Drive faster safely", it: "Guidare più velocemente in sicurezza" },
      { en: "Identify hazards early and have more time to react", it: "Identificare i pericoli in anticipo e avere più tempo per reagire" },
      { en: "Reduce fuel consumption", it: "Ridurre il consumo di carburante" },
      { en: "Avoid using your mirrors", it: "Evitare di usare gli specchi" }
    ],
    correct: 1,
    explain_en: "Scanning 12–15 seconds ahead gives you early warning of hazards, allowing you to adjust speed, change lanes, or take other actions before a crisis develops.",
    explain_it: "Scansionare 12-15 secondi in avanti ti dà un avviso precoce dei pericoli, consentendoti di regolare la velocità, cambiare corsia o intraprendere altre azioni prima che si sviluppi una crisi."
  },
  {
    cat: "safety",
    en: "What should you do if a tire blows out while driving at highway speed?",
    it: "Cosa dovresti fare se uno pneumatico si buca durante la guida ad alta velocità?",
    options: [
      { en: "Brake hard and pull to the right immediately", it: "Frenare bruscamente e spostarsi a destra immediatamente" },
      { en: "Grip the wheel firmly, ease off the gas, steer straight, and slow gradually", it: "Stringere saldamente il volante, togliere il gas, sterzare dritto e rallentare gradualmente" },
      { en: "Shift to reverse briefly to slow down", it: "Mettere brevemente la retromarcia per rallentare" },
      { en: "Steer immediately toward the nearest lane", it: "Sterzare immediatamente verso la corsia più vicina" }
    ],
    correct: 1,
    explain_en: "In a blowout: grip the steering wheel firmly, ease off the gas gradually, steer straight, and slow down gently before pulling off the road. Do not brake sharply.",
    explain_it: "In caso di scoppio: stringi saldamente il volante, togli gradualmente il gas, sterza dritto e rallenta delicatamente prima di accostare. Non frenare bruscamente."
  },
  {
    cat: "safety",
    en: "When driving, you should use your horn:",
    it: "Durante la guida, dovresti usare il clacson:",
    options: [
      { en: "To signal frustration at other drivers", it: "Per segnalare frustrazione verso altri conducenti" },
      { en: "To warn others of hazards or your presence in dangerous situations", it: "Per avvisare gli altri di pericoli o della tua presenza in situazioni pericolose" },
      { en: "Whenever you approach an intersection", it: "Ogni volta che ti avvicini a un incrocio" },
      { en: "To signal pedestrians on the crosswalk to hurry", it: "Per segnalare ai pedoni sul passaggio pedonale di affrettarsi" }
    ],
    correct: 1,
    explain_en: "The horn is a safety device — use it to warn others of danger or your presence. Never use it to express anger, frustration, or to rush pedestrians.",
    explain_it: "Il clacson è un dispositivo di sicurezza — usalo per avvisare gli altri di un pericolo o della tua presenza. Non usarlo mai per esprimere rabbia, frustrazione o per affrettare i pedoni."
  },
  {
    cat: "safety",
    en: "What is the danger of driving in a large truck's blind spot?",
    it: "Qual è il pericolo di guidare nel punto cieco di un camion grande?",
    options: [
      { en: "Your radio reception is worse", it: "La ricezione radio è peggiore" },
      { en: "The truck driver cannot see you and may merge or change lanes into you", it: "Il camionista non riesce a vederti e potrebbe spostare nella tua direzione" },
      { en: "Wind turbulence can blow you off the road", it: "Le turbolenze del vento possono spingerti fuori strada" },
      { en: "There is no real danger", it: "Non c'è un vero pericolo" }
    ],
    correct: 1,
    explain_en: "Large trucks have massive blind spots on all four sides. If you can't see the truck driver's mirrors, they can't see you — and may merge or change lanes into your path.",
    explain_it: "I camion grandi hanno enormi punti ciechi su tutti e quattro i lati. Se non puoi vedere gli specchi del camionista, loro non possono vedere te — e potrebbero spostarsi nel tuo percorso."
  },
  {
    cat: "safety",
    en: "If a vehicle behind keeps its high beams on, you should:",
    it: "Se un veicolo dietro mantiene gli abbaglianti accesi, dovresti:",
    options: [
      { en: "Turn on your own high beams in retaliation", it: "Accendere i tuoi abbaglianti in risposta" },
      { en: "Use the night-position of your rearview mirror or adjust it to reduce glare", it: "Usare la posizione notturna del retrovisore o regolarlo per ridurre il riverbero" },
      { en: "Brake suddenly to warn them", it: "Frenare bruscamente per avvisarli" },
      { en: "Speed up to get away from them", it: "Accelerare per allontanarti da loro" }
    ],
    correct: 1,
    explain_en: "Adjust your interior mirror to its night position (anti-glare) to reduce blinding glare from the vehicle behind. Do not retaliate with your own high beams.",
    explain_it: "Regola il retrovisore interno in posizione notturna (anti-riverbero) per ridurre il riverbero accecante dal veicolo dietro. Non rispondere con i tuoi abbaglianti."
  },

  // ══ DUI / ALCOHOL – additional (25 new) ══════════════════════

  {
    cat: "alcohol",
    en: "The legal Blood Alcohol Content (BAC) limit for drivers 21+ in Florida is:",
    it: "Il limite legale di tasso alcolemico (BAC) per conducenti di 21+ anni in Florida è:",
    options: [
      { en: "0.05%", it: "0,05%" },
      { en: "0.08%", it: "0,08%" },
      { en: "0.10%", it: "0,10%" },
      { en: "0.12%", it: "0,12%" }
    ],
    correct: 1,
    explain_en: "The legal BAC limit for drivers 21+ in Florida (and all U.S. states) is 0.08%. At or above this level you are presumed to be impaired.",
    explain_it: "Il limite legale di BAC per conducenti di 21+ anni in Florida (e in tutti gli stati USA) è 0,08%. A questo livello o superiore sei presunto compromesso."
  },
  {
    cat: "alcohol",
    en: "Florida's Zero Tolerance Law sets the BAC limit for drivers under 21 at:",
    it: "La legge Zero Tolerance della Florida fissa il limite di BAC per conducenti under 21 a:",
    options: [
      { en: "0.00% — any measurable amount triggers consequences", it: "0,00% — qualsiasi quantità misurabile scatena conseguenze" },
      { en: "0.02%", it: "0,02%" },
      { en: "0.05%", it: "0,05%" },
      { en: "0.08% — same as adults", it: "0,08% — come gli adulti" }
    ],
    correct: 1,
    explain_en: "Florida's Zero Tolerance Law: any measurable BAC (0.02% or higher) for a driver under 21 results in license suspension. The practical limit is 0.02% due to measurement thresholds.",
    explain_it: "Legge Zero Tolerance della Florida: qualsiasi BAC misurabile (0,02% o superiore) per un conducente under 21 comporta la sospensione della patente."
  },
  {
    cat: "alcohol",
    en: "Refusing a breath test when lawfully arrested for DUI in Florida results in:",
    it: "Rifiutare un test del respiro quando si è arrestati per DUI in Florida comporta:",
    options: [
      { en: "No penalty if found not guilty of DUI", it: "Nessuna penalità se si viene ritenuti non colpevoli di DUI" },
      { en: "Automatic 1-year license suspension for first refusal", it: "Sospensione automatica della patente di 1 anno per il primo rifiuto" },
      { en: "Only a fine — no license action", it: "Solo una multa — nessuna azione sulla patente" },
      { en: "Immediate arrest for obstruction", it: "Arresto immediato per ostruzione" }
    ],
    correct: 1,
    explain_en: "Florida Implied Consent: refusing a chemical test = automatic 1-year suspension for first refusal, 18 months for second refusal. Refusal may also be used against you in court.",
    explain_it: "Consenso implicito in Florida: rifiutare un test chimico = sospensione automatica di 1 anno per il primo rifiuto, 18 mesi per il secondo. Il rifiuto può anche essere usato contro di te in tribunale."
  },
  {
    cat: "alcohol",
    en: "Which of these methods can effectively sober you up faster?",
    it: "Quale di questi metodi può farti smaltire l'alcol più velocemente?",
    options: [
      { en: "Drinking coffee", it: "Bere caffè" },
      { en: "Cold shower and fresh air", it: "Doccia fredda e aria fresca" },
      { en: "Exercise — walking or jogging", it: "Esercizio fisico — camminare o fare jogging" },
      { en: "None — only time eliminates alcohol from the body", it: "Nessuno — solo il tempo elimina l'alcol dal corpo" }
    ],
    correct: 3,
    explain_en: "Only time eliminates alcohol. The liver processes approximately one standard drink per hour, and nothing speeds this up. Coffee makes you alert but still impaired.",
    explain_it: "Solo il tempo elimina l'alcol. Il fegato elabora circa un drink standard all'ora, e nulla accelera questo processo. Il caffè ti rende vigile ma ancora compromesso."
  },
  {
    cat: "alcohol",
    en: "Penalties for a first DUI conviction in Florida include:",
    it: "Le sanzioni per una prima condanna DUI in Florida includono:",
    options: [
      { en: "A written warning and community service only", it: "Solo un avvertimento scritto e servizio alla comunità" },
      { en: "Fines up to $2,000, possible jail time, license revocation, and community service", it: "Multe fino a $2.000, possibile carcere, revoca della patente e servizio alla comunità" },
      { en: "Only a fine of $500", it: "Solo una multa di $500" },
      { en: "Permanent license revocation", it: "Revoca permanente della patente" }
    ],
    correct: 1,
    explain_en: "First DUI in FL: fines $500–$2,000, up to 6 months jail, license revocation up to 1 year, 50 hours of community service, and probation up to 1 year.",
    explain_it: "Primo DUI in Florida: multe $500-$2.000, fino a 6 mesi di carcere, revoca della patente fino a 1 anno, 50 ore di servizio alla comunità, libertà vigilata fino a 1 anno."
  },
  {
    cat: "alcohol",
    en: "A third DUI conviction in Florida within 10 years is classified as:",
    it: "Una terza condanna DUI in Florida entro 10 anni è classificata come:",
    options: [
      { en: "A misdemeanor — same as first offense", it: "Un'infrazione minore — come la prima" },
      { en: "A third-degree felony", it: "Un crimine di terzo grado" },
      { en: "A civil violation only", it: "Solo una violazione civile" },
      { en: "An infraction requiring only a fine", it: "Un'infrazione che richiede solo una multa" }
    ],
    correct: 1,
    explain_en: "A third DUI within 10 years in Florida is a third-degree felony, with fines up to $5,000 and up to 5 years in prison.",
    explain_it: "Un terzo DUI entro 10 anni in Florida è un crimine di terzo grado, con multe fino a $5.000 e fino a 5 anni di prigione."
  },
  {
    cat: "alcohol",
    en: "Alcohol first affects a driver's:",
    it: "L'alcol colpisce per prima la/il:",
    options: [
      { en: "Physical strength", it: "Forza fisica" },
      { en: "Judgment and decision-making ability", it: "Giudizio e capacità decisionale" },
      { en: "Muscle coordination", it: "Coordinazione muscolare" },
      { en: "Vision only", it: "Solo la visione" }
    ],
    correct: 1,
    explain_en: "Alcohol impairs judgment first — even before it affects physical coordination. Drivers may feel fine but are already making dangerous decisions.",
    explain_it: "L'alcol compromette prima il giudizio — anche prima di influenzare la coordinazione fisica. I conducenti possono sentirsi bene ma stanno già prendendo decisioni pericolose."
  },
  {
    cat: "alcohol",
    en: "Which factor DOES affect how alcohol impacts a person?",
    it: "Quale fattore influenza DAVVERO come l'alcol colpisce una persona?",
    options: [
      { en: "The type of glass used to drink", it: "Il tipo di bicchiere usato per bere" },
      { en: "The person's body weight and whether they have eaten", it: "Il peso corporeo della persona e se ha mangiato" },
      { en: "The color of the alcoholic beverage", it: "Il colore della bevanda alcolica" },
      { en: "Whether you drink sitting or standing", it: "Se bevi seduto o in piedi" }
    ],
    correct: 1,
    explain_en: "Body weight, food intake, gender, and metabolism all affect how alcohol impacts a person. A lighter person eating on an empty stomach reaches higher BAC faster.",
    explain_it: "Peso corporeo, cibo ingerito, genere e metabolismo influenzano come l'alcol colpisce una persona. Una persona più leggera a stomaco vuoto raggiunge un BAC più alto più velocemente."
  },
  {
    cat: "alcohol",
    en: "No one can drink alcohol and drive safely — this statement is:",
    it: "Nessuno può bere alcolici e guidare in sicurezza — questa affermazione è:",
    options: [
      { en: "False — experienced drivers handle alcohol better", it: "Falsa — i conducenti esperti gestiscono meglio l'alcol" },
      { en: "True — alcohol affects everyone's driving regardless of experience", it: "Vera — l'alcol influenza la guida di tutti indipendentemente dall'esperienza" },
      { en: "True only for inexperienced drivers", it: "Vera solo per i conducenti inesperti" },
      { en: "False — only illegal amounts affect driving", it: "Falsa — solo le quantità illegali influenzano la guida" }
    ],
    correct: 1,
    explain_en: "The Florida Driver Handbook states: 'No one can drink alcohol and drive safely.' Any amount of alcohol affects driving ability, even amounts below the legal limit.",
    explain_it: "Il manuale del conducente della Florida afferma: 'Nessuno può bere alcolici e guidare in sicurezza.' Qualsiasi quantità di alcol influenza la capacità di guida, anche sotto il limite legale."
  },
  {
    cat: "alcohol",
    en: "Florida law requires ignition interlock devices for:",
    it: "La legge della Florida richiede dispositivi interlock per l'accensione per:",
    options: [
      { en: "All first-time DUI offenders", it: "Tutti i trasgressori DUI alla prima offesa" },
      { en: "Second or subsequent DUI offenders, and first offenders with BAC 0.15%+ or a minor in vehicle", it: "Trasgressori DUI alla seconda o successiva offesa, e alla prima offesa con BAC 0,15%+ o un minore nel veicolo" },
      { en: "Only DUI manslaughter convictions", it: "Solo le condanne per DUI manslaughter" },
      { en: "Any driver with a suspended license", it: "Qualsiasi conducente con la patente sospesa" }
    ],
    correct: 1,
    explain_en: "Florida requires ignition interlock for 2nd+ DUI convictions, and also for first-time DUI if BAC was 0.15%+ or if a minor was in the vehicle.",
    explain_it: "La Florida richiede l'interlock per 2a+ condanne DUI, e anche per la prima offesa DUI se il BAC era 0,15%+ o se c'era un minore nel veicolo."
  },
  {
    cat: "alcohol",
    en: "In Florida, DUI causing serious bodily injury is classified as:",
    it: "In Florida, il DUI che causa lesioni fisiche gravi è classificato come:",
    options: [
      { en: "A misdemeanor", it: "Un'infrazione minore" },
      { en: "A third-degree felony", it: "Un crimine di terzo grado" },
      { en: "Only a civil matter", it: "Solo una questione civile" },
      { en: "The same as a standard DUI", it: "Uguale a un DUI standard" }
    ],
    correct: 1,
    explain_en: "DUI causing serious bodily injury is a third-degree felony in Florida, with up to 5 years in prison and up to $5,000 in fines.",
    explain_it: "Il DUI che causa lesioni fisiche gravi è un crimine di terzo grado in Florida, con fino a 5 anni di prigione e fino a $5.000 di multa."
  },
  {
    cat: "alcohol",
    en: "Alcohol combined with many prescription drugs:",
    it: "L'alcol combinato con molti farmaci da prescrizione:",
    options: [
      { en: "Has no additional effect on driving", it: "Non ha ulteriori effetti sulla guida" },
      { en: "Can multiply impairing effects far beyond what either would cause alone", it: "Può moltiplicare gli effetti compromettenti molto oltre quello che ciascuno causerebbe da solo" },
      { en: "Only affects people over 65", it: "Colpisce solo le persone over 65" },
      { en: "Is acceptable if the drug is legally prescribed", it: "È accettabile se il farmaco è legalmente prescritto" }
    ],
    correct: 1,
    explain_en: "Many medications combined with alcohol create a dangerous synergy, multiplying impairment far beyond what either substance would cause alone.",
    explain_it: "Molti farmaci combinati con l'alcol creano una pericolosa sinergia, moltiplicando la compromissione molto oltre quello che ciascuna sostanza causerebbe da sola."
  },
  {
    cat: "alcohol",
    en: "After a DUI arrest in Florida, what happens to your driver's license immediately?",
    it: "Dopo un arresto DUI in Florida, cosa succede immediatamente alla tua patente?",
    options: [
      { en: "Nothing until you are convicted", it: "Nulla fino alla condanna" },
      { en: "It is administratively suspended immediately — even before conviction", it: "Viene sospesa amministrativamente immediatamente — anche prima della condanna" },
      { en: "It is only restricted, not suspended", it: "Viene solo limitata, non sospesa" },
      { en: "You can keep driving until your court date", it: "Puoi continuare a guidare fino alla data del tribunale" }
    ],
    correct: 1,
    explain_en: "After a DUI arrest in Florida, your license is administratively suspended immediately (10-day review period applies). This is separate from any criminal conviction.",
    explain_it: "Dopo un arresto DUI in Florida, la patente viene sospesa amministrativamente immediatamente (si applica un periodo di revisione di 10 giorni). Questo è separato da qualsiasi condanna penale."
  },
  {
    cat: "alcohol",
    en: "The approximate rate at which the liver eliminates alcohol is:",
    it: "La velocità approssimativa a cui il fegato elimina l'alcol è:",
    options: [
      { en: "2 drinks per hour", it: "2 drink all'ora" },
      { en: "1 standard drink per hour", it: "1 drink standard all'ora" },
      { en: "3 drinks per hour", it: "3 drink all'ora" },
      { en: "It varies greatly depending on the drink", it: "Varia molto a seconda della bevanda" }
    ],
    correct: 1,
    explain_en: "The liver metabolizes approximately one standard drink per hour regardless of the type of alcohol, gender, or anything you do to try to speed it up.",
    explain_it: "Il fegato metabolizza circa un drink standard all'ora indipendentemente dal tipo di alcol, dal genere o da qualsiasi cosa tu faccia per accelerare il processo."
  },
  {
    cat: "alcohol",
    en: "In Florida, 'DUI Manslaughter' means:",
    it: "In Florida, 'DUI Manslaughter' significa:",
    options: [
      { en: "A minor DUI with property damage", it: "Un DUI minore con danni materiali" },
      { en: "Causing the death of another person while driving under the influence", it: "Causare la morte di un'altra persona mentre si guida sotto l'influenza" },
      { en: "Driving drunk and causing a minor injury", it: "Guidare ubriachi e causare una lesione minore" },
      { en: "A reduced charge for DUI with a high BAC", it: "Un'accusa ridotta per DUI con BAC elevato" }
    ],
    correct: 1,
    explain_en: "DUI Manslaughter is causing a person's death while driving under the influence of alcohol or drugs. It is a second-degree felony in Florida.",
    explain_it: "Il DUI Manslaughter è causare la morte di una persona mentre si guida sotto l'influenza di alcol o droghe. È un crimine di secondo grado in Florida."
  },
  {
    cat: "alcohol",
    en: "A 'standard drink' in the U.S. contains approximately:",
    it: "Un 'drink standard' negli USA contiene approssimativamente:",
    options: [
      { en: "0.3 oz of pure alcohol", it: "0,3 once di alcol puro" },
      { en: "0.6 oz of pure alcohol", it: "0,6 once di alcol puro" },
      { en: "1.0 oz of pure alcohol", it: "1,0 oncia di alcol puro" },
      { en: "2.0 oz of pure alcohol", it: "2,0 once di alcol puro" }
    ],
    correct: 1,
    explain_en: "One standard U.S. drink = 0.6 oz of pure alcohol. This equals: 12 oz of regular beer (5%), 5 oz of wine (12%), or 1.5 oz of distilled spirits (40%).",
    explain_it: "Un drink standard USA = 0,6 once di alcol puro. Equivale a: 350 ml di birra normale (5%), 150 ml di vino (12%), o 45 ml di superalcolici (40%)."
  },
  {
    cat: "alcohol",
    en: "Alcohol reduces night driving safety by:",
    it: "L'alcol riduce la sicurezza della guida notturna:",
    options: [
      { en: "Making the road look brighter", it: "Facendo sembrare la strada più luminosa" },
      { en: "Impairing glare recovery and narrowing peripheral vision", it: "Compromettendo il recupero dall'abbagliamento e restringendo la visione periferica" },
      { en: "Having no effect on vision", it: "Non avendo effetti sulla visione" },
      { en: "Only affecting color perception", it: "Influenzando solo la percezione dei colori" }
    ],
    correct: 1,
    explain_en: "Alcohol specifically impairs night vision by slowing glare recovery from headlights and narrowing peripheral vision — both critical for safe night driving.",
    explain_it: "L'alcol compromette specificamente la visione notturna rallentando il recupero dall'abbagliamento dei fari e restringendo la visione periferica — entrambi critici per la guida notturna sicura."
  },
  {
    cat: "alcohol",
    en: "Florida requires vehicle forfeiture for:",
    it: "La Florida richiede la confisca del veicolo per:",
    options: [
      { en: "Any DUI conviction", it: "Qualsiasi condanna DUI" },
      { en: "A second or subsequent DUI conviction", it: "Una seconda o successiva condanna DUI" },
      { en: "Only DUI manslaughter", it: "Solo il DUI manslaughter" },
      { en: "Florida does not allow vehicle forfeiture", it: "La Florida non consente la confisca del veicolo" }
    ],
    correct: 1,
    explain_en: "Florida may order vehicle impoundment or forfeiture for a second or subsequent DUI conviction.",
    explain_it: "La Florida può ordinare il sequestro o la confisca del veicolo per una seconda o successiva condanna DUI."
  },
  {
    cat: "alcohol",
    en: "A DUI conviction significantly affects your auto insurance because:",
    it: "Una condanna DUI influenza significativamente la tua assicurazione auto perché:",
    options: [
      { en: "It has no effect on insurance rates", it: "Non ha effetti sui premi assicurativi" },
      { en: "It will dramatically increase rates — sometimes tripling them — and some insurers may drop you", it: "Aumenterà drasticamente i premi — a volte triplicandoli — e alcuni assicuratori potrebbero rifiutarti" },
      { en: "It only affects rates for 6 months", it: "Influenza i premi solo per 6 mesi" },
      { en: "It decreases rates because you are now seen as a more careful driver", it: "Diminuisce i premi perché ora sei visto come un conducente più attento" }
    ],
    correct: 1,
    explain_en: "A DUI conviction typically causes dramatic insurance rate increases — sometimes tripling premiums — and some insurers will refuse coverage entirely.",
    explain_it: "Una condanna DUI causa tipicamente aumenti drammatici dei premi assicurativi — a volte triplicandoli — e alcuni assicuratori si rifiuteranno di fornire copertura."
  },
  {
    cat: "alcohol",
    en: "Gender affects alcohol absorption because:",
    it: "Il genere influenza l'assorbimento dell'alcol perché:",
    options: [
      { en: "Men always handle alcohol better than women", it: "Gli uomini gestiscono sempre meglio l'alcol delle donne" },
      { en: "Women generally reach higher BAC from the same amount due to body composition differences", it: "Le donne raggiungono generalmente un BAC più alto con la stessa quantità a causa di differenze nella composizione corporea" },
      { en: "Gender has no effect on alcohol absorption", it: "Il genere non ha effetti sull'assorbimento dell'alcol" },
      { en: "Women process alcohol faster than men", it: "Le donne elaborano l'alcol più velocemente degli uomini" }
    ],
    correct: 1,
    explain_en: "Women generally reach higher BAC levels than men of the same weight drinking the same amount due to differences in body composition and enzyme levels.",
    explain_it: "Le donne raggiungono generalmente livelli di BAC più alti degli uomini dello stesso peso che bevono la stessa quantità, a causa di differenze nella composizione corporea e nei livelli enzimatici."
  },
  {
    cat: "alcohol",
    en: "A 'habitual traffic offender' status for DUI purposes requires how many DUI convictions?",
    it: "Lo status di 'trasgressore abituale del traffico' per i fini DUI richiede quante condanne DUI?",
    options: [
      { en: "2 DUI convictions", it: "2 condanne DUI" },
      { en: "3 DUI convictions within 5 years", it: "3 condanne DUI entro 5 anni" },
      { en: "4 DUI convictions", it: "4 condanne DUI" },
      { en: "Any 2 major violations including 1 DUI", it: "Qualsiasi 2 violazioni gravi incluso 1 DUI" }
    ],
    correct: 1,
    explain_en: "Three DUI convictions designate a person as a habitual traffic offender in Florida, resulting in a mandatory 5-year license revocation.",
    explain_it: "Tre condanne DUI designano una persona come trasgressore abituale del traffico in Florida, con una revoca obbligatoria della patente di 5 anni."
  },
  {
    cat: "alcohol",
    en: "The main purpose of Florida's Implied Consent Law is to:",
    it: "Lo scopo principale della legge del consenso implicito della Florida è:",
    options: [
      { en: "Punish drivers who refuse to take a breath test", it: "Punire i conducenti che rifiutano il test del respiro" },
      { en: "Deter impaired driving by requiring drivers to submit to chemical testing", it: "Scoraggiare la guida in stato di alterazione richiedendo ai conducenti di sottoporsi ai test chimici" },
      { en: "Give police additional search powers", it: "Dare alla polizia poteri aggiuntivi di perquisizione" },
      { en: "Make all chemical test results admissible in court", it: "Rendere tutti i risultati dei test chimici ammissibili in tribunale" }
    ],
    correct: 1,
    explain_en: "Implied Consent deters drunk driving by making chemical testing a condition of the privilege of driving in Florida. Refusal carries automatic license suspension.",
    explain_it: "Il consenso implicito scoraggia la guida ubriaca rendendo i test chimici una condizione del privilegio di guidare in Florida. Il rifiuto comporta la sospensione automatica della patente."
  },
  {
    cat: "alcohol",
    en: "Alcohol-related crashes account for what percentage of U.S. traffic fatalities?",
    it: "Gli incidenti legati all'alcol rappresentano quale percentuale delle vittime stradali negli USA?",
    options: [
      { en: "About 5%", it: "Circa il 5%" },
      { en: "About 10%", it: "Circa il 10%" },
      { en: "About 28–30%", it: "Circa il 28-30%" },
      { en: "More than 50%", it: "Più del 50%" }
    ],
    correct: 2,
    explain_en: "Alcohol-impaired driving accounts for roughly 28–30% of all U.S. traffic fatalities — making it one of the leading causes of preventable traffic deaths.",
    explain_it: "La guida in stato di ebbrezza rappresenta circa il 28-30% di tutte le vittime stradali negli USA — rendendola una delle principali cause di morti stradali prevenibili."
  },
  {
    cat: "alcohol",
    en: "A designated driver is a person who:",
    it: "Un conducente designato è una persona che:",
    options: [
      { en: "Has had one or two drinks only", it: "Ha bevuto solo uno o due drink" },
      { en: "Agrees not to drink alcohol so they can safely drive others home", it: "Accetta di non bere alcolici per poter portare a casa gli altri in sicurezza" },
      { en: "Has a commercial driver's license", it: "Ha una patente per veicoli commerciali" },
      { en: "Is the oldest person in the group", it: "È la persona più anziana del gruppo" }
    ],
    correct: 1,
    explain_en: "A designated driver commits to abstaining from alcohol to safely drive their group home. Even 'one or two drinks' can affect driving — the designated driver should have none.",
    explain_it: "Un conducente designato si impegna ad astenersi dall'alcol per portare in sicurezza il suo gruppo a casa. Anche 'uno o due drink' possono influenzare la guida — il conducente designato non ne deve bere."
  },

  // ══ LICENSE RULES – additional (22 new) ══════════════════════

  {
    cat: "license",
    en: "A standard Florida driver license is valid for:",
    it: "Una patente di guida standard della Florida è valida per:",
    options: [
      { en: "4 years", it: "4 anni" },
      { en: "6 years", it: "6 anni" },
      { en: "8 years", it: "8 anni" },
      { en: "10 years", it: "10 anni" }
    ],
    correct: 2,
    explain_en: "A standard Florida Class E license is valid for 8 years. Drivers aged 80 or older must renew every 6 years.",
    explain_it: "Una patente Class E standard della Florida è valida per 8 anni. I conducenti di 80 anni o più devono rinnovarla ogni 6 anni."
  },
  {
    cat: "license",
    en: "Florida's point system: accumulating 12 points in 12 months results in:",
    it: "Sistema a punti della Florida: accumulare 12 punti in 12 mesi comporta:",
    options: [
      { en: "A warning letter", it: "Una lettera di avvertimento" },
      { en: "30-day license suspension", it: "Sospensione della patente di 30 giorni" },
      { en: "3-month license suspension", it: "Sospensione della patente di 3 mesi" },
      { en: "1-year license suspension", it: "Sospensione della patente di 1 anno" }
    ],
    correct: 1,
    explain_en: "12 pts in 12 months = 30-day suspension. 18 pts in 18 months = 3-month suspension. 24 pts in 36 months = 1-year suspension.",
    explain_it: "12 punti in 12 mesi = sospensione di 30 giorni. 18 punti in 18 mesi = 3 mesi. 24 punti in 36 mesi = 1 anno."
  },
  {
    cat: "license",
    en: "How many points does a speeding violation of less than 15 mph over the limit add in Florida?",
    it: "Quanti punti aggiunge un'infrazione per eccesso di velocità inferiore a 15 mph in Florida?",
    options: [
      { en: "2 points", it: "2 punti" },
      { en: "3 points", it: "3 punti" },
      { en: "4 points", it: "4 punti" },
      { en: "6 points", it: "6 punti" }
    ],
    correct: 1,
    explain_en: "Speeding less than 15 mph over the limit = 3 points. Speeding 15+ mph over = 4 points. A crash caused by a moving violation = 6 points.",
    explain_it: "Eccesso di velocità inferiore a 15 mph oltre il limite = 3 punti. 15+ mph oltre = 4 punti. Incidente causato da violazione in movimento = 6 punti."
  },
  {
    cat: "license",
    en: "Florida's minimum required auto insurance includes:",
    it: "L'assicurazione auto minima richiesta dalla Florida include:",
    options: [
      { en: "$10,000 PIP and $10,000 PDL", it: "$10.000 PIP e $10.000 PDL" },
      { en: "$25,000 bodily injury per person", it: "$25.000 per lesioni per persona" },
      { en: "$50,000 comprehensive coverage", it: "$50.000 di copertura completa" },
      { en: "$100,000 liability coverage", it: "$100.000 di copertura di responsabilità civile" }
    ],
    correct: 0,
    explain_en: "Florida requires $10,000 Personal Injury Protection (PIP) and $10,000 Property Damage Liability (PDL). Florida is a no-fault state — PIP covers your own injuries.",
    explain_it: "La Florida richiede $10.000 di Protezione da Infortuni Personali (PIP) e $10.000 di Responsabilità per Danni Materiali (PDL). La Florida è uno stato no-fault."
  },
  {
    cat: "license",
    en: "New Florida residents must get a Florida license within:",
    it: "I nuovi residenti in Florida devono ottenere la patente Florida entro:",
    options: [
      { en: "10 days of establishing residency", it: "10 giorni dall'acquisizione della residenza" },
      { en: "30 days of establishing residency", it: "30 giorni dall'acquisizione della residenza" },
      { en: "60 days of establishing residency", it: "60 giorni dall'acquisizione della residenza" },
      { en: "90 days of establishing residency", it: "90 giorni dall'acquisizione della residenza" }
    ],
    correct: 1,
    explain_en: "New Florida residents must obtain a Florida driver license within 30 days of establishing residency. Out-of-state licenses must be surrendered.",
    explain_it: "I nuovi residenti in Florida devono ottenere la patente Florida entro 30 giorni dall'acquisizione della residenza. Le patenti di altri stati devono essere consegnate."
  },
  {
    cat: "license",
    en: "Florida's seat belt law requires seat belts for:",
    it: "La legge sulle cinture della Florida richiede le cinture per:",
    options: [
      { en: "Driver only", it: "Solo il conducente" },
      { en: "Driver and front passenger only", it: "Solo conducente e passeggero anteriore" },
      { en: "All front-seat occupants AND all passengers under 18 regardless of seat", it: "Tutti gli occupanti anteriori E tutti i passeggeri under 18 indipendentemente dal sedile" },
      { en: "Everyone in the vehicle without exception", it: "Tutti nel veicolo senza eccezioni" }
    ],
    correct: 2,
    explain_en: "Florida requires seat belts for all front-seat occupants and for all passengers under 18 in any seat. Adults in the back are not legally required to wear belts (though strongly recommended).",
    explain_it: "La Florida richiede le cinture per tutti gli occupanti anteriori e per tutti i passeggeri under 18 in qualsiasi sedile. Gli adulti nel sedile posteriore non sono legalmente obbligati (sebbene fortemente raccomandato)."
  },
  {
    cat: "license",
    en: "Florida's Graduated Driver License (GDL) program is designed for:",
    it: "Il programma di Patente a Guida Progressiva (GDL) della Florida è progettato per:",
    options: [
      { en: "Commercial truck drivers", it: "Conducenti di camion commerciali" },
      { en: "Teen drivers under 18 to gain experience safely before full licensing", it: "Conducenti adolescenti under 18 per acquisire esperienza in sicurezza prima della patente completa" },
      { en: "Drivers over 80 who need license renewal", it: "Conducenti over 80 che necessitano del rinnovo della patente" },
      { en: "Drivers with DUI convictions needing rehabilitation", it: "Conducenti con condanne DUI che necessitano di riabilitazione" }
    ],
    correct: 1,
    explain_en: "Florida's GDL program is a step-by-step licensing process for drivers under 18: learner's license → provisional license → full license.",
    explain_it: "Il programma GDL della Florida è un processo di patente graduale per i conducenti under 18: patente per principianti → patente provvisoria → patente completa."
  },
  {
    cat: "license",
    en: "To get a Florida learner's license (under 18), you must be at least:",
    it: "Per ottenere la patente per principianti in Florida (under 18), devi avere almeno:",
    options: [
      { en: "14 years old", it: "14 anni" },
      { en: "15 years old", it: "15 anni" },
      { en: "16 years old", it: "16 anni" },
      { en: "17 years old", it: "17 anni" }
    ],
    correct: 1,
    explain_en: "You must be at least 15 years old to obtain a Florida learner's license. You must also pass the Class E knowledge exam and vision screening.",
    explain_it: "Devi avere almeno 15 anni per ottenere la patente per principianti in Florida. Devi anche superare l'esame di conoscenza Class E e lo screening visivo."
  },
  {
    cat: "license",
    en: "A learner's license holder must be supervised by a licensed driver who is:",
    it: "Il titolare di una patente per principianti deve essere supervisionato da un conducente con patente che:",
    options: [
      { en: "Any licensed adult — no age requirement", it: "Qualsiasi adulto con patente — nessun requisito di età" },
      { en: "At least 21 years old, in the front passenger seat", it: "Abbia almeno 21 anni, nel sedile anteriore del passeggero" },
      { en: "A driving instructor only", it: "Solo un istruttore di guida" },
      { en: "A parent or guardian only", it: "Solo un genitore o tutore" }
    ],
    correct: 1,
    explain_en: "Learner's license holders must be supervised by a licensed driver who is at least 21 years old and seated in the front passenger seat.",
    explain_it: "I titolari di patente per principianti devono essere supervisionati da un conducente con patente di almeno 21 anni seduto nel sedile anteriore del passeggero."
  },
  {
    cat: "license",
    en: "Before getting a Florida provisional license, a teen driver must complete:",
    it: "Prima di ottenere la patente provvisoria in Florida, un conducente adolescente deve completare:",
    options: [
      { en: "10 hours of supervised driving (5 at night)", it: "10 ore di guida supervisionata (5 di notte)" },
      { en: "50 hours of supervised driving (10 at night)", it: "50 ore di guida supervisionata (10 di notte)" },
      { en: "25 hours of supervised driving (no night requirement)", it: "25 ore di guida supervisionata (nessun requisito notturno)" },
      { en: "100 hours of supervised driving", it: "100 ore di guida supervisionata" }
    ],
    correct: 1,
    explain_en: "Florida requires 50 hours of supervised driving (at least 10 at night) logged before a teen can apply for a provisional license.",
    explain_it: "La Florida richiede 50 ore di guida supervisionata (almeno 10 di notte) registrate prima che un adolescente possa richiedere la patente provvisoria."
  },
  {
    cat: "license",
    en: "A Florida provisional license restricts driving between:",
    it: "La patente provvisoria della Florida limita la guida tra:",
    options: [
      { en: "10 PM and 5 AM", it: "Le 22:00 e le 5:00" },
      { en: "11 PM and 6 AM (with exceptions for work, school, or emergencies)", it: "Le 23:00 e le 6:00 (con eccezioni per lavoro, scuola o emergenze)" },
      { en: "Midnight and 6 AM", it: "Mezzanotte e le 6:00" },
      { en: "There are no nighttime restrictions", it: "Non ci sono restrizioni notturne" }
    ],
    correct: 1,
    explain_en: "Provisional license holders (first year) may not drive between 11 PM and 6 AM, with exceptions for work, school, religious activities, or emergencies.",
    explain_it: "I titolari di patente provvisoria (primo anno) non possono guidare tra le 23:00 e le 6:00, con eccezioni per lavoro, scuola, attività religiose o emergenze."
  },
  {
    cat: "license",
    en: "What is the 'FR-44' form required for in Florida?",
    it: "A cosa serve il modulo 'FR-44' in Florida?",
    options: [
      { en: "Standard driver's license application", it: "Domanda standard di patente di guida" },
      { en: "Proof of higher liability insurance coverage required after a DUI conviction", it: "Prova di una copertura assicurativa di responsabilità più elevata richiesta dopo una condanna DUI" },
      { en: "Crash report form", it: "Modulo di denuncia incidente" },
      { en: "Commercial vehicle permit", it: "Permesso per veicoli commerciali" }
    ],
    correct: 1,
    explain_en: "The FR-44 is a certificate required for DUI offenders proving they carry higher liability insurance (at least $100,000/$300,000 bodily injury, $50,000 property damage).",
    explain_it: "L'FR-44 è un certificato richiesto ai trasgressori DUI che prova che hanno una copertura di responsabilità più elevata (almeno $100.000/$300.000 per lesioni, $50.000 per danni materiali)."
  },
  {
    cat: "license",
    en: "In Florida, you must notify FLHSMV of an address change within:",
    it: "In Florida, devi notificare al FLHSMV un cambio di indirizzo entro:",
    options: [
      { en: "10 days", it: "10 giorni" },
      { en: "30 days", it: "30 giorni" },
      { en: "60 days", it: "60 giorni" },
      { en: "90 days", it: "90 giorni" }
    ],
    correct: 1,
    explain_en: "Florida requires notifying FLHSMV of any change of address within 30 days.",
    explain_it: "La Florida richiede di notificare al FLHSMV qualsiasi cambio di indirizzo entro 30 giorni."
  },
  {
    cat: "license",
    en: "Driving with a suspended license in Florida is:",
    it: "Guidare con la patente sospesa in Florida è:",
    options: [
      { en: "Only a minor infraction on first offense", it: "Solo un'infrazione minore alla prima offesa" },
      { en: "A criminal offense — a misdemeanor or felony depending on prior offenses", it: "Un reato penale — un'infrazione minore o un crimine a seconda delle offese precedenti" },
      { en: "Acceptable if driving to work or school", it: "Accettabile se si va al lavoro o a scuola" },
      { en: "Only ticketed if involved in a crash", it: "Multato solo se coinvolto in un incidente" }
    ],
    correct: 1,
    explain_en: "Driving with a suspended or revoked license is a criminal offense in Florida — a misdemeanor for a first offense, potentially a felony for subsequent offenses.",
    explain_it: "Guidare con la patente sospesa o revocata è un reato penale in Florida — un'infrazione minore per la prima offesa, potenzialmente un crimine per offese successive."
  },
  {
    cat: "license",
    en: "Florida's no-fault auto insurance system means:",
    it: "Il sistema assicurativo auto no-fault della Florida significa:",
    options: [
      { en: "You cannot sue anyone after a crash", it: "Non puoi citare in giudizio nessuno dopo un incidente" },
      { en: "Your own PIP insurance pays for your injuries up to the policy limit, regardless of who caused the crash", it: "La tua assicurazione PIP paga le tue lesioni fino al limite della polizza, indipendentemente da chi ha causato l'incidente" },
      { en: "No insurance is required for minor crashes", it: "Nessuna assicurazione è richiesta per gli incidenti minori" },
      { en: "The at-fault driver always pays all costs", it: "Il conducente responsabile paga sempre tutti i costi" }
    ],
    correct: 1,
    explain_en: "Florida's no-fault system: your own PIP insurance covers your medical costs up to $10,000 regardless of who caused the crash. For serious injuries, you may still sue.",
    explain_it: "Il sistema no-fault della Florida: la tua assicurazione PIP copre le tue spese mediche fino a $10.000 indipendentemente da chi ha causato l'incidente. Per lesioni gravi, puoi comunque fare causa."
  },
  {
    cat: "license",
    en: "Florida requires you to carry proof of insurance:",
    it: "La Florida richiede di portare la prova dell'assicurazione:",
    options: [
      { en: "Only when driving on interstate highways", it: "Solo quando si guida sulle autostrade interstatali" },
      { en: "At all times — and present it when requested by law enforcement", it: "Sempre — e esibirla quando richiesto dalle forze dell'ordine" },
      { en: "Only for vehicles newer than 5 years", it: "Solo per i veicoli con meno di 5 anni" },
      { en: "Only if your vehicle is not paid off", it: "Solo se il tuo veicolo non è ancora pagato" }
    ],
    correct: 1,
    explain_en: "Florida requires drivers to carry proof of insurance at all times and produce it on request by law enforcement. Failure to show proof can result in citation.",
    explain_it: "La Florida richiede ai conducenti di portare sempre la prova dell'assicurazione e di esibirla su richiesta delle forze dell'ordine. La mancata esibizione può comportare una multa."
  },
  {
    cat: "license",
    en: "What is REAL ID and when is it required in Florida?",
    it: "Cos'è il REAL ID e quando è richiesto in Florida?",
    options: [
      { en: "A federal ID required for all drivers since 2020", it: "Un documento federale richiesto a tutti i conducenti dal 2020" },
      { en: "A compliant license required to board domestic flights and enter certain federal facilities", it: "Una patente conforme richiesta per imbarcarsi su voli nazionali e accedere a determinate strutture federali" },
      { en: "Required for commercial driving only", it: "Richiesto solo per la guida commerciale" },
      { en: "A voluntary upgrade with no practical requirement", it: "Un aggiornamento volontario senza alcun requisito pratico" }
    ],
    correct: 1,
    explain_en: "REAL ID-compliant licenses are required to board domestic flights and access certain federal facilities (e.g., military bases). They require additional identity documentation when applying.",
    explain_it: "Le patenti conformi al REAL ID sono richieste per imbarcarsi su voli nazionali e accedere a determinate strutture federali (es. basi militari). Richiedono documentazione aggiuntiva."
  },
  {
    cat: "license",
    en: "A 'hardship license' in Florida allows:",
    it: "Una 'licenza di necessità' in Florida consente:",
    options: [
      { en: "Full driving privileges despite a suspension", it: "Pieni privilegi di guida nonostante una sospensione" },
      { en: "Limited driving for essential purposes (work, school, medical) during a suspension", it: "Guida limitata per scopi essenziali (lavoro, scuola, medici) durante una sospensione" },
      { en: "Driving only with a licensed adult in the vehicle", it: "Guida solo con un adulto con patente nel veicolo" },
      { en: "Commercial driving only", it: "Solo la guida commerciale" }
    ],
    correct: 1,
    explain_en: "A hardship (Business Purposes Only or Employment Purposes Only) license allows limited driving for essential purposes during a suspension period.",
    explain_it: "Una licenza di necessità (Solo per Scopi Lavorativi) consente una guida limitata per scopi essenziali durante un periodo di sospensione."
  },
  {
    cat: "license",
    en: "A moving violation that causes a crash in Florida adds how many points?",
    it: "Una violazione in movimento che causa un incidente in Florida aggiunge quanti punti?",
    options: [
      { en: "2 points", it: "2 punti" },
      { en: "4 points", it: "4 punti" },
      { en: "6 points", it: "6 punti" },
      { en: "8 points", it: "8 punti" }
    ],
    correct: 2,
    explain_en: "A moving violation that results in a crash adds 6 points to your Florida driving record.",
    explain_it: "Una violazione in movimento che causa un incidente aggiunge 6 punti al tuo casellario di guida in Florida."
  },
  {
    cat: "license",
    en: "In Florida, if you are 80 years or older, how often must you renew your license?",
    it: "In Florida, se hai 80 anni o più, con quale frequenza devi rinnovare la patente?",
    options: [
      { en: "Every 2 years", it: "Ogni 2 anni" },
      { en: "Every 4 years", it: "Ogni 4 anni" },
      { en: "Every 6 years", it: "Ogni 6 anni" },
      { en: "Every 8 years — same as everyone else", it: "Ogni 8 anni — come tutti gli altri" }
    ],
    correct: 2,
    explain_en: "Drivers aged 80 or older in Florida must renew their license every 6 years instead of the standard 8 years.",
    explain_it: "I conducenti di 80 anni o più in Florida devono rinnovare la patente ogni 6 anni invece degli standard 8 anni."
  },
  {
    cat: "license",
    en: "What is 'uninsured motorist' (UM) coverage and is it required in Florida?",
    it: "Cos'è la copertura per 'veicoli non assicurati' (UM) ed è obbligatoria in Florida?",
    options: [
      { en: "Required — all Florida drivers must have it", it: "Obbligatoria — tutti i conducenti in Florida devono averla" },
      { en: "Optional — protects you when hit by a driver with no or insufficient insurance", it: "Facoltativa — ti protegge quando sei colpito da un conducente senza assicurazione o con copertura insufficiente" },
      { en: "Required only for commercial vehicles", it: "Obbligatoria solo per i veicoli commerciali" },
      { en: "Not available in Florida", it: "Non disponibile in Florida" }
    ],
    correct: 1,
    explain_en: "UM coverage is optional in Florida but highly recommended — it protects you if you're hit by an uninsured or underinsured driver. PIP alone may not cover all costs.",
    explain_it: "La copertura UM è facoltativa in Florida ma altamente raccomandata — ti protegge se sei colpito da un conducente non assicurato o sottassicurato. Solo il PIP potrebbe non coprire tutti i costi."
  },
  {
    cat: "license",
    en: "Passing a school bus with its stop arm extended is worth how many points in Florida?",
    it: "Superare uno scuolabus con il braccio di stop esteso vale quanti punti in Florida?",
    options: [
      { en: "2 points", it: "2 punti" },
      { en: "3 points", it: "3 punti" },
      { en: "4 points", it: "4 punti" },
      { en: "6 points", it: "6 punti" }
    ],
    correct: 2,
    explain_en: "Unlawfully passing a school bus with its stop arm extended adds 4 points to your Florida driving record and carries heavy fines.",
    explain_it: "Superare illegalmente uno scuolabus con il braccio di stop esteso aggiunge 4 punti al tuo casellario di guida in Florida e comporta pesanti sanzioni."
  }




  // ══ SESSION 2 — SIGNS +30 ════════════════════════════════════
  {cat:"signs",en:"What does a 'No Parking' sign mean?",it:"Cosa significa un segnale 'No Parking'?",options:[{en:"You may stop briefly to drop off passengers",it:"Puoi fermarti brevemente per far scendere i passeggeri"},{en:"You may not park or leave your vehicle unattended",it:"Non puoi parcheggiare né lasciare il veicolo incustodito"},{en:"Parking allowed between 9 AM and 5 PM",it:"Parcheggio consentito tra le 9:00 e le 17:00"},{en:"Parking is limited to 15 minutes",it:"Parcheggio limitato a 15 minuti"}],correct:1,explain_en:"A No Parking sign means you cannot park or leave your vehicle unattended. You may briefly stop to load/unload passengers.",explain_it:"Un segnale No Parking significa che non puoi parcheggiare né lasciare il veicolo incustodito. Puoi fermarti brevemente per far salire/scendere i passeggeri."},
  {cat:"signs",en:"A 'No Standing' sign means:",it:"Un segnale 'No Standing' significa:",options:[{en:"Parking allowed up to 5 minutes",it:"Parcheggio consentito fino a 5 minuti"},{en:"You may only stop momentarily to pick up or discharge passengers",it:"Puoi fermarti solo momentaneamente per far salire o scendere i passeggeri"},{en:"No stopping allowed at any time",it:"Nessuna fermata consentita in qualsiasi momento"},{en:"Only commercial vehicles may stop here",it:"Solo veicoli commerciali possono fermarsi qui"}],correct:1,explain_en:"No Standing is more restrictive than No Parking — you may only stop momentarily to pick up/discharge passengers.",explain_it:"No Standing è più restrittivo di No Parking — puoi fermarti solo momentaneamente per far salire/scendere i passeggeri."},
  {cat:"signs",en:"A 'No Stopping' sign means:",it:"Un segnale 'No Stopping' significa:",options:[{en:"You may not stop for any reason",it:"Non puoi fermarti per nessun motivo"},{en:"You may stop only in an emergency",it:"Puoi fermarti solo in caso di emergenza"},{en:"You may not park but can stop briefly",it:"Non puoi parcheggiare ma puoi fermarti brevemente"},{en:"Only buses may stop here",it:"Solo gli autobus possono fermarsi qui"}],correct:0,explain_en:"No Stopping is the most restrictive — you may not stop for any reason except to comply with a traffic device or officer.",explain_it:"No Stopping è il più restrittivo — non puoi fermarti per nessun motivo tranne che per rispettare un segnale o le indicazioni di un agente."},
  {cat:"signs",en:"What does a pedestrian crossing warning sign look like?",it:"Come appare un segnale di avvertimento per attraversamento pedonale?",options:[{en:"A white rectangle with the word WALK",it:"Un rettangolo bianco con la parola WALK"},{en:"A yellow diamond with a walking figure",it:"Un rombo giallo con una figura che cammina"},{en:"A green circle with an arrow",it:"Un cerchio verde con una freccia"},{en:"A red octagon with a figure",it:"Un ottagono rosso con una figura"}],correct:1,explain_en:"Pedestrian crossing warning signs are yellow diamond-shaped with a walking figure.",explain_it:"I segnali di avvertimento per l'attraversamento pedonale sono a rombo giallo con una figura che cammina."},
  {cat:"signs",en:"A 'Divided Highway Begins' sign means:",it:"Un segnale 'Divided Highway Begins' significa:",options:[{en:"The road becomes one-way",it:"La strada diventa a senso unico"},{en:"A median or barrier is about to divide opposing lanes",it:"Una mediana o barriera sta per dividere le corsie opposte"},{en:"The highway ends ahead",it:"L'autostrada finisce in avanti"},{en:"A passing lane begins",it:"Inizia una corsia di sorpasso"}],correct:1,explain_en:"Divided Highway Begins warns that a median or barrier is about to separate opposing lanes of traffic.",explain_it:"Divided Highway Begins avverte che una mediana o barriera sta per separare le corsie di traffico opposte."},
  {cat:"signs",en:"A 'Divided Highway Ends' sign means:",it:"Un segnale 'Divided Highway Ends' significa:",options:[{en:"Traffic must stop ahead",it:"Il traffico deve fermarsi in avanti"},{en:"The dividing median ends — two-way traffic resumes",it:"La mediana divisoria finisce — riprende il traffico bidirezionale"},{en:"Speed limit increases ahead",it:"Il limite di velocità aumenta in avanti"},{en:"The highway becomes one-way",it:"L'autostrada diventa a senso unico"}],correct:1,explain_en:"Divided Highway Ends means the median is ending and you will share the road with oncoming traffic. Stay right.",explain_it:"Divided Highway Ends significa che la mediana sta finendo e condividerai la strada con il traffico in arrivo. Tieniti a destra."},
  {cat:"signs",en:"What does a 'Slippery When Wet' sign look like?",it:"Come appare un segnale 'Slippery When Wet'?",options:[{en:"A blue rectangle with water droplets",it:"Un rettangolo blu con gocce d'acqua"},{en:"A yellow diamond showing a skidding car",it:"Un rombo giallo con un'auto in slittamento"},{en:"An orange triangle with wavy lines",it:"Un triangolo arancione con linee ondulate"},{en:"A white rectangle with the word WET",it:"Un rettangolo bianco con la parola WET"}],correct:1,explain_en:"Slippery When Wet is a yellow diamond with a skidding car. It warns that the road is especially slippery when wet.",explain_it:"Slippery When Wet è un rombo giallo con un'auto in slittamento. Avverte che la strada è particolarmente scivolosa quando bagnata."},
  {cat:"signs",en:"A 'Two-Way Traffic' sign warns:",it:"Un segnale 'Two-Way Traffic' avverte:",options:[{en:"The road is becoming a divided highway",it:"La strada sta diventando un'autostrada divisa"},{en:"You are leaving a one-way road — two-way traffic ahead",it:"Stai lasciando una strada a senso unico — traffico bidirezionale in avanti"},{en:"Two lanes are merging ahead",it:"Due corsie si uniscono in avanti"},{en:"Passing allowed in both directions",it:"Il sorpasso è consentito in entrambe le direzioni"}],correct:1,explain_en:"Two-Way Traffic warns that you are transitioning from a one-way road to a two-way section. Stay right.",explain_it:"Two-Way Traffic avverte che stai passando da una strada a senso unico a una sezione bidirezionale. Tieniti a destra."},
  {cat:"signs",en:"A 'Winding Road' sign means:",it:"Un segnale 'Winding Road' significa:",options:[{en:"The road ends in a sharp curve",it:"La strada finisce in una curva brusca"},{en:"A series of curves lies ahead",it:"Una serie di curve è in avanti"},{en:"Passing is allowed on the curves",it:"Il sorpasso è consentito nelle curve"},{en:"The road narrows to one lane",it:"La strada si restringe a una corsia"}],correct:1,explain_en:"A winding road sign warns of multiple curves ahead. Reduce speed and be prepared for turns in both directions.",explain_it:"Un segnale di strada tortuosa avverte di curve multiple in avanti. Riduci la velocità e preparati per svolte in entrambe le direzioni."},
  {cat:"signs",en:"A curved arrow on a yellow diamond means:",it:"Una freccia curva su un rombo giallo significa:",options:[{en:"Merge ahead",it:"Confluenza in avanti"},{en:"A sharp curve in the direction shown is ahead",it:"Una curva brusca nella direzione indicata è in avanti"},{en:"Right turn only",it:"Solo svolta a destra"},{en:"Road ends — turn",it:"La strada finisce — girare"}],correct:1,explain_en:"A curved arrow on a yellow diamond warns of a sharp curve in that direction. Reduce speed before entering.",explain_it:"Una freccia curva su un rombo giallo avverte di una curva brusca in quella direzione. Riduci la velocità prima di entrare."},
  {cat:"signs",en:"What does a 'Deer Crossing' sign indicate?",it:"Cosa indica un segnale 'Deer Crossing'?",options:[{en:"Hunting is permitted here",it:"La caccia è consentita qui"},{en:"Animals frequently cross — watch for wildlife",it:"Gli animali attraversano frequentemente — attenzione alla fauna"},{en:"Deer farm area — slow down",it:"Area di allevamento cervi — rallentare"},{en:"No animals allowed on the road",it:"Nessun animale consentito sulla strada"}],correct:1,explain_en:"Deer crossing signs warn that animals cross frequently. Be especially alert at dawn and dusk.",explain_it:"I segnali di attraversamento cervi avvertono che gli animali attraversano frequentemente. Sii particolarmente vigile all'alba e al tramonto."},
  {cat:"signs",en:"A 'Dip' sign warns of:",it:"Un segnale 'Dip' avverte di:",options:[{en:"A low point in the road surface",it:"Un punto basso nella superficie stradale"},{en:"A bridge weight limit",it:"Un limite di peso su un ponte"},{en:"Road construction machinery",it:"Macchinari di costruzione"},{en:"A railroad crossing",it:"Un passaggio a livello"}],correct:0,explain_en:"A Dip sign warns of a low valley in the road that may cause the vehicle to bounce. Reduce speed.",explain_it:"Un segnale Dip avverte di un avvallamento nella strada che può far rimbalzare il veicolo. Riduci la velocità."},
  {cat:"signs",en:"A 'Narrow Bridge' sign indicates:",it:"Un segnale 'Narrow Bridge' indica:",options:[{en:"The bridge is closed to heavy vehicles",it:"Il ponte è chiuso ai veicoli pesanti"},{en:"The bridge ahead is narrower than the road",it:"Il ponte in avanti è più stretto della strada"},{en:"No passing lane on the bridge",it:"Nessuna corsia di sorpasso sul ponte"},{en:"The bridge has a weight limit",it:"Il ponte ha un limite di peso"}],correct:1,explain_en:"Narrow Bridge warns that the bridge is narrower than the approaching road. Reduce speed and watch for oncoming vehicles.",explain_it:"Narrow Bridge avverte che il ponte è più stretto della strada. Riduci la velocità e fai attenzione ai veicoli in arrivo."},
  {cat:"signs",en:"What does a 'Low Clearance' sign indicate?",it:"Cosa indica un segnale 'Low Clearance'?",options:[{en:"The road surface is low — flooding risk",it:"La superficie stradale è bassa — rischio inondazioni"},{en:"An overhead structure has limited vertical clearance",it:"Una struttura sopraelevata ha un'altezza libera limitata"},{en:"Speed limit is lowered ahead",it:"Il limite di velocità si riduce in avanti"},{en:"Lane width narrows",it:"La larghezza della corsia si restringe"}],correct:1,explain_en:"Low Clearance signs state the maximum height vehicles can pass under a bridge or overpass.",explain_it:"I segnali Low Clearance indicano l'altezza massima dei veicoli che possono passare sotto un ponte o sovrappasso."},
  {cat:"signs",en:"Fluorescent yellow-green signs are used specifically for:",it:"I segnali giallo-verde fluorescenti sono usati specificamente per:",options:[{en:"Construction zones",it:"Zone di costruzione"},{en:"School zones and pedestrian crossings",it:"Zone scolastiche e attraversamenti pedonali"},{en:"Railroad crossings",it:"Passaggi a livello"},{en:"Highway guide information",it:"Informazioni guida autostradale"}],correct:1,explain_en:"Fluorescent yellow-green is used for school zone and pedestrian warning signs — highest visibility of any sign color.",explain_it:"Il giallo-verde fluorescente è usato per i segnali delle zone scolastiche e di avvertimento pedonale — massima visibilità."},
  {cat:"signs",en:"What color are temporary traffic control signs in construction zones?",it:"Di che colore sono i segnali temporanei nelle zone di lavori?",options:[{en:"Yellow",it:"Giallo"},{en:"Orange",it:"Arancione"},{en:"Red",it:"Rosso"},{en:"White",it:"Bianco"}],correct:1,explain_en:"Orange is the color for temporary traffic control signs in construction and maintenance zones. Fines are doubled.",explain_it:"L'arancione è il colore per i segnali temporanei nelle zone di lavori. Le multe sono raddoppiate."},
  {cat:"signs",en:"What is the shape of a railroad advance warning sign?",it:"Qual è la forma di un segnale anticipato di avvertimento ferroviario?",options:[{en:"Yellow diamond",it:"Rombo giallo"},{en:"Yellow circle",it:"Cerchio giallo"},{en:"White rectangle",it:"Rettangolo bianco"},{en:"Yellow-green pentagon",it:"Pentagono giallo-verde"}],correct:1,explain_en:"The railroad advance warning sign is uniquely circular and yellow with an X and RR. The only circular yellow warning sign.",explain_it:"Il segnale anticipato ferroviario è unicamente circolare e giallo con una X e RR. È l'unico segnale di avvertimento circolare giallo."},
  {cat:"signs",en:"A sign with a bicycle symbol inside a red-slash circle means:",it:"Un segnale con un simbolo di bicicletta in un cerchio rosso barrato significa:",options:[{en:"Bicycle lane ahead",it:"Pista ciclabile in avanti"},{en:"Bicycles are prohibited",it:"Le biciclette sono vietate"},{en:"Bicycle repair station ahead",it:"Stazione di riparazione biciclette"},{en:"Share the road with cyclists",it:"Condividi la strada con i ciclisti"}],correct:1,explain_en:"Any symbol inside a circle with a red diagonal slash means that activity is prohibited. Bicycle + red slash = no bicycles.",explain_it:"Qualsiasi simbolo in un cerchio con barra rossa diagonale significa divieto. Bicicletta + barra rossa = biciclette vietate."},
  {cat:"signs",en:"What does a 'Yield Ahead' warning sign look like?",it:"Come appare un segnale 'Yield Ahead'?",options:[{en:"Yellow diamond with YIELD text",it:"Rombo giallo con testo YIELD"},{en:"Yellow downward-pointing triangle",it:"Triangolo giallo con punta verso il basso"},{en:"White rectangle with YIELD in red",it:"Rettangolo bianco con YIELD in rosso"},{en:"Red inverted triangle",it:"Triangolo rovesciato rosso"}],correct:1,explain_en:"The Yield Ahead warning sign is a yellow downward-pointing triangle, giving advance notice of a yield sign.",explain_it:"Il segnale Yield Ahead è un triangolo giallo con la punta verso il basso, che avvisa in anticipo di un segnale di precedenza."},
  {cat:"signs",en:"What is a 'Chevron' sign used for?",it:"A cosa serve un segnale 'Chevron'?",options:[{en:"Marking road edges on straight sections",it:"Segnare i bordi della strada nelle sezioni dritte"},{en:"Indicating the direction of a sharp curve",it:"Indicare la direzione di una curva brusca"},{en:"Marking construction zone boundaries",it:"Segnare i confini delle zone di costruzione"},{en:"Showing permitted passing areas",it:"Mostrare le aree di sorpasso consentite"}],correct:1,explain_en:"Chevron alignment signs (black chevron on yellow/orange) are placed on the outside of sharp curves to guide drivers.",explain_it:"I segnali a chevron (chevron nero su giallo/arancione) sono posizionati all'esterno delle curve brusche per guidare i conducenti."},
  {cat:"signs",en:"A 'Soft Shoulder' sign means:",it:"Un segnale 'Soft Shoulder' significa:",options:[{en:"The road surface is soft — avoid driving",it:"La superficie stradale è morbida — evitare di guidare"},{en:"The roadside shoulder is unpaved or unstable",it:"La banchina laterale non è asfaltata o è instabile"},{en:"Emergency stopping only",it:"Solo fermate di emergenza"},{en:"Shoulder parking permitted",it:"Parcheggio sulla banchina consentito"}],correct:1,explain_en:"Soft Shoulder means the roadside shoulder is unpaved or may not support a vehicle's weight. Avoid driving on it.",explain_it:"Soft Shoulder significa che la banchina non è asfaltata o potrebbe non supportare il peso di un veicolo. Evita di guidarci sopra."},
  {cat:"signs",en:"What does an interstate highway shield sign show?",it:"Cosa mostra un segnale scudo di autostrada interstatale?",options:[{en:"Distance to the next state",it:"Distanza dal prossimo stato"},{en:"The route number of the interstate",it:"Il numero del percorso dell'autostrada interstatale"},{en:"The speed limit",it:"Il limite di velocità"},{en:"The toll amount",it:"L'importo del pedaggio"}],correct:1,explain_en:"Interstate shield signs display the route number. Odd = north-south; even = east-west.",explain_it:"I segnali scudo interstatale mostrano il numero del percorso. Dispari = nord-sud; pari = est-ovest."},
  {cat:"signs",en:"A hill grade sign (showing a percentage) means:",it:"Un segnale di pendenza (con percentuale) significa:",options:[{en:"Trucks must stop and check brakes",it:"I camion devono fermarsi e controllare i freni"},{en:"A steep grade ahead — use lower gears, check brakes",it:"Una pendenza ripida in avanti — usa marce basse, controlla i freni"},{en:"Speed limit increases on the downhill",it:"Il limite di velocità aumenta in discesa"},{en:"Bicycles must dismount",it:"I ciclisti devono smontare"}],correct:1,explain_en:"Hill grade signs warn of a steep descent. Use lower gears to avoid overheating brakes.",explain_it:"I segnali di pendenza avvertono di una discesa ripida. Usa marce basse per evitare il surriscaldamento dei freni."},
  {cat:"signs",en:"A 'Traffic Signal Ahead' sign is used when:",it:"Un segnale 'Traffic Signal Ahead' viene usato quando:",options:[{en:"Every signal must be preceded by this sign",it:"Ogni semaforo deve essere preceduto da questo segnale"},{en:"A signal may be hard to see in time to stop",it:"Un semaforo potrebbe essere difficile da vedere in tempo per fermarsi"},{en:"The upcoming signal is always red",it:"Il semaforo in avanti è sempre rosso"},{en:"This sign marks school signals only",it:"Questo segnale indica solo i semafori scolastici"}],correct:1,explain_en:"Traffic Signal Ahead signs warn where a signal may be hard to see — on a curve or after a hill.",explain_it:"I segnali Traffic Signal Ahead vengono posti dove un semaforo potrebbe essere difficile da vedere — in curva o dopo una salita."},
  {cat:"signs",en:"A 'No Trucks' sign looks like:",it:"Un segnale 'No Trucks' appare come:",options:[{en:"A yellow diamond with a truck",it:"Un rombo giallo con un camion"},{en:"A white circle with a truck and a red slash",it:"Un cerchio bianco con un camion e una barra rossa"},{en:"A brown rectangle with a truck",it:"Un rettangolo marrone con un camion"},{en:"A red octagon with a truck",it:"Un ottagono rosso con un camion"}],correct:1,explain_en:"Prohibition signs use a white circle with a red diagonal slash. Truck + red slash = no trucks.",explain_it:"I segnali di divieto usano un cerchio bianco con barra rossa diagonale. Camion + barra rossa = camion vietati."},
  {cat:"signs",en:"A two opposing-arrows diamond sign means:",it:"Un segnale a rombo con due frecce opposte significa:",options:[{en:"Two-way traffic ahead",it:"Traffico bidirezionale in avanti"},{en:"Divided highway ahead",it:"Autostrada divisa in avanti"},{en:"Passing lane begins",it:"Inizia una corsia di sorpasso"},{en:"Road narrows to one lane",it:"La strada si restringe a una corsia"}],correct:0,explain_en:"A diamond with two opposing arrows warns of two-way traffic ahead after a one-way section.",explain_it:"Un rombo con due frecce opposte avverte di traffico bidirezionale in avanti dopo una sezione a senso unico."},
  {cat:"signs",en:"A 'Speed Limit Ahead' sign means:",it:"Un segnale 'Speed Limit Ahead' significa:",options:[{en:"Current speed limit continues",it:"Il limite di velocità corrente continua"},{en:"A new speed limit will take effect — begin adjusting",it:"Un nuovo limite entrerà in vigore — inizia ad adeguare la velocità"},{en:"Speed limit is temporarily removed",it:"Il limite è temporaneamente rimosso"},{en:"Advisory speed for a curve",it:"Velocità consigliata per una curva"}],correct:1,explain_en:"Speed Limit Ahead gives advance notice of an upcoming speed change so drivers can adjust.",explain_it:"Speed Limit Ahead dà avviso anticipato di un cambio di velocità imminente così i conducenti possono adeguarsi."},
  {cat:"signs",en:"A 'School Bus Stop Ahead' sign means:",it:"Un segnale 'School Bus Stop Ahead' significa:",options:[{en:"A school zone begins",it:"Inizia una zona scolastica"},{en:"Be prepared to stop — school buses may be loading/unloading children",it:"Preparati a fermarti — gli scuolabus potrebbero caricare/scaricare bambini"},{en:"No passing for the next mile",it:"Nessun sorpasso per il prossimo miglio"},{en:"Reduce speed to 15 mph",it:"Ridurre la velocità a 15 mph"}],correct:1,explain_en:"School Bus Stop Ahead warns drivers to be prepared to stop for a loading/unloading school bus.",explain_it:"School Bus Stop Ahead avverte i conducenti di prepararsi a fermarsi per uno scuolabus che carica/scarica."},
  {cat:"signs",en:"Advisory speed signs (yellow plaques below speed limit signs) are:",it:"I segnali di velocità consigliata (targhe gialle sotto i segnali di limite) sono:",options:[{en:"Legally enforceable minimum speeds",it:"Velocità minime legalmente applicabili"},{en:"Recommended safe speeds for a curve or condition — not legally binding",it:"Velocità sicure consigliate per una curva o condizione — non vincolanti legalmente"},{en:"School zone speed limits",it:"Limiti di velocità delle zone scolastiche"},{en:"Night-only speed limits",it:"Limiti solo notturni"}],correct:1,explain_en:"Advisory speed signs show recommended safe speeds for specific curves or conditions. Not legally enforceable but ignoring them raises crash risk.",explain_it:"I segnali di velocità consigliata mostrano velocità sicure per curve o condizioni specifiche. Non legalmente vincolanti ma ignorarli aumenta il rischio."},
  {cat:"signs",en:"A sign with a truck and wavy lines underneath means:",it:"Un segnale con un camion e linee ondulate sotto significa:",options:[{en:"Trucks must use right lane",it:"I camion devono usare la corsia destra"},{en:"Road condition is dangerous for high-profile vehicles",it:"Le condizioni stradali sono pericolose per i veicoli alti"},{en:"No trucks allowed",it:"Camion non consentiti"},{en:"Truck weigh station ahead",it:"Stazione di pesatura in avanti"}],correct:1,explain_en:"This sign warns of a condition (sharp curve, crosswinds) particularly dangerous for high-profile vehicles like trucks.",explain_it:"Questo segnale avverte di una condizione particolarmente pericolosa per i veicoli alti come i camion."},


  // ══ SESSION 2 — LAWS +50 ═════════════════════════════════════
  {cat:"laws",en:"Florida's default speed limit on unpaved roads is:",it:"Il limite predefinito in Florida sulle strade non asfaltate è:",options:[{en:"25 mph",it:"25 mph"},{en:"35 mph",it:"35 mph"},{en:"45 mph",it:"45 mph"},{en:"55 mph",it:"55 mph"}],correct:0,explain_en:"Florida sets a 25 mph default on unpaved roads unless otherwise posted.",explain_it:"La Florida fissa 25 mph di default sulle strade non asfaltate salvo diversa indicazione."},
  {cat:"laws",en:"Speed limit in a Florida municipal park is:",it:"Il limite di velocità in un parco municipale in Florida è:",options:[{en:"10 mph",it:"10 mph"},{en:"15 mph",it:"15 mph"},{en:"20 mph",it:"20 mph"},{en:"25 mph",it:"25 mph"}],correct:1,explain_en:"The default speed limit in a municipal park is 15 mph in Florida unless otherwise posted.",explain_it:"Il limite predefinito in un parco municipale è 15 mph in Florida salvo diversa indicazione."},
  {cat:"laws",en:"When is it legal to exceed the posted speed limit in Florida?",it:"Quando è legale superare il limite segnalato in Florida?",options:[{en:"When passing another vehicle",it:"Quando si sorpassa un altro veicolo"},{en:"When keeping up with traffic flow",it:"Quando si mantiene il flusso del traffico"},{en:"Never — posted limits are the maximum allowed",it:"Mai — i limiti segnalati sono il massimo consentito"},{en:"On highways with no traffic",it:"In autostrada senza traffico"}],correct:2,explain_en:"Posted speed limits are always the maximum. Driving above them is illegal even to pass or keep up with traffic.",explain_it:"I limiti segnalati sono sempre il massimo. Superarli è sempre illegale anche per sorpassare o mantenere il flusso."},
  {cat:"laws",en:"You must always obey a traffic control officer even if their instructions conflict with:",it:"Devi sempre obbedire a un agente di controllo anche se le sue istruzioni confliggono con:",options:[{en:"The law",it:"La legge"},{en:"Traffic signs and signals",it:"Segnali stradali e semafori"},{en:"GPS instructions",it:"Le istruzioni del GPS"},{en:"Your employer's instructions",it:"Le istruzioni del datore di lavoro"}],correct:1,explain_en:"A traffic officer's directions take precedence over traffic signals and signs.",explain_it:"Le indicazioni di un agente hanno la precedenza sui segnali stradali e i semafori."},
  {cat:"laws",en:"Florida requires headlights from sunset to sunrise AND:",it:"La Florida richiede i fari dal tramonto all'alba E:",options:[{en:"Only when fog is present",it:"Solo quando c'è nebbia"},{en:"Any time wipers are in continuous use",it:"Ogni volta che i tergicristalli sono in uso continuo"},{en:"Only on highways",it:"Solo in autostrada"},{en:"Only in school zones",it:"Solo nelle zone scolastiche"}],correct:1,explain_en:"Florida requires headlights from sunset to sunrise AND any time windshield wipers are in continuous use.",explain_it:"La Florida richiede i fari dal tramonto all'alba E ogni volta che i tergicristalli sono in uso continuo."},
  {cat:"laws",en:"Parking on a sidewalk in Florida is:",it:"Parcheggiare su un marciapiede in Florida è:",options:[{en:"Allowed if it doesn't block pedestrians",it:"Consentito se non blocca i pedoni"},{en:"Always prohibited",it:"Sempre vietato"},{en:"Allowed up to 15 minutes",it:"Consentito fino a 15 minuti"},{en:"Allowed for motorcycles only",it:"Consentito solo per le motociclette"}],correct:1,explain_en:"Parking on a sidewalk is always prohibited. Sidewalks must remain unobstructed for pedestrians.",explain_it:"Parcheggiare su un marciapiede è sempre vietato. I marciapiedi devono rimanere liberi per i pedoni."},
  {cat:"laws",en:"You must not park within how many feet of a crosswalk at an intersection?",it:"Non puoi parcheggiare entro quanti piedi da un passaggio pedonale a un incrocio?",options:[{en:"10 feet",it:"10 piedi"},{en:"15 feet",it:"15 piedi"},{en:"20 feet",it:"20 piedi"},{en:"30 feet",it:"30 piedi"}],correct:2,explain_en:"You may not park within 20 feet of a crosswalk. This ensures visibility for pedestrians and drivers.",explain_it:"Non puoi parcheggiare entro 20 piedi (6 m) da un passaggio pedonale. Garantisce la visibilità."},
  {cat:"laws",en:"The 'basic speed rule' in Florida means:",it:"La 'regola di velocità di base' in Florida significa:",options:[{en:"Always drive at exactly the posted limit",it:"Guida sempre esattamente al limite segnalato"},{en:"Never drive faster than safe for current conditions",it:"Non guidare mai più veloce di quanto sicuro per le condizioni attuali"},{en:"The posted limit applies with no exceptions",it:"Il limite segnalato si applica senza eccezioni"},{en:"Drive 5 mph below the limit always",it:"Guida sempre 5 mph sotto il limite"}],correct:1,explain_en:"Florida's basic speed rule: drive at a speed reasonable and prudent for current conditions — even below the posted limit.",explain_it:"La regola di velocità di base: guida a una velocità ragionevole per le condizioni attuali — anche sotto il limite segnalato."},
  {cat:"laws",en:"In Florida, a properly escorted funeral procession:",it:"In Florida, un corteo funebre con scorta adeguata:",options:[{en:"Must obey all traffic signals",it:"Deve rispettare tutti i segnali"},{en:"Has right-of-way through intersections as a unit",it:"Ha la precedenza agli incroci come un'unità"},{en:"Has no special rights",it:"Non ha diritti speciali"},{en:"May only travel on roads with no traffic signals",it:"Può percorrere solo strade senza semafori"}],correct:1,explain_en:"A properly escorted funeral procession has right-of-way at intersections. Don't cut into a procession.",explain_it:"Un corteo funebre con scorta adeguata ha la precedenza agli incroci. Non tagliare un corteo."},
  {cat:"laws",en:"On an undivided two-lane road, when a school bus has its stop arm extended, ALL traffic must:",it:"Su una strada a due corsie non divisa con lo scuolabus e il braccio di stop esteso, TUTTO il traffico deve:",options:[{en:"Slow to 15 mph",it:"Rallentare a 15 mph"},{en:"Stop — both directions",it:"Fermarsi — in entrambe le direzioni"},{en:"Yield but not stop",it:"Cedere ma non fermarsi"},{en:"Stop only if children are crossing",it:"Fermarsi solo se i bambini attraversano"}],correct:1,explain_en:"On any undivided two-lane road, ALL traffic in BOTH directions must stop for a school bus with red lights and stop arm.",explain_it:"Su qualsiasi strada a due corsie non divisa, TUTTO il traffico in ENTRAMBE le direzioni deve fermarsi per lo scuolabus."},
  {cat:"laws",en:"In Florida you may only drive in a center left-turn lane when:",it:"In Florida puoi guidare nella corsia centrale di svolta sinistra solo quando:",options:[{en:"You want to avoid slow traffic",it:"Vuoi evitare il traffico lento"},{en:"Preparing for or completing a left turn",it:"Ti prepari o completi una svolta a sinistra"},{en:"Passing a stopped vehicle",it:"Sorpassi un veicolo fermo"},{en:"Emergency vehicles only",it:"Solo veicoli di emergenza"}],correct:1,explain_en:"Center left-turn lanes may only be used to prepare for or complete a left turn. They are not travel lanes.",explain_it:"Le corsie centrali di svolta sinistra possono essere usate solo per prepararsi o completare una svolta a sinistra."},
  {cat:"laws",en:"Florida's '3-Foot Rule' requires maintaining how much clearance when passing a bicycle?",it:"La 'Regola dei 3 Piedi' della Florida richiede quanto spazio quando si sorpassa una bicicletta?",options:[{en:"1 foot",it:"1 piede"},{en:"2 feet",it:"2 piedi"},{en:"3 feet",it:"3 piedi"},{en:"5 feet",it:"5 piedi"}],correct:2,explain_en:"Florida's 3-Foot Rule requires at least 3 feet clearance when passing a bicycle. Change lanes if the road is too narrow.",explain_it:"La Regola dei 3 Piedi della Florida richiede almeno 90 cm di spazio quando si sorpassa una bicicletta."},
  {cat:"laws",en:"Bicyclists on Florida public roads must:",it:"I ciclisti sulle strade pubbliche della Florida devono:",options:[{en:"Always ride on the sidewalk",it:"Sempre andare sul marciapiede"},{en:"Obey the same traffic laws as motor vehicles",it:"Rispettare le stesse leggi dei veicoli a motore"},{en:"Have no legal requirements",it:"Non avere requisiti legali"},{en:"Only ride during daylight",it:"Andare in bicicletta solo di giorno"}],correct:1,explain_en:"Bicyclists on Florida public roads must follow all the same traffic laws as motor vehicle operators.",explain_it:"I ciclisti sulle strade pubbliche devono seguire tutte le stesse leggi dei conducenti di veicoli a motore."},
  {cat:"laws",en:"Florida requires cyclists under what age to wear a helmet?",it:"La Florida richiede ai ciclisti sotto quale età di indossare un casco?",options:[{en:"12",it:"12"},{en:"14",it:"14"},{en:"16",it:"16"},{en:"18",it:"18"}],correct:2,explain_en:"Florida law requires all cyclists under 16 to wear an approved bicycle helmet on public roads.",explain_it:"La legge della Florida richiede a tutti i ciclisti under 16 di indossare un casco approvato su strade pubbliche."},
  {cat:"laws",en:"Regarding flooded roadways in Florida, you should:",it:"Riguardo alle strade allagate in Florida, dovresti:",options:[{en:"Drive through slowly",it:"Attraversare lentamente"},{en:"Turn around — never drive through flooded roads",it:"Girare indietro — non guidare mai attraverso strade allagate"},{en:"Speed up to cross fast",it:"Accelerare per attraversare velocemente"},{en:"Flash lights and honk",it:"Lampeggiare e suonare"}],correct:1,explain_en:"'Turn Around, Don't Drown' — just 6 inches of water can knock a person down; 2 feet can float a car.",explain_it:"'Gira indietro, non annegare' — solo 15 cm d'acqua possono abbattere una persona; 60 cm possono far galleggiare un'auto."},
  {cat:"laws",en:"Riding in the cargo bed of a pickup truck on Florida public roads is:",it:"Viaggiare nel cassone di un pickup sulle strade pubbliche della Florida è:",options:[{en:"Legal for adults over 18",it:"Legale per gli adulti sopra i 18 anni"},{en:"Always illegal",it:"Sempre illegale"},{en:"Legal if holding on",it:"Legale se ci si tiene"},{en:"Legal at speeds under 35 mph",it:"Legale a velocità sotto 35 mph"}],correct:1,explain_en:"Florida prohibits any person from riding in the cargo bed of a pickup truck on public roads — always illegal.",explain_it:"La Florida vieta a qualsiasi persona di viaggiare nel cassone di un pickup su strade pubbliche — sempre illegale."},
  {cat:"laws",en:"A completely dark traffic signal (all lights out) must be treated as:",it:"Un semaforo completamente spento deve essere trattato come:",options:[{en:"A yield sign",it:"Un segnale di precedenza"},{en:"A four-way stop",it:"Un incrocio a quattro vie con stop"},{en:"An uncontrolled intersection",it:"Un incrocio non controllato"},{en:"Normal driving — signal is temporary",it:"Guida normale — il semaforo è temporaneo"}],correct:1,explain_en:"A completely dark signal = 4-way stop. All vehicles stop and yield in order of arrival.",explain_it:"Un semaforo completamente spento = incrocio a quattro via con stop. Tutti si fermano e cedono in ordine di arrivo."},
  {cat:"laws",en:"In Florida, U-turns in business districts are legal only:",it:"In Florida, le inversioni di marcia nei quartieri commerciali sono legali solo:",options:[{en:"Never",it:"Mai"},{en:"At intersections or median openings not prohibited by signs",it:"Agli incroci o aperture nelle mediane non vietate da segnali"},{en:"Anytime if no traffic is visible",it:"In qualsiasi momento se non è visibile traffico"},{en:"Only from alleys or driveways",it:"Solo da vicoli o vialetti"}],correct:1,explain_en:"In business districts, U-turns are only legal at intersections or median openings where not prohibited by signs.",explain_it:"Nei quartieri commerciali, le inversioni sono legali solo agli incroci o aperture nelle mediane dove non vietate."},
  {cat:"laws",en:"On a multi-lane highway in Florida, you should normally drive in:",it:"Su un'autostrada a più corsie in Florida, normalmente dovresti guidare:",options:[{en:"The left (fast) lane",it:"La corsia sinistra (veloce)"},{en:"The right lane unless passing or turning left",it:"La corsia destra a meno che non si stia sorpassando o svoltando a sinistra"},{en:"Any lane equally",it:"Qualsiasi corsia allo stesso modo"},{en:"The middle lane for safety",it:"La corsia centrale per sicurezza"}],correct:1,explain_en:"Florida law: stay in the right lane for normal travel. Use the left lane only for passing or turning left.",explain_it:"Legge della Florida: rimani nella corsia destra per la guida normale. Usa la sinistra solo per sorpassare o svoltare."},
  {cat:"laws",en:"What does Florida law require for turn signals when changing lanes?",it:"Cosa richiede la legge della Florida per i segnali di svolta quando si cambia corsia?",options:[{en:"Only on highways",it:"Solo in autostrada"},{en:"Always — on all roads before every lane change",it:"Sempre — su tutte le strade prima di ogni cambio di corsia"},{en:"Only when other vehicles are nearby",it:"Solo quando altri veicoli sono nelle vicinanze"},{en:"Only when turning, not lane changing",it:"Solo quando svolti, non quando cambi corsia"}],correct:1,explain_en:"Florida requires turn signals for every lane change and turn, on all roads, regardless of traffic presence.",explain_it:"La Florida richiede segnali di svolta per ogni cambio di corsia e svolta, su tutte le strade."},
  {cat:"laws",en:"Florida prohibits wearing headphones in both ears while driving because:",it:"La Florida vieta di indossare cuffie in entrambe le orecchie durante la guida perché:",options:[{en:"It is always legal",it:"È sempre legale"},{en:"It impairs the ability to hear sirens and traffic sounds",it:"Compromette la capacità di sentire sirene e rumori del traffico"},{en:"Only prohibited for CDL holders",it:"Vietato solo per i titolari CDL"},{en:"Only prohibited for teen drivers",it:"Vietato solo per i conducenti adolescenti"}],correct:1,explain_en:"Florida prohibits wearing a headset in both ears. One ear is permitted for hands-free communication.",explain_it:"La Florida vieta di indossare cuffie in entrambe le orecchie. Un orecchio è consentito per la comunicazione hands-free."},
  {cat:"laws",en:"You are a Florida resident and must get a Florida license if you:",it:"Sei residente in Florida e devi ottenere la patente Florida se:",options:[{en:"Visit for more than 30 days",it:"Visiti per più di 30 giorni"},{en:"Accept employment, register to vote, enroll children in school, or reside 6+ consecutive months",it:"Accetti lavoro, ti registri per votare, iscrivi figli a scuola o risiedi 6+ mesi consecutivi"},{en:"Own property in Florida",it:"Possiedi proprietà in Florida"},{en:"File a state tax return",it:"Presenti una dichiarazione fiscale statale"}],correct:1,explain_en:"You are a Florida resident if you accept employment, register to vote, enroll children in school, or reside 6+ consecutive months.",explain_it:"Sei residente in Florida se accetti lavoro, ti registri per votare, iscrivi figli a scuola o risiedi 6+ mesi consecutivi."},
  {cat:"laws",en:"Florida vehicles towing a trailer on a 3+ lane limited-access highway must stay out of:",it:"I veicoli che trainano un rimorchio su un'autostrada a 3+ corsie devono evitare:",options:[{en:"The right lane",it:"La corsia destra"},{en:"The far-left lane",it:"La corsia più a sinistra"},{en:"The center lane",it:"La corsia centrale"},{en:"Any lane — towing is prohibited",it:"Qualsiasi corsia — il traino è vietato"}],correct:1,explain_en:"Vehicles towing another vehicle or trailer are prohibited from using the far-left lane on 3+ lane limited-access highways.",explain_it:"I veicoli che trainano un rimorchio hanno il divieto di usare la corsia più a sinistra sulle autostrade a 3+ corsie."},
  {cat:"laws",en:"A yellow traffic light means you should:",it:"Un semaforo giallo significa che dovresti:",options:[{en:"Speed up to clear the intersection",it:"Accelerare per liberare l'incrocio"},{en:"Stop if safe to do so",it:"Fermarti se sicuro farlo"},{en:"Always stop",it:"Fermarti sempre"},{en:"Slow slightly and always continue",it:"Rallentare leggermente e continuare sempre"}],correct:1,explain_en:"Yellow means the signal is about to turn red. Stop if safe. If too close to stop safely, continue — but don't speed up.",explain_it:"Il giallo significa che il semaforo sta per diventare rosso. Fermati se sicuro. Se troppo vicino, continua — ma non accelerare."},
  {cat:"laws",en:"Florida's red light camera law allows:",it:"La legge delle telecamere per il rosso della Florida consente:",options:[{en:"Only police to issue red-light citations",it:"Solo alla polizia di emettere citazioni per il rosso"},{en:"Automated cameras to capture and issue citations for red-light violations",it:"Telecamere automatizzate di catturare ed emettere citazioni per le violazioni al rosso"},{en:"Red-light cameras are banned statewide",it:"Le telecamere per il rosso sono vietate in tutto lo stato"},{en:"Cameras record only — no fines",it:"Le telecamere registrano solo — nessuna multa"}],correct:1,explain_en:"Florida allows local governments to use automated red-light cameras. Fines apply to the registered vehicle owner.",explain_it:"La Florida consente l'uso di telecamere automatizzate per i semafori rossi. Le multe si applicano al proprietario registrato."},
  {cat:"laws",en:"School buses and vehicles transporting hazardous materials must stop at:",it:"Gli scuolabus e i veicoli con materiali pericolosi devono fermarsi a:",options:[{en:"Only active (signaling) crossings",it:"Solo i passaggi attivi (con segnali)"},{en:"ALL railroad crossings even if no train is present",it:"TUTTI i passaggi a livello anche se non c'è nessun treno"},{en:"Only crossings with gates",it:"Solo i passaggi con sbarre"},{en:"Crossings with flashing lights only",it:"Solo i passaggi con luci lampeggianti"}],correct:1,explain_en:"School buses and hazmat vehicles must stop at ALL railroad crossings, even without active signals.",explain_it:"Gli scuolabus e i veicoli con materiali pericolosi devono fermarsi a TUTTI i passaggi a livello, anche senza segnali attivi."},
  {cat:"laws",en:"Florida drivers must always carry:",it:"I conducenti in Florida devono sempre portare:",options:[{en:"Only vehicle registration",it:"Solo la registrazione del veicolo"},{en:"Driver's license, vehicle registration, and proof of insurance",it:"Patente, registrazione del veicolo e prova dell'assicurazione"},{en:"Only driver's license",it:"Solo la patente"},{en:"Passport, vehicle title, and insurance",it:"Passaporto, titolo del veicolo e assicurazione"}],correct:1,explain_en:"Florida requires: valid driver's license, current vehicle registration, and proof of insurance (PIP and PDL).",explain_it:"La Florida richiede: patente valida, registrazione del veicolo aggiornata e prova dell'assicurazione (PIP e PDL)."},
  {cat:"laws",en:"Who has right-of-way between a vehicle going straight and a vehicle turning?",it:"Chi ha la precedenza tra un veicolo che va dritto e uno che svolta?",options:[{en:"The turning vehicle",it:"Il veicolo che svolta"},{en:"The vehicle going straight",it:"Il veicolo che va dritto"},{en:"The first to reach the intersection",it:"Il primo a raggiungere l'incrocio"},{en:"The larger vehicle",it:"Il veicolo più grande"}],correct:1,explain_en:"A vehicle going straight always has right-of-way over a vehicle making a turn at the same intersection.",explain_it:"Un veicolo che va dritto ha sempre la precedenza su un veicolo che svolta allo stesso incrocio."},
  {cat:"laws",en:"Florida's minimum fine for illegally parking in a handicapped spot is:",it:"La multa minima della Florida per parcheggio illegale in spazio disabili è:",options:[{en:"$50",it:"$50"},{en:"$100",it:"$100"},{en:"$250",it:"$250"},{en:"$500",it:"$500"}],correct:2,explain_en:"Florida imposes a minimum $250 fine for illegally parking in a disabled parking space.",explain_it:"La Florida impone una multa minima di $250 per il parcheggio illegale in uno spazio per disabili."},
  {cat:"laws",en:"If you strike an unattended parked vehicle, Florida law requires you to:",it:"Se colpisci un veicolo parcheggiato incustodito, la legge della Florida richiede di:",options:[{en:"Leave only if damage is minor",it:"Andarsene solo se il danno è minore"},{en:"Leave a written note with your contact information",it:"Lasciare un biglietto scritto con le tue informazioni di contatto"},{en:"Call police and wait",it:"Chiamare la polizia e aspettare"},{en:"Take photos and send to insurance only",it:"Scattare foto e inviare solo all'assicurazione"}],correct:1,explain_en:"If you strike an unattended vehicle, locate the owner or leave a note with name, address, and registration.",explain_it:"Se colpisci un veicolo incustodito, rintraccia il proprietario o lascia un biglietto con nome, indirizzo e targa."},
  {cat:"laws",en:"Florida requires you to yield to pedestrians at crosswalks:",it:"La Florida richiede di cedere la precedenza ai pedoni ai passaggi pedonali:",options:[{en:"Only if marked with white lines",it:"Solo se segnalati con linee bianche"},{en:"At all crosswalks — marked or not",it:"A tutti i passaggi pedonali — segnalati o meno"},{en:"Only at signalized intersections",it:"Solo agli incroci semaforizzati"},{en:"Main road vehicles have priority over pedestrians",it:"I veicoli sulla strada principale hanno priorità sui pedoni"}],correct:1,explain_en:"Florida law requires yielding to pedestrians at all crosswalks — marked or unmarked. Every intersection corner is legally a crosswalk.",explain_it:"La legge della Florida richiede di cedere a tutti i passaggi pedonali — segnalati o meno. Ogni angolo di incrocio è legalmente un passaggio pedonale."},
  {cat:"laws",en:"When must you enter an intersection before it turns red?",it:"Quando devi entrare in un incrocio prima che diventi rosso?",options:[{en:"Whenever there is a green light",it:"Ogni volta che c'è il verde"},{en:"Only when you can completely clear it before the light changes",it:"Solo quando puoi liberarlo completamente prima che il semaforo cambi"},{en:"Always — green means go",it:"Sempre — il verde significa vai"},{en:"Stop briefly at every green light",it:"Fermarsi brevemente a ogni verde"}],correct:1,explain_en:"Only enter an intersection if you can clear it completely before cross-traffic gets a green. Blocking intersections is illegal.",explain_it:"Entra in un incrocio solo se puoi liberarlo completamente prima che il traffico trasversale riceva il verde. Bloccare è illegale."},
  {cat:"laws",en:"Florida's 'aggressive careless driving' is defined as:",it:"La 'guida aggressiva negligente' in Florida è definita come:",options:[{en:"Driving 10+ mph over the limit",it:"Guidare 10+ mph oltre il limite"},{en:"Three or more moving violations in one incident threatening others",it:"Tre o più violazioni in movimento in un singolo incidente che minacciano gli altri"},{en:"Passing on the right on a two-lane road",it:"Sorpassare a destra su una strada a due corsie"},{en:"Driving below the minimum speed",it:"Guidare sotto il limite minimo"}],correct:1,explain_en:"Aggressive careless driving: 3+ moving violations in a single incident that endangers others. Enhanced penalties apply.",explain_it:"Guida aggressiva negligente: 3+ violazioni in movimento in un singolo incidente che mette in pericolo gli altri. Penalità maggiorate."},
  {cat:"laws",en:"Lane splitting by motorcycles in Florida is:",it:"Il lane splitting delle motociclette in Florida è:",options:[{en:"Legal if traffic is stopped",it:"Legale se il traffico è fermo"},{en:"Legal under 30 mph",it:"Legale sotto i 30 mph"},{en:"Illegal — motorcycles must stay within a single lane",it:"Illegale — le motociclette devono rimanere all'interno di una singola corsia"},{en:"Legal only on highways",it:"Legale solo in autostrada"}],correct:2,explain_en:"Lane splitting is illegal in Florida. Motorcycles must occupy a full lane and follow the same rules as other vehicles.",explain_it:"Il lane splitting è illegale in Florida. Le motociclette devono occupare un'intera corsia e seguire le stesse regole."},
  {cat:"laws",en:"At a yield sign you must:",it:"A un segnale di precedenza devi:",options:[{en:"Always come to a full stop",it:"Sempre fare un arresto completo"},{en:"Slow and yield to conflicting traffic — stop only if necessary",it:"Rallentare e cedere al traffico in conflitto — fermarsi solo se necessario"},{en:"Maintain speed and yield only in heavy traffic",it:"Mantenere la velocità e cedere solo nel traffico intenso"},{en:"Flash headlights and proceed",it:"Lampeggiare i fari e procedere"}],correct:1,explain_en:"At a yield sign, slow and be prepared to stop. If clear, proceed without a full stop.",explain_it:"A un segnale di precedenza, rallenta e preparati a fermarti. Se libero, puoi procedere senza fermarti completamente."},
  {cat:"laws",en:"Florida drivers must remain in the right lane EXCEPT when:",it:"I conducenti in Florida devono rimanere nella corsia destra TRANNE quando:",options:[{en:"During rush hour",it:"Durante le ore di punta"},{en:"Overtaking another vehicle or turning left",it:"Sorpassano un altro veicolo o svoltano a sinistra"},{en:"Always — trucks must always stay right",it:"Sempre — i camion devono sempre rimanere a destra"},{en:"Carrying hazardous materials",it:"Trasportano materiali pericolosi"}],correct:1,explain_en:"Trucks on multi-lane roads must use the right lane except to overtake or turn left.",explain_it:"I camion su strade a più corsie devono usare la corsia destra tranne per sorpassare o svoltare a sinistra."},
  {cat:"laws",en:"Florida law on driving with a learner's permit requires the supervising driver to be:",it:"La legge della Florida sulla guida con il permesso per principianti richiede che il supervisore sia:",options:[{en:"A parent only",it:"Solo un genitore"},{en:"A licensed driver at least 21 years old seated in the front",it:"Un conducente patentato di almeno 21 anni seduto davanti"},{en:"Any licensed adult over 18",it:"Qualsiasi adulto patentato sopra i 18 anni"},{en:"A certified driving instructor only",it:"Solo un istruttore di guida certificato"}],correct:1,explain_en:"Florida learner's permit: the supervising driver must be a licensed driver at least 21 years old seated in the front passenger seat.",explain_it:"Permesso per principianti Florida: il supervisore deve essere un conducente patentato di almeno 21 anni seduto nel sedile anteriore."},
  {cat:"laws",en:"Florida requires learner's permit holders under 18 to hold the permit for at least:",it:"La Florida richiede ai titolari di permesso per principianti under 18 di tenerlo per almeno:",options:[{en:"30 days",it:"30 giorni"},{en:"6 months",it:"6 mesi"},{en:"12 months",it:"12 mesi"},{en:"3 months",it:"3 mesi"}],correct:2,explain_en:"Florida requires permit holders under 18 to hold the permit for at least 12 months before applying for a provisional license.",explain_it:"La Florida richiede ai titolari di permesso under 18 di tenerlo per almeno 12 mesi prima di richiedere la patente provvisoria."},
  {cat:"laws",en:"When an emergency vehicle approaches with lights and siren, Florida law requires you to:",it:"Quando si avvicina un veicolo di emergenza con luci e sirena, la legge Florida richiede di:",options:[{en:"Speed up and clear the road ahead",it:"Accelerare e liberare la strada davanti"},{en:"Pull to the right and stop — clear intersection first if in one",it:"Accostare a destra e fermarsi — libera prima l'incrocio se sei in uno"},{en:"Stop immediately where you are",it:"Fermarsi immediatamente dove sei"},{en:"Reduce speed to 20 mph",it:"Ridurre la velocità a 20 mph"}],correct:1,explain_en:"Pull to the right and stop. If in an intersection, clear it first, then pull right. Don't stop mid-intersection.",explain_it:"Accosta a destra e fermati. Se sei in un incrocio, liberalo prima, poi accosta a destra. Non fermarti a metà incrocio."},
  {cat:"laws",en:"Florida's distracted driving law primarily targets:",it:"La legge sulla guida distratta della Florida si rivolge principalmente a:",options:[{en:"Eating while driving",it:"Mangiare durante la guida"},{en:"Manual use of wireless communications devices (texting, typing)",it:"Uso manuale di dispositivi di comunicazione wireless (messaggi, digitazione)"},{en:"Talking to passengers",it:"Parlare con i passeggeri"},{en:"Using GPS",it:"Usare il GPS"}],correct:1,explain_en:"Florida's distracted driving law focuses on manual use of wireless devices (smartphones) while driving.",explain_it:"La legge sulla guida distratta si concentra sull'uso manuale di dispositivi wireless (smartphone) durante la guida."},
  {cat:"laws",en:"In Florida, if a crash involves property damage only, you should:",it:"In Florida, se un incidente coinvolge solo danni materiali, dovresti:",options:[{en:"Leave — minor damage requires no action",it:"Andarsene — i danni minori non richiedono azioni"},{en:"Move vehicles to safety and exchange information",it:"Spostare i veicoli in sicurezza e scambiare le informazioni"},{en:"Wait for police regardless of traffic",it:"Aspettare la polizia indipendentemente dal traffico"},{en:"Take photos and leave without exchanging info",it:"Scattare foto e andarsene senza scambiare informazioni"}],correct:1,explain_en:"If safe, move vehicles out of traffic to prevent further crashes, then exchange information.",explain_it:"Se sicuro, sposta i veicoli fuori dal traffico per prevenire ulteriori incidenti, poi scambia le informazioni."},
  {cat:"laws",en:"Double parking in Florida is:",it:"Il doppio parcheggio in Florida è:",options:[{en:"Allowed briefly for unloading",it:"Consentito brevemente per lo scarico"},{en:"Prohibited — it blocks the traffic lane",it:"Vietato — blocca la corsia di traffico"},{en:"Allowed for commercial vehicles with hazard lights",it:"Consentito per i veicoli commerciali con luci di pericolo"},{en:"Allowed for up to 10 minutes",it:"Consentito fino a 10 minuti"}],correct:1,explain_en:"Double parking is prohibited because it blocks a travel lane and creates hazards for other drivers.",explain_it:"Il doppio parcheggio è vietato perché blocca una corsia di marcia e crea pericoli."},
  {cat:"laws",en:"You must not park within how many feet of a driveway?",it:"Non puoi parcheggiare entro quanti piedi da un vialetto privato?",options:[{en:"5 feet",it:"5 piedi"},{en:"10 feet",it:"10 piedi"},{en:"15 feet",it:"15 piedi"},{en:"20 feet",it:"20 piedi"}],correct:0,explain_en:"The standard clearance is 5 feet on either side of a driveway. Never block public or private driveways.",explain_it:"Lo spazio standard è 5 piedi (1,5 m) su entrambi i lati di un vialetto. Non bloccare mai vialetti."},
  {cat:"laws",en:"Florida's minimum expressway speed that may be required is:",it:"La velocità minima in autostrada che può essere richiesta in Florida è:",options:[{en:"30 mph",it:"30 mph"},{en:"40 mph",it:"40 mph"},{en:"45 mph",it:"45 mph"},{en:"50 mph",it:"50 mph"}],correct:2,explain_en:"Florida may post minimum speed limits of 45 mph on limited-access highways.",explain_it:"La Florida può indicare limiti di velocità minimi di 45 mph sulle autostrade ad accesso limitato."},
  {cat:"laws",en:"What does Florida's 'Slow Driver Law' require slower vehicles to do?",it:"Cosa richiede la 'Legge sul Conducente Lento' della Florida ai veicoli più lenti?",options:[{en:"Flash hazard lights when below the speed limit",it:"Lampeggiare le luci di pericolo quando si è sotto il limite"},{en:"Keep right and yield to faster traffic",it:"Tenersi a destra e cedere al traffico più veloce"},{en:"Pull over and stop when followed closely",it:"Accostare e fermarsi quando si è seguiti da vicino"},{en:"Increase speed to match traffic flow",it:"Aumentare la velocità per adeguarsi al flusso"}],correct:1,explain_en:"Slower vehicles must stay right. Blocking the left lane even at the speed limit is illegal if faster traffic is impeded.",explain_it:"I veicoli più lenti devono rimanere a destra. Bloccare la corsia sinistra è illegale se ostacola il traffico più veloce."},
  {cat:"laws",en:"Florida law requires all children under what age to be in a federally approved child restraint?",it:"La legge della Florida richiede a tutti i bambini sotto quale età di essere in un seggiolino approvato?",options:[{en:"3",it:"3"},{en:"4",it:"4"},{en:"5",it:"5"},{en:"6",it:"6"}],correct:2,explain_en:"Florida requires all children under 5 to be secured in a federally approved child restraint device.",explain_it:"La Florida richiede che tutti i bambini under 5 siano fissati in un dispositivo di ritenuta approvato federalmente."},
  {cat:"laws",en:"What must you do when approaching a railroad crossing with a train present?",it:"Cosa devi fare avvicinandoti a un passaggio a livello con un treno presente?",options:[{en:"Slow to 15 mph",it:"Rallentare a 15 mph"},{en:"Stop and wait for the train to pass",it:"Fermarsi e aspettare che il treno passi"},{en:"Proceed if gates are not down",it:"Procedere se le sbarre non sono abbassate"},{en:"Stop only if the train is within 500 feet",it:"Fermarsi solo se il treno è entro 500 piedi"}],correct:1,explain_en:"Always yield to trains at railroad crossings. A train cannot stop quickly. Stop and wait regardless of gates.",explain_it:"Cedi sempre la precedenza ai treni. Un treno non può fermarsi rapidamente. Fermati e aspetta indipendentemente dalle sbarre."},


  // ══ SESSION 2 — SAFETY +50 ═══════════════════════════════════
  {cat:"safety",en:"The 'No-Zone' around large trucks refers to:",it:"La 'No-Zone' intorno ai camion grandi si riferisce a:",options:[{en:"Within 50 feet behind the truck",it:"Entro 15 m dietro il camion"},{en:"The four blind spots — front, rear, and both sides",it:"I quattro punti ciechi — davanti, dietro e su entrambi i lati"},{en:"Only the left side of the truck",it:"Solo il lato sinistro del camion"},{en:"Directly in front of the truck only",it:"Solo direttamente davanti al camion"}],correct:1,explain_en:"The No-Zone describes the four large blind spots around a truck: directly in front, behind, and on both sides.",explain_it:"La No-Zone descrive i quattro grandi punti ciechi intorno a un camion: davanti, dietro e su entrambi i lati."},
  {cat:"safety",en:"If a vehicle drifts toward you in your lane, you should:",it:"Se un veicolo si sposta verso di te nella tua corsia, dovresti:",options:[{en:"Speed up and swerve left",it:"Accelerare e sterzare a sinistra"},{en:"Sound horn, steer right, reduce speed",it:"Suonare il clacson, sterzare a destra, ridurre la velocità"},{en:"Brake hard and stay in lane",it:"Frenare bruscamente e rimanere in corsia"},{en:"Flash high beams and hold your lane",it:"Lampeggiare gli abbaglianti e tenere la corsia"}],correct:1,explain_en:"If a vehicle drifts toward you: sound horn, steer right toward the shoulder, reduce speed. Avoid swerving left.",explain_it:"Se un veicolo si sposta verso di te: suona il clacson, sterza a destra verso la banchina, riduci la velocità."},
  {cat:"safety",en:"'Highway hypnosis' is caused by:",it:"La 'ipnosi autostradale' è causata da:",options:[{en:"High traffic density",it:"Alta densità di traffico"},{en:"Monotonous driving causing a trance-like state of reduced attention",it:"Guida monotona che causa uno stato simile alla trance con attenzione ridotta"},{en:"Slippery road surfaces",it:"Superfici stradali scivolose"},{en:"Reduced speed limits at night",it:"Limiti di velocità ridotti di notte"}],correct:1,explain_en:"Highway hypnosis: a trance-like state from monotonous driving. Eyes are open but attention is gone. Take breaks every 2 hours.",explain_it:"Ipnosi autostradale: uno stato di trance dalla guida monotona. Occhi aperti ma attenzione assente. Fai pause ogni 2 ore."},
  {cat:"safety",en:"What is the correct response if you miss your highway exit?",it:"Qual è la risposta corretta se manchi la tua uscita in autostrada?",options:[{en:"Back up on the shoulder",it:"Fare retromarcia sulla banchina"},{en:"Continue to the next exit and turn around",it:"Continuare fino alla prossima uscita e tornare indietro"},{en:"Cross the median",it:"Attraversare la mediana"},{en:"Stop in the emergency lane",it:"Fermarsi nella corsia di emergenza"}],correct:1,explain_en:"Never reverse or make U-turns on a highway. Continue to the next exit and safely turn around.",explain_it:"Non fare mai retromarcia o inversioni in autostrada. Procedi fino alla prossima uscita e torna indietro in sicurezza."},
  {cat:"safety",en:"What is 'target fixation' in driving?",it:"Cos'è la 'fissazione dell'obiettivo' nella guida?",options:[{en:"Using GPS to navigate precisely",it:"Usare il GPS per navigare precisamente"},{en:"Tendency to steer toward whatever you are looking at",it:"Tendenza a sterzare verso ciò che si sta guardando"},{en:"Keeping eyes on the center of the lane",it:"Mantenere gli occhi al centro della corsia"},{en:"Watching a specific vehicle in mirrors",it:"Osservare un veicolo specifico negli specchi"}],correct:1,explain_en:"Target fixation: drivers steer toward what they focus on. In a panic, look where you WANT to go — not at the obstacle.",explain_it:"Fissazione dell'obiettivo: i conducenti sterzano verso ciò su cui si concentrano. Nel panico, guarda dove VUOI andare."},
  {cat:"safety",en:"'Covering the brake' means:",it:"'Coprire il freno' significa:",options:[{en:"Keeping your foot on the brake at all times",it:"Tenere il piede sul freno in ogni momento"},{en:"Moving your foot over the brake pedal when anticipating a hazard",it:"Spostare il piede sopra il pedale del freno quando si anticipa un pericolo"},{en:"Applying the parking brake as backup",it:"Applicare il freno di parcheggio come supporto"},{en:"Engine braking on downhill grades",it:"Freno motore nelle discese"}],correct:1,explain_en:"Covering the brake means hovering over the brake pedal when anticipating a hazard, reducing reaction time.",explain_it:"Coprire il freno significa tenere il piede sopra il pedale del freno quando si anticipa un pericolo, riducendo il tempo di reazione."},
  {cat:"safety",en:"'Brake fade' on a long downhill is caused by:",it:"La 'brake fade' su una lunga discesa è causata da:",options:[{en:"Moisture in brake pads",it:"Umidità nelle pastiglie dei freni"},{en:"Overheated brakes from prolonged use",it:"Freni surriscaldati dall'uso prolungato"},{en:"ABS malfunction",it:"Malfunzionamento dell'ABS"},{en:"Low tire pressure",it:"Bassa pressione degli pneumatici"}],correct:1,explain_en:"Brake fade: brakes overheat from sustained use downhill, reducing stopping power. Use engine braking (lower gears).",explain_it:"Brake fade: i freni si surriscaldano dall'uso prolungato in discesa, riducendo il potere frenante. Usa il freno motore."},
  {cat:"safety",en:"'Engine braking' means:",it:"Il 'freno motore' significa:",options:[{en:"Applying gas and brake simultaneously",it:"Applicare gas e freno simultaneamente"},{en:"Using lower gears to let the engine slow the vehicle",it:"Usare marce basse per lasciare che il motore rallenti il veicolo"},{en:"Revving to generate exhaust braking",it:"Imballare il motore per il freno di scarico"},{en:"Turning off the engine to slow down",it:"Spegnere il motore per rallentare"}],correct:1,explain_en:"Engine braking means downshifting so the engine's natural resistance slows the vehicle. Useful on long downhill grades.",explain_it:"Il freno motore significa scalare la marcia così la resistenza del motore rallenta il veicolo. Utile nelle lunghe discese."},
  {cat:"safety",en:"The biggest risk of parking on a highway shoulder is:",it:"Il rischio maggiore del parcheggio sulla banchina autostradale è:",options:[{en:"Tire damage on gravel",it:"Danni agli pneumatici sul ghiaino"},{en:"Being struck by passing traffic, especially at night",it:"Essere colpito dal traffico in transito, specialmente di notte"},{en:"Receiving a parking citation",it:"Ricevere una multa per sosta"},{en:"Running out of fuel",it:"Rimanere senza carburante"}],correct:1,explain_en:"Stopped vehicles on highway shoulders are struck by traffic frequently, especially at night. Maximize visibility with hazard lights.",explain_it:"I veicoli fermi sulle banchine autostradali vengono colpiti dal traffico frequentemente. Massimizza la visibilità con le luci di pericolo."},
  {cat:"safety",en:"What is the correct response when your vehicle runs off the paved road?",it:"Qual è la risposta corretta quando il tuo veicolo esce dalla strada asfaltata?",options:[{en:"Jerk the steering wheel back hard",it:"Girare bruscamente il volante di ritorno"},{en:"Ease off gas, hold wheel firmly, slow down, ease back onto road",it:"Togli il gas, tieni saldamente il volante, rallenta, rientra gradualmente"},{en:"Apply brakes hard immediately",it:"Applica i freni fortemente immediatamente"},{en:"Steer left immediately",it:"Sterza immediatamente a sinistra"}],correct:1,explain_en:"Running off the road: ease off gas, grip wheel, slow to ~25 mph, then gently steer back. Jerking back can cause rollover.",explain_it:"Uscita di strada: togli il gas, stringi il volante, rallenta a ~40 km/h, poi sterza delicatamente di ritorno. Girare bruscamente può causare ribaltamento."},
  {cat:"safety",en:"24 hours without sleep produces impairment equivalent to a BAC of:",it:"24 ore senza dormire producono una compromissione equivalente a un BAC di:",options:[{en:"0.04%",it:"0,04%"},{en:"0.06%",it:"0,06%"},{en:"0.10%",it:"0,10%"},{en:"0.15%",it:"0,15%"}],correct:2,explain_en:"Research shows 24 hours without sleep = impairment equivalent to 0.10% BAC. Fatigued driving is as dangerous as drunk driving.",explain_it:"La ricerca mostra che 24 ore senza dormire = compromissione equivalente a 0,10% BAC. La guida affaticata è pericolosa quanto quella ubriaca."},
  {cat:"safety",en:"How does alcohol affect depth perception?",it:"Come influisce l'alcol sulla percezione della profondità?",options:[{en:"Improves it at low BAC",it:"La migliora a bassi livelli di BAC"},{en:"Significantly impairs it — making speed and distance judgment dangerous",it:"La compromette significativamente — rendendo pericoloso il giudizio di velocità e distanza"},{en:"Only affects reaction time, not depth perception",it:"Influisce solo sul tempo di reazione"},{en:"Only affects vision above 0.10%",it:"Influisce sulla visione solo sopra 0,10%"}],correct:1,explain_en:"Alcohol impairs depth perception, peripheral vision, and reaction time simultaneously — all at low BAC levels.",explain_it:"L'alcol compromette la percezione della profondità, la visione periferica e il tempo di reazione — anche a bassi livelli."},
  {cat:"safety",en:"When is cruise control unsafe to use?",it:"Quando non è sicuro usare il cruise control?",options:[{en:"On flat highways with light traffic",it:"Su autostrade piatte con traffico leggero"},{en:"In rain, snow, ice, fog, heavy traffic, or on winding roads",it:"In pioggia, neve, ghiaccio, nebbia, traffico intenso o su strade tortuose"},{en:"Only when towing a trailer",it:"Solo quando si traino un rimorchio"},{en:"Cruise control is always safe at the speed limit",it:"Il cruise control è sempre sicuro al limite"}],correct:1,explain_en:"Never use cruise control in rain, snow, ice, fog, or heavy traffic. In slippery conditions it can cause loss of control.",explain_it:"Non usare mai il cruise control in pioggia, neve, ghiaccio, nebbia o traffico intenso. In condizioni scivolose può causare perdita del controllo."},
  {cat:"safety",en:"Driving when angry or emotionally upset is dangerous because:",it:"Guidare arrabbiati o emotivamente turbati è pericoloso perché:",options:[{en:"Emotions have no effect on driving",it:"Le emozioni non hanno effetti sulla guida"},{en:"Strong emotions impair judgment, increase aggression, and reduce road focus",it:"Le emozioni forti compromettono il giudizio, aumentano l'aggressività e riducono la concentrazione"},{en:"Only sadness affects driving",it:"Solo la tristezza influisce sulla guida"},{en:"Only affects new drivers",it:"Colpisce solo i nuovi conducenti"}],correct:1,explain_en:"Strong emotions impair judgment, reaction time, and decision-making. Wait until calm before driving.",explain_it:"Le emozioni forti compromettono il giudizio, il tempo di reazione e le decisioni. Aspetta di essere calmo."},
  {cat:"safety",en:"The best response to road rage from another driver is:",it:"La risposta migliore alla rabbia stradale di un altro conducente è:",options:[{en:"Assert your right-of-way firmly",it:"Affermare con fermezza la tua precedenza"},{en:"Avoid eye contact, don't gesture, and create distance",it:"Evitare il contatto visivo, non gesticolare e creare distanza"},{en:"Match their driving behavior",it:"Abbinare il loro comportamento"},{en:"Pull over and exit your car",it:"Accostare e uscire dall'auto"}],correct:1,explain_en:"Non-engagement is safest: no eye contact, no gestures, and put distance between you and the aggressive driver.",explain_it:"Il non coinvolgimento è il più sicuro: nessun contatto visivo, nessun gesto e metti distanza tra te e il conducente aggressivo."},
  {cat:"safety",en:"Under-inflated tires cause:",it:"Gli pneumatici sotto-gonfiati causano:",options:[{en:"Better fuel economy",it:"Migliore economia di carburante"},{en:"Excessive heat, increased wear, blowout risk, and poor handling",it:"Calore eccessivo, usura aumentata, rischio di scoppio e scarsa manovrabilità"},{en:"Slightly longer stopping distances only",it:"Solo distanze di frenata leggermente maggiori"},{en:"No significant safety effect",it:"Nessun effetto significativo sulla sicurezza"}],correct:1,explain_en:"Under-inflated tires generate excessive heat (leading to blowouts), wear faster, reduce fuel efficiency, and impair handling.",explain_it:"Gli pneumatici sotto-gonfiati generano calore eccessivo (scoppi), si consumano più velocemente e compromettono la manovrabilità."},
  {cat:"safety",en:"'Progressive braking' means:",it:"La 'frenata progressiva' significa:",options:[{en:"Pumping the brakes to prevent ABS activation",it:"Pompare i freni per prevenire l'ABS"},{en:"Gradually increasing brake pressure for smooth, controlled stops",it:"Aumentare gradualmente la pressione per arresti fluidi e controllati"},{en:"Braking only in the last 50 feet",it:"Frenare solo negli ultimi 15 m"},{en:"Using the parking brake as primary stop method",it:"Usare il freno di parcheggio come metodo principale"}],correct:1,explain_en:"Progressive braking: apply brakes gradually — light at first, increasing as needed — for smooth stops.",explain_it:"Frenata progressiva: applica i freni gradualmente — leggero all'inizio, aumentando secondo necessità — per arresti fluidi."},
  {cat:"safety",en:"The safe curve-driving sequence is:",it:"La sequenza sicura per la guida in curva è:",options:[{en:"Accelerate through, then brake after",it:"Accelerare attraverso, poi frenare dopo"},{en:"Brake before, steady speed through, accelerate after",it:"Frenare prima, velocità costante durante, accelerare dopo"},{en:"Brake throughout the curve",it:"Frenare per tutta la curva"},{en:"Downshift while braking through the curve",it:"Scalare la marcia mentre si frena in curva"}],correct:1,explain_en:"Slow BEFORE the curve (on the straight), maintain steady speed THROUGH it, then accelerate AFTER.",explain_it:"Rallenta PRIMA della curva (in rettilineo), mantieni velocità costante DURANTE, poi accelera DOPO."},
  {cat:"safety",en:"If your vehicle starts to roll unexpectedly, you should:",it:"Se il tuo veicolo inizia a scorrere inaspettatamente, dovresti:",options:[{en:"Jump out immediately",it:"Saltare fuori immediatamente"},{en:"Apply parking brake and steer to safety",it:"Applicare il freno di parcheggio e sterzare verso un luogo sicuro"},{en:"Turn off the engine to lock wheels",it:"Spegnere il motore per bloccare le ruote"},{en:"Accelerate to regain control",it:"Accelerare per riprendere il controllo"}],correct:1,explain_en:"If the vehicle rolls: apply the parking/emergency brake, steer to safety (curb, soft soil). Do not jump out.",explain_it:"Se il veicolo scorre: applica il freno di parcheggio, sterza verso un luogo sicuro. Non saltare fuori."},
  {cat:"safety",en:"When driving in areas where deer are common:",it:"Quando si guida in zone con cervi comuni:",options:[{en:"Speed up to clear the area fast",it:"Accelerare per liberare l'area velocemente"},{en:"Be most alert at dawn/dusk; if one crosses, others may follow",it:"Essere più vigile all'alba/tramonto; se uno attraversa, altri potrebbero seguire"},{en:"Continuously flash high beams",it:"Lampeggiare continuamente gli abbaglianti"},{en:"Sound the horn when you see one",it:"Suonare il clacson quando ne vedi uno"}],correct:1,explain_en:"Deer are most active at dawn/dusk. They travel in groups. If one crosses, slow down — more may follow.",explain_it:"I cervi sono più attivi all'alba/tramonto. Viaggiano in gruppo. Se uno attraversa, rallenta — altri potrebbero seguire."},
  {cat:"safety",en:"The recommended headrest position is:",it:"La posizione raccomandata per i poggiatesta è:",options:[{en:"As low as possible for comfort",it:"Il più in basso possibile per il comfort"},{en:"Top of headrest at or above the top of your head",it:"La parte superiore all'altezza o sopra la sommità della testa"},{en:"Headrests have no safety function",it:"I poggiatesta non hanno funzione di sicurezza"},{en:"Angled forward as far as possible",it:"Inclinato in avanti il più possibile"}],correct:1,explain_en:"Properly adjusted headrests reduce whiplash in rear-end collisions. Top should be at least as high as the top of your head.",explain_it:"I poggiatesta ben regolati riducono il colpo di frusta nelle collisioni posteriori. La parte superiore deve essere almeno all'altezza della testa."},
  {cat:"safety",en:"What is 'situational awareness' in driving?",it:"Cos'è la 'consapevolezza situazionale' nella guida?",options:[{en:"Knowing the speed limit in every zone",it:"Conoscere il limite in ogni zona"},{en:"Constantly monitoring surroundings — road, traffic, pedestrians, hazards",it:"Monitorare costantemente l'ambiente — strada, traffico, pedoni, pericoli"},{en:"Using GPS to track exact location",it:"Usare il GPS per tracciare la posizione"},{en:"Being aware of vehicle mechanical condition",it:"Essere consapevoli delle condizioni meccaniche del veicolo"}],correct:1,explain_en:"Situational awareness: continuously observe and understand everything happening around your vehicle — and anticipate what may happen.",explain_it:"Consapevolezza situazionale: osserva e comprendi costantemente tutto ciò che accade intorno al veicolo — e anticipa ciò che potrebbe accadere."},
  {cat:"safety",en:"What is 'understeer' in a vehicle?",it:"Cos'è il 'sottosterzo' in un veicolo?",options:[{en:"Rear tires lose grip and rear swings out",it:"Gli pneumatici posteriori perdono aderenza e il retro si sposta"},{en:"Front tires lose grip — car continues straight despite turning wheel",it:"Gli pneumatici anteriori perdono aderenza — l'auto va dritto nonostante si giri il volante"},{en:"Steering feels very heavy",it:"Lo sterzo sembra molto pesante"},{en:"Steering wheel vibrates at speed",it:"Il volante vibra ad alta velocità"}],correct:1,explain_en:"Understeer: front wheels lose grip in a curve — car goes straight. Response: ease off gas, let traction return.",explain_it:"Sottosterzo: le ruote anteriori perdono aderenza — l'auto va dritto. Risposta: togli il gas, lascia che la trazione torni."},
  {cat:"safety",en:"Rear-end collisions are most commonly caused by:",it:"Le collisioni posteriori sono più comunemente causate da:",options:[{en:"Using turn signals when changing lanes",it:"Usare i segnali di svolta"},{en:"Following too closely combined with distraction",it:"Seguire troppo da vicino combinato con la distrazione"},{en:"Driving at the speed limit",it:"Guidare al limite di velocità"},{en:"Checking mirrors regularly",it:"Controllare regolarmente gli specchi"}],correct:1,explain_en:"Rear-end crashes: tailgating + distraction = no time to react when the vehicle ahead brakes.",explain_it:"Collisioni posteriori: distanza insufficiente + distrazione = nessun tempo per reagire quando il veicolo davanti frena."},
  {cat:"safety",en:"If a vehicle fire starts, the correct response is:",it:"Se scoppia un incendio del veicolo, la risposta corretta è:",options:[{en:"Open the hood to ventilate engine",it:"Aprire il cofano per ventilare il motore"},{en:"Pull over, turn off engine, exit, call 911, stay far away",it:"Accostare, spegnere il motore, uscire, chiamare il 911, stare lontano"},{en:"Drive to a fire station",it:"Andare a una stazione dei pompieri"},{en:"Pour water on the engine",it:"Versare acqua sul motore"}],correct:1,explain_en:"Vehicle fire: pull over, shut off engine, get everyone out, call 911, and move far from the vehicle. Fires spread rapidly.",explain_it:"Incendio del veicolo: accosta, spegni il motore, fai uscire tutti, chiama il 911 e allontanati. Gli incendi si diffondono rapidamente."},
  {cat:"safety",en:"What makes a safe lane change on a highway?",it:"Cosa rende sicuro un cambio di corsia in autostrada?",options:[{en:"Change as quickly as possible",it:"Cambiare il più velocemente possibile"},{en:"Check mirrors, signal, check blind spots, ensure adequate space",it:"Controlla specchi, segnala, controlla i punti ciechi, assicura spazio adeguato"},{en:"Only when vehicles behind are very far",it:"Solo quando i veicoli dietro sono molto lontani"},{en:"No special precautions needed",it:"Nessuna precauzione speciale"}],correct:1,explain_en:"Safe lane change: check mirrors, signal 200 ft ahead, physically check blind spots, confirm space, then smoothly change.",explain_it:"Cambio sicuro: controlla specchi, segnala 60 m prima, controlla i punti ciechi, conferma lo spazio, poi cambia fluidamente."},
  {cat:"safety",en:"'Inattentional blindness' while driving means:",it:"La 'cecità da disattenzione' durante la guida significa:",options:[{en:"Inability to see in the dark",it:"Incapacità di vedere al buio"},{en:"Missing visible hazards because the mind is focused elsewhere",it:"Non vedere pericoli visibili perché la mente è concentrata altrove"},{en:"Temporary vision loss from bright headlights",it:"Perdita temporanea della visione dai fari"},{en:"Misjudging distances at night",it:"Valutare male le distanze di notte"}],correct:1,explain_en:"Inattentional blindness: eyes are open but the brain fails to process visible hazards due to distraction.",explain_it:"Cecità da disattenzione: occhi aperti ma il cervello non elabora i pericoli visibili a causa della distrazione."},
  {cat:"safety",en:"Delineator posts (flexible orange sticks) on roads are used to:",it:"I delineatori (bastoncini arancioni flessibili) sulle strade servono a:",options:[{en:"Mark no-parking zones",it:"Segnare zone di divieto di sosta"},{en:"Guide drivers along road edges — curves, narrow sections, construction",it:"Guidare i conducenti lungo i bordi della strada — curve, sezioni strette, costruzioni"},{en:"Mark school zone beginnings",it:"Segnare l'inizio delle zone scolastiche"},{en:"Separate bicycle lanes",it:"Separare le piste ciclabili"}],correct:1,explain_en:"Delineator posts guide drivers along road edges, curves, and narrow/construction sections. Flexibility allows minor impacts.",explain_it:"I delineatori guidano i conducenti lungo i bordi della strada, le curve e le sezioni strette. La flessibilità consente impatti minori."},
  {cat:"safety",en:"After airbag deployment, you should:",it:"Dopo il dispiegamento dell'airbag, dovresti:",options:[{en:"Remain in vehicle — chemicals are harmless",it:"Rimanere nel veicolo — i prodotti chimici sono innocui"},{en:"Exit if safe — deployment powder can irritate lungs and eyes",it:"Uscire se sicuro — la polvere può irritare polmoni e occhi"},{en:"Drive away immediately",it:"Allontanarsi immediatamente"},{en:"Keep engine running",it:"Tenere il motore acceso"}],correct:1,explain_en:"After airbag deployment, residue powder can irritate eyes and lungs. Exit if safe and seek fresh air.",explain_it:"Dopo il dispiegamento dell'airbag, la polvere residua può irritare occhi e polmoni. Esci se sicuro e cerca aria fresca."},
  {cat:"safety",en:"When approaching a stopped school bus with caution sign, what extra following distance is recommended?",it:"Quando ci si avvicina a uno scuolabus che si ferma frequentemente, quale distanza extra è raccomandata?",options:[{en:"Standard 3-second rule",it:"Regola standard dei 3 secondi"},{en:"At least 10 car lengths / ~5 seconds",it:"Almeno 10 lunghezze auto / ~5 secondi"},{en:"Same as any other vehicle",it:"Uguale a qualsiasi altro veicolo"},{en:"30 feet exactly",it:"Esattamente 30 piedi"}],correct:1,explain_en:"Follow school buses with extra distance — at least 10 car lengths — because they stop frequently with little warning.",explain_it:"Segui gli scuolabus con distanza extra — almeno 10 lunghezze auto — perché si fermano frequentemente con poco preavviso."},
  {cat:"safety",en:"If your hood flies open while driving, you should:",it:"Se il cofano si apre durante la guida, dovresti:",options:[{en:"Brake hard and stop immediately",it:"Frenare bruscamente e fermarsi immediatamente"},{en:"Look through the gap, steer right, slow gradually",it:"Guardare attraverso il divario, sterzare a destra, rallentare gradualmente"},{en:"Accelerate to close it with air pressure",it:"Accelerare per chiuderlo con la pressione dell'aria"},{en:"Turn on hazard lights and maintain speed",it:"Accendere le luci di pericolo e mantenere la velocità"}],correct:1,explain_en:"If the hood opens: look through the gap below it, slow gradually, steer to the shoulder, and stop safely.",explain_it:"Se il cofano si apre: guarda attraverso il divario, rallenta gradualmente, sterza verso la banchina e fermati."},
  {cat:"safety",en:"'Vehicle dynamics' awareness means understanding:",it:"La consapevolezza della 'dinamica del veicolo' significa capire:",options:[{en:"The car's GPS systems",it:"I sistemi GPS dell'auto"},{en:"How weight transfer, tire grip, and momentum affect vehicle control",it:"Come il trasferimento di peso, l'aderenza e lo slancio influenzano il controllo"},{en:"The engine specifications",it:"Le specifiche del motore"},{en:"How to adjust mirrors and seats",it:"Come regolare specchi e sedili"}],correct:1,explain_en:"Vehicle dynamics: braking shifts weight forward, acceleration backward, cornering sideways — all affecting tire grip and stability.",explain_it:"Dinamica del veicolo: la frenata sposta il peso avanti, l'accelerazione indietro, le curve di lato — tutto influenzando aderenza e stabilità."},
  {cat:"safety",en:"The correct left turn sequence from a two-lane road is:",it:"La sequenza corretta per la svolta a sinistra da una strada a due corsie è:",options:[{en:"Check mirrors, signal, move left, yield to oncoming, complete turn",it:"Controlla specchi, segnala, spostati a sinistra, cedi ai veicoli in arrivo, completa la svolta"},{en:"Signal, brake sharply, turn immediately",it:"Segnala, frena bruscamente, svolta immediatamente"},{en:"Move left first, then signal while turning",it:"Spostati a sinistra prima, poi segnala mentre svolti"},{en:"Check mirrors only after beginning the turn",it:"Controlla gli specchi solo dopo aver iniziato la svolta"}],correct:0,explain_en:"For a left turn: check mirrors early, signal 100-200 ft before, position left, yield to oncoming traffic, complete turn.",explain_it:"Per una svolta a sinistra: controlla specchi in anticipo, segnala 30-60 m prima, posizionati a sinistra, cedi ai veicoli in arrivo."},
  {cat:"safety",en:"What is the danger of driving in a tunnel from bright daylight?",it:"Qual è il pericolo di guidare in un tunnel dalla luce solare?",options:[{en:"Speed limits are higher in tunnels",it:"I limiti sono più alti nei tunnel"},{en:"Abrupt light change can temporarily impair vision",it:"Il brusco cambio di luce può compromettere temporaneamente la visione"},{en:"GPS signals are stronger in tunnels",it:"I segnali GPS sono più forti nei tunnel"},{en:"Tunnels always require lower speeds",it:"I tunnel richiedono sempre velocità più basse"}],correct:1,explain_en:"Entering a tunnel from bright daylight can temporarily blind you as eyes adjust. Turn on headlights before entering.",explain_it:"Entrare in un tunnel dalla luce solare può temporaneamente accecarti. Accendi i fari prima di entrare."},
  {cat:"safety",en:"When another driver cuts you off, the safest response is:",it:"Quando un altro conducente ti taglia la strada, la risposta più sicura è:",options:[{en:"Speed up alongside to show displeasure",it:"Accelerare accanto a loro"},{en:"Slow down, re-establish following distance, let it go",it:"Rallenta, ristabilisci la distanza, lascia perdere"},{en:"Brake hard and sound horn repeatedly",it:"Frenare bruscamente e suonare ripetutamente"},{en:"Tailgate to teach them a lesson",it:"Seguirli da vicino per dargli una lezione"}],correct:1,explain_en:"When cut off: slow down to re-establish safe following distance and let the incident go. Retaliation escalates danger.",explain_it:"Quando ti tagliano la strada: rallenta per ristabilire distanza sicura e lascia perdere. La ritorsione aumenta il pericolo."},
  {cat:"safety",en:"The biggest risk of 'inattentional blindness' is:",it:"Il rischio principale della 'cecità da disattenzione' è:",options:[{en:"Not seeing in dark conditions",it:"Non vedere in condizioni di buio"},{en:"Failing to process visible hazards due to mental distraction",it:"Non riuscire a elaborare i pericoli visibili a causa della distrazione mentale"},{en:"Glare from oncoming headlights",it:"Abbagliamento dai fari in arrivo"},{en:"Misjudging gap in traffic",it:"Valutare male il divario nel traffico"}],correct:1,explain_en:"Inattentional blindness: brain occupied elsewhere doesn't register visible hazards — like talking on phone while driving.",explain_it:"Cecità da disattenzione: il cervello occupato altrove non registra i pericoli visibili — come parlare al telefono mentre si guida."},
  {cat:"safety",en:"Properly adjusted headrests reduce the risk of:",it:"I poggiatesta correttamente regolati riducono il rischio di:",options:[{en:"Head injuries in a frontal crash",it:"Lesioni alla testa in un incidente frontale"},{en:"Whiplash injury in rear-end collisions",it:"Colpo di frusta nelle collisioni posteriori"},{en:"Concussion from airbag deployment",it:"Commozione cerebrale dal dispiegamento dell'airbag"},{en:"Sun glare through the rear window",it:"Abbagliamento solare dal lunotto posteriore"}],correct:1,explain_en:"Headrests reduce whiplash injury in rear-end collisions. Top should be at or above the head.",explain_it:"I poggiatesta riducono il colpo di frusta nelle collisioni posteriori. La parte superiore deve essere all'altezza della testa."},
  {cat:"safety",en:"What is 'progressive braking' and its advantage?",it:"Cos'è la 'frenata progressiva' e il suo vantaggio?",options:[{en:"Pumping brakes to avoid lock-up",it:"Pompare i freni per evitare il blocco"},{en:"Gradually increasing pressure — smooth stops that don't startle following traffic",it:"Aumentare gradualmente la pressione — arresti fluidi che non sorprendono il traffico che segue"},{en:"Braking only in the last 50 feet",it:"Frenare solo negli ultimi 15 m"},{en:"Using parking brake as primary method",it:"Usare il freno di parcheggio come metodo principale"}],correct:1,explain_en:"Progressive braking = light pressure building gradually. Smooth stops reduce rear-end collision risk from following traffic.",explain_it:"Frenata progressiva = pressione leggera che aumenta gradualmente. Arresti fluidi riducono il rischio di collisioni posteriori."},
  {cat:"safety",en:"Why should you reduce speed in construction zones even without workers present?",it:"Perché dovresti ridurre la velocità nelle zone di lavoro anche senza operai presenti?",options:[{en:"Speed limits don't apply when workers are absent",it:"I limiti non si applicano quando gli operai sono assenti"},{en:"Uneven surfaces, lane shifts, and equipment can appear suddenly",it:"Superfici irregolari, spostamenti di corsia e attrezzature possono apparire improvvisamente"},{en:"Only lower speed when orange signs are visible",it:"Rallentare solo quando i segnali arancioni sono visibili"},{en:"No reason — fines apply only with workers present",it:"Nessun motivo — le multe si applicano solo con operai presenti"}],correct:1,explain_en:"Construction zones remain dangerous even without workers: uneven pavement, lane changes, barriers, and equipment pose risks.",explain_it:"Le zone di lavoro rimangono pericolose anche senza operai: pavimentazione irregolare, cambi di corsia, barriere e attrezzature pongono rischi."},
  {cat:"safety",en:"The purpose of a vehicle's ABS (Anti-lock Braking System) is to:",it:"Lo scopo dell'ABS (Sistema Frenante Anti-blocco) è:",options:[{en:"Stop the vehicle faster than normal braking",it:"Fermare il veicolo più velocemente della frenata normale"},{en:"Prevent wheel lock-up so the driver can still steer while braking hard",it:"Prevenire il blocco delle ruote così il conducente può ancora sterzare durante la frenata"},{en:"Automatically apply brakes in emergencies",it:"Applicare automaticamente i freni nelle emergenze"},{en:"Reduce brake wear on highway driving",it:"Ridurre l'usura dei freni in autostrada"}],correct:1,explain_en:"ABS prevents wheels from locking under hard braking, allowing the driver to maintain steering control. Apply steady firm pressure — don't pump ABS brakes.",explain_it:"L'ABS previene il blocco delle ruote durante la frenata, consentendo al conducente di mantenere il controllo dello sterzo. Applica pressione ferma costante — non pompare i freni ABS."},
  {cat:"safety",en:"What is the safe following distance in normal conditions?",it:"Qual è la distanza di sicurezza in condizioni normali?",options:[{en:"1 car length per 10 mph",it:"1 lunghezza auto per 10 mph"},{en:"At least 3 seconds",it:"Almeno 3 secondi"},{en:"50 feet minimum",it:"Minimo 50 piedi"},{en:"2 seconds at all speeds",it:"2 secondi a tutte le velocità"}],correct:1,explain_en:"The 3-second rule: pick a fixed object; after the vehicle ahead passes it, count 3 seconds before you reach it.",explain_it:"La regola dei 3 secondi: scegli un oggetto fisso; dopo che il veicolo davanti lo passa, conta 3 secondi prima di raggiungerlo."},
  {cat:"safety",en:"When must you increase following distance beyond 3 seconds?",it:"Quando devi aumentare la distanza oltre i 3 secondi?",options:[{en:"Never — 3 seconds is always sufficient",it:"Mai — 3 secondi sono sempre sufficienti"},{en:"In rain, fog, heavy traffic, when following trucks, or when tired",it:"In pioggia, nebbia, traffico intenso, quando si seguono camion o quando si è stanchi"},{en:"Only on highways",it:"Solo in autostrada"},{en:"Only at night",it:"Solo di notte"}],correct:1,explain_en:"Increase to 4-6 seconds or more in adverse conditions: rain, fog, heavy traffic, following large trucks, or when fatigued.",explain_it:"Aumenta a 4-6 secondi o più in condizioni avverse: pioggia, nebbia, traffico intenso, seguendo camion grandi o quando sei stanco."},
  {cat:"safety",en:"What is the first thing you should do before backing a vehicle?",it:"Qual è la prima cosa da fare prima di fare retromarcia?",options:[{en:"Check only the rearview mirror",it:"Controllare solo lo specchietto retrovisore"},{en:"Walk around the vehicle to check for obstacles, then check all mirrors",it:"Camminare intorno al veicolo per controllare gli ostacoli, poi controllare tutti gli specchi"},{en:"Sound the horn to warn pedestrians",it:"Suonare il clacson per avvisare i pedoni"},{en:"No preparation needed if in a known area",it:"Nessuna preparazione necessaria in un'area conosciuta"}],correct:1,explain_en:"Before reversing: physically walk around the vehicle to check for children, pets, and obstacles invisible in mirrors.",explain_it:"Prima di fare retromarcia: cammina fisicamente intorno al veicolo per controllare bambini, animali e ostacoli invisibili negli specchi."},
  {cat:"safety",en:"What is the 'danger zone' directly in front of a large truck?",it:"Qual è la 'zona pericolosa' direttamente davanti a un camion grande?",options:[{en:"10 feet in front",it:"10 piedi in avanti"},{en:"Approximately 20 feet — the driver cannot see this area",it:"Circa 20 piedi — il conducente non può vedere questa zona"},{en:"There is no blind spot in front",it:"Non c'è punto cieco davanti"},{en:"Only 5 feet directly ahead",it:"Solo 5 piedi direttamente davanti"}],correct:1,explain_en:"Large trucks have a 20-foot blind spot directly in front. If you can't see the driver's mirrors, they can't see you.",explain_it:"I camion grandi hanno un punto cieco di 20 piedi direttamente davanti. Se non puoi vedere gli specchi del camionista, lui non può vedere te."},
  {cat:"safety",en:"Which of these is a sign of driver fatigue?",it:"Quale di questi è un segnale di stanchezza del conducente?",options:[{en:"Increased alertness and sharp reflexes",it:"Maggiore vigilanza e riflessi acuti"},{en:"Frequent blinking, yawning, drifting from lane, missing exits",it:"Battito di ciglia frequente, sbadiglio, deriva dalla corsia, perdita di uscite"},{en:"Improved vision at night",it:"Visione migliorata di notte"},{en:"Reduced thirst and hunger",it:"Riduzione della sete e della fame"}],correct:1,explain_en:"Signs of fatigue: frequent blinking, yawning, lane drift, missing exits, and not remembering the last few miles.",explain_it:"Segni di stanchezza: battito di ciglia frequente, sbadiglio, deriva dalla corsia, perdita di uscite e non ricordare gli ultimi km."},
  {cat:"safety",en:"What is the safest way to handle a tire blowout at highway speed?",it:"Qual è il modo più sicuro di gestire lo scoppio di uno pneumatico in autostrada?",options:[{en:"Brake hard and pull immediately to the shoulder",it:"Frenare bruscamente e accostare immediatamente"},{en:"Grip steering wheel firmly, ease off gas, steer straight, slow gradually",it:"Stringi saldamente il volante, togli il gas, sterza dritto, rallenta gradualmente"},{en:"Steer sharply to the opposite side",it:"Sterzare bruscamente verso il lato opposto"},{en:"Accelerate briefly to stabilize before braking",it:"Accelerare brevemente per stabilizzare prima di frenare"}],correct:1,explain_en:"Blowout: grip the wheel firmly, ease off the gas (don't brake hard), maintain direction, and slow gradually to the shoulder.",explain_it:"Scoppio: stringi il volante, togli il gas (non frenare bruscamente), mantieni la direzione e rallenta gradualmente verso la banchina."},


  // ══ SESSION 2 — DUI/ALCOHOL +45 ══════════════════════════════
  {cat:"alcohol",en:"At a BAC of 0.02%, a driver typically experiences:",it:"A un BAC di 0,02%, un conducente tipicamente sperimenta:",options:[{en:"No detectable effects",it:"Nessun effetto rilevabile"},{en:"Subtle loss of judgment, slight relaxation, altered mood",it:"Sottile perdita di giudizio, leggero rilassamento, alterazione dell'umore"},{en:"Severe impairment",it:"Grave compromissione"},{en:"Complete inability to drive",it:"Completa incapacità di guidare"}],correct:1,explain_en:"Even at 0.02% BAC — well below the legal limit — drivers experience relaxation and subtle loss of judgment.",explain_it:"Anche a 0,02% BAC — ben sotto il limite legale — i conducenti sperimentano rilassamento e sottile perdita di giudizio."},
  {cat:"alcohol",en:"At a BAC of 0.05%, a driver typically shows:",it:"A un BAC di 0,05%, un conducente mostra tipicamente:",options:[{en:"No measurable impairment",it:"Nessuna compromissione misurabile"},{en:"Reduced coordination, reduced ability to track objects, impaired judgment",it:"Coordinazione ridotta, ridotta capacità di seguire oggetti, giudizio compromesso"},{en:"Only minor vision changes",it:"Solo lievi cambiamenti visivi"},{en:"Fully intact driving ability",it:"Piena capacità di guida intatta"}],correct:1,explain_en:"At 0.05% BAC: reduced coordination, difficulty tracking moving objects, difficulty steering, reduced emergency response.",explain_it:"A 0,05% BAC: coordinazione ridotta, difficoltà a seguire oggetti in movimento, difficoltà di sterzo, risposta di emergenza ridotta."},
  {cat:"alcohol",en:"At a BAC of 0.08%, a driver typically shows:",it:"A un BAC di 0,08%, un conducente mostra tipicamente:",options:[{en:"Only minor fine motor impairment",it:"Solo lieve compromissione motoria fine"},{en:"Poor muscle coordination, impaired perception, difficulty detecting danger",it:"Scarsa coordinazione muscolare, percezione compromessa, difficoltà nel rilevare il pericolo"},{en:"Only confusion and disorientation",it:"Solo confusione e disorientamento"},{en:"No ability to drive",it:"Nessuna capacità di guidare"}],correct:1,explain_en:"At 0.08% BAC: poor muscle coordination, slower reaction, difficulty detecting danger, impaired judgment and memory.",explain_it:"A 0,08% BAC: scarsa coordinazione muscolare, reazione più lenta, difficoltà a rilevare il pericolo, giudizio e memoria compromessi."},
  {cat:"alcohol",en:"Alcohol causes 'tunnel vision' which means:",it:"L'alcol causa 'visione a tunnel' che significa:",options:[{en:"Better focus on the road ahead",it:"Migliore concentrazione sulla strada davanti"},{en:"Narrowed field of view reducing peripheral awareness",it:"Campo visivo ristretto che riduce la consapevolezza periferica"},{en:"Night vision improves at low BAC",it:"La visione notturna migliora a bassi BAC"},{en:"Vision is the last sense impaired",it:"La visione è l'ultimo senso compromesso"}],correct:1,explain_en:"Alcohol causes tunnel vision — narrowing the field of view. Drivers miss hazards approaching from the sides.",explain_it:"L'alcol causa visione a tunnel — restringendo il campo visivo. I conducenti mancano i pericoli dai lati."},
  {cat:"alcohol",en:"What is TRUE about 'sobering up'?",it:"Cosa è VERO riguardo allo 'smaltire' l'alcol?",options:[{en:"Eating after drinking speeds up sobering",it:"Mangiare dopo aver bevuto accelera la sobrietà"},{en:"Nothing speeds the process — only time eliminates alcohol",it:"Niente accelera il processo — solo il tempo elimina l'alcol"},{en:"Water dilutes alcohol and lowers BAC quickly",it:"L'acqua diluisce l'alcol e abbassa rapidamente il BAC"},{en:"Exercise burns alcohol twice as fast",it:"L'esercizio brucia l'alcol due volte più velocemente"}],correct:1,explain_en:"No food, coffee, water, exercise, or fresh air speeds up alcohol elimination. The liver processes at ~one drink per hour.",explain_it:"Nessun cibo, caffè, acqua, esercizio o aria fresca accelera l'eliminazione dell'alcol. Il fegato elabora a ~un drink all'ora."},
  {cat:"alcohol",en:"Florida DUI law covers impairment from:",it:"La legge DUI della Florida copre la compromissione da:",options:[{en:"Alcohol only",it:"Solo alcol"},{en:"Alcohol, controlled substances, AND chemical substances",it:"Alcol, sostanze controllate E sostanze chimiche"},{en:"Illegal drugs only",it:"Solo droghe illegali"},{en:"Prescription medications only with alcohol",it:"Solo farmaci da prescrizione con l'alcol"}],correct:1,explain_en:"Florida DUI applies to impairment from alcohol, controlled substances (illegal drugs), AND chemical substances (inhalants).",explain_it:"Il DUI della Florida si applica alla compromissione da alcol, sostanze controllate E sostanze chimiche (inalanti)."},
  {cat:"alcohol",en:"A person who 'feels fine' to drive after drinking:",it:"Una persona che 'si sente bene' per guidare dopo aver bevuto:",options:[{en:"Is probably right",it:"Ha probabilmente ragione"},{en:"Is likely more impaired than they realize — alcohol impairs self-assessment first",it:"È probabilmente più compromessa di quanto realizzi — l'alcol compromette prima la valutazione di sé"},{en:"Should only drive short distances",it:"Dovrebbe guidare solo brevi distanze"},{en:"Can drive safely with a sober passenger",it:"Può guidare in sicurezza con un passeggero sobrio"}],correct:1,explain_en:"Alcohol impairs the ability to assess one's own impairment. Feeling 'fine' is a dangerous cognitive distortion.",explain_it:"L'alcol compromette la capacità di valutare la propria compromissione. Sentirsi 'bene' è una pericolosa distorsione cognitiva."},
  {cat:"alcohol",en:"The legal BAC limit for CDL holders in Florida is:",it:"Il limite legale di BAC per i titolari CDL in Florida è:",options:[{en:"0.08%",it:"0,08%"},{en:"0.04%",it:"0,04%"},{en:"0.02%",it:"0,02%"},{en:"0.06%",it:"0,06%"}],correct:1,explain_en:"CDL holders face a stricter BAC limit of 0.04% because of the increased risk of large commercial vehicles.",explain_it:"I titolari CDL hanno un limite BAC più severo di 0,04% per il rischio aumentato dei veicoli commerciali grandi."},
  {cat:"alcohol",en:"The three standardized field sobriety tests (SFSTs) are:",it:"I tre test di sobrietà sul campo standardizzati (SFST) sono:",options:[{en:"Breathalyzer, blood draw, urine test",it:"Breathalyzer, prelievo di sangue, test delle urine"},{en:"Horizontal Gaze Nystagmus, Walk-and-Turn, One-Leg Stand",it:"Nistagmo Orizzontale dello Sguardo, Camminata e Giravolta, Postura su Una Gamba"},{en:"Blood pressure, reaction time, vision test",it:"Pressione sanguigna, tempo di reazione, test della vista"},{en:"Memory test, balance test, speech clarity",it:"Test di memoria, test di equilibrio, chiarezza del discorso"}],correct:1,explain_en:"NHTSA-approved SFSTs: HGN (eye test), Walk-and-Turn, and One-Leg Stand.",explain_it:"SFST approvati dalla NHTSA: HGN (test oculare), Camminata e Giravolta, e Postura su Una Gamba."},
  {cat:"alcohol",en:"Florida's Implied Consent Law means:",it:"La legge del Consenso Implicito della Florida significa:",options:[{en:"You must agree verbally to every police request",it:"Devi acconsentire verbalmente a ogni richiesta della polizia"},{en:"Operating a vehicle constitutes automatic consent to BAC testing if lawfully arrested",it:"Operare un veicolo costituisce consenso automatico ai test BAC se legalmente arrestato"},{en:"You must sign a consent form before driving",it:"Devi firmare un modulo di consenso prima di guidare"},{en:"Police cannot search your vehicle without consent",it:"La polizia non può perquisire il veicolo senza consenso"}],correct:1,explain_en:"By obtaining a Florida license and driving, you automatically consent to chemical BAC testing when lawfully arrested for DUI.",explain_it:"Ottenendo la patente Florida e guidando, acconsenti automaticamente ai test chimici BAC quando legalmente arrestato per DUI."},
  {cat:"alcohol",en:"Refusing a BAC test under Florida's Implied Consent Law results in:",it:"Il rifiuto di un test BAC ai sensi del Consenso Implicito della Florida risulta in:",options:[{en:"No consequences — refusal is your right",it:"Nessuna conseguenza — il rifiuto è un tuo diritto"},{en:"Automatic 1-year license suspension (first refusal)",it:"Sospensione automatica della patente di 1 anno (primo rifiuto)"},{en:"Immediate arrest only",it:"Solo arresto immediato"},{en:"A small fine but no suspension",it:"Una piccola multa ma nessuna sospensione"}],correct:1,explain_en:"First refusal: automatic 1-year license suspension. Second refusal: 18-month suspension and possible misdemeanor charge.",explain_it:"Primo rifiuto: sospensione automatica della patente di 1 anno. Secondo rifiuto: 18 mesi e possibile accusa."},
  {cat:"alcohol",en:"Marijuana use and driving in Florida:",it:"L'uso di marijuana e la guida in Florida:",options:[{en:"Is legal with a medical marijuana card",it:"È legale con una tessera di marijuana medica"},{en:"Can result in DUI if normal faculties are impaired",it:"Può risultare in DUI se le facoltà normali sono compromesse"},{en:"Is only DUI if combined with alcohol",it:"È solo DUI se combinato con l'alcol"},{en:"Is not covered by Florida DUI law",it:"Non è coperto dalla legge DUI della Florida"}],correct:1,explain_en:"Florida's DUI law covers all substances. Driving impaired by marijuana — medical or otherwise — is DUI if faculties are impaired.",explain_it:"La legge DUI della Florida copre tutte le sostanze. Guidare compromessi dalla marijuana è DUI se le facoltà sono compromesse."},
  {cat:"alcohol",en:"Florida DUI with property damage or minor injury is classified as:",it:"Il DUI della Florida con danni materiali o lesioni minori è classificato come:",options:[{en:"Standard DUI — no enhanced penalties",it:"DUI standard — nessuna penalità maggiorata"},{en:"A first-degree misdemeanor with enhanced penalties",it:"Un'infrazione minore di primo grado con penalità maggiorate"},{en:"A second-degree felony",it:"Un crimine di secondo grado"},{en:"A non-criminal infraction",it:"Un'infrazione non penale"}],correct:1,explain_en:"DUI with property damage or minor injury = first-degree misdemeanor with enhanced fines and possible jail time.",explain_it:"DUI con danni materiali o lesioni minori = infrazione minore di primo grado con multe maggiorate e possibile carcere."},
  {cat:"alcohol",en:"A BAC of 0.15% or higher triggers in Florida:",it:"Un BAC di 0,15% o superiore scatena in Florida:",options:[{en:"No additional penalties",it:"Nessuna penalità aggiuntiva"},{en:"Enhanced penalties: higher fines, mandatory ignition interlock",it:"Penalità maggiorate: multe più alte, interlock obbligatorio"},{en:"Only mandatory DUI school",it:"Solo scuola DUI obbligatoria"},{en:"Immediate 10-year suspension",it:"Sospensione immediata di 10 anni"}],correct:1,explain_en:"BAC 0.15%+ triggers enhanced penalties: fines $1,000-$2,000 (1st offense), mandatory ignition interlock, potentially longer jail.",explain_it:"BAC 0,15%+ scatena penalità maggiorate: multe $1.000-$2.000 (1a offesa), interlock obbligatorio, potenzialmente più carcere."},
  {cat:"alcohol",en:"The minimum period a Florida license is revoked after a first DUI conviction is:",it:"Il periodo minimo di revoca della patente dopo la prima condanna DUI in Florida è:",options:[{en:"30 days",it:"30 giorni"},{en:"90 days",it:"90 giorni"},{en:"180 days (6 months)",it:"180 giorni (6 mesi)"},{en:"1 year",it:"1 anno"}],correct:2,explain_en:"First DUI conviction: minimum 180-day (6-month) license revocation, maximum 1 year.",explain_it:"Prima condanna DUI: revoca minima della patente di 180 giorni (6 mesi), massimo 1 anno."},
  {cat:"alcohol",en:"A second DUI within 5 years of the first in Florida results in:",it:"Un secondo DUI entro 5 anni dal primo in Florida risulta in:",options:[{en:"Fine only — no jail",it:"Solo multa — nessun carcere"},{en:"Mandatory minimum 10-day jail and 5-year license revocation",it:"Minimo 10 giorni di carcere obbligatori e revoca della patente di 5 anni"},{en:"Same penalties as first conviction",it:"Stesse penalità della prima condanna"},{en:"Community service only",it:"Solo servizio alla comunità"}],correct:1,explain_en:"2nd DUI within 5 years: mandatory 10-day jail minimum, 5-year license revocation, fines up to $4,000, ignition interlock.",explain_it:"2° DUI entro 5 anni: minimo 10 giorni di carcere obbligatori, revoca 5 anni, multe fino a $4.000, interlock."},
  {cat:"alcohol",en:"A fourth DUI conviction in Florida results in:",it:"Una quarta condanna DUI in Florida risulta in:",options:[{en:"Same as third — no additional penalties",it:"Uguale alla terza — nessuna penalità aggiuntiva"},{en:"Permanent license revocation",it:"Revoca permanente della patente"},{en:"A third-degree felony with up to 5 years",it:"Un crimine di terzo grado con fino a 5 anni"},{en:"Only an enhanced fine",it:"Solo una multa maggiorata"}],correct:1,explain_en:"A fourth or subsequent DUI: permanent license revocation and classified as a third-degree felony.",explain_it:"Una quarta o successiva condanna DUI: revoca permanente della patente e classificata come crimine di terzo grado."},
  {cat:"alcohol",en:"Florida first DUI conviction requires a minimum of how many community service hours?",it:"La prima condanna DUI in Florida richiede un minimo di quante ore di servizio alla comunità?",options:[{en:"10 hours",it:"10 ore"},{en:"25 hours",it:"25 ore"},{en:"50 hours",it:"50 ore"},{en:"100 hours",it:"100 ore"}],correct:2,explain_en:"First DUI: minimum 50 hours of community service, of which at least 10 hours involve litter pickup.",explain_it:"Primo DUI: minimo 50 ore di servizio alla comunità, di cui almeno 10 ore prevedono la raccolta di rifiuti."},
  {cat:"alcohol",en:"DUI school (TLSAE) in Florida is:",it:"La scuola DUI in Florida è:",options:[{en:"A voluntary class reducing fines",it:"Un corso volontario che riduce le multe"},{en:"A mandatory substance abuse education program required for license reinstatement",it:"Un programma obbligatorio di educazione sull'abuso di sostanze richiesto per il ripristino della patente"},{en:"Only for drivers under 21",it:"Solo per i conducenti under 21"},{en:"An online defensive driving course",it:"Un corso online di guida difensiva"}],correct:1,explain_en:"Florida requires DUI school (substance abuse evaluation and education) as a mandatory condition for license reinstatement.",explain_it:"La Florida richiede la scuola DUI come condizione obbligatoria per il ripristino della patente."},
  {cat:"alcohol",en:"The '10-Day Letter' after a DUI arrest is:",it:"La 'Lettera dei 10 Giorni' dopo un arresto DUI è:",options:[{en:"A letter requiring court appearance in 10 days",it:"Una lettera che richiede comparizione in tribunale entro 10 giorni"},{en:"A temporary driving permit valid 10 days — allowing time to request a hearing",it:"Un permesso di guida temporaneo valido 10 giorni — che consente di richiedere un'udienza"},{en:"A 10-day jail sentence",it:"Una pena detentiva di 10 giorni"},{en:"The period for blood test processing",it:"Il periodo per l'elaborazione del test del sangue"}],correct:1,explain_en:"After DUI arrest, drivers receive a 10-Day Letter: a temporary permit valid 10 days to request a formal review hearing.",explain_it:"Dopo l'arresto DUI, i conducenti ricevono la Lettera dei 10 Giorni: un permesso temporaneo valido 10 giorni per richiedere un'udienza."},
  {cat:"alcohol",en:"How does eating before drinking affect BAC?",it:"Come influisce mangiare prima di bere sul BAC?",options:[{en:"Food has no effect on alcohol absorption",it:"Il cibo non ha effetti sull'assorbimento dell'alcol"},{en:"Food slows absorption — delays peak BAC but does NOT lower total alcohol",it:"Il cibo rallenta l'assorbimento — ritarda il picco BAC ma NON abbassa il totale"},{en:"Food neutralizes alcohol completely",it:"Il cibo neutralizza l'alcol completamente"},{en:"Fatty foods eliminate alcohol twice as fast",it:"I cibi grassi eliminano l'alcol due volte più velocemente"}],correct:1,explain_en:"Food slows alcohol absorption and delays peak BAC — but it does NOT reduce total alcohol processed. Same BAC eventually.",explain_it:"Il cibo rallenta l'assorbimento e ritarda il picco BAC — ma NON riduce il totale dell'alcol elaborato. Stesso BAC alla fine."},
  {cat:"alcohol",en:"An officer can arrest for DUI based on:",it:"Un agente può arrestare per DUI in base a:",options:[{en:"Only a BAC of 0.08%+",it:"Solo un BAC di 0,08%+"},{en:"Observable signs of impairment OR a BAC of 0.08%+",it:"Segni osservabili di compromissione O un BAC di 0,08%+"},{en:"Only if the driver refuses a breath test",it:"Solo se il conducente rifiuta un test del respiro"},{en:"Only if there was a crash",it:"Solo se c'è stato un incidente"}],correct:1,explain_en:"Officers can arrest based on observable impairment (bloodshot eyes, slurred speech, odor) even before a BAC test.",explain_it:"Gli agenti possono arrestare in base alla compromissione osservabile anche prima di un test BAC."},
  {cat:"alcohol",en:"Which chemical test is required under Florida's Implied Consent?",it:"Quale test chimico è richiesto dal Consenso Implicito della Florida?",options:[{en:"Blood test only",it:"Solo il test del sangue"},{en:"Breath, blood, or urine — as selected by the officer",it:"Respiro, sangue o urine — come selezionato dall'agente"},{en:"Only the breathalyzer",it:"Solo il breathalyzer"},{en:"Only field sobriety tests",it:"Solo i test di sobrietà sul campo"}],correct:1,explain_en:"Under Implied Consent, if lawfully arrested for DUI, you must submit to breath, blood, or urine test as designated by the officer.",explain_it:"In base al Consenso Implicito, se legalmente arrestato per DUI, devi sottoporti a test del respiro, sangue o urine come designato dall'agente."},
  {cat:"alcohol",en:"Florida adults who provide alcohol to minors may face:",it:"Gli adulti in Florida che forniscono alcol ai minori possono affrontare:",options:[{en:"No liability — only the minor is responsible",it:"Nessuna responsabilità — solo il minore è responsabile"},{en:"Civil and criminal liability if the minor drives and injures someone",it:"Responsabilità civile e penale se il minore guida e ferisce qualcuno"},{en:"Only licensed bars have such liability",it:"Solo i bar con licenza hanno tale responsabilità"},{en:"No legal obligation to monitor guest drinking",it:"Nessun obbligo legale di monitorare il bere degli ospiti"}],correct:1,explain_en:"Florida law imposes liability on adults who knowingly provide alcohol to minors if the minor drives and injures or kills someone.",explain_it:"La legge della Florida impone responsabilità agli adulti che forniscono consapevolmente alcol ai minori se il minore guida e ferisce qualcuno."},
  {cat:"alcohol",en:"DUI with a minor under 18 in the vehicle triggers:",it:"Il DUI con un minore under 18 nel veicolo scatena:",options:[{en:"Standard DUI penalties only",it:"Solo penalità DUI standard"},{en:"Enhanced penalties: higher mandatory fines and ignition interlock",it:"Penalità maggiorate: multe obbligatorie più alte e interlock"},{en:"Only child endangerment charges",it:"Solo accuse di messa in pericolo di minori"},{en:"Automatic permanent revocation",it:"Revoca automatica permanente"}],correct:1,explain_en:"DUI with a minor in the vehicle triggers enhanced penalties in Florida: higher mandatory fines and ignition interlock.",explain_it:"Il DUI con un minore nel veicolo scatena penalità maggiorate in Florida: multe obbligatorie più alte e interlock."},
  {cat:"alcohol",en:"Open container laws in Florida apply:",it:"Le leggi sui contenitori aperti in Florida si applicano:",options:[{en:"Only while the vehicle is moving",it:"Solo mentre il veicolo è in movimento"},{en:"To any vehicle on a public road — moving or parked",it:"A qualsiasi veicolo su una strada pubblica — in movimento o parcheggiato"},{en:"Only if the engine is running",it:"Solo se il motore è acceso"},{en:"Only if children are present",it:"Solo se sono presenti bambini"}],correct:1,explain_en:"Florida's open container law applies to any vehicle on a public road — whether moving or parked, engine on or off.",explain_it:"La legge sui contenitori aperti si applica a qualsiasi veicolo su una strada pubblica — in movimento o parcheggiato, motore acceso o spento."},
  {cat:"alcohol",en:"Florida DUI probation for a first conviction lasts:",it:"La libertà vigilata DUI per una prima condanna in Florida dura:",options:[{en:"30 days",it:"30 giorni"},{en:"6 months",it:"6 mesi"},{en:"Up to 1 year",it:"Fino a 1 anno"},{en:"5 years",it:"5 anni"}],correct:2,explain_en:"First DUI conviction: probation up to 1 year. Total sentence (jail + probation) cannot exceed 1 year.",explain_it:"Prima condanna DUI: libertà vigilata fino a 1 anno. La pena totale (carcere + libertà vigilata) non può superare 1 anno."},
  {cat:"alcohol",en:"'Horizontal Gaze Nystagmus' (HGN) test looks for:",it:"Il test 'Nistagmo Orizzontale dello Sguardo' (HGN) cerca:",options:[{en:"Pupil dilation changes",it:"Cambiamenti della dilatazione pupillare"},{en:"Involuntary eye jerking when tracking a moving object sideways",it:"Tremore involontario degli occhi quando si segue un oggetto in movimento lateralmente"},{en:"Peripheral vision loss",it:"Perdita della visione periferica"},{en:"Ability to focus on near objects",it:"Capacità di messa a fuoco su oggetti vicini"}],correct:1,explain_en:"HGN: alcohol causes involuntary jerking (nystagmus) of the eyes when tracking sideways. Officers look for onset angle and distinctness.",explain_it:"HGN: l'alcol causa tremore involontario degli occhi quando si traccia lateralmente. Gli agenti cercano l'angolo di inizio e la nitidezza."},
  {cat:"alcohol",en:"Vehicle forfeiture is NOT a penalty for:",it:"La confisca del veicolo NON è una penalità per:",options:[{en:"A second DUI",it:"Un secondo DUI"},{en:"A first DUI",it:"Un primo DUI"},{en:"A third DUI",it:"Un terzo DUI"},{en:"DUI manslaughter",it:"Omicidio colposo DUI"}],correct:1,explain_en:"Vehicle forfeiture is not a penalty for a FIRST DUI in Florida. It may be ordered for second and subsequent convictions.",explain_it:"La confisca del veicolo non è una penalità per il PRIMO DUI in Florida. Può essere ordinata per condanne successive."},
  {cat:"alcohol",en:"Which best describes 'DUI manslaughter' in Florida?",it:"Quale descrive meglio l'omicidio colposo DUI in Florida?",options:[{en:"A misdemeanor when death results from DUI",it:"Un'infrazione minore quando la morte deriva dal DUI"},{en:"A second-degree felony when DUI causes the death of another person",it:"Un crimine di secondo grado quando il DUI causa la morte di un'altra persona"},{en:"Only applies to multiple fatalities",it:"Si applica solo a decessi multipli"},{en:"Same classification as standard DUI",it:"Stessa classificazione del DUI standard"}],correct:1,explain_en:"DUI manslaughter (causing death while DUI) is a second-degree felony in Florida with up to 15 years in prison.",explain_it:"L'omicidio colposo DUI (causare la morte mentre si è in DUI) è un crimine di secondo grado in Florida con fino a 15 anni."},
  {cat:"alcohol",en:"Cold weather, exercise, or fresh air after drinking:",it:"Freddo, esercizio o aria fresca dopo aver bevuto:",options:[{en:"Lower BAC by causing sweating",it:"Abbassano il BAC causando sudorazione"},{en:"Do NOT significantly affect the rate of alcohol metabolism",it:"NON influiscono significativamente sulla velocità del metabolismo dell'alcol"},{en:"Exercise burns alcohol twice as fast",it:"L'esercizio brucia l'alcol due volte più velocemente"},{en:"Cold weather slows metabolism considerably",it:"Il freddo rallenta considerevolmente il metabolismo"}],correct:1,explain_en:"Nothing speeds up alcohol metabolism — not cold, exercise, sweating, or fresh air. Only time and the liver.",explain_it:"Niente accelera il metabolismo dell'alcol — non il freddo, l'esercizio, la sudorazione o l'aria fresca. Solo il tempo e il fegato."},
  {cat:"alcohol",en:"Florida's ignition interlock device (IID) requirement means:",it:"Il requisito del dispositivo interlock per l'accensione (IID) della Florida significa:",options:[{en:"The car starts automatically if BAC is low",it:"L'auto si avvia automaticamente se il BAC è basso"},{en:"The driver must blow into a device before starting — it prevents start if BAC is above threshold",it:"Il conducente deve soffiare nel dispositivo prima di avviare — impedisce l'avvio se il BAC supera la soglia"},{en:"Only required for commercial drivers",it:"Richiesto solo per i conducenti commerciali"},{en:"An optional safety device",it:"Un dispositivo di sicurezza opzionale"}],correct:1,explain_en:"An IID requires the driver to provide a breath sample before the car will start. If BAC exceeds the threshold, the vehicle won't start.",explain_it:"Un IID richiede al conducente di fornire un campione di respiro prima che l'auto si avvii. Se il BAC supera la soglia, il veicolo non si avvia."},
  {cat:"alcohol",en:"Florida DUI school provides what minimum service?",it:"La scuola DUI della Florida fornisce quale servizio minimo?",options:[{en:"A one-hour online video",it:"Un video online di un'ora"},{en:"A substance abuse evaluation and a course on traffic laws and substance abuse",it:"Una valutazione dell'abuso di sostanze e un corso sulle leggi del traffico e l'abuso di sostanze"},{en:"A defensive driving refresher only",it:"Solo un aggiornamento di guida difensiva"},{en:"A medical examination",it:"Una visita medica"}],correct:1,explain_en:"DUI school provides substance abuse evaluation and education. Further treatment may be ordered based on the evaluation.",explain_it:"La scuola DUI fornisce valutazione e istruzione sull'abuso di sostanze. Ulteriore trattamento può essere ordinato in base alla valutazione."},
  {cat:"alcohol",en:"At a BAC of 0.10%, driving impairment includes:",it:"A un BAC di 0,10%, la compromissione della guida include:",options:[{en:"Color vision only",it:"Solo la visione dei colori"},{en:"Clear deterioration of reaction time, vehicle control, and braking ability",it:"Chiaro deterioramento del tempo di reazione, controllo del veicolo e capacità di frenata"},{en:"Only difficulty reading signs",it:"Solo difficoltà a leggere i segnali"},{en:"No impairment until 0.15%",it:"Nessuna compromissione fino a 0,15%"}],correct:1,explain_en:"At 0.10% BAC: clear deterioration of reaction time and control, slurred speech, slowed thinking, impaired braking.",explain_it:"A 0,10% BAC: chiaro deterioramento del tempo di reazione e controllo, parola rallentata, pensiero rallentato, frenata compromessa."},
  {cat:"alcohol",en:"What does 'BAC' stand for?",it:"Cosa significa 'BAC'?",options:[{en:"Blood Alcohol Count",it:"Blood Alcohol Count"},{en:"Blood Alcohol Content (or Concentration)",it:"Blood Alcohol Content (Concentrazione Alcolica nel Sangue)"},{en:"Breath Alcohol Calculation",it:"Breath Alcohol Calculation"},{en:"Body Alcohol Capability",it:"Body Alcohol Capability"}],correct:1,explain_en:"BAC = Blood Alcohol Content/Concentration. 0.08% means 0.08 grams of alcohol per 100 mL of blood.",explain_it:"BAC = Blood Alcohol Content. 0,08% significa 0,08 grammi di alcol per 100 mL di sangue."},
  {cat:"alcohol",en:"DUI reinstatement in Florida requires:",it:"Il ripristino DUI in Florida richiede:",options:[{en:"Only paying a reinstatement fee",it:"Solo pagare una quota di ripristino"},{en:"DUI school, substance abuse evaluation, any required treatment, fees, and FR-44 insurance",it:"Scuola DUI, valutazione abuso sostanze, eventuale trattamento, quote e assicurazione FR-44"},{en:"Simply wait out the revocation period",it:"Semplicemente aspettare il periodo di revoca"},{en:"Pass the knowledge test only",it:"Solo superare il test di conoscenza"}],correct:1,explain_en:"DUI reinstatement requires: DUI school, substance abuse evaluation (and treatment), reinstatement fee, and FR-44 insurance.",explain_it:"Il ripristino DUI richiede: scuola DUI, valutazione abuso sostanze (e trattamento), quota di ripristino e assicurazione FR-44."},
  {cat:"alcohol",en:"Drug Recognition Experts (DRE) are trained to:",it:"Gli Esperti di Riconoscimento delle Droghe (DRE) sono formati per:",options:[{en:"Analyze blood samples in the lab",it:"Analizzare campioni di sangue in laboratorio"},{en:"Evaluate whether drivers are impaired by drugs other than alcohol",it:"Valutare se i conducenti sono compromessi da droghe diverse dall'alcol"},{en:"Consult on medication-related cases",it:"Consultare su casi legati ai farmaci"},{en:"Specialize as DUI judges",it:"Specializzarsi come giudici DUI"}],correct:1,explain_en:"DREs are specially trained officers using a 12-step evaluation to determine drug impairment beyond alcohol.",explain_it:"I DRE sono agenti appositamente formati che usano una valutazione in 12 fasi per determinare la compromissione da droghe."},
  {cat:"alcohol",en:"Alcohol poisoning is dangerous because:",it:"L'avvelenamento da alcol è pericoloso perché:",options:[{en:"It is the same as being legally drunk",it:"È lo stesso che essere legalmente ubriachi"},{en:"It causes unconsciousness, vomiting, seizures, and respiratory depression — life-threatening",it:"Causa incoscienza, vomito, convulsioni e depressione respiratoria — potenzialmente fatale"},{en:"Only a mild hangover effect",it:"Solo un lieve effetto da postumi"},{en:"Only from mixing alcohol with medications",it:"Solo dalla miscela di alcol con farmaci"}],correct:1,explain_en:"Alcohol poisoning (BAC ~0.25%+): unconsciousness, vomiting while unconscious, seizures, respiratory depression. Requires immediate medical attention.",explain_it:"Avvelenamento da alcol (BAC ~0,25%+): incoscienza, vomito, convulsioni, depressione respiratoria. Richiede assistenza medica immediata."},


  // ══ SESSION 2 — LICENSE +45 ═══════════════════════════════════
  {cat:"license",en:"To get a Florida driver's license for the first time you need:",it:"Per ottenere la patente Florida per la prima volta hai bisogno di:",options:[{en:"Another state's license only",it:"Solo la patente di un altro stato"},{en:"Primary ID, Social Security proof, two FL residency proofs, and TLSAE/DETS completion",it:"Documento d'identità primario, prova SS, due prove di residenza FL e completamento TLSAE/DETS"},{en:"Passport and utility bill only",it:"Solo passaporto e bolletta"},{en:"Birth certificate and school enrollment",it:"Certificato di nascita e iscrizione scolastica"}],correct:1,explain_en:"Florida requires: primary ID, Social Security, two FL residency docs, and TLSAE/DETS course completion for first-time applicants.",explain_it:"La Florida richiede: documento primario, previdenza sociale, due documenti di residenza FL e completamento TLSAE/DETS."},
  {cat:"license",en:"TLSAE course for first-time adult drivers is:",it:"Il corso TLSAE per i conducenti adulti per la prima volta è:",options:[{en:"A 6-hour teen driving course",it:"Un corso di guida adolescenti di 6 ore"},{en:"A 4-hour Traffic Law and Substance Abuse Education course",it:"Un corso di 4 ore sull'Educazione alle Leggi del Traffico e sull'Abuso di Sostanze"},{en:"A technical license exam",it:"Un esame tecnico di patente"},{en:"A commercial vehicle test",it:"Un test per veicoli commerciali"}],correct:1,explain_en:"TLSAE (Traffic Law and Substance Abuse Education) is a 4-hour course required for adults (18+) getting their first Florida license.",explain_it:"TLSAE è un corso di 4 ore richiesto per gli adulti (18+) che ottengono la loro prima patente Florida."},
  {cat:"license",en:"Florida's DETS course for teen drivers is:",it:"Il corso DETS della Florida per i conducenti adolescenti è:",options:[{en:"A 4-hour drug education course",it:"Un corso di educazione sulle droghe di 4 ore"},{en:"A state-approved 6-hour driver education course for drivers under 18",it:"Un corso di educazione alla guida di 6 ore approvato dallo stato per i conducenti under 18"},{en:"A defensive driving course for repeat offenders",it:"Un corso di guida difensiva per recidivi"},{en:"An optional online driving test",it:"Un test di guida online facoltativo"}],correct:1,explain_en:"DETS is a 6-hour state-approved course required for drivers under 18 seeking a Florida learner's license.",explain_it:"DETS è un corso di 6 ore approvato dallo stato richiesto per i conducenti under 18 che richiedono il permesso per principianti."},
  {cat:"license",en:"What is a 'Class E' Florida driver license?",it:"Cos'è una patente di guida 'Class E' della Florida?",options:[{en:"A commercial truck license",it:"Una patente per camion commerciali"},{en:"The standard non-commercial license for vehicles up to 26,000 lbs GVWR",it:"La patente non commerciale standard per veicoli fino a 26.000 libbre GVWR"},{en:"A motorcycle-only license",it:"Una patente solo per motociclette"},{en:"A learner's permit class",it:"Una classe di permesso per principianti"}],correct:1,explain_en:"Class E is Florida's standard license for non-commercial vehicles with GVWR of 26,000 lbs or less — the most common type.",explain_it:"La Class E è la patente standard della Florida per veicoli non commerciali con GVWR di 26.000 libbre o meno."},
  {cat:"license",en:"Florida's point system adds 6 points for:",it:"Il sistema a punti della Florida aggiunge 6 punti per:",options:[{en:"Speeding 15+ mph over the limit",it:"Eccesso di velocità di 15+ mph"},{en:"Any moving violation causing a crash",it:"Qualsiasi violazione in movimento che causa un incidente"},{en:"Driving on a suspended license",it:"Guidare con la patente sospesa"},{en:"Failure to signal",it:"Mancato uso dei segnali"}],correct:1,explain_en:"Any moving violation causing a crash adds 6 points. Speeding 15+ mph adds 4; less than 15 adds 3.",explain_it:"Qualsiasi violazione in movimento che causa un incidente aggiunge 6 punti. Eccesso 15+ mph aggiunge 4; meno di 15 aggiunge 3."},
  {cat:"license",en:"Speeding 15 mph or more over the limit adds how many points in Florida?",it:"L'eccesso di velocità di 15 mph o più oltre il limite aggiunge quanti punti in Florida?",options:[{en:"2 points",it:"2 punti"},{en:"3 points",it:"3 punti"},{en:"4 points",it:"4 punti"},{en:"6 points",it:"6 punti"}],correct:2,explain_en:"Speeding 15+ mph over the limit adds 4 points. Less than 15 mph over = 3 points.",explain_it:"L'eccesso di velocità di 15+ mph aggiunge 4 punti. Meno di 15 mph = 3 punti."},
  {cat:"license",en:"How many points trigger a 3-month license suspension in Florida?",it:"Quanti punti provocano una sospensione di 3 mesi in Florida?",options:[{en:"12 points in 12 months",it:"12 punti in 12 mesi"},{en:"18 points in 18 months",it:"18 punti in 18 mesi"},{en:"24 points in 36 months",it:"24 punti in 36 mesi"},{en:"30 points in 36 months",it:"30 punti in 36 mesi"}],correct:1,explain_en:"Florida: 12 pts/12mo = 30 days; 18 pts/18mo = 3 months; 24 pts/36mo = 1 year.",explain_it:"Florida: 12 punti/12 mesi = 30 giorni; 18 punti/18 mesi = 3 mesi; 24 punti/36 mesi = 1 anno."},
  {cat:"license",en:"A Florida driver can avoid points after a citation by:",it:"Un conducente in Florida può evitare i punti dopo una multa:",options:[{en:"Paying the fine immediately",it:"Pagando immediatamente la multa"},{en:"Electing a BDI course within 30 days to withhold adjudication",it:"Scegliendo un corso BDI entro 30 giorni per sospendere il giudizio"},{en:"Points cannot be avoided for any violation",it:"I punti non possono essere evitati"},{en:"Contesting the ticket always removes points",it:"Contestare la multa rimuove sempre i punti"}],correct:1,explain_en:"Florida allows a BDI (Basic Driver Improvement) course once/year (up to 5 times lifetime) to withhold adjudication and avoid points.",explain_it:"La Florida consente un corso BDI una volta all'anno (fino a 5 volte nel corso della vita) per sospendere il giudizio ed evitare i punti."},
  {cat:"license",en:"'Withhold of adjudication' for a traffic ticket means:",it:"La 'sospensione del giudizio' per una multa significa:",options:[{en:"The ticket is dismissed with no fine",it:"La multa viene archiviata senza multa"},{en:"The court does not formally convict you — no points added",it:"Il tribunale non ti condanna formalmente — nessun punto aggiunto"},{en:"You are convicted but fine is reduced",it:"Sei condannato ma la multa è ridotta"},{en:"The ticket is deferred 6 months",it:"La multa viene rinviata di 6 mesi"}],correct:1,explain_en:"Withhold of adjudication: court accepts your plea without formally adjudicating guilty — no conviction and no points.",explain_it:"Sospensione del giudizio: il tribunale accetta la dichiarazione senza giudicare formalmente colpevole — nessuna condanna e nessun punto."},
  {cat:"license",en:"Major violations leading to habitual offender status include:",it:"Le violazioni gravi che portano allo status di trasgressore abituale includono:",options:[{en:"Any speeding ticket",it:"Qualsiasi multa per eccesso di velocità"},{en:"DUI, leaving the scene, racing, fleeing law enforcement",it:"DUI, fuga dalla scena, corse, fuga dalle forze dell'ordine"},{en:"Parking violations",it:"Violazioni di parcheggio"},{en:"Failure to renew registration",it:"Mancato rinnovo della registrazione"}],correct:1,explain_en:"Major violations: DUI, leaving the scene, driving with revoked license, racing, and fleeing from law enforcement.",explain_it:"Violazioni gravi: DUI, fuga dalla scena, guida con patente revocata, corse e fuga dalle forze dell'ordine."},
  {cat:"license",en:"Florida's FR-44 (SR-22) insurance certificate proves:",it:"Il certificato assicurativo FR-44 (SR-22) della Florida prova:",options:[{en:"You own the vehicle",it:"Sei proprietario del veicolo"},{en:"You carry the state-required minimum liability insurance — filed by insurer with FLHSMV",it:"Hai l'assicurazione di responsabilità minima richiesta dallo stato — presentata dall'assicuratore al FLHSMV"},{en:"Special teen driver insurance",it:"Assicurazione speciale per conducenti adolescenti"},{en:"Collision insurance after any accident",it:"Assicurazione di collisione dopo qualsiasi incidente"}],correct:1,explain_en:"FR-44/SR-22: certificate filed by your insurer with FLHSMV proving minimum required insurance — needed after certain violations.",explain_it:"FR-44/SR-22: certificato presentato dall'assicuratore al FLHSMV che prova l'assicurazione minima — richiesto dopo alcune violazioni."},
  {cat:"license",en:"What is 'PIP' insurance in Florida?",it:"Cos'è l'assicurazione 'PIP' in Florida?",options:[{en:"Property Insurance Protection",it:"Property Insurance Protection"},{en:"Personal Injury Protection — pays your medical expenses regardless of fault, up to $10,000",it:"Personal Injury Protection — paga le spese mediche indipendentemente dalla responsabilità, fino a $10.000"},{en:"Pedestrian Injury Protection",it:"Pedestrian Injury Protection"},{en:"Permanent Injury Plan",it:"Permanent Injury Plan"}],correct:1,explain_en:"PIP is Florida's no-fault insurance paying up to $10,000 for your medical expenses and 60% lost wages after a crash.",explain_it:"PIP è l'assicurazione no-fault della Florida che paga fino a $10.000 per spese mediche e 60% dei salari persi dopo un incidente."},
  {cat:"license",en:"Florida's minimum PDL (Property Damage Liability) requirement is:",it:"Il requisito minimo PDL (Responsabilità per Danni alla Proprietà) della Florida è:",options:[{en:"$5,000",it:"$5.000"},{en:"$10,000",it:"$10.000"},{en:"$25,000",it:"$25.000"},{en:"$50,000",it:"$50.000"}],correct:1,explain_en:"Florida requires a minimum $10,000 PDL (Property Damage Liability) covering damage you cause to another's property.",explain_it:"La Florida richiede un minimo di $10.000 PDL che copre i danni causati alla proprietà di un'altra persona."},
  {cat:"license",en:"Florida's Graduated Driver License (GDL) curfew is:",it:"Il coprifuoco della Patente a Guida Progressiva (GDL) della Florida è:",options:[{en:"9 PM to 6 AM",it:"21:00-6:00"},{en:"11 PM to 6 AM",it:"23:00-6:00"},{en:"10 PM to 5 AM",it:"22:00-5:00"},{en:"Midnight to 5 AM",it:"Mezzanotte-5:00"}],correct:1,explain_en:"GDL curfew: teens on provisional license may not drive from 11 PM to 6 AM (with exceptions for work, school, etc.).",explain_it:"Coprifuoco GDL: i giovani con patente provvisoria non possono guidare dalle 23:00 alle 6:00 (con eccezioni per lavoro, scuola, ecc.)."},
  {cat:"license",en:"During the first year of a Florida provisional license, passengers under 18 are limited to:",it:"Durante il primo anno di patente provvisoria in Florida, i passeggeri under 18 sono limitati a:",options:[{en:"No limit",it:"Nessun limite"},{en:"Only 1 passenger under 18 unless a licensed adult 21+ is present",it:"Solo 1 passeggero under 18 a meno che non ci sia un adulto con patente 21+ presente"},{en:"No passengers under 18 at all",it:"Nessun passeggero under 18"},{en:"Maximum 3 regardless of age",it:"Massimo 3 indipendentemente dall'età"}],correct:1,explain_en:"First year provisional: only 1 passenger under 18 unless a licensed driver 21+ is in the vehicle. Family members exempt.",explain_it:"Primo anno provvisorio: solo 1 passeggero under 18 a meno che non ci sia un conducente patentato 21+ nel veicolo. Familiari esenti."},
  {cat:"license",en:"'Driving While License Suspended' (DWLS) is in Florida:",it:"'Guidare con la Patente Sospesa' (DWLS) in Florida è:",options:[{en:"A civil infraction with $50 fine",it:"Un'infrazione civile con multa di $50"},{en:"A criminal offense — misdemeanor first, felony third+ offense",it:"Un reato penale — infrazione minore al primo, crimine alla terza+ offesa"},{en:"Only results in points being added",it:"Risulta solo nell'aggiunta di punti"},{en:"Not prohibited for work/school driving",it:"Non vietato per guidare al lavoro/scuola"}],correct:1,explain_en:"DWLS: first offense = 2nd-degree misdemeanor; second = 1st-degree misdemeanor; third+ = 3rd-degree felony.",explain_it:"DWLS: prima offesa = infrazione minore di 2° grado; seconda = 1° grado; terza+ = crimine di 3° grado."},
  {cat:"license",en:"Florida's Financial Responsibility Law requires drivers to:",it:"La Legge sulla Responsabilità Finanziaria della Florida richiede ai conducenti di:",options:[{en:"Pay taxes on vehicle purchases",it:"Pagare le tasse sugli acquisti di veicoli"},{en:"Maintain minimum insurance to cover damages they cause to others",it:"Mantenere un'assicurazione minima per coprire i danni causati agli altri"},{en:"Register all vehicles with a loan",it:"Registrare tutti i veicoli con un prestito"},{en:"Prove income to obtain a license",it:"Dimostrare il reddito per ottenere la patente"}],correct:1,explain_en:"Florida's Financial Responsibility Law: all drivers must be financially responsible for damages they cause — minimum PIP + PDL.",explain_it:"La Legge sulla Responsabilità Finanziaria: tutti i conducenti devono essere finanziariamente responsabili per i danni — minimo PIP + PDL."},
  {cat:"license",en:"Reckless driving conviction in Florida adds:",it:"La condanna per guida spericolata in Florida aggiunge:",options:[{en:"No points",it:"Nessun punto"},{en:"4 points — and the court may suspend your license",it:"4 punti — e il tribunale può sospendere la patente"},{en:"Automatic 1-year revocation",it:"Revoca automatica di 1 anno"},{en:"Only a warning for first offense",it:"Solo un avvertimento alla prima offesa"}],correct:1,explain_en:"Reckless driving: 4 points added. Courts may also impose discretionary license suspension.",explain_it:"Guida spericolata: 4 punti aggiunti. I tribunali possono anche imporre una sospensione discrezionale."},
  {cat:"license",en:"Florida's organ donor program on a driver's license is:",it:"Il programma di donazione degli organi sulla patente della Florida è:",options:[{en:"Mandatory for all holders",it:"Obbligatorio per tutti i titolari"},{en:"Voluntary — designation noted on license and in the registry",it:"Volontario — la designazione è annotata sulla patente e nel registro"},{en:"Requires parental consent under 21",it:"Richiede il consenso dei genitori under 21"},{en:"Has no legal effect",it:"Non ha effetto legale"}],correct:1,explain_en:"Florida organ donor program is voluntary. Designation is stored in the Florida Organ and Tissue Donor Registry.",explain_it:"Il programma è volontario. La designazione è memorizzata nel Registro dei Donatori di Organi e Tessuti della Florida."},
  {cat:"license",en:"The minimum age for interstate CDL driving in Florida is:",it:"L'età minima per la guida CDL interstatale in Florida è:",options:[{en:"18 for all CDL",it:"18 per tutto il CDL"},{en:"18 intrastate; 21 interstate",it:"18 intrastatale; 21 interstatale"},{en:"21 for all CDL",it:"21 per tutto il CDL"},{en:"16 with parental consent",it:"16 con il consenso dei genitori"}],correct:1,explain_en:"CDL: minimum 18 years for intrastate (within Florida), 21 years for interstate (crossing state lines) operations.",explain_it:"CDL: minimo 18 anni per intrastatale (all'interno della Florida), 21 anni per interstatale (attraversamento dei confini statali)."},
  {cat:"license",en:"Florida comparative negligence means:",it:"La negligenza comparata della Florida significa:",options:[{en:"Only the most negligent party pays",it:"Solo la parte più negligente paga"},{en:"Each party pays in proportion to their percentage of fault",it:"Ogni parte paga in proporzione alla loro percentuale di responsabilità"},{en:"Negligence determined only by police report",it:"La negligenza determinata solo dalla relazione della polizia"},{en:"Florida uses pure contributory negligence",it:"La Florida usa la negligenza contributiva pura"}],correct:1,explain_en:"Modified comparative negligence: if more than 50% at fault, you cannot recover damages. Otherwise, compensation reduced by fault %.",explain_it:"Negligenza comparata modificata: se più del 50% responsabile, non puoi recuperare danni. Altrimenti, compensazione ridotta della % di responsabilità."},
  {cat:"license",en:"Information to exchange after a Florida crash includes:",it:"Le informazioni da scambiare dopo un incidente in Florida includono:",options:[{en:"Insurance company and policy number only",it:"Solo compagnia assicurativa e numero di polizza"},{en:"Name, address, vehicle registration number, and insurance information",it:"Nome, indirizzo, numero di registrazione del veicolo e informazioni assicurative"},{en:"License plate number only",it:"Solo il numero di targa"},{en:"Only your driver's license number",it:"Solo il tuo numero di patente"}],correct:1,explain_en:"After a crash exchange: name, address, vehicle registration number, and proof of insurance. Also provide driver's license if requested.",explain_it:"Dopo un incidente scambia: nome, indirizzo, numero di registrazione del veicolo e prova dell'assicurazione."},
  {cat:"license",en:"Florida restriction codes on a license indicate:",it:"I codici di restrizione su una patente della Florida indicano:",options:[{en:"The license has been suspended",it:"La patente è stata sospesa"},{en:"A specific condition — such as 'corrective lenses required'",it:"Una condizione specifica — come 'lenti correttive richieste'"},{en:"The driver is on probation",it:"Il conducente è in libertà vigilata"},{en:"The license is provisional",it:"La patente è provvisoria"}],correct:1,explain_en:"Restriction codes indicate conditions on driving privileges: corrective lenses (A), daytime only (B), no expressway, etc.",explain_it:"I codici di restrizione indicano condizioni sui privilegi di guida: lenti correttive (A), solo di giorno (B), nessuna autostrada, ecc."},
  {cat:"license",en:"What is a 'hardship reinstatement' in Florida?",it:"Cos'è un 'ripristino per necessità' in Florida?",options:[{en:"Automatic reinstatement after paying a fine",it:"Ripristino automatico dopo aver pagato una multa"},{en:"A court-granted limited driving privilege during suspension for work or medical needs",it:"Un privilegio di guida limitato concesso dal tribunale durante una sospensione per lavoro o cure mediche"},{en:"A traffic school to reduce suspension length",it:"Una scuola di guida per ridurre la sospensione"},{en:"Emergency driving rights granted by the DMV",it:"Diritti di guida di emergenza concessi dal DMV"}],correct:1,explain_en:"Hardship reinstatement (BPO or EPO license): court-granted limited driving privilege for essential needs during suspension.",explain_it:"Il ripristino per necessità: privilegio di guida limitato concesso dal tribunale per bisogni essenziali durante una sospensione."},
  {cat:"license",en:"To get a motorcycle endorsement on a Florida license you must:",it:"Per ottenere l'abilitazione alla moto sulla patente Florida devi:",options:[{en:"Pass the same Class E test",it:"Superare lo stesso test Class E"},{en:"Complete a MSAP course or pass a motorcycle skills test",it:"Completare un corso MSAP o superare un test di abilità moto"},{en:"Only an online motorcycle theory exam",it:"Solo un esame teorico online sulla moto"},{en:"No additional requirement",it:"Nessun requisito aggiuntivo"}],correct:1,explain_en:"Motorcycle endorsement: complete MSAP (Motorcycle Safety Awareness Program) or pass the DHSMV motorcycle skills test.",explain_it:"Abilitazione moto: completa il corso MSAP o supera il test di abilità moto DHSMV."},
  {cat:"license",en:"Florida vision screening for a driver's license requires:",it:"Lo screening visivo della Florida per la patente richiede:",options:[{en:"All drivers to have 20/20 uncorrected vision",it:"Tutti i conducenti con visione 20/20 non corretta"},{en:"Meeting minimum standards — corrective lenses noted on license if needed",it:"Soddisfare gli standard minimi — le lenti correttive vengono annotate sulla patente se necessario"},{en:"Screening only for drivers over 65",it:"Screening solo per i conducenti over 65"},{en:"Vision is not tested",it:"La visione non viene testata"}],correct:1,explain_en:"Florida requires vision screening during license application. If corrective lenses are required, this appears as a restriction on the license.",explain_it:"La Florida richiede lo screening visivo. Se sono richieste lenti correttive, appare come restrizione sulla patente."},
  {cat:"license",en:"GDL curfew exceptions in Florida include:",it:"Le eccezioni al coprifuoco GDL in Florida includono:",options:[{en:"No exceptions",it:"Nessuna eccezione"},{en:"Driving to/from work, school, or with a licensed adult 21+",it:"Guidare da/verso lavoro, scuola o con un adulto patentato 21+"},{en:"Only on school nights",it:"Solo nelle notti scolastiche"},{en:"Only after 6 months of holding the license",it:"Solo dopo 6 mesi dalla patente"}],correct:1,explain_en:"GDL curfew (11 PM–6 AM) exceptions: travel to/from work, school-sanctioned activities, or with licensed 21+ driver in front seat.",explain_it:"Eccezioni coprifuoco GDL (23:00-6:00): viaggio da/verso lavoro, attività scolastiche o con conducente 21+ in sedile anteriore."},
  {cat:"license",en:"A 'moving violation' is any traffic violation that occurs:",it:"Una 'violazione in movimento' è qualsiasi violazione del traffico che si verifica:",options:[{en:"While a vehicle is being towed",it:"Mentre un veicolo viene trainato"},{en:"While the vehicle is in motion — speeding, red lights, illegal turns",it:"Mentre il veicolo è in movimento — eccesso di velocità, semafori rossi, svolte illegali"},{en:"Only in construction zones",it:"Solo nelle zone di lavori"},{en:"Only for commercial drivers",it:"Solo per i conducenti commerciali"}],correct:1,explain_en:"A moving violation occurs while the vehicle is in motion — speeding, red lights, illegal turns, failure to yield. Adds points to record.",explain_it:"Una violazione in movimento si verifica mentre il veicolo è in movimento — eccesso di velocità, rosso, svolte illegali. Aggiunge punti al casellario."},
  {cat:"license",en:"Non-owner auto insurance provides:",it:"L'assicurazione auto non-proprietario fornisce:",options:[{en:"Coverage when someone borrows your car",it:"Copertura quando qualcuno prende in prestito la tua auto"},{en:"Liability coverage for drivers who don't own a vehicle but occasionally drive others' cars",it:"Copertura di responsabilità per i conducenti che non possiedono un veicolo ma guidano occasionalmente le auto degli altri"},{en:"Rental car insurance only",it:"Solo assicurazione per auto a noleggio"},{en:"Coverage only for commercial vehicles",it:"Copertura solo per veicoli commerciali"}],correct:1,explain_en:"Non-owner insurance provides liability coverage for drivers without a vehicle who occasionally borrow or rent cars. Often required for reinstatement.",explain_it:"L'assicurazione non-proprietario fornisce copertura di responsabilità per i conducenti senza veicolo che guidano occasionalmente auto degli altri."},
  {cat:"license",en:"Florida license reinstatement fee after a point suspension is typically:",it:"La quota di ripristino della patente dopo una sospensione per punti è tipicamente:",options:[{en:"Free — reinstatement is automatic",it:"Gratuita — il ripristino è automatico"},{en:"Around $45-$60 plus any required course fees",it:"Circa $45-$60 più eventuali quote del corso"},{en:"A flat $500 fine",it:"Una multa fissa di $500"},{en:"Only the cost of a new photo",it:"Solo il costo di una nuova foto"}],correct:1,explain_en:"Florida charges a reinstatement fee (~$45 basic) plus any required course fees (BDI, DUI school, etc.) to restore a suspended license.",explain_it:"La Florida addebita una quota di ripristino (~$45 base) più eventuali quote del corso (BDI, scuola DUI, ecc.)."},
  {cat:"license",en:"What is Florida's 'no-fault' insurance system?",it:"Cos'è il sistema assicurativo 'no-fault' della Florida?",options:[{en:"Drivers pay their own expenses regardless of fault",it:"I conducenti pagano le proprie spese indipendentemente dalla responsabilità"},{en:"PIP pays your own medical expenses up to $10,000 regardless of who caused the crash",it:"Il PIP paga le tue spese mediche fino a $10.000 indipendentemente da chi ha causato l'incidente"},{en:"Nobody is ever at fault in Florida",it:"Nessuno è mai responsabile in Florida"},{en:"Insurance companies determine fault before any payment",it:"Le compagnie assicurative determinano la responsabilità prima di qualsiasi pagamento"}],correct:1,explain_en:"Florida's no-fault system: PIP pays your own medical costs up to $10,000 regardless of fault, speeding up claims.",explain_it:"Il sistema no-fault della Florida: il PIP paga le tue spese mediche fino a $10.000 indipendentemente dalla responsabilità, accelerando le richieste."},
  {cat:"license",en:"Florida requires proof of PIP and PDL insurance to be carried:",it:"La Florida richiede che la prova dell'assicurazione PIP e PDL sia portata:",options:[{en:"Only for commercial vehicles",it:"Solo per i veicoli commerciali"},{en:"At all times in the vehicle",it:"In ogni momento nel veicolo"},{en:"Only when driving on interstates",it:"Solo quando si guida sulle autostrade interstatali"},{en:"Only when towing",it:"Solo quando si traino"}],correct:1,explain_en:"Florida law requires proof of PIP and PDL insurance in the vehicle at all times. Failure to present it = citation.",explain_it:"La legge della Florida richiede la prova dell'assicurazione nel veicolo in ogni momento. Mancata presentazione = citazione."},
  {cat:"license",en:"What does Florida's 'Implied Consent' mean for driving?",it:"Cosa significa il 'Consenso Implicito' della Florida per la guida?",options:[{en:"You must verbally consent to every stop",it:"Devi acconsentire verbalmente a ogni fermo"},{en:"Operating a vehicle = automatic consent to BAC testing if lawfully arrested for DUI",it:"Operare un veicolo = consenso automatico ai test BAC se legalmente arrestato per DUI"},{en:"You must sign a form before driving",it:"Devi firmare un modulo prima di guidare"},{en:"Police cannot search without verbal consent",it:"La polizia non può perquisire senza consenso verbale"}],correct:1,explain_en:"Florida Implied Consent: obtaining a license and driving = automatic consent to chemical BAC testing when lawfully arrested.",explain_it:"Consenso Implicito Florida: ottenere la patente e guidare = consenso automatico ai test chimici BAC quando legalmente arrestato."},
  {cat:"license",en:"Florida habitual offender status results from accumulating how many major convictions in 5 years?",it:"Lo status di trasgressore abituale in Florida deriva dall'accumulo di quante condanne gravi in 5 anni?",options:[{en:"2 major convictions",it:"2 condanne gravi"},{en:"3 major convictions",it:"3 condanne gravi"},{en:"4 major convictions",it:"4 condanne gravi"},{en:"5 major convictions",it:"5 condanne gravi"}],correct:1,explain_en:"3 major violations (DUI, leaving scene, racing, etc.) within 5 years = habitual traffic offender status and 5-year revocation.",explain_it:"3 violazioni gravi (DUI, fuga dalla scena, corse, ecc.) in 5 anni = status di trasgressore abituale e revoca di 5 anni."},
  {cat:"license",en:"What is 'comparative negligence' in Florida accident law?",it:"Cos'è la 'negligenza comparata' nella legge sugli incidenti in Florida?",options:[{en:"Only the most negligent party pays",it:"Solo la parte più negligente paga"},{en:"Each party's compensation is reduced by their percentage of fault",it:"Il risarcimento di ogni parte è ridotto della loro percentuale di responsabilità"},{en:"Fault only determined by police",it:"La responsabilità determinata solo dalla polizia"},{en:"Florida uses pure contributory negligence",it:"La Florida usa la negligenza contributiva pura"}],correct:1,explain_en:"Modified comparative negligence: your compensation is reduced by your % of fault. If 50%+ at fault, you cannot recover damages.",explain_it:"Negligenza comparata modificata: il tuo risarcimento è ridotto della tua % di responsabilità. Se 50%+ responsabile, non puoi recuperare danni."},
  {cat:"license",en:"Florida license suspension of 30 days is triggered by:",it:"La sospensione della patente di 30 giorni in Florida è scatenata da:",options:[{en:"18 points in 18 months",it:"18 punti in 18 mesi"},{en:"12 points in 12 months",it:"12 punti in 12 mesi"},{en:"24 points in 36 months",it:"24 punti in 36 mesi"},{en:"6 points in 6 months",it:"6 punti in 6 mesi"}],correct:1,explain_en:"12 points within 12 months = 30-day suspension. 18 points/18 months = 3 months. 24 points/36 months = 1 year.",explain_it:"12 punti in 12 mesi = sospensione di 30 giorni. 18 punti/18 mesi = 3 mesi. 24 punti/36 mesi = 1 anno."},
  {cat:"license",en:"Florida license reinstatement after DUI revocation requires maintaining FR-44 for:",it:"Il ripristino della patente Florida dopo la revoca DUI richiede di mantenere l'FR-44 per:",options:[{en:"6 months",it:"6 mesi"},{en:"3 years from reinstatement date",it:"3 anni dalla data di ripristino"},{en:"1 year",it:"1 anno"},{en:"Only until the first renewal",it:"Solo fino al primo rinnovo"}],correct:1,explain_en:"FR-44 insurance must be maintained for 3 years from the reinstatement date after a DUI revocation.",explain_it:"L'assicurazione FR-44 deve essere mantenuta per 3 anni dalla data di ripristino dopo una revoca DUI."},

  // ══ SESSION 3 — SIGNS +30 ═════════════════════════════════════
  {cat:"signs",en:"What does a STOP sign require you to do?",it:"Cosa richiede un segnale STOP?",options:[{en:"Slow to 5 mph and proceed if clear",it:"Rallentare a 5 mph e procedere se libero"},{en:"Come to a complete stop before the line, then yield before proceeding",it:"Effettuare un arresto completo prima della linea, poi cedere la precedenza"},{en:"Stop only if other vehicles are present",it:"Fermarsi solo se altri veicoli sono presenti"},{en:"Stop for 3 seconds then go",it:"Fermarsi 3 secondi poi andare"}],correct:1,explain_en:"A STOP sign requires a complete stop before the stop line or crosswalk. After stopping, yield to all traffic and pedestrians before proceeding.",explain_it:"Un segnale STOP richiede un arresto completo prima della linea. Dopo la fermata, cedi la precedenza a tutto il traffico e ai pedoni prima di procedere."},
  {cat:"signs",en:"What color are guide signs (showing routes and distances) on highways?",it:"Di che colore sono i segnali di guida (percorsi e distanze) in autostrada?",options:[{en:"Blue",it:"Blu"},{en:"Green",it:"Verde"},{en:"White",it:"Bianco"},{en:"Brown",it:"Marrone"}],correct:1,explain_en:"Green signs are used for highway guide information — route numbers, distances to cities, and highway exits.",explain_it:"I segnali verdi sono usati per le informazioni guida in autostrada — numeri di percorso, distanze dalle citta e uscite."},
  {cat:"signs",en:"What color are recreational and cultural interest signs?",it:"Di che colore sono i segnali per aree ricreative e di interesse culturale?",options:[{en:"Green",it:"Verde"},{en:"Blue",it:"Blu"},{en:"Brown",it:"Marrone"},{en:"Yellow",it:"Giallo"}],correct:2,explain_en:"Brown signs indicate recreational areas, parks, scenic areas, and cultural points of interest.",explain_it:"I segnali marroni indicano aree ricreative, parchi, zone panoramiche e punti di interesse culturale."},
  {cat:"signs",en:"What do blue highway signs indicate?",it:"Cosa indicano i segnali blu in autostrada?",options:[{en:"Speed limits",it:"Limiti di velocita"},{en:"Motorist services — gas, food, lodging, hospitals",it:"Servizi per automobilisti — carburante, cibo, alloggio, ospedali"},{en:"Construction zones",it:"Zone di costruzione"},{en:"State border crossings",it:"Attraversamenti di confini statali"}],correct:1,explain_en:"Blue signs indicate motorist services: gas stations, restaurants, lodging, hospitals, and rest areas.",explain_it:"I segnali blu indicano servizi per automobilisti: stazioni di servizio, ristoranti, alloggi, ospedali e aree di sosta."},
  {cat:"signs",en:"A flashing yellow traffic light means:",it:"Un semaforo giallo lampeggiante significa:",options:[{en:"Stop and wait for green",it:"Fermarsi e aspettare il verde"},{en:"Proceed with caution — slow down and watch for hazards",it:"Procedere con cautela — rallentare e fare attenzione ai pericoli"},{en:"The light is malfunctioning — treat as four-way stop",it:"Il semaforo e in avaria — trattare come incrocio a quattro vie"},{en:"Yield to all traffic",it:"Cedere la precedenza a tutto il traffico"}],correct:1,explain_en:"A flashing yellow light means slow down and proceed with caution. It is a warning signal, not a stop signal.",explain_it:"Un semaforo giallo lampeggiante significa rallentare e procedere con cautela. E un segnale di avvertimento, non di stop."},
  {cat:"signs",en:"A flashing red traffic light means:",it:"Un semaforo rosso lampeggiante significa:",options:[{en:"Proceed at reduced speed",it:"Procedere a velocita ridotta"},{en:"Stop completely, then proceed when safe — same as a STOP sign",it:"Fermarsi completamente, poi procedere quando sicuro — come un segnale STOP"},{en:"Yield without stopping",it:"Cedere senza fermarsi"},{en:"Signal is broken — proceed normally",it:"Il segnale e rotto — procedere normalmente"}],correct:1,explain_en:"A flashing red light is treated the same as a STOP sign: come to a complete stop, then proceed when safe.",explain_it:"Un semaforo rosso lampeggiante si tratta come un segnale STOP: fermata completa, poi procedere quando sicuro."},
  {cat:"signs",en:"What does a green arrow on a traffic signal mean?",it:"Cosa significa una freccia verde su un semaforo?",options:[{en:"Proceed in any direction",it:"Procedere in qualsiasi direzione"},{en:"A protected turn is allowed in the direction of the arrow — oncoming traffic is stopped",it:"E consentita una svolta protetta nella direzione della freccia — il traffico in arrivo e fermato"},{en:"Yield before turning in arrow direction",it:"Cedere prima di svoltare nella direzione della freccia"},{en:"Turn only if no pedestrians are crossing",it:"Svoltare solo se non ci sono pedoni che attraversano"}],correct:1,explain_en:"A green arrow means a protected turn — oncoming traffic and conflicting movements are stopped by red lights.",explain_it:"Una freccia verde significa una svolta protetta — il traffico in arrivo e i movimenti in conflitto sono fermati dal rosso."},
  {cat:"signs",en:"A 'Wrong Way' sign means:",it:"Un segnale 'Wrong Way' significa:",options:[{en:"You may proceed but use caution",it:"Puoi procedere ma con cautela"},{en:"You are driving against the flow of traffic — turn around immediately",it:"Stai guidando contro il flusso del traffico — gira immediatamente"},{en:"A detour is required ahead",it:"E richiesta una deviazione in avanti"},{en:"Construction workers are present",it:"Sono presenti operai edili"}],correct:1,explain_en:"A Wrong Way sign means you have entered a road going in the wrong direction. Turn around immediately and exit safely.",explain_it:"Un segnale Wrong Way significa che hai imboccato una strada nella direzione sbagliata. Gira subito e esci in sicurezza."},
  {cat:"signs",en:"What does a 'Do Not Enter' sign look like?",it:"Come appare un segnale 'Do Not Enter'?",options:[{en:"A yellow diamond with an X",it:"Un rombo giallo con una X"},{en:"A white square with red circle containing a white horizontal bar",it:"Un quadrato bianco con cerchio rosso contenente una barra orizzontale bianca"},{en:"A red octagon with white letters",it:"Un ottagono rosso con lettere bianche"},{en:"A black rectangle with white text",it:"Un rettangolo nero con testo bianco"}],correct:1,explain_en:"The Do Not Enter sign is a white square with a red circle and white horizontal bar. It marks one-way entries where you cannot enter.",explain_it:"Il segnale Do Not Enter e un quadrato bianco con cerchio rosso e barra orizzontale bianca. Segna ingressi a senso unico dove non puoi entrare."},
  {cat:"signs",en:"What does a 'One Way' sign look like?",it:"Come appare un segnale 'One Way'?",options:[{en:"A yellow circle with a single arrow",it:"Un cerchio giallo con una singola freccia"},{en:"A black rectangle with a white arrow pointing in the direction of travel",it:"Un rettangolo nero con una freccia bianca che punta nella direzione di marcia"},{en:"A red square with a white arrow",it:"Un quadrato rosso con una freccia bianca"},{en:"A white diamond with a black arrow",it:"Un rombo bianco con una freccia nera"}],correct:1,explain_en:"One Way signs are black rectangles with white arrows indicating the only direction of traffic flow.",explain_it:"I segnali One Way sono rettangoli neri con frecce bianche che indicano l'unica direzione del flusso del traffico."},
  {cat:"signs",en:"A 'Merge' sign means:",it:"Un segnale 'Merge' significa:",options:[{en:"Stop and wait for a gap in traffic",it:"Fermarsi e aspettare un'apertura nel traffico"},{en:"Your lane is ending and you must merge with the adjacent lane",it:"La tua corsia sta finendo e devi confluire con la corsia adiacente"},{en:"The road is widening — an extra lane is added",it:"La strada si allarga — viene aggiunta una corsia extra"},{en:"A lane is closing ahead due to construction",it:"Una corsia si chiude in avanti per lavori"}],correct:1,explain_en:"A Merge sign warns that your lane (or an entering lane) is combining with another. Adjust speed and position to merge safely.",explain_it:"Un segnale Merge avverte che la tua corsia si sta unendo a un'altra. Regola velocita e posizione per confluire in sicurezza."},
  {cat:"signs",en:"What does a 'Keep Right' sign indicate?",it:"Cosa indica un segnale 'Keep Right'?",options:[{en:"Pass only on the right",it:"Sorpassare solo a destra"},{en:"You must stay to the right side of a divider, island, or obstacle",it:"Devi rimanere sul lato destro di un divisore, isola o ostacolo"},{en:"Right turns only at the next intersection",it:"Solo svolte a destra al prossimo incrocio"},{en:"Right lane must be used on this road",it:"La corsia destra deve essere usata su questa strada"}],correct:1,explain_en:"Keep Right signs indicate a physical divider, island, or obstruction that you must pass on the right side.",explain_it:"I segnali Keep Right indicano un divisore fisico, isola o ostacolo che devi passare sul lato destro."},
  {cat:"signs",en:"What does a 'Dead End' sign mean?",it:"Cosa significa un segnale 'Dead End'?",options:[{en:"The road becomes unpaved ahead",it:"La strada diventa non asfaltata in avanti"},{en:"The road ahead has no outlet — you must turn around",it:"La strada in avanti non ha sbocco — devi girare"},{en:"No trucks allowed on this road",it:"Nessun camion consentito su questa strada"},{en:"The road merges with a highway ahead",it:"La strada confluisce con un'autostrada in avanti"}],correct:1,explain_en:"A Dead End sign warns that the road has no outlet. Turn around before reaching the dead end.",explain_it:"Un segnale Dead End avverte che la strada non ha sbocco. Gira prima di raggiungere il vicolo cieco."},
  {cat:"signs",en:"What does a 'Pedestrian Crossing' signal hand (red hand) mean for pedestrians?",it:"Cosa significa il segnale mano rossa per i pedoni?",options:[{en:"Cross quickly",it:"Attraversare velocemente"},{en:"Do not start crossing — wait for the walking figure signal",it:"Non iniziare ad attraversare — aspettare il segnale della figura che cammina"},{en:"Cross only if no cars are present",it:"Attraversare solo se non ci sono auto"},{en:"Cross from right to left only",it:"Attraversare solo da destra a sinistra"}],correct:1,explain_en:"The red hand (or raised hand) signal means pedestrians should NOT begin crossing. If already crossing, they should complete the crossing quickly.",explain_it:"Il segnale mano rossa significa che i pedoni NON devono iniziare ad attraversare. Se gia attraversando, devono completare velocemente."},
  {cat:"signs",en:"A 'Speed Limit' sign with a black border on white background is:",it:"Un segnale 'Speed Limit' con bordo nero su sfondo bianco e:",options:[{en:"An advisory recommendation only",it:"Solo una raccomandazione consigliata"},{en:"A legally enforceable maximum speed",it:"Una velocita massima legalmente applicabile"},{en:"A minimum speed requirement",it:"Un requisito di velocita minima"},{en:"A nighttime-only speed restriction",it:"Una restrizione di velocita solo notturna"}],correct:1,explain_en:"White rectangular speed limit signs post the legally enforceable maximum speed for that road.",explain_it:"I segnali di limite di velocita rettangolari bianchi indicano la velocita massima legalmente applicabile per quella strada."},
  {cat:"signs",en:"What does a 'School Zone' sign look like?",it:"Come appare un segnale di 'Zona Scolastica'?",options:[{en:"A red octagon",it:"Un ottagono rosso"},{en:"A fluorescent yellow-green pentagon with children walking",it:"Un pentagono giallo-verde fluorescente con bambini che camminano"},{en:"A blue rectangle with school text",it:"Un rettangolo blu con testo scolastico"},{en:"An orange diamond with a school bus",it:"Un rombo arancione con uno scuolabus"}],correct:1,explain_en:"School zone signs are fluorescent yellow-green pentagons showing children walking. They indicate reduced speed zones near schools.",explain_it:"I segnali di zona scolastica sono pentagoni giallo-verde fluorescenti con bambini che camminano. Indicano zone a velocita ridotta vicino alle scuole."},
  {cat:"signs",en:"A 'Road Closed' sign means:",it:"Un segnale 'Road Closed' significa:",options:[{en:"The road is closed to trucks only",it:"La strada e chiusa solo ai camion"},{en:"The road is completely closed — all vehicles must use an alternate route",it:"La strada e completamente chiusa — tutti i veicoli devono usare un percorso alternativo"},{en:"One lane is closed — use caution",it:"Una corsia e chiusa — usare cautela"},{en:"The road closes at night only",it:"La strada chiude solo di notte"}],correct:1,explain_en:"A Road Closed sign means the road ahead is completely closed to all traffic. Use an alternate route.",explain_it:"Un segnale Road Closed significa che la strada in avanti e completamente chiusa a tutto il traffico. Usa un percorso alternativo."},
  {cat:"signs",en:"What does a 'Roundabout Ahead' sign look like?",it:"Come appare un segnale 'Roundabout Ahead'?",options:[{en:"A yellow diamond with circular arrows",it:"Un rombo giallo con frecce circolari"},{en:"An orange circle with arrows",it:"Un cerchio arancione con frecce"},{en:"A white rectangle with the word ROUNDABOUT",it:"Un rettangolo bianco con la parola ROUNDABOUT"},{en:"A red circle with a U-turn arrow",it:"Un cerchio rosso con una freccia di inversione"}],correct:0,explain_en:"A Roundabout Ahead warning sign is a yellow diamond with circular (counterclockwise) arrows indicating a rotary intersection ahead.",explain_it:"Un segnale Roundabout Ahead e un rombo giallo con frecce circolari (senso antiorario) che indica una rotonda in avanti."},
  {cat:"signs",en:"Inside a roundabout, you should:",it:"All'interno di una rotonda, dovresti:",options:[{en:"Stop at each exit to check for pedestrians",it:"Fermarti a ogni uscita per controllare i pedoni"},{en:"Yield to traffic already in the roundabout and travel counterclockwise",it:"Cedere al traffico gia nella rotonda e viaggiare in senso antiorario"},{en:"Always travel clockwise",it:"Viaggiare sempre in senso orario"},{en:"Maintain your speed — other vehicles must yield to you",it:"Mantenere la velocita — gli altri veicoli devono cederti la precedenza"}],correct:1,explain_en:"In a roundabout, yield to circulating traffic already inside, travel counterclockwise, and exit at your desired road.",explain_it:"In una rotonda, cedi al traffico in circolazione gia all'interno, viaggia in senso antiorario ed esci alla strada desiderata."},
  {cat:"signs",en:"What does a 'Hospital' sign on the highway look like?",it:"Come appare un segnale 'Hospital' in autostrada?",options:[{en:"A red rectangle with H",it:"Un rettangolo rosso con H"},{en:"A blue rectangle with a white H",it:"Un rettangolo blu con una H bianca"},{en:"A white diamond with a red cross",it:"Un rombo bianco con una croce rossa"},{en:"A brown square with a medical symbol",it:"Un quadrato marrone con un simbolo medico"}],correct:1,explain_en:"Hospital signs are blue rectangles with a white H, indicating the direction to the nearest hospital or emergency medical facility.",explain_it:"I segnali Hospital sono rettangoli blu con una H bianca, che indicano la direzione verso l'ospedale piu vicino."},
  {cat:"signs",en:"What does a 'Telephone' service sign on a blue highway sign look like?",it:"Come appare un segnale di servizio 'Telephone' su un segnale blu autostradale?",options:[{en:"A blue rectangle with a white phone receiver",it:"Un rettangolo blu con un ricevitore telefonico bianco"},{en:"A white rectangle with a black phone",it:"Un rettangolo bianco con un telefono nero"},{en:"A red square with a phone icon",it:"Un quadrato rosso con un'icona telefono"},{en:"A green diamond with a cell phone",it:"Un rombo verde con un cellulare"}],correct:0,explain_en:"Motorist service signs on highways are blue with white symbols. A phone receiver symbol indicates telephone service available at that exit.",explain_it:"I segnali di servizio per automobilisti sono blu con simboli bianchi. Un simbolo ricevitore telefonico indica servizio telefonico disponibile a quella uscita."},
  {cat:"signs",en:"A 'No U-Turn' sign shows:",it:"Un segnale 'No U-Turn' mostra:",options:[{en:"A yellow diamond with a curved arrow",it:"Un rombo giallo con una freccia curva"},{en:"A white circle with a U-turn arrow and red slash",it:"Un cerchio bianco con una freccia di inversione e barra rossa"},{en:"A red octagon with a U arrow",it:"Un ottagono rosso con una freccia U"},{en:"A black rectangle with U-TURN PROHIBITED",it:"Un rettangolo nero con U-TURN PROHIBITED"}],correct:1,explain_en:"No U-Turn signs use the standard prohibition format: white circle with the prohibited action (U-turn arrow) crossed by a red diagonal slash.",explain_it:"I segnali No U-Turn usano il formato standard di divieto: cerchio bianco con l'azione vietata attraversata da una barra diagonale rossa."},
  {cat:"signs",en:"A 'Begin Right Turn Lane, Yield to Bikes' sign means:",it:"Un segnale 'Begin Right Turn Lane, Yield to Bikes' significa:",options:[{en:"Cyclists must stop for turning vehicles",it:"I ciclisti devono fermarsi per i veicoli in svolta"},{en:"A bike lane merges — turning drivers must yield to cyclists before entering the turn lane",it:"Una pista ciclabile si unisce — i conducenti in svolta devono cedere ai ciclisti prima di entrare nella corsia di svolta"},{en:"No bikes allowed in the turn lane",it:"Nessuna bici consentita nella corsia di svolta"},{en:"Turn signal required when bikes are present",it:"Segnale di svolta richiesto quando sono presenti bici"}],correct:1,explain_en:"This sign indicates where a bike lane intersects a right-turn lane. Drivers must yield to cyclists before moving into the turn lane.",explain_it:"Questo segnale indica dove una pista ciclabile interseca una corsia di svolta destra. I conducenti devono cedere ai ciclisti prima di entrare nella corsia di svolta."},
  {cat:"signs",en:"What does 'R X R' on a round yellow sign mean?",it:"Cosa significa 'R X R' su un segnale circolare giallo?",options:[{en:"Road crossing — intersection ahead",it:"Attraversamento stradale — incrocio in avanti"},{en:"Railroad crossing advance warning",it:"Avvertimento anticipato di passaggio a livello"},{en:"Restricted crossing for large vehicles",it:"Attraversamento limitato per veicoli grandi"},{en:"Reduced speed zone begins",it:"Inizia zona a velocita ridotta"}],correct:1,explain_en:"The round yellow RXR sign is the advance warning for a railroad crossing. It is the only circular yellow warning sign.",explain_it:"Il segnale circolare giallo RXR e l'avvertimento anticipato per un passaggio a livello. E l'unico segnale di avvertimento circolare giallo."},
  {cat:"signs",en:"Orange construction zone signs require:",it:"I segnali arancioni delle zone di costruzione richiedono:",options:[{en:"Only reducing speed to 25 mph",it:"Solo ridurre la velocita a 25 mph"},{en:"Full compliance — same legal weight as permanent signs, with doubled fines",it:"Piena conformita — stesso peso legale dei segnali permanenti, con multe raddoppiate"},{en:"Compliance only when workers are visible",it:"Conformita solo quando gli operai sono visibili"},{en:"Slowing down but no stop requirement",it:"Rallentare ma nessun requisito di stop"}],correct:1,explain_en:"Orange construction zone signs carry full legal authority. Fines are doubled for violations in active work zones whether workers are present or not.",explain_it:"I segnali arancioni hanno piena autorita legale. Le multe sono raddoppiate per le violazioni nelle zone di lavoro attive sia con che senza operai."},
  {cat:"signs",en:"A 'Bicycle Lane' sign with a white bicycle on a green background means:",it:"Un segnale 'Bicycle Lane' con bicicletta bianca su sfondo verde significa:",options:[{en:"Cyclists must use this lane",it:"I ciclisti devono usare questa corsia"},{en:"A designated bicycle lane — cyclists have priority, motor vehicles may not use it",it:"Una corsia ciclabile designata — i ciclisti hanno priorita, i veicoli a motore non possono usarla"},{en:"Cyclists and motor vehicles share this lane equally",it:"Ciclisti e veicoli a motore condividono questa corsia ugualmente"},{en:"The lane is for electric bikes only",it:"La corsia e solo per bici elettriche"}],correct:1,explain_en:"A dedicated bike lane (green or white bike symbol) is reserved for cyclists. Motor vehicles may not drive or park in it.",explain_it:"Una corsia ciclabile dedicata (simbolo bici verde o bianco) e riservata ai ciclisti. I veicoli a motore non possono guidare o parcheggiarci."},
  {cat:"signs",en:"What is a 'Crossbuck' sign at a railroad crossing?",it:"Cos'e un segnale 'Crossbuck' a un passaggio a livello?",options:[{en:"A yellow diamond before the crossing",it:"Un rombo giallo prima dell'attraversamento"},{en:"The white X-shaped sign with 'Railroad Crossing' at the actual crossing",it:"Il segnale a X bianco con 'Railroad Crossing' all'attraversamento effettivo"},{en:"A red gate that lowers when a train approaches",it:"Un cancello rosso che si abbassa quando si avvicina un treno"},{en:"A flashing yellow light",it:"Una luce gialla lampeggiante"}],correct:1,explain_en:"The Crossbuck is the white X-shaped sign with 'Railroad Crossing' installed at the crossing itself. Treat it as a yield sign when no other signals are present.",explain_it:"Il Crossbuck e il segnale a X bianco con 'Railroad Crossing' installato all'attraversamento. Trattalo come un segnale di precedenza quando non ci sono altri segnali."},
  {cat:"signs",en:"What does a 'Lane Ends — Merge Left' sign look like?",it:"Come appare un segnale 'Lane Ends — Merge Left'?",options:[{en:"A yellow diamond with two lines merging from the right",it:"Un rombo giallo con due linee che confluiscono dalla destra"},{en:"An orange rectangle with MERGE LEFT",it:"Un rettangolo arancione con MERGE LEFT"},{en:"A red circle with a left arrow",it:"Un cerchio rosso con una freccia sinistra"},{en:"A white rectangle with an arrow pointing left",it:"Un rettangolo bianco con una freccia che punta a sinistra"}],correct:0,explain_en:"Lane Ends warning signs are yellow diamonds showing two lane lines converging — indicating the right lane ends and traffic must merge left.",explain_it:"I segnali Lane Ends sono rombi gialli con due linee di corsia che convergono — indicando che la corsia destra finisce e il traffico deve confluire a sinistra."},
  {cat:"signs",en:"What does a 'Passing Zone' (broken yellow center line) indicate?",it:"Cosa indica una 'Zona di Sorpasso' (linea centrale gialla tratteggiata)?",options:[{en:"No passing allowed in either direction",it:"Nessun sorpasso consentito in nessuna direzione"},{en:"Passing is permitted from your side when safe",it:"Il sorpasso e consentito dal tuo lato quando sicuro"},{en:"Passing allowed only at night",it:"Sorpasso consentito solo di notte"},{en:"Only emergency vehicles may pass here",it:"Solo i veicoli di emergenza possono sorpassare qui"}],correct:1,explain_en:"A broken (dashed) yellow center line on your side means passing is permitted from your side when it is safe to do so.",explain_it:"Una linea centrale gialla tratteggiata sul tuo lato significa che il sorpasso e consentito dal tuo lato quando sicuro."},


  // ══ SESSION 3 — LAWS +53 ══════════════════════════════════════
  {cat:"laws",en:"Florida's Move Over Law requires you to, when approaching a stopped emergency vehicle with lights on a multi-lane road:",it:"La legge Move Over della Florida richiede di, avvicinandosi a un veicolo di emergenza fermo con luci su una strada a piu corsie:",options:[{en:"Maintain speed and lane",it:"Mantenere velocita e corsia"},{en:"Move over one lane away from the vehicle OR reduce speed by 20 mph below the posted limit",it:"Spostarti di una corsia lontano dal veicolo O ridurre la velocita di 20 mph sotto il limite segnalato"},{en:"Stop completely until the vehicle moves",it:"Fermarti completamente finche il veicolo non si muove"},{en:"Flash headlights as warning",it:"Lampeggiare i fari come segnale"}],correct:1,explain_en:"Florida Move Over Law: move over one lane if possible OR reduce speed 20 mph below the posted limit. Applies to emergency, utility, and sanitation vehicles.",explain_it:"Legge Move Over: spostati di una corsia se possibile O riduci la velocita di 20 mph sotto il limite. Si applica ai veicoli di emergenza, utility e nettezza urbana."},
  {cat:"laws",en:"Florida's Move Over Law also applies to which non-emergency vehicles?",it:"La legge Move Over della Florida si applica anche a quali veicoli non di emergenza?",options:[{en:"Only fire trucks and ambulances",it:"Solo autopompe e ambulanze"},{en:"Utility and sanitation vehicles stopped with lights activated",it:"Veicoli utility e nettezza urbana fermi con luci attivate"},{en:"Only vehicles with yellow warning lights",it:"Solo i veicoli con luci gialle di avvertimento"},{en:"Only law enforcement vehicles",it:"Solo i veicoli delle forze dell'ordine"}],correct:1,explain_en:"Florida's Move Over Law was expanded to include utility and sanitation vehicles with activated warning lights stopped on the roadside.",explain_it:"La legge Move Over della Florida e stata ampliata per includere i veicoli utility e nettezza urbana con luci di avvertimento attivate fermi sul bordo della strada."},
  {cat:"laws",en:"When can you legally pass on the right in Florida?",it:"Quando puoi legalmente sorpassare a destra in Florida?",options:[{en:"Whenever the lane is clear",it:"Ogni volta che la corsia e libera"},{en:"When a vehicle ahead is making a left turn and there is a paved lane to the right",it:"Quando un veicolo davanti sta svoltando a sinistra e c'e una corsia asfaltata a destra"},{en:"Only on multi-lane highways",it:"Solo sulle autostrade a piu corsie"},{en:"Passing on the right is always illegal in Florida",it:"Il sorpasso a destra e sempre illegale in Florida"}],correct:1,explain_en:"You may pass on the right when the vehicle ahead is turning left and there is a paved lane wide enough to permit safe passing.",explain_it:"Puoi sorpassare a destra quando il veicolo davanti sta svoltando a sinistra e c'e una corsia asfaltata abbastanza larga per sorpassare in sicurezza."},
  {cat:"laws",en:"In Florida, you must not pass within how many feet of a railroad crossing?",it:"In Florida, non puoi sorpassare entro quanti piedi da un passaggio a livello?",options:[{en:"50 feet",it:"50 piedi"},{en:"100 feet",it:"100 piedi"},{en:"200 feet",it:"200 piedi"},{en:"500 feet",it:"500 piedi"}],correct:1,explain_en:"Passing is prohibited within 100 feet of a railroad crossing. Maintain a single lane as you approach.",explain_it:"Il sorpasso e vietato entro 100 piedi (30 m) da un passaggio a livello. Mantieni una corsia sola mentre ti avvicini."},
  {cat:"laws",en:"What is the Florida law on texting while driving?",it:"Qual e la legge della Florida sulla messaggistica durante la guida?",options:[{en:"Legal if stopped at a red light",it:"Legale se fermo a un semaforo rosso"},{en:"A primary offense — police may stop and cite you solely for texting while driving",it:"Un'infrazione principale — la polizia puo fermarti e multarti solo per messaggiare durante la guida"},{en:"Only a secondary offense — must have another violation first",it:"Solo un'infrazione secondaria — deve esserci prima un'altra violazione"},{en:"Legal for drivers over 21",it:"Legale per i conducenti sopra i 21 anni"}],correct:1,explain_en:"In Florida, texting/typing while driving is a primary offense — law enforcement can pull you over solely for this violation.",explain_it:"In Florida, messaggiare/digitare durante la guida e un'infrazione principale — le forze dell'ordine possono fermarti solo per questa violazione."},
  {cat:"laws",en:"What is the Florida law about using a handheld phone while driving in a school or work zone?",it:"Qual e la legge della Florida sull'uso di un telefono a mano durante la guida in una zona scolastica o di lavoro?",options:[{en:"Permitted with a hands-free mount",it:"Consentito con un supporto hands-free"},{en:"Prohibited — holding a phone while driving through a school or active work zone is illegal",it:"Vietato — tenere un telefono durante la guida in una zona scolastica o di lavoro attiva e illegale"},{en:"Only illegal for CDL holders",it:"Illegale solo per i titolari CDL"},{en:"Legal if speed is below 20 mph",it:"Legale se la velocita e sotto 20 mph"}],correct:1,explain_en:"Florida prohibits holding a wireless device while driving through school zones and active work zones — even if not texting.",explain_it:"La Florida vieta di tenere un dispositivo wireless durante la guida in zone scolastiche e di lavoro attive — anche se non si sta inviando messaggi."},
  {cat:"laws",en:"How much are fines for moving violations in an active Florida construction zone?",it:"Di quanto sono le multe per violazioni in movimento in una zona di lavori attiva in Florida?",options:[{en:"The same as normal",it:"Le stesse del normale"},{en:"Doubled",it:"Raddoppiate"},{en:"Tripled",it:"Triplicate"},{en:"$500 flat fine for all violations",it:"Multa fissa di $500 per tutte le violazioni"}],correct:1,explain_en:"Fines for moving violations in active construction zones are doubled in Florida, whether workers are present or not.",explain_it:"Le multe per le violazioni in movimento nelle zone di lavori attive sono raddoppiate in Florida, sia che gli operai siano presenti o meno."},
  {cat:"laws",en:"Who has right-of-way when two vehicles arrive simultaneously at an uncontrolled intersection?",it:"Chi ha la precedenza quando due veicoli arrivano simultaneamente a un incrocio non controllato?",options:[{en:"The vehicle on the left",it:"Il veicolo a sinistra"},{en:"The vehicle on the right",it:"Il veicolo a destra"},{en:"The larger vehicle",it:"Il veicolo piu grande"},{en:"The vehicle traveling faster",it:"Il veicolo che viaggia piu veloce"}],correct:1,explain_en:"When two vehicles arrive simultaneously at an uncontrolled intersection, the vehicle on the LEFT yields to the vehicle on the RIGHT.",explain_it:"Quando due veicoli arrivano simultaneamente a un incrocio non controllato, il veicolo a SINISTRA cede la precedenza al veicolo a DESTRA."},
  {cat:"laws",en:"In Florida, what is the rule for passing a school bus stopped on a divided highway (with a raised median)?",it:"In Florida, qual e la regola per sorpassare uno scuolabus fermo su un'autostrada divisa (con mediana rialzata)?",options:[{en:"All traffic in both directions must stop",it:"Tutto il traffico in entrambe le direzioni deve fermarsi"},{en:"Only traffic on the same side as the bus must stop — traffic on the other side may proceed",it:"Solo il traffico sullo stesso lato del bus deve fermarsi — il traffico dall'altro lato puo procedere"},{en:"Traffic may proceed at 15 mph",it:"Il traffico puo procedere a 15 mph"},{en:"Only stop if the bus is loading children",it:"Fermarsi solo se il bus sta caricando bambini"}],correct:1,explain_en:"On a divided highway with a raised median or physical barrier, only traffic on the SAME side as the school bus must stop. Traffic on the opposite side may continue.",explain_it:"Su un'autostrada divisa con mediana rialzata o barriera fisica, solo il traffico sullo STESSO lato dello scuolabus deve fermarsi. Il traffico sul lato opposto puo continuare."},
  {cat:"laws",en:"What must you do if an emergency vehicle approaches from behind while you are on a one-way street?",it:"Cosa devi fare se un veicolo di emergenza si avvicina da dietro mentre sei su una strada a senso unico?",options:[{en:"Speed up to get out of the way",it:"Accelerare per toglierti di mezzo"},{en:"Pull to the nearest curb (right or left) and stop",it:"Accostare al marciapiede piu vicino (destra o sinistra) e fermarti"},{en:"Stop immediately wherever you are",it:"Fermarti immediatamente dove sei"},{en:"Continue driving at normal speed",it:"Continuare a guidare a velocita normale"}],correct:1,explain_en:"On a one-way street, pull to whichever curb (right or left) is nearest and stop to allow the emergency vehicle to pass.",explain_it:"Su una strada a senso unico, accosta al marciapiede piu vicino (destra o sinistra) e fermati per consentire al veicolo di emergenza di passare."},
  {cat:"laws",en:"What is the Florida law regarding leaving a child under 6 in a vehicle?",it:"Qual e la legge della Florida riguardo all'abbandono di un bambino sotto i 6 anni in un veicolo?",options:[{en:"Allowed for up to 10 minutes with windows cracked",it:"Consentito fino a 10 minuti con i finestrini aperti"},{en:"Never permitted — a child under 6 must not be left alone in a motor vehicle",it:"Mai consentito — un bambino sotto i 6 anni non deve essere lasciato solo in un veicolo"},{en:"Allowed if the engine is off and keys removed",it:"Consentito se il motore e spento e le chiavi rimosse"},{en:"Allowed if a sibling over 12 is present",it:"Consentito se e presente un fratello/sorella di eta superiore ai 12 anni"}],correct:1,explain_en:"Florida law prohibits leaving a child 6 or younger alone in a vehicle. Violations can result in criminal charges, especially if the child is harmed.",explain_it:"La legge della Florida vieta di lasciare un bambino di 6 anni o meno da solo in un veicolo. Le violazioni possono comportare accuse penali."},
  {cat:"laws",en:"In Florida, what is the maximum fine for speeding in a school zone?",it:"In Florida, qual e la multa massima per eccesso di velocita in una zona scolastica?",options:[{en:"Standard fine — no enhancement in school zones",it:"Multa standard — nessun aumento nelle zone scolastiche"},{en:"Fines are doubled in school zones",it:"Le multe sono raddoppiate nelle zone scolastiche"},{en:"A flat $500 regardless of speed",it:"Una multa fissa di $500 indipendentemente dalla velocita"},{en:"Only a warning for first offense",it:"Solo un avvertimento alla prima offesa"}],correct:1,explain_en:"Speeding fines are doubled in school zones in Florida when children are present.",explain_it:"Le multe per eccesso di velocita sono raddoppiate nelle zone scolastiche in Florida quando i bambini sono presenti."},
  {cat:"laws",en:"What does Florida's 'anti-road rage' law prohibit?",it:"Cosa vieta la legge 'anti-rabbia stradale' della Florida?",options:[{en:"Using the horn more than once",it:"Usare il clacson piu di una volta"},{en:"Aggressive driving maneuvers intended to intimidate, injure, or impede another driver",it:"Manovre di guida aggressive intese a intimidire, ferire o ostacolare un altro conducente"},{en:"Driving at the speed limit in the left lane",it:"Guidare al limite di velocita nella corsia sinistra"},{en:"Flashing headlights at other drivers",it:"Lampeggiare i fari agli altri conducenti"}],correct:1,explain_en:"Florida's aggressive driving/road rage law prohibits driving in a manner intended to intimidate, injure, or block other drivers.",explain_it:"La legge sulla guida aggressiva della Florida vieta di guidare in modo inteso a intimidire, ferire o bloccare altri conducenti."},
  {cat:"laws",en:"What is required when a Florida driver's license address changes?",it:"Cosa e richiesto quando cambia l'indirizzo di una patente di guida Florida?",options:[{en:"Nothing — the DMV updates it automatically",it:"Niente — il DMV lo aggiorna automaticamente"},{en:"You must notify FLHSMV within 30 days of the change",it:"Devi notificare il FLHSMV entro 30 giorni dal cambiamento"},{en:"Only update when you renew your license",it:"Aggiornare solo al rinnovo della patente"},{en:"Address changes are not tracked on driver's licenses",it:"I cambi di indirizzo non vengono tracciati sulle patenti"}],correct:1,explain_en:"Florida drivers must notify FLHSMV of an address change within 30 days. Failure to do so is a violation.",explain_it:"I conducenti in Florida devono notificare al FLHSMV un cambio di indirizzo entro 30 giorni. Il mancato rispetto e una violazione."},
  {cat:"laws",en:"What is the penalty for leaving the scene of a crash with injuries in Florida?",it:"Qual e la sanzione per la fuga dalla scena di un incidente con lesioni in Florida?",options:[{en:"A minor traffic infraction",it:"Una minore infrazione del traffico"},{en:"A felony — up to 5 years in prison if injury occurred",it:"Un crimine — fino a 5 anni di prigione se si sono verificate lesioni"},{en:"License suspension only",it:"Solo sospensione della patente"},{en:"A fine of up to $500",it:"Una multa fino a $500"}],correct:1,explain_en:"Leaving the scene of a crash with injuries is a felony in Florida — up to 5 years in prison, plus fines, license revocation, and possible vehicle forfeiture.",explain_it:"Lasciare la scena di un incidente con lesioni e un crimine in Florida — fino a 5 anni di prigione, piu multe, revoca della patente e possibile confisca del veicolo."},
  {cat:"laws",en:"In Florida, how long do you have to report a crash to law enforcement?",it:"In Florida, quanto tempo hai per segnalare un incidente alle forze dell'ordine?",options:[{en:"Immediately — at the scene only",it:"Immediatamente — solo sulla scena"},{en:"Within 10 days if police did not respond to the scene and damage exceeds $500",it:"Entro 10 giorni se la polizia non ha risposto alla scena e i danni superano $500"},{en:"Within 24 hours for any crash",it:"Entro 24 ore per qualsiasi incidente"},{en:"Only if injury or death occurred",it:"Solo se si sono verificate lesioni o decessi"}],correct:1,explain_en:"If police do not respond to a crash scene and damage exceeds $500 or there are injuries, you must report to FLHSMV within 10 days.",explain_it:"Se la polizia non risponde alla scena e i danni superano $500 o ci sono lesioni, devi segnalare al FLHSMV entro 10 giorni."},
  {cat:"laws",en:"What must you do if a traffic signal is red but you are already in the intersection when it changes?",it:"Cosa devi fare se il semaforo diventa rosso ma sei gia nell'incrocio quando cambia?",options:[{en:"Stop immediately in the intersection",it:"Fermarti immediatamente nell'incrocio"},{en:"Complete your turn or cross — you are legally in the intersection",it:"Completare la svolta o attraversare — sei legalmente nell'incrocio"},{en:"Back up out of the intersection",it:"Fare retromarcia fuori dall'incrocio"},{en:"Turn on hazard lights and wait",it:"Accendere le luci di pericolo e aspettare"}],correct:1,explain_en:"If you lawfully entered an intersection before the light changed, complete your movement. However, never enter an intersection unless you can completely clear it.",explain_it:"Se sei entrato legittimamente nell'incrocio prima che il semaforo cambiasse, completa il tuo movimento. Non entrare mai se non puoi liberarlo completamente."},
  {cat:"laws",en:"In Florida, what is the law on parking near a fire hydrant?",it:"In Florida, qual e la legge sul parcheggio vicino a un idrante antincendio?",options:[{en:"No restriction — fire hydrants have no parking buffer",it:"Nessuna restrizione — gli idranti non hanno buffer di parcheggio"},{en:"You must not park within 15 feet of a fire hydrant",it:"Non devi parcheggiare entro 15 piedi (4,5 m) da un idrante"},{en:"You must not park within 10 feet of a fire hydrant",it:"Non devi parcheggiare entro 10 piedi (3 m) da un idrante"},{en:"You must not park within 25 feet of a fire hydrant",it:"Non devi parcheggiare entro 25 piedi (7,5 m) da un idrante"}],correct:1,explain_en:"Florida prohibits parking within 15 feet of a fire hydrant. The space must remain clear for emergency access.",explain_it:"La Florida vieta il parcheggio entro 15 piedi (4,5 m) da un idrante. Lo spazio deve rimanere libero per l'accesso di emergenza."},
  {cat:"laws",en:"In Florida, what is the law on using a cell phone while driving for adults (non-school/work zone)?",it:"In Florida, qual e la legge sull'uso del cellulare durante la guida per gli adulti (fuori zone scolastiche/lavoro)?",options:[{en:"Completely prohibited — hands-free only always",it:"Completamente vietato — solo mani libere sempre"},{en:"Talking on a handheld phone while driving is a secondary offense — primary in school/work zones",it:"Parlare su un telefono a mano durante la guida e un'infrazione secondaria — primaria in zone scolastiche/lavoro"},{en:"Always legal for adults over 21",it:"Sempre legale per gli adulti over 21"},{en:"Legal if using speakerphone",it:"Legale se si usa il vivavoce"}],correct:1,explain_en:"Outside school and work zones, using a handheld phone while driving is a secondary offense for adults. In school/work zones it is a primary offense.",explain_it:"Al di fuori delle zone scolastiche e di lavoro, usare un telefono a mano e un'infrazione secondaria per gli adulti. Nelle zone scolastiche/lavoro e primaria."},
  {cat:"laws",en:"What is the 'implied consent' to alcohol testing for drivers in Florida?",it:"Qual e il 'consenso implicito' ai test alcolici per i conducenti in Florida?",options:[{en:"A verbal agreement made at a sobriety checkpoint",it:"Un accordo verbale fatto a un posto di blocco"},{en:"By operating a vehicle in Florida, you consent to a BAC test if lawfully arrested for DUI",it:"Operando un veicolo in Florida, acconsenti a un test BAC se legalmente arrestato per DUI"},{en:"A written consent form signed at the DMV",it:"Un modulo di consenso scritto firmato al DMV"},{en:"Only applies to commercial drivers",it:"Si applica solo ai conducenti commerciali"}],correct:1,explain_en:"Florida's Implied Consent Law means operating a vehicle constitutes automatic consent to chemical BAC testing when lawfully arrested for DUI.",explain_it:"La legge del Consenso Implicito della Florida significa che operare un veicolo costituisce consenso automatico ai test chimici BAC quando legalmente arrestato per DUI."},
  {cat:"laws",en:"In Florida, when may you make a right turn on red?",it:"In Florida, quando puoi svoltare a destra con il rosso?",options:[{en:"Always — red means stop, then you may always turn right",it:"Sempre — il rosso significa stop, poi puoi sempre svoltare a destra"},{en:"After coming to a complete stop and yielding to all traffic and pedestrians, unless a sign prohibits it",it:"Dopo un arresto completo e aver ceduto a tutto il traffico e pedoni, a meno che un segnale non lo vieti"},{en:"Only when no pedestrians are crossing",it:"Solo quando non ci sono pedoni che attraversano"},{en:"Only at intersections with a dedicated right-turn lane",it:"Solo agli incroci con una corsia di svolta destra dedicata"}],correct:1,explain_en:"Right on red in Florida: stop completely, yield to all traffic and pedestrians, then proceed — unless a 'No Turn on Red' sign is posted.",explain_it:"Svolta destra con il rosso in Florida: arresto completo, cedere a tutto il traffico e pedoni, poi procedere — a meno che non ci sia un segnale 'No Turn on Red'."},
  {cat:"laws",en:"In Florida, when may you make a left turn on red?",it:"In Florida, quando puoi svoltare a sinistra con il rosso?",options:[{en:"Never — left on red is always prohibited",it:"Mai — la svolta sinistra con il rosso e sempre vietata"},{en:"From a one-way street onto another one-way street, after stopping and yielding",it:"Da una strada a senso unico su un'altra strada a senso unico, dopo essersi fermati e aver ceduto"},{en:"From any road when no traffic is present",it:"Da qualsiasi strada quando non c'e traffico"},{en:"Only if a green arrow is displayed",it:"Solo se viene mostrata una freccia verde"}],correct:1,explain_en:"In Florida, a left turn on red is permitted ONLY from a one-way street onto another one-way street — after stopping and yielding.",explain_it:"In Florida, la svolta sinistra con il rosso e consentita SOLO da una strada a senso unico su un'altra strada a senso unico — dopo essersi fermati e aver ceduto."},
  {cat:"laws",en:"Florida requires vehicles to stop how many feet before a railroad crossing when a train is approaching?",it:"La Florida richiede ai veicoli di fermarsi a quanti piedi da un passaggio a livello quando un treno si avvicina?",options:[{en:"10 feet",it:"10 piedi"},{en:"15 feet",it:"15 piedi"},{en:"20 feet",it:"20 piedi"},{en:"50 feet",it:"50 piedi"}],correct:2,explain_en:"You must stop no closer than 15 feet and no further than 50 feet from the nearest rail when a train is approaching.",explain_it:"Devi fermarti non piu vicino di 15 piedi (4,5 m) e non piu lontano di 50 piedi (15 m) dalla rotaia piu vicina quando un treno si avvicina."},
  {cat:"laws",en:"In Florida, who must wear a seat belt?",it:"In Florida, chi deve indossare la cintura di sicurezza?",options:[{en:"Only the driver",it:"Solo il conducente"},{en:"All front seat occupants, and all passengers under 18 in any seat",it:"Tutti gli occupanti del sedile anteriore e tutti i passeggeri under 18 in qualsiasi sedile"},{en:"Only children under 13",it:"Solo i bambini under 13"},{en:"Seat belts are optional for adults in rear seats",it:"Le cinture sono facoltative per gli adulti nei sedili posteriori"}],correct:1,explain_en:"Florida requires all front-seat occupants and all passengers under 18 (in any seat) to wear seat belts. Adults 18+ in rear seats are not covered by the primary law.",explain_it:"La Florida richiede a tutti gli occupanti dei sedili anteriori e a tutti i passeggeri under 18 (in qualsiasi sedile) di indossare le cinture."},
  {cat:"laws",en:"Florida's seat belt law for adults is classified as:",it:"La legge sulle cinture di sicurezza della Florida per gli adulti e classificata come:",options:[{en:"A secondary offense — only cited with another violation",it:"Un'infrazione secondaria — solo citata con un'altra violazione"},{en:"A primary offense — police may stop you solely for not wearing a seat belt",it:"Un'infrazione primaria — la polizia puo fermarti solo per non indossare la cintura"},{en:"Not enforced for adults over 18",it:"Non applicata per gli adulti over 18"},{en:"Only a fine for the driver, not the passenger",it:"Solo una multa per il conducente, non per il passeggero"}],correct:1,explain_en:"Florida's seat belt law is a primary offense for front-seat occupants — law enforcement can stop and cite you solely for not wearing one.",explain_it:"La legge sulle cinture in Florida e un'infrazione primaria per gli occupanti del sedile anteriore — le forze dell'ordine possono fermarti e multarti solo per questo."},
  {cat:"laws",en:"In Florida, what is the law about passing another vehicle on a hill or curve?",it:"In Florida, qual e la legge sul sorpasso di un altro veicolo su una collina o in curva?",options:[{en:"Passing is allowed if you can see 500 feet ahead",it:"Il sorpasso e consentito se si puo vedere 500 piedi avanti"},{en:"Passing is prohibited when you cannot see far enough ahead to ensure safety",it:"Il sorpasso e vietato quando non si puo vedere abbastanza avanti per garantire la sicurezza"},{en:"Passing on a hill is allowed going downhill only",it:"Il sorpasso su una collina e consentito solo in discesa"},{en:"Passing is always allowed if the center line is dashed",it:"Il sorpasso e sempre consentito se la linea centrale e tratteggiata"}],correct:1,explain_en:"Never pass on a hill or curve where you cannot see far enough ahead to ensure it is safe. A solid yellow line on your side also prohibits passing.",explain_it:"Non sorpassare mai su una collina o in curva dove non puoi vedere abbastanza avanti per garantire la sicurezza. Una linea gialla continua sul tuo lato vieta anche il sorpasso."},
  {cat:"laws",en:"What is the Florida law on horn use?",it:"Qual e la legge della Florida sull'uso del clacson?",options:[{en:"Horns may never be used on residential streets",it:"I clacson non possono mai essere usati nelle strade residenziali"},{en:"Horns must only be used when reasonably necessary — not for anger or amusement",it:"I clacson devono essere usati solo quando ragionevolmente necessario — non per rabbia o divertimento"},{en:"Horns must be sounded at all intersections",it:"I clacson devono essere suonati a tutti gli incroci"},{en:"There are no restrictions on horn use in Florida",it:"Non ci sono restrizioni sull'uso del clacson in Florida"}],correct:1,explain_en:"Florida law permits horn use only when reasonably necessary for safety. Using a horn for road rage or amusement is prohibited.",explain_it:"La legge della Florida consente l'uso del clacson solo quando ragionevolmente necessario per la sicurezza. L'uso del clacson per la rabbia stradale o il divertimento e vietato."},
  {cat:"laws",en:"When a school bus is stopped with red lights flashing on a four-lane road WITHOUT a median, traffic coming from the opposite direction must:",it:"Quando uno scuolabus e fermo con luci rosse lampeggianti su una strada a quattro corsie SENZA mediana, il traffico proveniente dalla direzione opposta deve:",options:[{en:"Proceed at 15 mph",it:"Procedere a 15 mph"},{en:"Stop — four-lane undivided roads require all traffic to stop",it:"Fermarsi — le strade a quattro corsie non divise richiedono che tutto il traffico si fermi"},{en:"Continue at normal speed — only same-side traffic stops",it:"Continuare a velocita normale — solo il traffico sullo stesso lato si ferma"},{en:"Slow to 20 mph and watch for children",it:"Rallentare a 20 mph e fare attenzione ai bambini"}],correct:1,explain_en:"A four-lane road WITHOUT a raised median is treated the same as a two-lane road — ALL traffic in both directions must stop for a school bus with red lights.",explain_it:"Una strada a quattro corsie SENZA mediana rialzata e trattata come una strada a due corsie — TUTTO il traffico in entrambe le direzioni deve fermarsi per lo scuolabus."},
  {cat:"laws",en:"What does Florida law say about driving with improperly loaded cargo?",it:"Cosa dice la legge della Florida sulla guida con carico impropriamente caricato?",options:[{en:"It is only an issue if cargo falls from the vehicle",it:"E solo un problema se il carico cade dal veicolo"},{en:"Cargo must be secured to prevent shifting or falling — driver is responsible for all loads",it:"Il carico deve essere fissato per prevenire spostamenti o cadute — il conducente e responsabile di tutti i carichi"},{en:"Only commercial vehicles must secure loads",it:"Solo i veicoli commerciali devono fissare i carichi"},{en:"Unsecured cargo is only illegal on highways",it:"Il carico non fissato e illegale solo in autostrada"}],correct:1,explain_en:"Florida law requires all cargo to be properly secured. The driver is responsible for ensuring loads don't shift or fall. Unsecured loads can cause fatal accidents.",explain_it:"La legge della Florida richiede che tutto il carico sia adeguatamente fissato. Il conducente e responsabile di garantire che i carichi non si spostino o cadano."},
  {cat:"laws",en:"In Florida, what is the law about racing on public roads?",it:"In Florida, qual e la legge sulle corse su strade pubbliche?",options:[{en:"Legal if both drivers consent and no one else is present",it:"Legale se entrambi i conducenti acconsentono e nessun altro e presente"},{en:"Illegal — street racing is a criminal offense in Florida",it:"Illegale — le corse stradali sono un reato penale in Florida"},{en:"Only illegal for drivers under 21",it:"Illegale solo per i conducenti under 21"},{en:"Legal in designated areas only",it:"Legale solo in aree designate"}],correct:1,explain_en:"Street racing (drag racing) on public roads is a criminal offense in Florida, resulting in license revocation and possible imprisonment.",explain_it:"Le corse stradali su strade pubbliche sono un reato penale in Florida, con conseguente revoca della patente e possibile reclusione."},
  {cat:"laws",en:"What is required when a Florida driver changes their name?",it:"Cosa e richiesto quando un conducente della Florida cambia il proprio nome?",options:[{en:"No action needed — the DMV updates it from court records",it:"Nessuna azione necessaria — il DMV lo aggiorna dai documenti del tribunale"},{en:"Apply for a replacement license with new legal name documents within 30 days",it:"Richiedere una patente sostitutiva con i nuovi documenti legali del nome entro 30 giorni"},{en:"Only update at license renewal",it:"Aggiornare solo al rinnovo della patente"},{en:"Name changes are not reflected on driver's licenses",it:"I cambi di nome non sono rispecchiati sulle patenti"}],correct:1,explain_en:"Florida drivers must apply for a replacement license within 30 days of a legal name change, presenting appropriate documentation.",explain_it:"I conducenti della Florida devono richiedere una patente sostitutiva entro 30 giorni da un cambio legale di nome, presentando la documentazione appropriata."},
  {cat:"laws",en:"In Florida, it is illegal to block an intersection. What does this mean practically?",it:"In Florida, e illegale bloccare un incrocio. Cosa significa in pratica?",options:[{en:"You must stop before every intersection",it:"Devi fermarti prima di ogni incrocio"},{en:"Do not enter an intersection you cannot fully clear before the light changes or cross traffic proceeds",it:"Non entrare in un incrocio che non puoi liberare completamente prima che il semaforo cambi o il traffico trasversale proceda"},{en:"Turning left at an intersection is prohibited",it:"Svoltare a sinistra a un incrocio e vietato"},{en:"You must stop for pedestrians before every intersection",it:"Devi fermarti per i pedoni prima di ogni incrocio"}],correct:1,explain_en:"Do not enter an intersection unless you can completely clear it before conflicting traffic receives a green. Blocking intersections is a moving violation.",explain_it:"Non entrare in un incrocio a meno che non possa liberarlo completamente prima che il traffico in conflitto riceva il verde. Bloccare gli incroci e una violazione in movimento."},
  {cat:"laws",en:"Florida law requires how many feet of signal before making a turn?",it:"La legge della Florida richiede quanti piedi di segnale prima di svoltare?",options:[{en:"50 feet",it:"50 piedi"},{en:"100 feet on all roads",it:"100 piedi su tutte le strade"},{en:"100 feet in residential areas; 200 feet on highways",it:"100 piedi nelle aree residenziali; 200 piedi sulle autostrade"},{en:"200 feet on all roads",it:"200 piedi su tutte le strade"}],correct:2,explain_en:"Florida requires signaling at least 100 feet before a turn in residential and non-highway areas, and at least 200 feet on highways.",explain_it:"La Florida richiede di segnalare almeno 100 piedi prima di una svolta nelle aree residenziali, e almeno 200 piedi sulle autostrade."},
  {cat:"laws",en:"What is Florida's 'surcharge' on traffic fines?",it:"Cos'e il 'supplemento' sulle multe stradali della Florida?",options:[{en:"A discount for paying early",it:"Uno sconto per il pagamento anticipato"},{en:"Additional fees added to base fines — such as court costs and state add-ons — making the total much higher than the base fine",it:"Tariffe aggiuntive aggiunte alle multe base — come costi giudiziari e supplementi statali — che rendono il totale molto piu alto della multa base"},{en:"A charge for requesting a hearing",it:"Un onere per richiedere un'udienza"},{en:"An insurance company fee after a violation",it:"Una tariffa della compagnia assicurativa dopo una violazione"}],correct:1,explain_en:"Florida traffic fines include multiple surcharges and court costs that can triple or quadruple the base fine. A $100 base fine may cost $300+ total.",explain_it:"Le multe stradali della Florida includono molteplici supplementi e costi giudiziari che possono triplicare o quadruplicare la multa base."},
  {cat:"laws",en:"What is Florida's 'No Zone' law regarding large trucks?",it:"Qual e la legge della Florida sulla 'No Zone' riguardo ai camion grandi?",options:[{en:"Trucks must stay in designated lanes only",it:"I camion devono rimanere solo nelle corsie designate"},{en:"Drivers should avoid lingering in the blind spots (No-Zones) around large trucks",it:"I conducenti dovrebbero evitare di indugiare nei punti ciechi (No-Zone) intorno ai camion grandi"},{en:"Trucks are prohibited from the left lane at all times",it:"I camion sono vietati dalla corsia sinistra in ogni momento"},{en:"There is no Florida law specifically about truck No-Zones",it:"Non c'e alcuna legge della Florida specificamente sulle No-Zone dei camion"}],correct:1,explain_en:"While not a formal statute, Florida traffic law addresses the duty to avoid the No-Zones (blind spots) of large vehicles for safety.",explain_it:"Sebbene non sia uno statuto formale, la legge del traffico della Florida affronta il dovere di evitare le No-Zone (punti ciechi) dei veicoli grandi per la sicurezza."},
  {cat:"laws",en:"What does Florida law require if your vehicle breaks down on an interstate?",it:"Cosa richiede la legge della Florida se il tuo veicolo si ferma su un'autostrada interstatale?",options:[{en:"Stop in the left lane for visibility",it:"Fermarsi nella corsia sinistra per la visibilita"},{en:"Move to the right shoulder if possible, turn on hazard lights, and display reflectors or flares",it:"Spostarsi sulla banchina destra se possibile, accendere le luci di pericolo e mostrare riflettori o razzi"},{en:"Stand behind your vehicle to direct traffic",it:"Stare dietro il veicolo per dirigere il traffico"},{en:"Stay in your vehicle with seat belt on regardless of conditions",it:"Rimanere nel veicolo con la cintura allacciata indipendentemente dalle condizioni"}],correct:1,explain_en:"If your vehicle breaks down: move to the right shoulder, turn on hazard lights, and place reflective triangles or flares to warn approaching traffic.",explain_it:"Se il veicolo si ferma: spostati sulla banchina destra, accendi le luci di pericolo e posiziona triangoli riflettenti o razzi per avvisare il traffico in avvicinamento."},
  {cat:"laws",en:"Florida law prohibits parking within how many feet of a stop sign?",it:"La legge della Florida vieta il parcheggio entro quanti piedi da un segnale di stop?",options:[{en:"10 feet",it:"10 piedi"},{en:"20 feet",it:"20 piedi"},{en:"30 feet",it:"30 piedi"},{en:"50 feet",it:"50 piedi"}],correct:2,explain_en:"You may not park within 30 feet of a stop sign or yield sign — this ensures visibility for approaching drivers.",explain_it:"Non puoi parcheggiare entro 30 piedi (9 m) da un segnale di stop o precedenza — questo garantisce la visibilita per i conducenti in avvicinamento."},
  {cat:"laws",en:"What is required of a Florida driver when an authorized emergency vehicle is stationary on the side of the road?",it:"Cosa e richiesto a un conducente della Florida quando un veicolo di emergenza autorizzato e fermo sul lato della strada?",options:[{en:"Honk to alert the officers",it:"Suonare per avvisare gli agenti"},{en:"Move to the furthest available lane from the vehicle OR reduce speed significantly below the limit",it:"Spostarsi nella corsia piu lontana disponibile dal veicolo O ridurre significativamente la velocita sotto il limite"},{en:"Slow to exactly 20 mph when passing",it:"Rallentare esattamente a 20 mph quando si passa"},{en:"No requirement — normal driving rules apply",it:"Nessun requisito — si applicano le normali regole di guida"}],correct:1,explain_en:"Florida's Move Over Law: when an authorized emergency or utility vehicle is on the side with lights on, move over one lane OR slow to 20 mph below the posted limit.",explain_it:"Legge Move Over: quando un veicolo di emergenza o utility autorizzato e sul lato con le luci accese, spostati di una corsia O rallenta di 20 mph sotto il limite segnalato."},
  {cat:"laws",en:"In Florida, a solid white line between lanes means:",it:"In Florida, una linea bianca continua tra le corsie significa:",options:[{en:"Passing is encouraged in this area",it:"Il sorpasso e incoraggiato in questa zona"},{en:"Lane changes are discouraged — stay in your lane",it:"I cambi di corsia sono sconsigliati — rimani nella tua corsia"},{en:"The lanes travel in opposite directions",it:"Le corsie viaggiano in direzioni opposte"},{en:"You must remain in this lane until the next exit",it:"Devi rimanere in questa corsia fino alla prossima uscita"}],correct:1,explain_en:"A solid white line discourages (but does not always prohibit) lane changes. It is commonly used near intersections or in merge areas.",explain_it:"Una linea bianca continua sconsiglia (ma non sempre vieta) i cambi di corsia. E comunemente usata vicino agli incroci o nelle aree di confluenza."},
  {cat:"laws",en:"In Florida, what does a double solid yellow center line mean?",it:"In Florida, cosa significa una doppia linea gialla continua al centro?",options:[{en:"Passing is allowed in both directions",it:"Il sorpasso e consentito in entrambe le direzioni"},{en:"Passing is prohibited in both directions",it:"Il sorpasso e vietato in entrambe le direzioni"},{en:"Only left turns are permitted across this line",it:"Solo le svolte a sinistra sono consentite attraverso questa linea"},{en:"The center turn lane begins",it:"Inizia la corsia di svolta centrale"}],correct:1,explain_en:"A double solid yellow line prohibits passing in BOTH directions. Neither side may cross the line except to turn.",explain_it:"Una doppia linea gialla continua vieta il sorpasso in ENTRAMBE le direzioni. Nessun lato puo attraversare la linea tranne che per svoltare."},
  {cat:"laws",en:"What does Florida law require after purchasing a used vehicle?",it:"Cosa richiede la legge della Florida dopo l'acquisto di un veicolo usato?",options:[{en:"Register it within 60 days",it:"Registrarlo entro 60 giorni"},{en:"Transfer the title and register it within 30 days",it:"Trasferire il titolo e registrarlo entro 30 giorni"},{en:"Get a new VIN inspection within 10 days",it:"Ottenere una nuova ispezione del VIN entro 10 giorni"},{en:"Insurance is the only requirement",it:"L'assicurazione e l'unico requisito"}],correct:1,explain_en:"After purchasing a used vehicle in Florida, you must transfer the title and register it within 30 days to avoid late fees and penalties.",explain_it:"Dopo l'acquisto di un veicolo usato in Florida, devi trasferire il titolo e registrarlo entro 30 giorni per evitare more e sanzioni."},
  {cat:"laws",en:"In Florida, the space between a solid and broken yellow center line means:",it:"In Florida, lo spazio tra una linea gialla continua e una tratteggiata al centro significa:",options:[{en:"Both sides may pass whenever clear",it:"Entrambi i lati possono sorpassare quando libero"},{en:"The driver beside the broken line may pass; the driver beside the solid line may not",it:"Il conducente accanto alla linea tratteggiata puo sorpassare; il conducente accanto alla linea continua non puo"},{en:"Passing is forbidden from both sides",it:"Il sorpasso e vietato da entrambi i lati"},{en:"This marking is only used in construction zones",it:"Questa marcatura e usata solo nelle zone di costruzione"}],correct:1,explain_en:"A solid line on your side = no passing. A broken line on your side = passing permitted when safe. Each driver follows the line on their side.",explain_it:"Una linea continua sul tuo lato = nessun sorpasso. Una linea tratteggiata sul tuo lato = sorpasso consentito quando sicuro. Ogni conducente segue la linea sul proprio lato."},


  // ══ SESSION 3 — SAFETY +54 ════════════════════════════════════
  {cat:"safety",en:"What is the purpose of the 'SIPDE' driving strategy?",it:"Qual e lo scopo della strategia di guida 'SIPDE'?",options:[{en:"A method for parallel parking",it:"Un metodo per il parcheggio parallelo"},{en:"Scan, Identify, Predict, Decide, Execute — a systematic hazard-management process",it:"Scan, Identify, Predict, Decide, Execute — un processo sistematico di gestione dei rischi"},{en:"A system for highway merging",it:"Un sistema per la confluenza in autostrada"},{en:"Speed, Intercept, Pass, Disengage, Escape — an evasion technique",it:"Speed, Intercept, Pass, Disengage, Escape — una tecnica di evasione"}],correct:1,explain_en:"SIPDE: Scan the road, Identify hazards, Predict what may happen, Decide on a response, Execute the action. A structured approach to hazard perception.",explain_it:"SIPDE: Scansiona la strada, Identifica i pericoli, Prevedi cosa potrebbe accadere, Decidi una risposta, Esegui l'azione. Un approccio strutturato alla percezione dei pericoli."},
  {cat:"safety",en:"What is the 'two-second rule' eye scanning technique for highway driving?",it:"Qual e la tecnica di scansione degli occhi della 'regola dei due secondi' per la guida in autostrada?",options:[{en:"Check mirrors every 2 seconds",it:"Controlla gli specchi ogni 2 secondi"},{en:"Scan far enough ahead that your eyes lead by at least 12-15 seconds of travel time",it:"Scansiona abbastanza avanti che i tuoi occhi guidano di almeno 12-15 secondi di tempo di viaggio"},{en:"Count 2 seconds between each mirror check",it:"Conta 2 secondi tra ogni controllo degli specchi"},{en:"Look 2 seconds back for following traffic",it:"Guarda 2 secondi indietro per il traffico che segue"}],correct:1,explain_en:"Highway eye-lead time: scan 12-15 seconds ahead (about quarter mile at 60 mph) to see and respond to hazards early. Also check mirrors every 5-8 seconds.",explain_it:"Tempo di visione in autostrada: scansiona 12-15 secondi avanti (circa 400 m a 100 km/h) per vedere e rispondere ai pericoli in anticipo."},
  {cat:"safety",en:"What is the main danger of a 'blind spot' when changing lanes?",it:"Qual e il pericolo principale di un 'punto cieco' quando si cambia corsia?",options:[{en:"Glare from the sun makes the mirror hard to read",it:"Il riflesso del sole rende difficile leggere lo specchio"},{en:"Another vehicle may be alongside you but invisible in your mirrors — causing a collision if you change lanes",it:"Un altro veicolo puo essere accanto a te ma invisibile negli specchi — causando una collisione se cambi corsia"},{en:"Blind spots only affect large trucks",it:"I punti ciechi colpiscono solo i camion grandi"},{en:"Mirrors always show everything — there are no true blind spots in modern vehicles",it:"Gli specchi mostrano sempre tutto — non ci sono veri punti ciechi nei veicoli moderni"}],correct:1,explain_en:"A blind spot is an area not visible in your mirrors. Always do a shoulder check (physically look) before changing lanes.",explain_it:"Un punto cieco e un'area non visibile negli specchi. Fai sempre un controllo della spalla (guarda fisicamente) prima di cambiare corsia."},
  {cat:"safety",en:"When should you use your high-beam headlights?",it:"Quando dovresti usare i fari abbaglianti?",options:[{en:"At all times for better visibility",it:"In ogni momento per una migliore visibilita"},{en:"On open roads with no oncoming traffic or vehicles ahead — dim when within 500 feet of others",it:"Su strade aperte senza traffico in arrivo o veicoli davanti — abbassare entro 500 piedi dagli altri"},{en:"Only in fog and rain",it:"Solo nella nebbia e nella pioggia"},{en:"Only on highways with a speed limit above 55 mph",it:"Solo sulle autostrade con un limite di velocita superiore a 55 mph"}],correct:1,explain_en:"Use high beams on open rural roads when no other traffic is nearby. Dim to low beams within 500 feet of oncoming traffic or 300 feet when following a vehicle.",explain_it:"Usa gli abbaglianti su strade rurali aperte senza altro traffico vicino. Abbassa i fari entro 500 piedi dal traffico in arrivo o 300 piedi quando segui un veicolo."},
  {cat:"safety",en:"What does 'scanning' mean in defensive driving?",it:"Cosa significa 'scansionare' nella guida difensiva?",options:[{en:"Checking your phone for navigation updates",it:"Controllare il telefono per gli aggiornamenti di navigazione"},{en:"Continuously moving your eyes to observe the full driving environment — mirrors, ahead, sides",it:"Muovere continuamente gli occhi per osservare l'intero ambiente di guida — specchi, avanti, lati"},{en:"Using a backup camera to check behind",it:"Usare una telecamera posteriore per controllare dietro"},{en:"Scanning radio channels for traffic reports",it:"Eseguire la scansione dei canali radio per i rapporti sul traffico"}],correct:1,explain_en:"Scanning means continuously moving your eyes — ahead 12-15 seconds, checking mirrors every 5-8 seconds, and monitoring all sides for developing hazards.",explain_it:"Scansionare significa muovere continuamente gli occhi — avanti 12-15 secondi, controllare gli specchi ogni 5-8 secondi e monitorare tutti i lati per i pericoli in sviluppo."},
  {cat:"safety",en:"What should you do when driving in dense fog?",it:"Cosa dovresti fare quando guidi in fitta nebbia?",options:[{en:"Use high beams to see further",it:"Usare gli abbaglianti per vedere piu lontano"},{en:"Use low beams or fog lights, reduce speed significantly, increase following distance",it:"Usare i fari anabbaglianti o le luci per la nebbia, ridurre significativamente la velocita, aumentare la distanza"},{en:"Turn on hazard lights and drive at normal speed",it:"Accendere le luci di pericolo e guidare a velocita normale"},{en:"Stop immediately and wait for the fog to clear",it:"Fermarsi immediatamente e aspettare che la nebbia si diradi"}],correct:1,explain_en:"In fog: use low beams (high beams reflect off fog making it worse), reduce speed, increase following distance, and consider pulling over if visibility is near zero.",explain_it:"Nella nebbia: usa i fari anabbaglianti (gli abbaglianti riflettono sulla nebbia peggiorandola), riduci la velocita, aumenta la distanza e considera di accostare se la visibilita e quasi zero."},
  {cat:"safety",en:"What is 'hydroplaning' and when does it occur?",it:"Cos'e il 'aquaplaning' e quando si verifica?",options:[{en:"A vehicle bouncing on rough pavement",it:"Un veicolo che rimbalza su un pavimento irregolare"},{en:"When water builds up between tires and road faster than it can disperse — tires lose contact with road",it:"Quando l'acqua si accumula tra gli pneumatici e la strada piu velocemente di quanto possa disperdersi — gli pneumatici perdono contatto con la strada"},{en:"When the engine overheats in rainy conditions",it:"Quando il motore si surriscalda in condizioni di pioggia"},{en:"Skidding on black ice at low temperatures",it:"Slittamento su ghiaccio nero a basse temperature"}],correct:1,explain_en:"Hydroplaning: a layer of water causes tires to lose road contact. Occurs at higher speeds on wet roads, especially with worn tires. Response: ease off gas, don't brake hard.",explain_it:"Acquaplaning: uno strato d'acqua fa perdere il contatto stradale agli pneumatici. Si verifica ad alta velocita su strade bagnate, specialmente con pneumatici consumati. Risposta: togli il gas, non frenare bruscamente."},
  {cat:"safety",en:"If your vehicle hydroplanes, you should:",it:"Se il tuo veicolo fa acquaplaning, dovresti:",options:[{en:"Brake hard to stop quickly",it:"Frenare bruscamente per fermarsi rapidamente"},{en:"Ease off the gas, hold the wheel straight, and let the tires regain traction naturally",it:"Togli il gas, tieni il volante dritto e lascia che gli pneumatici riprendano l'aderenza naturalmente"},{en:"Turn the wheel sharply to regain control",it:"Girare bruscamente il volante per riprendere il controllo"},{en:"Accelerate to power through the water",it:"Accelerare per passare attraverso l'acqua"}],correct:1,explain_en:"Hydroplaning response: ease off the gas (don't brake), steer straight, and let the vehicle slow naturally until tires regain road contact.",explain_it:"Risposta all'acquaplaning: togli il gas (non frenare), sterza dritto e lascia che il veicolo rallenti naturalmente finche gli pneumatici riprendono il contatto."},
  {cat:"safety",en:"What is the danger of driving too close to the right edge of the road (off the pavement edge)?",it:"Qual e il pericolo di guidare troppo vicino al bordo destro della strada (fuori dal bordo dell'asfalto)?",options:[{en:"No danger — the shoulder is designed for vehicles",it:"Nessun pericolo — la banchina e progettata per i veicoli"},{en:"A tire can drop off the pavement edge causing loss of control — especially at highway speeds",it:"Un pneumatico puo cadere dal bordo dell'asfalto causando perdita del controllo — specialmente alle velocita autostradali"},{en:"Only a risk in wet conditions",it:"Solo un rischio in condizioni bagnate"},{en:"The only risk is damage to tires",it:"L'unico rischio e il danno agli pneumatici"}],correct:1,explain_en:"Dropping a tire off the pavement edge at speed can cause violent loss of control. If it happens: ease off gas, steer gently — never jerk the wheel.",explain_it:"Far cadere uno pneumatico dal bordo dell'asfalto a velocita puo causare una violenta perdita di controllo. Se accade: togli il gas, sterza delicatamente — non tirare mai il volante."},
  {cat:"safety",en:"What should you do when you see a pedestrian with a white cane or guide dog?",it:"Cosa dovresti fare quando vedi un pedone con un bastone bianco o un cane guida?",options:[{en:"Proceed normally — they have the same rights as other pedestrians",it:"Procedere normalmente — hanno gli stessi diritti degli altri pedoni"},{en:"Yield completely and wait — they have the absolute right-of-way at all crossings",it:"Cedere completamente e aspettare — hanno la precedenza assoluta a tutti gli attraversamenti"},{en:"Sound your horn to alert them of your presence",it:"Suonare il clacson per avvisarli della tua presenza"},{en:"Slow to 5 mph and pass carefully",it:"Rallentare a 5 mph e passare con cautela"}],correct:1,explain_en:"Drivers must yield COMPLETELY to visually impaired pedestrians using white canes or guide dogs at all intersections and crosswalks.",explain_it:"I conducenti devono cedere COMPLETAMENTE ai pedoni con disabilita visiva che usano bastoni bianchi o cani guida a tutti gli incroci e passaggi pedonali."},
  {cat:"safety",en:"What is the correct action when being tailgated?",it:"Qual e l'azione corretta quando si e seguiti troppo da vicino?",options:[{en:"Brake suddenly to teach the driver a lesson",it:"Frenare improvvisamente per dare una lezione al conducente"},{en:"Gradually slow down to increase distance between you — or change lanes to let them pass",it:"Rallentare gradualmente per aumentare la distanza tra voi — o cambiare corsia per lasciarli passare"},{en:"Speed up to match their following pace",it:"Accelerare per adeguarsi al loro ritmo"},{en:"Tap your brakes repeatedly to warn them",it:"Premere ripetutamente i freni per avvertirli"}],correct:1,explain_en:"When tailgated: gradually slow down to increase space ahead (giving yourself more stopping room) or safely move over to let them pass. Do not brake-check.",explain_it:"Quando si e seguiti da vicino: rallenta gradualmente per aumentare lo spazio davanti (dandoti piu spazio di frenata) o spostati in sicurezza per lasciarli passare."},
  {cat:"safety",en:"What is the safest way to approach a green light at an intersection?",it:"Qual e il modo piu sicuro di avvicinarsi a un semaforo verde a un incrocio?",options:[{en:"Accelerate to clear it before it changes",it:"Accelerare per liberarlo prima che cambi"},{en:"Cover the brake and scan cross-traffic before entering — never assume it is safe",it:"Coprire il freno e scansionare il traffico trasversale prima di entrare — non assumere mai che sia sicuro"},{en:"Maintain speed — green means the intersection is clear",it:"Mantenere la velocita — il verde significa che l'incrocio e libero"},{en:"Sound your horn to warn cross-traffic",it:"Suonare il clacson per avvisare il traffico trasversale"}],correct:1,explain_en:"Even on green, cover the brake and check cross-traffic before entering. Red-light runners and blocked intersections are leading causes of intersection crashes.",explain_it:"Anche con il verde, copri il freno e controlla il traffico trasversale prima di entrare. I passatori con il rosso e gli incroci bloccati sono le principali cause degli incidenti agli incroci."},
  {cat:"safety",en:"What is the 'friction point' in a manual transmission vehicle?",it:"Cos'e il 'punto di frizione' in un veicolo con cambio manuale?",options:[{en:"The point where the clutch fully disengages",it:"Il punto in cui la frizione si disinnesta completamente"},{en:"The point where the clutch begins to engage and the vehicle starts to move",it:"Il punto in cui la frizione inizia ad innestare e il veicolo inizia a muoversi"},{en:"The maximum gear position before the engine redlines",it:"La posizione massima della marcia prima che il motore raggiunga il limite"},{en:"A point of excessive brake wear",it:"Un punto di usura eccessiva dei freni"}],correct:1,explain_en:"The friction point is where the clutch plates begin to make contact and the vehicle starts to creep forward. It is the key control point for smooth starts.",explain_it:"Il punto di frizione e dove le piastre della frizione iniziano a fare contatto e il veicolo inizia a muoversi. E il punto di controllo chiave per le partenze fluide."},
  {cat:"safety",en:"What is the primary danger of 'overdriving headlights' at night?",it:"Qual e il pericolo principale di 'guidare piu veloce dei fari' di notte?",options:[{en:"Blinding oncoming drivers with high beams",it:"Abbagliare i conducenti in arrivo con gli abbaglianti"},{en:"Traveling faster than your ability to stop within the distance illuminated by headlights",it:"Viaggiare piu veloce della capacita di fermarsi entro la distanza illuminata dai fari"},{en:"Draining the battery faster",it:"Scaricare la batteria piu velocemente"},{en:"Causing glare on wet roads",it:"Causare riflessi sulle strade bagnate"}],correct:1,explain_en:"Overdriving headlights: if you travel faster than your stopping distance within your headlight range, you cannot stop in time for unseen hazards.",explain_it:"Guidare piu veloce dei fari: se viaggi piu veloce della distanza di arresto entro il campo dei fari, non puoi fermarti in tempo per i pericoli non visti."},
  {cat:"safety",en:"What is a 'space cushion' in driving?",it:"Cos'e un 'cuscinetto di spazio' nella guida?",options:[{en:"The air inside your tires",it:"L'aria all'interno degli pneumatici"},{en:"A buffer of space maintained around your vehicle on all sides to allow reaction time",it:"Un buffer di spazio mantenuto intorno al veicolo su tutti i lati per consentire il tempo di reazione"},{en:"The distance between the front and rear bumper of your car",it:"La distanza tra il paraurti anteriore e posteriore della tua auto"},{en:"The gap left in a parking space",it:"Lo spazio lasciato in un parcheggio"}],correct:1,explain_en:"A space cushion is the buffer zone around your vehicle — front, rear, and sides. Maintaining it gives you time and space to react to any hazard.",explain_it:"Un cuscinetto di spazio e la zona buffer intorno al veicolo — davanti, dietro e sui lati. Mantenerlo ti da tempo e spazio per reagire a qualsiasi pericolo."},
  {cat:"safety",en:"What is the most effective method to stay awake on a long drive?",it:"Qual e il metodo piu efficace per rimanere sveglio in un lungo viaggio?",options:[{en:"Drink strong coffee continuously",it:"Bere caffe forte continuamente"},{en:"Pull over and take a short nap of 15-20 minutes, and take breaks every 2 hours",it:"Accostare e fare un breve pisolino di 15-20 minuti, e fare pause ogni 2 ore"},{en:"Open the window for cold air",it:"Aprire il finestrino per l'aria fredda"},{en:"Turn up the radio volume",it:"Alzare il volume della radio"}],correct:1,explain_en:"The only effective fatigue remedy is sleep. A 15-20 minute power nap significantly restores alertness. Take breaks every 2 hours on long trips.",explain_it:"L'unico rimedio efficace contro la stanchezza e il sonno. Un pisolino di 15-20 minuti ripristina significativamente la vigilanza. Fai pause ogni 2 ore nei viaggi lunghi."},
  {cat:"safety",en:"What does 'oversteering' a vehicle mean?",it:"Cosa significa 'sovrasterzo' di un veicolo?",options:[{en:"Steering wheel vibrates at high speed",it:"Il volante vibra ad alta velocita"},{en:"The rear tires lose grip and the rear of the car swings out in the direction opposite to the turn",it:"Gli pneumatici posteriori perdono aderenza e il retro dell'auto si sposta nella direzione opposta alla svolta"},{en:"Front tires losing grip causing the car to go straight",it:"Pneumatici anteriori che perdono aderenza causando l'andare dritto dell'auto"},{en:"The car turns too sharply due to a fault in the steering system",it:"L'auto gira troppo bruscamente a causa di un difetto nel sistema di sterzo"}],correct:1,explain_en:"Oversteer: rear tires lose grip and the tail swings out. Response: steer in the direction of the skid (into the turn) and ease off gas.",explain_it:"Sovrasterzo: gli pneumatici posteriori perdono aderenza e la coda si sposta. Risposta: sterza nella direzione dello slittamento (nella svolta) e togli il gas."},
  {cat:"safety",en:"What is the best way to handle a sudden tire blowout on a highway?",it:"Qual e il modo migliore per gestire uno scoppio improvviso in autostrada?",options:[{en:"Immediately steer hard to the shoulder",it:"Sterzare immediatamente bruscamente verso la banchina"},{en:"Grip the wheel firmly, ease off gas, maintain direction, steer gently to the shoulder",it:"Stringi fermamente il volante, togli il gas, mantieni la direzione, sterza delicatamente verso la banchina"},{en:"Brake hard to stop the car quickly",it:"Frenare bruscamente per fermare l'auto rapidamente"},{en:"Accelerate briefly to stabilize before slowing",it:"Accelerare brevemente per stabilizzare prima di rallentare"}],correct:1,explain_en:"Blowout: grip the wheel, ease off gas (don't brake hard), maintain direction, and slow gradually to the shoulder. Hard braking during a blowout can cause rollover.",explain_it:"Scoppio: stringi il volante, togli il gas (non frenare bruscamente), mantieni la direzione e rallenta gradualmente verso la banchina."},
  {cat:"safety",en:"What is the safest following distance when driving behind a motorcycle?",it:"Qual e la distanza di sicurezza piu sicura quando si guida dietro una moto?",options:[{en:"Same as following any other vehicle — 3 seconds",it:"La stessa di qualsiasi altro veicolo — 3 secondi"},{en:"At least 4 seconds — motorcycles can stop faster and are more vulnerable",it:"Almeno 4 secondi — le moto possono fermarsi piu velocemente e sono piu vulnerabili"},{en:"1 car length is sufficient",it:"1 lunghezza auto e sufficiente"},{en:"Motorcycles are fast — keep 6 car lengths",it:"Le moto sono veloci — mantieni 6 lunghezze auto"}],correct:1,explain_en:"Follow motorcycles with at least 4 seconds of following distance. They can stop quickly and are harder to see. A rear-end impact can be fatal to a motorcyclist.",explain_it:"Segui le moto con almeno 4 secondi di distanza. Possono fermarsi rapidamente e sono piu difficili da vedere. Un impatto posteriore puo essere fatale per un motociclista."},
  {cat:"safety",en:"What is a 'stale green light' and why is it dangerous?",it:"Cos'e un 'verde stantio' e perche e pericoloso?",options:[{en:"A signal that has been flashing green for a long time",it:"Un segnale che lampeggia verde da molto tempo"},{en:"A green light that has been on for a long time and is likely about to change",it:"Un verde che e rimasto acceso a lungo e probabilmente sta per cambiare"},{en:"A broken green traffic light",it:"Un semaforo verde rotto"},{en:"A green light at a dangerous intersection",it:"Un semaforo verde a un incrocio pericoloso"}],correct:1,explain_en:"A stale green light has been green for a while and may change soon. Slow down and cover the brake as you approach — don't speed up to beat the change.",explain_it:"Un verde stantio e rimasto verde per un po' e potrebbe cambiare presto. Rallenta e copri il freno mentre ti avvicini — non accelerare per bruciarlo."},
  {cat:"safety",en:"What is the correct way to check for traffic when backing out of a parking space?",it:"Qual e il modo corretto per controllare il traffico quando si fa retromarcia fuori da un parcheggio?",options:[{en:"Use the rearview mirror only",it:"Usare solo lo specchietto retrovisore"},{en:"Check all mirrors, look over both shoulders, and back out slowly — then use a backup camera if available",it:"Controlla tutti gli specchi, guarda oltre entrambe le spalle e fai retromarcia lentamente — poi usa una telecamera posteriore se disponibile"},{en:"Sound the horn and reverse quickly",it:"Suonare il clacson e fare retromarcia velocemente"},{en:"Only check for pedestrians — vehicles have priority",it:"Controllare solo i pedoni — i veicoli hanno la priorita"}],correct:1,explain_en:"Before backing: check all mirrors, look over both shoulders, and move slowly. Other vehicles and pedestrians may not see you — always yield when backing.",explain_it:"Prima di fare retromarcia: controlla tutti gli specchi, guarda oltre entrambe le spalle e muoviti lentamente. Gli altri veicoli e i pedoni potrebbero non vederti."},
  {cat:"safety",en:"What is the key danger when driving in a large truck's 'No-Zone' (rear blind spot)?",it:"Qual e il pericolo principale quando si guida nella 'No-Zone' (punto cieco posteriore) di un camion grande?",options:[{en:"The truck driver cannot see your turn signals",it:"Il conducente del camion non puo vedere i tuoi segnali di svolta"},{en:"The truck driver has no visibility of you — if they change lanes or brake suddenly, collision is likely",it:"Il conducente del camion non ha visibilita su di te — se cambia corsia o frena improvvisamente, la collisione e probabile"},{en:"You receive radio interference from the truck",it:"Ricevi interferenze radio dal camion"},{en:"The truck's exhaust fumes are strongest in this zone",it:"I gas di scarico del camion sono piu forti in questa zona"}],correct:1,explain_en:"In a truck's rear No-Zone (within 30 feet), the driver cannot see you at all. If the truck brakes suddenly you have no time to react. Stay well back.",explain_it:"Nella No-Zone posteriore di un camion (entro 30 piedi), il conducente non puo vederti affatto. Se il camion frena improvvisamente non hai tempo per reagire."},
  {cat:"safety",en:"When should you turn on your hazard (emergency) lights?",it:"Quando dovresti accendere le luci di pericolo (emergenza)?",options:[{en:"Any time you are driving slowly in traffic",it:"Ogni volta che guidi lentamente nel traffico"},{en:"When your vehicle is stopped or disabled in a hazardous location, or to warn of a traffic hazard ahead",it:"Quando il veicolo e fermo o guasto in un luogo pericoloso, o per avvisare di un pericolo del traffico in avanti"},{en:"When driving in rain at night",it:"Quando si guida nella pioggia di notte"},{en:"As a substitute for turn signals in heavy traffic",it:"Come sostituto dei segnali di svolta nel traffico intenso"}],correct:1,explain_en:"Hazard lights indicate your vehicle is a hazard — use them when stopped or disabled, not as a substitute for turn signals or while driving slowly.",explain_it:"Le luci di pericolo indicano che il veicolo e un pericolo — usale quando sei fermo o guasto, non come sostituto dei segnali di svolta o durante la guida lenta."},
  {cat:"safety",en:"What is 'night blindness' and how does it affect driving safety?",it:"Cos'e la 'cecita notturna' e come influisce sulla sicurezza alla guida?",options:[{en:"Complete inability to drive after dark",it:"Completa incapacita di guidare dopo il buio"},{en:"Reduced ability to see clearly in low-light conditions — increasing crash risk after dark",it:"Ridotta capacita di vedere chiaramente in condizioni di luce scarsa — aumentando il rischio di incidenti dopo il tramonto"},{en:"Only affects older drivers over 70",it:"Colpisce solo i conducenti anziani over 70"},{en:"A condition caused by bright headlights only",it:"Una condizione causata solo dai fari luminosi"}],correct:1,explain_en:"Night blindness reduces contrast sensitivity in low light. All drivers experience reduced vision after dark — especially adjusting after bright lights (takes 7+ seconds).",explain_it:"La cecita notturna riduce la sensibilita al contrasto in poca luce. Tutti i conducenti sperimentano una visione ridotta dopo il tramonto — specialmente dopo luci luminose (richiede 7+ secondi)."},
  {cat:"safety",en:"What is the correct response to a medical emergency (e.g., heart attack) while driving?",it:"Qual e la risposta corretta a un'emergenza medica (p.es. attacco di cuore) durante la guida?",options:[{en:"Continue driving to the nearest hospital",it:"Continuare a guidare fino all'ospedale piu vicino"},{en:"Safely pull over, put the vehicle in park, call 911, and stay with the vehicle",it:"Accostare in sicurezza, mettere il veicolo in parcheggio, chiamare il 911 e rimanere con il veicolo"},{en:"Flash hazard lights and continue at normal speed",it:"Lampeggiare le luci di pericolo e continuare a velocita normale"},{en:"Ask a passenger to steer while you treat the condition",it:"Chiedere a un passeggero di sterzare mentre tratti la condizione"}],correct:1,explain_en:"Medical emergency while driving: safely pull over as soon as possible, stop the vehicle, call 911. Do not attempt to drive to a hospital — you may lose consciousness.",explain_it:"Emergenza medica durante la guida: accosta in sicurezza il prima possibile, ferma il veicolo, chiama il 911. Non tentare di guidare fino a un ospedale — potresti perdere conoscenza."},
  {cat:"safety",en:"What should you do when sun glare severely limits your visibility while driving?",it:"Cosa dovresti fare quando il riflesso solare limita gravemente la tua visibilita durante la guida?",options:[{en:"Accelerate to pass through the glare area quickly",it:"Accelerare per passare attraverso la zona abbagliante velocemente"},{en:"Reduce speed, use sun visor or sunglasses, increase following distance",it:"Ridurre la velocita, usare il parasole o occhiali da sole, aumentare la distanza"},{en:"Turn on high beams to compensate",it:"Accendere gli abbaglianti per compensare"},{en:"Glare only affects night driving — daytime is safe",it:"L'abbagliamento colpisce solo la guida notturna — il giorno e sicuro"}],correct:1,explain_en:"Sun glare: reduce speed, use sun visor and polarized sunglasses, increase following distance. If visibility becomes zero, pull over safely and wait.",explain_it:"Abbagliamento solare: riduci la velocita, usa il parasole e occhiali polarizzati, aumenta la distanza. Se la visibilita diventa zero, accosta in sicurezza e aspetta."},
  {cat:"safety",en:"What is the effect of prescription medication on driving ability?",it:"Qual e l'effetto dei farmaci da prescrizione sulla capacita di guida?",options:[{en:"Prescription medications are always safe to drive on since a doctor approved them",it:"I farmaci da prescrizione sono sempre sicuri da guidare poiche un medico li ha approvati"},{en:"Many medications can impair driving — always check labels for drowsiness, dizziness, or impairment warnings",it:"Molti farmaci possono compromettere la guida — controlla sempre le etichette per avvertenze di sonnolenza, vertigini o compromissione"},{en:"Only illegal drugs affect driving",it:"Solo le droghe illegali influenzano la guida"},{en:"Medications only affect driving above a certain dosage",it:"I farmaci influenzano la guida solo sopra un certo dosaggio"}],correct:1,explain_en:"Many legal prescription and OTC medications (antihistamines, sedatives, pain killers) can cause drowsiness or impairment. Always read labels and ask your doctor.",explain_it:"Molti farmaci da prescrizione e da banco (antistaminici, sedativi, antidolorifici) possono causare sonnolenza o compromissione. Leggi sempre le etichette e chiedi al tuo medico."},
  {cat:"safety",en:"What should you do if your accelerator sticks (gas pedal stays down) while driving?",it:"Cosa dovresti fare se l'acceleratore rimane bloccato (il pedale del gas rimane premuto) durante la guida?",options:[{en:"Turn off the engine immediately at any speed",it:"Spegnere immediatamente il motore a qualsiasi velocita"},{en:"Shift to neutral, apply brakes firmly, steer to safety, then turn off engine when stopped",it:"Inserire il neutro, applicare i freni con fermezza, sterzare verso un luogo sicuro, poi spegnere il motore quando fermo"},{en:"Press the brake and gas simultaneously",it:"Premere il freno e il gas contemporaneamente"},{en:"Steer off the road immediately",it:"Sterzare fuori dalla strada immediatamente"}],correct:1,explain_en:"Stuck accelerator: shift to neutral (disengages engine from wheels), apply firm brake pressure, steer to safety, then turn off the engine once stopped.",explain_it:"Acceleratore bloccato: inserisci il neutro (disinnesta il motore dalle ruote), applica la pressione del freno, sterza verso un luogo sicuro, poi spegni il motore una volta fermo."},
  {cat:"safety",en:"Why is it dangerous to park too close to a fire hydrant?",it:"Perche e pericoloso parcheggiare troppo vicino a un idrante?",options:[{en:"It is a hazard to other parked vehicles",it:"E un pericolo per gli altri veicoli parcheggiati"},{en:"Emergency responders cannot access the hydrant — potentially delaying fire suppression",it:"I soccorritori non possono accedere all'idrante — potenzialmente ritardando la soppressione dell'incendio"},{en:"The hydrant may damage your vehicle",it:"L'idrante potrebbe danneggiare il veicolo"},{en:"It blocks pedestrian access to the sidewalk",it:"Blocca l'accesso pedonale al marciapiede"}],correct:1,explain_en:"Blocking a fire hydrant prevents firefighters from quickly connecting their hoses. The 15-foot clearance must be maintained at all times.",explain_it:"Bloccare un idrante impedisce ai vigili del fuoco di collegare rapidamente i tubi. La distanza di 15 piedi deve essere mantenuta in ogni momento."},
  {cat:"safety",en:"What is the '12 second rule' in driving?",it:"Cos'e la 'regola dei 12 secondi' nella guida?",options:[{en:"Wait 12 seconds at every stop sign",it:"Aspettare 12 secondi a ogni segnale di stop"},{en:"Scan at least 12 seconds ahead to identify hazards early — about quarter mile at 60 mph",it:"Scansiona almeno 12 secondi avanti per identificare i pericoli in anticipo — circa un quarto di miglio a 60 mph"},{en:"A 12-second following distance on highways",it:"Una distanza di 12 secondi in autostrada"},{en:"Allow 12 seconds to complete a safe lane change",it:"Consentire 12 secondi per completare un cambio di corsia sicuro"}],correct:1,explain_en:"The 12-second rule: scan at least 12 seconds ahead. This gives you early warning of hazards and time to plan your response before reaching them.",explain_it:"La regola dei 12 secondi: scansiona almeno 12 secondi avanti. Questo ti da un preavviso dei pericoli e il tempo per pianificare la risposta prima di raggiungerli."},
  {cat:"safety",en:"What is the danger of 'fixating' (staring) at an object in your path?",it:"Qual e il pericolo di 'fissarsi' (fissare lo sguardo) su un oggetto nel proprio percorso?",options:[{en:"It wastes time you could use for other observations",it:"Spreca tempo che potresti usare per altre osservazioni"},{en:"Target fixation causes you to unconsciously steer toward the object you are staring at",it:"La fissazione dell'obiettivo ti fa sterzare inconsciamente verso l'oggetto che stai fissando"},{en:"Objects in your path are too close to steer around",it:"Gli oggetti nel tuo percorso sono troppo vicini per sterzare intorno"},{en:"It only affects motorcycle riders",it:"Colpisce solo i motociclisti"}],correct:1,explain_en:"Target fixation: staring at a hazard causes involuntary steering toward it. Always look WHERE YOU WANT TO GO — not at the obstacle.",explain_it:"Fissazione dell'obiettivo: fissare un pericolo causa uno sterzo involontario verso di esso. Guarda sempre DOVE VUOI ANDARE — non verso l'ostacolo."},
  {cat:"safety",en:"What does 'left-turn across traffic' (LTAC) crash mean?",it:"Cosa significa incidente 'svolta sinistra attraverso il traffico' (LTAC)?",options:[{en:"A crash caused by running a red light",it:"Un incidente causato dal passare con il rosso"},{en:"A collision occurring when a driver turns left and misjudges the speed of oncoming traffic",it:"Una collisione che si verifica quando un conducente svolta a sinistra e valuta male la velocita del traffico in arrivo"},{en:"An accident in a left-turn-only lane",it:"Un incidente in una corsia solo svolta sinistra"},{en:"A U-turn crash on a divided highway",it:"Un incidente da inversione su un'autostrada divisa"}],correct:1,explain_en:"LTAC crashes occur when turning left drivers underestimate the speed of oncoming vehicles. Always ensure a large safety gap before turning left across traffic.",explain_it:"Gli incidenti LTAC si verificano quando i conducenti che svoltano a sinistra sottovalutano la velocita dei veicoli in arrivo. Assicurati sempre un ampio divario di sicurezza prima di svoltare a sinistra."},
  {cat:"safety",en:"What is the safest position for your hands on the steering wheel?",it:"Qual e la posizione piu sicura per le mani sul volante?",options:[{en:"10 and 2 o'clock position",it:"Posizione 10 e 2"},{en:"9 and 3 o'clock position — better airbag clearance and control",it:"Posizione 9 e 3 — migliore spazio per l'airbag e controllo"},{en:"One hand at the bottom (6 o'clock)",it:"Una mano in basso (ore 6)"},{en:"Both hands at the top (12 o'clock)",it:"Entrambe le mani in alto (ore 12)"}],correct:1,explain_en:"9 and 3 (or 8 and 4) is recommended — provides better control and keeps hands away from the airbag deployment path, reducing injury risk.",explain_it:"9 e 3 (o 8 e 4) e raccomandato — fornisce un controllo migliore e mantiene le mani lontane dal percorso di dispiegamento dell'airbag, riducendo il rischio di lesioni."},
  {cat:"safety",en:"What is the most important thing to do before a long road trip?",it:"Qual e la cosa piu importante da fare prima di un lungo viaggio in auto?",options:[{en:"Program your GPS",it:"Programmare il GPS"},{en:"Inspect the vehicle: tires, fluids, brakes, lights, and ensure you are well rested",it:"Ispezionare il veicolo: pneumatici, fluidi, freni, luci e assicurarsi di essere ben riposati"},{en:"Fill the gas tank only",it:"Fare solo il pieno di carburante"},{en:"Download offline maps",it:"Scaricare mappe offline"}],correct:1,explain_en:"Pre-trip inspection: check tires (pressure and tread), oil and coolant, brakes, lights, and windshield wipers. Most importantly, ensure you are well rested.",explain_it:"Ispezione pre-viaggio: controlla pneumatici (pressione e battistrada), olio e refrigerante, freni, luci e tergicristalli. La cosa piu importante: assicurati di essere ben riposato."},
  {cat:"safety",en:"What is the danger of driving alongside another vehicle in their blind spot for an extended time?",it:"Qual e il pericolo di guidare accanto a un altro veicolo nel suo punto cieco per un tempo prolungato?",options:[{en:"No danger — it is the other driver's responsibility to check before changing lanes",it:"Nessun pericolo — e responsabilita dell'altro conducente controllare prima di cambiare corsia"},{en:"You become invisible to that driver — if they change lanes, you may be sideswiped",it:"Diventi invisibile a quel conducente — se cambia corsia, potresti essere urtato lateralmente"},{en:"Only dangerous for motorcycles",it:"Pericoloso solo per le moto"},{en:"It is safe as long as you can see their mirrors",it:"E sicuro finche puoi vedere i loro specchi"}],correct:1,explain_en:"Lingering in another driver's blind spot is dangerous — move through quickly or drop back. You may not be visible in their mirrors.",explain_it:"Indugiare nel punto cieco di un altro conducente e pericoloso — passa velocemente o rallenta. Potresti non essere visibile nei loro specchi."},
  {cat:"safety",en:"When should you NOT use your parking brake as an emergency brake?",it:"Quando NON dovresti usare il freno a mano come freno di emergenza?",options:[{en:"When driving uphill",it:"Quando guidi in salita"},{en:"At highway speeds — the rear wheels can lock up causing loss of control or spin",it:"Alle velocita autostradali — le ruote posteriori possono bloccarsi causando perdita di controllo o giro"},{en:"In wet weather conditions",it:"In condizioni di pioggia"},{en:"The parking brake should always be used in emergencies",it:"Il freno a mano dovrebbe sempre essere usato nelle emergenze"}],correct:1,explain_en:"The parking brake at highway speed will lock the rear wheels, causing the car to spin or flip. Use it only at low speeds if the foot brake fails completely.",explain_it:"Il freno a mano alle velocita autostradali bloccera le ruote posteriori, causando la rotazione o il ribaltamento dell'auto. Usalo solo a basse velocita se il freno a pedale cede completamente."},
  {cat:"safety",en:"What is the correct response when a car coming toward you swerves into your lane?",it:"Qual e la risposta corretta quando un'auto che viene verso di te si sposta nella tua corsia?",options:[{en:"Speed up to pass them quickly",it:"Accelerare per passarli velocemente"},{en:"Sound horn, move to the right, and reduce speed — avoid swerving left",it:"Suona il clacson, spostati a destra e riduci la velocita — evita di sterzare a sinistra"},{en:"Brake hard and steer left to give them room",it:"Frenare bruscamente e sterzare a sinistra per dar loro spazio"},{en:"Flash high beams repeatedly",it:"Lampeggiare ripetutamente gli abbaglianti"}],correct:1,explain_en:"When a car comes at you head-on: sound horn, move right (toward the shoulder), slow down. Never steer left into oncoming traffic.",explain_it:"Quando un'auto viene verso di te frontalmente: suona il clacson, spostati a destra (verso la banchina), rallenta. Non sterzare mai a sinistra nel traffico in arrivo."},
  {cat:"safety",en:"What is the main purpose of ABS (Anti-lock Braking System)?",it:"Qual e lo scopo principale dell'ABS (Sistema Frenante Anti-blocco)?",options:[{en:"To stop the vehicle faster than pumping the brakes manually",it:"Per fermare il veicolo piu velocemente pompando i freni manualmente"},{en:"To prevent wheel lock-up so you can steer while braking hard in an emergency",it:"Per prevenire il blocco delle ruote in modo da poter sterzare durante la frenata in un'emergenza"},{en:"To automatically apply brakes when a sensor detects an obstacle",it:"Per applicare automaticamente i freni quando un sensore rileva un ostacolo"},{en:"To reduce brake wear on highway driving",it:"Per ridurre l'usura dei freni in autostrada"}],correct:1,explain_en:"ABS prevents wheel lockup under hard braking — allowing you to maintain steering control. Apply firm steady pressure; do NOT pump ABS brakes.",explain_it:"L'ABS previene il blocco delle ruote durante la frenata brusca — permettendoti di mantenere il controllo dello sterzo. Applica una pressione ferma e costante; NON pompare i freni ABS."},
  {cat:"safety",en:"What should you do if your car starts to skid on a slippery surface?",it:"Cosa dovresti fare se la tua auto inizia a slittare su una superficie scivolosa?",options:[{en:"Brake hard and steer straight",it:"Frenare bruscamente e sterzare dritto"},{en:"Ease off gas, steer in the direction the rear is sliding, and avoid hard braking",it:"Togli il gas, sterza nella direzione in cui scivola il retro e evita la frenata brusca"},{en:"Accelerate to regain traction quickly",it:"Accelerare per riprendere l'aderenza velocemente"},{en:"Apply the parking brake to stop the skid",it:"Applicare il freno a mano per fermare lo slittamento"}],correct:1,explain_en:"Skid recovery: ease off gas, steer INTO the skid direction (where the rear is sliding), avoid hard braking. This straightens the vehicle.",explain_it:"Recupero da slittamento: togli il gas, sterza VERSO la direzione dello slittamento (dove scivola il retro), evita la frenata brusca. Questo raddrizza il veicolo."},
  {cat:"safety",en:"What is the main benefit of an 'escape route' while driving?",it:"Qual e il principale vantaggio di una 'via di fuga' durante la guida?",options:[{en:"A pre-planned route to the nearest hospital",it:"Un percorso pre-pianificato verso l'ospedale piu vicino"},{en:"A mental plan of where to steer if the vehicle ahead stops suddenly",it:"Un piano mentale di dove sterzare se il veicolo davanti si ferma improvvisamente"},{en:"An alternate highway route to avoid congestion",it:"Un percorso autostradale alternativo per evitare la congestione"},{en:"The shoulder of the road — only for breakdowns",it:"La banchina della strada — solo per guasti"}],correct:1,explain_en:"An escape route is a mentally pre-planned path you can steer to if something goes wrong. Always know where you can move to avoid a sudden hazard.",explain_it:"Una via di fuga e un percorso mentalmente pre-pianificato verso cui sterzare se qualcosa va storto. Sappi sempre dove puoi spostarti per evitare un pericolo improvviso."},
  {cat:"safety",en:"What is the proper way to merge onto a highway?",it:"Qual e il modo corretto per immettersi in un'autostrada?",options:[{en:"Stop at the end of the ramp and wait for a gap",it:"Fermarsi alla fine della rampa e aspettare un'apertura"},{en:"Match highway traffic speed on the acceleration lane, signal, and merge into a safe gap",it:"Adeguare la velocita del traffico autostradale nella corsia di accelerazione, segnalare e confluire in un'apertura sicura"},{en:"Merge at any speed — highway drivers must yield to merging vehicles",it:"Confluire a qualsiasi velocita — i conducenti in autostrada devono cedere ai veicoli in confluenza"},{en:"Force your way in quickly to avoid backing up traffic on the ramp",it:"Inserirti rapidamente per evitare code sulla rampa"}],correct:1,explain_en:"Merging: accelerate to match highway speed in the acceleration lane, signal, find a safe gap, and merge smoothly. Do not stop at the end of ramps.",explain_it:"Confluenza: accelera per adeguarti alla velocita autostradale nella corsia di accelerazione, segnala, trova un'apertura sicura e confluisci fluidamente."},
  {cat:"safety",en:"What special hazard do motorcycles pose to other drivers?",it:"Quale pericolo speciale rappresentano le moto per gli altri conducenti?",options:[{en:"They are always faster than other vehicles",it:"Sono sempre piu veloci degli altri veicoli"},{en:"They are harder to see, can stop quickly, and their distance and speed are often misjudged",it:"Sono piu difficili da vedere, possono fermarsi rapidamente e la loro distanza e velocita vengono spesso valutate male"},{en:"They always have the right of way",it:"Hanno sempre la precedenza"},{en:"They create large blind spots for trucks",it:"Creano grandi punti ciechi per i camion"}],correct:1,explain_en:"Motorcycles are hard to see (small profile), stop quickly, and drivers often misjudge their speed and distance. Always check twice for motorcycles when turning or changing lanes.",explain_it:"Le moto sono difficili da vedere (profilo piccolo), si fermano rapidamente e i conducenti spesso valutano male la loro velocita e distanza. Controlla sempre due volte le moto quando svolti o cambi corsia."},
  {cat:"safety",en:"Why is 'following too closely' (tailgating) particularly dangerous at highway speeds?",it:"Perche 'seguire troppo da vicino' (tailgating) e particolarmente pericoloso alle velocita autostradali?",options:[{en:"It is rude but not particularly dangerous",it:"E maleducato ma non particolarmente pericoloso"},{en:"At 60 mph, perception and reaction time plus braking distance exceed the gap — making a crash unavoidable",it:"A 60 mph, il tempo di percezione e reazione piu la distanza di frenata superano il divario — rendendo inevitabile un incidente"},{en:"Only dangerous at speeds above 80 mph",it:"Pericoloso solo a velocita superiori a 80 mph"},{en:"The main risk is that the following driver gets a ticket",it:"Il rischio principale e che il conducente che segue riceva una multa"}],correct:1,explain_en:"At 60 mph: perception/reaction alone takes ~1.5 seconds (132 feet). Add braking distance. If you are tailgating, you CANNOT stop in time if the car ahead brakes.",explain_it:"A 60 mph: la sola percezione/reazione richiede ~1,5 secondi (40 m). Aggiungi la distanza di frenata. Se sei troppo vicino, NON puoi fermarti in tempo se l'auto davanti frena."},
  {cat:"safety",en:"What is the safest way to drive through a flooded road section?",it:"Qual e il modo piu sicuro di guidare attraverso una sezione di strada allagata?",options:[{en:"Drive fast through it to avoid water getting in the engine",it:"Guidare veloce per evitare che l'acqua entri nel motore"},{en:"Do not drive through — turn around and find alternate route",it:"Non guidare attraverso — gira indietro e trova un percorso alternativo"},{en:"Drive through in the center lane — it is usually the shallowest",it:"Guidare nel centro corsia — e di solito il piu basso"},{en:"Put the car in reverse gear when crossing flooded roads",it:"Mettere la marcia indietro quando si attraversano strade allagate"}],correct:1,explain_en:"Turn Around, Don't Drown. Just 6 inches of water can knock a person down; 12 inches can carry away a small vehicle; 2 feet can float most cars.",explain_it:"Gira indietro, non annegare. Solo 15 cm d'acqua possono abbattere una persona; 30 cm possono trascinare via un piccolo veicolo; 60 cm possono far galleggiare la maggior parte delle auto."},
  {cat:"safety",en:"What is the minimum tread depth before tires must be replaced?",it:"Qual e la profondita minima del battistrada prima che gli pneumatici debbano essere sostituiti?",options:[{en:"1/16 inch",it:"1/16 di pollice"},{en:"2/32 inch (1/16 inch)",it:"2/32 di pollice (1/16 di pollice)"},{en:"4/32 inch",it:"4/32 di pollice"},{en:"6/32 inch",it:"6/32 di pollice"}],correct:1,explain_en:"Tires must be replaced when tread depth reaches 2/32 inch (the top of Lincoln's head on a penny). Most experts recommend replacing at 4/32 for wet-weather safety.",explain_it:"Gli pneumatici devono essere sostituiti quando la profondita del battistrada raggiunge 2/32 di pollice. La maggior parte degli esperti raccomanda la sostituzione a 4/32 per la sicurezza sul bagnato."},
  {cat:"safety",en:"What does it mean to 'over-correct' when a vehicle starts to skid?",it:"Cosa significa 'correggere eccessivamente' quando un veicolo inizia a slittare?",options:[{en:"Applying too much brake pressure",it:"Applicare troppa pressione del freno"},{en:"Turning the steering wheel too sharply in the opposite direction, causing the vehicle to skid the other way",it:"Girare il volante troppo bruscamente nella direzione opposta, facendo slittare il veicolo nell'altra direzione"},{en:"Using the wrong gear when decelerating",it:"Usare la marcia sbagliata durante la decelerazione"},{en:"Applying full brake pressure when ABS is not available",it:"Applicare la piena pressione del freno quando l'ABS non e disponibile"}],correct:1,explain_en:"Over-correcting: turning the wheel too sharply causes a counter-skid in the opposite direction — sometimes more violent. Use small, smooth steering inputs to recover.",explain_it:"Correzione eccessiva: girare il volante troppo bruscamente causa uno slittamento nella direzione opposta — a volte piu violento. Usa piccoli input di sterzo fluidi per recuperare."},
  {cat:"safety",en:"When driving in heavy rain, what should you do to improve visibility?",it:"Quando si guida in forte pioggia, cosa dovresti fare per migliorare la visibilita?",options:[{en:"Use high beams for better illumination",it:"Usare gli abbaglianti per una migliore illuminazione"},{en:"Use low beams or fog lights, reduce speed, increase following distance, run wipers on max",it:"Usare i fari anabbaglianti o nebbia, ridurre la velocita, aumentare la distanza, far girare i tergicristalli al massimo"},{en:"Turn on hazard lights and drive normally",it:"Accendere le luci di pericolo e guidare normalmente"},{en:"No special adjustments needed in modern vehicles",it:"Nessuna regolazione speciale necessaria nei veicoli moderni"}],correct:1,explain_en:"In heavy rain: low beams (high beams reflect off rain), max wipers, reduce speed, increase following distance. If visibility is near zero — pull over.",explain_it:"In forte pioggia: fari anabbaglianti (gli abbaglianti riflettono sulla pioggia), tergicristalli al massimo, riduci la velocita, aumenta la distanza. Se la visibilita e quasi zero — accosta."},
  {cat:"safety",en:"What is a 'runaway truck ramp' (emergency escape ramp) used for?",it:"A cosa serve una 'rampa di fuga per camion' (rampa di fuga di emergenza)?",options:[{en:"A lane for trucks to park temporarily",it:"Una corsia per i camion per parcheggiare temporaneamente"},{en:"An uphill sand or gravel escape path for trucks with brake failure on steep grades",it:"Un percorso di fuga in salita di sabbia o ghiaia per i camion con guasto ai freni su pendenze ripide"},{en:"A weigh station bypass for trucks",it:"Un bypass della stazione di pesatura per i camion"},{en:"A mandatory rest area for truck drivers",it:"Un'area di riposo obbligatoria per i conducenti di camion"}],correct:1,explain_en:"Runaway truck ramps are uphill escape paths filled with sand or gravel that stop a truck whose brakes have failed on a long descent.",explain_it:"Le rampe di fuga sono percorsi in salita riempiti di sabbia o ghiaia che fermano un camion i cui freni hanno ceduto in una lunga discesa."},


  // ══ SESSION 3 — DUI/ALCOHOL +62 ═══════════════════════════════
  {cat:"alcohol",en:"What is the liver's rate of alcohol metabolism?",it:"Qual e la velocita di metabolizzazione dell'alcol da parte del fegato?",options:[{en:"Depends on how much you drink",it:"Dipende da quanto si beve"},{en:"Approximately one standard drink per hour — regardless of other factors",it:"Circa un drink standard all'ora — indipendentemente da altri fattori"},{en:"Two drinks per hour for large individuals",it:"Due drink all'ora per individui grandi"},{en:"Faster if you exercise after drinking",it:"Piu veloce se si fa esercizio dopo aver bevuto"}],correct:1,explain_en:"The liver metabolizes alcohol at approximately one standard drink (0.6 oz pure alcohol) per hour. Body size, food, water, and exercise do NOT speed this up.",explain_it:"Il fegato metabolizza l'alcol a circa un drink standard (0,6 once di alcol puro) all'ora. Corporatura, cibo, acqua ed esercizio NON accelerano questo processo."},
  {cat:"alcohol",en:"What is a 'standard drink' in the US?",it:"Cos'e un 'drink standard' negli USA?",options:[{en:"Any amount consumed in one sitting",it:"Qualsiasi quantita consumata in una seduta"},{en:"A drink containing approximately 0.6 oz (14 grams) of pure alcohol — one beer, 5 oz wine, or 1.5 oz spirits",it:"Un drink contenente circa 0,6 once (14 grammi) di alcol puro — una birra, 5 once di vino o 1,5 once di liquori"},{en:"Any alcoholic beverage served in a single glass",it:"Qualsiasi bevanda alcolica servita in un singolo bicchiere"},{en:"A 12 oz beer only",it:"Solo una birra da 12 once"}],correct:1,explain_en:"A standard drink = 0.6 oz pure alcohol: 12 oz regular beer (5%), 5 oz wine (12%), or 1.5 oz distilled spirits (40%). All contain the same amount of alcohol.",explain_it:"Un drink standard = 0,6 once di alcol puro: 12 once di birra normale (5%), 5 once di vino (12%), o 1,5 once di liquori (40%). Tutti contengono la stessa quantita di alcol."},
  {cat:"alcohol",en:"What factors affect how quickly a person reaches a given BAC?",it:"Quali fattori influenzano la velocita con cui una persona raggiunge un determinato BAC?",options:[{en:"Only the amount of alcohol consumed",it:"Solo la quantita di alcol consumata"},{en:"Body weight, gender, food intake, speed of drinking, and individual metabolism",it:"Peso corporeo, sesso, assunzione di cibo, velocita di assunzione e metabolismo individuale"},{en:"Only age and body weight",it:"Solo eta e peso corporeo"},{en:"BAC is the same for everyone after the same number of drinks",it:"Il BAC e lo stesso per tutti dopo lo stesso numero di drink"}],correct:1,explain_en:"BAC is affected by: number of drinks, rate of consumption, body weight, gender (women reach higher BAC faster), food intake, and individual metabolism.",explain_it:"Il BAC e influenzato da: numero di drink, tasso di consumo, peso corporeo, sesso (le donne raggiungono un BAC piu alto piu velocemente), assunzione di cibo e metabolismo individuale."},
  {cat:"alcohol",en:"Why does the same amount of alcohol typically produce a higher BAC in women than men?",it:"Perche la stessa quantita di alcol produce tipicamente un BAC piu alto nelle donne che negli uomini?",options:[{en:"Women have a faster liver metabolism",it:"Le donne hanno un metabolismo epatico piu veloce"},{en:"Women generally have a higher percentage of body fat and less water content, concentrating alcohol more",it:"Le donne hanno generalmente una percentuale piu alta di grasso corporeo e meno contenuto d'acqua, concentrando maggiormente l'alcol"},{en:"Women process alcohol differently due to hormones only",it:"Le donne elaborano l'alcol diversamente solo a causa degli ormoni"},{en:"There is no significant difference",it:"Non c'e una differenza significativa"}],correct:1,explain_en:"Women typically have more body fat (which doesn't absorb alcohol) and less body water than men of the same weight — resulting in higher BAC from the same intake.",explain_it:"Le donne hanno tipicamente piu grasso corporeo (che non assorbe l'alcol) e meno acqua corporea rispetto agli uomini dello stesso peso — con conseguente BAC piu alto dallo stesso consumo."},
  {cat:"alcohol",en:"What is 'binge drinking' and how does it relate to driving?",it:"Cos'e il 'binge drinking' e come si relaziona alla guida?",options:[{en:"Drinking any alcohol before driving",it:"Bere qualsiasi alcol prima di guidare"},{en:"Consuming 4+ drinks (women) or 5+ drinks (men) within about 2 hours — rapidly raising BAC to dangerous levels",it:"Consumare 4+ drink (donne) o 5+ drink (uomini) entro circa 2 ore — alzando rapidamente il BAC a livelli pericolosi"},{en:"Drinking alcohol every day",it:"Bere alcol ogni giorno"},{en:"Drinking hard liquor instead of beer",it:"Bere liquori forti invece della birra"}],correct:1,explain_en:"Binge drinking rapidly raises BAC to 0.08%+ and severely impairs driving. The liver cannot process alcohol fast enough, causing rapid intoxication.",explain_it:"Il binge drinking alza rapidamente il BAC a 0,08%+ e compromette gravemente la guida. Il fegato non riesce a elaborare l'alcol abbastanza velocemente, causando una rapida intossicazione."},
  {cat:"alcohol",en:"What does 'zero tolerance' mean for Florida drivers under 21?",it:"Cosa significa 'tolleranza zero' per i conducenti Florida under 21?",options:[{en:"No driving at night allowed",it:"Nessuna guida notturna consentita"},{en:"Any measurable BAC (.02%+) while driving is illegal — subject to license suspension",it:"Qualsiasi BAC misurabile (0,02%+) durante la guida e illegale — soggetto a sospensione della patente"},{en:"Under 21s may not purchase alcohol",it:"I minori di 21 anni non possono acquistare alcol"},{en:"No alcohol allowed at any time in vehicles",it:"Nessun alcol consentito in qualsiasi momento nei veicoli"}],correct:1,explain_en:"Florida's Zero Tolerance law: drivers under 21 with a BAC of 0.02% or higher (about one drink) face license suspension and other penalties.",explain_it:"La legge della Florida Tolleranza Zero: i conducenti under 21 con un BAC di 0,02% o superiore (circa un drink) affrontano la sospensione della patente e altre sanzioni."},
  {cat:"alcohol",en:"What is the minimum BAC at which a driver under 21 loses their license in Florida?",it:"Qual e il BAC minimo al quale un conducente under 21 perde la patente in Florida?",options:[{en:"0.05%",it:"0,05%"},{en:"0.02%",it:"0,02%"},{en:"0.08%",it:"0,08%"},{en:"Any detectable amount",it:"Qualsiasi quantita rilevabile"}],correct:1,explain_en:"Florida's zero tolerance: drivers under 21 face license suspension at 0.02% BAC — effectively 'any amount' of alcohol while driving.",explain_it:"Tolleranza zero Florida: i conducenti under 21 affrontano la sospensione della patente a 0,02% BAC — praticamente 'qualsiasi quantita' di alcol durante la guida."},
  {cat:"alcohol",en:"What is the role of the liver in alcohol processing?",it:"Qual e il ruolo del fegato nell'elaborazione dell'alcol?",options:[{en:"Filters alcohol directly into the kidneys",it:"Filtra l'alcol direttamente nei reni"},{en:"Breaks down alcohol using enzymes (primarily alcohol dehydrogenase) at a fixed rate",it:"Scompone l'alcol usando enzimi (principalmente alcol deidrogenasi) a una velocita fissa"},{en:"Stores alcohol until it can be excreted",it:"Immagazzina l'alcol finche non puo essere escreto"},{en:"Only processes alcohol when blood sugar is low",it:"Elabora l'alcol solo quando la glicemia e bassa"}],correct:1,explain_en:"The liver uses alcohol dehydrogenase to break down alcohol at a fixed rate (~one drink/hour). Excess alcohol circulates in the bloodstream causing impairment.",explain_it:"Il fegato usa l'alcol deidrogenasi per scomporre l'alcol a una velocita fissa (~un drink/ora). L'alcol in eccesso circola nel sangue causando compromissione."},
  {cat:"alcohol",en:"How is BAC measured in a breath test?",it:"Come viene misurato il BAC in un test del respiro?",options:[{en:"By counting molecules of alcohol in each breath",it:"Contando le molecole di alcol in ogni respiro"},{en:"Alcohol in the blood equilibrates with alcohol in deep lung air — breath alcohol concentration correlates with blood alcohol",it:"L'alcol nel sangue si equilibra con l'alcol nell'aria profonda dei polmoni — la concentrazione di alcol nel respiro correla con quella nel sangue"},{en:"Breath tests only detect alcohol in the stomach",it:"I test del respiro rilevano solo l'alcol nello stomaco"},{en:"The device detects alcohol in saliva, not breath",it:"Il dispositivo rileva l'alcol nella saliva, non nel respiro"}],correct:1,explain_en:"Breathalyzers measure deep-lung (alveolar) air alcohol, which is in equilibrium with blood alcohol. The result is converted to BAC using a partition ratio.",explain_it:"I breathalyzer misurano l'alcol nell'aria profonda dei polmoni (alveolare), che e in equilibrio con l'alcol nel sangue. Il risultato viene convertito in BAC usando un rapporto di partizione."},
  {cat:"alcohol",en:"What is a 'DUI checkpoint' (sobriety checkpoint) in Florida?",it:"Cos'e un 'checkpoint DUI' (posto di blocco di sobriety) in Florida?",options:[{en:"A random stop of all vehicles by police with no specific justification",it:"Un fermo casuale di tutti i veicoli dalla polizia senza giustificazione specifica"},{en:"A legally authorized roadblock where police check all passing drivers for signs of impairment",it:"Un posto di blocco legalmente autorizzato dove la polizia controlla tutti i conducenti di passaggio per segni di compromissione"},{en:"A private checkpoint operated by insurance companies",it:"Un posto di blocco privato gestito dalle compagnie assicurative"},{en:"Only used at major holidays",it:"Usato solo nei giorni festivi principali"}],correct:1,explain_en:"DUI checkpoints are legally authorized stops where all (or a systematic fraction) of drivers are briefly checked for impairment. Florida courts have upheld their constitutionality.",explain_it:"I checkpoint DUI sono fermi legalmente autorizzati dove tutti (o una frazione sistematica) dei conducenti vengono brevemente controllati per la compromissione."},
  {cat:"alcohol",en:"What is 'alcohol tolerance' and why is it dangerous for driving?",it:"Cos'e la 'tolleranza all'alcol' e perche e pericolosa per la guida?",options:[{en:"The legal alcohol limit",it:"Il limite legale di alcol"},{en:"When habitual drinkers need more alcohol to feel effects — but their driving is still equally impaired at any given BAC",it:"Quando i bevitori abituali hanno bisogno di piu alcol per sentire gli effetti — ma la loro guida e ancora ugualmente compromessa a qualsiasi BAC dato"},{en:"The ability to metabolize alcohol faster over time",it:"La capacita di metabolizzare l'alcol piu velocemente nel tempo"},{en:"A genetic resistance to alcohol intoxication",it:"Una resistenza genetica all'intossicazione da alcol"}],correct:1,explain_en:"Tolerance means feeling less drunk — but driving performance is equally impaired. Tolerant drinkers may drive at high BAC believing they are fine — a dangerous illusion.",explain_it:"La tolleranza significa sentirsi meno ubriachi — ma le prestazioni alla guida sono ugualmente compromesse. I bevitori tolleranti possono guidare ad alto BAC credendo di stare bene — un'illlusione pericolosa."},
  {cat:"alcohol",en:"What is the 'walk-and-turn' field sobriety test checking for?",it:"Cosa controlla il test di sobriety 'walk-and-turn'?",options:[{en:"Muscle strength in the legs",it:"Forza muscolare nelle gambe"},{en:"Divided attention — ability to follow instructions while performing a physical task simultaneously",it:"Attenzione divisa — capacita di seguire le istruzioni mentre si esegue contemporaneamente un compito fisico"},{en:"Blood pressure changes from walking",it:"Cambiamenti della pressione sanguigna durante la camminata"},{en:"Coordination of the upper body only",it:"Solo la coordinazione della parte superiore del corpo"}],correct:1,explain_en:"Walk-and-turn tests divided attention — a key driving skill. Impaired people have difficulty listening to instructions while also performing the physical walking task.",explain_it:"Il walk-and-turn testa l'attenzione divisa — un'abilita chiave alla guida. Le persone compromesse hanno difficolta ad ascoltare le istruzioni mentre eseguono contemporaneamente il compito fisico."},
  {cat:"alcohol",en:"What is the 'one-leg stand' field sobriety test measuring?",it:"Cosa misura il test di sobriety 'one-leg stand'?",options:[{en:"The strength of the non-dominant leg",it:"La forza della gamba non dominante"},{en:"Balance and divided attention — ability to maintain balance while counting aloud",it:"Equilibrio e attenzione divisa — capacita di mantenere l'equilibrio mentre si conta ad alta voce"},{en:"Reaction time when switching feet",it:"Tempo di reazione nel passare da un piede all'altro"},{en:"Ankle flexibility and coordination",it:"Flessibilita e coordinazione della caviglia"}],correct:1,explain_en:"One-leg stand measures balance and divided attention — standing on one foot while counting out loud for 30 seconds. Impaired individuals frequently sway, hop, or put foot down.",explain_it:"Il one-leg stand misura equilibrio e attenzione divisa — stare su un piede mentre si conta ad alta voce per 30 secondi. Le persone compromesse spesso oscillano, saltano o mettono giù il piede."},
  {cat:"alcohol",en:"What is the legal consequence of a third DUI conviction in Florida?",it:"Qual e la conseguenza legale di una terza condanna DUI in Florida?",options:[{en:"Same as a second conviction",it:"La stessa di una seconda condanna"},{en:"A third-degree felony with up to 5 years in prison and 10-year license revocation",it:"Un crimine di terzo grado con fino a 5 anni di prigione e revoca della patente di 10 anni"},{en:"Only an enhanced fine — no imprisonment",it:"Solo una multa maggiorata — nessuna reclusione"},{en:"Automatic permanent revocation with no reinstatement",it:"Revoca automatica permanente senza possibilita di ripristino"}],correct:1,explain_en:"Third DUI in Florida: third-degree felony, up to 5 years in prison, fines up to $5,000, and 10-year license revocation (mandatory if within 10 years of prior DUI).",explain_it:"Terzo DUI in Florida: crimine di terzo grado, fino a 5 anni di prigione, multe fino a $5.000 e revoca della patente di 10 anni (obbligatoria se entro 10 anni dal DUI precedente)."},
  {cat:"alcohol",en:"What does Florida law say about drinking alcohol while driving?",it:"Cosa dice la legge della Florida sul bere alcol durante la guida?",options:[{en:"Legal if BAC stays below 0.08%",it:"Legale se il BAC rimane sotto 0,08%"},{en:"Illegal — consuming alcohol while operating a vehicle is prohibited",it:"Illegale — consumare alcol durante la guida di un veicolo e vietato"},{en:"Legal for passengers — only the driver is prohibited",it:"Legale per i passeggeri — solo il conducente ha il divieto"},{en:"Only illegal if the container is open",it:"Illegale solo se il contenitore e aperto"}],correct:1,explain_en:"Consuming alcohol while operating a vehicle is illegal in Florida, regardless of the driver's BAC level.",explain_it:"Consumare alcol durante la guida di un veicolo e illegale in Florida, indipendentemente dal livello di BAC del conducente."},
  {cat:"alcohol",en:"What are the financial consequences of a first DUI conviction in Florida?",it:"Quali sono le conseguenze finanziarie di una prima condanna DUI in Florida?",options:[{en:"A $100 fine only",it:"Solo una multa di $100"},{en:"Fines of $500-$1,000 (higher with aggravating factors), plus court costs, insurance increases, and legal fees",it:"Multe di $500-$1.000 (piu alte con fattori aggravanti), piu costi giudiziari, aumenti assicurativi e spese legali"},{en:"Only an insurance surcharge — no fine",it:"Solo un supplemento assicurativo — nessuna multa"},{en:"A flat $2,500 fine with no other costs",it:"Una multa fissa di $2.500 senza altri costi"}],correct:1,explain_en:"First DUI total costs including fines, court fees, insurance increases, DUI school, ignition interlock, and legal fees often exceed $10,000-$15,000.",explain_it:"I costi totali del primo DUI inclusi multe, spese giudiziarie, aumenti assicurativi, scuola DUI, interlock e spese legali spesso superano $10.000-$15.000."},
  {cat:"alcohol",en:"What is the Florida law about alcohol in a vehicle's passenger compartment?",it:"Qual e la legge della Florida sull'alcol nell'abitacolo di un veicolo?",options:[{en:"Open containers are allowed in the trunk only",it:"I contenitori aperti sono consentiti solo nel bagagliaio"},{en:"Open alcoholic beverage containers are prohibited in the passenger area — sealed containers may be transported",it:"I contenitori di bevande alcoliche aperti sono vietati nell'area passeggeri — i contenitori sigillati possono essere trasportati"},{en:"Any amount of alcohol is allowed in the passenger compartment",it:"Qualsiasi quantita di alcol e consentita nell'abitacolo"},{en:"Only applies to the driver's area, not rear seats",it:"Si applica solo all'area del conducente, non ai sedili posteriori"}],correct:1,explain_en:"Florida prohibits open alcoholic beverage containers in the passenger compartment. Sealed, unopened containers may be transported. Open containers belong in the trunk.",explain_it:"La Florida vieta i contenitori di bevande alcoliche aperti nell'abitacolo. I contenitori sigillati e non aperti possono essere trasportati. I contenitori aperti appartengono al bagagliaio."},
  {cat:"alcohol",en:"What effect does alcohol have on a driver's risk-taking behavior?",it:"Che effetto ha l'alcol sul comportamento a rischio di un conducente?",options:[{en:"Makes drivers more cautious",it:"Rende i conducenti piu cauti"},{en:"Reduces inhibitions and increases risk-taking — leading to speeding, unsafe passing, and reckless decisions",it:"Riduce le inibizioni e aumenta la propensione al rischio — portando a eccesso di velocita, sorpassi pericolosi e decisioni sconsiderate"},{en:"Has no effect on risk-taking below 0.08%",it:"Non ha effetti sulla propensione al rischio sotto 0,08%"},{en:"Only affects risk-taking in combination with drugs",it:"Influisce sulla propensione al rischio solo in combinazione con le droghe"}],correct:1,explain_en:"Alcohol reduces inhibitions and impairs judgment — causing drivers to take risks they would not take sober, including speeding, aggressive passing, and tailgating.",explain_it:"L'alcol riduce le inibizioni e compromette il giudizio — facendo si che i conducenti si prendano rischi che non si prenderebbero sobri, inclusi eccesso di velocita e sorpassi aggressivi."},
  {cat:"alcohol",en:"What is the term for when a person drives impaired but believes they are driving well?",it:"Qual e il termine per quando una persona guida compromessa ma crede di guidare bene?",options:[{en:"Competence illusion",it:"Illusione di competenza"},{en:"Alcohol myopia — the narrowing of attention and overconfidence caused by alcohol",it:"Miopia da alcol — il restringimento dell'attenzione e la fiducia eccessiva causati dall'alcol"},{en:"Selective amnesia",it:"Amnesia selettiva"},{en:"False sobriety syndrome",it:"Sindrome di sobriety falsa"}],correct:1,explain_en:"Alcohol myopia: alcohol narrows attention and creates overconfidence. Impaired drivers often believe they are driving fine — one of the most dangerous effects of drinking.",explain_it:"Miopia da alcol: l'alcol restringe l'attenzione e crea fiducia eccessiva. I conducenti compromessi spesso credono di guidare bene — uno degli effetti piu pericolosi dell'alcol."},
  {cat:"alcohol",en:"What happens to a commercial driver's CDL if convicted of DUI while operating a personal vehicle?",it:"Cosa succede al CDL di un conducente commerciale se condannato per DUI durante la guida di un veicolo personale?",options:[{en:"Nothing — personal vehicle DUI does not affect a CDL",it:"Niente — il DUI con veicolo personale non influisce su un CDL"},{en:"CDL is disqualified for at least 1 year — a second DUI results in lifetime disqualification",it:"Il CDL e squalificato per almeno 1 anno — un secondo DUI comporta la squalifica permanente"},{en:"Only affected if BAC was above 0.08%",it:"Colpito solo se il BAC era superiore a 0,08%"},{en:"CDL is suspended for 90 days only",it:"Il CDL e sospeso solo per 90 giorni"}],correct:1,explain_en:"A DUI conviction — even in a personal vehicle — results in a minimum 1-year CDL disqualification. A second DUI = lifetime CDL disqualification.",explain_it:"Una condanna DUI — anche in un veicolo personale — comporta una squalifica minima del CDL di 1 anno. Un secondo DUI = squalifica permanente del CDL."},
  {cat:"alcohol",en:"What is an 'ignition interlock device (IID)' and when is it required in Florida?",it:"Cos'e un 'dispositivo interlock per l'accensione (IID)' e quando e richiesto in Florida?",options:[{en:"A GPS tracker installed after DUI conviction",it:"Un localizzatore GPS installato dopo la condanna DUI"},{en:"A breathalyzer connected to the ignition — car won't start if BAC is above threshold; required after certain DUI convictions",it:"Un breathalyzer collegato al motore — l'auto non si avvia se il BAC supera la soglia; richiesto dopo certe condanne DUI"},{en:"An anti-theft device mandated by insurance",it:"Un dispositivo antifurto richiesto dall'assicurazione"},{en:"A camera that records driving behavior",it:"Una telecamera che registra il comportamento alla guida"}],correct:1,explain_en:"IID is a car breathalyzer — if your breath sample shows BAC above the threshold (~0.025%), the car won't start. Required after DUI with BAC 0.15%+, with minors, or for repeat DUI.",explain_it:"L'IID e un breathalyzer per auto — se il campione di respiro mostra un BAC sopra la soglia (~0,025%), l'auto non si avvia. Richiesto dopo DUI con BAC 0,15%+, con minori o per DUI ripetuti."},
  {cat:"alcohol",en:"What is 'DUI per se' in Florida law?",it:"Cos'e il 'DUI per se' nella legge Florida?",options:[{en:"DUI charged only with observed impairment",it:"DUI accusato solo con compromissione osservata"},{en:"Driving with a BAC of 0.08% or higher is illegal regardless of whether the driver appears impaired",it:"Guidare con un BAC di 0,08% o superiore e illegale indipendentemente dal fatto che il conducente sembri compromesso"},{en:"DUI causing injury or death",it:"DUI che causa lesioni o morte"},{en:"A DUI occurring on a private road",it:"Un DUI che si verifica su una strada privata"}],correct:1,explain_en:"DUI per se: a BAC of 0.08%+ makes the driver legally intoxicated regardless of how they appear or feel. No additional proof of impairment is required.",explain_it:"DUI per se: un BAC di 0,08%+ rende il conducente legalmente intossicato indipendentemente da come appare o si sente. Non e richiesta prova aggiuntiva di compromissione."},
  {cat:"alcohol",en:"What is the effect of alcohol on night vision?",it:"Qual e l'effetto dell'alcol sulla visione notturna?",options:[{en:"Alcohol improves night vision at moderate BAC",it:"L'alcol migliora la visione notturna a BAC moderato"},{en:"Alcohol impairs night vision — reduces ability to adapt to darkness and recover from glare",it:"L'alcol compromette la visione notturna — riduce la capacita di adattarsi all'oscurita e riprendersi dall'abbagliamento"},{en:"Night vision is not affected by alcohol",it:"La visione notturna non e influenzata dall'alcol"},{en:"Only high BAC (above 0.15%) affects night vision",it:"Solo un BAC alto (sopra 0,15%) influisce sulla visione notturna"}],correct:1,explain_en:"Alcohol impairs night vision even at low BAC: reduces the ability to adapt to darkness, recover from headlight glare, and see in low contrast conditions.",explain_it:"L'alcol compromette la visione notturna anche a basso BAC: riduce la capacita di adattarsi all'oscurita, riprendersi dall'abbagliamento dei fari e vedere in condizioni di basso contrasto."},
  {cat:"alcohol",en:"What does it mean for DUI sentencing if a defendant is 'adjudicated guilty' vs. 'withhold of adjudication'?",it:"Cosa significa per la sentenza DUI se un imputato e 'giudicato colpevole' vs. 'sospensione del giudizio'?",options:[{en:"There is no legal difference between the two",it:"Non c'e differenza legale tra i due"},{en:"Adjudicated guilty = formal conviction on record; withhold = no formal conviction (but DUI priors still count for enhancement purposes)",it:"Giudicato colpevole = condanna formale nel casellario; sospensione = nessuna condanna formale (ma i DUI precedenti contano ancora per le maggiorazioni)"},{en:"Withhold is only for juvenile DUI",it:"La sospensione e solo per il DUI giovanile"},{en:"With adjudication, no license suspension occurs",it:"Con il giudizio, non si verifica nessuna sospensione della patente"}],correct:1,explain_en:"For DUI in Florida: withhold of adjudication is NOT available. Conviction is mandatory. Unlike other offenses, a DUI conviction cannot be withheld or expunged.",explain_it:"Per il DUI in Florida: la sospensione del giudizio NON e disponibile. La condanna e obbligatoria. A differenza di altri reati, una condanna DUI non puo essere sospesa o cancellata."},
  {cat:"alcohol",en:"Can a Florida DUI conviction ever be expunged from a criminal record?",it:"Puo una condanna DUI in Florida essere cancellata da un casellario penale?",options:[{en:"Yes — after 5 years with no further offenses",it:"Si — dopo 5 anni senza ulteriori reati"},{en:"No — DUI convictions in Florida cannot be expunged or sealed",it:"No — le condanne DUI in Florida non possono essere cancellate o sigillate"},{en:"Yes — if it was a first offense with no accident",it:"Si — se era una prima offesa senza incidente"},{en:"Yes — only if community service was completed",it:"Si — solo se il servizio alla comunità e stato completato"}],correct:1,explain_en:"Florida DUI convictions cannot be expunged or sealed. They remain permanently on your criminal and driving record.",explain_it:"Le condanne DUI in Florida non possono essere cancellate o sigillate. Rimangono permanentemente nel casellario penale e di guida."},
  {cat:"alcohol",en:"What is the effect of mixing alcohol with energy drinks?",it:"Qual e l'effetto della miscela di alcol con bevande energetiche?",options:[{en:"Energy drinks neutralize the effects of alcohol",it:"Le bevande energetiche neutralizzano gli effetti dell'alcol"},{en:"Caffeine masks feelings of sedation but does NOT reduce BAC or impairment — creating a 'wide awake drunk'",it:"La caffeina maschera le sensazioni di sedazione ma NON riduce il BAC o la compromissione — creando un 'ubriaco sveglio'"},{en:"Mixing reduces how quickly alcohol is absorbed",it:"La miscela riduce la velocita di assorbimento dell'alcol"},{en:"Energy drinks have no effect on alcohol",it:"Le bevande energetiche non hanno effetti sull'alcol"}],correct:1,explain_en:"Caffeine in energy drinks masks the sedating effects of alcohol but does NOT reduce impairment. Users feel more awake but are equally impaired — making them more likely to drive.",explain_it:"La caffeina nelle bevande energetiche maschera gli effetti sedativi dell'alcol ma NON riduce la compromissione. Gli utenti si sentono piu svegli ma sono ugualmente compromessi."},
  {cat:"alcohol",en:"What is 'vehicular manslaughter' vs. 'DUI manslaughter' in Florida?",it:"Cos'e il 'omicidio colposo del veicolo' vs. 'omicidio colposo DUI' in Florida?",options:[{en:"They are the same offense",it:"Sono lo stesso reato"},{en:"DUI manslaughter requires alcohol/drug impairment; vehicular homicide requires reckless driving causing death without necessarily being impaired",it:"L'omicidio colposo DUI richiede la compromissione da alcol/droghe; l'omicidio con veicolo richiede guida spericolata che causa morte senza necessariamente essere compromesso"},{en:"Only DUI manslaughter is a criminal offense",it:"Solo l'omicidio colposo DUI e un reato penale"},{en:"Vehicular manslaughter applies only to pedestrian fatalities",it:"L'omicidio con veicolo si applica solo alle vittime pedonali"}],correct:1,explain_en:"DUI manslaughter: death caused while driving under the influence (2nd-degree felony). Vehicular homicide: death caused by reckless driving without necessarily being impaired.",explain_it:"Omicidio colposo DUI: morte causata durante la guida sotto l'influenza (crimine di 2° grado). Omicidio con veicolo: morte causata da guida spericolata senza necessariamente essere compromessi."},
  {cat:"alcohol",en:"What is Florida's law on prescription drugs that cause drowsiness and driving?",it:"Qual e la legge della Florida sui farmaci da prescrizione che causano sonnolenza e la guida?",options:[{en:"Legal to drive if a doctor prescribed the medication",it:"Legale guidare se un medico ha prescritto il farmaco"},{en:"Illegal to drive if the medication impairs normal faculties — regardless of prescription status",it:"Illegale guidare se il farmaco compromette le facoltà normali — indipendentemente dallo stato di prescrizione"},{en:"Only illegal for CDL holders",it:"Illegale solo per i titolari CDL"},{en:"Legal if the dosage is as prescribed",it:"Legale se il dosaggio e come prescritto"}],correct:1,explain_en:"Florida DUI law applies to any substance impairing normal faculties — including legal prescription drugs. A valid prescription is NOT a defense to DUI.",explain_it:"La legge DUI della Florida si applica a qualsiasi sostanza che compromette le facoltà normali — inclusi i farmaci da prescrizione legali. Una prescrizione valida NON e una difesa al DUI."},
  {cat:"alcohol",en:"What is the legal definition of 'under the influence' in Florida DUI law?",it:"Qual e la definizione legale di 'sotto l'influenza' nella legge DUI della Florida?",options:[{en:"Having any detectable amount of alcohol in the bloodstream",it:"Avere qualsiasi quantita rilevabile di alcol nel sangue"},{en:"Normal faculties are impaired by alcohol or a controlled substance to the extent that the person is less able to drive safely",it:"Le facolta normali sono compromesse da alcol o una sostanza controllata al punto che la persona e meno in grado di guidare in sicurezza"},{en:"Being visibly drunk or intoxicated",it:"Essere visibilmente ubriaco o intossicato"},{en:"Having a BAC at or above 0.08%",it:"Avere un BAC pari o superiore a 0,08%"}],correct:1,explain_en:"'Under the influence' means normal faculties are impaired to the extent the driver is less capable than a sober person. This standard can apply even below 0.08% BAC.",explain_it:"'Sotto l'influenza' significa che le facolta normali sono compromesse al punto che il conducente e meno capace di una persona sobria. Questo standard puo applicarsi anche sotto 0,08% BAC."},
  {cat:"alcohol",en:"What is the purpose of Florida's DUI vehicle impoundment?",it:"Qual e lo scopo del sequestro del veicolo DUI della Florida?",options:[{en:"To punish the driver financially",it:"Per punire il conducente finanziariamente"},{en:"To prevent the impaired driver from continuing to operate the vehicle immediately after arrest",it:"Per impedire al conducente compromesso di continuare a guidare il veicolo immediatamente dopo l'arresto"},{en:"For evidence collection only",it:"Solo per la raccolta delle prove"},{en:"It is optional and rarely used",it:"E opzionale e raramente usato"}],correct:1,explain_en:"Vehicle impoundment after DUI arrest prevents the impaired driver from retrieving the vehicle and driving again. For a first DUI: 10-day impoundment; second: 30 days; third: 90 days.",explain_it:"Il sequestro del veicolo dopo l'arresto DUI impedisce al conducente compromesso di recuperare il veicolo e guidare di nuovo. Primo DUI: 10 giorni; secondo: 30 giorni; terzo: 90 giorni."},
  {cat:"alcohol",en:"Under Florida law, what must happen if a person refuses a BAC test for the second time?",it:"Ai sensi della legge Florida, cosa deve accadere se una persona rifiuta un test BAC per la seconda volta?",options:[{en:"No additional consequence — refusal is always the driver's right",it:"Nessuna conseguenza aggiuntiva — il rifiuto e sempre il diritto del conducente"},{en:"18-month license suspension AND can be charged with a first-degree misdemeanor",it:"Sospensione della patente di 18 mesi E puo essere accusato di un'infrazione minore di primo grado"},{en:"Only a 6-month suspension",it:"Solo una sospensione di 6 mesi"},{en:"The same consequence as the first refusal",it:"La stessa conseguenza del primo rifiuto"}],correct:1,explain_en:"Second BAC test refusal in Florida: 18-month license suspension AND a first-degree misdemeanor criminal charge for the refusal itself.",explain_it:"Secondo rifiuto del test BAC in Florida: sospensione della patente di 18 mesi E un'accusa penale per infrazione minore di primo grado per il rifiuto stesso."},
  {cat:"alcohol",en:"What is the effect of alcohol on driving at low speeds vs. highway speeds?",it:"Qual e l'effetto dell'alcol sulla guida a basse velocita vs. velocita autostradali?",options:[{en:"Alcohol is only dangerous at highway speeds",it:"L'alcol e pericoloso solo alle velocita autostradali"},{en:"Alcohol impairs driving at ALL speeds — even low-speed maneuvers require judgment, coordination, and reaction time",it:"L'alcol compromette la guida a TUTTE le velocita — anche le manovre a bassa velocita richiedono giudizio, coordinazione e tempo di reazione"},{en:"Low-speed driving is safe even at 0.15% BAC",it:"La guida a bassa velocita e sicura anche a 0,15% BAC"},{en:"Only reaction time is affected at low speeds",it:"Solo il tempo di reazione e influenzato a basse velocita"}],correct:1,explain_en:"Alcohol impairs driving at ALL speeds. Even parking, backing, and low-speed turns require coordination, judgment, and spatial awareness — all impaired by alcohol.",explain_it:"L'alcol compromette la guida a TUTTE le velocita. Anche il parcheggio, la retromarcia e le curve a bassa velocita richiedono coordinazione, giudizio e consapevolezza spaziale."},
  {cat:"alcohol",en:"What is the Florida law on alcohol consumption by boat operators?",it:"Qual e la legge della Florida sul consumo di alcol da parte degli operatori di barche?",options:[{en:"Boating has no alcohol restrictions",it:"La navigazione non ha restrizioni sull'alcol"},{en:"BUI (Boating Under the Influence) uses the same 0.08% BAC standard as driving — and carries similar penalties",it:"BUI (Boating Under the Influence) usa lo stesso standard BAC di 0,08% della guida — e comporta sanzioni simili"},{en:"Boat operators may drink as long as they are not visibly drunk",it:"Gli operatori di barche possono bere purche non siano visibilmente ubriachi"},{en:"Only fishing boats are subject to BUI laws",it:"Solo le barche da pesca sono soggette alle leggi BUI"}],correct:1,explain_en:"Florida's BUI law mirrors DUI: 0.08% BAC limit, implied consent, similar penalties. Boating and alcohol are a dangerous combination — over half of boating fatalities involve alcohol.",explain_it:"La legge BUI della Florida rispecchia il DUI: limite BAC di 0,08%, consenso implicito, sanzioni simili. Navigare e alcol sono una combinazione pericolosa."},
  {cat:"alcohol",en:"What is the 'responsible server' law concept in Florida?",it:"Cos'e il concetto di legge sul 'servizio responsabile' in Florida?",options:[{en:"A law requiring all restaurant staff to be trained in food safety",it:"Una legge che richiede a tutto il personale dei ristoranti di essere formato sulla sicurezza alimentare"},{en:"Dram shop liability — licensed establishments may be liable for damages if they serve alcohol to a visibly intoxicated person who then causes a DUI crash",it:"Responsabilita del dram shop — i locali con licenza possono essere responsabili per i danni se servono alcol a una persona visibilmente intossicata che poi causa un incidente DUI"},{en:"A requirement for bartenders to call taxis for drunk patrons",it:"Un requisito per i baristi di chiamare taxi per i clienti ubriachi"},{en:"Florida has no dram shop liability",it:"La Florida non ha responsabilita del dram shop"}],correct:1,explain_en:"Florida's dram shop law: licensed alcohol vendors may face civil liability if they knowingly serve visibly intoxicated individuals who subsequently cause injury or death.",explain_it:"La legge del dram shop della Florida: i venditori di alcol con licenza possono affrontare responsabilita civile se servono consapevolmente individui visibilmente intossicati che successivamente causano lesioni o morte."},
  {cat:"alcohol",en:"What is the most effective way to prevent drunk driving?",it:"Qual e il modo piu efficace per prevenire la guida in stato di ebbrezza?",options:[{en:"Never drink more than 2 beers",it:"Non bere mai piu di 2 birre"},{en:"Plan ahead — designate a sober driver, use rideshare, or arrange other transportation before drinking",it:"Pianifica in anticipo — designa un conducente sobrio, usa un rideshare o organizza altri trasporti prima di bere"},{en:"Drink coffee before driving to sober up",it:"Bere caffe prima di guidare per smaltire l'alcol"},{en:"Only drive short distances when slightly impaired",it:"Guidare solo brevi distanze quando leggermente compromesso"}],correct:1,explain_en:"Planning ahead is the key: designate a sober driver before the event, use Uber/Lyft, take a taxi, or arrange to stay overnight. Never plan to 'drive a little' after drinking.",explain_it:"Pianificare in anticipo e la chiave: designa un conducente sobrio prima dell'evento, usa Uber/Lyft, prendi un taxi o organizza di rimanere a dormire."},
  {cat:"alcohol",en:"What is the difference between Florida's administrative license suspension and the criminal DUI suspension?",it:"Qual e la differenza tra la sospensione amministrativa della patente della Florida e la sospensione penale DUI?",options:[{en:"They are the same process",it:"Sono lo stesso processo"},{en:"Administrative suspension is immediate upon arrest (by FLHSMV); criminal suspension follows conviction in court — both may run concurrently",it:"La sospensione amministrativa e immediata all'arresto (dal FLHSMV); quella penale segue la condanna in tribunale — entrambe possono essere concorrenti"},{en:"Administrative suspension is optional",it:"La sospensione amministrativa e opzionale"},{en:"Only one suspension can apply — not both",it:"Solo una sospensione puo applicarsi — non entrambe"}],correct:1,explain_en:"Administrative suspension (by FLHSMV): immediate upon failing/refusing BAC test. Criminal suspension: ordered by court at conviction. Both can occur and sometimes overlap.",explain_it:"Sospensione amministrativa (dal FLHSMV): immediata al fallimento/rifiuto del test BAC. Sospensione penale: ordinata dal tribunale alla condanna. Entrambe possono verificarsi e talvolta si sovrappongono."},
  {cat:"alcohol",en:"What happens to your Florida driver's license if you fail a BAC test (0.08%+) at a DUI stop?",it:"Cosa succede alla tua patente Florida se fallisci un test BAC (0,08%+) a un fermo DUI?",options:[{en:"Nothing until you are convicted in court",it:"Niente fino alla condanna in tribunale"},{en:"FLHSMV automatically suspends it for 6 months (first offense) — independent of any criminal proceedings",it:"Il FLHSMV la sospende automaticamente per 6 mesi (prima offesa) — indipendente da qualsiasi procedimento penale"},{en:"License is suspended only if you are convicted",it:"La patente e sospesa solo se sei condannato"},{en:"License is immediately confiscated and destroyed",it:"La patente viene immediatamente confiscata e distrutta"}],correct:1,explain_en:"Failing a BAC test triggers an automatic administrative suspension by FLHSMV: 6 months for a first offense (regardless of criminal outcome). You receive the 10-Day Letter.",explain_it:"Il fallimento di un test BAC scatena una sospensione amministrativa automatica dal FLHSMV: 6 mesi per una prima offesa (indipendente dall'esito penale). Ricevi la Lettera dei 10 Giorni."},
  {cat:"alcohol",en:"What is the minimum jail time for a first DUI conviction in Florida?",it:"Qual e il tempo minimo di carcere per una prima condanna DUI in Florida?",options:[{en:"No mandatory minimum jail time",it:"Nessun tempo minimo obbligatorio di carcere"},{en:"24 hours minimum",it:"Minimo 24 ore"},{en:"48 hours minimum",it:"Minimo 48 ore"},{en:"10 days mandatory",it:"10 giorni obbligatori"}],correct:0,explain_en:"There is no mandatory minimum jail time for a first DUI in Florida (unless enhanced circumstances exist). The court may sentence up to 6 months in jail, but it is not mandatory.",explain_it:"Non c'e un tempo minimo obbligatorio di carcere per un primo DUI in Florida (a meno che non esistano circostanze aggravate). Il tribunale puo condannare fino a 6 mesi di carcere, ma non e obbligatorio."},
  {cat:"alcohol",en:"What percentage of fatal traffic crashes in the US involve alcohol-impaired driving?",it:"Quale percentuale degli incidenti stradali mortali negli USA coinvolge la guida con compromissione da alcol?",options:[{en:"About 10%",it:"Circa il 10%"},{en:"About 30%",it:"Circa il 30%"},{en:"About 50%",it:"Circa il 50%"},{en:"About 70%",it:"Circa il 70%"}],correct:1,explain_en:"Approximately 30% of all traffic fatalities in the US involve a driver with BAC 0.08%+. Alcohol-impaired driving kills about 10,000 people per year.",explain_it:"Circa il 30% di tutti i decessi stradali negli USA coinvolge un conducente con BAC 0,08%+. La guida con compromissione da alcol uccide circa 10.000 persone all'anno."},
  {cat:"alcohol",en:"What is 'blackout drinking' and why is it especially dangerous for drivers?",it:"Cos'e il 'bere fino al blackout' e perche e particolarmente pericoloso per i conducenti?",options:[{en:"Drinking coffee at night to stay awake while driving",it:"Bere caffe di notte per rimanere svegli durante la guida"},{en:"Alcohol-induced amnesia where the drinker has no memory of events — may drive without realizing they are impaired",it:"Amnesia indotta dall'alcol dove il bevitore non ha memoria degli eventi — puo guidare senza rendersi conto di essere compromesso"},{en:"Blacking out the car windows to sleep",it:"Oscurare i finestrini dell'auto per dormire"},{en:"A blackout occurs only at BAC above 0.20%",it:"Un blackout si verifica solo con BAC superiore a 0,20%"}],correct:1,explain_en:"Alcohol-induced blackout: the person is awake and seemingly functioning but forming no new memories. They may drive, make decisions, and appear somewhat normal while being severely impaired.",explain_it:"Blackout indotto dall'alcol: la persona e sveglia e apparentemente funzionale ma non forma nuovi ricordi. Possono guidare, prendere decisioni e sembrare normali mentre sono gravemente compromessi."},
  {cat:"alcohol",en:"What is the required action if a Florida driver is stopped at a DUI sobriety checkpoint?",it:"Qual e l'azione richiesta se un conducente Florida e fermato a un checkpoint di sobriety DUI?",options:[{en:"You may legally turn around before reaching the checkpoint",it:"Puoi legalmente girare prima di raggiungere il checkpoint"},{en:"Comply with the officer — provide license, registration, insurance; answer basic questions; submit to testing if arrested",it:"Conformarsi all'agente — fornire patente, registrazione, assicurazione; rispondere alle domande di base; sottoporsi ai test se arrestato"},{en:"You have the right to refuse all interaction",it:"Hai il diritto di rifiutare qualsiasi interazione"},{en:"You may only be stopped if the officer has probable cause",it:"Puoi essere fermato solo se l'agente ha una causa probabile"}],correct:1,explain_en:"At a checkpoint: provide documents, answer basic questions. You are not required to perform field sobriety tests unless arrested, but implied consent applies if arrested.",explain_it:"A un checkpoint: fornisci i documenti, rispondi alle domande di base. Non sei obbligato a eseguire i test di sobriety a meno che non sei arrestato, ma il consenso implicito si applica se arrestato."},
  {cat:"alcohol",en:"What is the impact of DUI on a professional license in Florida (e.g., medical, legal, nursing)?",it:"Qual e l'impatto del DUI su una licenza professionale in Florida (p.es. medica, legale, infermieristica)?",options:[{en:"No impact — DUI is a traffic matter only",it:"Nessun impatto — il DUI e solo una questione di traffico"},{en:"Professional licensing boards may suspend or revoke professional licenses based on DUI conviction",it:"I consigli di licenza professionali possono sospendere o revocare le licenze professionali sulla base di una condanna DUI"},{en:"Only affects CDL holders",it:"Influisce solo sui titolari CDL"},{en:"Impact only occurs after a second DUI",it:"L'impatto si verifica solo dopo un secondo DUI"}],correct:1,explain_en:"A DUI conviction can trigger review by professional licensing boards (medical, legal, nursing, teaching, etc.) and may result in suspension or revocation of professional licenses.",explain_it:"Una condanna DUI puo innescare una revisione da parte dei consigli di licenza professionali (medici, legali, infermieristici, ecc.) e puo comportare la sospensione o revoca delle licenze professionali."},
  {cat:"alcohol",en:"What is the most common time period for DUI arrests in Florida?",it:"Qual e il periodo di tempo piu comune per gli arresti DUI in Florida?",options:[{en:"During morning rush hours",it:"Durante le ore di punta mattutine"},{en:"Late night and early morning hours — especially weekends",it:"Ore serali e del mattino presto — specialmente nei weekend"},{en:"During afternoon school dismissal",it:"Durante il fine delle lezioni pomeridiane"},{en:"During major sporting events only",it:"Solo durante i principali eventi sportivi"}],correct:1,explain_en:"Most DUI arrests occur between midnight and 3 AM, particularly on Friday and Saturday nights. Alcohol-related crashes peak during these hours.",explain_it:"La maggior parte degli arresti DUI avviene tra mezzanotte e le 3:00, particolarmente nelle notti di venerdi e sabato. Gli incidenti legati all'alcol raggiungono il picco in queste ore."},


  // ══ SESSION 3 — LICENSE +58 ═══════════════════════════════════
  {cat:"license",en:"What is a 'Real ID' compliant Florida driver's license?",it:"Cos'e una patente di guida Florida conforme al 'Real ID'?",options:[{en:"A license with a gold star symbol meeting federal identification standards",it:"Una patente con un simbolo stella dorata che soddisfa gli standard federali di identificazione"},{en:"A standard Florida license",it:"Una patente Florida standard"},{en:"Only available to US citizens",it:"Disponibile solo ai cittadini USA"},{en:"Required for all international travel",it:"Richiesta per tutti i viaggi internazionali"}],correct:0,explain_en:"A Real ID compliant Florida license has a gold star. It meets federal standards and is required for domestic flights and accessing federal buildings starting May 2025.",explain_it:"Una patente Florida conforme al Real ID ha una stella dorata. Soddisfa gli standard federali ed e richiesta per i voli nazionali e l'accesso agli edifici federali a partire da maggio 2025."},
  {cat:"license",en:"What is the difference between a driver's license 'suspension' and 'revocation' in Florida?",it:"Qual e la differenza tra 'sospensione' e 'revoca' di una patente in Florida?",options:[{en:"They are the same thing",it:"Sono la stessa cosa"},{en:"Suspension is temporary — driving privileges may be restored after the period; revocation permanently ends the license",it:"La sospensione e temporanea — i privilegi di guida possono essere ripristinati dopo il periodo; la revoca termina permanentemente la patente"},{en:"Revocation is temporary; suspension is permanent",it:"La revoca e temporanea; la sospensione e permanente"},{en:"Suspension is for traffic violations; revocation is for criminal offenses only",it:"La sospensione e per le violazioni del traffico; la revoca e solo per i reati penali"}],correct:1,explain_en:"Suspension: temporary loss of driving privileges — can be reinstated after the period and requirements are met. Revocation: the license is cancelled — must reapply and requalify.",explain_it:"Sospensione: perdita temporanea dei privilegi di guida — puo essere ripristinata dopo il periodo e il soddisfacimento dei requisiti. Revoca: la patente viene cancellata — devi richiedere e riqualificarti."},
  {cat:"license",en:"What is Florida's 'habitual traffic offender' revocation period?",it:"Qual e il periodo di revoca per il 'trasgressore abituale del traffico' in Florida?",options:[{en:"1 year",it:"1 anno"},{en:"5 years",it:"5 anni"},{en:"10 years",it:"10 anni"},{en:"Permanent",it:"Permanente"}],correct:1,explain_en:"A habitual traffic offender faces a mandatory 5-year license revocation. Reinstatement requires a hardship hearing and meeting all FLHSMV requirements.",explain_it:"Un trasgressore abituale del traffico affronta una revoca obbligatoria della patente di 5 anni. Il ripristino richiede un'udienza per necessita e il soddisfacimento di tutti i requisiti FLHSMV."},
  {cat:"license",en:"What is a 'Business Purposes Only' (BPO) license in Florida?",it:"Cos'e una patente 'Solo per Scopi Lavorativi' (BPO) in Florida?",options:[{en:"A license for commercial vehicle operators only",it:"Una patente solo per gli operatori di veicoli commerciali"},{en:"A restricted license allowing driving only to/from work, school, church, and medical appointments during suspension",it:"Una patente con restrizioni che consente di guidare solo da/verso il lavoro, scuola, chiesa e appuntamenti medici durante la sospensione"},{en:"A license issued to self-employed individuals",it:"Una patente rilasciata agli individui autonomi"},{en:"A temporary license while waiting for a new one to be issued",it:"Una patente temporanea mentre si aspetta l'emissione di una nuova"}],correct:1,explain_en:"BPO (Business Purposes Only) and EPO (Employment Purposes Only) are restricted hardship licenses allowing limited driving during a suspension for essential purposes.",explain_it:"BPO (Solo per Scopi Lavorativi) ed EPO (Solo per Scopi di Impiego) sono patenti con restrizioni per necessita che consentono una guida limitata durante una sospensione per scopi essenziali."},
  {cat:"license",en:"What is Florida's law on the use of a driver's license as identification?",it:"Qual e la legge della Florida sull'uso della patente di guida come documento di identita?",options:[{en:"A driver's license can only be used while in a vehicle",it:"Una patente puo essere usata solo mentre si e in un veicolo"},{en:"A Florida driver's license is valid government-issued ID for most purposes — including age verification",it:"Una patente Florida e un documento d'identita governativo valido per la maggior parte degli scopi — inclusa la verifica dell'eta"},{en:"Driver's licenses are not accepted as ID for official federal purposes",it:"Le patenti non sono accettate come documento d'identita per scopi federali ufficiali"},{en:"Only a passport serves as valid ID in Florida",it:"Solo un passaporto serve come documento d'identita valido in Florida"}],correct:1,explain_en:"A Florida driver's license (especially Real ID compliant) serves as valid government ID for most purposes including boarding domestic flights and entering federal facilities.",explain_it:"Una patente Florida (specialmente conforme al Real ID) serve come documento d'identita governativo valido per la maggior parte degli scopi incluso l'imbarco sui voli nazionali."},
  {cat:"license",en:"What is the 'Motorcycle Only' restriction on a Florida license?",it:"Cos'e la restrizione 'Solo Motocicletta' su una patente Florida?",options:[{en:"The driver is prohibited from riding motorcycles",it:"Al conducente e vietato guidare le motociclette"},{en:"The driver may only operate motorcycles — not automobiles",it:"Il conducente puo solo guidare motociclette — non automobili"},{en:"A restriction allowing motorcycles in addition to cars",it:"Una restrizione che consente le motociclette in aggiunta alle auto"},{en:"The driver must ride with a licensed instructor",it:"Il conducente deve guidare con un istruttore patentato"}],correct:1,explain_en:"A 'Motorcycle Only' license restricts the driver to motorcycle operation only. They do not have Class E driving privileges for regular automobiles.",explain_it:"Una patente 'Solo Motocicletta' limita il conducente alla sola guida di motociclette. Non hanno i privilegi di guida Class E per le normali automobili."},
  {cat:"license",en:"What is the Florida law on sharing a driver's license with another person?",it:"Qual e la legge della Florida sulla condivisione di una patente di guida con un'altra persona?",options:[{en:"Legal if you trust the person",it:"Legale se ti fidi della persona"},{en:"Illegal — lending or using another person's license is a criminal offense",it:"Illegale — prestare o usare la patente di un'altra persona e un reato penale"},{en:"Only illegal if the other person gets in an accident",it:"Illegale solo se l'altra persona ha un incidente"},{en:"Legal between spouses",it:"Legale tra coniugi"}],correct:1,explain_en:"Lending your driver's license or using another person's license is a criminal offense in Florida — even between family members.",explain_it:"Prestare la tua patente o usare la patente di un'altra persona e un reato penale in Florida — anche tra familiari."},
  {cat:"license",en:"What does Florida's 'provisional license' (for drivers 16-17) restrict?",it:"Cosa limita la 'patente provvisoria' della Florida (per i conducenti di 16-17 anni)?",options:[{en:"Must drive with a licensed adult at all times",it:"Deve sempre guidare con un adulto patentato"},{en:"No driving 11 PM–6 AM (curfew), max 1 passenger under 18 first year, no handheld devices",it:"Nessuna guida 23:00-6:00 (coprifuoco), max 1 passeggero under 18 nel primo anno, nessun dispositivo a mano"},{en:"Speed limit reduced to 45 mph at all times",it:"Limite di velocita ridotto a 45 mph in ogni momento"},{en:"Must display a P sticker on the vehicle",it:"Deve mostrare un adesivo P sul veicolo"}],correct:1,explain_en:"Florida provisional license (16-17): curfew 11PM-6AM, only 1 non-family passenger under 18 during first 12 months, and no handheld devices while driving.",explain_it:"Patente provvisoria Florida (16-17): coprifuoco 23:00-6:00, solo 1 passeggero non familiare under 18 durante i primi 12 mesi e nessun dispositivo a mano durante la guida."},
  {cat:"license",en:"How many supervised driving hours are required before a Florida teen can get a provisional license?",it:"Quante ore di guida supervisionata sono richieste prima che un adolescente Florida possa ottenere la patente provvisoria?",options:[{en:"25 hours (5 at night)",it:"25 ore (5 di notte)"},{en:"50 hours (10 at night)",it:"50 ore (10 di notte)"},{en:"100 hours (20 at night)",it:"100 ore (20 di notte)"},{en:"No hour requirement — only the knowledge test",it:"Nessun requisito orario — solo il test di conoscenza"}],correct:1,explain_en:"Florida requires teen drivers to log 50 hours of supervised driving (10 at night) with a licensed adult 21+ before applying for a provisional license.",explain_it:"La Florida richiede ai conducenti adolescenti di registrare 50 ore di guida supervisionata (10 di notte) con un adulto patentato 21+ prima di richiedere la patente provvisoria."},
  {cat:"license",en:"What is the Florida law on wearing corrective lenses if your license requires them?",it:"Qual e la legge della Florida sull'indossare lenti correttive se la tua patente le richiede?",options:[{en:"Optional — your license is a suggestion only",it:"Facoltativo — la tua patente e solo un suggerimento"},{en:"You must wear them whenever driving — failure to do so is a violation",it:"Devi indossarle ogni volta che guidi — la mancata osservanza e una violazione"},{en:"Only required at night",it:"Richieste solo di notte"},{en:"Only required on highways",it:"Richieste solo in autostrada"}],correct:1,explain_en:"If your license has a corrective lens restriction (code A), you must wear glasses or contacts whenever operating a vehicle. Driving without them is a violation.",explain_it:"Se la tua patente ha la restrizione per lenti correttive (codice A), devi indossare occhiali o lenti a contatto ogni volta che guidi. Guidare senza e una violazione."},
  {cat:"license",en:"What is the minimum age for a Florida Class A or B commercial license?",it:"Qual e l'eta minima per una patente commerciale Florida Class A o B?",options:[{en:"16 years old",it:"16 anni"},{en:"18 for intrastate; 21 for interstate",it:"18 per intrastatale; 21 per interstatale"},{en:"21 for all commercial licenses",it:"21 per tutte le patenti commerciali"},{en:"18 for all CDL classes",it:"18 per tutte le classi CDL"}],correct:1,explain_en:"Class A and B CDL: minimum 18 years for intrastate commerce, 21 years for interstate or transporting hazardous materials.",explain_it:"CDL Class A e B: minimo 18 anni per il commercio intrastatale, 21 anni per quello interstatale o il trasporto di materiali pericolosi."},
  {cat:"license",en:"What is the Florida penalty for using a fake or altered driver's license?",it:"Qual e la sanzione Florida per l'uso di una patente di guida falsa o alterata?",options:[{en:"A civil fine only",it:"Solo una multa civile"},{en:"A criminal offense — up to a first-degree misdemeanor or higher depending on circumstances",it:"Un reato penale — fino a un'infrazione minore di primo grado o superiore a seconda delle circostanze"},{en:"Only loss of driving privileges",it:"Solo perdita dei privilegi di guida"},{en:"A warning for first offense",it:"Un avvertimento alla prima offesa"}],correct:1,explain_en:"Using, making, or possessing a fake or altered driver's license is a criminal offense in Florida. Minors using fake IDs to purchase alcohol face enhanced penalties.",explain_it:"Usare, creare o possedere una patente falsa o alterata e un reato penale in Florida. I minori che usano documenti falsi per acquistare alcol affrontano sanzioni maggiorate."},
  {cat:"license",en:"What must you do if your Florida driver's license is lost or stolen?",it:"Cosa devi fare se la tua patente Florida viene persa o rubata?",options:[{en:"Wait until renewal — no need to replace it",it:"Aspettare il rinnovo — non c'e bisogno di sostituirla"},{en:"Apply for a replacement license at FLHSMV or online if eligible",it:"Richiedere una patente sostitutiva al FLHSMV o online se idoneo"},{en:"File a police report only",it:"Solo presentare un rapporto di polizia"},{en:"Use a photocopy as a temporary license",it:"Usare una fotocopia come patente temporanea"}],correct:1,explain_en:"If your Florida license is lost or stolen, apply for a replacement at any FLHSMV office or online (if eligible). A small fee applies.",explain_it:"Se la tua patente Florida viene persa o rubata, richiedi una sostitutiva in qualsiasi ufficio FLHSMV o online (se idoneo). Si applica una piccola quota."},
  {cat:"license",en:"What disqualifies a person from getting a Florida driver's license?",it:"Cosa squalifica una persona dall'ottenere una patente Florida?",options:[{en:"Having any prior traffic ticket",it:"Avere qualsiasi multa precedente"},{en:"Current license revocation or suspension, unresolved tickets, or certain convictions (DUI, felony traffic violations)",it:"Revoca o sospensione della patente attuale, multe non risolte o certe condanne (DUI, violazioni del traffico da reato)"},{en:"Being over 75 years old",it:"Avere piu di 75 anni"},{en:"Having a medical condition of any kind",it:"Avere qualsiasi condizione medica"}],correct:1,explain_en:"You cannot get a Florida license if your current license is suspended/revoked, you have outstanding tickets, unpaid child support, or certain disqualifying criminal convictions.",explain_it:"Non puoi ottenere una patente Florida se la tua patente attuale e sospesa/revocata, hai multe in sospeso, mancato pagamento del mantenimento figli o certe condanne penali squalificanti."},
  {cat:"license",en:"In Florida, what is a 'Notice of Suspension' given to a driver?",it:"In Florida, cos'e un 'Avviso di Sospensione' dato a un conducente?",options:[{en:"An advance warning before a ticket is issued",it:"Un avvertimento anticipato prima dell'emissione di una multa"},{en:"An official notification that driving privileges are or will be suspended, specifying the reason and effective date",it:"Una notifica ufficiale che i privilegi di guida sono o saranno sospesi, specificando il motivo e la data effettiva"},{en:"A courtesy reminder to renew your license",it:"Un promemoria di cortesia per rinnovare la patente"},{en:"A notice from an insurance company about rate increases",it:"Una notifica di una compagnia assicurativa sull'aumento delle tariffe"}],correct:1,explain_en:"A Notice of Suspension is an official document from FLHSMV informing the driver that their license is being suspended, the reason, and the effective date.",explain_it:"Un Avviso di Sospensione e un documento ufficiale del FLHSMV che informa il conducente che la patente e in corso di sospensione, il motivo e la data effettiva."},
  {cat:"license",en:"What is a 'SR-22' certificate and when is it required?",it:"Cos'e un certificato 'SR-22' e quando e richiesto?",options:[{en:"A vehicle safety inspection certificate",it:"Un certificato di ispezione della sicurezza del veicolo"},{en:"A certificate of financial responsibility filed by your insurer — required after serious violations or license reinstatement",it:"Un certificato di responsabilita finanziaria presentato dall'assicuratore — richiesto dopo violazioni gravi o ripristino della patente"},{en:"A medical fitness certificate for commercial drivers",it:"Un certificato di idoneita medica per i conducenti commerciali"},{en:"A document allowing driving in multiple states",it:"Un documento che consente di guidare in piu stati"}],correct:1,explain_en:"SR-22 (or FR-44 for DUI) is a certificate your insurance company files with FLHSMV proving you maintain minimum required coverage. Required after serious violations.",explain_it:"SR-22 (o FR-44 per il DUI) e un certificato che la tua compagnia assicurativa presenta al FLHSMV provando che mantieni la copertura minima richiesta. Richiesto dopo violazioni gravi."},
  {cat:"license",en:"What is the Florida requirement for insurance when a license is reinstated?",it:"Qual e il requisito assicurativo della Florida quando una patente viene ripristinata?",options:[{en:"No special insurance requirement",it:"Nessun requisito assicurativo speciale"},{en:"Must obtain and maintain FR-44 (DUI) or SR-22 (other violations) for required period",it:"Deve ottenere e mantenere FR-44 (DUI) o SR-22 (altre violazioni) per il periodo richiesto"},{en:"Only PIP insurance is required",it:"E richiesta solo l'assicurazione PIP"},{en:"Insurance is not verified during reinstatement",it:"L'assicurazione non viene verificata durante il ripristino"}],correct:1,explain_en:"License reinstatement requires maintaining FR-44 (for DUI) or SR-22 (for other violations) for 3 years. The insurance company reports any lapse to FLHSMV, triggering re-suspension.",explain_it:"Il ripristino della patente richiede il mantenimento di FR-44 (per DUI) o SR-22 (per altre violazioni) per 3 anni. La compagnia assicurativa segnala qualsiasi mancanza al FLHSMV, scatenando la re-sospensione."},
  {cat:"license",en:"What is the Florida 'CHOICES' program for teen drivers?",it:"Cos'e il programma Florida 'CHOICES' per i conducenti adolescenti?",options:[{en:"A diversion program allowing teens to avoid DUI charges",it:"Un programma di diversione che consente agli adolescenti di evitare le accuse DUI"},{en:"A driver education program emphasizing decision-making and consequences of unsafe driving",it:"Un programma di educazione alla guida che enfatizza il processo decisionale e le conseguenze della guida non sicura"},{en:"A commercial driver training program",it:"Un programma di formazione per conducenti commerciali"},{en:"A program for teens with prior traffic violations",it:"Un programma per adolescenti con precedenti violazioni del traffico"}],correct:1,explain_en:"CHOICES is a Florida teen driver education program that supplements formal driver's education — focusing on decision-making, peer pressure, and real-world crash consequences.",explain_it:"CHOICES e un programma di educazione alla guida per adolescenti Florida che integra l'educazione alla guida formale — concentrandosi sul processo decisionale e le conseguenze reali degli incidenti."},
  {cat:"license",en:"What does Florida law require regarding vision for renewing a driver's license?",it:"Cosa richiede la legge Florida riguardo alla visione per il rinnovo della patente?",options:[{en:"Vision is only tested when first getting a license",it:"La visione viene testata solo al primo conseguimento della patente"},{en:"Vision may be tested at renewal — especially after age 80; corrective lens restrictions updated if needed",it:"La visione puo essere testata al rinnovo — specialmente dopo i 80 anni; le restrizioni per lenti correttive vengono aggiornate se necessario"},{en:"Vision is never tested at license renewal",it:"La visione non viene mai testata al rinnovo della patente"},{en:"Annual vision tests are required for all drivers",it:"I test annuali della visione sono richiesti per tutti i conducenti"}],correct:1,explain_en:"Florida may require vision testing at license renewal, particularly for older drivers. If your vision has changed requiring correction, the restriction on your license is updated.",explain_it:"La Florida puo richiedere il test della visione al rinnovo della patente, particolarmente per i conducenti anziani. Se la visione e cambiata richiedendo correzione, la restrizione sulla patente viene aggiornata."},
  {cat:"license",en:"What must a Florida driver do if their vehicle's liability insurance lapses?",it:"Cosa deve fare un conducente Florida se l'assicurazione di responsabilita del veicolo scade?",options:[{en:"Nothing — insurance is optional if you can pay out of pocket",it:"Niente — l'assicurazione e facoltativa se puoi pagare di tasca propria"},{en:"Maintain continuous coverage — a lapse triggers automatic FLHSMV suspension of registration and license",it:"Mantenere una copertura continua — una mancanza scatena la sospensione automatica del FLHSMV della registrazione e della patente"},{en:"Have 30 days to reinstate before any penalty",it:"Avere 30 giorni per ripristinare prima di qualsiasi sanzione"},{en:"Only affects commercial vehicles",it:"Influisce solo sui veicoli commerciali"}],correct:1,explain_en:"Florida requires continuous PIP and PDL insurance. An insurance lapse triggers automatic suspension of vehicle registration AND driver's license by FLHSMV.",explain_it:"La Florida richiede un'assicurazione PIP e PDL continua. Una mancanza assicurativa scatena la sospensione automatica della registrazione del veicolo E della patente da parte del FLHSMV."},
  {cat:"license",en:"What is 'implied consent' when you accept a Florida driver's license?",it:"Cos'e il 'consenso implicito' quando si accetta una patente di guida Florida?",options:[{en:"You agree to obey all traffic laws",it:"Accetti di rispettare tutte le leggi del traffico"},{en:"You consent to submit to a BAC test if lawfully arrested for DUI — refusal has consequences",it:"Acconsenti a sottoporti a un test BAC se legalmente arrestato per DUI — il rifiuto ha conseguenze"},{en:"You agree to carry insurance at all times",it:"Accetti di portare l'assicurazione in ogni momento"},{en:"You accept FLHSMV's right to revoke your license",it:"Accetti il diritto del FLHSMV di revocare la tua patente"}],correct:1,explain_en:"Implied consent: obtaining a Florida license means you consent to BAC testing when lawfully arrested for DUI. Refusal = license suspension and potential misdemeanor charge.",explain_it:"Consenso implicito: ottenere una patente Florida significa che acconsenti ai test BAC quando legalmente arrestato per DUI. Rifiuto = sospensione della patente e potenziale accusa."},
  {cat:"license",en:"How long does a Florida driver have to satisfy an outstanding judgment after a crash?",it:"Quanto tempo ha un conducente Florida per soddisfare un giudizio pendente dopo un incidente?",options:[{en:"No time limit",it:"Nessun limite di tempo"},{en:"Until the judgment is paid or a payment plan is approved — failure results in license suspension",it:"Finche il giudizio non e pagato o un piano di pagamento e approvato — il mancato rispetto comporta la sospensione della patente"},{en:"6 months from the date of the crash",it:"6 mesi dalla data dell'incidente"},{en:"1 year from the court judgment date",it:"1 anno dalla data del giudizio del tribunale"}],correct:1,explain_en:"An unsatisfied court judgment for a vehicle crash results in license suspension in Florida until the judgment is paid or a satisfactory payment arrangement is made.",explain_it:"Un giudizio del tribunale non soddisfatto per un incidente con veicolo comporta la sospensione della patente in Florida finche il giudizio non e pagato o si fa un accordo di pagamento soddisfacente."},
  {cat:"license",en:"What happens to a Florida teen driver's provisional license if they accumulate 6 or more points in 12 months?",it:"Cosa succede alla patente provvisoria di un adolescente Florida se accumula 6 o piu punti in 12 mesi?",options:[{en:"Nothing — point rules only apply to adults",it:"Niente — le regole sui punti si applicano solo agli adulti"},{en:"Their provisional license is suspended for 30 days",it:"La loro patente provvisoria viene sospesa per 30 giorni"},{en:"They must retake the knowledge test",it:"Devono ripetere il test di conoscenza"},{en:"They receive a warning letter only",it:"Ricevono solo una lettera di avvertimento"}],correct:1,explain_en:"Florida provisional license holders who accumulate 6+ points in 12 months face a 30-day suspension. 7+ points = 90 days suspension. 12+ points = 1-year suspension.",explain_it:"I titolari di patente provvisoria Florida che accumulano 6+ punti in 12 mesi affrontano una sospensione di 30 giorni. 7+ punti = 90 giorni. 12+ punti = 1 anno."},
  {cat:"license",en:"What is the Florida insurance penalty for driving without PIP/PDL coverage?",it:"Qual e la sanzione assicurativa Florida per guidare senza copertura PIP/PDL?",options:[{en:"A $50 fine",it:"Una multa di $50"},{en:"License and registration suspension plus a reinstatement fee of $150-$500 plus requirement to maintain FR-44 for 3 years",it:"Sospensione della patente e della registrazione piu una quota di ripristino di $150-$500 piu il requisito di mantenere FR-44 per 3 anni"},{en:"Only a warning for first offense",it:"Solo un avvertimento alla prima offesa"},{en:"A $100 fine with no suspension",it:"Una multa di $100 senza sospensione"}],correct:1,explain_en:"Driving without required insurance in Florida: license and registration suspended, reinstatement fee $150-$500, and possibly required to maintain FR-44 insurance for 3 years.",explain_it:"Guidare senza l'assicurazione richiesta in Florida: sospensione della patente e della registrazione, quota di ripristino $150-$500 e possibilmente obbligo di mantenere FR-44 per 3 anni."},
  {cat:"license",en:"What is the minimum liability insurance required for a third-party claim against a Florida driver?",it:"Qual e l'assicurazione minima di responsabilita richiesta per un reclamo di terze parti contro un conducente Florida?",options:[{en:"PIP is sufficient for all claims",it:"Il PIP e sufficiente per tutti i reclami"},{en:"PDL ($10,000) covers property damage; bodily injury liability is NOT required but recommended",it:"PDL ($10.000) copre i danni materiali; la responsabilita per lesioni corporali NON e richiesta ma raccomandata"},{en:"$100,000 minimum bodily injury liability",it:"Minimo $100.000 di responsabilita per lesioni corporali"},{en:"Full coverage is the only legal requirement",it:"La copertura completa e l'unico requisito legale"}],correct:1,explain_en:"Florida's minimum is PIP ($10K) + PDL ($10K). Bodily Injury (BI) liability is NOT mandatory (though many drivers carry it). Florida is a no-fault state for personal injury up to PIP limits.",explain_it:"Il minimo in Florida e PIP ($10K) + PDL ($10K). La responsabilita per Lesioni Corporali (BI) NON e obbligatoria (sebbene molti conducenti la portino). Florida e uno stato no-fault."},
  {cat:"license",en:"What is the Florida law on minors obtaining a driver's license if they have dropped out of school?",it:"Qual e la legge Florida sui minori che ottengono la patente se hanno abbandonato la scuola?",options:[{en:"No connection between school enrollment and driving",it:"Nessuna connessione tra l'iscrizione scolastica e la guida"},{en:"Minors who drop out of school without meeting minimum requirements may have their license withheld or suspended",it:"I minori che abbandonano la scuola senza soddisfare i requisiti minimi possono avere la patente trattenuta o sospesa"},{en:"Only affects those under 16",it:"Influisce solo su quelli sotto i 16 anni"},{en:"Homeschooled students cannot get a license",it:"Gli studenti istruzione a casa non possono ottenere la patente"}],correct:1,explain_en:"Florida's 'Stay in School' law: minors who drop out without meeting requirements or have excessive absences may face license suspension as a consequence.",explain_it:"La legge 'Stay in School' della Florida: i minori che abbandonano la scuola senza soddisfare i requisiti o hanno eccessive assenze possono affrontare la sospensione della patente."},
  {cat:"license",en:"What is required to apply for a Florida license after moving from another state?",it:"Cosa e richiesto per richiedere la patente Florida dopo essersi trasferiti da un altro stato?",options:[{en:"Take the full knowledge and road test again regardless",it:"Sostenere di nuovo il test di conoscenza e pratico indipendentemente"},{en:"Surrender the out-of-state license, provide identity and residency documents — knowledge test may be waived for experienced drivers",it:"Cedere la patente dell'altro stato, fornire documenti di identita e residenza — il test di conoscenza puo essere rinunciato per i conducenti esperti"},{en:"Only proof of identity is needed",it:"E necessaria solo la prova di identita"},{en:"Out-of-state licenses are automatically converted",it:"Le patenti di altri stati vengono convertite automaticamente"}],correct:1,explain_en:"New Florida residents: surrender out-of-state license, provide ID and two FL residency proofs. Knowledge test may be waived if you have a valid out-of-state license.",explain_it:"Nuovi residenti Florida: cedere la patente dell'altro stato, fornire documento d'identita e due prove di residenza FL. Il test di conoscenza puo essere rinunciato per i conducenti con una patente valida di un altro stato."},
  {cat:"license",en:"What is the Florida law on the use of turn signals for lane changes on a limited access highway?",it:"Qual e la legge Florida sull'uso dei segnali di svolta per i cambi di corsia su un'autostrada ad accesso limitato?",options:[{en:"Signals are not required on highways",it:"I segnali non sono richiesti in autostrada"},{en:"Signal at least 200 feet before any lane change — failure to signal is a moving violation",it:"Segnalare almeno 200 piedi prima di qualsiasi cambio di corsia — la mancata segnalazione e una violazione in movimento"},{en:"Signal only if other vehicles are nearby",it:"Segnalare solo se altri veicoli sono nelle vicinanze"},{en:"Signal only when changing from the right lane",it:"Segnalare solo quando si cambia dalla corsia destra"}],correct:1,explain_en:"Florida requires signaling at least 200 feet before a lane change on limited access highways (100 feet on other roads). Failing to signal is a moving violation.",explain_it:"La Florida richiede di segnalare almeno 200 piedi prima di un cambio di corsia sulle autostrade ad accesso limitato (100 piedi sulle altre strade). La mancata segnalazione e una violazione in movimento."},
  {cat:"license",en:"What does 'uninsured motorist' (UM) coverage protect against in Florida?",it:"Da cosa protegge la copertura 'automobilista non assicurato' (UM) in Florida?",options:[{en:"Damage to your vehicle from all causes",it:"Danni al tuo veicolo da tutte le cause"},{en:"Injuries to you caused by a driver with no insurance or insufficient coverage — when your own PIP is exhausted",it:"Lesioni a te causate da un conducente senza assicurazione o copertura insufficiente — quando il tuo PIP e esaurito"},{en:"Liability when you cause an accident",it:"Responsabilita quando causi un incidente"},{en:"Weather-related vehicle damage",it:"Danni al veicolo legati al maltempo"}],correct:1,explain_en:"UM (Uninsured/Underinsured Motorist) coverage pays for YOUR injuries when hit by an uninsured or underinsured driver, beyond your PIP limit. Not mandatory in Florida but highly recommended.",explain_it:"La copertura UM paga per LE TUE lesioni quando sei colpito da un conducente non assicurato o sottoassicurato, oltre il tuo limite PIP. Non obbligatoria in Florida ma altamente raccomandata."},
  {cat:"license",en:"What is the Florida law regarding a vehicle owner's responsibility when they lend their car?",it:"Qual e la legge Florida riguardo alla responsabilita del proprietario del veicolo quando presta la macchina?",options:[{en:"The owner has no liability — only the driver is responsible",it:"Il proprietario non ha responsabilita — solo il conducente e responsabile"},{en:"The vehicle owner may be liable for damages if the borrower causes an accident — under Florida's dangerous instrumentality doctrine",it:"Il proprietario del veicolo puo essere responsabile per i danni se il mutuatario causa un incidente — in base alla dottrina dello strumento pericoloso della Florida"},{en:"Only liable if the borrower is under 18",it:"Responsabile solo se il mutuatario ha meno di 18 anni"},{en:"Liability only arises if the car was stolen",it:"La responsabilita sorge solo se l'auto e stata rubata"}],correct:1,explain_en:"Florida's dangerous instrumentality doctrine: vehicle owners who voluntarily entrust their car to another person may be liable for that driver's negligence.",explain_it:"La dottrina dello strumento pericoloso della Florida: i proprietari di veicoli che affidano volontariamente la loro auto a un'altra persona possono essere responsabili per la negligenza di quel conducente."},
  {cat:"license",en:"What is the Florida law about title transfer when a vehicle owner dies?",it:"Qual e la legge Florida sul trasferimento del titolo quando un proprietario del veicolo muore?",options:[{en:"The vehicle automatically goes to the next of kin",it:"Il veicolo va automaticamente al parente prossimo"},{en:"Title must be transferred through probate or appropriate legal process to the heir",it:"Il titolo deve essere trasferito attraverso la successione o il processo legale appropriato all'erede"},{en:"The vehicle may be driven by any family member without transfer",it:"Il veicolo puo essere guidato da qualsiasi membro della famiglia senza trasferimento"},{en:"The state takes ownership of all vehicles when owner dies",it:"Lo stato prende la proprieta di tutti i veicoli quando il proprietario muore"}],correct:1,explain_en:"When a vehicle owner dies, the title must be legally transferred to heirs through probate, joint ownership, or a designated beneficiary — before the new owner can register or insure the vehicle.",explain_it:"Quando un proprietario di veicolo muore, il titolo deve essere legalmente trasferito agli eredi attraverso la successione, la proprieta congiunta o un beneficiario designato."},
  {cat:"license",en:"What is Florida's law on vehicles with salvage titles?",it:"Qual e la legge Florida sui veicoli con titolo di recupero (salvage)?",options:[{en:"Salvage title vehicles may be driven normally",it:"I veicoli con titolo salvage possono essere guidati normalmente"},{en:"A salvage title vehicle must pass a Florida-licensed salvage inspection before it can be retitled as 'rebuilt' and registered",it:"Un veicolo con titolo salvage deve superare un'ispezione di recupero con licenza Florida prima di poter essere ritolato come 'ricostruito' e registrato"},{en:"Salvage vehicles cannot be registered in Florida",it:"I veicoli salvage non possono essere registrati in Florida"},{en:"Any body shop can certify a salvage vehicle",it:"Qualsiasi carrozzeria puo certificare un veicolo salvage"}],correct:1,explain_en:"A salvage title vehicle (significantly damaged) must pass a Florida DMV inspection and be retitled as 'Rebuilt/Reconstructed' before it can legally be registered and driven.",explain_it:"Un veicolo con titolo salvage (significativamente danneggiato) deve superare un'ispezione DMV Florida ed essere ritolato come 'Ricostruito' prima di poter essere legalmente registrato e guidato."},
  {cat:"license",en:"What is required when selling a vehicle in Florida?",it:"Cosa e richiesto quando si vende un veicolo in Florida?",options:[{en:"Only hand over the keys",it:"Solo consegnare le chiavi"},{en:"Transfer the title to the buyer, remove your license plates, and notify FLHSMV of the sale",it:"Trasferire il titolo all'acquirente, rimuovere le targhe e notificare il FLHSMV della vendita"},{en:"The buyer is responsible for all paperwork",it:"L'acquirente e responsabile di tutta la documentazione"},{en:"License plates transfer automatically with the vehicle",it:"Le targhe si trasferiscono automaticamente con il veicolo"}],correct:1,explain_en:"When selling: sign and transfer the title, remove your plates (plates stay with the owner — not the car in Florida), and notify FLHSMV within 30 days to release liability.",explain_it:"Quando si vende: firma e trasferisci il titolo, rimuovi le targhe (le targhe rimangono con il proprietario — non con l'auto in Florida) e notifica il FLHSMV entro 30 giorni per liberare la responsabilita."},
  {cat:"license",en:"What is the Florida law about using a driver's license from another country?",it:"Qual e la legge Florida sull'uso di una patente di guida di un altro paese?",options:[{en:"Foreign licenses are never valid in Florida",it:"Le patenti straniere non sono mai valide in Florida"},{en:"Valid foreign licenses allow temporary driving; after becoming a Florida resident you must get a Florida license within a set timeframe",it:"Le patenti straniere valide consentono la guida temporanea; dopo essere diventato residente Florida devi ottenere una patente Florida entro un determinato periodo"},{en:"Foreign licenses are accepted permanently without conversion",it:"Le patenti straniere sono accettate permanentemente senza conversione"},{en:"A foreign license must be translated to English before use",it:"Una patente straniera deve essere tradotta in inglese prima dell'uso"}],correct:1,explain_en:"Valid foreign licenses allow temporary operation of vehicles in Florida. Once you become a Florida resident, you must obtain a Florida driver's license.",explain_it:"Le patenti straniere valide consentono la guida temporanea di veicoli in Florida. Una volta diventato residente Florida, devi ottenere una patente Florida."},
  {cat:"license",en:"What is the Florida law about license plate display on vehicles?",it:"Qual e la legge Florida sull'esposizione delle targhe sui veicoli?",options:[{en:"Only a rear plate is required in Florida",it:"Solo la targa posteriore e richiesta in Florida"},{en:"One license plate displayed on the rear of the vehicle — must be legible, lit at night, and unobstructed",it:"Una targa esposta sul retro del veicolo — deve essere leggibile, illuminata di notte e non ostruita"},{en:"Both front and rear plates are required",it:"Sono richieste sia le targhe anteriori che posteriori"},{en:"Plates may be covered with a tinted cover for privacy",it:"Le targhe possono essere coperte con un copri-targa tinto per la privacy"}],correct:1,explain_en:"Florida requires one license plate on the rear, clearly visible, properly illuminated at night, and not obscured by covers, dirt, or decorative frames that impair readability.",explain_it:"La Florida richiede una targa sul retro, chiaramente visibile, opportunamente illuminata di notte e non oscurata da coperture, sporcizia o cornici decorative che compromettono la leggibilita."},
  {cat:"license",en:"What is required for a non-resident of Florida to drive legally in the state?",it:"Cosa e richiesto a un non-residente della Florida per guidare legalmente nello stato?",options:[{en:"Must obtain a Florida license immediately upon entry",it:"Deve ottenere immediatamente una patente Florida all'ingresso"},{en:"A valid driver's license from their home state or country — as long as they have not established Florida residency",it:"Una patente valida del loro stato o paese d'origine — finche non hanno stabilito la residenza Florida"},{en:"Must carry an international driving permit at all times",it:"Deve portare sempre un permesso di guida internazionale"},{en:"Non-residents may not drive in Florida without a Florida license",it:"I non-residenti non possono guidare in Florida senza una patente Florida"}],correct:1,explain_en:"Non-residents with a valid license from their home state or country may drive in Florida without obtaining a Florida license — as long as they do not establish residency.",explain_it:"I non-residenti con una patente valida del loro stato o paese d'origine possono guidare in Florida senza ottenere una patente Florida — finche non stabiliscono la residenza."},
  {cat:"license",en:"What is Florida's law on vehicle registration renewal?",it:"Qual e la legge Florida sul rinnovo della registrazione del veicolo?",options:[{en:"Annual renewal only at a FLHSMV office",it:"Rinnovo annuale solo in un ufficio FLHSMV"},{en:"Vehicles must be registered annually or biennially — renewal notices sent to registered owner; late renewal incurs penalties",it:"I veicoli devono essere registrati annualmente o biennalmente — avvisi di rinnovo inviati al proprietario registrato; il rinnovo tardivo comporta sanzioni"},{en:"Registration never expires in Florida",it:"La registrazione non scade mai in Florida"},{en:"Only commercial vehicles require annual renewal",it:"Solo i veicoli commerciali richiedono il rinnovo annuale"}],correct:1,explain_en:"Florida vehicle registrations must be renewed annually or biennially. Late renewals incur a $25 delinquent fee. Driving with expired registration is a non-criminal traffic infraction.",explain_it:"Le registrazioni dei veicoli Florida devono essere rinnovate annualmente o biennialmente. I rinnovi tardivi comportano una mora di $25. Guidare con registrazione scaduta e una violazione non penale."},
  {cat:"license",en:"What is a 'certificate of title' for a vehicle in Florida?",it:"Cos'e un 'certificato di titolo' per un veicolo in Florida?",options:[{en:"The vehicle's owner's manual",it:"Il manuale del proprietario del veicolo"},{en:"The legal document proving ownership of the vehicle",it:"Il documento legale che prova la proprieta del veicolo"},{en:"The vehicle registration certificate",it:"Il certificato di registrazione del veicolo"},{en:"A copy of the bill of sale",it:"Una copia della ricevuta di vendita"}],correct:1,explain_en:"A certificate of title is the legal document proving vehicle ownership. It must be transferred when a vehicle is sold and is required for registration.",explain_it:"Un certificato di titolo e il documento legale che prova la proprieta del veicolo. Deve essere trasferito quando un veicolo viene venduto ed e richiesto per la registrazione."},
  {cat:"license",en:"What is the minimum age for a Florida learner's license (learner's permit)?",it:"Qual e l'eta minima per il permesso per principianti Florida?",options:[{en:"14 years old",it:"14 anni"},{en:"15 years old",it:"15 anni"},{en:"16 years old",it:"16 anni"},{en:"17 years old",it:"17 anni"}],correct:1,explain_en:"Florida's minimum age for a learner's license (learner's permit) is 15 years old.",explain_it:"L'eta minima per il permesso per principianti Florida e 15 anni."},
  {cat:"license",en:"What must be presented at a Florida DMV for a first-time driver's license application?",it:"Cosa deve essere presentato al DMV Florida per una domanda di patente per la prima volta?",options:[{en:"Only a birth certificate",it:"Solo un certificato di nascita"},{en:"Primary ID, proof of Social Security, two proofs of FL residency, and completed TLSAE/DETS",it:"Documento d'identita primario, prova del numero di previdenza sociale, due prove di residenza FL e TLSAE/DETS completato"},{en:"Passport only",it:"Solo passaporto"},{en:"School enrollment record",it:"Documento di iscrizione scolastica"}],correct:1,explain_en:"First-time FL license: primary ID (birth certificate, passport, etc.), SSN proof, two FL residency proofs, and TLSAE (adults 18+) or DETS (teens under 18) certificate.",explain_it:"Prima patente FL: documento primario (certificato di nascita, passaporto, ecc.), prova SSN, due prove di residenza FL e certificato TLSAE (adulti 18+) o DETS (adolescenti under 18)."},

  // ══ SESSION 4 — FINAL TOP-UP ══════════════════════════════════
  // Signs +1, Laws +11, Safety +6, Alcohol +19, License +18 = 55
  {cat:"signs",en:"What shape is a 'Yield' sign in the United States?",it:"Che forma ha un segnale 'Yield' negli Stati Uniti?",options:[{en:"An octagon",it:"Un ottagono"},{en:"An inverted red triangle with white center",it:"Un triangolo rosso rovesciato con centro bianco"},{en:"A yellow diamond",it:"Un rombo giallo"},{en:"A white rectangle with red letters",it:"Un rettangolo bianco con lettere rosse"}],correct:1,explain_en:"The Yield sign is a downward-pointing triangle — red border with white center. It means slow down and be prepared to stop if necessary for conflicting traffic.",explain_it:"Il segnale Yield e un triangolo che punta verso il basso — bordo rosso con centro bianco. Significa rallentare ed essere pronti a fermarsi se necessario per il traffico in conflitto."},

  {cat:"laws",en:"What is Florida's 'Kimberlyn's Law' regarding school bus stop arms?",it:"Cos'e la 'Legge di Kimberlyn' della Florida riguardo ai bracci di stop degli scuolabus?",options:[{en:"Increased fines to $400 for illegally passing a stopped school bus",it:"Aumentato le multe a $400 per il passaggio illegale di uno scuolabus fermo"},{en:"Requires all school buses to have external cameras documenting stop arm violations",it:"Richiede a tutti gli scuolabus di avere telecamere esterne che documentino le violazioni del braccio di stop"},{en:"Mandates school bus escort vehicles on all routes",it:"Impone veicoli di scorta per gli scuolabus su tutti i percorsi"},{en:"Requires students to wait 10 feet from the road",it:"Richiede agli studenti di aspettare a 10 piedi dalla strada"}],correct:1,explain_en:"Florida law requires school buses to be equipped with external cameras to document stop-arm violations — helping identify and fine drivers who illegally pass stopped buses.",explain_it:"La legge Florida richiede agli scuolabus di essere dotati di telecamere esterne per documentare le violazioni del braccio di stop — aiutando a identificare e multare i conducenti che passano illegalmente."},
  {cat:"laws",en:"What is the fine range for illegally passing a stopped school bus in Florida?",it:"Qual e la gamma delle multe per il passaggio illegale di uno scuolabus fermo in Florida?",options:[{en:"$50-$100",it:"$50-$100"},{en:"$100-$250",it:"$100-$250"},{en:"$200-$400",it:"$200-$400"},{en:"$500 flat",it:"$500 fisso"}],correct:2,explain_en:"Illegally passing a stopped school bus in Florida carries a fine of $200-$400 for a first offense. Subsequent offenses carry higher fines and possible imprisonment.",explain_it:"Il passaggio illegale di uno scuolabus fermo in Florida comporta una multa di $200-$400 per la prima offesa. Le offese successive comportano multe piu alte e possibile reclusione."},
  {cat:"laws",en:"In Florida, within how many feet of a driveway or alley exit must you yield to pedestrians?",it:"In Florida, entro quanti piedi dall'uscita di un vialetto o vicolo devi cedere la precedenza ai pedoni?",options:[{en:"5 feet",it:"5 piedi"},{en:"10 feet",it:"10 piedi"},{en:"When exiting any driveway or alley you must yield to all sidewalk pedestrians before crossing the sidewalk",it:"Uscendo da qualsiasi vialetto o vicolo devi cedere a tutti i pedoni sul marciapiede prima di attraversarlo"},{en:"Pedestrians must yield to vehicles exiting driveways",it:"I pedoni devono cedere ai veicoli che escono dai vialetti"}],correct:2,explain_en:"When exiting a driveway, alley, or building, you must yield to all pedestrians on the sidewalk before crossing it, and then yield to all traffic before entering the road.",explain_it:"Uscendo da un vialetto, vicolo o edificio, devi cedere a tutti i pedoni sul marciapiede prima di attraversarlo, poi cedere a tutto il traffico prima di entrare in strada."},
  {cat:"laws",en:"What is the Florida law about riding in the bed of a pickup truck?",it:"Qual e la legge Florida sul viaggiare nel cassone di un pick-up?",options:[{en:"Always legal for adults",it:"Sempre legale per gli adulti"},{en:"Illegal for anyone under 18 to ride in an open truck bed on a public road",it:"Illegale per chiunque abbia meno di 18 anni viaggiare nel cassone aperto di un camion su una strada pubblica"},{en:"Legal only on roads under 35 mph",it:"Legale solo su strade sotto i 35 mph"},{en:"Florida has no law on truck bed passengers",it:"La Florida non ha leggi sui passeggeri nel cassone"}],correct:1,explain_en:"Florida prohibits passengers under 18 from riding in the open bed of a pickup truck on public roads. Adults (18+) may legally ride in open truck beds.",explain_it:"La Florida vieta ai passeggeri under 18 di viaggiare nel cassone aperto di un pick-up su strade pubbliche. Gli adulti (18+) possono legalmente viaggiare nei cassoni aperti."},
  {cat:"laws",en:"In Florida, what is the law about passing on the right shoulder?",it:"In Florida, qual e la legge sul sorpasso sulla banchina destra?",options:[{en:"Legal if traffic is heavy",it:"Legale se il traffico e intenso"},{en:"Illegal — you may not use the shoulder to pass a vehicle",it:"Illegale — non puoi usare la banchina per sorpassare un veicolo"},{en:"Legal only at speeds under 30 mph",it:"Legale solo a velocita inferiori a 30 mph"},{en:"Legal on highways with a paved shoulder",it:"Legale sulle autostrade con banchina asfaltata"}],correct:1,explain_en:"Passing on the right shoulder (paved or unpaved) is illegal in Florida. The shoulder is for emergency stops — not for passing stopped or slow traffic.",explain_it:"Il sorpasso sulla banchina destra (asfaltata o non) e illegale in Florida. La banchina e per le soste di emergenza — non per sorpassare il traffico fermo o lento."},
  {cat:"laws",en:"What is the rule in Florida about speed when approaching a hill or curve?",it:"Qual e la regola in Florida sulla velocita quando ci si avvicina a una collina o una curva?",options:[{en:"Maintain posted speed — the limit covers all conditions",it:"Mantenere la velocita segnalata — il limite copre tutte le condizioni"},{en:"Reduce speed to a safe level where you can stop within your visible road ahead",it:"Ridurre la velocita a un livello sicuro dove puoi fermarti entro la strada visibile davanti"},{en:"Increase speed to cross the hill or curve quickly",it:"Aumentare la velocita per attraversare la collina o la curva velocemente"},{en:"Only slow down if there is a speed advisory sign",it:"Rallentare solo se c'e un segnale di velocita consigliata"}],correct:1,explain_en:"You must reduce speed when approaching hills or curves so that you can stop within the visible ahead distance. 'Basic Speed Law' applies regardless of posted limits.",explain_it:"Devi ridurre la velocita avvicinandoti a colline o curve in modo da poter fermarti entro la distanza visibile. La 'Legge della Velocita di Base' si applica indipendentemente dai limiti segnalati."},
  {cat:"laws",en:"What is Florida's minimum speed law?",it:"Qual e la legge Florida sulla velocita minima?",options:[{en:"No minimum speed laws exist",it:"Non esistono leggi sulla velocita minima"},{en:"You must drive fast enough not to impede or block normal traffic — driving unreasonably slowly can be a violation",it:"Devi guidare abbastanza veloce da non ostacolare o bloccare il traffico normale — guidare irragionevolmente lentamente puo essere una violazione"},{en:"Minimum speed of 40 mph on all highways",it:"Velocita minima di 40 mph su tutte le autostrade"},{en:"Minimum speed only applies on interstate highways",it:"La velocita minima si applica solo sulle autostrade interstatali"}],correct:1,explain_en:"Florida law prohibits driving so slowly as to impede normal traffic flow. Unreasonably slow driving (especially on highways) can be cited as a moving violation.",explain_it:"La legge Florida vieta di guidare cosi lentamente da ostacolare il flusso normale del traffico. La guida irragionevolmente lenta (specialmente in autostrada) puo essere citata come violazione."},
  {cat:"laws",en:"What is required in Florida when two lanes merge into one?",it:"Cosa e richiesto in Florida quando due corsie si uniscono in una?",options:[{en:"Larger vehicles have priority",it:"I veicoli piu grandi hanno la priorita"},{en:"The driver in the lane that is ending must yield to vehicles in the continuing lane",it:"Il conducente nella corsia che termina deve cedere ai veicoli nella corsia che continua"},{en:"First-come first-served regardless of lane position",it:"Prima arrivato, primo servito indipendentemente dalla posizione in corsia"},{en:"Both lanes alternate (zipper merge is required)",it:"Entrambe le corsie si alternano (il merge a cerniera e richiesto)"}],correct:1,explain_en:"When a lane ends in a merge, the driver in the ending lane must yield to vehicles in the continuing lane unless traffic is at a standstill — then a zipper merge may be appropriate.",explain_it:"Quando una corsia termina in una confluenza, il conducente nella corsia che termina deve cedere ai veicoli nella corsia che continua, a meno che il traffico sia fermo."},
  {cat:"laws",en:"What is the Florida law about lighting requirements for bicycles at night?",it:"Qual e la legge Florida sui requisiti di illuminazione per le biciclette di notte?",options:[{en:"No lighting required for bicycles",it:"Nessuna illuminazione richiesta per le biciclette"},{en:"A white front light visible from 500 feet and a red rear reflector or light visible from 600 feet",it:"Una luce anteriore bianca visibile da 500 piedi e un riflettore o luce posteriore rossa visibile da 600 piedi"},{en:"Only a rear reflector is required",it:"E richiesto solo un riflettore posteriore"},{en:"Reflective clothing is sufficient instead of lights",it:"L'abbigliamento riflettente e sufficiente invece delle luci"}],correct:1,explain_en:"Florida law: bicycles used at night must have a white front light (visible 500 ft) and a red rear reflector or light (visible 600 ft). Additional reflectors on pedals and sides are also required.",explain_it:"Legge Florida: le biciclette usate di notte devono avere una luce anteriore bianca (visibile 500 piedi) e un riflettore o luce posteriore rossa (visibile 600 piedi)."},
  {cat:"laws",en:"In Florida, who has the right-of-way when a vehicle and a pedestrian are at an unmarked crosswalk?",it:"In Florida, chi ha la precedenza quando un veicolo e un pedone sono a un passaggio pedonale non segnalato?",options:[{en:"The vehicle — unmarked crosswalks are not official",it:"Il veicolo — i passaggi pedonali non segnalati non sono ufficiali"},{en:"The pedestrian — drivers must yield to pedestrians at all crosswalks, marked or unmarked",it:"Il pedone — i conducenti devono cedere ai pedoni a tutti i passaggi pedonali, segnalati o meno"},{en:"Whoever arrives first",it:"Chi arriva per primo"},{en:"Only applies at traffic lights",it:"Si applica solo ai semafori"}],correct:1,explain_en:"Florida requires drivers to yield to pedestrians at ALL crosswalks — marked (painted) or unmarked (the legal extension of a sidewalk at intersections).",explain_it:"La Florida richiede ai conducenti di cedere ai pedoni a TUTTI i passaggi pedonali — segnalati (verniciati) o non segnalati (l'estensione legale di un marciapiede agli incroci)."},
  {cat:"laws",en:"In Florida, what must a driver do when a funeral procession is passing?",it:"In Florida, cosa deve fare un conducente quando passa un corteo funebre?",options:[{en:"Proceed normally — they have no special rights",it:"Procedere normalmente — non hanno diritti speciali"},{en:"Yield the right-of-way to all vehicles in the procession — do not cut through it",it:"Cedere la precedenza a tutti i veicoli nel corteo — non tagliarlo"},{en:"Stop completely until the entire procession has passed",it:"Fermarsi completamente finche l'intero corteo e passato"},{en:"Only yield if the lead vehicle has its lights on",it:"Cedere solo se il veicolo di testa ha le luci accese"}],correct:1,explain_en:"Florida law grants right-of-way to funeral processions. Do not cut through a procession — all vehicles in a funeral cortege may proceed together through intersections.",explain_it:"La legge Florida concede la precedenza ai cortei funebri. Non tagliare un corteo — tutti i veicoli in un corteo funebre possono procedere insieme attraverso gli incroci."},

  {cat:"safety",en:"Why should you avoid parking near a railroad crossing?",it:"Perche dovresti evitare di parcheggiare vicino a un passaggio a livello?",options:[{en:"It creates a speed hazard",it:"Crea un pericolo di velocita"},{en:"Parking within 50 feet of a railroad crossing is prohibited — vehicles may be hit by a train or block sight distances",it:"Il parcheggio entro 50 piedi da un passaggio a livello e vietato — i veicoli possono essere colpiti da un treno o bloccare le distanze di visibilita"},{en:"Only trucks must avoid parking near crossings",it:"Solo i camion devono evitare di parcheggiare vicino agli attraversamenti"},{en:"No restriction — railroad crossings are public areas",it:"Nessuna restrizione — i passaggi a livello sono aree pubbliche"}],correct:1,explain_en:"Florida prohibits parking within 50 feet of a railroad crossing. Parked vehicles can obstruct sight lines for other drivers and may be struck by trains.",explain_it:"La Florida vieta il parcheggio entro 50 piedi da un passaggio a livello. I veicoli parcheggiati possono ostruire le linee di visibilita per altri conducenti e possono essere colpiti dai treni."},
  {cat:"safety",en:"What should you do if a traffic light is completely dark (no signal at all)?",it:"Cosa dovresti fare se un semaforo e completamente buio (nessun segnale)?",options:[{en:"Proceed normally — assume it is green",it:"Procedere normalmente — supponi che sia verde"},{en:"Treat it as a four-way stop — come to a complete stop and yield appropriately",it:"Trattarlo come un incrocio a quattro vie — fermarsi completamente e cedere appropriatamente"},{en:"Only stop if other vehicles are present",it:"Fermarsi solo se altri veicoli sono presenti"},{en:"Turn around and find another route",it:"Girare indietro e trovare un altro percorso"}],correct:1,explain_en:"A dark (non-functioning) traffic light should be treated as a four-way stop: stop completely, yield in the appropriate order, then proceed when safe.",explain_it:"Un semaforo buio (non funzionante) deve essere trattato come un incrocio a quattro vie: fermarsi completamente, cedere nell'ordine appropriato, poi procedere quando sicuro."},
  {cat:"safety",en:"What is the safest action when a wild animal (deer, alligator) is on the road ahead?",it:"Qual e l'azione piu sicura quando un animale selvatico (cervo, alligatore) e sulla strada davanti?",options:[{en:"Swerve sharply to miss the animal",it:"Sterzare bruscamente per evitare l'animale"},{en:"Brake firmly and stay in your lane — swerving may cause a worse crash",it:"Frenare con fermezza e rimanere nella corsia — sterzare puo causare un incidente peggiore"},{en:"Speed up to scare the animal away",it:"Accelerare per spaventare l'animale"},{en:"Flash headlights repeatedly",it:"Lampeggiare i fari ripetutamente"}],correct:1,explain_en:"Brake firmly and stay in your lane. Swerving to avoid an animal often causes more serious crashes — you may cross into oncoming traffic or roll over.",explain_it:"Frena con fermezza e rimani nella corsia. Sterzare per evitare un animale spesso causa incidenti piu gravi — potresti finire nel traffico in arrivo o ribaltarti."},
  {cat:"safety",en:"What is the purpose of 'rumble strips' on the side of a highway?",it:"Qual e lo scopo delle 'strisce vibranti' sul lato di un'autostrada?",options:[{en:"A decorative pavement feature",it:"Un elemento decorativo del manto stradale"},{en:"To alert drowsy or distracted drivers that they are drifting off the road by creating noise and vibration",it:"Per allertare i conducenti assonnati o distratti che stanno deviando dalla strada creando rumore e vibrazione"},{en:"To slow down vehicles entering a construction zone",it:"Per rallentare i veicoli che entrano in una zona di costruzione"},{en:"To mark the edge of the lane for night driving",it:"Per segnare il bordo della corsia per la guida notturna"}],correct:1,explain_en:"Rumble strips are grooved patterns on road edges or center lines that create noise and vibration when driven over — alerting drowsy or drifting drivers before they leave the roadway.",explain_it:"Le strisce vibranti sono pattern scanalati sul bordo della strada o sulle linee centrali che creano rumore e vibrazione quando si guida sopra — allertando i conducenti assonnati prima che lascino la carreggiata."},
  {cat:"safety",en:"What does Florida law require drivers to do when approaching a pedestrian in a crosswalk?",it:"Cosa richiede la legge Florida ai conducenti quando si avvicinano a un pedone in un passaggio pedonale?",options:[{en:"Slow down but need not stop if the pedestrian is on the other half of the road",it:"Rallentare ma non necessariamente fermarsi se il pedone e nell'altra meta della strada"},{en:"Stop and remain stopped until the pedestrian has completely crossed the lane the vehicle is in",it:"Fermarsi e rimanere fermo finche il pedone ha completamente attraversato la corsia in cui si trova il veicolo"},{en:"Sound the horn to alert the pedestrian to hurry",it:"Suonare il clacson per avvisare il pedone di affrettarsi"},{en:"Pass behind the pedestrian if possible",it:"Passare dietro al pedone se possibile"}],correct:1,explain_en:"Florida requires stopping for pedestrians in crosswalks. You must remain stopped until they have fully cleared the lane you are in (and adjacent lanes in some cases).",explain_it:"La Florida richiede di fermarsi per i pedoni nei passaggi pedonali. Devi rimanere fermo finche hanno completamente attraversato la corsia in cui ti trovi."},
  {cat:"safety",en:"What is the greatest risk when driving through a flooded underpass?",it:"Qual e il rischio maggiore quando si guida attraverso un sottopassaggio allagato?",options:[{en:"Hydroplaning on shallow water",it:"Acquaplaning sull'acqua poco profonda"},{en:"The water may be much deeper than it appears — even a few feet of water can sweep a car away",it:"L'acqua puo essere molto piu profonda di quanto appaia — anche pochi piedi d'acqua possono travolgere un'auto"},{en:"Electrical hazards from submerged cables",it:"Pericoli elettrici dai cavi sommersi"},{en:"The engine will flood immediately in any water",it:"Il motore si allagherebbe immediatamente in qualsiasi acqua"}],correct:1,explain_en:"Flooded underpasses are especially dangerous — depth is impossible to judge visually. Water 2 feet deep can float most cars. Turn Around, Don't Drown.",explain_it:"I sottopassaggi allagati sono particolarmente pericolosi — la profondita e impossibile da giudicare visivamente. L'acqua profonda 60 cm puo far galleggiare la maggior parte delle auto."},

  {cat:"alcohol",en:"What does alcohol do to a driver's peripheral (side) vision?",it:"Cosa fa l'alcol alla visione periferica (laterale) di un conducente?",options:[{en:"Enhances peripheral vision",it:"Migliora la visione periferica"},{en:"Reduces peripheral vision — creating 'tunnel vision' effect",it:"Riduce la visione periferica — creando un effetto di 'visione a tunnel'"},{en:"Has no effect on peripheral vision",it:"Non ha effetti sulla visione periferica"},{en:"Only affects peripheral vision at BAC above 0.15%",it:"Influisce sulla visione periferica solo con BAC superiore a 0,15%"}],correct:1,explain_en:"Alcohol reduces peripheral (side) vision, creating a tunnel-vision effect. Drivers may fail to see vehicles, pedestrians, or hazards in their side view.",explain_it:"L'alcol riduce la visione periferica (laterale), creando un effetto di visione a tunnel. I conducenti possono non vedere veicoli, pedoni o pericoli nella loro visione laterale."},
  {cat:"alcohol",en:"What effect does alcohol have on a driver's coordination?",it:"Che effetto ha l'alcol sulla coordinazione di un conducente?",options:[{en:"Improves fine motor coordination",it:"Migliora la coordinazione motoria fine"},{en:"Impairs the fine motor skills needed for steering, braking, and accelerating smoothly",it:"Compromette le abilita motorie fini necessarie per sterzare, frenare e accelerare fluidamente"},{en:"Only affects gross motor skills, not driving tasks",it:"Influisce solo sulle abilita motorie grossolane, non sui compiti di guida"},{en:"Coordination is only impaired above 0.10% BAC",it:"La coordinazione e compromessa solo sopra 0,10% BAC"}],correct:1,explain_en:"Alcohol impairs fine motor skills — the precise muscle control needed for smooth steering inputs, brake modulation, and accelerator control.",explain_it:"L'alcol compromette le abilita motorie fini — il controllo muscolare preciso necessario per gli input di sterzo fluidi, la modulazione del freno e il controllo dell'acceleratore."},
  {cat:"alcohol",en:"What is the Florida law about alcohol sales near schools?",it:"Qual e la legge Florida sulla vendita di alcol vicino alle scuole?",options:[{en:"No restriction on alcohol sales near schools",it:"Nessuna restrizione sulla vendita di alcol vicino alle scuole"},{en:"Alcohol sales within 1,000 feet of a school are generally prohibited without a special license exemption",it:"La vendita di alcol entro 1.000 piedi da una scuola e generalmente vietata senza un'esenzione speciale della licenza"},{en:"A 500-foot buffer is required",it:"E richiesto un buffer di 500 piedi"},{en:"Only bars — liquor stores may operate near schools",it:"Solo i bar — le liquorerie possono operare vicino alle scuole"}],correct:1,explain_en:"Florida Beverage Law generally prohibits new alcohol licenses within 1,000 feet of a school or house of worship — with exceptions for existing establishments and local ordinances.",explain_it:"La legge sulle bevande Florida generalmente vieta nuove licenze alcoliche entro 1.000 piedi da una scuola o luogo di culto — con eccezioni per strutture esistenti e ordinanze locali."},
  {cat:"alcohol",en:"What does research show about the effectiveness of 'designated driver' programs?",it:"Cosa mostrano le ricerche sull'efficacia dei programmi di 'conducente designato'?",options:[{en:"They are ineffective because people still drive after drinking",it:"Sono inefficaci perche le persone guidano ancora dopo aver bevuto"},{en:"They significantly reduce DUI rates when properly planned — but the driver must be truly sober, not just 'least drunk'",it:"Riducono significativamente i tassi DUI quando pianificati correttamente — ma il conducente deve essere veramente sobrio, non solo 'meno ubriaco'"},{en:"Effective only for groups of 4+ people",it:"Efficaci solo per gruppi di 4+ persone"},{en:"Only effective in urban areas",it:"Efficaci solo nelle aree urbane"}],correct:1,explain_en:"Designated driver programs work when the driver is completely sober. The concept fails when the 'designated driver' also drinks — a common but dangerous practice.",explain_it:"I programmi di conducente designato funzionano quando il conducente e completamente sobrio. Il concetto fallisce quando il 'conducente designato' beve anche lui — una pratica comune ma pericolosa."},
  {cat:"alcohol",en:"What is the effect of one standard drink on a 120 lb woman's BAC versus a 200 lb man?",it:"Qual e l'effetto di un drink standard sul BAC di una donna di 54 kg rispetto a un uomo di 90 kg?",options:[{en:"Identical — weight does not affect BAC",it:"Identico — il peso non influisce sul BAC"},{en:"The woman's BAC will be significantly higher from the same drink due to lower body water content",it:"Il BAC della donna sara significativamente piu alto dallo stesso drink a causa del minor contenuto d'acqua corporea"},{en:"The man's BAC will be higher due to higher muscle content",it:"Il BAC dell'uomo sara piu alto a causa del maggior contenuto muscolare"},{en:"Only age affects the difference, not weight",it:"Solo l'eta influisce sulla differenza, non il peso"}],correct:1,explain_en:"Body weight and water content affect BAC: a 120 lb woman reaches significantly higher BAC from one drink than a 200 lb man. Never compare your tolerance to others.",explain_it:"Il peso corporeo e il contenuto d'acqua influenzano il BAC: una donna di 54 kg raggiunge un BAC significativamente piu alto da un drink rispetto a un uomo di 90 kg."},
  {cat:"alcohol",en:"What is the Florida law about alcohol and someone who 'just feels fine to drive'?",it:"Qual e la legge Florida riguardo all'alcol e a qualcuno che 'si sente bene per guidare'?",options:[{en:"Feeling fine is a legal defense to DUI",it:"Sentirsi bene e una difesa legale al DUI"},{en:"DUI per se: if BAC is 0.08%+ you are legally impaired regardless of how you feel",it:"DUI per se: se il BAC e 0,08%+ sei legalmente compromesso indipendentemente da come ti senti"},{en:"Officers must observe visible impairment before making a DUI arrest",it:"Gli agenti devono osservare una compromissione visibile prima di effettuare un arresto DUI"},{en:"A BAC test is required before any DUI arrest can be made",it:"Un test BAC e richiesto prima che possa essere effettuato qualsiasi arresto DUI"}],correct:1,explain_en:"DUI per se means a BAC of 0.08%+ is legally conclusive proof of impairment — regardless of whether the driver feels fine, looks sober, or drives without incident.",explain_it:"DUI per se significa che un BAC di 0,08%+ e prova legalmente conclusiva di compromissione — indipendentemente dal fatto che il conducente si senta bene, sembri sobrio o guidi senza incidenti."},
  {cat:"alcohol",en:"How does food affect alcohol absorption?",it:"Come influisce il cibo sull'assorbimento dell'alcol?",options:[{en:"Food has no effect on alcohol absorption",it:"Il cibo non ha effetti sull'assorbimento dell'alcol"},{en:"Food in the stomach slows alcohol absorption, delaying peak BAC — but total alcohol consumed is the same",it:"Il cibo nello stomaco rallenta l'assorbimento dell'alcol, ritardando il BAC di picco — ma l'alcol totale consumato e lo stesso"},{en:"Food permanently prevents alcohol from entering the bloodstream",it:"Il cibo impedisce permanentemente all'alcol di entrare nel flusso sanguigno"},{en:"High-fat foods neutralize alcohol",it:"Gli alimenti ad alto contenuto di grassi neutralizzano l'alcol"}],correct:1,explain_en:"Eating before/during drinking slows the rate of alcohol absorption — delaying how fast BAC rises. However, the same total alcohol will still be absorbed eventually.",explain_it:"Mangiare prima/durante il bere rallenta la velocita di assorbimento dell'alcol — ritardando la velocita di aumento del BAC. Tuttavia, lo stesso alcol totale verra comunque assorbito eventualmente."},
  {cat:"alcohol",en:"What is the relationship between BAC and crash risk?",it:"Qual e la relazione tra BAC e rischio di incidente?",options:[{en:"Crash risk is only significantly elevated above 0.15% BAC",it:"Il rischio di incidente e significativamente elevato solo sopra 0,15% BAC"},{en:"Crash risk increases exponentially with BAC — doubling roughly every 0.02% increase",it:"Il rischio di incidente aumenta esponenzialmente con il BAC — raddoppiando approssimativamente ogni aumento di 0,02%"},{en:"Crash risk is linear — the same increase regardless of BAC level",it:"Il rischio di incidente e lineare — lo stesso aumento indipendentemente dal livello di BAC"},{en:"Only impaired drivers with prior DUI convictions have elevated crash risk",it:"Solo i conducenti compromessi con precedenti condanne DUI hanno un rischio di incidente elevato"}],correct:1,explain_en:"Crash risk is exponential: at 0.08% it is approximately 5x normal; at 0.15% it is 25x or more. Even at 0.05% crash risk is already meaningfully elevated.",explain_it:"Il rischio di incidente e esponenziale: a 0,08% e circa 5 volte la norma; a 0,15% e 25 volte o piu. Anche a 0,05% il rischio di incidente e gia significativamente elevato."},
  {cat:"alcohol",en:"What is the effect of alcohol on a driver's tracking ability?",it:"Qual e l'effetto dell'alcol sulla capacita di tracciamento di un conducente?",options:[{en:"Improves smooth tracking at low BAC",it:"Migliora il tracciamento fluido a basso BAC"},{en:"Impairs the ability to maintain lane position and track curves — even at low BAC levels",it:"Compromette la capacita di mantenere la posizione in corsia e seguire le curve — anche a bassi livelli di BAC"},{en:"Only affects tracking at BAC above 0.10%",it:"Influisce sul tracciamento solo con BAC superiore a 0,10%"},{en:"No effect on straight-line tracking",it:"Nessun effetto sul tracciamento in linea retta"}],correct:1,explain_en:"Alcohol impairs tracking — the ability to follow curves and maintain lane position. This is detectable even at 0.02% BAC, well below the legal limit.",explain_it:"L'alcol compromette il tracciamento — la capacita di seguire le curve e mantenere la posizione in corsia. Questo e rilevabile anche a 0,02% BAC, ben al di sotto del limite legale."},
  {cat:"alcohol",en:"What is the effect of alcohol on a driver's information processing?",it:"Qual e l'effetto dell'alcol sull'elaborazione delle informazioni di un conducente?",options:[{en:"Speeds up decision making",it:"Accelera il processo decisionale"},{en:"Slows the ability to process multiple inputs simultaneously — mirrors, signs, traffic, pedestrians",it:"Rallenta la capacita di elaborare piu input simultaneamente — specchi, segnali, traffico, pedoni"},{en:"Only affects verbal information processing",it:"Influisce solo sull'elaborazione delle informazioni verbali"},{en:"Processing is not affected below 0.08%",it:"L'elaborazione non e influenzata sotto 0,08%"}],correct:1,explain_en:"Alcohol reduces information processing speed and capacity — impairing multitasking, situation awareness, and decision-making quality even at low BAC levels.",explain_it:"L'alcol riduce la velocita e la capacita di elaborazione delle informazioni — compromettendo il multitasking, la consapevolezza situazionale e la qualita decisionale anche a bassi livelli di BAC."},
  {cat:"alcohol",en:"What happens to a Florida driver's license if they are convicted of DUI in another state?",it:"Cosa succede alla patente Florida di un conducente se viene condannato per DUI in un altro stato?",options:[{en:"Nothing — out-of-state convictions do not affect Florida licenses",it:"Niente — le condanne in altri stati non influenzano le patenti Florida"},{en:"Florida honors reciprocity — out-of-state DUI convictions are reported to Florida and treated as in-state",it:"La Florida onora la reciprocita — le condanne DUI in altri stati vengono segnalate alla Florida e trattate come in-state"},{en:"Only if the other state notifies Florida",it:"Solo se l'altro stato notifica la Florida"},{en:"Florida may only take action after a second out-of-state DUI",it:"La Florida puo agire solo dopo un secondo DUI fuori stato"}],correct:1,explain_en:"Through the Driver License Compact, most states share DUI conviction information. A DUI conviction in another state will be reported to Florida and may result in Florida suspension.",explain_it:"Attraverso il Driver License Compact, la maggior parte degli stati condivide le informazioni sulle condanne DUI. Una condanna DUI in un altro stato verra segnalata alla Florida e puo comportare la sospensione Florida."},
  {cat:"alcohol",en:"What is Florida's law on hosting a party where minors drink alcohol?",it:"Qual e la legge Florida sull'ospitare una festa dove i minori bevono alcol?",options:[{en:"Legal on private property",it:"Legale su proprieta privata"},{en:"Illegal — adults who knowingly allow minors to drink on their property can face criminal charges",it:"Illegale — gli adulti che permettono consapevolmente ai minori di bere sulla loro proprieta possono affrontare accuse penali"},{en:"Legal if parents are present",it:"Legale se i genitori sono presenti"},{en:"Only illegal if the minors drive afterward",it:"Illegale solo se i minori guidano dopo"}],correct:1,explain_en:"Florida's 'social host liability' law: adults who knowingly allow minors to consume alcohol on their property can face criminal charges, even if they did not directly provide the alcohol.",explain_it:"La legge sulla 'responsabilita dell'host sociale' Florida: gli adulti che permettono consapevolmente ai minori di consumare alcol sulla loro proprieta possono affrontare accuse penali."},
  {cat:"alcohol",en:"What is the relationship between alcohol and fatigue in driving impairment?",it:"Qual e la relazione tra alcol e stanchezza nella compromissione alla guida?",options:[{en:"Fatigue cancels out alcohol impairment",it:"La stanchezza annulla la compromissione da alcol"},{en:"Alcohol and fatigue compound each other — even small amounts of alcohol dramatically worsen the effects of fatigue",it:"Alcol e stanchezza si compoundano — anche piccole quantita di alcol peggiorano drammaticamente gli effetti della stanchezza"},{en:"Only one factor affects driving at a time",it:"Solo un fattore influisce sulla guida alla volta"},{en:"Coffee eliminates both fatigue and alcohol impairment",it:"Il caffe elimina sia la stanchezza che la compromissione da alcol"}],correct:1,explain_en:"Alcohol and fatigue have a synergistic effect — each amplifies the other. Even one drink when tired can impair driving as severely as several drinks when well-rested.",explain_it:"Alcol e stanchezza hanno un effetto sinergico — ognuno amplifica l'altro. Anche un drink quando si e stanchi puo compromettere la guida tanto quanto diversi drink quando si e riposati."},
  {cat:"alcohol",en:"What is Florida's 'Drug Recognition Expert' (DRE) program?",it:"Cos'e il programma Florida 'Drug Recognition Expert' (DRE)?",options:[{en:"A program for treating drug-addicted drivers",it:"Un programma per il trattamento dei conducenti tossicodipendenti"},{en:"Specially trained officers who evaluate drivers suspected of drug (non-alcohol) impairment using a standardized 12-step protocol",it:"Agenti appositamente addestrati che valutano i conducenti sospettati di compromissione da droghe (non alcol) usando un protocollo standardizzato in 12 fasi"},{en:"A drug testing program for commercial drivers only",it:"Un programma di test antidroga solo per i conducenti commerciali"},{en:"A civilian reporting program for suspected drugged drivers",it:"Un programma civile di segnalazione per i conducenti sospettati di essere drogati"}],correct:1,explain_en:"DRE officers are trained to detect impairment from drugs other than alcohol using a 12-step evaluation. Their testimony can support DUI-drug charges even without a breath test.",explain_it:"Gli agenti DRE sono addestrati per rilevare la compromissione da droghe diverse dall'alcol usando una valutazione in 12 fasi. La loro testimonianza puo supportare le accuse DUI-droga anche senza un test del respiro."},
  {cat:"alcohol",en:"At what BAC does most research show driving performance begins to noticeably degrade?",it:"A quale BAC la maggior parte delle ricerche mostra che le prestazioni alla guida iniziano a degradarsi notevolmente?",options:[{en:"0.08% — the legal limit",it:"0,08% — il limite legale"},{en:"0.05% — below the legal limit",it:"0,05% — al di sotto del limite legale"},{en:"0.10% — well above the legal limit",it:"0,10% — ben al di sopra del limite legale"},{en:"0.02% — any measurable amount",it:"0,02% — qualsiasi quantita misurabile"}],correct:1,explain_en:"Research shows measurable driving impairment beginning around 0.05% BAC. The 0.08% legal limit does not mean driving is safe below it — it is just the threshold for per se DUI.",explain_it:"Le ricerche mostrano un deterioramento misurabile della guida a partire da circa 0,05% BAC. Il limite legale di 0,08% non significa che guidare sia sicuro sotto di esso — e solo la soglia per il DUI per se."},
  {cat:"alcohol",en:"What is 'retrograde extrapolation' used for in DUI cases?",it:"Cos'e l'estrapolazione retrogradi usata nei casi DUI?",options:[{en:"Estimating a driver's BAC at the time of driving based on a later BAC test result",it:"Stimare il BAC di un conducente al momento della guida basandosi su un risultato del test BAC successivo"},{en:"A method to reduce DUI charges to reckless driving",it:"Un metodo per ridurre le accuse DUI a guida spericolata"},{en:"A technique for breath test calibration",it:"Una tecnica per la calibrazione del test del respiro"},{en:"Calculating how much alcohol someone consumed",it:"Calcolare quanta alcol ha consumato qualcuno"}],correct:0,explain_en:"Retrograde extrapolation: a forensic technique estimating what a driver's BAC was at the time of driving, based on a BAC test taken later (at arrest or hospital) and known elimination rates.",explain_it:"Estrapolazione retrograda: una tecnica forense che stima quale fosse il BAC del conducente al momento della guida, basandosi su un test BAC preso successivamente e i tassi di eliminazione noti."},
  {cat:"alcohol",en:"What is the role of a 'BAC calculator' app in preventing DUI?",it:"Qual e il ruolo di un'app 'calcolatore BAC' nella prevenzione del DUI?",options:[{en:"These apps are fully reliable for determining whether you can drive legally",it:"Queste app sono completamente affidabili per determinare se puoi guidare legalmente"},{en:"They provide rough estimates only — individual variations make them unreliable for legal driving decisions",it:"Forniscono solo stime approssimative — le variazioni individuali le rendono inaffidabili per le decisioni legali di guida"},{en:"They are certified by the NHTSA for DUI prevention",it:"Sono certificate dalla NHTSA per la prevenzione DUI"},{en:"Using such apps proves the driver was trying to drive safely",it:"Usare tali app prova che il conducente stava cercando di guidare in sicurezza"}],correct:1,explain_en:"BAC calculator apps give rough estimates based on self-reported data. Individual metabolism varies too widely to rely on them for a legal driving decision. Only a certified breathalyzer is accurate.",explain_it:"Le app calcolatrice BAC danno stime approssimative basate su dati auto-riportati. Il metabolismo individuale varia troppo ampiamente per affidarsi a loro per una decisione legale di guida."},
  {cat:"alcohol",en:"What is the difference between 'drunk driving' and 'drugged driving' under Florida DUI law?",it:"Qual e la differenza tra 'guida in stato di ebbrezza' e 'guida sotto l'effetto di droghe' nella legge DUI Florida?",options:[{en:"Only drunk driving is covered by DUI law",it:"Solo la guida in stato di ebbrezza e coperta dalla legge DUI"},{en:"Florida DUI law covers impairment by alcohol, controlled substances, OR chemical substances — same penalties apply",it:"La legge DUI Florida copre la compromissione da alcol, sostanze controllate O sostanze chimiche — si applicano le stesse sanzioni"},{en:"Drugged driving charges require a BAC test",it:"Le accuse di guida drogata richiedono un test BAC"},{en:"Drugged driving is a lesser offense than drunk driving",it:"La guida drogata e un'offesa minore rispetto alla guida in stato di ebbrezza"}],correct:1,explain_en:"Florida DUI law applies equally to impairment by alcohol, illegal drugs, prescription drugs, or chemical substances. The same penalties, tests, and procedures apply.",explain_it:"La legge DUI Florida si applica ugualmente alla compromissione da alcol, droghe illegali, farmaci da prescrizione o sostanze chimiche. Si applicano le stesse sanzioni, test e procedure."},

  {cat:"license",en:"What is the Florida 'FR-44' insurance certificate?",it:"Cos'e il certificato assicurativo Florida 'FR-44'?",options:[{en:"Standard liability insurance proof",it:"Prova standard di assicurazione di responsabilita"},{en:"High-limit insurance certificate required after DUI conviction — requires $100,000/$300,000 BI and $50,000 PDL",it:"Certificato assicurativo ad alto limite richiesto dopo una condanna DUI — richiede $100.000/$300.000 BI e $50.000 PDL"},{en:"Same as SR-22 but for motorcycles",it:"Uguale a SR-22 ma per le moto"},{en:"Proof of uninsured motorist coverage",it:"Prova di copertura automobilista non assicurato"}],correct:1,explain_en:"FR-44 is required after DUI conviction in Florida. It requires much higher liability limits ($100K/$300K bodily injury, $50K property damage) than standard SR-22, and must be maintained for 3 years.",explain_it:"FR-44 e richiesto dopo la condanna DUI in Florida. Richiede limiti di responsabilita molto piu alti ($100K/$300K lesioni corporali, $50K danni materiali) dello standard SR-22 e deve essere mantenuto per 3 anni."},
  {cat:"license",en:"What Florida driving record points are added for a speeding violation of 16-29 mph over the limit?",it:"Quanti punti vengono aggiunti al record Florida per una violazione di velocita di 16-29 mph sopra il limite?",options:[{en:"2 points",it:"2 punti"},{en:"3 points",it:"3 punti"},{en:"4 points",it:"4 punti"},{en:"6 points",it:"6 punti"}],correct:2,explain_en:"Florida point system: 3 points for speeding 15 mph or less over; 4 points for speeding 16-29 mph over; 6 points for 30+ mph over or speeding in school zone.",explain_it:"Sistema punti Florida: 3 punti per velocita fino a 15 mph sopra; 4 punti per 16-29 mph sopra; 6 punti per 30+ mph sopra o velocita in zona scolastica."},
  {cat:"license",en:"What Florida driving record points result in a mandatory 30-day license suspension?",it:"Quanti punti del record Florida comportano una sospensione obbligatoria della patente di 30 giorni?",options:[{en:"12 points in 12 months",it:"12 punti in 12 mesi"},{en:"18 points in 18 months",it:"18 punti in 18 mesi"},{en:"24 points in 36 months",it:"24 punti in 36 mesi"},{en:"Any 3 violations regardless of points",it:"Qualsiasi 3 violazioni indipendentemente dai punti"}],correct:0,explain_en:"Florida point system suspensions: 12 points in 12 months = 30-day suspension; 18 points in 18 months = 3-month suspension; 24 points in 36 months = 1-year suspension.",explain_it:"Sospensioni del sistema punti Florida: 12 punti in 12 mesi = sospensione 30 giorni; 18 punti in 18 mesi = sospensione 3 mesi; 24 punti in 36 mesi = sospensione 1 anno."},
  {cat:"license",en:"How many points does a Florida DUI conviction add to a driving record?",it:"Quanti punti aggiunge una condanna DUI Florida a un record di guida?",options:[{en:"4 points",it:"4 punti"},{en:"6 points",it:"6 punti"},{en:"DUI is handled by license revocation — not a point violation",it:"Il DUI e gestito dalla revoca della patente — non una violazione a punti"},{en:"12 points",it:"12 punti"}],correct:2,explain_en:"A DUI conviction results in license revocation — not a point addition. The revocation period depends on the offense level (1st, 2nd, 3rd+).",explain_it:"Una condanna DUI comporta la revoca della patente — non un'aggiunta di punti. Il periodo di revoca dipende dal livello dell'offesa (1°, 2°, 3°+)."},
  {cat:"license",en:"How long does a moving violation remain on a Florida driving record for point purposes?",it:"Per quanto tempo una violazione in movimento rimane su un record di guida Florida ai fini dei punti?",options:[{en:"1 year",it:"1 anno"},{en:"3 years",it:"3 anni"},{en:"5 years",it:"5 anni"},{en:"Permanently",it:"Permanentemente"}],correct:1,explain_en:"Points from moving violations remain on your Florida driving record for 3 years — affecting insurance rates and the point-based suspension thresholds.",explain_it:"I punti delle violazioni in movimento rimangono sul tuo record di guida Florida per 3 anni — influenzando le tariffe assicurative e le soglie di sospensione basate sui punti."},
  {cat:"license",en:"What is the TLSAE (Traffic Law and Substance Abuse Education) course in Florida?",it:"Cos'e il corso TLSAE (Traffic Law and Substance Abuse Education) in Florida?",options:[{en:"A course only for DUI offenders",it:"Un corso solo per i trasgressori DUI"},{en:"A required 4-hour course for first-time Florida license applicants 18 and older",it:"Un corso obbligatorio di 4 ore per i richiedenti la prima patente Florida di 18 anni e piu"},{en:"An optional safety course that reduces insurance rates",it:"Un corso di sicurezza opzionale che riduce le tariffe assicurative"},{en:"A course required after any moving violation",it:"Un corso richiesto dopo qualsiasi violazione in movimento"}],correct:1,explain_en:"TLSAE (also called Drug and Alcohol Test or DATA) is a 4-hour course required for adults (18+) applying for their first Florida license. Covers traffic laws and substance abuse effects.",explain_it:"Il TLSAE (noto anche come Drug and Alcohol Test o DATA) e un corso di 4 ore richiesto per gli adulti (18+) che richiedono la prima patente Florida. Copre le leggi del traffico e gli effetti dell'abuso di sostanze."},
  {cat:"license",en:"What is the penalty for a Florida driver who accumulates 12 points in 12 months?",it:"Qual e la sanzione per un conducente Florida che accumula 12 punti in 12 mesi?",options:[{en:"A written warning only",it:"Solo un avvertimento scritto"},{en:"30-day license suspension",it:"Sospensione della patente di 30 giorni"},{en:"6-month suspension",it:"Sospensione di 6 mesi"},{en:"Required to retake the driving test",it:"Obbligato a ripetere l'esame di guida"}],correct:1,explain_en:"12 points within 12 months = 30-day Florida license suspension. This is an administrative action by FLHSMV — separate from any court fines.",explain_it:"12 punti entro 12 mesi = sospensione della patente Florida di 30 giorni. Questa e un'azione amministrativa del FLHSMV — separata da qualsiasi multa del tribunale."},
  {cat:"license",en:"What is the Florida law on the Graduated Driver Licensing (GDL) curfew exception for employment?",it:"Qual e la legge Florida sulla eccezione al coprifuoco del Graduated Driver Licensing (GDL) per l'occupazione?",options:[{en:"No exceptions to GDL curfew",it:"Nessuna eccezione al coprifuoco GDL"},{en:"A teen with a provisional license may drive after 11 PM for employment with a signed note from employer",it:"Un adolescente con patente provvisoria puo guidare dopo le 23:00 per motivi di lavoro con una nota firmata del datore di lavoro"},{en:"Employment exceptions require a court order",it:"Le eccezioni per l'occupazione richiedono un ordine del tribunale"},{en:"Only age 17 drivers get the employment exception",it:"Solo i conducenti di 17 anni ottengono l'eccezione per l'occupazione"}],correct:1,explain_en:"Florida GDL curfew exceptions include: employment (with employer documentation), medical necessity, or driving to/from school events. Documentation must be in the vehicle.",explain_it:"Le eccezioni al coprifuoco GDL Florida includono: occupazione (con documentazione del datore di lavoro), necessita medica o guida da/verso eventi scolastici. La documentazione deve essere nel veicolo."},
  {cat:"license",en:"What is the age when Florida drivers must renew their license every 6 years (vs. 8 years for younger drivers)?",it:"Qual e l'eta in cui i conducenti Florida devono rinnovare la patente ogni 6 anni (vs. 8 anni per i conducenti piu giovani)?",options:[{en:"60 years old",it:"60 anni"},{en:"65 years old",it:"65 anni"},{en:"70 years old",it:"70 anni"},{en:"80 years old",it:"80 anni"}],correct:3,explain_en:"Florida drivers under 80 may renew every 8 years. At age 80+, renewal is required every 6 years, and must be done in person (not online) with a vision test.",explain_it:"I conducenti Florida under 80 possono rinnovare ogni 8 anni. A 80+ anni, il rinnovo e richiesto ogni 6 anni e deve essere fatto di persona (non online) con un test della visione."},
  {cat:"license",en:"What is a 'hardship reinstatement' in Florida?",it:"Cos'e un 'ripristino per necessita' in Florida?",options:[{en:"A reduced fine for low-income drivers",it:"Una multa ridotta per i conducenti a basso reddito"},{en:"A limited driving privilege granted during a suspension for essential purposes like work, school, or medical",it:"Un privilegio di guida limitato concesso durante una sospensione per scopi essenziali come lavoro, scuola o medici"},{en:"Automatic reinstatement after serving half a suspension",it:"Ripristino automatico dopo aver servito meta della sospensione"},{en:"A program only available after DUI revocations",it:"Un programma disponibile solo dopo le revoche DUI"}],correct:1,explain_en:"Hardship reinstatement allows limited driving during a suspension (BPO/EPO license) for employment, medical, or education. Requires an application, fees, and sometimes a hearing.",explain_it:"Il ripristino per necessita consente una guida limitata durante una sospensione (patente BPO/EPO) per lavoro, medici o istruzione. Richiede una domanda, quote e a volte un'udienza."},
  {cat:"license",en:"What is the Florida law on abandoned vehicles?",it:"Qual e la legge Florida sui veicoli abbandonati?",options:[{en:"Anyone can take a vehicle left on a public road",it:"Chiunque puo prendere un veicolo lasciato su una strada pubblica"},{en:"Vehicles left on public roads or property without movement for 48+ hours may be reported and towed at owner's expense",it:"I veicoli lasciati su strade o proprieta pubbliche senza movimento per 48+ ore possono essere segnalati e rimossi a spese del proprietario"},{en:"Abandoned vehicles must remain for 7 days before action",it:"I veicoli abbandonati devono rimanere 7 giorni prima di agire"},{en:"Only applies to vehicles on private property",it:"Si applica solo ai veicoli su proprieta privata"}],correct:1,explain_en:"Florida defines an abandoned vehicle as one left stationary on public property for 48+ hours without authorization. Law enforcement can have it towed at the owner's expense.",explain_it:"La Florida definisce un veicolo abbandonato come uno lasciato fermo su proprieta pubblica per 48+ ore senza autorizzazione. Le forze dell'ordine possono farlo rimorchiare a spese del proprietario."},
  {cat:"license",en:"What is required before a Florida teen (under 18) can get a learner's license?",it:"Cosa e richiesto prima che un adolescente Florida (under 18) possa ottenere il permesso per principianti?",options:[{en:"Only a vision test",it:"Solo un test della visione"},{en:"Pass a written knowledge test, vision test, and provide required documents",it:"Superare un test di conoscenza scritto, test della visione e fornire i documenti richiesti"},{en:"Complete a driver education course first",it:"Completare prima un corso di guida"},{en:"Parent or guardian must apply on their behalf",it:"Il genitore o tutore deve fare domanda per loro conto"}],correct:1,explain_en:"To get a learner's license in Florida (age 15): pass the vision test and written knowledge test, and provide required ID and residency documents at a FLHSMV office.",explain_it:"Per ottenere il permesso per principianti in Florida (eta 15): superare il test della visione e il test di conoscenza scritto e fornire i documenti di identita e residenza richiesti al FLHSMV."},
  {cat:"license",en:"What is the Florida law on minimum age for a full unrestricted Class E license?",it:"Qual e la legge Florida sull'eta minima per la patente Class E completa senza restrizioni?",options:[{en:"16 years old",it:"16 anni"},{en:"17 years old",it:"17 anni"},{en:"18 years old",it:"18 anni"},{en:"21 years old",it:"21 anni"}],correct:2,explain_en:"A full, unrestricted Florida Class E license requires age 18. Drivers 16-17 hold a provisional license with GDL restrictions that lift at age 18.",explain_it:"Una patente Florida Class E completa e senza restrizioni richiede 18 anni. I conducenti di 16-17 anni hanno una patente provvisoria con restrizioni GDL che si tolgono a 18 anni."},
  {cat:"license",en:"What is the Florida law on driving a moped without a license?",it:"Qual e la legge Florida sulla guida di un moped senza patente?",options:[{en:"Mopeds require no license",it:"I moped non richiedono patente"},{en:"A valid Florida driver's license or ID is required to operate a moped on public roads",it:"Una patente di guida Florida valida o documento d'identita e richiesto per guidare un moped su strade pubbliche"},{en:"Only a state ID card is needed",it:"E necessaria solo una carta d'identita statale"},{en:"Anyone 14+ may operate a moped",it:"Chiunque abbia 14+ anni puo guidare un moped"}],correct:1,explain_en:"To legally operate a moped (max 50cc, max 30 mph) in Florida, you need a valid driver's license or ID. No motorcycle endorsement is required.",explain_it:"Per guidare legalmente un moped (max 50cc, max 30 mph) in Florida, e necessaria una patente di guida o documento d'identita valido. Non e richiesto l'endorsement per motociclette."},
  {cat:"license",en:"What is Florida's 'point reduction' driving school benefit?",it:"Qual e il beneficio della scuola guida per la 'riduzione dei punti' in Florida?",options:[{en:"Removes all points from driving record",it:"Rimuove tutti i punti dal record di guida"},{en:"Reduces points by 3 once every 12 months (up to 5 times in your lifetime) — elected at time of ticket payment",it:"Riduce i punti di 3 una volta ogni 12 mesi (fino a 5 volte nella vita) — scelto al momento del pagamento della multa"},{en:"Guarantees insurance rate reduction",it:"Garantisce la riduzione del tasso assicurativo"},{en:"Only available for first-time violators",it:"Disponibile solo per i trasgressori per la prima volta"}],correct:1,explain_en:"Florida Basic Driver Improvement (BDI) course: completing it can reduce 3 points from your record, once per 12 months, up to 5 times lifetime. Must be elected before adjudication.",explain_it:"Il corso Florida Basic Driver Improvement (BDI): completarlo puo ridurre 3 punti dal tuo record, una volta ogni 12 mesi, fino a 5 volte nella vita. Deve essere scelto prima della giudicazione."},
  {cat:"license",en:"What is a 'Uniform Traffic Citation' (UTC) in Florida?",it:"Cos'e una 'Uniform Traffic Citation' (UTC) in Florida?",options:[{en:"A commendation for good driving",it:"Un riconoscimento per la buona guida"},{en:"The standard traffic ticket issued by Florida law enforcement — creates a court record and may add points",it:"La multa stradale standard emessa dalle forze dell'ordine Florida — crea un verbale del tribunale e puo aggiungere punti"},{en:"A warning notice with no legal effect",it:"Un avviso di avvertimento senza effetto legale"},{en:"Only issued for felony traffic violations",it:"Emessa solo per violazioni del traffico da reato"}],correct:1,explain_en:"A Uniform Traffic Citation is the standard traffic ticket in Florida. It may require a court appearance or fine payment, and points may be assessed to your driving record upon adjudication.",explain_it:"Una Uniform Traffic Citation e la multa stradale standard in Florida. Puo richiedere una comparizione in tribunale o il pagamento di una multa, e i punti possono essere aggiunti al record di guida alla giudicazione."},
  {cat:"license",en:"What is the effect of a Florida license suspension on your ability to get car insurance?",it:"Qual e l'effetto di una sospensione della patente Florida sulla capacita di ottenere l'assicurazione auto?",options:[{en:"No effect — insurance is separate from licensing",it:"Nessun effetto — l'assicurazione e separata dalla patente"},{en:"Insurers consider driving record when setting rates — suspensions increase risk classification and premiums significantly",it:"Le compagnie assicurative considerano il record di guida nel fissare le tariffe — le sospensioni aumentano significativamente la classificazione del rischio e i premi"},{en:"Insurance companies are not notified of suspensions",it:"Le compagnie assicurative non vengono notificate delle sospensioni"},{en:"Only DUI suspensions affect insurance rates",it:"Solo le sospensioni DUI influenzano le tariffe assicurative"}],correct:1,explain_en:"Insurance companies access driving records and factor in suspensions, violations, and accidents. A suspension typically results in significantly higher premiums or policy cancellation.",explain_it:"Le compagnie assicurative accedono ai record di guida e considerano sospensioni, violazioni e incidenti. Una sospensione tipicamente comporta premi significativamente piu alti o cancellazione della polizza."},

];
