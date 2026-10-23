'use strict';

const personajes = [
  {name:'Tanjiro Kamado',mark:'水',color:'#3a8f88',role:'Cazador compasivo',skill:'Respiración del Agua · Hinokami Kagura',text:'Su inquebrantable empatía es tan poderosa como su espada.',image:'https://coanime.s3.us-east-2.amazonaws.com/posts/2023/01/2922/82c5485965c0211efd536f9c1e5e59dde01760e60c79d1e75952a95bcda84efd.webp'},
  {name:'Nezuko Kamado',mark:'血',color:'#b73b56',role:'Demonio protectora',skill:'Arte Demoníaco de Sangre',text:'Conserva su humanidad y lucha por proteger a quienes ama.',image:'https://imagenes.hobbyconsolas.com/files/image_1920_1080/uploads/imagenes/2023/04/25/6900dcae4b415.jpeg'},
  {name:'Zenitsu Agatsuma',mark:'雷',color:'#d99435',role:'Espadachín del trueno',skill:'Respiración del Rayo',text:'El miedo desaparece cuando su instinto toma el control.',image:'https://m.media-amazon.com/images/M/MV5BZjVjMjQ2NDYtOGJkNy00OWJjLWE4ZTAtNzJlZjQ2ODk3YWQwXkEyXkFqcGc@._V1_.jpg'},
  {name:'Inosuke Hashibira',mark:'獣',color:'#537788',role:'Guerrero salvaje',skill:'Respiración de la Bestia',text:'Impredecible, competitivo y guiado por sentidos extraordinarios.',image:'https://preview.redd.it/inosuke-is-lucky-that-gyutaro-didnt-see-his-face-v0-ea9yrx03sr9c1.jpeg?auto=webp&s=fcd5727465b204e7a333cffc2fa9237d7ff1b83b'},
  {name:'Giyu Tomioka',mark:'凪',color:'#376d81',role:'Pilar del Agua',skill:'Undécima postura · Calma',text:'Sereno y preciso; su decisión cambió el destino de los Kamado.',image:'https://preview.redd.it/happy-birthday-giyu-tomioka-v0-m543rxc6gyga1.jpg?auto=webp&s=e4df0fae3276c61ae4160593047a5281dc697eb3'},
  {name:'Kyojuro Rengoku',mark:'炎',color:'#c4492d',role:'Pilar de la Llama',skill:'Respiración de la Llama',text:'Una voluntad ardiente que inspira a toda una generación.',image:'https://katana-canada.ca/cdn/shop/articles/rengoku-sword-flame-hashira-hero.png?v=1766417850&width=1100'},
  {name:'Shinobu Kocho',mark:'蝶',color:'#765b91',role:'Pilar del Insecto',skill:'Venenos de glicinia',text:'Velocidad, inteligencia y una sonrisa que esconde determinación.',image:'https://okamisamatv.com/wp-content/uploads/2026/04/Demon-Slayer-Kimetsu-no-Yaiba-The-Hinokami-Chronicles-2-Shinobu-Infinity-Castle-1-scaled.png'},
  {name:'Muichiro Tokito',mark:'霞',color:'#438d89',role:'Pilar de la Niebla',skill:'Respiración de la Niebla',text:'Un prodigio distante con un talento excepcional para la espada.',image:'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=70,width=1200,height=675/catalog/crunchyroll/ba7e0f4ca15bf4299d54286ceadd6296.png'},
  {name:'Mitsuri Kanroji',mark:'恋',color:'#a75472',role:'Pilar del Amor',skill:'Respiración del Amor',text:'Fuerza extraordinaria, flexibilidad y un corazón sin reservas.',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsR5BsVdVbJsCIeBCszLvySY_DsXiApqpLEc1dNR-wwGMPRkfg5_17J5DA&s=10'},
  {name:'Tengen Uzui',mark:'音',color:'#80745f',role:'Pilar del Sonido',skill:'Partitura de combate',text:'Extravagante shinobi que convierte la batalla en ritmo.',image:'https://www.nintenderos.com/wp-content/uploads/2022/06/Demon-Slayer.jpg'},
  {name:'Sanemi Shinazugawa',mark:'風',color:'#567060',role:'Pilar del Viento',skill:'Respiración del Viento',text:'Feroz por fuera, marcado por una historia de sacrificio.',image:'https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/07/who-is-sanemi-shinazugawa-in-demon-slayer.jpg?w=1200&h=675&fit=crop'},
  {name:'Gyomei Himejima',mark:'岩',color:'#6f6255',role:'Pilar de la Roca',skill:'Respiración de la Roca',text:'El más fuerte de los Pilares; fe, disciplina y poder absoluto.',image:'https://images3.alphacoders.com/136/thumb-1920-1366567.png'}
];

const informacionPeliculas = {
  mugen: {
    titulo: 'Mugen Train (El Tren Infinito)',
    texto: 'Tras el éxito de la primera temporada, esta película adapta el arco del Tren Infinito. Tanjiro, Zenitsu e Inosuke acompañan al Pilar de la Llama, Kyojuro Rengoku, a investigar la misteriosa desaparición de pasajeros, enfrentándose a la Luna Superior Enmu y a la trágica intervención de Akaza.'
  },
  infinity: {
    titulo: 'Castillo Infinito (Infinity Castle)',
    texto: 'La saga final de Demon Slayer se adapta en una ambiciosa trilogía cinematográfica producida por ufotable. Todo el Cuerpo de Exterminio y los Hashira restantes son arrastrados al cuartel general de Muzan Kibutsuji, marcando el inicio de la confrontación definitiva.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  const cuadriculaPersonajes = document.querySelector('#cuadricula-personajes');
  const entradaBusqueda = document.querySelector('#entrada-busqueda-personaje');
  const botonesFiltro = [...document.querySelectorAll('[data-filter]')];
  const mensajeVacio = document.querySelector('#personajes-vacio');
  
  const modalPersonaje = document.querySelector('#modal-personaje');
  const imagenModal = document.querySelector('#imagen-modal');
  const marcaModal = document.querySelector('#marca-modal');
  const rolModal = document.querySelector('#rol-modal');
  const nombreModal = document.querySelector('#nombre-modal');
  const textoModal = document.querySelector('#texto-modal');
  const habilidadModal = document.querySelector('#habilidad-modal');

  const modalInformacion = document.querySelector('#modal-informacion');
  const tituloInfoModal = document.querySelector('#titulo-info-modal');
  const textoInfoModal = document.querySelector('#texto-info-modal');

  const botonMenu = document.querySelector('.alternar-menu');
  const enlacesNavegacion = document.querySelector('.enlaces-navegacion');
  const botonArriba = document.querySelector('#boton-arriba');
  const anioActual = document.querySelector('#anio-actual');

  if (anioActual) {
    anioActual.textContent = new Date().getFullYear();
  }

  
  function renderizarPersonajes(lista) {
    if (!cuadriculaPersonajes) return;
    
    if (lista.length === 0) {
      cuadriculaPersonajes.innerHTML = '';
      if (mensajeVacio) mensajeVacio.hidden = false;
      return;
    }

    if (mensajeVacio) mensajeVacio.hidden = true;

    cuadriculaPersonajes.innerHTML = lista.map((p, index) => `
      <article class="tarjeta-personaje" style="--acento: ${p.color};" data-index="${personajes.indexOf(p)}">
        <div class="visual-personaje">
          <span class="numero-personaje">#${String(index + 1).padStart(2, '0')}</span>
          <div class="marca-personaje">${p.mark}</div>
          <div class="espada"></div>
          <span class="rol-personaje">${p.role}</span>
        </div>
        <div class="info-personaje">
          <h3>${p.name}</h3>
          <p>${p.text}</p>
          <strong>${p.skill}</strong>
          <button class="btn-ver-mas">Ver detalles <span class="flecha">↗</span></button>
        </div>
      </article>
    `).join('');
  }

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
  });

 
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
  }


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
  });


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
  }


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