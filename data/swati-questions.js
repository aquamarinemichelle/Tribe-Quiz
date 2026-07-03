/**
 * SWATI (siSwati) QUESTIONS
 * Team Member: Michelle Mazibuko
 * 
 */

const SWATI_QUESTIONS = {
  name:   "Swati",
  lang:   "siSwati",
  icon:   "public/homepage/swati.png",
  locked: false, 
  questions: [
    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "What does 'Sawubona' mean in siSwati?",
      opts: ["Goodbye", "Hello / I see you", "Thank you", "How are you?"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in siSwati?",
      opts: ["Siyabonga", "Ngiyabonga", "Yebo", "Sala kahle"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Yebo' mean in siSwati?",
      opts: ["No", "Yes", "Please", "Goodbye"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'How are you?' in siSwati?",
      opts: ["Unjani?", "Kunjani?", "Sawubona", "Ngiyaphila"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Sala kahle' mean in siSwati?",
      opts: ["Hello", "Goodbye (stay well)", "Thank you", "Yes"],
      ans:  1,
      img:  null
    },

    /* HISTORY */
    {
      cat:  "History",
      q:    "Who was the first king of the Swazi nation (Eswatini)?",
      opts: ["King Sobhuza I", "King Mswati II", "King Ngwane III", "King Sobhuza II"],
      ans:  2,
      img:  "public/swati-king.png"
    },
    {
      cat:  "History",
      q:    "The Swazi nation is named after which king?",
      opts: ["King Mswati II", "King Sobhuza I", "King Ngwane III", "King Mbandzeni"],
      ans:  0,
      img:  "public/swati-phots/king-sobhuza.jpg"
    },
    {
      cat:  "History",
      q:    "Eswatini (formerly Swaziland) gained independence from Britain in which year?",
      opts: ["1960", "1968", "1975", "1980"],
      ans:  1,
      img:  "public/swati-photos/swati-flag.jpg"
    },
    {
      cat:  "History",
      q:    "Who was the longest-reigning monarch in Swazi history (reigned 82 years)?",
      opts: ["King Mswati II", "King Sobhuza II", "King Ngwane III", "King Mswati III"],
      ans:  1,
      img:  null
    },
    {
      cat:  "History",
      q:    "What was Eswatini officially renamed from in 2018?",
      opts: ["Swaziland", "Ngwane", "KaNgwane", "Swati Nation"],
      ans:  0,
      img:  "public/swati-photos/swaziland.jpg"
    },

    /* TRADITION & CEREMONIES */
    {
      cat:  "Tradition",
      q:    "What is the famous Reed Dance ceremony in Eswatini called?",
      opts: ["Umhlanga", "Incwala", "Umchwasho", "Lusekwane"],
      ans:  0,
      img:  "public/umhlanga-swati.png"
    },
    {
      cat:  "Tradition",
      q:    "The Incwala ceremony is also known as what?",
      opts: ["Kingship Ceremony", "First Fruits Ceremony", "Reed Dance", "Harvest Festival"],
      ans:  1,
      img:  "public/swati-photos/incwala.jpg"
    },
    {
      cat:  "Tradition",
      q:    "During the Umhlanga (Reed Dance), what do young Swati women present to the Queen Mother?",
      opts: ["Flowers", "Reeds", "Beads", "Traditional beer"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Tradition",
      q:    "What is 'Lusekwane' in Swati tradition?",
      opts: [
        "A sacred tree used in Incwala", 
        "A type of beadwork", 
        "A wedding ceremony", 
        "A traditional dance"
      ],
      ans:  0,
      img:  null
    },
    {
      cat:  "Tradition",
      q:    "The Swati chastity ceremony called 'Umchwasho' involves what?",
      opts: [
        "Young women wearing wool tassels", 
        "Men wearing special beads", 
        "Both men and women", 
        "Only married couples"
      ],
      ans:  0,
      img:  "public/umchwasho.png"
    },

    /* CULTURE & ROYALTY */
    {
      cat:  "Culture",
      q:    "Who is the current reigning king of Eswatini (as of 2024)?",
      opts: ["King Sobhuza II", "King Mswati III", "King Makhosetive", "King Ngwane V"],
      ans:  1,
      img:  "public/king-mswati.png"
    },
    {
      cat:  "Culture",
      q:    "What is the Swati Queen Mother called?",
      opts: ["Ndlovukati", "Indlovukazi", "Inkosikazi", "Mama waTinkhosi"],
      ans:  0,
      img:  "public/swati-photos/queen-mother.jpg"
    },
    {
      cat:  "Culture",
      q:    "The Swati philosophy 'Umuntfu ngumuntfu ngabantfu' means?",
      opts: [
        "A person is a person through people", 
        "Work hard for your family", 
        "Respect your king", 
        "Unity is strength"
      ],
      ans:  0,
      img:  "public/swati-photos/ubuntu.jpg"
    },
    {
      cat:  "Culture",
      q:    "What is the traditional Swati homestead called?",
      opts: ["Umuzi", "Kraal", "Lobamba", "Sibaya"],
      ans:  0,
      img:  "public/swati-photos/homestead.jpg"
    },
    {
      cat:  "Culture",
      q:    "The capital city of Eswatini (royal and legislative) is?",
      opts: ["Mbabane", "Lobamba", "Manzini", "Siteki"],
      ans:  1,
      img:  null
    },

    /* MUSIC & DANCE */
    {
      cat:  "Music",
      q:    "What is the traditional Swati dance performed at the Incwala ceremony?",
      opts: ["Siswati dance", "Umhlanga dance", "Sibhaca", "Ingoma"],
      ans:  2,
      img:  "public/sibhaca-dance.png"
    },
    {
      cat:  "Music",
      q:    "Which instrument is central to Swati traditional music?",
      opts: ["Drum (Sigubhu)", "Mbira", "Guitar", "Flute"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Music",
      q:    "What is the name of the Swati royal war dance?",
      opts: ["Indlamu", "Sibhaca", "Umchwasho", "Siswati"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Music",
      q:    "Modern Swati music genre influenced by South African Kwaito is called?",
      opts: ["Swaito", "Amapiano", "Gqom", "Siswati pop"],
      ans:  0,
      img:  null
    },

    /* GEOGRAPHY */
    {
      cat:  "Geography",
      q:    "Eswatini is landlocked and completely surrounded by which country?",
      opts: ["South Africa", "Mozambique", "Both South Africa and Mozambique", "Zimbabwe"],
      ans:  2,
      img:  "public/southafrica-moz.jpg"
    },
    {
      cat:  "Geography",
      q:    "What is the largest city in Eswatini?",
      opts: ["Mbabane", "Lobamba", "Manzini", "Nhlangano"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Geography",
      q:    "Eswatini is divided into how many administrative regions?",
      opts: ["2", "4", "6", "8"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Geography",
      q:    "The famous cultural village of Swazi people is located in?",
      opts: ["Mantenga", "Lobamba", "Ezulwini Valley", "Mbabane"],
      ans:  0,
      img:  "public/swati-photos/mantenga.jpg"
    },

    /* FOOD & ATTIRE */
    {
      cat:  "Food",
      q:    "What is the staple food in Swati cuisine?",
      opts: ["Pap (mealie-meal porridge)", "Rice", "Bread", "Potatoes"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'Emasi' in Swati culture?",
      opts: ["Fermented milk", "Traditional beer", "Meat stew", "Maize porridge"],
      ans:  0,
      img:  "public/swati-photos/emasi.jpg"
    },
    {
      cat:  "Food",
      q:    "Traditional Swati beer is called?",
      opts: ["Umqombothi", "Tjwala", "Amasi", "Utshwala"],
      ans:  3,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'Sishwala'?",
      opts: ["Thick porridge", "Thin porridge", "Meat dish", "Vegetable relish"],
      ans:  0,
      img:  null
    },

    /* NOTABLE PEOPLE */
    {
      cat:  "Notable People",
      q:    "Who is known as the 'Mother of the Nation' in Eswatini?",
      opts: ["Queen Ntombi", "Queen Mother Ndlovukati", "Princess Sikhanyiso", "Queen LaMatsebula"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Notable People",
      q:    "Which famous Swati gospel singer is known internationally?",
      opts: ["Dr. Rebecca Malope", "Lundi Tyamara", "Bheki Mseleku", "Pastor Nomathemba"],
      ans:  0,
      img:  "public/swati-photos/rebecca-malope.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Who is Princess Sikhanyiso of Eswatini known for?",
      opts: [
        "Being a rapper and Royal Princess", 
        "Being a traditional healer", 
        "Being a politician", 
        "Being a fashion designer"
      ],
      ans:  0,
      img:  "public/swati-photos/sikhanyiso.jpg"
    },
    {
      cat:  "Culture",
      q:    "What is 'Ligugu' in Swati culture?",
      opts: ["Traditional skirt", "Beaded necklace", "Honor/Pride", "Ceremonial shield"],
      ans:  2,
      img:  "public/swati-photos/pride.jpg"
    },
  ]
};