/**
 * UBUNTU QUIZ — QUESTIONS DATABASE
 * ═══════════════════════════════════════════════════════════
 * HOW TO ADD A NEW CULTURE:
 *
 *   1. Add a new key to the CULTURES object (e.g. "sepedi")
 *   2. Fill in: name, lang, icon, locked (set to false when ready)
 *   3. Add at least 10 questions to the questions array
 *
 * QUESTION FORMAT:
 *   {
 *     cat:  "Category name",          // shown above the question
 *     q:    "The question text?",     // the question
 *     opts: ["A", "B", "C", "D"],     // exactly 4 options
 *     ans:  0,                        // index of correct answer (0-3)
 *     img:  "public/image-name.png"   // optional: path to question image
 *   }
 * ═══════════════════════════════════════════════════════════
 */

/* ──────────────────────────────────────
   XHOSA QUESTIONS BANK (FULLY LOADED)
────────────────────────────────────── */
const XHOSA_QUESTIONS = [
  /* LANGUAGE */
  {
    cat:  "Language",
    q:    "What does 'Molo' mean in IsiXhosa?",
    opts: ["Goodbye", "Hello (to one person)", "Thank you", "Good night"],
    ans:  1,
    img:  null
  },
  {
    cat:  "Language",
    q:    "How do you say 'Thank you' in IsiXhosa?",
    opts: ["Ewe", "Hayi", "Enkosi", "Hamba kakuhle"],
    ans:  2,
    img:  null
  },
  {
    cat:  "Language",
    q:    "What does 'Ewe' mean in IsiXhosa?",
    opts: ["No", "Yes", "Please", "Come here"],
    ans:  1,
    img:  null
  },
  {
    cat:  "Language",
    q:    "IsiXhosa is famous for its distinctive click consonants. How many main click sounds does it have?",
    opts: ["One", "Two", "Three", "Four"],
    ans:  2,
    img:  null
  },

  /* HISTORY */
  {
    cat:  "History",
    q:    "The series of wars fought between the Xhosa and British colonial forces over land in the Eastern Cape are known as the?",
    opts: ["Anglo-Zulu Wars", "Cape Frontier Wars", "Difaqane Wars", "Mfecane"],
    ans:  1,
    img:  null
  },
  {
    cat:  "History",
    q:    "In 1856–57, prophetess Nongqawuse convinced the Xhosa to slaughter their cattle and destroy crops, believing ancestors would rise and expel the British. This tragedy is called?",
    opts: ["The Great Trek", "The Xhosa Cattle-Killing Movement", "The Cape Rebellion", "The Frontier Famine"],
    ans:  1,
    img:  "public/nongqawuse.png"
  },
  {
    cat:  "History",
    q:    "Which legendary Xhosa chief led resistance against British colonial forces in the 8th Frontier War and was later exiled to Robben Island?",
    opts: ["Hintsa", "Sandile", "Maqoma", "Ngqika"],
    ans:  2,
    img:  null
  },
  {
    cat:  "History",
    q:    "The Eastern Cape province, the historic heartland of the Xhosa, was previously known by which colonial name?",
    opts: ["Natal", "Griqualand", "British Kaffraria", "Zululand"],
    ans:  2,
    img:  null
  },

  /* TRADITION */
  {
    cat:  "Tradition",
    q:    "The Xhosa male initiation ceremony, marking the passage from boyhood to manhood, is called?",
    opts: ["Umemulo", "Ulwaluko", "Ukweshwama", "Umhlanga"],
    ans:  1,
    img:  "public/ulwaluko.png"
  },
  {
    cat:  "Tradition",
    q:    "During Xhosa initiation, young men (abakhwetha) smear their bodies with white clay and wear white blankets. What does the white symbolise?",
    opts: ["Wealth and prosperity", "Purity and spiritual transition", "Strength in battle", "Mourning for the past"],
    ans:  1,
    img:  null
  },
  {
    cat:  "Tradition",
    q:    "The Xhosa equivalent of lobola — cattle or goods paid by the groom's family to the bride's family — is known as?",
    opts: ["Umabo", "Ilobolo", "Ukuyalwa", "Imbeleko"],
    ans:  1,
    img:  null
  },
  {
    cat:  "Tradition",
    q:    "'Imbeleko' is a Xhosa ceremony held to?",
    opts: [
      "Celebrate a harvest",
      "Introduce a newborn to the ancestors",
      "Mark a girl's coming of age",
      "Begin a wedding negotiation"
    ],
    ans:  1,
    img:  null
  },

  /* CULTURE */
  {
    cat:  "Culture",
    q:    "The Xhosa share the Ubuntu philosophy with other Nguni peoples. What does Ubuntu mean?",
    opts: [
      "I am the greatest",
      "I am because we are",
      "Work hard, eat well",
      "Respect your elders"
    ],
    ans:  1,
    img:  null
  },
  {
    cat:  "Culture",
    q:    "Xhosa women are known for wearing a specific traditional style of face decoration. What is it?",
    opts: ["Henna patterns", "White umchokozo clay face paint", "Red ochre body paint", "Black charcoal markings"],
    ans:  1,
    img:  "public/xhosa-facepaint.png"
  },
  {
    cat:  "Culture",
    q:    "The brightly coloured, intricately patterned traditional dress of Xhosa women typically features which dominant colour?",
    opts: ["Blue and white", "Green and yellow", "Black and white with colourful embroidery", "Red and orange"],
    ans:  2,
    img:  null
  },
  {
    cat:  "Culture",
    q:    "What is a 'rondavel' in the context of Xhosa homestead life?",
    opts: [
      "A sacred burial ground",
      "A round thatched traditional dwelling",
      "A cattle enclosure",
      "A communal meeting hall"
    ],
    ans:  1,
    img:  null
  },

  /* MUSIC & ARTS */
  {
    cat:  "Music",
    q:    "Which uniquely Xhosa musical instrument is played by plucking a string held between the teeth, using the mouth as a resonating chamber?",
    opts: ["Uhadi (musical bow)", "Imbaqa (drum)", "Isigqi (rattle)", "Umrubhe (mouth bow)"],
    ans:  3,
    img:  null
  },
  {
    cat:  "Music",
    q:    "The traditional Xhosa practice of throat singing, often performed by women, is known as?",
    opts: ["Isicathamiya", "Umngqokolo", "Mbaqanga", "Ingoma"],
    ans:  1,
    img:  null
  },
  {
    cat:  "Music",
    q:    "Miriam Makeba, a global icon of African music and a Xhosa woman, was nicknamed?",
    opts: ["The Queen of Jazz", "Mama Africa", "Lady Day", "The Voice of the Cape"],
    ans:  1,
    img:  "public/miriam-makeba.png"
  },
  {
    cat:  "Music",
    q:    "The Xhosa genre of choral music sung at community and church gatherings, blending traditional harmonies with Western hymn structures, is called?",
    opts: ["Kwaito", "Amapiano", "Ingoma", "Gumboot"],
    ans:  2,
    img:  null
  },

  /* GEOGRAPHY */
  {
    cat:  "Geography",
    q:    "The Xhosa people are primarily associated with which South African province?",
    opts: ["KwaZulu-Natal", "Limpopo", "Eastern Cape", "Western Cape"],
    ans:  2,
    img:  null
  },
  {
    cat:  "Geography",
    q:    "The historic city of Mthatha (formerly Umtata) in the Eastern Cape is significant as?",
    opts: [
      "The first capital of the Cape Colony",
      "The birthplace of Nelson Mandela and former capital of Transkei",
      "The site of the last Frontier War battle",
      "The largest Xhosa royal palace"
    ],
    ans:  1,
    img:  null
  },
  {
    cat:  "Geography",
    q:    "The Xhosa 'Wild Coast' region of the Eastern Cape is named for its?",
    opts: [
      "Dangerous wildlife",
      "Rugged, shipwreck-prone coastline",
      "Wild indigenous forests",
      "Unpredictable storms year-round"
    ],
    ans:  1,
    img:  null
  },

  /* FOOD */
  {
    cat:  "Food",
    q:    "What is 'Umngqusho', a traditional Xhosa dish?",
    opts: [
      "A fermented milk drink",
      "Samp (dried corn) and beans cooked together",
      "A spiced mutton stew",
      "Roasted corn on the cob"
    ],
    ans:  1,
    img:  "public/umngqusho.png"
  },
  {
    cat:  "Food",
    q:    "Like the Zulu, Xhosa people also drink amasi. What is it?",
    opts: [
      "A sweet fermented grain beer",
      "Fermented soured milk, similar to yoghurt",
      "A herbal medicinal tea",
      "Fresh cow's milk warmed with spices"
    ],
    ans:  1,
    img:  null
  },
  {
    cat:  "Food",
    q:    "Umvubo is a Xhosa dish made by mixing?",
    opts: ["Rice and beans", "Maize meal (pap) and amasi", "Sorghum and wild herbs", "Dried meat and fat"],
    ans:  1,
    img:  null
  },

  /* PEOPLE & NOTABLE */
  {
    cat:  "Notable People",
    q:    "Nelson Mandela, South Africa's first democratically elected president, belonged to which Xhosa clan?",
    opts: ["Mpondo", "Thembu (Madiba clan)", "Mfengu", "Gcaleka"],
    ans:  1,
    img:  "public/mandela.png"
  },
  {
    cat:  "Notable People",
    q:    "Steve Biko, founder of the Black Consciousness Movement in South Africa, was a Xhosa man who died in police custody in which year?",
    opts: ["1969", "1973", "1977", "1983"],
    ans:  2,
    img:  null
  },
  {
    cat:  "Notable People",
    q:    "Archbishop Desmond Tutu, Nobel Peace Prize laureate and anti-apartheid activist, was of which Nguni heritage?",
    opts: ["Zulu", "Sotho", "Xhosa", "Swazi"],
    ans:  2,
    img:  null
  }
];

