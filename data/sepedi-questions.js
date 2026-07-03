/**
 * SEPEDI (Sesotho sa Leboa) QUESTIONS
 * Team Member: Michelle Mazibuko
 */

const SEPEDI_QUESTIONS = {
  name:   "Sepedi",
  lang:   "Sesotho sa Leboa",
  icon:   "public/homepage/sepedi.png",
  locked: false,
  questions: [

    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "How do you greet someone in Sepedi (Northern Sotho)?",
      opts: ["Sawubona", "Dumela", "Molweni", "Lotsha"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Ke a leboga' mean in Sepedi?",
      opts: ["Good morning", "Goodbye", "Thank you", "I am hungry"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Language",
      q:    "Sepedi is officially known as?",
      opts: ["Sesotho", "Sesotho sa Leboa", "SiSwati", "Setswana"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Ee' mean in Sepedi?",
      opts: ["No", "Yes", "Please", "Come here"],
      ans:  1,
      img:  null
    },

    /* HISTORY */
    {
      cat:  "History",
      q:    "The Bapedi people are historically associated with which South African province?",
      opts: ["KwaZulu-Natal", "Western Cape", "Limpopo", "Free State"],
      ans:  2,
      img:  null
    },
    {
      cat:  "History",
      q:    "King Sekhukhune I famously resisted which colonial power in the 1870s?",
      opts: ["Portuguese", "German", "French", "British"],
      ans:  3,
      img:  "public/sepedi-photos/king-sekhukhune.jpg"
    },
    {
      cat:  "History",
      q:    "The Bapedi kingdom's capital during King Sekhukhune's reign was located in which mountain area?",
      opts: ["Magaliesberg", "Drakensberg", "Leolo Mountains", "Waterberg"],
      ans:  2,
      img: "public/sepedi-photos/leolo.jpg"
    },
    {
      cat:  "History",
      q:    "The Bapedi people are a subgroup of which broader language family?",
      opts: ["Nguni", "Sotho-Tswana", "Tsonga", "Venda"],
      ans:  1,
      img:  "public/sepedi-photos/bapedi.jpg"
    },

    /* TRADITION */
    {
      cat:  "Tradition",
      q:    "The Bapedi initiation school for boys is called?",
      opts: ["Koma", "Umemulo", "Ukweshwama", "Bogwera"],
      ans:  0,
      img:  "public/sepedi-photos/pedi-initiation.jpg"
    },
    {
      cat:  "Tradition",
      q:    "The Bapedi female initiation ceremony is known as?",
      opts: ["Umhlanga", "Koma ya basadi", "Lobola", "Bjale"],
      ans:  1,
      img:  "public/sepedi-photos/pedi-girls-initiation.jpg"
    },
    {
      cat:  "Tradition",
      q:    "What is the Sepedi term for bride wealth paid by the groom's family?",
      opts: [
        "Lobola",
        "Bohadi",
        "Magadi",
        "Ikhazi"
      ],
      ans:  2,
      img:  "public/sepedi-photos/magadi.png"
    },
    {
      cat:  "Tradition",
      q:    "In Bapedi tradition, the community leader or chief is referred to as?",
      opts: [
        "Sangoma",
        "Kgoši",
        "Induna",
        "Morena"
      ],
      ans:  1,
      img:  "public/sepedi-photos/kgosi.png"
    },

    /* CULTURE */
    {
      cat:  "Culture",
      q:    "Bapedi women are known for wearing striking beaded aprons during ceremonies. What are these aprons called?",
      opts: ["Isidwaba", "Ntepa", "Ijogolo", "Phephetu"],
      ans:  1,
      img:  "public/sepedi-photos/bapedi-attire.jpg"
    },
    {
      cat:  "Culture",
      q:    "What is a 'ngaka' in Bapedi culture?",
      opts: [
        "A praise singer",
        "A traditional healer/diviner",
        "A chief's messenger",
        "A male elder"
      ],
      ans:  1,
      img:  "public/sepedi-photos/ngaka.jpg"
    },
    {
      cat:  "Culture",
      q:    "The concept of 'botho' in Sepedi culture is closely related to which pan-African philosophy?",
      opts: ["Negritude", "Ubuntu", "Pan-Africanism", "Afrocentrism"],
      ans:  1,
      img:  "public/sepedi-photos/botho.png"
    },
    {
      cat:  "Culture",
      q:    "Traditional Bapedi homes are characterised by?",
      opts: [
        "Rectangular brick houses with tin roofs",
        "Round mud-and-thatch huts decorated with geometric murals",
        "Stone-walled enclosures",
        "Underground earth shelters"
      ],
      ans:  1,
      img:  "public/sepedi-photos/bapedi-home.png"
    },

    /* MUSIC & ARTS */
    {
      cat:  "Music",
      q:    "The Bapedi are famous for which energetic dance and musical style that uses drums and leg rattles?",
      opts: ["Kiba", "Indlamu", "Gumboot", "Mohobelo"],
      ans:  0,
      img:  "public/sepedi-photos/kiba.png"
    },
    {
      cat:  "Music",
      q:    "In Kiba music, the metal leg rattles worn by male dancers are called?",
      opts: ["Dipela", "Moropa", "Setinkane", "Digoma"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Music",
      q:    "The 'moropa' is a well-known instrument in Sepedi music. What type of instrument is it?",
      opts: ["A stringed bow", "A flute", "A traditional drum", "A horn trumpet"],
      ans:  2,
      img:  "public/sepedi-photos/moropa.jpeg"
    },
    {
      cat:  "Music",
      q:    "What is the Sepedi term for oral praise poetry performed to honour chiefs and ancestors?",
      opts: ["Isibongo", "Dipale", "Izibongo", "Maboko"],
      ans:  1,
      img:  null
    },

    /* GEOGRAPHY */
    {
      cat:  "Geography",
      q:    "Sepedi is the most widely spoken language in which South African province?",
      opts: ["Mpumalanga", "North West", "Limpopo", "Gauteng"],
      ans:  2,
      img:  "public/sepedi-photos/limpopo.png"
    },
    {
      cat:  "Geography",
      q:    "The Sekhukhune District, the historical heartland of the Bapedi, is located in which part of Limpopo?",
      opts: ["Far North (Vhembe)", "Central Limpopo (Sekhukhuneland)", "Waterberg", "Mopani"],
      ans:  1,
      img:  "public/sepedi-photos/sekhukhune.png"
    },
    {
      cat:  "Geography",
      q:    "Which major river runs through Sekhukhuneland and is important to Bapedi heritage?",
      opts: ["Limpopo River", "Vaal River", "Olifants (Lepelle) River", "Crocodile River"],
      ans:  2,
      img:  null
    },

    /* FOOD */
    {
      cat:  "Food",
      q:    "What is the Sepedi name for the thick porridge that is a staple of Bapedi cuisine?",
      opts: [
        "Uphuthu",
        "Pap",
        "Bogobe jwa lerotse",
        "Sadza"
      ],
      ans:  2,
      img:  null
    },
    {
      cat:  "Food",
      q:    "Mopane worms ('mašontši') are a traditional Bapedi delicacy. What are they?",
      opts: [
        "A type of river fish",
        "Caterpillars of the mopane tree moth",
        "Dried locusts",
        "Wild mushrooms"
      ],
      ans:  1,
      img:  "public/sepedi-photos/mopane-worms.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'mageu' commonly prepared and drunk in Bapedi households?",
      opts: [
        "A hot herbal tea",
        "A non-alcoholic fermented maize drink",
        "Soured goat's milk",
        "A marula fruit brew"
      ],
      ans:  1,
      img:  null
    },

    /* NOTABLE PEOPLE */
    {
      cat:  "Notable People",
      q:    "Which South African politician, of Bapedi heritage, served as Deputy President from 2014 to 2018 and became President in 2018?",
      opts: ["Jacob Zuma", "Kgalema Motlanthe", "Cyril Ramaphosa", "Thabo Mbeki"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Notable People",
      q:    "King Sekhukhune I is remembered as a symbol of what in South African history?",
      opts: [
        "Early Christianity in Limpopo",
        "Resistance against colonial conquest",
        "Trade relations with the Portuguese",
        "The unification of all Sotho peoples"
      ],
      ans:  1,
      img:  null
    },
    {
      cat:  "Notable People",
      q:    "Chuene Moremi was a pioneering Sepedi figure known for his contributions to?",
      opts: [
        "Sepedi literature and poetry",
        "Military resistance against the British",
        "The founding of the ANC",
        "Bapedi trade routes"
      ],
      ans:  0,
      img:  null
    },
  ]
};