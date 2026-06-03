/**
 * ZULU (IsiZulu) QUESTIONS
 * Team Member: Michelle Mazibuko
 */

const ZULU_QUESTIONS = {
  name:   "Zulu",
  lang:   "IsiZulu",
  icon:   "public/homepage/zulu.png",
  locked: false,
  questions: [

    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "What does 'Sawubona' mean in IsiZulu?",
      opts: ["Goodbye", "I see you / Hello", "Thank you", "Good night"],
      ans:  1,
      img:  null
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
      img:  "public/zulu-photos/sa-languages.jpg"
    },

    /* HISTORY */
    {
      cat:  "History",
      q:    "Who was the famous Zulu king that built a powerful military empire in the early 1800s?",
      opts: ["Dingane", "Cetshwayo", "Shaka Zulu", "Mpande"],
      ans:  2,
      img:  "public/zulu-photos/shaka-zulu.jpg"
    },
    {
      cat:  "History",
      q:    "The Battle of Isandlwana in 1879 was a major Zulu victory against which colonial power?",
      opts: ["Portuguese", "Dutch (Boers)", "British", "German"],
      ans:  2,
      img:  "public/zulu-photos/isandlwana.png"
    },
    {
      cat:  "History",
      q:    "King Cetshwayo was the last independent king of the Zulu. He was exiled after which war?",
      opts: ["The Anglo-Boer War", "The Anglo-Zulu War", "The Frontier Wars", "The Mfecane"],
      ans:  1,
      img:  "public/zulu-photos/anglo-zulu-war.png"
    },
    {
      cat:  "History",
      q:    "The Mfecane was a period of widespread chaos and warfare among Nguni tribes mainly caused by?",
      opts: ["Drought", "Shaka's military expansion", "British invasion", "A plague"],
      ans:  1,
      img:  "public/zulu-photos/mfecane.jpg"
    },

    /* TRADITION */
    {
      cat:  "Tradition",
      q:    "The Zulu Reed Dance ceremony is called?",
      opts: ["Umhlanga", "Ukweshwama", "Umemulo", "Ukubuyisa"],
      ans:  0,
      img:  "public/zulu-photos/umhlanga.png"
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
      img:  "zulu-photos/lobola.png"
    },
    {
      cat:  "Tradition",
      q:    "The Zulu male first-fruits ceremony where the king tastes the new harvest is called?",
      opts: ["Umhlanga", "Ukweshwama", "Lobola", "Umemulo"],
      ans:  1,
      img:  "public/zulu-photos/ukweshwama.png"
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
      img:  "zulu-photos/umemulo.jpg"
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
      img:  "public/zulu-photos/ubuntu.png"
    },
    {
      cat:  "Culture",
      q:    "Zulu women are internationally famous for making intricate colorful?",
      opts: ["Clay pottery", "Beadwork jewelry", "Wood carvings", "Woven baskets"],
      ans:  1,
      img:  "public/zulu-photos/beadwork.png"
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
      img:  "public/zulu-photos/zulu-dwelling.png"
    },

    /* MUSIC & ARTS */
    {
      cat:  "Music",
      q:    "Which a cappella vocal style originated with Zulu migrant workers and became world-famous?",
      opts: ["Kwaito", "Amapiano", "Isicathamiya", "Mbaqanga"],
      ans:  2,
      img:  "public/zulu-photos/isicathamiya.png"
    },
    {
      cat:  "Music",
      q:    "Ladysmith Black Mambazo made Isicathamiya world-famous. Which famous musician featured them on a 1986 album?",
      opts: ["Michael Jackson", "Paul Simon", "Elton John", "Bob Marley"],
      ans:  1,
      img:  "public/zulu-photos/LBM.png"
    },
    {
      cat:  "Music",
      q:    "The energetic dance performed by Zulu warriors, also used during ceremonial occasions, is called?",
      opts: ["Gumboot dance", "Indlamu", "Pantsula", "Toyi-toyi"],
      ans:  1,
      img:  "public/zulu-photos/indlamu.jpg"
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
      img:  "public/zulu-photos/kzn.jpg"
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
};