document.addEventListener('DOMContentLoaded', () => {

  // 1. CONFIGURACIÓN DE REDIRECCIÓN A WHATSAPP Y TIKTOK
  // Reemplaza con tu número real (incluyendo código de país) y tu usuario de TikTok
  const NUMERO_WHATSAPP = "51998279586"; 
  const USUARIO_TIKTOK  = "@amigumary123"; 

  const btnWhatsapp = document.getElementById('btnWhatsapp');
  const btnTiktok   = document.getElementById('btnTiktok');

  if (btnWhatsapp) {
    btnWhatsapp.addEventListener('click', () => {
      const mensaje = encodeURIComponent("¡Hola AmiguMary! 🌸 Quisiera consultar sobre un pedido personalizado de amigurumis.");
      window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`, '_blank');
    });
  }

  if (btnTiktok) {
    btnTiktok.addEventListener('click', () => {
      window.open(`https://www.tiktok.com/${USUARIO_TIKTOK}`, '_blank');
    });
  }

  // 2. MENÚ RESPONSIVE (HAMBURGUESA)
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Cierra el menú móvil al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // 3. BARRA DE BÚSQUEDA NAVEGABLE INTERACTIVA
  const searchInput   = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const secciones = [
    { nombre: 'Inicio', id: '#inicio' },
    { nombre: 'Nosotros / Sobre AmiguMary', id: '#nosotros' },
    { nombre: 'Productos / Ramos y Personajes', id: '#productos' },
    { nombre: 'Muestras / Galería de Imágenes', id: '#galeria' },
    { nombre: 'Contacto / Pedidos WhatsApp & TikTok', id: '#contacto' }
  ];

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (query.length > 0) {
      const coincidencias = secciones.filter(sec => sec.nombre.toLowerCase().includes(query));

      if (coincidencias.length > 0) {
        searchResults.style.display = 'flex';
        coincidencias.forEach(item => {
          const a = document.createElement('a');
          a.href = item.id;
          a.textContent = item.nombre;
          a.addEventListener('click', () => {
            searchResults.style.display = 'none';
            searchInput.value = '';
          });
          searchResults.appendChild(a);
        });
      } else {
        searchResults.style.display = 'none';
      }
    } else {
      searchResults.style.display = 'none';
    }
  });

  // Oculta resultados al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  // 4. ANIMACIONES AL HACER SCROLL (FADE IN)
  const observerOptions = { threshold: 0.15 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});