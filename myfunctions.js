// Mobile Menu
function toggleFunction() {
  const t = document.getElementById('links');
  if (t.style.display === 'flex') {
    t.style.display = 'none';
  } else {
    t.style.display = 'flex';
  }
}

document.getElementById('close-button').addEventListener('click', toggleFunction());
document.getElementById('menu').addEventListener('click', toggleFunction());

// Set Dom elments for popUp Window
const winElements = [
  {
    id: 1,
    cardTitle: 'Multi.Post Stories',
    cardImg: './assets/img/SnapshootPortfolio.png',
    cardImg2: './assets/img/SnapshootPortfolioWin.png',
    cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
    btn_1: 'https://alef-garrido.github.io/PortfolioAlef/',
    btn_2: 'https://github.com/alef-garrido/PortfolioAlef',
  },
  {
    id: 2,
    cardTitle: 'Multi.Post Stories',
    cardImg: './assets/img/SnapshootPortfolio.png',
    cardImg2: './assets/img/SnapshootPortfolioWin.png',
    cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
    btn_1: 'https://alef-garrido.github.io/PortfolioAlef/',
    btn_2: 'https://github.com/alef-garrido/PortfolioAlef',
  },
  {
    id: 3,
    cardTitle: 'Multi.Post Stories',
    cardImg: './assets/img/SnapshootPortfolio.png',
    cardImg2: './assets/img/SnapshootPortfolioWin.png',
    cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
    btn_1: 'https://alef-garrido.github.io/PortfolioAlef/',
    btn_2: 'https://github.com/alef-garrido/PortfolioAlef',
  },
  {
    id: 4,
    cardTitle: 'Multi.Post Stories',
    cardImg: './assets/img/SnapshootPortfolio.png',
    cardImg2: './assets/img/SnapshootPortfolioWin.png',
    cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
    btn_1: 'https://alef-garrido.github.io/PortfolioAlef/',
    btn_2: 'https://github.com/alef-garrido/PortfolioAlef',
  },
];

const generateSection = function () {
// grab HTML container
  const container = document.querySelector('#projects-display-m');

  // Populate Project Section
  for (let i = 0; i < winElements.length; i += 1) {
    const listItem = document.createElement('li');

    listItem.classList.add('recent--work--card');
    const thumbnailContainer = document.createElement('a');
    thumbnailContainer.classList.add('card--thumbnail');
    const thumbnail = document.createElement('img');
    thumbnail.src = winElements[i].cardImg;
    thumbnail.alt = 'project screenshot';

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('card--content');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = winElements[i].cardTitle;

    const cardSummary = document.createElement('p');
    cardSummary.textContent = winElements[i].cardSummary;

    const techContainer = document.createElement('ul');
    techContainer.classList.add('tech--container');

    const techItems = function () {
      winElements[i].tech.forEach((item) => {
        const techItem = document.createElement('li');
        techItem.textContent = item;
        techContainer.append(techItem);
      });
    };
    techItems();

    const cardBtn = document.createElement('button');
    cardBtn.type = 'button';
    cardBtn.classList.add('card--btn');
    cardBtn.textContent = 'See Project';

    // Mobile display
    thumbnailContainer.appendChild(thumbnail);
    contentContainer.append(cardTitle, cardSummary, techContainer, cardBtn);
    listItem.append(thumbnailContainer, contentContainer);
    container.append(listItem);
  }
};
generateSection();

// Popullate Window contaiener
for (let i = 0; i < winElements.length; i += 1) {
  const winTitle = document.getElementById('windowTitle');
  const winImg = document.getElementById('windowImage');
  const winSummary = document.getElementById('windowSummary');
  const winBtn = document.getElementById('btn1');
  const winBtn2 = document.getElementById('btn2');

  switch (winElements[i].id) {
    case 1:
      winTitle.textContent = winElements[i].cardTitle;
      winImg.src = winElements[i].cardImg2;
      winImg.alt = 'Project Thumbnail';
      winSummary.textContent = winElements[i].cardSummary;
      winBtn.href = winElements[i].btn_1;
      winBtn2.href = winElements[i].btn_2;
      break;
    case 2:
      winTitle.textContent = winElements[i].cardTitle;
      winImg.src = winElements[i].cardImg2;
      winImg.alt = 'Project Thumbnail';
      winSummary.textContent = winElements[i].cardSummary;
      winBtn.href = winElements[i].btn_1;
      winBtn2.href = winElements[i].btn_2;
      break;
    case 3:
      winTitle.textContent = winElements[i].cardTitle;
      winImg.src = winElements[i].cardImg2;
      winImg.alt = 'Project Thumbnail';
      winSummary.textContent = winElements[i].cardSummary;
      winBtn.href = winElements[i].btn_1;
      winBtn2.href = winElements[i].btn_2;
      break;
    case 4:
      winTitle.textContent = winElements[i].cardTitle;
      winImg.src = winElements[i].cardImg2;
      winImg.alt = 'Project Thumbnail';
      winSummary.textContent = winElements[i].cardSummary;
      winBtn.href = winElements[i].btn_1;
      winBtn2.href = winElements[i].btn_2;
      break;
    default:
      winTitle.textContent = winElements[i].cardTitle;
      winImg.src = winElements[i].cardImg2;
      winImg.alt = 'Project Thumbnail';
      winSummary.textContent = winElements[i].cardSummary;
      winBtn.href = winElements[i].btn_1;
      winBtn2.href = winElements[i].btn_2;
  }
}

// PopUp Window display
const displayPopUp = () => {
  const window = document.querySelector('.card-hidden');
  if (window.style.display === 'flex') {
    window.style.display = 'none';
  } else {
    window.style.display = 'flex';
  }
};

const display = function (e) {
  const winBtns = document.querySelectorAll('.card--btn');
  const arrBtns = Array.from(winBtns);
  arrBtns.forEach((b) => b.addEventListener('click', e));
  document.querySelector('#closeCard').addEventListener('click', e);
};
display(displayPopUp);

// Form Validation Task
const contactForm = document.getElementById('contact');
const inputEmail = document.querySelector('#formEmail');

const checkEmail = () => {
  let valid = false;
  const email = inputEmail.value.trim();
  if (email!== email.toLowerCase()) {
    showError(inputEmail, 'Email not valid');
  } else {
    valid = true;
  }
  return valid;
}

const showError = (input, mssg) => {
  const formField = input.parentElement;
  formField.classList.remove('success');
  formField.classList.add('error');

  const error = formField.querySelector('small');
  error.textContent = mssg;
}

inputEmail.addEventListener('input', checkEmail);
contactForm.addEventListener('submit', function(event) {
  if(checkEmail) {
    console.log(checkEmail)
    showError(inputEmail, 'Email not valid');
    event.preventDefault();
  }
});