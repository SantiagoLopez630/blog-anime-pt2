'use strict';


const navItems = [
  ['inicio','Inicio'],['historia','Historia'],['personajes','Personajes'],['temporadas','Temporadas'],
  ['curiosidades','Curiosidades'],['manga','Manga'],['peliculas','Películas'],['creadora','Creadora'],
  ['quienes-somos','Quiénes somos'],['contacto','Contacto']
];

const characterModal = document.querySelector('#character-modal');
const infoModal = document.querySelector('#info-modal');
let lastFocusedElement = null;

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  
  const cuadriculaPersonajes = document.querySelector('#cuadricula-personajes');
  const entradaBusqueda = document.querySelector('#entrada-busqueda-personaje');
  const botonesFiltro = [...document.querySelectorAll('[data-filter]')];
  const mensajeVacio = document.querySelector('#personajes-vacio');
=======
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
>>>>>>> 8bafe6a902d045c32f364a2b670a1332ee261387
  
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

<<<<<<< HEAD
  
  function renderizarPersonajes(lista) {
    if (!cuadriculaPersonajes) return;
    
    if (lista.length === 0) {
      cuadriculaPersonajes.innerHTML = '';
      if (mensajeVacio) mensajeVacio.hidden = false;
      return;
    }
=======
  const characterButton = event.target.closest('[data-character]');
  if (characterButton) showCharacter(characterButton.dataset.character);
>>>>>>> 8bafe6a902d045c32f364a2b670a1332ee261387

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

<<<<<<< HEAD
  renderizarPersonajes(personajes);

  
  let filtroActual = 'Todos';

  function filtrarDatos() {
    const consulta = entradaBusqueda ? entradaBusqueda.value.toLowerCase().trim() : '';
    const filtrados = personajes.filter(p => {
      const coincideTexto = p.name.toLowerCase().includes(consulta) || p.skill.toLowerCase().includes(consulta) || p.role.toLowerCase().includes(consulta);
      const coincideFiltro = filtroActual === 'Todos' || 
        (filtroActual === 'Cazadores' && !p.role.includes('Pilar')) || 
        (filtroActual === 'Hashira' && p.role.includes('Pilar'));
      return coincideTexto && coincideFiltro;
    });
    renderizarPersonajes(filtrados);
  }

  if (entradaBusqueda) {
    entradaBusqueda.addEventListener('input', filtrarDatos);
  }

  botonesFiltro.forEach(boton => {
    boton.addEventListener('click', (e) => {
      botonesFiltro.forEach(b => b.classList.remove('seleccionado'));
      e.currentTarget.classList.add('seleccionado');
      filtroActual = e.currentTarget.getAttribute('data-filter');
      filtrarDatos();
    });
=======
[characterModal, infoModal].forEach(modal => {
  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.closest('.modal-close')) closeModal(modal);
>>>>>>> 8bafe6a902d045c32f364a2b670a1332ee261387
  });
});

<<<<<<< HEAD
 
  if (cuadriculaPersonajes) {
    cuadriculaPersonajes.addEventListener('click', (e) => {
      const tarjeta = e.target.closest('.tarjeta-personaje');
      if (!tarjeta) return;
      const index = tarjeta.getAttribute('data-index');
      const p = personajes[index];

      if (modalPersonaje) {
        modalPersonaje.style.setProperty('--acento', p.color);
        if (imagenModal) {
          imagenModal.src = p.image;
          imagenModal.alt = p.name;
        }
        if (marcaModal) marcaModal.textContent = p.mark;
        if (rolModal) rolModal.textContent = p.role;
        if (nombreModal) nombreModal.textContent = p.name;
        if (textoModal) textoModal.textContent = p.text;
        if (habilidadModal) habilidadModal.textContent = p.skill;
        modalPersonaje.hidden = false;
        document.body.classList.add('modal-abierto');
      }
    });
=======
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (!characterModal.hidden) closeModal(characterModal);
    if (!infoModal.hidden) closeModal(infoModal);
    closeMenu();
>>>>>>> 8bafe6a902d045c32f364a2b670a1332ee261387
  }
});

<<<<<<< HEAD

  document.querySelectorAll('[data-film]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tipo = e.currentTarget.getAttribute('data-film');
      const info = informacionPeliculas[tipo];
      if (info && modalInformacion) {
        if (tituloInfoModal) tituloInfoModal.textContent = info.titulo;
        if (textoInfoModal) textoInfoModal.textContent = info.texto;
        modalInformacion.hidden = false;
        document.body.classList.add('modal-abierto');
      }
    });
  });


  document.querySelectorAll('.cerrar-modal, .fondo-modal').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || e.target.classList.contains('cerrar-modal')) {
        if (modalPersonaje) modalPersonaje.hidden = true;
        if (modalInformacion) modalInformacion.hidden = true;
        document.body.classList.remove('modal-abierto');
      }
    });
=======
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
>>>>>>> 8bafe6a902d045c32f364a2b670a1332ee261387
  });
}, {passive:true});
backTop.addEventListener('click', () => goTo('inicio'));

<<<<<<< HEAD

  if (botonMenu && enlacesNavegacion) {
    botonMenu.addEventListener('click', () => {
      const abierto = enlacesNavegacion.classList.toggle('abierto');
      botonMenu.setAttribute('aria-expanded', abierto);
    });

    enlacesNavegacion.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        enlacesNavegacion.classList.remove('abierto');
        botonMenu.setAttribute('aria-expanded', 'false');
      });
    });
=======
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = document.querySelector('#form-feedback');
  if (!form.checkValidity()) {
    form.reportValidity();
    feedback.textContent = 'Revisa los campos antes de continuar.';
    feedback.className = 'form-feedback error';
    return;
>>>>>>> 8bafe6a902d045c32f364a2b670a1332ee261387
  }
  const data = new FormData(form);
  const subject = `[Demon Slayer Blog] ${data.get('subject')}`;
  const body = `Nombre: ${data.get('name')}\nCorreo: ${data.get('email')}\n\n${data.get('message')}`;
  feedback.textContent = 'Formulario validado. Se abrirá tu aplicación de correo para que puedas enviar el mensaje.';
  feedback.className = 'form-feedback success';
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

<<<<<<< HEAD

  document.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const objetivo = e.currentTarget.getAttribute('data-go');
      const elemento = document.querySelector(`#${objetivo}`);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      if (botonArriba) botonArriba.hidden = false;
    } else {
      if (botonArriba) botonArriba.hidden = true;
    }
  });

  if (botonArriba) {
    botonArriba.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
=======
document.querySelector('#current-year').textContent = new Date().getFullYear();
>>>>>>> 8bafe6a902d045c32f364a2b670a1332ee261387
