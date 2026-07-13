/**
 * VENDA CULTURE QUESTIONS
 * Covers Tshivenḓa language, Venda history, traditions, and food.
 * The Venda people (VhaVenḓa) are primarily found in Limpopo, South Africa.
 * Zinhle Michelle Mazibuko.
 */

const VENDA_QUESTIONS = {
  name:   "Venda",
  lang:   "Tshivenḓa",
  icon:   "public/homepage/vhenda.png",
  locked: false,
  questions: [

    /* ── LANGUAGE ── */
    {
      cat:  "Language",
      q:    "What is the Tshivenḓa word for 'Hello' or 'Good day'?",
      opts: ["Ndaa", "Dankie", "Sawubona", "Dumela"],
      ans:  0,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Vhuthu' mean in Tshivenḓa?",
      opts: ["War", "Humanity / Personhood", "Rain", "Fire"],
      ans:  1,
      img:  "public/venda-photos/vhuthu.png"
    },
    {
      cat:  "Language",
      q:    "How do you say 'Thank you' in Tshivenḓa?",
      opts: ["Ndo livhuwa", "Ndaa", "Ndi fhano", "Vho da"],
      ans:  0,
      img:  "public/venda-photos/thank-you.jpg"
    },
    {
      cat:  "Language",
      q:    "Tshivenḓa belongs to which language family?",
      opts: ["Germanic", "Bantu", "Khoisan", "Romance"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What does 'Ndi a ni funa' mean in Tshivenḓa?",
      opts: ["I am hungry", "I love you", "I am going home", "Good morning"],
      ans:  1,
      img:  null
    },
    {
      cat:  "Language",
      q:    "What is the Tshivenḓa word for water?",
      opts: ["Mufhiso", "Maḓi", "Mulilo", "Muya"],
      ans:  1,
      img:  "public/venda-photos/water.jpg"
    },
    {
      cat:  "Language",
      q:    "In which South African province is Tshivenḓa primarily spoken?",
      opts: ["Gauteng", "KwaZulu-Natal", "Limpopo", "Western Cape"],
      ans:  2,
      img:  "public/venda-photos/limpopo.png"
    },

    /* ── HISTORY ── */
    {
      cat:  "History",
      q:    "The VhaVenḓa people are believed to have migrated from which region before settling in present-day Limpopo?",
      opts: ["West Africa", "Central Africa (Great Lakes region)", "North Africa", "Southern coastal areas"],
      ans:  1,
      img:  "public/venda-photos/central-africa.jpg"
    },
    {
      cat:  "History",
      q:    "What was the Kingdom of Venda?",
      opts: [
        "A pre-colonial Venda kingdom that existed in the Soutpansberg mountains",
        "A British colonial territory",
        "A Zulu sub-kingdom",
        "A trading empire based on the coast"
      ],
      ans:  0,
      img:  "public/venda-photos/kingdom-venda.jpg"
    },
    {
      cat:  "History",
      q:    "Who is considered the founding ancestor/king of the VhaVenḓa people?",
      opts: ["Shaka", "Dimbanyika", "Tshivhase", "Makhado"],
      ans:  1,
      img:  "public/venda-photos/dimbanyika.png"
    },
    {
      cat:  "History",
      q:    "King Makhado is remembered in Venda history for what reason?",
      opts: [
        "Signing a peace treaty with the British",
        "Successfully resisting Boer settlers in the Soutpansberg",
        "Building the first Venda school",
        "Introducing Christianity to the Venda"
      ],
      ans:  1,
      img:  "public/venda-photos/king-makhado.png"
    },
    {
      cat:  "History",
      q:    "The Venda homeland during apartheid was known as?",
      opts: ["Bophuthatswana", "Transkei", "Venda", "Gazankulu"],
      ans:  2,
      img:  "public/venda-photos/venda-homeland.png"
    },
    {
      cat:  "History",
      q:    "Where is the Thulamela archaeological site, linked to ancient Venda history, located?",
      opts: [
        "Drakensberg, KwaZulu-Natal",
        "Kruger National Park, Limpopo",
        "Table Mountain, Western Cape",
        "Pilanesberg, North West"
      ],
      ans:  1,
      img:  "public/venda-photos/thulamela.jpg"
    },
    {
      cat:  "History",
      q:    "The Venda people are closely related culturally and linguistically to which other group across the border?",
      opts: ["Shona people of Zimbabwe", "Zulu people", "Xhosa people", "Sotho people"],
      ans:  0,
      img:  "public/venda-photos/venda-people.jpg"
    },

    /* ── TRADITIONS ── */
    {
      cat:  "Traditions",
      q:    "What is the 'Domba' dance?",
      opts: [
        "A war dance performed by Venda men",
        "A sacred python dance performed by young Venda women as part of initiation",
        "A harvest celebration dance",
        "A funeral ceremony dance"
      ],
      ans:  1,
      img:  "public/venda-photos/domba-dance.jpg"
    },
    {
      cat:  "Traditions",
      q:    "The Venda are renowned for their skill in which art form?",
      opts: ["Beadwork", "Wood carving", "Sand painting", "Tapestry weaving"],
      ans:  1,
      img:  "public/venda-photos/wood-carving.jpg"
    },
    {
      cat:  "Traditions",
      q:    "What is the sacred 'Tshikona' in Venda culture?",
      opts: [
        "A type of food",
        "A national dance performed with pipes, considered the most important Venda musical tradition",
        "A rain-making ritual",
        "A type of clay pot"
      ],
      ans:  1,
      img:  "public/venda-photos/tshikona.jpg"
    },
    {
      cat:  "Traditions",
      q:    "What is Lake Fundudzi significant for in Venda culture?",
      opts: [
        "It is a major fishing lake",
        "It is a sacred lake associated with ancestral spirits and the python god",
        "It is the site of the first Venda school",
        "It is a popular tourist resort"
      ],
      ans:  1,
      img:  "public/venda-photos/lake-fundudzi.png"
    },
    {
      cat:  "Traditions",
      q:    "What does 'u hulela' mean when approaching Lake Fundudzi?",
      opts: [
        "To swim across the lake",
        "A respectful greeting ritual — turning your back and bending forward to show reverence",
        "To throw offerings into the water",
        "To sing a prayer song"
      ],
      ans:  1,
      img:  "public/venda-photos/lake-fundudzi-ritual.png"
    },
    {
      cat:  "Traditions",
      q:    "Venda women are well known for making which type of craft?",
      opts: ["Grass baskets and pottery", "Silk garments", "Iron jewellery", "Leather sandals"],
      ans:  0,
      img:  "public/venda-photos/venda-pottery.jpg"
    },
    {
      cat:  "Traditions",
      q:    "What is the 'Murundu' in Venda tradition?",
      opts: [
        "A male initiation ceremony",
        "A type of musical instrument",
        "A traditional court/gathering of elders",
        "A type of traditional dress"
      ],
      ans:  0,
      img:  "public/venda-photos/murundu.jpg"
    },
    {
      cat:  "Traditions",
      q:    "The Venda people traditionally believe in a god known as?",
      opts: ["Modimo", "Raluvhimba", "uNkulunkulu", "Inkosi yezulu"],
      ans:  1,
      img:  null
    },

    /* ── FOOD ── */
    {
      cat:  "Food",
      q:    "What is 'Tshidzimba', a traditional Venda dish?",
      opts: [
        "A wild spinach and peanut stew",
        "A fermented milk drink",
        "A type of dried meat",
        "A sweet bean pudding"
      ],
      ans:  0,
      img:  "public/venda-photos/tshidzimba.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'Mutuku', a popular Venda staple?",
      opts: ["A thick porridge made from millet or sorghum", "A grilled fish dish", "A type of soup", "A fried dough snack"],
      ans:  0,
      img:  "public/venda-photos/mutuku.png"
    },
    {
      cat:  "Food",
      q:    "What traditional Venda drink is made from fermented millet or sorghum?",
      opts: ["Mahewu", "Ginger beer", "Umqombothi", "Mageu"],
      ans:  0,
      img:  "public/venda-photos/mahewu.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'Mufodi' in Venda cuisine?",
      opts: [
        "A type of wild caterpillar (mopane worm) eaten as a protein-rich snack",
        "A type of bread",
        "A vegetable curry",
        "A smoked fish"
      ],
      ans:  0,
      img:  "public/venda-photos/mopane-worms.jpg"
    },
    {
      cat:  "Food",
      q:    "Venda people are known for growing and eating which fruit that is also made into beer?",
      opts: ["Marula", "Baobab", "Morula and Marula", "Mango"],
      ans:  2,
      img:  "public/venda-photos/marula.jpg"
    },
    {
      cat:  "Food",
      q:    "What is 'Dzikungo', traditionally eaten during celebrations in Venda?",
      opts: [
        "Slaughtered goat or cow meat shared communally",
        "A sweet rice pudding",
        "Deep fried vegetables",
        "Dried fish stew"
      ],
      ans:  0,
      img: "public/venda-photos/dzikungo.jpg"
    },
    {
      cat:  "Food",
      q:    "Which grain is most traditionally associated with Venda cooking and brewing?",
      opts: ["Maize only", "Wheat", "Sorghum and millet", "Rice"],
      ans:  2,
      img:  "public/venda-photos/sorghum-millet.png"
    }

  ]
};