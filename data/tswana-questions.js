/**
 * TSWANA (Setswana) QUESTIONS
 * Team Member: [Your Name]
 */

const TSWANA_QUESTIONS = {
  name:   "Tswana",
  lang:   "Setswana",
  icon:   "🌾",
  locked: false,
  questions: [
    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "What does 'Dumela' mean in Setswana?",
      opts: ["Goodbye", "Hello", "Thank you", "Please"],
      ans:  1,
      img:  "public/tswana-photos/dumela-greeting.jpg"
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in Setswana?",
      opts: ["Ke a leboga", "Dumela", "Tsamaya sentle", "Robala sentle"],
      ans:  0,
      img:  "public/tswana-photos/ke-a-leboga.jpg"
    },
    {
      cat:  "Language",
      q:    "What does 'Ee' mean in Setswana?",
      opts: ["No", "Yes", "Maybe", "Never"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'Goodbye' in Setswana?",
      opts: ["Dumela", "Ke a leboga", "Tsamaya sentle", "Ee"],
      ans:  2,
      img:  null
    },

    /* HISTORY */
    {
      cat:  "History",
      q:    "The Tswana people primarily inhabit which country?",
      opts: ["South Africa only", "Botswana and South Africa", "Zimbabwe only", "Namibia only"],
      ans:  1,
      img:  "public/tswana-photos/tswana-map.jpg"
    },
    {
      cat:  "History",
      q:    "Which famous Tswana chief led his people during the Difaqane/Mfecane wars?",
      opts: ["Kgosi Sechele I", "King Moshoeshoe", "King Shaka", "Kgosi Mampuru"],
      ans:  0,
      img:  "public/tswana-photos/kgosi-sechele.jpg"
    },
    {
      cat:  "History",
      q:    "The Tswana royal lineage is known as?",
      opts: ["The House of Senzangakhona", "The House of Chieftaincy", "The Bahurutshe", "The Zulu Kingdom"],
      ans:  2,
      img:  null
    },
    {
      cat:  "History",
      q:    "Which South African province has the largest Tswana population?",
      opts: ["Limpopo", "Gauteng", "North West", "Free State"],
      ans:  2,
      img:  "public/tswana-photos/north-west-province.jpg"
    },

    /* TRADITION */
    {
      cat:  "Tradition",
      q:    "The traditional Tswana wedding ceremony is called?",
      opts: ["Patlo", "Mabogo", "Lobola", "Bogadi"],
      ans:  3,
      img:  "public/tswana-photos/tswana-wedding.jpg"
    },
    {
      cat:  "Tradition",
      q:    "What is 'Bogadi' in Tswana culture?",
      opts: [
        "A harvest festival",
        "Bride wealth paid by the groom's family",
        "A coming-of-age ceremony",
        "An ancestral worship ritual"
      ],
      ans:  1,
      img:  null
    },
    {
      cat:  "Tradition",
      q:    "The Tswana initiation school for young men is called?",
      opts: ["Bojale", "Bogwera", "Lebollo", "Mephato"],
      ans:  1,
      img:  "public/tswana-photos/bogwera.jpg"
    },
    {
      cat:  "Tradition",
      q:    "The Tswana initiation school for young women is called?",
      opts: ["Bojale", "Bogwera", "Lebollo", "Mephato"],
      ans:  0,
      img:  "public/tswana-photos/bojale.jpg"
    },

    /* CULTURE */
    {
      cat:  "Culture",
      q:    "The traditional Tswana blanket worn during ceremonies is called?",
      opts: ["Kente", "Shweshwe", "Khiba", "Mokorotlo"],
      ans:  2,
      img:  "public/tswana-photos/khiba-blanket.jpg"
    },
    {
      cat:  "Culture",
      q:    "Tswana people are known for their intricate?",
      opts: ["Beadwork", "Pottery", "Wood carving", "Basket weaving"],
      ans:  0,
      img:  "public/tswana-photos/tswana-beadwork.jpg"
    },
    {
      cat:  "Culture",
      q:    "The Tswana traditional dwelling is called?",
      opts: ["Rondavel", "Lapa", "Ntlo", "Moraka"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Culture",
      q:    "What is the Tswana concept of community and togetherness called?",
      opts: ["Ubuntu", "Botho", "Harambee", "Umoja"],
      ans:  1,
      img:  null
    },

    /* MUSIC & ARTS */
    {
      cat:  "Music",
      q:    "Which Tswana music genre is characterized by guitar and accordion?",
      opts: ["Mbaqanga", "Kwaito", "Tsaba Tsaba", "Amapiano"],
      ans:  2,
      img:  "public/tswana-photos/tsaba-tsaba.jpg"
    },
    {
      cat:  "Music",
      q:    "Famous Tswana musician known for 'Korobela' is?",
      opts: ["Mahlathini", "Oliver Mtukudzi", "Dr. Mageba", "Mpharanyana"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Music",
      q:    "Traditional Tswana music often features which instrument?",
      opts: ["Marimba", "Segaba (traditional violin)", "Djembe", "Mbira"],
      ans:  1,
      img:  "public/tswana-photos/segaba.jpg"
    },
    {
      cat:  "Music",
      q:    "The Tswana praise song performed at important ceremonies is called?",
      opts: ["Serankure", "Maboko", "Dipina", "Makgotla"],
      ans:  1,
      img:  null
    },

    /* GEOGRAPHY */
    {
      cat:  "Geography",
      q:    "The capital city of Botswana, which is predominantly Tswana, is?",
      opts: ["Lobatse", "Francistown", "Gaborone", "Maun"],
      ans:  2,
      img:  "public/tswana-photos/gaborone.jpg"
    },
    {
      cat:  "Geography",
      q:    "The Tswana people are concentrated in which South African region?",
      opts: ["Bushveld", "Highveld", "Lowveld", "West Rand"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Geography",
      q:    "The Kalahari Desert covers much of which Tswana-inhabited area?",
      opts: ["Eastern Cape", "Botswana", "KwaZulu-Natal", "Limpopo"],
      ans:  1,
      img:  "public/tswana-photos/kalahari-desert.jpg"
    },

    /* FOOD */
    {
      cat:  "Food",
      q:    "What is 'Pap' (Bogobe) in Tswana cuisine?",
      opts: [
        "A fermented drink",
        "Maize porridge - staple food",
        "A meat stew",
        "A type of bread"
      ],
      ans:  1,
      img:  "public/tswana-photos/bogobe.jpg"
    },
    {
      cat:  "Food",
      q:    "'Morogo' is a traditional Tswana dish made from?",
      opts: ["Maize", "Wild spinach/leafy greens", "Beans", "Sour milk"],
      ans:  1,
      img:  "public/tswana-photos/morogo.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'Mageu' (or Magou) in Tswana culture?",
      opts: [
        "A fermented maize drink",
        "A type of bread",
        "A meat dish",
        "A vegetable stew"
      ],
      ans:  0,
      img:  "public/tswana-photos/mageu.jpg"
    },

    /* PEOPLE & NOTABLE */
    {
      cat:  "Notable People",
      q:    "Sir Seretse Khama was the first President of which country?",
      opts: ["South Africa", "Zimbabwe", "Botswana", "Namibia"],
      ans:  2,
      img:  "public/tswana-photos/seretse-khama.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Dr. Ruth Mompati was a prominent Tswana anti-apartheid activist and?",
      opts: ["Nobel Peace Prize winner", "First woman mayor in SA", "Musician", "Scientist"],
      ans:  1,
      img:  "public/tswana-photos/ruth-mompati.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Quett Masire served as the second President of which country?",
      opts: ["South Africa", "Zambia", "Botswana", "Lesotho"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Notable People",
      q:    "Which famous Tswana musician sang 'Africa' and was part of Mango Groove?",
      opts: ["Brenda Fassie", "Miriam Makeba", "Claire Johnston", "Yvonne Chaka Chaka"],
      ans:  2,
      img:  null
    }
  ]
};