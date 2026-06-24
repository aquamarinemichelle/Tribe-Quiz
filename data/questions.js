
// Helper function to safely get culture data
function safeCulture(cultureVar, defaultName, defaultLang, defaultIcon) {
  if (cultureVar && cultureVar.questions) {
    return cultureVar;
  }
  // Return a default locked culture if file doesn't exist yet
  return {
    name: defaultName,
    lang: defaultLang,
    icon: defaultIcon,
    locked: true,
    questions: []
  };
}

const CULTURES = {
  zulu:      typeof ZULU_QUESTIONS !== 'undefined' ? ZULU_QUESTIONS : safeCulture(null, "Zulu", "IsiZulu", "🥁"),
  xhosa:     typeof XHOSA_QUESTIONS !== 'undefined' ? XHOSA_QUESTIONS : safeCulture(null, "Xhosa", "IsiXhosa", "🌊"),
  sotho:     typeof SOTHO_QUESTIONS !== 'undefined' ? SOTHO_QUESTIONS : safeCulture(null, "Sesotho", "Sesotho", "🏔️"),
  sepedi:    typeof SEPEDI_QUESTIONS !== 'undefined' ? SEPEDI_QUESTIONS : safeCulture(null, "Sepedi", "Sepedi", "🌿"),
  tswana:    typeof TSWANA_QUESTIONS !== 'undefined' ? TSWANA_QUESTIONS : safeCulture(null, "Tswana", "Setswana", "🌾"),
  tsonga:    typeof TSONGA_QUESTIONS !== 'undefined' ? TSONGA_QUESTIONS : safeCulture(null, "Tsonga", "Xitsonga", "🦁"),
  venda:     typeof VENDA_QUESTIONS !== 'undefined' ? VENDA_QUESTIONS : safeCulture(null, "Venda", "Tshivenda", "🎵"),
  swati:     typeof SWATI_QUESTIONS !== 'undefined' ? SWATI_QUESTIONS : safeCulture(null, "Swati", "siSwati", "🛡️"),
  ndebele:   typeof NDEBELE_QUESTIONS !== 'undefined' ? NDEBELE_QUESTIONS : safeCulture(null, "Ndebele", "isiNdebele", "🎨"),
  afrikaans: typeof AFRIKAANS_QUESTIONS !== 'undefined' ? AFRIKAANS_QUESTIONS : safeCulture(null, "Afrikaans", "Afrikaans", "🌻"),
  swahili:   typeof SWAHILI_QUESTIONS !== 'undefined' ? SWAHILI_QUESTIONS : safeCulture(null, "Swahili", "Kiswahili", "🏝️"),
};

// Validation helper - shows warning in console if unlocked cultures have <10 questions
(function validateQuestions() {
  console.log("🎯 Ubuntu Quiz - Loading cultures...");
  let activeCultures = 0;
  for (const [key, culture] of Object.entries(CULTURES)) {
    if (!culture.locked && culture.questions.length > 0) {
      activeCultures++;
      if (culture.questions.length < 10) {
        console.warn(`⚠️ "${culture.name}" has only ${culture.questions.length} questions. Recommended: at least 10.`);
      } else {
        console.log(`✅ "${culture.name}" is READY with ${culture.questions.length} questions!`);
      }
    } else if (!culture.locked) {
      console.log(`🔒 "${culture.name}" is locked (coming soon)`);
    }
  }
  console.log(`📊 Total active cultures: ${activeCultures}`);
})();