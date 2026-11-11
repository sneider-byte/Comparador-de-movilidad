/* ==========================================================================
   TAXONOMÍA COMPLETA (Categorías y Subcategorías de Vehículos)
   ========================================================================== */
const TAXONOMY = {
  "Automóviles": [
    "Automóviles económicos", "Automóviles compactos", "Hatchback", "Sedanes subcompactos", 
    "Sedanes compactos", "Sedanes medianos", "Sedanes ejecutivos", "Sedanes de lujo", 
    "Coupés deportivos", "Deportivos de alto rendimiento", "Superdeportivos", "Hiperdeportivos", 
    "Descapotables y convertibles", "Gran turismo", "Automóviles eléctricos", "Automóviles híbridos"
  ],
  "SUV y pick-ups": [
    "SUV subcompactas", "SUV compactas", "SUV medianas", "SUV grandes", "SUV de lujo", 
    "SUV deportivas", "SUV híbridas", "SUV eléctricas", "Todoterrenos 4x2", "Todoterrenos 4x4", 
    "Todoterrenos extremos", "Vehículos de expedición y aventura", "Camionetas familiares de siete pasajeros",
    "Pick-ups compactas", "Pick-ups pequeñas de trabajo", "Pick-ups medianas", "Pick-ups doble cabina", 
    "Pick-ups grandes", "Pick-ups de lujo", "Pick-ups deportivas", "Pick-ups todoterreno", 
    "Pick-ups híbridas", "Pick-ups eléctricas", "Pick-ups de trabajo pesado"
  ],
  "Motocicletas": [
    "Motos urbanas de 100 a 125 cc", "Motos urbanas de 150 a 200 cc", "Motos de trabajo", "Motos naked", 
    "Motos deportivas de baja cilindrada", "Motos deportivas de media cilindrada", "Superbikes", 
    "Hyperbikes", "Motos doble propósito", "Motos enduro", "Motos motocross", "Motos trail", 
    "Motos adventure", "Motos touring", "Motos sport touring", "Motos cruiser", "Motos chopper", 
    "Motos eléctricas", "Scooters automáticos", "Maxi scooters", "Motos de competición"
  ],
  "Vehículos comerciales": [
    "Microvans", "Furgonetas pequeñas", "Furgonetas medianas", "Furgonetas grandes", "Vans de carga", 
    "Vans de pasajeros", "Vehículos refrigerados", "Camiones livianos de reparto", "Camiones tipo estacas", 
    "Camiones tipo furgón", "Camiones tipo plataforma", "Camiones eléctricos de reparto"
  ],
  "Camiones de carga": [
    "Camiones livianos", "Camiones de 3,5 a 7,5 toneladas", "Camiones medianos", "Camiones pesados", 
    "Camiones extrapesados", "Camiones de estacas", "Camiones furgón", "Camiones refrigerados", 
    "Camiones cisterna", "Camiones volqueta", "Camiones grúa", "Camiones de plataforma", 
    "Camiones portacontenedores", "Camiones de ganadería", "Camiones de minería"
  ],
  "Tractocamiones": [
    "Tractocamiones americanos", "Tractocamiones europeos", "Tractocamiones 4x2", "Tractocamiones 6x2", 
    "Tractocamiones 6x4", "Tractocamiones 8x4", "Tractocamiones de larga distancia", 
    "Tractocamiones de carga pesada", "Tractocamiones de carga extrapesada", "Tractocamiones para minería", 
    "Tractocamiones para transporte de líquidos", "Tractocamiones para contenedores"
  ],
  "Autobuses": [
    "Microbuses", "Minibuses", "Busetas", "Buses urbanos", "Buses intermunicipales", "Buses de carretera", 
    "Buses de turismo", "Buses ejecutivos", "Buses de dos pisos", "Buses articulados", "Buses biarticulados", 
    "Buses eléctricos", "Buses híbridos"
  ],
  "Maquinaria pesada": [
    "Excavadoras", "Miniexcavadoras", "Retroexcavadoras", "Cargadores frontales", "Bulldozers", 
    "Motoniveladoras", "Compactadores y rodillos", "Volquetas articuladas", "Camiones mineros gigantes", 
    "Grúas móviles", "Grúas sobre orugas", "Manipuladores telescópicos", "Montacargas", 
    "Tractores industriales", "Perforadoras mineras"
  ],
  "Vehículos agrícolas y especiales": [
    "Tractores agrícolas pequeños", "Tractores agrícolas medianos", "Tractores agrícolas grandes", 
    "Tractores articulados", "Cosechadoras", "Pulverizadoras autopropulsadas", "Sembradoras autopropulsadas", 
    "Cargadores agrícolas", "Camiones de bomberos", "Ambulancias", "Vehículos militares", 
    "Vehículos de rescate", "Vehículos blindados"
  ]
};

