/*
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  var randomColor=generateRandomColor();
  */
  const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor
  }
  
  setBg();


  const data = [
    {
      id: 1,
      title: 'Textify',
      description: 'test1',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 2,
      title: 'coco',
      description: 'test3dfgdfgdfdtest3dfgdfgdfdfghgdjfgjtest3dfgdfgdfdfghgdjfgjfghgdjfgj',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 3,
      title: 'Textify',
      description: 'test4',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 4,
      title: 'Textify',
      description: 'test2',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 4,
      title: 'Textify',
      description: 'test2',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 4,
      title: 'Textify',
      description: 'test2',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 4,
      title: 'Textify',
      description: 'test2',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 4,
      title: 'Textify',
      description: 'test2',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 4,
      title: 'Textify',
      description: 'test2',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 4,
      title: 'Textify',
      description: 'test2',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 5,
      title: 'Textify',
      description: 'test2',
      link: 'https://youtube.com',
      bg: ''
    },
    {
      id: 5,
      title: 'Textify',
      description: 'test2',
      link: 'https://youtube.com',
      bg: ''
    },
    
  ]

const res = data.map( item => {
  const cor = setBg()
  item.bg = '#' + cor
  if(cor.length === 5){
    item.bg = '#' + cor + 1
  } 
 
})


document.querySelector('.content').innerHTML += data.flatMap( item => {
  return( `<div class="block" style="background-color: ${item.bg} ">
  <h1>${item.title}</h1>
  <p class="description">${item.description}</p>
  <a href="${item.link}">
  <button  class="info">
      read more
  </button>
  </a>
</div>`);


}).join('')


const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.querySelector('.modal-close');

const modalClose = document.getElementById('modal-close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

modalClose.addEventListener('click', () => {
    modal_container.classList.remove('show');
});