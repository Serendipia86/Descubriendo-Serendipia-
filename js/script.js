// ========== CONFIGURACIÓN ==========
const ADMIN_CREDENTIALS = {
    email: "descubriendo.serendipia@gmail.com",
    password: "13Serendipi@4679"
};

// ========== DATOS CON IMÁGENES ORIGINALES CORREGIDAS ==========
const categoriesData = [
    {
        id: 'agendas',
        name: 'Agendas',
        image: 'https://i.ibb.co/gFjZBtw6/9.jpg',
        description: 'Agendas y cuadernos personalizados para organizar tu día',
        images: [
            { src: 'https://i.ibb.co/gFjZBtw6/9.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/zhcTYvxq/4.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/JWNXKKH3/2.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/HT66GxNM/5.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/n8s81JBC/8.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/fYX9d3S8/7.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/GvsVVqRD/6.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/fGZZdyrD/3.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/FkFB7j3X/14.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/Lzkbzxqg/13.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/bRrYpk8T/12.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/yn0LSnbF/11.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/603T88MM/10.jpg', title: 'Agenda personalizada' },
            { src: 'https://i.ibb.co/HTv8KDHY/1.jpg', title: 'Agenda personalizada' }
        ]
    },
    {
        id: 'bolsas',
        name: 'Bolsas Golosineras',
        image: 'https://i.ibb.co/4g1RX2nM/1.jpg',
        description: 'Bolsas especiales para golosinas y sorpresas',
        images: [
            { src: 'https://i.ibb.co/hxtnpYbX/5.jpg', title: 'Bolsa golosinera' },
            { src: 'https://i.ibb.co/GQYNWjDZ/3.jpg', title: 'Bolsa golosinera' },
            { src: 'https://i.ibb.co/5W9zpf9s/4.jpg', title: 'Bolsa golosinera' },
            { src: 'https://i.ibb.co/4g1RX2nM/1.jpg', title: 'Bolsa golosinera' },
            { src: 'https://i.ibb.co/9krX20wb/2.jpg', title: 'Bolsa golosinera' }
        ]
    },
    {
        id: 'cartucheras',
        name: 'Cartucheras',
        image: 'https://i.ibb.co/Nd3DXv3d/IMG-20200713-121824.jpg',
        description: 'Cartucheras únicas para guardar tus útiles',
        images: [
            { src: 'https://i.ibb.co/Nd3DXv3d/IMG-20200713-121824.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/6c428MJq/IMG-20200716-232452.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/dsC277fQ/Whats-App-Image-2020-12-18-at-21-47-36-1.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/gbqF7rwz/Whats-App-Image-2020-12-18-at-21-47-35-1.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/1tptW0S2/Whats-App-Image-2020-12-18-at-21-47-35.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/RWPZJ2Q/Whats-App-Image-2020-12-18-at-21-47-34.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/9mW6yQyr/Whats-App-Image-2020-12-18-at-21-47-31.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/Z6f4KZmx/Whats-App-Image-2020-12-18-at-21-47-30.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/RkDNkP9H/Whats-App-Image-2020-12-18-at-21-47-28.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/RxnTKML/Whats-App-Image-2020-12-18-at-21-47-26-1.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/PGQYGjLR/Whats-App-Image-2020-12-18-at-21-47-26.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/3Y4r1WK3/IMG-20201224-011326.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/dS2cjWG/IMG-20200717-133022.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/k6VZ5sdZ/IMG-20200709-WA0014.jpg', title: 'Cartuchera personalizada' },
            { src: 'https://i.ibb.co/pvzTk0HD/IMG-20210324-105835.jpg', title: 'Cartuchera personalizada' }
        ]
    },
    {
        id: 'etiquetas',
        name: 'Etiquetas Escolares',
        image: 'https://i.ibb.co/5xhT85br/1.jpg',
        description: 'Etiquetas personalizadas para materiales escolares',
        images: [
            { src: 'https://i.ibb.co/5xhT85br/1.jpg', title: 'Etiquetas escolares' },
            { src: 'https://i.ibb.co/SwqLjMyT/2.jpg', title: 'Etiquetas escolares' },
            { src: 'https://i.ibb.co/v6HttGVn/3.jpg', title: 'Etiquetas escolares' },
            { src: 'https://i.ibb.co/DHxcyPfn/4.jpg', title: 'Etiquetas escolares' },
            { src: 'https://i.ibb.co/M5Bs371n/5.jpg', title: 'Etiquetas escolares' },
            { src: 'https://i.ibb.co/qYScj5v5/6.jpg', title: 'Etiquetas escolares' }
        ]
    },
    {
        id: 'organizadores',
        name: 'Organizadores/Neceser',
        image: 'https://i.ibb.co/93bHGmRj/IMG-20200810-182722.jpg',
        description: 'Organizadores y neceseres personalizados',
        images: [
            { src: 'https://i.ibb.co/93bHGmRj/IMG-20200810-182722.jpg', title: 'Organizador personalizado' },
            { src: 'https://i.ibb.co/5xrj03zW/IMG-20200810-183145.jpg', title: 'Organizador personalizado' },
            { src: 'https://i.ibb.co/8g13nhyP/IMG-20201224-010900.jpg', title: 'Organizador personalizado' },
            { src: 'https://i.ibb.co/WpPKQ2jB/IMG-20201224-010944.jpg', title: 'Organizador personalizado' },
            { src: 'https://i.ibb.co/Q7mT0h84/IMG-20200818-WA0009.jpg', title: 'Organizador personalizado' },
            { src: 'https://i.ibb.co/h1x5vZyW/IMG-20200811-223553.jpg', title: 'Organizador personalizado' },
            { src: 'https://i.ibb.co/ZRKhPQQg/IMG-20200810-205211.jpg', title: 'Organizador personalizado' },
            { src: 'https://i.ibb.co/7tgJTGxH/IMG-20200806-WA0012.jpg', title: 'Organizador personalizado' },
            { src: 'https://i.ibb.co/0VRKjKN2/IMG-20200806-WA0006.jpg', title: 'Organizador personalizado' }
        ]
    },
    {
        id: 'set-jardin',
        name: 'Set Jardín',
        image: 'https://i.ibb.co/8gCVyP9T/Among-Us.png',
        description: 'Sets personalizados para jardín de infantes',
        images: [
            { src: 'https://i.ibb.co/8gCVyP9T/Among-Us.png', title: 'Set Jardín' },
            { src: 'https://i.ibb.co/67qVVSp9/Dino.png', title: 'Set Jardín' },
            { src: 'https://i.ibb.co/n8bxknbL/Unicornio1.png', title: 'Set Jardin' },
            { src: 'https://i.ibb.co/tMQqZ8vD/Sonic.png', title: 'Set Jardin' },
            { src: 'https://i.ibb.co/HDV41kK3/Rex.png', title: 'Set Jardin' },
            { src: 'https://i.ibb.co/wF7z9xdt/Rayo-Mcqueen.png', title: 'Set Jardin' },
            { src: 'https://i.ibb.co/n8LgBHNk/Patrulla-Canina.png', title: 'Set Jardin' }
        ]
    },
    {
        id: 'almohadones',
        name: 'Almohadones',
        image: 'https://i.ibb.co/PG4HYmyw/IMG-20210105-114503.jpg',
        description: 'Almohadones decorativos y personalizados',
        images: [
            { src: 'https://i.ibb.co/PG4HYmyw/IMG-20210105-114503.jpg', title: 'Almohadón personalizado' },
            { src: 'https://i.ibb.co/93V9Q9Q5/IMG-20210105-114626.jpg', title: 'Almohadón personalizado' },
            { src: 'https://i.ibb.co/QSQX7Jf/IMG-20201107-174018-290.jpg', title: 'Almohadon personalizado' }
        ]
    },
    {
        id: 'recursos',
        name: 'Recursos Alfabetización',
        image: 'https://i.ibb.co/WpGyFjMH/2.jpg',
        description: 'Materiales educativos para el aprendizaje',
        images: [
            { src: 'https://i.ibb.co/YFXm13hW/IMG-20251012-WA0082.jpg', title: 'Tarjetas con Imágenes' },
            { src: 'https://i.ibb.co/pjthH7Cy/IMG-20251012-WA0084.jpg', title: 'Juegos "¿Cuál no rima?"' },
            { src: 'https://i.ibb.co/nqhhxdd7/IMG-20251012-WA0083.jpg', title: 'Diseños Coloridos' },
            { src: 'https://i.ibb.co/LdBZng10/IMG-20251012-WA0085.jpg', title: 'Personalizables' }
        ]
    }
];

