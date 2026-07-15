/**
 * TSONGA (Xitsonga) QUESTIONS
 * Team Member: [Your Name]
 */

const TSONGA_QUESTIONS = {
  name:   "Tsonga",
  lang:   "Xitsonga",
  icon:   "public/homepage/tsonga.png",
  locked: false,
  questions: [
    /* LANGUAGE */
    {
      cat:  "Language",
      q:    "What does 'Avuxeni' mean in Xitsonga?",
      opts: ["Goodbye", "Hello/Good morning", "Thank you", "How are you?"],
      ans:  1,
      img:  "public/tsonga-photos/avuxeni.png"
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in Xitsonga?",
      opts: ["Inkomu", "Dumela", "Ndza khensa", "Siyabonga"],
      ans:  2,
      img:  "public/tsonga-photos/thank-you.jpg"
    },
    {
      cat:  "Language",
      q:    "How do you say 'Goodbye' in Xitsonga (to someone staying)?",
      opts: ["Sala kahle", "Hamba kahle", "Avuxeni", "Rivoningo"],
      ans:  0,
      img:  "public/tsonga-photos/tsonga-goodbye.png"
    },

    /* HISTORY */
    {
      cat:  "History",
      q:    "The Tsonga people primarily inhabit which countries?",
      opts: ["South Africa only", "Mozambique and South Africa", "Zimbabwe only", "Botswana and Namibia"],
      ans:  1,
      img:  "public/tsonga-photos/tsonga-map.jpg"
    },
    {
      cat:  "History",
      q:    "The Tsonga people are historically descendants of which larger group?",
      opts: ["Nguni", "Sotho-Tswana", "Shangaan/Tsonga", "Venda"],
      ans:  2,
      img:  "public/tsonga-photos/shangaan.jpg"
    },
    {
      cat:  "History",
      q:    "Which powerful leader incorporated Tsonga groups into the Gaza Empire?",
      opts: ["Shaka Zulu", "Moshoshoe", "Soshangane", "Mzilikazi"],
      ans:  2,
      img:  "public/tsonga-photos/soshangane.jpg"
    },
    {
      cat:  "History",
      q:    "Which South African province has the largest Tsonga population?",
      opts: ["Gauteng", "Mpumalanga", "Limpopo", "KwaZulu-Natal"],
      ans:  2,
      img:  "public/tsonga-photos/limpopo-province.jpg"
    },

    /* TRADITION */
    {
      cat:  "Tradition",
      q:    "The traditional Tsonga wedding ceremony is called?",
      opts: ["Mabogo", "Lobola", "Chikweru", "Bogadi"],
      ans:  2,
      img:  "public/tsonga-photos/tsonga-wedd.jpg"
    },
    {
      cat:  "Tradition",
      q:    "What is 'Lobola' (Lovola) in Tsonga culture?",
      opts: [
        "A harvest festival",
        "Bride wealth paid by the groom's family",
        "A coming-of-age ceremony",
        "An ancestral worship ritual"
      ],
      ans:  1,
      img:  "public/tsonga-photos/lobola.jpg"
    },
    {
      cat:  "Tradition",
      q:    "The Tsonga initiation school for young men is called?",
      opts: ["Khomba", "Matimba", "Ka Xidziso", "Mghunda"],
      ans:  1,
      img:  "public/tsonga-photos/tsonga-initiation.png"
    },
    {
      cat:  "Tradition",
      q:    "The Tsonga initiation school for young women is called?",
      opts: ["Khomba", "Matimba", "Xidziso", "Mghunda"],
      ans:  0,
      img:  "public/tsonga-photos/girls.jpg"
    },

    /* CULTURE */
    {
      cat:  "Culture",
      q:    "The traditional Tsonga dance performed at weddings and ceremonies is called?",
      opts: ["Xibelani", "Indlamu", "Pantsula", "Mokorotlo"],
      ans:  0,
      img:  "public/tsonga-photos/xibelani-dance.jpg"
    },
    {
      cat:  "Culture",
      q:    "The Xibelani dance is famously performed with what accessory?",
      opts: ["Beaded necklace", "Straw skirt", "Animal skin", "Feather headdress"],
      ans:  1,
      img:  "public/tsonga-photos/straw-skirt.jpg"
    },
    {
      cat:  "Culture",
      q:    "The Tsonga traditional dwelling is called?",
      opts: ["Rondavel", "Ntanga", "Yindlu", "Xivala"],
      ans:  2,
      img:  "public/tsonga-photos/yindlu.jpg"
    },
    {
      cat:  "Culture",
      q:    "What is the Tsonga concept of respect and proper behavior called?",
      opts: ["Ubuntu", "Xixima", "Botho", "Mensen"],
      ans:  1,
      img:  "public/tsonga-photos/xixima.jpg"
    },

    /* MUSIC & ARTS */
    {
      cat:  "Music",
      q:    "The traditional Tsonga instrument similar to a xylophone is called?",
      opts: ["Mbira", "Timila", "Xipendana", "Marimba"],
      ans:  2,
      img:  "public/tsonga-photos/xipendana.jpg"
    },
    {
      cat:  "Music",
      q:    "Famous Tsonga musician known for 'Hi Laveka N'wina' and 'Xigubu' is?",
      opts: ["Thomas Chauke", "Penny Penny", "Joe Shirimani", "General Muzka"],
      ans:  0,
      img:  "public/tsonga-photos/thomas-chauke.jpg"
    },
    {
      cat:  "Music",
      q:    "Which South African music genre originated from Tsonga culture?",
      opts: ["Kwaito", "Shangaan Electro", "Amapiano", "Mbaqanga"],
      ans:  1,
      img:  "public/tsonga-photos/shangaaan-electro.jpg"
    },
    {
      cat:  "Music",
      q:    "The Tsonga drum often used in traditional ceremonies is called?",
      opts: ["Ngoma", "Xigubu", "Djembe", "Bodu"],
      ans:  1,
      img:  "public/tsonga-photos/xigubu-drum.jpg"
    },

    /* GEOGRAPHY */
    {
      cat:  "Geography",
      q:    "The Tsonga people are concentrated in which region of South Africa?",
      opts: ["Lowveld (Mpumalanga/Limpopo)", "Highveld", "Karoo", "West Coast"],
      ans:  0,
      img:  "public/tsonga-photos/lowveld.jpg"
    },
    {
      cat:  "Geography",
      q:    "In Mozambique, Tsonga people are primarily found in which province?",
      opts: ["Maputo Province", "Gaza Province", "Inhambane", "Nampula"],
      ans:  1,
      img:  "public/tsonga-photos/mozambique-prov.jpg"
    },
    {
      cat:  "Geography",
      q:    "The Kruger National Park borders which Tsonga-populated area?",
      opts: ["Eastern Cape", "Mpumalanga", "KwaZulu-Natal", "North West"],
      ans:  1,
      img:  "public/tsonga-photos/kruger-park.jpg"
    },

    /* FOOD */
    {
      cat:  "Food",
      q:    "What is 'Vuswa' (or Xipapa) in Tsonga cuisine?",
      opts: [
        "A fermented drink",
        "Maize porridge - staple food",
        "A meat stew",
        "A type of bread"
      ],
      ans:  1,
      img:  "public/tsonga-photos/vuswa.jpg"
    },
    {
      cat:  "Food",
      q:    "'Xigugu' is a traditional Tsonga dish made from?",
      opts: ["Maize", "Pumpkin and peanuts", "Beans", "Sour milk"],
      ans:  1,
      img:  "public/tsonga-photos/xigugu.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'Mageu' (Mahleu) in Tsonga culture?",
      opts: [
        "A fermented maize drink",
        "A type of bread",
        "A meat dish",
        "A vegetable stew"
      ],
      ans:  0,
      img:  "public/tsonga-photos/mageu.jpg"
    },

    /* PEOPLE & NOTABLE */
    {
      cat:  "Notable People",
      q:    "Which famous Tsonga footballer captained Orlando Pirates and Bafana Bafana?",
      opts: ["Lucas Radebe", "Benni McCarthy", "Teko Modise", "Lucky Lekgwathi"],
      ans:  3,
      img:  "public/tsonga-photos/lucky-lekgwathi.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Dr. Nkosazana Dlamini-Zuma, who has Tsonga heritage, served as?",
      opts: ["President of South Africa", "AU Commission Chairperson", "UN Secretary General", "IMF Director"],
      ans:  1,
      img:  "public/tsonga-photos/nkosazana.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Penny Penny, the famous Tsonga musician, is known for his hit song?",
      opts: ["Yaa Yaa", "Shakaribho", "M'bungu", "Xihaha Xa Madoda"],
      ans:  0,
      img:  "public/tsonga-photos/penny-penny.jpg"
    },
    {
      cat:  "Notable People",
      q:    "Which Tsonga actress is known for her role as 'Mamokete' on Skeem Saam?",
      opts: ["Connie Ferguson", "Inno Sadiki", "Harriet Manamela", "Sophie Ndaba"],
      ans:  2,
      img:  "public/tsonga-photos/Harriet-manamela.jpg"
    }
  ]
};