/* ==========================================================================
   BASE DE DATOS DE VEHÍCULOS
   ========================================================================== */
const VEHICLES_DATABASE = [
  // A. AUTOMÓVILES
  {
    id: "v1",
    rank: 1,
    marca: "Bugatti",
    modelo: "Chiron Super Sport",
    anio: 2024,
    pais: "Francia",
    categoria: "Automóviles",
    subcategoria: "Hiperdeportivos",
    origen: "Internacional",
    motor: "8.0L W16 Cuatriturbo",
    potencia: "1,600 HP",
    torque: "1,600 Nm",
    velocidadMax: "440 km/h",
    consumo: "21.5 L/100km",
    precio: "$3,800,000 USD",
    combustible: "Gasolina",
    transmision: "Doble embrague 7 vel.",
    traccion: "AWD",
    pros: "Velocidad tope histórica, ingeniería de aviación.",
    cons: "Costo de mantenimiento exorbitante.",
    seguridad: "Monocasco de carbono, frenos carbocerámicos.",
    uniqueFeature: "Consume el tanque de 100 litros en 9 minutos a máxima velocidad.",
    img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "v5",
    rank: 1,
    marca: "Porsche",
    modelo: "911 GT3 RS",
    anio: 2024,
    pais: "Alemania",
    categoria: "Automóviles",
    subcategoria: "Deportivos de alto rendimiento",
    origen: "Colombia",
    motor: "4.0L Bóxer Atmosférico",
    potencia: "525 HP",
    torque: "465 Nm",
    velocidadMax: "296 km/h",
    consumo: "13.4 L/100km",
    precio: "$310,000 USD",
    combustible: "Gasolina",
    transmision: "PDK 7 velocidades",
    traccion: "RWD",
    pros: "Paso por curva incomparable, aerodinámica activa DRS.",
    cons: "Suspensión muy rígida para uso diario.",
    seguridad: "Jaula antivuelco, arneses de 6 puntos.",
    uniqueFeature: "Alerón trasero activo con DRS que genera 860 kg de carga aerodinámica a 285 km/h.",
    img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80"
  },

  // B & C. SUV Y PICK-UPS
  {
    id: "v6",
    rank: 1,
    marca: "Toyota",
    modelo: "Hilux GR-Sport",
    anio: 2025,
    pais: "Japón",
    categoria: "SUV y pick-ups",
    subcategoria: "Pick-ups todoterreno",
    origen: "Colombia",
    motor: "2.8L Turbodiésel",
    potencia: "221 HP",
    torque: "550 Nm",
    velocidadMax: "180 km/h",
    consumo: "8.5 L/100km",
    precio: "$65,000 USD",
    combustible: "Diésel",
    transmision: "Automática 6 vel.",
    traccion: "4x4 con reductora",
    pros: "Fiabilidad indestructible, suspensión Fox probada en Rally.",
    cons: "Interior algo rústico comparado con SUV de lujo.",
    seguridad: "Toyota Safety Sense, 7 airbags.",
    uniqueFeature: "Trochas ensanchadas +140mm con amortiguadores monotubo Fox de alto rendimiento.",
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80"
  },

  // D. MOTOCICLETAS
  {
    id: "v3",
    rank: 1,
    marca: "Yamaha",
    modelo: "YZF-R1M",
    anio: 2025,
    pais: "Japón",
    categoria: "Motocicletas",
    subcategoria: "Superbikes",
    origen: "Colombia",
    motor: "998 cc Crossplane",
    potencia: "200 HP",
    torque: "113.3 Nm",
    velocidadMax: "299 km/h",
    consumo: "6.5 L/100km",
    precio: "$27,000 USD",
    combustible: "Gasolina",
    transmision: "Manual 6 vel.",
    traccion: "Cadena",
    refrigeracion: "Líquida",
    autonomia: "250 km",
    pros: "Telemetría y suspensión Öhlins electrónica.",
    cons: "Exigente físicamente en ciudad.",
    seguridad: "IMU de 6 ejes, ABS en curva.",
    uniqueFeature: "Cigüeñal Crossplane con orden de encendido desigual para mayor tracción en curva.",
    img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80"
  },

  // E. VEHÍCULOS COMERCIALES
  {
    id: "v7",
    rank: 1,
    marca: "Mercedes-Benz",
    modelo: "Sprinter 516 CDI",
    anio: 2024,
    pais: "Alemania",
    categoria: "Vehículos comerciales",
    subcategoria: "Vans de carga",
    origen: "Colombia",
    motor: "2.0L Turbodiésel Twin-Turbo",
    potencia: "163 HP",
    torque: "380 Nm",
    velocidadMax: "155 km/h",
    consumo: "9.2 L/100km",
    precio: "$52,000 USD",
    combustible: "Diésel",
    transmision: "9G-TRONIC Automática",
    traccion: "RWD / Doble Rueda",
    pros: "Volumen de carga de hasta 17 m³, máxima ergonomía.",
    cons: "Costo de repuestos originales.",
    seguridad: "Asistente para viento lateral, Crosswind Assist.",
    uniqueFeature: "Asistente que frena las ruedas individualmente para corregir ráfagas de viento lateral.",
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=600&q=80"
  },

  // F & G. CAMIONES Y TRACTOCAMIONES
  {
    id: "v2",
    rank: 1,
    marca: "Kenworth",
    modelo: "T680 Next Gen",
    anio: 2025,
    pais: "Estados Unidos",
    categoria: "Tractocamiones",
    subcategoria: "Tractocamiones americanos",
    origen: "Colombia",
    motor: "PACCAR MX-13",
    potencia: "510 HP",
    torque: "2,500 Nm",
    velocidadMax: "110 km/h",
    consumo: "35 L/100km",
    precio: "$180,000 USD",
    combustible: "Diésel",
    transmision: "PACCAR TX-12 Automatizada",
    traccion: "6x4",
    pbr: "52,000 kg (PBV)",
    ejes: "3 Ejes (6x4)",
    pros: "Eficiencia aerodinámica y confort en cabina de larga distancia.",
    cons: "Gran radio de giro.",
    seguridad: "Radar frontal colisión autónoma.",
    uniqueFeature: "Diseño de trompa que ahorra hasta un 6% de combustible por dinámica de fluidos.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80"
  },

  // H. AUTOBUSES
  {
    id: "v8",
    rank: 1,
    marca: "Volvo",
    modelo: "B13R 9700 Grand",
    anio: 2025,
    pais: "Suecia",
    categoria: "Autobuses",
    subcategoria: "Buses de carretera",
    origen: "Colombia",
    motor: "Volvo D13K 12.8L",
    potencia: "500 HP",
    torque: "2,500 Nm",
    velocidadMax: "120 km/h",
    consumo: "26 L/100km",
    precio: "$290,000 USD",
    combustible: "Diésel / Euro VI",
    transmision: "I-Shift 12 velocidades",
    traccion: "6x2",
    pros: "Silencio de marcha y seguridad integral para 50 pasajeros.",
    cons: "Requiere infraestructura de mantenimiento especializada.",
    seguridad: "Sistema detección de peatones y alerta de carril.",
    uniqueFeature: "Dirección Dinámica Volvo (VDS) que permite maniobrar con un solo dedo incluso cargado.",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
  },

  // I. MAQUINARIA PESADA
  {
    id: "v4",
    rank: 1,
    marca: "Caterpillar",
    modelo: "336 Next Gen",
    anio: 2024,
    pais: "Estados Unidos",
    categoria: "Maquinaria pesada",
    subcategoria: "Excavadoras",
    origen: "Colombia",
    motor: "Cat C7.1",
    potencia: "302 HP",
    torque: "1,200 Nm",
    velocidadMax: "4.7 km/h",
    consumo: "18 L/h",
    precio: "$320,000 USD",
    combustible: "Diésel",
    transmision: "Hidrostática",
    traccion: "Orugas",
    pesoOperativo: "37,200 kg",
    profundidadExcavacion: "8.2 metros",
    fuerzaLevantamiento: "245 kN",
    pros: "Electrohidráulica de alta precisión y balde de alta capacidad.",
    cons: "Requiere transporte especial en cama baja.",
    seguridad: "Cercas virtuales 2D para evitar contacto con cables eléctricos.",
    uniqueFeature: "Báscula integrada de fábrica que pesa el material en el balde en tiempo real.",
img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
  },
  // J. VEHÍCULOS AGRÍCOLAS Y ESPECIALES
  {
    id: "v9",
    rank: 1,
    marca: "John Deere",
    modelo: "8R 410",
    anio: 2025,
    pais: "Estados Unidos",
    categoria: "Vehículos agrícolas y especiales",
    subcategoria: "Tractores agrícolas grandes",
    origen: "Colombia",
    motor: "PowerTech 9.0L 6 Cilindros",
    potencia: "410 HP",
    torque: "1,850 Nm",
    velocidadMax: "50 km/h",
    consumo: "22 L/h",
    precio: "$380,000 USD",
    combustible: "Diésel",
    transmision: "e23 PowerShift / AutoPowr",
    traccion: "4x4 / Orugas opcionales",
    pros: "Piloto automático satelital GPS con margen de error de 2 cm.",
    cons: "Costo de adquisición inicial alto.",
    seguridad: "Cabina presurizada con filtración de agroquímicos.",
    uniqueFeature: "Guiado autónomo AutoTrac que siembra campos sin intervención humana continua.",
    img: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=600&q=80"
  }
];

