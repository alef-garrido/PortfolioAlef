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
      btn_1:'.',
      btn_2:'.'
    },
    {
      id: 2,
      cardTitle: 'Multi.Post Stories',
      cardImg: './assets/img/Snapshoot-Portfolio.png',
      cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
      btn_1:'.',
      btn_2:'.'
    },
    {
      id: 3,
      cardTitle: 'Multi.Post Stories',
      cardImg: './assets/img/Snapshoot-Portfolio.png',
      cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
      btn_1:'.',
      btn_2:'.'
    },
    {
      id: 4,
      cardTitle: 'Multi.Post Stories',
      cardImg: './assets/img/Snapshoot-Portfolio.png',
      cardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
      btn_1:'.',
      btn_2:'.'
    },
];


const generateSection = function() {
  //grab HTML container
  const container = document.querySelector('#projects-display');

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


      
      thumbnailContainer.appendChild(thumbnail);
      contentContainer.append(cardTitle, cardSummary, techContainer, cardBtn);
      listItem.append(thumbnailContainer, contentContainer);
      container.append(listItem)
  }
}

generateSection();