const CULTURES = {

  /* ──────────────────────────────────────
     ZULU — IsiZulu (FULLY UNLOCKED WITH IMAGES)
  ────────────────────────────────────── */
  zulu: {
    name:   "Zulu",
    lang:   "IsiZulu",
    icon:   "🥁",
    locked: false,
    questions: [

      /* LANGUAGE */
      {
        cat:  "Language",
        q:    "What does 'Sawubona' mean in IsiZulu?",
        opts: ["Goodbye", "I see you / Hello", "Thank you", "Good night"],
        ans:  1,
        img:  "public/sawubona.png"
      },
      {
        cat:  "Language",
        q:    "How do you say 'Thank you' in IsiZulu?",
        opts: ["Yebo", "Sawubona", "Ngiyabonga", "Hamba kahle"],
        ans:  2,
        img:  null
      },
      {
        cat:  "Language",
        q:    "What does 'Yebo' mean in IsiZulu?",
        opts: ["No", "Yes", "Please", "Hurry"],
        ans:  1,
        img:  null
      },
      {
        cat:  "Language",
        q:    "IsiZulu is one of South Africa's official languages. How many official languages does SA have in total?",
        opts: ["9", "10", "11", "12"],
        ans:  2,
        img:  null
      },

      /* HISTORY */
      {
        cat:  "History",
        q:    "Who was the famous Zulu king that built a powerful military empire in the early 1800s?",
        opts: ["Dingane", "Cetshwayo", "Shaka Zulu", "Mpande"],
        ans:  2,
        img:  "public/shaka-zulu.png"
      },
      {
        cat:  "History",
        q:    "The Battle of Isandlwana in 1879 was a major Zulu victory against which colonial power?",
        opts: ["Portuguese", "Dutch (Boers)", "British", "German"],
        ans:  2,
        img:  null
      },
      {
        cat:  "History",
        q:    "King Cetshwayo was the last independent king of the Zulu. He was exiled after which war?",
        opts: ["The Anglo-Boer War", "The Anglo-Zulu War", "The Frontier Wars", "The Mfecane"],
        ans:  1,
        img:  null
      },
      {
        cat:  "History",
        q:    "The Mfecane was a period of widespread chaos and warfare among Nguni tribes mainly caused by?",
        opts: ["Drought", "Shaka's military expansion", "British invasion", "A plague"],
        ans:  1,
        img:  null
      },

      /* TRADITION */
      {
        cat:  "Tradition",
        q:    "The Zulu Reed Dance ceremony is called?",
        opts: ["Umhlanga", "Ukweshwama", "Umemulo", "Ukubuyisa"],
        ans:  0,
        img:  "public/umhlanga.png"
      },
      {
        cat:  "Tradition",
        q:    "Lobola is an important Zulu tradition. What is it?",
        opts: [
          "A war dance performed by warriors",
          "Bride wealth paid by the groom's family",
          "A harvest celebration",
          "A rain-calling ceremony"
        ],
        ans:  1,
        img:  null
      },
      {
        cat:  "Tradition",
        q:    "The Zulu male first-fruits ceremony where the king tastes the new harvest is called?",
        opts: ["Umhlanga", "Ukweshwama", "Lobola", "Umemulo"],
        ans:  1,
        img:  null
      },
      {
        cat:  "Tradition",
        q:    "An 'Umemulo' ceremony in Zulu culture celebrates?",
        opts: [
          "A boy becoming a warrior",
          "A girl's coming of age (around 21)",
          "A wedding anniversary",
          "The death of an elder"
        ],
        ans:  1,
        img:  null
      },

      /* CULTURE */
      {
        cat:  "Culture",
        q:    "What does the Zulu/Nguni philosophy 'Ubuntu' mean?",
        opts: [
          "I am the greatest",
          "I am because we are",
          "Work hard, eat well",
          "Respect your elders"
        ],
        ans:  1,
        img:  null
      },
      {
        cat:  "Culture",
        q:    "Zulu women are internationally famous for making intricate colorful?",
        opts: ["Clay pottery", "Beadwork jewelry", "Wood carvings", "Woven baskets"],
        ans:  1,
        img:  "public/beadwork.png"
      },
      {
        cat:  "Culture",
        q:    "In Zulu culture, what colour beads traditionally symbolise love?",
        opts: ["Blue", "White", "Red", "Pink"],
        ans:  2,
        img:  null
      },
      {
        cat:  "Culture",
        q:    "What is the traditional Zulu dwelling called?",
        opts: ["Rondavel", "Indlu (beehive hut)", "Kraal", "Imizi"],
        ans:  1,
        img:  "public/zulu-dwelling.png"
      },

      /* MUSIC & ARTS */
      {
        cat:  "Music",
        q:    "Which a cappella vocal style originated with Zulu migrant workers and became world-famous?",
        opts: ["Kwaito", "Amapiano", "Isicathamiya", "Mbaqanga"],
        ans:  2,
        img:  "public/isicathamiya.png"
      },
      {
        cat:  "Music",
        q:    "Ladysmith Black Mambazo made Isicathamiya world-famous. Which famous musician featured them on a 1986 album?",
        opts: ["Michael Jackson", "Paul Simon", "Elton John", "Bob Marley"],
        ans:  1,
        img:  null
      },
      {
        cat:  "Music",
        q:    "The energetic dance performed by Zulu warriors, also used during ceremonial occasions, is called?",
        opts: ["Gumboot dance", "Indlamu", "Pantsula", "Toyi-toyi"],
        ans:  1,
        img:  null
      },
      {
        cat:  "Music",
        q:    "Amapiano, a popular modern South African music genre with Zulu influences, originated in which decade?",
        opts: ["1990s", "2000s", "2010s", "1980s"],
        ans:  2,
        img:  null
      },

      /* GEOGRAPHY */
      {
        cat:  "Geography",
        q:    "The heartland of Zulu culture is which South African province?",
        opts: ["Limpopo", "Gauteng", "KwaZulu-Natal", "Eastern Cape"],
        ans:  2,
        img:  null
      },
      {
        cat:  "Geography",
        q:    "The uKhahlamba-Drakensberg Park, a UNESCO World Heritage Site in KwaZulu-Natal, is known for?",
        opts: [
          "Gold mining history",
          "Ancient San rock art and mountains",
          "Zulu battlefield sites only",
          "Coastal wetlands"
        ],
        ans:  1,
        img:  null
      },
      {
        cat:  "Geography",
        q:    "The Zulu Royal Palace is located in which area of KwaZulu-Natal?",
        opts: ["Durban", "Richards Bay", "Nongoma", "Pietermaritzburg"],
        ans:  2,
        img:  null
      },

      /* FOOD */
      {
        cat:  "Food",
        q:    "What is 'Uphuthu', a staple in Zulu cuisine?",
        opts: [
          "A spicy meat stew",
          "Dry crumbly maize meal (pap)",
          "A fermented milk drink",
          "Grilled chicken dish"
        ],
        ans:  1,
        img:  null
      },
      {
        cat:  "Food",
        q:    "What is 'Amasi' in Zulu culture?",
        opts: [
          "A type of bread",
          "Fermented/soured milk, similar to yoghurt",
          "A beer made from sorghum",
          "A type of porridge made from millet"
        ],
        ans:  1,
        img:  null
      },
      {
        cat:  "Food",
        q:    "Umqombothi is a traditional Zulu beverage. What is it made from?",
        opts: ["Grapes", "Sorghum and maize", "Sugarcane", "Fermented honey"],
        ans:  1,
        img:  "public/umqombothi.png"
      },

      /* PEOPLE & NOTABLE */
      {
        cat:  "Notable People",
        q:    "Which anti-apartheid activist, a Zulu leader, won the Nobel Peace Prize in 1993 alongside Nelson Mandela?",
        opts: ["Mangosuthu Buthelezi", "Walter Sisulu", "F.W. de Klerk", "Oliver Tambo"],
        ans:  2,
        img:  null
      },
      {
        cat:  "Notable People",
        q:    "Prince Mangosuthu Buthelezi founded which major Zulu political organization in 1975?",
        opts: ["ANC", "PAC", "Inkatha Freedom Party", "DA"],
        ans:  2,
        img:  null
      },
      {
        cat:  "Notable People",
        q:    "The current (as of 2024) Zulu King is?",
        opts: ["Goodwill Zwelithini", "Misuzulu kaZwelithini", "Cetshwayo II", "Dingane II"],
        ans:  1,
        img:  null
      },
    ]
  },

  /* ──────────────────────────────────────
     XHOSA — IsiXhosa (NOW UNLOCKED!)
  ────────────────────────────────────── */
  xhosa: {
    name:   "Xhosa",
    lang:   "IsiXhosa",
    icon:   "🌊",
    locked: false,  // ← CHANGED FROM true TO false
    questions: XHOSA_QUESTIONS  // ← USING THE FULL XHOSA QUESTION BANK
  },

  /* ──────────────────────────────────────
     SESOTHO — Sesotho  (coming soon)
  ────────────────────────────────────── */
  sotho: {
    name:   "Sesotho",
    lang:   "Sesotho",
    icon:   "🏔️",
    locked: true,
    questions: []
  },

  /* ──────────────────────────────────────
     SEPEDI — Sepedi  (coming soon)
  ────────────────────────────────────── */
  sepedi: {
    name:   "Sepedi",
    lang:   "Sepedi",
    icon:   "🌿",
    locked: true,
    questions: []
  },

  /* ──────────────────────────────────────
     SETSWANA — Setswana  (coming soon)
  ────────────────────────────────────── */
  tswana: {
    name:   "Tswana",
    lang:   "Setswana",
    icon:   "🌾",
    locked: true,
    questions: []
  },

  /* ──────────────────────────────────────
     TSONGA — Xitsonga  (coming soon)
  ────────────────────────────────────── */
  tsonga: {
    name:   "Tsonga",
    lang:   "Xitsonga",
    icon:   "🦁",
    locked: true,
    questions: []
  },

  /* ──────────────────────────────────────
     VENDA — Tshivenda  (coming soon)
  ────────────────────────────────────── */
  venda: {
    name:   "Venda",
    lang:   "Tshivenda",
    icon:   "🎵",
    locked: true,
    questions: []
  },

  /* ──────────────────────────────────────
     SWATI — siSwati  (coming soon)
  ────────────────────────────────────── */
  swati: {
    name:   "Swati",
    lang:   "siSwati",
    icon:   "🛡️",
    locked: true,
    questions: []
  },

  /* ──────────────────────────────────────
     NDEBELE — isiNdebele  (coming soon)
  ────────────────────────────────────── */
  ndebele: {
    name:   "Ndebele",
    lang:   "isiNdebele",
    icon:   "🎨",
    locked: true,
    questions: []
  },

  /* ──────────────────────────────────────
     AFRIKAANS  (coming soon)
  ────────────────────────────────────── */
  afrikaans: {
    name:   "Afrikaans",
    lang:   "Afrikaans",
    icon:   "🌻",
    locked: true,
    questions: []
  },

  /* ──────────────────────────────────────
     ENGLISH / GENERAL SA  (coming soon)
  ────────────────────────────────────── */
  english: {
    name:   "General SA",
    lang:   "English",
    icon:   "🇿🇦",
    locked: true,
    questions: []
  },
};