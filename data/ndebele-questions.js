/**
 * NDEBELE (isiNdebele) QUESTIONS
 * Team Member: Michelle Mazibuko
 * 
 * 
 */

const NDEBELE_QUESTIONS = {
  name:   "Ndebele",
  lang:   "isiNdebele",
  icon:   "public/homepage/ndebele.png",  
  locked: false,
  questions: [
    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "What does 'Lotjhani' mean in isiNdebele?",
      opts: ["Goodbye", "Hello", "Thank you", "Yes"],
      ans:  1,
      img:  "public/ndebele-photos/lotjhani.png"
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in isiNdebele?",
      opts: ["Ngiyabonga", "Ngiyathokoza", "Lotjhani", "Yebo"],
      ans:  1,
      img:  "public/ndebele-photos/thank-you.jpg"
    },
    {
      cat:  "Language",
      q:    "How do you say 'Goodbye' in isiNdebele?",
      opts: ["Salakahle", "Lotjhani", "Hamba kahle", "Nisale kuhle"],
      ans:  3,
      img:  "public/ndebele-photos/lotjhani.png"
    },
  
    /* HISTORY */
    {
      cat: "History",
      q: "To which larger ethnic group do the Southern Ndebele belong?",
      opts: ["Nguni","Sotho-Tswana","Venda","Tsonga"],
      ans: 0,
      img: "public/ndebele-photos/nguni.png"
    },
    {
      cat: "History",
      q: "Who is regarded as the founder of the Southern Ndebele nation?",
      opts: ["King Musi", "King Nyabela", "King Mabhoko", "King Magoboli"],
      ans: 0,
      img: "public/ndebele-photos/king-musi.png"
    },
    {
      cat:  "History",
      q:    "The Ndebele in South Africa are primarily located in which province?",
      opts: ["Limpopo", "Gauteng", "Mpumalanga", "KwaZulu-Natal"],
      ans:  2,
      img:  "public/ndebele-photos/kwandebele.jpg"
    },
    {
      cat: "History",
      q: "In 1883 the Ndzundza Ndebele fought the Mapoch War against which group?",
      opts: ["The British Army", "The ZAR (Boer Republic) forces", "The Zulu Kingdom", "The Pedi Kingdom"],
      ans: 1,
      img: "public/ndebele-photos/mapoch-war.png"
   },

    /* TRADITION */
    {
      cat:  "Tradition",
      q:    "What are Ndebele women famous for wearing around their necks, arms, and legs?",
      opts: ["Beaded necklaces", "Brass rings (idzila)", "Feathers", "Cowrie shells"],
      ans:  1,
      img:  "public/ndebele-photos/idzila.jpg"
    },
    {
      cat:  "Tradition",
      q:    "The colorful geometric patterns painted on Ndebele houses are called?",
      opts: ["Umgwalo", "Iimbali", "Amaphepha", "Painting"],
      ans:  0,
      img: "public/ndebele-photos/umgwalo.jpg"
    },
    {
      cat:  "Tradition",
      q:    "Which traditional ceremony is important in Ndebele culture?",
      opts: ["Umhlanga", "Wedding ceremonies", "Initiation ceremonies", "Ukweshwama"],
      ans:  2,
      img:  "public/ndebele-photos/ukuwela.jpg"
    },
    {
      cat:  "Tradition",
      q:    "What does 'Ukuthomba' mean in Ndebele culture?",
      opts: ["A wedding ceremony", "A coming-of-age ritual for girls", "A harvest festival", "A prayer ritual"],
      ans:  1,
      img:  "public/ndebele-photos/iqude.png"
    },
    {
      cat: "Tradition",
      q: "What is a traditional healer called in Southern Ndebele culture?",
      opts: ["Sangoma", "Inyanga", "Isangoma", "Muthi"],
      ans: 2,
      img: "public/ndebele-photos/isangoma.jpg"
},

    /* CULTURE & ART */
    {
      cat:  "Art",
      q:    "What is the main purpose of traditional Ndebele beadwork?",
      opts: [
        "Decoration only", 
        "Communication of messages and status", 
        "Religious worship", 
        "Tourist attraction"
      ],
      ans:  1,
      img: "public/ndebele-photos/beadwork.jpg"
    },
    {
      cat: "Art",
      q: "What is an 'umseme' that Ndebele women traditionallymake?",
      opts: [
       "A traditional woven grass mat",
       "A beaded necklace",
       "A clay cooking pot",
       "A traditional drum"
       ],
       ans: 0,
       img: "public/ndebele-photos/umseme.jpg"
},
    {
      cat:  "Art",
      q:    "Ndebele beadwork patterns are known for being?",
      opts: ["Floral designs", "Geometric and symmetrical", "Animal shapes", "Abstract swirls"],
      ans:  1,
      img:  "public/ndebele-photos/beadwork.jpg"
    },
    {
      cat: "Culture",
      q: "What is the importance of clan names (izibongo) in Ndebele culture?",
      opts: [
         "They identify family lineage and ancestry",
         "They identify a person's occupation",
         "They are only used during weddings",
         "They replace surnames"
     ],
      ans: 0,
      img: "public/ndebele-photos/clan-names.jpg"
    },
    {
      cat: "Culture",
      q: "What makes Southern Ndebele culture easily recognizable around the world?",
      opts: [
         "Its colourful geometric art and beadwork",
         "Its pyramids",
         "Its snow festivals",
         "Its wooden castles"
       ],
         ans: 0,
         img: "public/ndebele-photos/ndebele-women.png"
    },

    /* MUSIC & DANCE */
    {
      cat:  "Music",
      q:    "The traditional Ndebele dance performed at ceremonies and celebrations is called?",
      opts: ["Indlamu", "Pantsula", "Ingadla", "Gumboot"],
      ans:  2,
      img:  "public/ndebele-photos/ingadla.png"
    },
    {
      cat:  "Music",
      q:    "What instrument is commonly used in Ndebele traditional music?",
      opts: ["Drum (Ingungu)", "Mbira", "Guitar", "Flute"],
      ans:  2,
      img:  "public/ndebele-photos/guitar.jpg"
    },
    {
      cat:  "Music",
      q:    "Which Southern Ndebele singer is well known for performing traditional isiNdebele music from KwaNdebele?",
      opts: ["Yvonne Chaka Chaka", "Busi Mhlongo", "Brenda Fassie", "Nothembi Mkhwebane"],
      ans:  3,
      img:  "public/ndebele-photos/nothembi.jpg"
    },

    /* GEOGRAPHY */
    {
      cat:  "Geography",
      q:    "The main Ndebele area in South Africa is known as?",
      opts: ["KwaNdebele", "Mapumalanga", "KwaZulu", "Eastern Cape"],
      ans:  0,
      img:  "public/ndebele-photos/kwandebele.jpg"
    },
   
 
    /* FOOD */
    {
      cat: "Food",
      q: "What is the name of the traditional flour porridge enjoyed by many Ndebele families?",
      opts: ["Amatlontjisi","Amasi","Ting","Mabele"],
      ans: 0,
      img: "public/ndebele-photos/amatlontjisi.jpeg"
    },


    /* NOTABLE PEOPLE & FASHION */
    {
      cat:  "Notable People",
      q:    "Which famous Ndebele artist is known worldwide for her colorful house paintings?",
      opts: ["Esther Mahlangu", "Maggie Laubser", "Irma Stern", "Mary Sibande"],
      ans:  0,
      img:  "public/ndebele-photos/esther-mahlangu.jpg"
    },
    {
      cat:  "Fashion",
      q:    "BMW famously commissioned which Ndebele artist to paint a luxury car?",
      opts: ["Esther Mahlangu", "Dr. Esther Mnguni", "Noria Mabasa", "Jackson Hlungwani"],
      ans:  0,
      img:  "public/ndebele-photos/bmw.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Who is the current reigning king of the Ndebele(Ndzundza) in South Africa?",
      opts: [
        "King Makhosoke II", 
        "King Nyabela", 
        "King Mabhoko III", 
        "King Makhosonke II"
      ],
      ans:  2,
      img:  "public/ndebele-photos/king-mabhoko-iii.png"
    },
    {
      cat:  "Culture",
      q:    "What is the traditional Ndebele marriage blanket called?",
      opts: ["Nguba", "Umbhalo", "Irhasi", "Mokorotlo"],
      ans:  1,
      img:  "public/ndebele-photos/umbhalo.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Who is the current reigning king of the Ndebele(Manala) in South Africa?",
      opts: [
        "King Makhosoke II", 
        "King Nyabela", 
        "King Mabhoko III", 
        "King Makhosonke II"
      ],
      ans:  0,
      img:  "public/ndebele-photos/king-makhosoke-ii.png"
    },
    {
      cat:  "Notable People",
      q:    "Audrey Kozwana is known for her YouTube series 'Ituthuko Yethelerina' which documents what?",
      opts: [
           "The evolution and growth stages of a young Ndebele maiden",
           "Traditional Ndebele cooking recipes",
           "The history of Ndebele house painting",
           "Ndebele wedding ceremonies"
  ],
  ans:  0,
  img:  "public/ndebele-photos/audrey-kozwana.jpg"
},
  ]
};