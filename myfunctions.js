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
      CardTitle: 'Multi.Post Stories',
      cardImg: './assets/img/Snapshoot-Portfolio.png',
      CardSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'Html', 'Bootstrap', 'Ruby on rails'],
      btn_1:'.',
      btn_2:'.'
    },
    {
      id: 2,
      title: 'Multi.Post Stories',
      summary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'span', 'Html', 'span', 'Bootstrap', 'span', 'Ruby on rails'],
      btn_1:'.',
      btn_2:'.'
    },
    {
      id: 3,
      title: 'Multi.Post Stories',
      summary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'span', 'Html', 'span', 'Bootstrap', 'span', 'Ruby on rails'],
      btn_1:'.',
      btn_2:'.'
    },
    {
      id: 4,
      title: 'Multi.Post Stories',
      summary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      tech: ['Css', 'span', 'Html', 'span', 'Bootstrap', 'span', 'Ruby on rails'],
      btn_1:'.',
      btn_2:'.'
    },
];

let container = document.getElementById('projects-display');
const generateSection = function() {
  for(let i = 0; i < winElements.length; i++) {
      const listItem = document.createElement('li');
      listItem.classList.add('recent--work--card');
      const thumbnailContainer = document.createElement('a');
      thumbnailCont.classList.add('card--thumbnail');
      const thumbnail = document.createElement('img');
      thumbnailCont.src = winElements.cardImg;
      thumbnail.alt = 'project screenshot';

      const contentContainer = document.createElement('div');
      contentContainer.classList.add('card--container');

      const cardTitle = document.createElement('h3');
      cardTitle.textContent = winElements.cardTitle;

      const cardSummary = document.createElement('p');
      cardSummary.textContent = winElements.cardSummary;

      const techContainer = document.createElement('ul');
      techContainer.classList.add('tech--container');

      const techItem1 = document.createElement('li');
      techItem1.textContent = winElements.tech[0];
      const techItem2 = document.createElement('li');
      const techLine = document.createElement('img')
      techLine.src = './assets/svg/Rectangle70.svg';
      techItem2.appendChild(techLine);
      const techItem3 = document.createElement('li');
      techItem3.textContent = winElements.tech[1];
      const techItem4 = document.createElement('li');
      techItem4.appendChild(techLine);
      const techItem5 = document.createElement('li');
      techItem1.textContent = winElements.tech[2];
      const techItem6 = document.createElement('li');
      techItem6.appendChild(techLine);
      const techItem7 = document.createElement('li');
      techItem1.textContent = winElements.tech[3];


      const cardBtn = document.createElement('button');
      cardBtn.type = 'button';
      cardBtn.classList.add('card--btn');
      cardBtn.textContent = 'See Project';


      thumbnailContainer.appendChild(thumbnail);
      contentContainer.append(cardTitle);
      techContainer.append(techItem1,techItem2,techItem3, techItem4, techItem5, techItem6, techItem7);
      listItem.append(thumbnailContainer, contentContainer, cardSummary, techContainer);


  }
}