// ========== ESTADO GLOBAL ==========
let currentSlide = 0;
let autoSlideInterval;
let currentGalleryCategory = null;
let isAdminMode = false;
let slidesToShow = 3; // Valor por defecto para desktop

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando aplicación...');
    
    // Verificar que los elementos existan
    if (!document.getElementById('carouselTrack')) {
        console.error('❌ No se encuentra el carrusel en el DOM');
        return;
    }
    
    initializeApp();
});

function initializeApp() {
    // Determinar cuántas slides mostrar según el ancho de pantalla
    updateSlidesToShow();
    
    // Cargar estado de admin
    isAdminMode = localStorage.getItem('adminLoggedIn') === 'true';
    if (isAdminMode) {
        enableAdminMode();
    }
    
    // Inicializar componentes
    createStars();
    initCarousel();
    setupMobileMenu();
    setupEventListeners();
    
    // Actualizar slides cuando cambie el tamaño de la ventana
    window.addEventListener('resize', updateSlidesToShow);
    
    console.log('✅ Aplicación inicializada correctamente');
}

// ========== CARRUSEL MEJORADO ==========
function updateSlidesToShow() {
    const width = window.innerWidth;
    if (width < 480) {
        slidesToShow = 1;
    } else if (width < 768) {
        slidesToShow = 2;
    } else {
        slidesToShow = 3;
    }
    console.log(`📱 Slides to show: ${slidesToShow} (width: ${width}px)`);
}

