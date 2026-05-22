# Ubuntu Quiz 🌍
### South African Culture Quiz Game

A web-based quiz game covering the 11 cultures of South Africa.  
Currently live: **Zulu** (28 questions). More cultures coming soon.

---

## Project Structure

```
zulu-quiz/
│
├── index.html          ← Main HTML (all 3 screens)
│
├── css/
│   └── style.css       ← All styling (dark African theme)
│
├── data/
│   └── questions.js    ← ALL questions for ALL cultures live here
│
└── js/
    └── game.js         ← Game logic (screens, scoring, shuffle)
```

---

## How to Run

Just open `index.html` in any browser. No server needed, no npm, no setup.

---

## How to Add a New Culture

Open `data/questions.js` and find the culture you want to unlock (e.g. `xhosa`).

1. Change `locked: false`
2. Add your questions array using this format:

```js
{
  cat:  "Language",                          // category label
  q:    "How do you say hello in IsiXhosa?", // the question
  opts: ["Molo", "Sawubona", "Dumela", "Avuxeni"], // 4 options
  ans:  0                                    // index of correct answer (0-3)
}
```

3. Save the file — the culture card will automatically unlock on the home screen!

---

## Question Categories Used
- Language
- History
- Tradition
- Culture
- Music
- Food
- Geography
- Notable People

---

## Adding New Categories
No changes needed in the JS — just set any `cat` value in your question object and it will display automatically.

---

## Planned Features
- [ ] Timer per question
- [ ] Sound effects (drum on correct answer)
- [ ] High score leaderboard (localStorage)
- [ ] Questions displayed in the chosen language (e.g. IsiZulu)
- [ ] Images per question
- [ ] Difficulty levels (Easy / Medium / Hard)

---

## Cultures Planned (South Africa's 11 Official Languages)
| Culture    | Language    | Status       |
|------------|-------------|--------------|
| Zulu       | IsiZulu     | ✅ Live       |
| Xhosa      | IsiXhosa    | 🔒 Coming soon |
| Sesotho    | Sesotho     | 🔒 Coming soon |
| Sepedi     | Sepedi      | 🔒 Coming soon |
| Tswana     | Setswana    | 🔒 Coming soon |
| Tsonga     | Xitsonga    | 🔒 Coming soon |
| Venda      | Tshivenda   | 🔒 Coming soon |
| Swati      | siSwati     | 🔒 Coming soon |
| Ndebele    | isiNdebele  | 🔒 Coming soon |
| Afrikaans  | Afrikaans   | 🔒 Coming soon |
| English    | English     | 🔒 Coming soon |
