# Tribe Quiz 
LIVE : https://tribe-quiz.onrender.com/

**Celebrate African Cultures, one question at a time.**

Tribe Quiz is a web-based trivia game that tests and grows players' knowledge of South African cultures (Zulu, Xhosa, Sesotho, Sepedi, Tswana, Tsonga, Venda, Swati, Ndebele, Afrikaans) plus Swahili, representing the wider African continent. Players sign up, pick a culture, answer 10 multiple-choice questions with supporting imagery, get instant feedback, and see how they rank against everyone else on a global leaderboard.

## Features

- **Culture selection** — choose from 11 cultures, each with its own icon and language
- **Category-based questions** — every culture's question bank is organised into categories such as Language, History, Tradition, Art, Culture, Music, Geography, Food, and Notable People
- **Image-supported questions** — each question is paired with a relevant photo or illustration
- **Multiple choice with instant feedback** — pick an answer and immediately see if it was correct
- **Timed rounds** — a visual countdown timer keeps each question fast-paced
- **Scoring & results screen** — 10 points per correct answer, a final score out of 10, a medal-style rating (e.g. "Excellent!"), and a full question-by-question breakdown
- **Authentication** — sign up / sign in with email & password or Google, powered by Supabase Auth
- **Global leaderboard** — see top scores across all cultures, filterable by individual culture (Zulu, Xhosa, Sesotho, Sepedi, Tswana, Swati, Ndebele, etc.)
- **Locked / coming soon cultures** — the data layer gracefully handles cultures that haven't been written yet, so new languages can be added without breaking the app
- **Responsive design** — works across desktop and mobile, with a dedicated mobile navigation menu

## How It Works

1. **Sign up or sign in** using email/password or Google.
2. **Choose a culture** from the home screen grid.
3. **Answer 10 questions** — each shows a category, an image, and four possible answers.
4. **Get instant feedback** after every answer (correct / incorrect), plus a running score and countdown timer.
5. **View your results** — your score out of 10, a rating message ("Excellent!", "Good effort, keep learning!", etc.), and a breakdown of every question.
6. **Climb the leaderboard** — your score is saved and ranked against other players, both overall and per culture.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, vanilla JavaScript |
| Auth & Backend | [Supabase](https://supabase.com) (Auth + Postgres) |
| Database | PostgreSQL with Row Level Security (RLS) |
| Fonts | Google Fonts (Cinzel, Playfair Display, Nunito) |

No frameworks, no build step. The app is pure HTML/CSS/JS on the front end, backed by Supabase for authentication, user profiles, and score storage.

## `Project Structure

```
tribe-quiz/
├── index.html                 # Home screen, quiz screen, results screen
├── auth.html                  # Sign in / sign up page
├── leaderboard.html           # Global leaderboard with culture filters
├── css/
│   ├── style.css
│   ├── leaderboard.css
│   └── timer.css
├── js/
│   ├── game.js                # Core quiz logic
│   ├── auth.js                # Supabase auth logic
│   ├── leaderboard.js         # Leaderboard fetching & rendering
│   └── supabase-config.js     # Supabase project keys
├── data/
│   ├── questions.js           # Merges every culture into one CULTURES object
│   ├── zulu-questions.js
│   ├── xhosa-questions.js
│   ├── sotho-questions.js
│   ├── sepedi-questions.js
│   ├── tswana-questions.js
│   ├── tsonga-questions.js
│   ├── venda-questions.js
│   ├── swati-questions.js
│   ├── ndebele-questions.js
│   ├── afrikaans-questions.js
│   └── swahili-questions.js
├── public/
│   ├── homepage/               # Logos & shared icons
│   └── <culture>-photos/       # Question images per culture
├── users.sql                   # `profiles` table + auto-profile trigger + RLS policies
└── leaderboard.sql              # `scores` table + RLS policies
```

## Question Bank Format

Each culture is defined as an object with a name, language, icon, lock status, and an array of questions:

```js
const NDEBELE_QUESTIONS = {
  name:   "Ndebele",
  lang:   "isiNdebele",
  icon:   "public/homepage/ndebele.png",
  locked: false,
  questions: [
    {
      cat:  "Language",
      q:    "What does 'Lotjhani' mean in isiNdebele?",
      opts: ["Goodbye", "Hello", "Thank you", "Yes"],
      ans:  1,
      img:  "public/ndebele-photos/lotjhani.png"
    },
    // ...
  ]
};
```

`data/questions.js` collects every culture into a single `CULTURES` object, and safely falls back to a `locked: true` placeholder for any culture whose file hasn't been added yet — so contributors can build out one language at a time without touching the rest of the app.

## Database Schema (Supabase)

**`profiles`** — one row per user, auto-created on sign-up via a Postgres trigger, storing their display name.

**`scores`** — one row per completed quiz attempt: `user_id`, `culture`, `score`, `total`, and a timestamp.

Both tables use **Row Level Security**:
- Any authenticated user can *read* all profiles and scores (needed for the public leaderboard).
- Users can only *insert/update* their own profile and can only *insert* their own scores.

## Roadmap

- [ ] Add more African official languages.
- [ ] Expand each culture's question bank beyond 10 questions for more replayability.
- [ ] Add difficulty levels.

## Contributing

New culture question banks are welcome! To add one:
1. Create `data/<culture>-questions.js` following the format shown above
2. Add a `<script>` tag for it in `index.html`
3. Add it to the `CULTURES` object in `data/questions.js`

## License

This project is open source, feel free to fork it and add your own African cultures.