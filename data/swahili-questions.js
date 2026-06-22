/**
 * SWAHILI (Kiswahili) QUESTIONS
 * Team Member: [Your Name]
 */

const SWAHILI_QUESTIONS = {
  name:   "Swahili",
  lang:   "Kiswahili",
  icon:   "public/homepage/swahili.png",
  iconFallback: "🏝️",
  locked: false,
  questions: [
    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "What does 'Jambo' mean in Swahili?",
      opts: ["Goodbye", "Hello", "Thank you", "How are you?"],
      ans:  1,
      img:  "public/swahili-photos/jambo-greeting.jpg"
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in Swahili?",
      opts: ["Asante", "Karibu", "Habari", "Samahani"],
      ans:  0,
      img:  "public/swahili-photos/asante.jpg"
    },
    {
      cat:  "Language",
      q:    "What does 'Habari yako' mean?",
      opts: ["Good night", "How are you?", "What's your name?", "Where are you going?"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'Goodbye' in Swahili?",
      opts: ["Asante", "Karibu", "Kwaheri", "Habari"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Karibu' mean in Swahili?",
      opts: ["You're welcome", "Good morning", "Sorry", "Please"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'Yes' and 'No' in Swahili?",
      opts: ["Ee / Hapana", "Ndiyo / Hapana", "Ee / Aa", "Ndio / Sawa"],
      ans:  1,
      img:  null
    },

    /* HISTORY */
    {
      cat:  "History",
      q:    "The Swahili language originated along which coast of Africa?",
      opts: ["West Africa", "East Africa", "North Africa", "South Africa"],
      ans:  1,
      img:  "public/swahili-photos/east-africa-coast.jpg"
    },
    {
      cat:  "History",
      q:    "The ancient Swahili city-states included which famous trading port?",
      opts: ["Timbuktu", "Great Zimbabwe", "Kilwa Kisiwani", "Meroë"],
      ans:  2,
      img:  "public/swahili-photos/kilwa-kisiwani.jpg"
    },
    {
      cat:  "History",
      q:    "Swahili is heavily influenced by which language due to trade?",
      opts: ["Portuguese", "English", "Arabic", "French"],
      ans:  2,
      img:  "public/swahili-photos/arabic.jpg"
    },
    {
      cat:  "History",
      q:    "The word 'Swahili' comes from the Arabic word 'Sawahil' meaning?",
      opts: ["Coasts", "Traders", "People", "Language"],
      ans:  0,
      img:  null
    },
    {
      cat:  "History",
      q:    "Which famous explorer wrote about the Swahili coast in the 14th century?",
      opts: ["Marco Polo", "Ibn Battuta", "Vasco da Gama", "David Livingstone"],
      ans:  1,
      img:  "public/swahili-photos/ibn-battuta.jpg"
    },

    /* TRADITION */
    {
      cat:  "Tradition",
      q:    "The traditional Swahili wedding festival lasting several days is called?",
      opts: ["Harusi", "Siku kuu", "Arusi", "Sherehe"],
      ans:  2,
      img:  "public/swahili-photos/swahili-wedding.jpg"
    },
    {
      cat:  "Tradition",
      q:    "What is 'Mchango' in Swahili culture?",
      opts: [
        "A harvest dance",
        "A communal savings/fundraising event",
        "A coming-of-age ceremony",
        "An ancestral ritual"
      ],
      ans:  1,
      img:  null
    },
    {
      cat:  "Tradition",
      q:    "The traditional Swahili garment worn by women is called?",
      opts: ["Kanzu", "Kofia", "Kanga", "Bui bui"],
      ans:  2,
      img:  "public/swahili-photos/kanga.jpg"
    },
    {
      cat:  "Tradition",
      q:    "Swahili doors are famous for their intricate what?",
      opts: ["Paintings", "Carvings", "Metal inlays", "Glass work"],
      ans:  1,
      img:  "public/swahili-photos/swahili-door.jpg"
    },

    /* CULTURE */
    {
      cat:  "Culture",
      q:    "The traditional Swahili dish of rice, coconut milk, and spices is called?",
      opts: ["Ugali", "Pilau", "Wali wa Nazi", "Biriani"],
      ans:  2,
      img:  "public/swahili-photos/wali-wa-nazi.jpg"
    },
    {
      cat:  "Culture",
      q:    "What is 'Taarab' in Swahili culture?",
      opts: [
        "A type of food",
        "A traditional music genre",
        "A dance style",
        "A religious ceremony"
      ],
      ans:  1,
      img:  "public/swahili-photos/taarab-music.jpg"
    },
    {
      cat:  "Culture",
      q:    "The Swahili concept of 'Ujamaa' means?",
      opts: ["Freedom", "Familyhood/Community", "Respect", "Peace"],
      ans:  1,
      img:  "public/swahili-photos/familyhood.jpg"
    },
    {
      cat:  "Culture",
      q:    "Lamu Old Town, a famous Swahili settlement, is located in which country?",
      opts: ["Tanzania", "Kenya", "Mozambique", "Somalia"],
      ans:  1,
      img:  "public/swahili-photos/lamu.jpg"
    },

    /* MUSIC & ARTS */
    {
      cat:  "Music",
      q:    "The traditional Swahili string instrument is called?",
      opts: ["Zeze", "Ngoma", "Filimbi", "Chizeze"],
      ans:  0,
      img:  "public/swahili-photos/zeze.jpg"
    },
    {
      cat:  "Music",
      q:    "Famous Tanzanian Swahili musician known as 'King of Bongo Flava' is?",
      opts: ["Diamond Platnumz", "Ali Kiba", "Mbosso", "Rayvanny"],
      ans:  0,
      img:  "public/swahili-photos/diamond-platnumz.jpg"
    },
    {
      cat:  "Music",
      q:    "Bongo Flava music originated in which country?",
      opts: ["Kenya", "Uganda", "Tanzania", "Rwanda"],
      ans:  2,
      img:  "public/swahili-photos/bongo-flava.jpg"
    },
    {
      cat:  "Music",
      q:    "The famous Swahili poet and composer of 'Mwana Mdogo' was?",
      opts: ["Muyaka bin Haji", "Siti binti Saad", "Fumo Liyongo", "Shaaban Robert"],
      ans:  1,
      img:  null
    },

    /* GEOGRAPHY */
    {
      cat:  "Geography",
      q:    "Swahili is an official language of which two East African countries?",
      opts: ["Kenya & Uganda", "Tanzania & Kenya", "Tanzania & Mozambique", "Kenya & Rwanda"],
      ans:  1,
      img:  "public/swahili-photos/east-africa-map.jpg"
    },
    {
      cat:  "Geography",
      q:    "Zanzibar, a major Swahili cultural center, is part of which country?",
      opts: ["Kenya", "Tanzania", "Comoros", "Somalia"],
      ans:  1,
      img:  "public/swahili-photos/zanzibar.jpg"
    },
    {
      cat:  "Geography",
      q:    "The Great Mosque of Kilwa is located in which modern country?",
      opts: ["Kenya", "Mozambique", "Tanzania", "Somalia"],
      ans:  2,
      img:  "public/swahili-photos/kilwa-mosque.jpg"
    },
    {
      cat:  "Geography",
      q:    "Mombasa, a historic Swahili port city, is in which country?",
      opts: ["Tanzania", "Mozambique", "Kenya", "Somalia"],
      ans:  2,
      img:  "public/swahili-photos/mombasa.jpg"
    },

    /* FOOD */
    {
      cat:  "Food",
      q:    "What is 'Ugali' in Swahili cuisine?",
      opts: [
        "A sweet dessert",
        "Stiff maize porridge - staple food",
        "A fried bread",
        "A coconut soup"
      ],
      ans:  1,
      img:  "public/swahili-photos/ugali.jpg"
    },
    {
      cat:  "Food",
      q:    "'Maharage ya Nazi' is a Swahili dish made from?",
      opts: ["Rice and fish", "Beans in coconut sauce", "Fried plantains", "Spiced meat stew"],
      ans:  1,
      img:  "public/swahili-photos/maharage-ya-nazi.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'Mandazi' in Swahili cuisine?",
      opts: [
        "A coconut bread",
        "Fried dough pastry (African donut)",
        "A grilled fish",
        "A banana porridge"
      ],
      ans:  1,
      img:  "public/swahili-photos/mandazi.jpg"
    },
    {
      cat:  "Food",
      q:    "'Samaki wa Kupaka' is a Swahili dish of?",
      opts: ["Fried fish", "Grilled fish with coconut curry sauce", "Fish soup", "Dried fish"],
      ans:  1,
      img:  "public/swahili-photos/samaki-kupaka.jpg"
    },

    /* NOTABLE PEOPLE */
    {
      cat:  "Notable People",
      q:    "Julius Nyerere, who promoted Swahili as a unifying language, was president of?",
      opts: ["Kenya", "Uganda", "Tanzania", "Zambia"],
      ans:  2,
      img:  "public/swahili-photos/julius-nyerere.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Lupita Nyong'o, who speaks Swahili, won an Oscar for which film?",
      opts: ["Black Panther", "12 Years a Slave", "Us", "The Woman King"],
      ans:  1,
      img:  "public/swahili-photos/lupita-nyongo.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Wangari Maathai, the first African woman to win the Nobel Peace Prize, was from?",
      opts: ["Tanzania", "Kenya", "Uganda", "Rwanda"],
      ans:  1,
      img:  "public/swahili-photos/wangari-maathai.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Barack Obama, who famously used the Swahili phrase 'Sisi kwa sisi', was?",
      opts: ["Kenyan President", "US President", "UN Secretary", "Tanzanian activist"],
      ans:  1,
      img:  "public/swahili-photos/obama-swahili.jpg"
    },

    /* PROVERBS & WISDOM */
    {
      cat:  "Proverbs",
      q:    "What does 'Haraka haraka haina baraka' mean in Swahili?",
      opts: [
        "Slow and steady wins the race",
        "Hurry hurry has no blessings",
        "Time is money",
        "Patience is a virtue"
      ],
      ans:  1,
      img:  null
    },
    {
      cat:  "Proverbs",
      q:    "What does 'Samaki mmoja akioza, wote wameoza' mean?",
      opts: [
        "One bad apple spoils the bunch",
        "Fish are sacred",
        "Unity is strength",
        "Don't judge a book by its cover"
      ],
      ans:  0,
      img:  null
    },
    {
      cat:  "Proverbs",
      q:    "'Akufukuzae hakukosi nyuki' means?",
      opts: [
        "Bees are dangerous",
        "He who chases you has a reason (where there's smoke, there's fire)",
        "Run from danger",
        "Help those who help you"
      ],
      ans:  1,
      img:  null
    }
  ]
};