function initCarousel() {
    console.log('🎠 Inicializando carrusel...');
    
    const carouselTrack = document.getElementById('carouselTrack');
    carouselTrack.innerHTML = '';
    
    // Crear tarjetas de categorías
    categoriesData.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.flex = `0 0 calc(${100 / slidesToShow}% - 20px)`;
        card.innerHTML = `
            <div class="category-img">
                <img src="${category.image}" alt="${category.name}" onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop'">
            </div>
            <div class="category-info">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>
        `;
        
        card.addEventListener('click', () => openGallery(category));
        carouselTrack.appendChild(card);
    });
    
    // Configurar navegación
    generateDots();
    updateCarousel();
    startAutoSlide();
}

function generateDots() {
    const dotsContainer = document.getElementById('carouselDots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    const totalDots = Math.ceil(categoriesData.length / slidesToShow);
    
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function updateCarousel() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = Math.ceil(categoriesData.length / slidesToShow);
    
    // Actualizar estado de botones
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;
    
    // Actualizar puntos
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    // Mover carrusel
    const carouselTrack = document.getElementById('carouselTrack');
    if (carouselTrack) {
        const translateX = -currentSlide * 100;
        carouselTrack.style.transform = `translateX(${translateX}%)`;
        console.log(`🎠 Moviendo carrusel a slide ${currentSlide}, translateX: ${translateX}%`);
    }
}

function goToSlide(slideIndex) {
    const totalSlides = Math.ceil(categoriesData.length / slidesToShow);
    
    // Carrusel infinito
    if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = slideIndex;
    }
    
    updateCarousel();
    resetAutoSlide();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// ========== GALERÍA ==========
function openGallery(category) {
    console.log(`📸 Abriendo galería: ${category.name}`);
    console.log('Imágenes de la categoría:', category.images);
    
    currentGalleryCategory = category;
    
    const modalTitle = document.getElementById('modalTitle');
    const galleryContainer = document.getElementById('galleryContainer');
    
    if (!modalTitle || !galleryContainer) {
        console.error('❌ No se encuentran elementos de la galería');
        return;
    }
    
    // Configurar título
    modalTitle.textContent = category.name;
    
    // Limpiar galería
    galleryContainer.innerHTML = '';
    
    // Crear estructura de galería
    const galleryHTML = `
        <div class="gallery-main">
            <div class="main-image-container">
                <img class="main-image" src="${category.images[0].src}" alt="${category.images[0].title}" onerror="handleImageError(this, 'main')">
            </div>
            <div class="gallery-info">
                <h3>${category.images[0].title}</h3>
            </div>
        </div>
        <div class="gallery-thumbnails">
            ${category.images.map((image, index) => `
                <div class="thumbnail ${index === 0 ? 'active' : ''}">
                    <img src="${image.src}" alt="${image.title}" onerror="handleImageError(this, 'thumb')">
                    ${isAdminMode ? '<button class="delete-btn">×</button>' : ''}
                </div>
            `).join('')}
        </div>
        ${isAdminMode ? `
            <div class="add-image-section">
                <h3>Agregar Nueva Imagen</h3>
                <div class="file-upload-container">
                    <label class="file-upload-label">Subir archivo:</label>
                    <input type="file" class="file-input" id="newImageFile" accept="image/*">
                </div>
                <div class="file-upload-container">
                    <label class="file-upload-label">O URL de imagen:</label>
                    <input type="text" class="admin-form-control" id="newImageUrl" placeholder="https://ejemplo.com/imagen.jpg">
                </div>
                <div class="file-upload-container">
                    <label class="file-upload-label">Título:</label>
                    <input type="text" class="admin-form-control" id="newImageTitle" placeholder="Título de la imagen">
                </div>
                <div class="preview-container">
                    <img id="imagePreview" class="image-preview" style="display: none;">
                </div>
                <button class="add-image-btn" id="addImageBtn">Agregar Imagen</button>
            </div>
        ` : ''}
    `;
    
    galleryContainer.innerHTML = galleryHTML;
    
    // Configurar eventos de la galería
    setupGalleryEvents(category);
    
    // Mostrar modal
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    console.log('✅ Galería abierta correctamente');
}

// Función para manejar errores de imágenes
function handleImageError(img, type) {
    console.error(`❌ Error cargando imagen: ${img.src}`);
    if (type === 'main') {
        img.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop';
    } else {
        img.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop';
    }
}

function setupGalleryEvents(category) {
    // Eventos de miniaturas
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    const galleryInfo = document.querySelector('.gallery-info h3');
    
    thumbnails.forEach(thumbnail => {
        const img = thumbnail.querySelector('img');
        
        thumbnail.addEventListener('click', () => {
            if (mainImage && galleryInfo) {
                console.log(`🖱️ Cambiando a imagen: ${img.src}`);
                mainImage.src = img.src;
                mainImage.alt = img.alt;
                galleryInfo.textContent = img.alt;
                
                // Actualizar estado activo
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            }
        });
        
        // Botón eliminar (solo en modo admin)
        const deleteBtn = thumbnail.querySelector('.delete-btn');
        if (deleteBtn && isAdminMode) {
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm('¿Eliminar esta imagen?')) {
                    thumbnail.remove();
                    // Aquí iría la lógica para eliminar de la base de datos
                }
            });
        }
    });
    
    // Zoom en imagen principal
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            this.classList.toggle('zoomed');
        });
    }
    
    // Formulario de admin (si está activo)
    if (isAdminMode) {
        setupAdminGalleryFeatures();
    }
}

