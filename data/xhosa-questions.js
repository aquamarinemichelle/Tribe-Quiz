/**
 * XHOSA (IsiXhosa) QUESTIONS
 * Team Member: Kwanele Myeni
 */

const XHOSA_QUESTIONS = {
  name:   "Xhosa",
  lang:   "IsiXhosa",
  icon:   "public/homepage/xhosa.png",
  locked: false,
  questions: [
    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "What does 'Molo' mean in IsiXhosa?",
      opts: ["Goodbye", "Hello (to one person)", "Thank you", "Good night"],
      ans:  1,
      img:  "public/xhosa-photos/molo.png"
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in IsiXhosa?",
      opts: ["Ewe", "Hayi", "Enkosi", "Hamba kakuhle"],
      ans:  2,
      img:  "public/xhosa-photos/thank-you.jpg"
    },
    {
      cat:  "Language",
      q:    "What does 'Ewe' mean in IsiXhosa?",
      opts: ["No", "Yes", "Please", "Come here"],
      ans:  1,
      img:  "public/xhosa-photos/ewe.png"
    },
    
    /* HISTORY */
    {
      cat:  "History",
      q:    "The series of wars fought between the Xhosa and British colonial forces over land in the Eastern Cape are known as the?",
      opts: ["Anglo-Zulu Wars", "Cape Frontier Wars", "Difaqane Wars", "Mfecane"],
      ans:  1,
      img:  "public/xhosa-photos/wars.jpg"
    },
    {
      cat:  "History",
      q:    "In 1856–57, prophetess Nongqawuse convinced the Xhosa to slaughter their cattle and destroy crops, believing ancestors would rise and expel the British. This tragedy is called?",
      opts: ["The Great Trek", "The Xhosa Cattle-Killing Movement", "The Cape Rebellion", "The Frontier Famine"],
      ans:  1,
      img:  "public/xhosa-photos/nongqawuse.jpg"
    },
    {
      cat:  "History",
      q:    "Which legendary Xhosa chief led resistance against British colonial forces in the 8th Frontier War and was later exiled to Robben Island?",
      opts: ["Hintsa", "Sandile", "Maqoma", "Ngqika"],
      ans:  2,
      img:  "public/xhosa-photos/xhosa-chief.jpg"
    },
    {
      cat:  "History",
      q:    "The Eastern Cape province, the historic heartland of the Xhosa, was previously known by which colonial name?",
      opts: ["Natal", "Griqualand", "British Kaffraria", "Zululand"],
      ans:  2,
      img:  "public/xhosa-photos/eastern-cape-xhosa.jpg"
    },

    /* TRADITION */
    {
      cat:  "Tradition",
      q:    "The Xhosa male initiation ceremony, marking the passage from boyhood to manhood, is called?",
      opts: ["Umemulo", "Ulwaluko", "Ukweshwama", "Umhlanga"],
      ans:  1,
      img:  "public/xhosa-photos/ulwaluko.jpg"
    },
    {
      cat:  "Tradition",
      q:    "During Xhosa initiation, young men (abakhwetha) smear their bodies with white clay and wear white blankets. What does the white symbolise?",
      opts: ["Wealth and prosperity", "Purity and spiritual transition", "Strength in battle", "Mourning for the past"],
      ans:  1,
      img:  "public/xhosa-photos/xhosa-facepaint.jpg"
    },
    {
      cat:  "Tradition",
      q:    "The Xhosa equivalent of lobola — cattle or goods paid by the groom's family to the bride's family — is known as?",
      opts: ["Umabo", "Ilobolo", "Ukuyalwa", "Imbeleko"],
      ans:  1,
      img:  "public/xhosa-photos/lobola.jpg"
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
      img:  "public/xhosa-photos/imbeleko.jpg"
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
      img:  "public/xhosa-photos/ubuntu-philosophy.jpg"
    },
    {
      cat:  "Culture",
      q:    "Xhosa women are known for wearing a specific traditional style of face decoration. What is it?",
      opts: ["Henna patterns", "White umchokozo clay face paint", "Red ochre body paint", "Black charcoal markings"],
      ans:  1,
      img:  "public/xhosa-photos/xhosa-facepaint.jpg"
    },
    {
      cat:  "Culture",
      q:    "The brightly coloured, intricately patterned traditional dress of Xhosa women typically features which dominant colour?",
      opts: ["Blue and white", "Green and yellow", "Black and white with colourful embroidery", "Red and orange"],
      ans:  2,
      img:  "public/xhosa-photos/tradition.jpg"
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
      img:  "public/xhosa-photos/xhosa-rondavel.jpg"
    },

    /* MUSIC & ARTS */
    {
      cat:  "Music",
      q:    "Which uniquely Xhosa musical instrument is played by plucking a string held between the teeth, using the mouth as a resonating chamber?",
      opts: ["Uhadi (musical bow)", "Imbaqa (drum)", "Isigqi (rattle)", "Umrubhe (mouth bow)"],
      ans:  3,
      img:  "public/xhosa-photos/xhosa-instru.jpg"
    },
    {
      cat:  "Music",
      q:    "The traditional Xhosa practice of throat singing, often performed by women, is known as?",
      opts: ["Isicathamiya", "Umngqokolo", "Mbaqanga", "Ingoma"],
      ans:  1,
      img:  "public/xhosa-photos/xhosa-throat-singing.jpg"
    },
    {
      cat:  "Music",
      q:    "Miriam Makeba, a global icon of African music and a Xhosa woman, was nicknamed?",
      opts: ["The Queen of Jazz", "Mama Africa", "Lady Day", "The Voice of the Cape"],
      ans:  1,
      img:  "public/xhosa-photos/miriam-makeba.jpg"
    },
    {
      cat:  "Music",
      q:    "The Xhosa genre of choral music sung at community and church gatherings, blending traditional harmonies with Western hymn structures, is called?",
      opts: ["Kwaito", "Amapiano", "Ingoma", "Gumboot"],
      ans:  2,
      img:  "public/xhosa-photos/xhosa-genre.jpg"
    },

    /* GEOGRAPHY */
    {
      cat:  "Geography",
      q:    "The Xhosa people are primarily associated with which South African province?",
      opts: ["KwaZulu-Natal", "Limpopo", "Eastern Cape", "Western Cape"],
      ans:  2,
      img:  "public/xhosa-photos/eastern-cape-xhosa.jpg"
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
      img:  "public/xhosa-photos/mthatha.jpg"
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
      img:  "public/xhosa-photos/wild-coast.jpg"
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
      img:  "public/xhosa-photos/umngqusho.jpg"
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
      img:  "public/xhosa-photos/amasi.jpg"
    },
    {
      cat:  "Food",
      q:    "Umvubo is a Xhosa dish made by mixing?",
      opts: ["Rice and beans", "Maize meal (pap) and amasi", "Sorghum and wild herbs", "Dried meat and fat"],
      ans:  1,
      img:  "public/xhosa-photos/umvubo.jpg"
    },

    /* PEOPLE & NOTABLE */
    {
      cat:  "Notable People",
      q:    "Nelson Mandela, South Africa's first democratically elected president, belonged to which Xhosa clan?",
      opts: ["Mpondo", "Thembu (Madiba clan)", "Mfengu", "Gcaleka"],
      ans:  1,
      img:  "public/xhosa-photos/mandela.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Steve Biko, founder of the Black Consciousness Movement in South Africa, was a Xhosa man who died in police custody in which year?",
      opts: ["1969", "1973", "1977", "1983"],
      ans:  2,
      img:  "public/xhosa-photos/steve.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Archbishop Desmond Tutu, Nobel Peace Prize laureate and anti-apartheid activist, was of which Nguni heritage?",
      opts: ["Zulu", "Sotho", "Xhosa", "Swazi"],
      ans:  2,
      img:  "public/xhosa-photos/desmond.jpg"
    },
  ]
};