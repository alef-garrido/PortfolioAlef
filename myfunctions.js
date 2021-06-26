function toggleFunction() {
  const t = document.getElementById('links');
  if (t.style.display === 'flex') {
    t.style.display = 'none';
  } else {
    t.style.display = 'flex';
  }
}

function b() {
  document.getElementById('close-button').addEventListener('click', toggleFunction());
  document.getElementById('menu').addEventListener('click', toggleFunction());
}

// Set Dom elments for popUp Window

const winElements = [
    {
      id: 1,
      cardTitle: 'Multi.Post Stories',
      cardImg: './assets/img/Snapshoot-Portfolio.png',
      cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
      btn_1:'https://alef-garrido.github.io/PortfolioAlef/',
      btn_2:'https://github.com/alef-garrido/PortfolioAlef'
    },
    {
      id: 2,
      cardTitle: 'Multi.Post Stories',
      cardImg: './assets/img/Snapshoot-Portfolio.png',
      cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
      btn_1:'https://alef-garrido.github.io/PortfolioAlef/',
      btn_2:'https://github.com/alef-garrido/PortfolioAlef'
    },
    {
      id: 3,
      cardTitle: 'Multi.Post Stories',
      cardImg: './assets/img/Snapshoot-Portfolio.png',
      cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
      btn_1:'https://alef-garrido.github.io/PortfolioAlef/',
      btn_2:'https://github.com/alef-garrido/PortfolioAlef'
    },
    {
      id: 4,
      cardTitle: 'Multi.Post Stories',
      cardImg: './assets/img/Snapshoot-Portfolio.png',
      cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
      btn_1:'https://alef-garrido.github.io/PortfolioAlef/',
      btn_2:'https://github.com/alef-garrido/PortfolioAlef'
    },
];

//Mobile 
const generateSection = function() {
  //grab HTML container
  const container = document.querySelector('#projects-display-m');
  const container_md = document.querySelector('#projects-display-d');

  //Populate Project Section
  for(let i = 0; i < winElements.length; i++) {
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

      const techItems = function() {
          winElements[i].tech.forEach((item) => {
          let techItem = document.createElement('li');
          techItem.textContent = item;
          const techLine = document.createElement('img');
          techLine.src = './assets/svg/Rectangle70.svg';
          techItem.appendChild(techLine);
          techContainer.append(techItem)
        })
      }
      techItems();

      const cardBtn = document.createElement('button');
      cardBtn.type = 'button';
      cardBtn.classList.add('card--btn');
      cardBtn.textContent = 'See Project';

      //Mobile display
      thumbnailContainer.appendChild(thumbnail);
      contentContainer.append(cardTitle, cardSummary, techContainer, cardBtn);
      listItem.append(thumbnailContainer, contentContainer);
      container.append(listItem)
      //desktop 

  }
}

generateSection();

//PopUp Window container


 for (let i = 0; i < winElements.length; i++) {
  const winTitle = document.getElementById('windowTitle');
  const winImg = document.getElementById('windowImage');
  const winSummary = document.getElementById('windowSummary');

  switch (winElements[i].id) {
    case 1:
      winTitle.textContent = winElements[i].cardTitle;
      winImg.src = winElements[i].cardImg;
      winSummary.textContent = winElements[i].cardSummary;
      break;
    case 2:
      winTitle.textContent = winElements[i].cardTitle;
      winImg.src = winElements[i].cardImg;
      winSummary.textContent = winElements[i].cardSummary;
      break;
    case 3:
      winTitle.textContent = winElements[i].cardTitle;
      winImg.src = winElements[i].cardImg;
      winSummary.textContent = winElements[i].cardSummary;
      break;
    case 4:
      winTitle.textContent = winElements[i].cardTitle;
      winImg.src = winElements[i].cardImg;
      winSummary.textContent = winElements[i].cardSummary;
      break;
  }
};

//PopUp Window display

let alertB = () => {
  return alert('hello')
};

const display = function(e) {
  const winBtns = document.querySelectorAll('.card--btn');
  const arrBtns = Array.from(winBtns)
  arrBtns.forEach((b) => {
    b.addEventListener('click', alertB)
  })
  }

 display(alertB)