function setupAdminGalleryFeatures() {
    // Vista previa de archivo
    const fileInput = document.getElementById('newImageFile');
    const imagePreview = document.getElementById('imagePreview');
    
    if (fileInput && imagePreview) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Botón agregar imagen
    const addButton = document.getElementById('addImageBtn');
    if (addButton) {
        addButton.addEventListener('click', addNewImage);
    }
}

function addNewImage() {
    const fileInput = document.getElementById('newImageFile');
    const urlInput = document.getElementById('newImageUrl');
    const titleInput = document.getElementById('newImageTitle');
    
    if (!fileInput || !urlInput || !titleInput) return;
    
    const title = titleInput.value.trim() || 'Nueva imagen';
    let imageSrc = '';
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            imageSrc = e.target.result;
            addImageToGallery(imageSrc, title);
        };
        reader.readAsDataURL(file);
    } else if (urlInput.value.trim()) {
        imageSrc = urlInput.value.trim();
        addImageToGallery(imageSrc, title);
    } else {
        alert('Por favor selecciona un archivo o ingresa una URL');
        return;
    }
}

function addImageToGallery(imageSrc, title) {
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
    if (!thumbnailsContainer) return;
    
    const thumbnail = document.createElement('div');
    thumbnail.className = 'thumbnail';
    thumbnail.innerHTML = `
        <img src="${imageSrc}" alt="${title}" onerror="handleImageError(this, 'thumb')">
        ${isAdminMode ? '<button class="delete-btn">×</button>' : ''}
    `;
    
    // Configurar eventos de la nueva miniatura
    const img = thumbnail.querySelector('img');
    const mainImage = document.querySelector('.main-image');
    const galleryInfo = document.querySelector('.gallery-info h3');
    
    thumbnail.addEventListener('click', () => {
        if (mainImage && galleryInfo) {
            mainImage.src = img.src;
            mainImage.alt = img.alt;
            galleryInfo.textContent = img.alt;
            
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        }
    });
    
    // Botón eliminar
    const deleteBtn = thumbnail.querySelector('.delete-btn');
    if (deleteBtn && isAdminMode) {
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('¿Eliminar esta imagen?')) {
                thumbnail.remove();
            }
        });
    }
    
    thumbnailsContainer.appendChild(thumbnail);
    
    // Limpiar formulario
    document.getElementById('newImageFile').value = '';
    document.getElementById('newImageUrl').value = '';
    document.getElementById('newImageTitle').value = '';
    document.getElementById('imagePreview').style.display = 'none';
    
    alert('✅ Imagen agregada correctamente');
}