let comparisonList = [];

/* ==========================================================================
   INICIALIZACIÓN Y EVENTOS DEL DOM
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderSidebarCategories();
  renderCatalog(VEHICLES_DATABASE);
  setupMobileMenu();
});

function renderSidebarCategories() {
  const container = document.getElementById('sidebarCategories');
  const catFilter = document.getElementById('filterCategory');
  
  if (!container || !catFilter) return;

  container.innerHTML = '';
  catFilter.innerHTML = '<option value="">Todas las Categorías</option>';

  Object.keys(TAXONOMY).forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'sidebar-subcat-btn';
    btn.id = `cat-btn-${cat.replace(/\s+/g, '-')}`;
    btn.innerText = `▸ ${cat}`;
    btn.onclick = () => {
      filterByCategory(cat);
      if (window.innerWidth <= 992) toggleSidebarMobile();
    };
    container.appendChild(btn);

    const opt = document.createElement('option');
    opt.value = cat;
    opt.innerText = cat;
    catFilter.appendChild(opt);
  });
}

function showSection(sectionId) {
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active-nav'));

  if (sectionId === 'inicio') {
    const sec = document.getElementById('sec-inicio');
    if (sec) sec.classList.add('active');
    const navBtn = document.querySelector('.sidebar-nav a[onclick*="inicio"]');
    if (navBtn) navBtn.classList.add('active-nav');
    clearCatActiveState();
  }
  if (sectionId === 'catalogo') {
    const sec = document.getElementById('sec-catalogo');
    if (sec) sec.classList.add('active');
    const navBtn = document.querySelector('.sidebar-nav a[onclick*="catalogo"]');
    if (navBtn) navBtn.classList.add('active-nav');
  }
  if (sectionId === 'ficha') {
    const sec = document.getElementById('sec-ficha');
    if (sec) sec.classList.add('active');
  }
  if (sectionId === 'comparador') {
    const sec = document.getElementById('sec-comparador');
    if (sec) sec.classList.add('active');
    const navBtn = document.querySelector('.sidebar-nav a[onclick*="comparador"]');
    if (navBtn) navBtn.classList.add('active-nav');
    clearCatActiveState();
    renderComparatorTable();
  }
}

function clearCatActiveState() {
  document.querySelectorAll('.sidebar-subcat-btn').forEach(btn => btn.classList.remove('active-cat'));
}

function filterByCategory(catName) {
  showSection('catalogo');
  const catFilter = document.getElementById('filterCategory');
  if (catFilter) catFilter.value = catName;
  
  clearCatActiveState();
  const activeBtn = document.getElementById(`cat-btn-${catName.replace(/\s+/g, '-')}`);
  if (activeBtn) activeBtn.classList.add('active-cat');

  onCategoryFilterChange();
  applyFilters();
}

function onCategoryFilterChange() {
  const catFilter = document.getElementById('filterCategory');
  const subSelect = document.getElementById('filterSubcategory');
  if (!catFilter || !subSelect) return;

  const catSelected = catFilter.value;
  subSelect.innerHTML = '<option value="">Todas las Subcategorías</option>';
  
  if (catSelected && TAXONOMY[catSelected]) {
    TAXONOMY[catSelected].forEach(sub => {
      const opt = document.createElement('option');
      opt.value = sub;
      opt.innerText = sub;
      subSelect.appendChild(opt);
    });
  }
  applyFilters();
}

function applyFilters() {
  const searchInput = document.getElementById('searchInput');
  const catFilter = document.getElementById('filterCategory');
  const subFilter = document.getElementById('filterSubcategory');
  const originFilter = document.getElementById('filterOrigin');
  const fuelFilter = document.getElementById('filterFuel');

  const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
  const catVal = catFilter ? catFilter.value : '';
  const subVal = subFilter ? subFilter.value : '';
  const originVal = originFilter ? originFilter.value : '';
  const fuelVal = fuelFilter ? fuelFilter.value : '';

  const filtered = VEHICLES_DATABASE.filter(v => {
    const matchSearch = v.marca.toLowerCase().includes(searchVal) || 
                        v.modelo.toLowerCase().includes(searchVal) || 
                        v.pais.toLowerCase().includes(searchVal);
    const matchCat = !catVal || v.categoria === catVal;
    const matchSub = !subVal || v.subcategoria === subVal;
    const matchOrigin = !originVal || v.origen === originVal;
    const matchFuel = !fuelVal || v.combustible === fuelVal;

    return matchSearch && matchCat && matchSub && matchOrigin && matchFuel;
  });

  renderCatalog(filtered);
}

function renderCatalog(vehicles) {
  const grid = document.getElementById('vehicleGrid');
  if (!grid) return;
  
  grid.innerHTML = '';

  if (vehicles.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted); grid-column: 1/-1; text-align:center; padding:3rem;">No se encontraron vehículos registrados para los filtros seleccionados.</p>';
    return;
  }

  vehicles.forEach(v => {
    const isComparing = comparisonList.includes(v.id);
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="rank-badge">Top #${v.rank}</div>
      <img src="${v.img}" alt="${v.marca} ${v.modelo}" class="card-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80';">
      <div class="card-body">
        <span class="card-tag">${v.categoria} / ${v.subcategoria}</span>
        <h3 class="card-title">${v.marca} ${v.modelo} (${v.anio})</h3>
        
        <div class="specs-preview">
          <div><strong>Potencia:</strong> ${v.potencia}</div>
          <div><strong>Motor:</strong> ${v.motor}</div>
          <div><strong>Origen:</strong> ${v.pais}</div>
          <div><strong>Precio:</strong> ${v.precio}</div>
        </div>

        <div class="pros-cons">
          <div class="pros">✓ ${v.pros}</div>
          <div class="cons">✗ ${v.cons}</div>
        </div>

        <div style="background:#0a0a0a; padding:0.5rem; font-size:0.75rem; border-left:2px solid #fff; margin-bottom:1rem;">
          <strong>Rasgo Único:</strong> ${v.uniqueFeature}
        </div>

        <div class="card-actions">
          <button class="btn-card" onclick="viewFicha('${v.id}')">Ficha Técnica</button>
          <button class="btn-card ${isComparing ? 'active-btn' : ''}" onclick="toggleCompare('${v.id}')">
            ${isComparing ? 'Quitar' : '+ Comparar'}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function viewFicha(vehicleId) {
  const v = VEHICLES_DATABASE.find(item => item.id === vehicleId);
  if (!v) return;

  const container = document.getElementById('fichaDetailContainer');
  if (!container) return;

  // Campos específicos dinámicos según tipo de vehículo
  let specificTechnicalData = '';
  if (v.categoria === "Tractocamiones" || v.categoria === "Camiones de carga") {
    specificTechnicalData = `
      <tr><th>Peso Bruto Vehicular (PBV)</th><td>${v.pbr || 'N/A'}</td></tr>
      <tr><th>Configuración de Ejes</th><td>${v.ejes || 'N/A'}</td></tr>
    `;
  } else if (v.categoria === "Motocicletas") {
    specificTechnicalData = `
      <tr><th>Tipo de Refrigeración</th><td>${v.refrigeracion || 'N/A'}</td></tr>
      <tr><th>Autonomía estimada</th><td>${v.autonomia || 'N/A'}</td></tr>
    `;
  } else if (v.categoria === "Maquinaria pesada") {
    specificTechnicalData = `
      <tr><th>Peso Operativo</th><td>${v.pesoOperativo || 'N/A'}</td></tr>
      <tr><th>Profundidad de Excavación</th><td>${v.profundidadExcavacion || 'N/A'}</td></tr>
      <tr><th>Fuerza de Levantamiento</th><td>${v.fuerzaLevantamiento || 'N/A'}</td></tr>
    `;
  }

  container.innerHTML = `
    <div class="ficha-header">
      <div>
        <span class="card-tag">${v.categoria} > ${v.subcategoria}</span>
        <h1 style="font-size:2rem; margin:0.5rem 0;">${v.marca} ${v.modelo}</h1>
        <p style="color:var(--text-muted); margin-bottom:1rem;">Año ${v.anio} | Origen: ${v.pais} (${v.origen})</p>
        <p><strong>Descripción:</strong> Clasificado en la posición #${v.rank} dentro de su subcategoría por sus especificaciones técnicas de ingeniería.</p>
        <div style="margin-top:1.5rem; padding:1rem; background:#000; border:1px solid #333;">
          <h4 style="color:#fff;">Característica Única Exclusiva:</h4>
          <p style="color:var(--text-muted); font-size:0.9rem;">${v.uniqueFeature}</p>
        </div>
      </div>
      <div>
        <img src="${v.img}" class="ficha-img" alt="${v.modelo}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80';">
      </div>
    </div>

    <h3>Ficha Técnica Completa</h3>
    <table class="spec-table">
      <thead><tr><th>Especificación</th><th>Detalle de Ingeniería</th></tr></thead>
      <tbody>
        <tr><th>Motorización</th><td>${v.motor}</td></tr>
        <tr><th>Potencia máxima</th><td>${v.potencia}</td></tr>
        <tr><th>Torque máximo</th><td>${v.torque}</td></tr>
        <tr><th>Transmisión</th><td>${v.transmision}</td></tr>
        <tr><th>Tracción</th><td>${v.traccion}</td></tr>
        <tr><th>Velocidad Máxima</th><td>${v.velocidadMax}</td></tr>
        <tr><th>Consumo / Eficiencia</th><td>${v.consumo}</td></tr>
        ${specificTechnicalData}
        <tr><th>Sistemas de Seguridad</th><td>${v.seguridad}</td></tr>
        <tr><th>Precio Estimado</th><td>${v.precio}</td></tr>
      </tbody>
    </table>
  `;
  showSection('ficha');
}

function toggleCompare(id) {
  const idx = comparisonList.indexOf(id);
  if (idx > -1) {
    comparisonList.splice(idx, 1);
  } else {
    if (comparisonList.length >= 4) {
      alert('Puedes comparar un máximo de 4 vehículos al mismo tiempo.');
      return;
    }
    comparisonList.push(id);
  }
  
  const countBadge = document.getElementById('compareCount');
  if (countBadge) countBadge.innerText = comparisonList.length;
  
  applyFilters();
}

function clearComparison() {
  comparisonList = [];
  const countBadge = document.getElementById('compareCount');
  if (countBadge) countBadge.innerText = 0;
  
  renderComparatorTable();
  applyFilters();
}

function renderComparatorTable() {
  const container = document.getElementById('comparatorContainer');
  if (!container) return;

  if (comparisonList.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:2rem;">No has seleccionado vehículos para comparar. Presiona "+ Comparar" en las tarjetas del catálogo.</p>';
    return;
  }
  const selectedVehicles = VEHICLES_DATABASE.filter(v => comparisonList.includes(v.id));
  container.innerHTML = `
    <table class="comparator-table">
      <thead>
        <tr>
          <th>Atributo</th>
          ${selectedVehicles.map(v => `<th>${v.marca} ${v.modelo}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr><th>Precio</th>${selectedVehicles.map(v => `<td>${v.precio}</td>`).join('')}</tr>
        <tr><th>Motor</th>${selectedVehicles.map(v => `<td>${v.motor}</td>`).join('')}</tr>
        <tr><th>Potencia</th>${selectedVehicles.map(v => `<td>${v.potencia}</td>`).join('')}</tr>
        <tr><th>Torque</th>${selectedVehicles.map(v => `<td>${v.torque}</td>`).join('')}</tr>
        <tr><th>Característica Única</th>${selectedVehicles.map(v => `<td>${v.uniqueFeature}</td>`).join('')}</tr>
        <tr><th>Acción</th>${selectedVehicles.map(v => `<td><button onclick="toggleCompare('${v.id}'); renderComparatorTable();" class="btn-card">Quitar</button></td>`).join('')}</tr>
      </tbody>
    </table>
  `;
}

/* Control Menú Móvil */
function setupMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', toggleSidebarMobile);
  }
  if (menuClose && sidebar) {
    menuClose.addEventListener('click', toggleSidebarMobile);
  }
}

function toggleSidebarMobile() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.toggle('active');
}