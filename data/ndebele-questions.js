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
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in isiNdebele?",
      opts: ["Ngiyabonga", "Ngiyathokoza", "Lotjhani", "Yebo"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Iye' mean in isiNdebele?",
      opts: ["No", "Yes", "Maybe", "Hello"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "How do you say 'Goodbye' in isiNdebele?",
      opts: ["Salakahle", "Lotjhani", "Hamba kahle", "Nisale kuhle"],
      ans:  3,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Kunjani?' mean in isiNdebele?",
      opts: ["Where are you?", "How are you?", "What is your name?", "Where are you going?"],
      ans:  1,
      img:  null
    },

    /* HISTORY */
    {
      cat:  "History",
      q:    "",
      opts: ["Queen Manthatisi", "Queen Nzinga", "Queen Mkabayi", "Queen Modjadji"],
      ans:  0,
      img:  "public/ndebele-queen.png"
    },
    {
      cat:  "History",
      q:    "",
      opts: ["Xhosa", "Zulu", "Swati", "Tswana"],
      ans:  1,
      img:  null
    },
    {
      cat:  "History",
      q:    "",
      opts: ["Lobengula", "Mzilikazi", "Khama", "Moshoeshoe"],
      ans:  1,
      img:  null
    },
    {
      cat:  "History",
      q:    "The Ndebele in South Africa are primarily located in which province?",
      opts: ["Limpopo", "Gauteng", "Mpumalanga", "KwaZulu-Natal"],
      ans:  2,
      img:  "public/ndebele-photos/kwandebele.jpg"
    },
    {
      cat:  "History",
      q:    "The Ndebele kingdom in Zimbabwe was known as?",
      opts: ["Matabeleland", "Mashonaland", "Mzilikazi Kingdom", "Ndebele Nation"],
      ans:  0,
      img:  null
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
      cat:  "Tradition",
      q:    "What is the role of a 'Sangoma' in Ndebele culture?",
      opts: ["Sangoma", "Inyanga", "Isangoma", "Muthi"],
      ans:  2,
      img:  null
    },

    /* CULTURE & ART */
    {
      cat:  "Art",
      q:    "Ndebele house painting originally served what purpose?",
      opts: [
        "Decoration only", 
        "Communication of messages and status", 
        "Religious worship", 
        "Tourist attraction"
      ],
      ans:  1,
      img: null
    },
    {
      cat:  "Art",
      q:    "What colors are traditionally used in Ndebele geometric art?",
      opts: ["Red, yellow, blue, green", "Black and white only", "Brown and gold", "Purple and orange"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Art",
      q:    "Ndebele beadwork patterns are known for being?",
      opts: ["Floral designs", "Geometric and symmetrical", "Animal shapes", "Abstract swirls"],
      ans:  1,
      img:  "public/ndebele-beadwork.png"
    },
    {
      cat:  "Culture",
      q:    "The Ndebele philosophy 'Umuntu ngumuntu ngabantu' means?",
      opts: [
        "A person is a person through people", 
        "Work hard for your family", 
        "Respect your elders", 
        "Unity is strength"
      ],
      ans:  0,
      img:  null
    },
    {
      cat:  "Culture",
      q:    "Ndebele traditional blankets are called?",
      opts: ["Nguba", "Kurta", "Shuka", "Basotho blanket"],
      ans:  0,
      img:  null
    },

    /* MUSIC & DANCE */
    {
      cat:  "Music",
      q:    "The traditional Ndebele dance performed at ceremonies is called?",
      opts: ["Indlamu", "Pantsula", "Mbhage", "Gumboot"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Music",
      q:    "What instrument is commonly used in Ndebele traditional music?",
      opts: ["Drum (Ingungu)", "Mbira", "Guitar", "Flute"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Music",
      q:    "Ndebele women often sing which type of songs during beadwork sessions?",
      opts: ["War songs", "Wedding songs", "Work songs", "Lullabies"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Music",
      q:    "The energetic Ndebele warrior dance is similar to which Zulu dance?",
      opts: ["Indlamu", "Isicathamiya", "Kwaito", "Amapiano"],
      ans:  0,
      img:  null
    },

    /* GEOGRAPHY */
    {
      cat:  "Geography",
      q:    "The main Ndebele area in South Africa is known as?",
      opts: ["KwaNdebele", "Mapumalanga", "KwaZulu", "Eastern Cape"],
      ans:  0,
      img:  "public/ndebele-photos/kwandebele.jpg"
    },
    {
      cat:  "Geography",
      q:    "Which town is considered the heart of Ndebele culture in Mpumalanga?",
      opts: ["Mbombela (Nelspruit)", "Middelburg", "KwaMhlanga", "Witbank"],
      ans:  2,
      img:  null
    },
    {
      cat:  "Geography",
      q:    "",
      opts: ["Bronkhorstspruit", "Pretoria", "Johannesburg", "Botshabelo"],
      ans:  3,
      img:  null
    },
    {
      cat:  "Geography",
      q:    "Which UNESCO World Heritage site contains Ndebele cultural heritage?",
      opts: [
        "Robben Island", 
        "Mapungubwe", 
        "Richtersveld", 
        "iSimangaliso Wetland Park"
      ],
      ans:  1,
      img:  null
    },

    /* FOOD */
    {
      cat:  "Food",
      q:    "What is the staple food of the Ndebele people?",
      opts: ["Pap (mealie-meal porridge)", "Rice", "Bread", "Potatoes"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'Umnqombothi' in Ndebele culture?",
      opts: ["Maize porridge", "Traditional beer", "Meat stew", "Soured milk"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'Inyama yomhluzingwane'?",
      opts: ["Grilled chicken", "Traditional braai meat", "Dried meat", "Stewed vegetables"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Food",
      q:    "What is 'Amasi' in Ndebele culture?",
      opts: [
        "Fermented milk", 
        "Sorghum beer", 
        "Maize porridge", 
        "Pumpkin leaves"
      ],
      ans:  0,
      img:  null
    },

    /* NOTABLE PEOPLE & FASHION */
    {
      cat:  "Notable People",
      q:    "Which famous Ndebele artist is known worldwide for her colorful house paintings?",
      opts: ["Esther Mahlangu", "Maggie Laubser", "Irma Stern", "Mary Sibande"],
      ans:  0,
      img:  "public/esther-mahlangu.png"
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
  ]
};