function closeGallery() {
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
        galleryModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentGalleryCategory = null;
    }
}

// ========== ADMINISTRADOR ==========
function enableAdminMode() {
    document.body.classList.add('admin-mode');
    const adminPanel = document.getElementById('adminPanel');
    const adminAccessBtn = document.getElementById('adminAccessBtn');
    
    if (adminPanel) adminPanel.classList.add('active');
    if (adminAccessBtn) {
        adminAccessBtn.textContent = 'Admin';
        adminAccessBtn.style.background = 'var(--accent)';
        adminAccessBtn.style.color = 'white';
    }
    
    isAdminMode = true;
    localStorage.setItem('adminLoggedIn', 'true');
}

function disableAdminMode() {
    document.body.classList.remove('admin-mode');
    const adminPanel = document.getElementById('adminPanel');
    const adminAccessBtn = document.getElementById('adminAccessBtn');
    
    if (adminPanel) adminPanel.classList.remove('active');
    if (adminAccessBtn) {
        adminAccessBtn.textContent = 'Acceder';
        adminAccessBtn.style.background = 'transparent';
        adminAccessBtn.style.color = 'var(--accent)';
    }
    
    isAdminMode = false;
    localStorage.removeItem('adminLoggedIn');
}

// ========== UTILIDADES ==========
function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = '✦';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.fontSize = (Math.random() * 15 + 10) + 'px';
        star.style.animationDelay = (Math.random() * 3) + 's';
        container.appendChild(star);
    }
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

function setupEventListeners() {
    // Carrusel
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Soporte táctil para carrusel
    const carouselTrack = document.getElementById('carouselTrack');
    if (carouselTrack) {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        carouselTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            clearInterval(autoSlideInterval);
        });
        
        carouselTrack.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        carouselTrack.addEventListener('touchend', () => {
            if (!isDragging) return;
            
            const diff = startX - currentX;
            const swipeThreshold = 50;
            
            if (diff > swipeThreshold) {
                nextSlide();
            } else if (diff < -swipeThreshold) {
                prevSlide();
            }
            
            isDragging = false;
            resetAutoSlide();
        });
    }
    
    // Galería
    const closeModalBtn = document.querySelector('.close-modal');
    const galleryModal = document.getElementById('galleryModal');
    
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeGallery);
    if (galleryModal) {
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) closeGallery();
        });
    }
    
    // Administrador
    const adminAccessBtn = document.getElementById('adminAccessBtn');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const cancelAdminBtn = document.getElementById('cancelAdminBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const clearStorageBtn = document.getElementById('clearStorageBtn');
    
    if (adminAccessBtn) {
        adminAccessBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (isAdminMode) {
                const adminPanel = document.getElementById('adminPanel');
                if (adminPanel) adminPanel.classList.toggle('active');
            } else {
                const adminModal = document.getElementById('adminModal');
                if (adminModal) adminModal.classList.add('active');
            }
        });
    }
    
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('adminEmail').value;
            const password = document.getElementById('adminPassword').value;
            
            if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
                enableAdminMode();
                const adminModal = document.getElementById('adminModal');
                if (adminModal) adminModal.classList.remove('active');
                adminLoginForm.reset();
                alert('¡Modo administrador activado!');
            } else {
                alert('Credenciales incorrectas');
            }
        });
    }
    
    if (cancelAdminBtn) {
        cancelAdminBtn.addEventListener('click', () => {
            const adminModal = document.getElementById('adminModal');
            if (adminModal) adminModal.classList.remove('active');
            const adminLoginForm = document.getElementById('adminLoginForm');
            if (adminLoginForm) adminLoginForm.reset();
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            disableAdminMode();
            alert('Sesión de administrador cerrada');
        });
    }
    
    if (clearStorageBtn) {
        clearStorageBtn.addEventListener('click', () => {
            if (confirm('¿Restaurar configuración inicial?')) {
                localStorage.clear();
                location.reload();
            }
        });
    }
    
    // Puntos del carrusel
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
}
