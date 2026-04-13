// fl_all.js — Florida Class E Knowledge Test — Question Database
// Format: { cat, en, it, options:[{en,it},...], correct, explain_en, explain_it }
// Categorie: signs | laws | safety | alcohol | license
// Versione: 1.0 (195 domande) — espandibile fino a 650
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



];
