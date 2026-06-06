const guests = {
  emirhanio: {
    name: "Эмирханио",
    description:
      "самый вонючий посетитель азбуки, гиена которых мир не видал, продаст квартиру ради фото с роналду, чемпион бутово по \"быстрые ноги люлей не получат\"",
  },
  sosedus: {
    name: "Соседус",
    description:
      "чемпион бутово по \"это хайп пацаны\", от газ на азбуку до я ненавижу азбуку за 2.1 секунды, оптовик по покупке зелёного липтона, армани бой",
  },
  timosha: {
    name: "Просто Тимоша",
    description:
      "чемпион бутово по \"да блин, да не надо пацаны\", главный болельщик реал мадрида в истории, амбассадор кед дольче бабана, 1700 эло в шахмата",
  },
  focus: {
    name: "Данёк Фокус",
    description:
      "чемпион бутово по \"Пацаны, жаба давит\", фокус пушка-поло ловушка, главная гиена на азбуке, при желани попал бы в список форбс, но жаба давит",
  },
  secret: {
    name: "Секретный парень",
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
