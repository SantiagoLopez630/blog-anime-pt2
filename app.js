'use strict';


const navItems = [
  ['inicio','Inicio'],['historia','Historia'],['personajes','Personajes'],['temporadas','Temporadas'],
  ['curiosidades','Curiosidades'],['manga','Manga'],['peliculas','Películas'],['creadora','Creadora'],
  ['quienes-somos','Quiénes somos'],['contacto','Contacto']
];

const characterModal = document.querySelector('#character-modal');
const infoModal = document.querySelector('#info-modal');
let lastFocusedElement = null;

function goTo(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
  closeMenu();
}

function closeMenu() {
  const nav = document.querySelector('.nav-links');
  const toggle = document.querySelector('.menu-toggle');
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
}

function openModal(modal) {
  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}

function closeModal(modal) {
  modal.hidden = true;
  if (characterModal.hidden && infoModal.hidden) document.body.classList.remove('modal-open');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
}

function showCharacter(name) {
  const character = characters.find(item => item.name === name);
  if (!character) return;
  const dialog = characterModal.querySelector('.character-modal');
  dialog.style.setProperty('--accent', character.color);
  
  const modalImg = document.querySelector('#modal-img');
  if (modalImg) modalImg.src = character.image;

  document.querySelector('#modal-mark').textContent = character.mark;
  document.querySelector('#modal-role').textContent = character.role;
  document.querySelector('#modal-name').textContent = character.name;
  document.querySelector('#modal-text').textContent = character.text;
  document.querySelector('#modal-skill').textContent = character.skill;
  openModal(characterModal);
}

function showFilmInfo(type) {
  const details = type === 'mugen'
    ? {title:'Mugen Train', text:'Tanjiro y sus compañeros se unen a Kyojuro Rengoku para investigar desapariciones a bordo de un tren. La misión pone a prueba su voluntad, sus vínculos y su capacidad para proteger a los pasajeros.'}
    : {title:'Infinity Castle', text:'La historia entra en su etapa final dentro del Castillo Infinito, una fortaleza cambiante donde los cazadores se enfrentan a enemigos de enorme poder. Consulta los canales oficiales para información actualizada sobre estrenos y distribución.'};
  document.querySelector('#info-title').textContent = details.title;
  document.querySelector('#info-text').textContent = details.text;
  openModal(infoModal);
}

document.addEventListener('click', event => {
  const goButton = event.target.closest('[data-go]');
  if (goButton) goTo(goButton.dataset.go);

  const characterButton = event.target.closest('[data-character]');
  if (characterButton) showCharacter(characterButton.dataset.character);

  const filmButton = event.target.closest('[data-film]');
  if (filmButton) showFilmInfo(filmButton.dataset.film);
});

document.querySelector('.menu-toggle').addEventListener('click', event => {
  const toggle = event.currentTarget;
  const nav = document.querySelector('.nav-links');
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

[characterModal, infoModal].forEach(modal => {
  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.closest('.modal-close')) closeModal(modal);
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (!characterModal.hidden) closeModal(characterModal);
    if (!infoModal.hidden) closeModal(infoModal);
    closeMenu();
  }
});

const backTop = document.querySelector('#back-top');
window.addEventListener('scroll', () => {
  backTop.hidden = window.scrollY < 700;
  const marker = window.scrollY + window.innerHeight * 0.35;
  let current = 'inicio';
  navItems.forEach(([id]) => {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= marker) current = id;
  });
  document.querySelectorAll('.nav-links [data-go]').forEach(button => {
    button.classList.toggle('active', button.dataset.go === current);
  });
}, {passive:true});
backTop.addEventListener('click', () => goTo('inicio'));

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = document.querySelector('#form-feedback');
  if (!form.checkValidity()) {
    form.reportValidity();
    feedback.textContent = 'Revisa los campos antes de continuar.';
    feedback.className = 'form-feedback error';
    return;
  }
  const data = new FormData(form);
  const subject = `[Demon Slayer Blog] ${data.get('subject')}`;
  const body = `Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\n\n${data.get('message')}`;
  feedback.textContent = 'Formulario validado. Se abrirá tu aplicación de correo para que puedas enviar el mensaje.';
  feedback.className = 'form-feedback success';
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('#current-year').textContent = new Date().getFullYear();