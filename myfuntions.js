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
    id: 'Project-1',
    title: 'Multi.Post Stories',
    summary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['Css', 'span', 'Html', 'span', 'Bootstrap', 'span', 'Ruby on rails'],
    btn_text:'See Project'
  },
  {
    id: 'Project-2',
    title: 'Multi.Post Stories',
    summary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['Css', 'span', 'Html', 'span', 'Bootstrap', 'span', 'Ruby on rails'],
    btn_text:'See Project'
  },
  {
    id: 'Project-3',
    title: 'Multi.Post Stories',
    summary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['Css', 'span', 'Html', 'span', 'Bootstrap', 'span', 'Ruby on rails'],
    btn_text:'See Project'
  },
  {
    id: 'Project-4',
    title: 'Multi.Post Stories',
    summary: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['Css', 'span', 'Html', 'span', 'Bootstrap', 'span', 'Ruby on rails'],
    btn_text:'See Project'
  }

]

function projectDisplay() {
  const myParent = document.querySelector("#projects-display");
  const container = document.createElement('div');
  const closeBtn = document.createElement('button');
  const title = document.createElement('h2');
  const thumbnail = document.createElement('img');
  const text = document.createElement('p')
  const list = document.createElement('ul');
  const element = document.createElement('li');
  const btn = document.createElement('button');
  const btn2 = document.createElement('button');

  myParent.append(container);

  for (let i = 0; i <= winElements.length; i++) {
    
   

    
  }
}


      
      
      
      
      container.append(closeBtn, title, thumbnail, text, list, btn, btn2);
      
      title.textContent = 'Multi - Post stories';
      title.setAttribute('class', 'section--title');
      thumbnail.setAttribute("src", "./assets/img/Snapshoot-Portfolio.png"); 
      thumbnail.setAttribute("alt", "project thumbnail");
      text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.";
      list.appendChild(element);

// Get the DOM elements 

const showWindow = document.querySelectorAll('.card--btn');
  for (let i = 0; i <= showWindow.length; i++) {
    showWindow[i].addEventListener('click', function() {
      
      
    });
    }
