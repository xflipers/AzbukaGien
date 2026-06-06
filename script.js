const guests = {
  emirhanio: {
    name: "Эмирханио",
    image: "assets/emirhanio.jpg",
    description:
      "самый вонючий посетитель азбуки, гиена которых мир не видал, продаст квартиру ради фото с роналду, чемпион бутово по \"быстрые ноги люлей не получат\"",
  },
  sosedus: {
    name: "Соседус",
    image: "assets/sosedus.jpg",
    description:
      "чемпион бутово по \"это хайп пацаны\", от газ на азбуку до я ненавижу азбуку за 2.1 секунды, оптовик по покупке зелёного липтона, армани бой",
  },
  timosha: {
    name: "Просто Тимоша",
    image: "assets/timosha.jpg",
    description:
      "чемпион бутово по \"да блин, да не надо пацаны\", главный болельщик реал мадрида в истории, амбассадор кед дольче бабана, 1700 эло в шахмата",
  },
  focus: {
    name: "Данёк Фокус",
    image: "assets/danek-focus.jpg",
    description:
      "чемпион бутово по \"Пацаны, жаба давит\", фокус пушка-поло ловушка, главная гиена на азбуке, при желани попал бы в список форбс, но жаба давит",
  },
  secret: {
    name: "Секретный парень",
    image: "assets/secret-question.jpg",
    description:
      "чемпион бутово по \"я тебя ненавижу\", поло пушка- фокус ловушка, пацаны, меня попросили на фуд сити съездить, кто со мной, за бенз скидывайтесь и газ. ходят слухи, что его гаишники угощали пиццей...",
  },
};

const dialog = document.querySelector(".guest-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const closeButton = document.querySelector(".close-dialog");

document.querySelectorAll(".guest-card").forEach((card) => {
  card.addEventListener("click", () => {
    const guest = guests[card.dataset.guest];
    dialogTitle.textContent = guest.name;
    dialogDescription.textContent = guest.description;
    dialog.showModal();
  });
});

closeButton.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

const quizQuestions = [
  {
    question: "Что сильнее всего зовет тебя на подвиг?",
    options: [
      { text: "Фото с Роналду любой ценой", guest: "emirhanio" },
      { text: "Зелёный липтон оптом", guest: "sosedus" },
      { text: "Реал Мадрид в сердце", guest: "timosha" },
      { text: "Жаба давит, но красиво", guest: "focus" },
      { text: "Фуд Сити и сбор за бенз", guest: "secret" },
    ],
  },
  {
    question: "Твоя чемпионская фраза по Бутово?",
    options: [
      { text: "\"быстрые ноги люлей не получат\"", guest: "emirhanio" },
      { text: "\"это хайп пацаны\"", guest: "sosedus" },
      { text: "\"да блин, да не надо пацаны\"", guest: "timosha" },
      { text: "\"Пацаны, жаба давит\"", guest: "focus" },
      { text: "\"я тебя ненавижу\"", guest: "secret" },
    ],
  },
  {
    question: "Какой стиль ближе?",
    options: [
      { text: "Гиена, которых мир не видал", guest: "emirhanio" },
      { text: "Армани бой", guest: "sosedus" },
      { text: "Кеды дольче бабана", guest: "timosha" },
      { text: "Фокус пушка-поло ловушка", guest: "focus" },
      { text: "Поло пушка-фокус ловушка", guest: "secret" },
    ],
  },
  {
    question: "Какой уровень легендарности выбираешь?",
    options: [
      { text: "Продать квартиру ради фото", guest: "emirhanio" },
      { text: "От газ на азбуку до ненавижу азбуку за 2.1 секунды", guest: "sosedus" },
      { text: "1700 эло в шахмата", guest: "timosha" },
      { text: "Попал бы в Форбс, но жаба давит", guest: "focus" },
      { text: "Гаишники угощали пиццей", guest: "secret" },
    ],
  },
  {
    question: "Куда тебя несет судьба?",
    options: [
      { text: "К Роналду", guest: "emirhanio" },
      { text: "За зелёным липтоном", guest: "sosedus" },
      { text: "На матч Реал Мадрида", guest: "timosha" },
      { text: "В список Форбс, почти", guest: "focus" },
      { text: "На Фуд Сити", guest: "secret" },
    ],
  },
];

const quizDialog = document.querySelector(".quiz-dialog");
const quizLaunch = document.querySelector(".quiz-launch");
const closeQuizButton = document.querySelector(".close-quiz");
const restartQuizButton = document.querySelector(".restart-quiz");
const quizStep = document.querySelector(".quiz-step");
const quizResult = document.querySelector(".quiz-result");
const quizProgress = document.querySelector("#quiz-progress");
const quizTitle = document.querySelector("#quiz-title");
const quizOptions = document.querySelector("#quiz-options");
const quizResultImage = document.querySelector("#quiz-result-image");
const quizResultTitle = document.querySelector("#quiz-result-title");
const quizResultDescription = document.querySelector("#quiz-result-description");

let currentQuestion = 0;
let quizScores = {};

function startQuiz() {
  currentQuestion = 0;
  quizScores = Object.fromEntries(Object.keys(guests).map((guest) => [guest, 0]));
  quizResult.hidden = true;
  quizStep.hidden = false;
  renderQuestion();
  quizDialog.showModal();
}

function renderQuestion() {
  const question = quizQuestions[currentQuestion];
  quizProgress.textContent = `${currentQuestion + 1} / ${quizQuestions.length}`;
  quizTitle.textContent = question.question;
  quizOptions.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option.text;
    button.addEventListener("click", () => chooseAnswer(option.guest));
    quizOptions.append(button);
  });
}

function chooseAnswer(guestKey) {
  quizScores[guestKey] += 1;
  currentQuestion += 1;

  if (currentQuestion < quizQuestions.length) {
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  const winnerKey = Object.entries(quizScores).sort((a, b) => b[1] - a[1])[0][0];
  const winner = guests[winnerKey];

  quizStep.hidden = true;
  quizResult.hidden = false;
  quizResultImage.src = winner.image;
  quizResultImage.alt = winner.name;
  quizResultTitle.textContent = `Поздравляем! Вы-${winner.name}.`;
  quizResultDescription.textContent = winner.description;
}

quizLaunch.addEventListener("click", startQuiz);
closeQuizButton.addEventListener("click", () => quizDialog.close());
restartQuizButton.addEventListener("click", startQuiz);

quizDialog.addEventListener("click", (event) => {
  if (event.target === quizDialog) {
    quizDialog.close();
  }
});
