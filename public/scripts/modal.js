const modalOverlay = document.querySelector('.modal');
const cards = document.querySelectorAll('.cards .card');
const modalContent = modalOverlay.querySelector('.modal-content');
const iframe = modalContent.querySelector('iframe');


for (const card of cards) {
  card.addEventListener('click', ()=> {
    modalOverlay.classList.add('active');
    iframe.src = `https://rocketseat.com.br/${card.id}`;
  })
}
modalOverlay.querySelector('#close').addEventListener('click', ()=> {
  modalOverlay.classList.remove('active');
  if (modalContent.classList.contains('maximize')){
    modalContent.classList.remove('maximize');
  }
  iframe.src = '';
  
})

modalOverlay.querySelector('#maximize').addEventListener('click', ()=> {
  modalContent.classList.toggle('maximize');
})