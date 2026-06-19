/**
 * AFRIKANER HERITAGE QUESTIONS
 * Team Member: Michelle Mazibuko
 * 
 * 
 * Covers Afrikaans language origins, Afrikaner history, traditions, and food.
 * Note: Afrikaans is a shared language across Afrikaner and Coloured
 * communities. These questions focus specifically on Afrikaner heritage.
 */

const AFRIKAANS_QUESTIONS = {
  name:   "Afrikaner",
  lang:   "Afrikaans",
  icon:   "public/homepage/afrikaans.png",
  locked: false,
  questions: [

    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "Afrikaans developed mainly from which European language?",
      opts: ["German", "Dutch", "French", "Portuguese"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in Afrikaans?",
      opts: ["Asseblief", "Dankie", "Totsiens", "Goeie dag"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Lekker' mean in Afrikaans?",
      opts: ["Sad", "Nice / Great", "Tired", "Angry"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'Goodbye' in Afrikaans?",
      opts: ["Hallo", "Totsiens", "Dankie", "Asseblief"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "In which year was Afrikaans officially recognised as one of South Africa's languages (alongside English)?",
      opts: ["1902", "1925", "1948", "1961"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Baie dankie' mean?",
      opts: ["Good morning", "Thank you very much", "See you later", "Please"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "Afrikaans borrowed words from which other languages besides Dutch, due to its colonial-era history?",
      opts: [
        "Only English",
        "Malay, Khoekhoe, Portuguese and others",
        "Only German",
        "Only French"
      ],
      ans:  1,
      img:  null
    },

    /* HISTORY */
    {
      cat:  "History",
      q:    "Who were the original Dutch settlers in the Cape called?",
      opts: ["Voortrekkers", "Boers", "Cape Dutch", "Both Boers and Cape Dutch"],
      ans:  3,
      img:  null
    },
    {
      cat:  "History",
      q:    "What was the Great Trek?",
      opts: [
        "A religious pilgrimage to Cape Town",
        "A mass migration of Boer settlers away from British rule in the Cape",
        "A trade route to Mozambique",
        "An annual harvest festival"
      ],
      ans:  1,
      img:  "public/afrikaans-photos/great-trek.jpg"
    },
    {
      cat:  "History",
      q:    "In which decade did the Great Trek mainly take place?",
      opts: ["1800s-1810s", "1830s-1840s", "1860s-1870s", "1890s-1900s"],
      ans:  1,
      img:  null
    },
    {
      cat:  "History",
      q:    "What were the independent states the Voortrekkers established called?",
      opts: [
        "Cape Colony and Natal",
        "The Boer Republics (e.g. Transvaal, Orange Free State)",
        "British Dominions",
        "The Zulu Kingdom"
      ],
      ans:  1,
      img:  null
    },
    {
      cat:  "History",
      q:    "The Anglo-Boer War was fought between the British and which group?",
      opts: ["The Zulu Kingdom", "The Boer republics", "Portuguese settlers", "The Xhosa nation"],
      ans:  1,
      img:  "public/afrikaans-photos/anglo-boer-war.jpg"
    },
    {
      cat:  "History",
      q:    "When did the Anglo-Boer War take place?",
      opts: ["1850-1852", "1879-1881", "1899-1902", "1914-1918"],
      ans:  2,
      img:  null
    },
    {
      cat:  "History",
      q:    "What is the Voortrekker Monument, located near Pretoria?",
      opts: [
        "A famous Afrikaans university",
        "A monument honouring the Voortrekkers and the Great Trek",
        "A wine estate",
        "A type of folk dance"
      ],
      ans:  1,
      img:  "public/afrikaans-photos/voortrekker-monument.jpg"
    },

    /* TRADITIONS */
    {
      cat:  "Traditions",
      q:    "What is a 'braai'?",
      opts: ["A traditional dance", "A type of hat", "A barbecue / outdoor grilling tradition", "A folk song"],
      ans:  2,
      img:  "public/afrikaans-photos/braai.jpg"
    },
    {
      cat:  "Traditions",
      q:    "Which South African public holiday celebrates braai culture, also known as 'National Braai Day'?",
      opts: ["Freedom Day", "Heritage Day", "Youth Day", "Workers' Day"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Traditions",
      q:    "What is 'Voortrekker' clothing typically associated with?",
      opts: [
        "Modern streetwear",
        "Traditional dress worn by descendants reenacting Great Trek history",
        "Beach wear",
        "Workwear for miners"
      ],
      ans:  1,
      img:  null
    },
    {
      cat:  "Traditions",
      q:    "What kind of music is closely tied to traditional Afrikaner folk culture, often played with concertina and guitar?",
      opts: ["Boeremusiek", "Kwaito", "Maskandi", "Amapiano"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Traditions",
      q:    "What is a 'volkspele'?",
      opts: [
        "A type of traditional Afrikaner folk dance/game gathering",
        "A religious sermon",
        "A type of farm tool",
        "A legal court"
      ],
      ans:  0,
      img:  null
    },
    {
      cat:  "Traditions",
      q:    "The Dutch Reformed Church has historically played a major role in which aspect of Afrikaner life?",
      opts: ["Sport", "Religion and community life", "Agriculture only", "Mining"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Traditions",
      q:    "What is a 'plaasstal' or farm stall commonly associated with in Afrikaner rural culture?",
      opts: [
        "Roadside stalls selling local farm produce and preserves",
        "A type of dance",
        "A government office",
        "A music genre"
      ],
      ans:  0,
      img:  null
    },

    /* FOOD */
    {
      cat:  "Food",
      q:    "What is 'biltong'?",
      opts: ["A dried, cured meat snack", "A type of bread", "A dessert", "A soft drink"],
      ans:  0,
      img:  "public/afrikaans-photos/biltong.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'boerewors'?",
      opts: ["A type of cheese", "A traditional South African farmer's sausage", "A vegetable stew", "A pastry"],
      ans:  1,
      img:  "public/afrikaans-photos/boerewors.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'melktert'?",
      opts: ["A spicy curry", "A milk tart dessert", "A type of bread roll", "A meat pie"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'koeksisters'?",
      opts: [
        "A syrup-coated plaited fried dough pastry",
        "A type of stew",
        "A savoury pie",
        "A grilled meat dish"
      ],
      ans:  0,
      img:  "public/afrikaans-photos/koeksisters.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'potjiekos' traditionally cooked in?",
      opts: ["A clay oven", "A three-legged cast-iron pot over an open fire", "A microwave", "A wood-fired pizza oven"],
      ans:  1,
      img:  "public/afrikaans-photos/potjiekos.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'rusks' (beskuit) typically eaten with?",
      opts: ["Soup", "Coffee or tea, often dunked", "Salad", "Braai meat"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'bobotie', a well-known South African dish with strong Cape Malay and Afrikaner influence?",
      opts: [
        "A spiced minced meat bake topped with an egg-based custard",
        "A clear vegetable soup",
        "A type of flatbread",
        "A fish curry"
      ],
      ans:  0,
      img:  "public/afrikaans-photos/bobotie.jpg"
    }
  ]
};