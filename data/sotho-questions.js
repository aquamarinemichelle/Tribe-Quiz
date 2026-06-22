/**
 * SESOTHO (Sesotho) QUESTIONS
 * Team Member: Michelle Mazibuko
 * 
 */

const SOTHO_QUESTIONS = {
  name:   "Sesotho",
  lang:   "Sesotho",
  icon:   "public/homepage/sesotho.png", 
  locked: false,  
  questions: [
    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "What does 'Dumela' mean in Sesotho?",
      opts: ["Goodbye", "Hello", "Thank you", "How are you?"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in Sesotho?",
      opts: ["Ke a leboha", "Dumela", "Sala hantle", "Tsamaya hantle"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'O kae?' mean in Sesotho?",
      opts: ["Where are you?", "How are you?", "What is your name?", "Where are you going?"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "Sesotho is an official language of which TWO countries?",
      opts: ["South Africa & Zimbabwe", "South Africa & Lesotho", "Lesotho & Botswana", "South Africa & Eswatini"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Lebitso la ka ke...' mean?",
      opts: ["I am from...", "My name is...", "I live in...", "I work at..."],
      ans:  1,
      img:  null
    },

    /* HISTORY */
    {
      cat:  "History",
      q:    "Who was the legendary founder of the Basotho nation in the early 19th century?",
      opts: ["Moshoeshoe I", "Shaka Zulu", "Mzilikazi", "Sobhuza I"],
      ans:  0,
      img:  "public/sotho-photos/moshoeshoe.jpg"
    },
    {
      cat:  "History",
      q:    "King Moshoeshoe I established his stronghold on which mountain?",
      opts: ["Table Mountain", "Thaba-Bosiu", "Drakensberg", "Majesty Mountain"],
      ans:  1,
      img:  "public/sotho-photos/thaba-bosiu.jpg"
    },
    {
      cat:  "History",
      q:    "The Basotho successfully defended themselves against which colonial power in the Free State-Basotho Wars?",
      opts: ["British", "Portuguese", "Boers (Dutch settlers)", "Germans"],
      ans:  2,
      img:  "public/sotho-photos/basotho-war.jpg"
    },
    {
      cat:  "History",
      q:    "Lesotho gained full independence from Britain in which year?",
      opts: ["1960", "1966", "1970", "1975"],
      ans:  1,
      img:  "public/sotho-photos/independence.png"
    },
    {
      cat:  "History",
      q:    "Who was the first Prime Minister of independent Lesotho?",
      opts: ["King Moshoeshoe II", "Leabua Jonathan", "Ntsu Mokhehle", "Pakalitha Mosisili"],
      ans:  1,
      img:  "public/sotho-photos/prime-minister.jpg"
    },

    /* TRADITION */
    {
      cat:  "Tradition",
      q:    "What is the traditional Basotho blanket called?",
      opts: ["Kente", "Shweshwe", "Seanamarena", "Basotho blanket"],
      ans:  2,
      img:  "public/sotho-photos/seanamarena.jpg"
    },
    {
      cat:  "Tradition",
      q:    "The initiation school for Basotho boys is called?",
      opts: ["Lebollo", "Mokorotlo", "Pitso", "Lekhotla"],
      ans:  0,
      img:  "public/sotho-photos/lebollo.jpg"
    },
    {
      cat:  "Tradition",
      q:    "What is the distinctive conical hat of Lesotho called?",
      opts: ["Mokorotlo", "Basotho hat", "Mophato", "Seanamarena"],
      ans:  0,
      img:  "public/sotho-photos/mokorotlo.png"
    },
    {
      cat:  "Tradition",
      q:    "The traditional Basotho dance performed at ceremonies is called?",
      opts: ["Indlamu", "Pantsula", "Mokhibo", "Gumboot"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Tradition",
      q:    "What is 'Lekhotla' in Basotho culture?",
      opts: ["A traditional wedding", "A village council/meeting", "A harvest festival", "A rainmaking ceremony"],
      ans:  1,
      img:  null
    },

    /* CULTURE */
    {
      cat:  "Culture",
      q:    "The Basotho people are known for their colorful traditional blankets. Which company is famous for producing them?",
      opts: ["Aranda", "Woolworths", "Aranda and Victoria Blankets", "Basotho Mills"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Culture",
      q:    "What is 'Pitso' in Basotho culture?",
      opts: ["A public gathering/indaba", "A type of food", "A traditional weapon", "A wedding ceremony"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Culture",
      q:    "The Basotho phrase 'Botho' is similar to which South African philosophy?",
      opts: ["Ubuntu", "Sawubona", "Hunhu", "Undhu"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Culture",
      q:    "What is the traditional Basotho homestead called?",
      opts: ["Kraal", "Motenko", "Rondavel", "Lapa"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Culture",
      q:    "Basotho women are famous for what type of traditional art?",
      opts: ["Beadwork", "Pottery", "Mural painting", "Basket weaving"],
      ans:  2,
      img:  null
    },

    /* MUSIC & ARTS */
    {
      cat:  "Music",
      q:    "Which traditional Lesotho musical instrument is a stringed bow?",
      opts: ["Thomo", "Lesiba", "Uhadi", "Mbira"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Music",
      q:    "Famo music is a popular genre in Lesotho. What instrument is central to Famo?",
      opts: ["Guitar", "Accordion", "Drums", "Violin"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Music",
      q:    "Which famous Lesotho musician is known for the hit 'Mosotho'?",
      opts: ["Tsepo Tshola", "Sankomota", "Lekanta", "Machesa"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Music",
      q:    "The band Sankomota, led by Tsepo Tshola, was popular in which decade?",
      opts: ["1970s", "1980s", "1990s", "2000s"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Music",
      q:    "What is 'Mokorotlo' also known as in Basotho music?",
      opts: ["A dance", "A traditional song genre", "A musical instrument", "A festival"],
      ans:  1,
      img:  null
    },

    /* GEOGRAPHY */
    {
      cat:  "Geography",
      q:    "Lesotho is known as 'The Kingdom in the Sky' because...",
      opts: ["It has high mountains", "It has many clouds", "It is the highest country in Africa", "It has many airports"],
      ans:  2,
      img:  "public/lesotho-mountains.png"
    },
    {
      cat:  "Geography",
      q:    "What is the highest point in Lesotho and southern Africa?",
      opts: ["Table Mountain", "Thabana Ntlenyana", "Drakensberg Peak", "Mount Kilimanjaro"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Geography",
      q:    "Lesotho is completely surrounded by which country?",
      opts: ["South Africa", "Botswana", "Zimbabwe", "Eswatini"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Geography",
      q:    "What is the capital city of Lesotho?",
      opts: ["Maseru", "Mafeteng", "Leribe", "Quthing"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Geography",
      q:    "The Maloti Mountains are part of which larger mountain range?",
      opts: ["Drakensberg", "Rwenzori", "Atlas", "Ethiopian Highlands"],
      ans:  0,
      img:  null
    },

    /* FOOD */
    {
      cat:  "Food",
      q:    "What is 'Papa' or 'Mieliepap' in Sesotho cuisine?",
      opts: ["Maize porridge", "Meat stew", "Vegetable dish", "Fermented milk"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'Morohe' in Basotho cuisine?",
      opts: ["Dried meat", "Wild spinach/cabbage dish", "Sorghum beer", "Maize bread"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Food",
      q:    "'Motoho' is a traditional Basotho drink made from...",
      opts: ["Fermented sorghum", "Maize", "Soured milk", "Fruit juice"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'Likhobe'?",
      opts: ["Boiled dry maize kernels", "Meat stew", "Vegetable relish", "Bread"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'Sechu sa Makgoa'?",
      opts: ["Traditional beer", "Sheep head stew", "Maize bread", "Fermented porridge"],
      ans:  1,
      img:  null
    },

    /* NOTABLE PEOPLE */
    {
      cat:  "Notable People",
      q:    "Who is known as the father of the Basotho nation?",
      opts: ["King Letsie III", "King Moshoeshoe I", "Thomas Mofolo", "Leabua Jonathan"],
      ans:  1,
      img:  "public/moshoeshoe.png"
    },
    {
      cat:  "Notable People",
      q:    "Who wrote 'Chaka', the famous Sesotho novel about the Zulu king?",
      opts: ["Thomas Mofolo", "Mzamane Nhlapo", "Essop Patel", "Bessie Head"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Notable People",
      q:    "Who is the current King of Lesotho (as of 2024)?",
      opts: ["King Moshoeshoe II", "King Letsie III", "King Seeiso", "King Bereng"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Notable People",
      q:    "Which famous Sesotho writer wrote 'Moeti oa Bochabela' (The Traveller of the East)?",
      opts: ["Thomas Mofolo", "Azariele Sekese", "Ephraim Lesoro", "Bennie Khaketla"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Notable People",
      q:    "Who was the first female Prime Minister of Lesotho?",
      opts: ["'Mamphono Khaketla", "Mathabiso Lepono", "Mosisili", "No female PM yet"],
      ans:  3,
      img:  null
    },
  ]
};