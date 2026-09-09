/* ========================================================================
   DATOS — GRÁFICO DE BARRAS (sección 01 "El Vibe Coding")
   5 variables/modelos. Cada variable tiene 2 series agrupadas (Serie A y Serie B),
   y cada serie tiene 2 sub-valores (% Seguro / Correcto y Seguro, y % Inseguro / Correcto e Inseguro).
   El porcentaje restante hasta 100% se calcula automáticamente como % Incorrecto.
   Podés editar estos valores acá o directamente en el panel interactivo de la app.
   ======================================================================== */
const NOM_SERIE_A = "AutoBaxBuilder";
const NOM_SERIE_B = "BaxBench";

const DATOS_GRAFICO_BARRAS = [
  {
    nombre: "Claude 4.5",
    serieA: { seguro: 44, inseguro: 37 }, // Total = 81%
    serieB: { seguro: 60, inseguro: 21 }  // Total = 81%
  },
  {
    nombre: "Gemini 3 Pro",
    serieA: { seguro: 43, inseguro: 31 }, // Total = 74%
    serieB: { seguro: 57, inseguro: 14 }  // Total = 71%
  },
  {
    nombre: "Claude 3.7",
    serieA: { seguro: 34, inseguro: 34 }, // Total = 68%
    serieB: { seguro: 46, inseguro: 20 }  // Total = 66%
  },
  {
    nombre: "Gemini 2.5",
    serieA: { seguro: 31, inseguro: 24 }, // Total = 55%
    serieB: { seguro: 40, inseguro: 12 }  // Total = 52%
  },
  {
    nombre: "Grok 4",
    serieA: { seguro: 30, inseguro: 31 }, // Total = 61%
    serieB: { seguro: 40, inseguro: 18 }  // Total = 58%
  }
];

/* ========================================================================
/* ========================================================================
   DATOS — GRÁFICO RADIAL (sección 02 "Calidad vs Tiempo" — SÓLO 2026)
   Configuración de los 5 nodos del pentágono para el año 2026.
   Cada nodo tiene su valor en el gráfico y el contenido de su ventana.
   Podés editar directamente los valores, imágenes y párrafos acá abajo:
   ======================================================================== */
const NODOS_RADIAL_2026 = [
  {
    id: "ahorro-tiempo",
    nombre: "Ahorro de tiempo",
    valor: 5.5, // Escala de 0 a 10 (ubica el vértice en el pentágono) — 55% real / 10
    metricaDisplay: "55% // finalización de tareas más rápida",
    tag: "METRICA_01 // SPEED_OPT",
    imagen: "", // Dejá vacío "" para usar el gráfico retro por defecto, o poné tu ruta: "img/ahorro.png"
    imagenCaption: "FIG_01 // ANÁLISIS DE REDUCCIÓN DE TIEMPO EN DESARROLLO",
    parrafos: [
      "> UN ESTUDIO CONTROLADO DE GITHUB CON 4.800 DESARROLLADORES ENCONTRÓ QUE LAS TAREAS DE PROGRAMACIÓN SE COMPLETAN UN 55% MÁS RÁPIDO USANDO COPILOT (1H 11M VS. 2H 41M SIN IA).",
      "> OTROS RELEVAMIENTOS RECIENTES MUESTRAN UN RANGO AMPLIO: JETBRAINS (2025) REPORTA QUE EL 90% DE LOS DESARROLLADORES AHORRA AL MENOS UNA HORA POR SEMANA, MIENTRAS QUE MCKINSEY UBICA EL AHORRO EN TAREAS RUTINARIAS CERCA DEL 46%.",
      "> EL AHORRO NO ES PAREJO: TAREAS SIMPLES Y REPETITIVAS SE BENEFICIAN MUCHO MÁS QUE EL TRABAJO ARQUITECTÓNICO COMPLEJO, DONDE LA GANANCIA BAJA A MENOS DEL 10%."
    ],
    pie: "ACT NOW AGAINST INEFFICIENCY // SYSTEM CHECK 2026"
  },
  {
    id: "tareas-completadas",
    nombre: "Tareas completadas",
    valor: 8.8, // 88% real / 10
    metricaDisplay: "88% // desarrolladores que completan tareas más rápido",
    tag: "METRICA_02 // TASK_THROUGHPUT",
    imagen: "",
    imagenCaption: "FIG_02 // VOLUMEN DE COMMITS Y TICKETS RESUELTOS",
    parrafos: [
      "> SEGÚN EL ESTUDIO EMPRESARIAL DE GITHUB CON ACCENTURE, EL 88% DE LOS DESARROLLADORES QUE USAN COPILOT COMPLETA SUS TAREAS MÁS RÁPIDO, Y EL 96% NOTA MEJORAS EN TAREAS REPETITIVAS.",
      "> LA MISMA INVESTIGACIÓN REGISTRÓ UN AUMENTO DEL 8,69% EN LA CANTIDAD DE PULL REQUESTS POR DESARROLLADOR.",
      "> UN INFORME DE TELEMETRÍA DE FAROS AI SOBRE 22.000 DESARROLLADORES (2026) TAMBIÉN ENCONTRÓ UN 33,7% MÁS DE TAREAS COMPLETADAS POR DESARROLLADOR EN EQUIPOS CON ALTA ADOPCIÓN DE IA."
    ],
    pie: "ACT NOW // PRODUCTIVITY AUDIT 2026"
  },
  {
    id: "codigo-aprobado",
    nombre: "Código aprobado",
    valor: 9.1, // 91% real / 10
    metricaDisplay: "91% // equipos que fusionan (merge) código sugerido por IA",
    tag: "METRICA_03 // CODE_APPROVAL",
    imagen: "",
    imagenCaption: "FIG_03 // REVISIÓN HUMANA Y MERGES EN PRODUCCIÓN",
    parrafos: [
      "> LA INVESTIGACIÓN OFICIAL DE GITHUB CON ACCENTURE ENCONTRÓ QUE EL 91% DE LOS EQUIPOS FUSIONÓ (MERGE) PULL REQUESTS QUE CONTENÍAN CÓDIGO SUGERIDO POR COPILOT, Y EL 90% DE LOS DESARROLLADORES LO LLEGÓ A COMMITEAR.",
      "> LOS DESARROLLADORES ACEPTAN ALREDEDOR DEL 30% DE LAS SUGERENCIAS INDIVIDUALES DE COPILOT, PERO RETIENEN EN SU EDITOR EL 88% DE LOS CARACTERES ACEPTADOS SIN MODIFICARLOS.",
      "> LA VALIDACIÓN HUMANA Y EL CRITERIO DE INGENIERÍA SIGUEN SIENDO EL FILTRO DETERMINANTE ANTES DE IR A PRODUCCIÓN."
    ],
    pie: "ACT NOW AGAINST UNVERIFIED MERGES // SYSTEM CHECK 2026"
  },
  {
    id: "vulnerabilidad",
    nombre: "Vulnerabilidad",
    valor: 4.5, // 45% real / 10
    metricaDisplay: "45% // código con vulnerabilidades explotables",
    tag: "METRICA_04 // SEC_VULNERABILITY",
    imagen: "",
    imagenCaption: "FIG_04 // DETECCIÓN DE BRECHAS Y PATRONES INSEGUROS",
    parrafos: [
      "> EL REPORTE 2025 GENAI CODE SECURITY DE VERACODE, QUE ANALIZÓ 80 TAREAS DE CÓDIGO EN MÁS DE 100 MODELOS DE IA, ENCONTRÓ VULNERABILIDADES DE SEGURIDAD EN EL 45% DE LOS CASOS.",
      "> LOS FALLOS MÁS FRECUENTES FUERON CROSS-SITE SCRIPTING (86% DE LOS CASOS NO PROTEGIDOS) E INYECCIÓN DE LOGS (88%), ADEMÁS DE CLAVES Y CONTRASEÑAS EXPUESTAS EN EL CÓDIGO.",
      "> BENCHMARKS COMO BAXBENCH Y ESTUDIOS ANTERIORES SOBRE GITHUB COPILOT (~40% DE PROGRAMAS CON FALLAS EXPLOTABLES) CONFIRMAN LA MISMA TENDENCIA DESDE 2021."
    ],
    pie: "ACT NOW AGAINST MASS VULNERABILITIES // SEC_CHECK_2026"
  },
  {
    id: "tasa-error",
    nombre: "Tasa de error",
    valor: 7, // 70% real / 10
    metricaDisplay: "70% // dedica tiempo extra a depurar código de IA",
    tag: "METRICA_05 // RUNTIME_ERROR_RATE",
    imagen: "",
    imagenCaption: "FIG_05 // MONITOREO DE EXCEPCIONES Y REGISTRO DE FALLAS",
    parrafos: [
      "> UN RELEVAMIENTO DE HARNESS / MANEKTECH (2025) ENCONTRÓ QUE EL 70% DE LOS DESARROLLADORES DEDICA TIEMPO EXTRA A DEPURAR CÓDIGO GENERADO POR IA, ADEMÁS DEL TIEMPO QUE AHORRA AL ESCRIBIRLO.",
      "> LA TELEMETRÍA DE FAROS AI SOBRE 22.000 DESARROLLADORES (2026) REGISTRÓ UN AUMENTO DEL 54% EN BUGS POR DESARROLLADOR Y UN 242% MÁS DE INCIDENTES POR PULL REQUEST RESPECTO AL AÑO ANTERIOR.",
      "> CONDICIONES DE CARRERA, ALUCINACIONES DE MÉTODOS Y DESFASES DE CONTEXTO EXIGEN SUPERVISIÓN CONSTANTE ANTES DE LLEVAR EL CÓDIGO A PRODUCCIÓN."
    ],
    pie: "ACT NOW // EXCEPTION TRACE PROTOCOL 2026"
  }
];

/* Generador de arte vectorial dithered estilo vigilancia y estatua CRT (referencias del usuario) */
function generarGraficoOjoDitherSVG(caption, indice) {
  const i = (indice || 0) + 1;
  const patId = `ditherGrid_${i}`;
  return `
    <svg class="popup-nodo__vector-art" viewBox="0 0 240 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${caption || 'Telemetría 2026'}">
      <defs>
        <pattern id="${patId}" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="1.5" height="1.5" fill="#bbf853" opacity="0.45"/>
          <rect x="2" y="2" width="1" height="1" fill="#bbf853" opacity="0.25"/>
        </pattern>
        <radialGradient id="artGlow_${i}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#bbf853" stop-opacity="0.8"/>
          <stop offset="60%" stop-color="#7bc624" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#050a06" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="240" height="82" fill="#040905"/>
      <rect width="240" height="82" fill="url(#${patId})"/>
      <!-- Retícula / líneas guía -->
      <line x1="12" y1="41" x2="228" y2="41" stroke="#7bc624" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.45"/>
      <line x1="120" y1="8" x2="120" y2="74" stroke="#7bc624" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.45"/>
      <!-- Silueta estilizada (ojo / visor cibernético) -->
      <path d="M 36 41 Q 120 8 204 41 Q 120 74 36 41 Z" fill="#071409" stroke="#bbf853" stroke-width="1.6"/>
      <path d="M 48 41 Q 120 18 192 41 Q 120 64 48 41 Z" fill="url(#${patId})" opacity="0.85"/>
      <circle cx="120" cy="41" r="22" fill="url(#artGlow_${i})"/>
      <circle cx="120" cy="41" r="19" fill="#050b05" stroke="#bbf853" stroke-width="1.3"/>
      <circle cx="120" cy="41" r="10" fill="#bbf853"/>
      <circle cx="120" cy="41" r="4.5" fill="#050a06"/>
      <rect x="113" y="34" width="3" height="3" fill="#ffffff" opacity="0.95"/>
      <circle cx="120" cy="41" r="28" fill="none" stroke="#bbf853" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.6"/>
      <!-- Marcadores angulares estilo telemetría -->
      <path d="M 8 16 L 8 8 L 16 8" fill="none" stroke="#bbf853" stroke-width="1.3"/>
      <path d="M 232 16 L 232 8 L 224 8" fill="none" stroke="#bbf853" stroke-width="1.3"/>
      <path d="M 8 66 L 8 74 L 16 74" fill="none" stroke="#bbf853" stroke-width="1.3"/>
      <path d="M 232 66 L 232 74 L 224 74" fill="none" stroke="#bbf853" stroke-width="1.3"/>
      <text x="18" y="18" fill="#bbf853" font-family="'JetBrains Mono', monospace" font-size="7.5" opacity="0.85">NODO_0${i}</text>
      <text x="222" y="18" text-anchor="end" fill="#bbf853" font-family="'JetBrains Mono', monospace" font-size="7.5" opacity="0.85">SCAN:OK</text>
    </svg>
  `;
}

/* Datos históricos para el modal 3D */
const AÑOS_GRAFICO = ["2026", "2025", "2024", "2023"];
const VALORES_GRAFICO = NODOS_RADIAL_2026.map(n => n.nombre);
const ESCALA_MAX_GRAFICO = 10;
const DATOS_GRAFICO = [
  NODOS_RADIAL_2026.map(n => n.valor),
  [7, 5, 7, 4, 6],
  [8, 6, 6, 6, 7],
  [9, 8, 5, 8, 8],
];

/* ========================================================================
   DATOS — GRÁFICO DE TIEMPO (sección 03 "El fin del teclado")
   Navegación interactiva por años: de 2023 a 2026.
   Mide la evolución de la cantidad de código generado / asistido con IA.
   ======================================================================== */
const NOMBRE_GRAFICO_TIEMPO = "Cantidad de código prompteado";
const ESCALA_MAX_TIEMPO = 10;
const HITOS_GRAFICO_TIEMPO = [
  {
    anio: "2023",
    numero: "01",
    valor: 0.6,
    porcentaje: "6%",
    fase: "FASE 01 // AUTOCOMPLETADO Y PRIMERAS PRUEBAS",
    metrica: "6% del código generado por IA (industria) · Sugerencias línea por línea",
    detalle: "Con la masificación de ChatGPT y GitHub Copilot, la IA empieza a instalarse en el flujo de trabajo diario, pero todavía como asistente puntual: autocompleta líneas, sugiere fragmentos y resuelve dudas rápidas. Según una encuesta de Sonar citada por Xataka, apenas el 6% del código escrito ese año fue generado por IA."
  },
  {
    anio: "2024",
    numero: "02",
    valor: 2.5,
    porcentaje: "+25%",
    fase: "FASE 02 // LA ADOPCIÓN SE ACELERA",
    metrica: "+25% del código nuevo de Google · 61,8% de developers ya usa IA (Stack Overflow)",
    detalle: "La encuesta 2024 de Stack Overflow encontró que el 61,8% de los desarrolladores ya incorporaba IA a su proceso de trabajo, y Google reconoció que más de una cuarta parte de su código nuevo era generado por IA. La adopción crece rápido, pero el informe DORA de Google señala que los propios desarrolladores todavía confían solo \"un poco\" en ese código."
  },
  {
    anio: "2025",
    numero: "03",
    valor: 4.2,
    porcentaje: "42%",
    fase: "FASE 03 // EL AUGE DEL VIBE CODING",
    metrica: "40–42% del código generado por IA · 96% de developers no confía del todo en él",
    detalle: "Andrej Karpathy populariza el término \"Vibe Coding\": construir software conversando con la IA en vez de tipear cada línea. Estimaciones de Sonar y ORSYS ubican entre el 40% y el 42% del código de ese año como generado por IA, mientras que la misma encuesta de Sonar muestra que el 96% de los desarrolladores no confía plenamente en ese código y el 52% no siempre lo revisa antes de integrarlo."
  },
  {
    anio: "2026",
    numero: "04",
    valor: 7.5,
    porcentaje: "75%",
    fase: "FASE 04 // AGENTES AUTÓNOMOS Y EL FIN DEL TECLADO",
    metrica: "75% del código nuevo de Google es generado por IA (y aprobado por ingenieros)",
    detalle: "Sundar Pichai anunció en Cloud Next 2026 que el 75% del código nuevo de Google ya es generado por IA, frente al 50% del otoño anterior — un salto que anticipa hacia dónde va el resto del sector. Google aclara que ese código sigue siendo revisado y aprobado por ingenieros: la IA escribe más, pero la validación humana sigue siendo parte del proceso."
  }
];
const DATOS_GRAFICO_TIEMPO = HITOS_GRAFICO_TIEMPO.map(h => h.valor);

const SVGNS = "http://www.w3.org/2000/svg";
function crearSVG(tag, attrs) {
  const e = document.createElementNS(SVGNS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  return e;
}

/* ========================================================================
   GRÁFICO DE BARRAS AGRUPADAS Y APILADAS — sección "El Vibe Coding" (Opción 01)
   Muestra 5 variables con 2 series apiladas cada una (estilo benchmark).

   Interactividad:
   - Clic en un modelo (o en sus barras): abre una ventanita de detalle con
     el desglose exacto de ese modelo y lo resalta, atenuando el resto.
   - Flechas ← →: recorren los modelos de a uno. Al pasar del último (o
     antes del primero) se vuelve a la vista general con todos juntos.
   - Al montar la sección, las barras "crecen" desde 0 en cascada (efecto
     de construcción), igual que el resto de la infografía.
   ======================================================================== */
let indiceActivoBarras = -1; // -1 = vista general (todos los modelos juntos), 0..N-1 = modelo enfocado

function montarGraficoBarras(contenedor) {
  contenedor.classList.add("grafico-placeholder--activo");
  indiceActivoBarras = -1;

  contenedor.innerHTML = `
    <div class="legend-barras">
      <div class="legend-barras__grupo">
        <span class="legend-barras__titulo">${NOM_SERIE_A}</span>
        <div class="legend-barras__item"><span class="swatch hatch-a"></span> Correcto e Inseguro</div>
        <div class="legend-barras__item"><span class="swatch solid-a"></span> Correcto y Seguro</div>
      </div>
      <div class="legend-barras__grupo">
        <span class="legend-barras__titulo">${NOM_SERIE_B}</span>
        <div class="legend-barras__item"><span class="swatch hatch-b"></span> Correcto e Inseguro</div>
        <div class="legend-barras__item"><span class="swatch solid-b"></span> Correcto y Seguro</div>
      </div>
      <div class="legend-barras__item"><span class="swatch bg-incorrect"></span> Incorrecto</div>
    </div>

    <div class="barras-hint">&gt; HACÉ CLICK EN UN MODELO, O USÁ LAS FLECHAS ←→ PARA RECORRERLOS UNO POR UNO. AL LLEGAR AL FINAL, VOLVÉS A LA COMPARACIÓN COMPLETA.</div>

    <div class="chart-wrap">
      <svg data-el="svg" width="820" height="390" viewBox="0 0 820 390"></svg>

      <div class="popup-nodo popup-barra" id="popup-barra" hidden>
        <div class="popup-nodo__header">
          <div class="popup-nodo__header-izq">
            <svg class="popup-nodo__icono-ojo" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
              <rect x="2" y="3" width="20" height="8" rx="1" fill="currentColor"/>
              <circle cx="12" cy="7" r="2" fill="#050a06"/>
              <rect x="2" y="13" width="20" height="8" rx="1" fill="currentColor"/>
              <circle cx="12" cy="17" r="2" fill="#050a06"/>
            </svg>
            <span class="popup-nodo__titulo" id="popup-barra-titulo">//_ MODELO</span>
          </div>
          <button type="button" class="popup-nodo__cerrar" id="popup-barra-cerrar" aria-label="Cerrar y volver a la comparación general">✕</button>
        </div>
        <div class="popup-nodo__cuerpo">
          <div class="popup-nodo__barra-acento" aria-hidden="true"></div>
          <div class="popup-nodo__texto-box">
            <div class="popup-nodo__parrafos" id="popup-barra-parrafos"></div>
          </div>
          <div class="popup-nodo__pie">
            <span class="popup-nodo__pie-tag" id="popup-barra-tag">MODELO_01</span>
            <span class="popup-nodo__pie-hint">◄ ► PARA MOVERTE</span>
          </div>
        </div>
      </div>
    </div>

    <div class="dots" id="barras-dots"></div>
  `;

  const svg = contenedor.querySelector('[data-el="svg"]');
  const popupBarra = contenedor.querySelector("#popup-barra");
  const popupTituloEl = contenedor.querySelector("#popup-barra-titulo");
  const popupParrafosEl = contenedor.querySelector("#popup-barra-parrafos");
  const popupTagEl = contenedor.querySelector("#popup-barra-tag");
  const popupCerrarBtn = contenedor.querySelector("#popup-barra-cerrar");
  const dotsWrap = contenedor.querySelector("#barras-dots");

  const defs = crearSVG("defs", {});
  defs.innerHTML = `
    <pattern id="hatch-serie-a" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="8" height="8" fill="#1d5c8a" />
      <line x1="0" y1="0" x2="0" y2="8" stroke="#5cb8ff" stroke-width="3" />
    </pattern>
    <pattern id="hatch-serie-b" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="8" height="8" fill="#7a2a2a" />
      <line x1="0" y1="0" x2="0" y2="8" stroke="#ff7c5c" stroke-width="3" />
    </pattern>
  `;
  svg.appendChild(defs);

  const padL = 60, padR = 20, padT = 40, padB = 65;
  const W = 820, H = 390;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const yBase = H - padB; // 325

  const gridGroup = crearSVG("g", { class: "barras-grid" });
  svg.appendChild(gridGroup);
  for (let pct = 0; pct <= 100; pct += 10) {
    const y = yBase - (pct / 100) * plotH;
    gridGroup.appendChild(crearSVG("line", { x1: padL, y1: y.toFixed(2), x2: W - padR, y2: y.toFixed(2), class: "grid-h" }));
    const t = crearSVG("text", { x: padL - 8, y: (y + 4).toFixed(2), class: "y-label" });
    t.textContent = pct + "%";
    gridGroup.appendChild(t);
  }

  const chartGroup = crearSVG("g", { class: "barras-chart" });
  svg.appendChild(chartGroup);

  const N = Math.min(5, DATOS_GRAFICO_BARRAS.length);
  let gruposBarras = [];

  // Construir los puntitos de navegación (uno por modelo)
  const dotEls = [];
  if (dotsWrap) {
    dotsWrap.innerHTML = "";
    for (let i = 0; i < N; i++) {
      const dot = document.createElement("span");
      dot.setAttribute("role", "button");
      dot.setAttribute("aria-label", `Ver modelo ${i + 1}`);
      dot.addEventListener("click", () => irAModelo(i));
      dotsWrap.appendChild(dot);
      dotEls.push(dot);
    }
  }

  function detalleDeModelo(item) {
    const segA = Math.min(100, Math.max(0, Number(item.serieA.seguro) || 0));
    const insA = Math.min(100 - segA, Math.max(0, Number(item.serieA.inseguro) || 0));
    const incA = Math.max(0, 100 - segA - insA);
    const segB = Math.min(100, Math.max(0, Number(item.serieB.seguro) || 0));
    const insB = Math.min(100 - segB, Math.max(0, Number(item.serieB.inseguro) || 0));
    const incB = Math.max(0, 100 - segB - insB);
    return { segA, insA, incA, segB, insB, incB };
  }

  function mostrarPopupModelo(idx) {
    const item = DATOS_GRAFICO_BARRAS[idx];
    if (!item) return;
    const d = detalleDeModelo(item);

    if (popupTituloEl) popupTituloEl.textContent = `//_ ${item.nombre.toUpperCase()}`;

    const diff = Math.abs(d.segB - d.segA);
    let comparativa;
    if (d.segB > d.segA) {
      comparativa = `> ES ${diff} PUNTOS MÁS SEGURO EN ${NOM_SERIE_B.toUpperCase()} QUE EN ${NOM_SERIE_A.toUpperCase()}.`;
    } else if (d.segA > d.segB) {
      comparativa = `> ES ${diff} PUNTOS MÁS SEGURO EN ${NOM_SERIE_A.toUpperCase()} QUE EN ${NOM_SERIE_B.toUpperCase()}.`;
    } else {
      comparativa = `> RINDE IGUAL DE SEGURO EN AMBOS BENCHMARKS.`;
    }

    const lineas = [
      `> EN ${NOM_SERIE_A.toUpperCase()}: ${d.segA}% CORRECTO Y SEGURO · ${d.insA}% CORRECTO E INSEGURO · ${d.incA}% INCORRECTO.`,
      `> EN ${NOM_SERIE_B.toUpperCase()}: ${d.segB}% CORRECTO Y SEGURO · ${d.insB}% CORRECTO E INSEGURO · ${d.incB}% INCORRECTO.`,
      comparativa
    ];

    if (popupParrafosEl) {
      popupParrafosEl.innerHTML = "";
      lineas.forEach((texto) => {
        const pEl = document.createElement("p");
        pEl.className = "popup-nodo__desc";
        const limpio = texto.startsWith(">") ? texto.slice(1).trim() : texto.trim();
        pEl.innerHTML = `<span class="popup-nodo__prompt">&gt;</span>${limpio}`;
        popupParrafosEl.appendChild(pEl);
      });
    }

    if (popupTagEl) popupTagEl.textContent = `MODELO_0${idx + 1} // BENCHMARK_COMPARE`;
    if (popupBarra) popupBarra.hidden = false;
  }

  function ocultarPopupBarra() {
    if (popupBarra) popupBarra.hidden = true;
  }

  function actualizarEstadoBarras() {
    const hayActivo = indiceActivoBarras !== -1;
    gruposBarras.forEach((g, idx) => {
      const esActivo = idx === indiceActivoBarras;
      g.classList.toggle("barra-grupo--activo", esActivo);
      g.classList.toggle("barra-grupo--dim", hayActivo && !esActivo);
    });
    dotEls.forEach((d, idx) => d.classList.toggle("active", idx === indiceActivoBarras));

    if (hayActivo) {
      mostrarPopupModelo(indiceActivoBarras);
    } else {
      ocultarPopupBarra();
    }
  }

  function irAModelo(idx) {
    indiceActivoBarras = (indiceActivoBarras === idx) ? -1 : idx;
    actualizarEstadoBarras();
  }

  chartGroup.addEventListener("click", (e) => {
    const g = e.target.closest(".barra-grupo");
    if (!g) return;
    irAModelo(Number(g.getAttribute("data-idx")));
  });

  if (popupCerrarBtn) {
    popupCerrarBtn.addEventListener("click", () => {
      indiceActivoBarras = -1;
      actualizarEstadoBarras();
    });
  }

  function renderSVG() {
    chartGroup.innerHTML = "";
    gruposBarras = [];
    const groupW = plotW / N;
    const barW = 44;
    const gap = 8;
    const aplicarFinal = []; // una función por modelo: lleva sus barras al alto real (para el efecto de construcción)

    DATOS_GRAFICO_BARRAS.slice(0, N).forEach((item, i) => {
      const centerX = padL + (i + 0.5) * groupW;

      const grupo = crearSVG("g", { class: "barra-grupo", "data-idx": String(i) });
      chartGroup.appendChild(grupo);
      gruposBarras.push(grupo);

      const bgCol = crearSVG("rect", {
        x: (centerX - 56).toFixed(2),
        y: padT,
        width: 112,
        height: plotH,
        class: "bg-columna"
      });
      grupo.appendChild(bgCol);

      const series = [
        { data: item.serieA, x: centerX - barW - gap / 2, solidColor: "#2382d6", hatchPattern: "url(#hatch-serie-a)", border: "#5cb8ff" },
        { data: item.serieB, x: centerX + gap / 2, solidColor: "#c82a2a", hatchPattern: "url(#hatch-serie-b)", border: "#ff7c5c" }
      ];

      const tareasDeEsteModelo = [];

      series.forEach((s) => {
        const seg = Math.min(100, Math.max(0, Number(s.data.seguro) || 0));
        const ins = Math.min(100 - seg, Math.max(0, Number(s.data.inseguro) || 0));
        const tot = seg + ins;

        const hSeg = (seg / 100) * plotH;
        const hIns = (ins / 100) * plotH;
        const hTot = (tot / 100) * plotH;

        const rectBg = crearSVG("rect", {
          x: s.x.toFixed(2),
          y: padT,
          width: barW,
          height: plotH,
          class: "bar-bg"
        });
        grupo.appendChild(rectBg);

        // Las barras de valor arrancan en altura 0 (pegadas a la base) y el
        // helper "aplicarFinal" las lleva a su altura real con un pequeño
        // delay por modelo: eso es lo que genera el efecto de construcción.
        let rectIns = null;
        if (hIns > 0) {
          rectIns = crearSVG("rect", {
            x: s.x.toFixed(2),
            y: yBase.toFixed(2),
            width: barW,
            height: 0,
            fill: s.hatchPattern,
            stroke: s.border,
            "stroke-width": 1,
            class: "bar-seg"
          });
          grupo.appendChild(rectIns);
        }

        let rectSeg = null;
        if (hSeg > 0) {
          rectSeg = crearSVG("rect", {
            x: s.x.toFixed(2),
            y: yBase.toFixed(2),
            width: barW,
            height: 0,
            fill: s.solidColor,
            stroke: s.border,
            "stroke-width": 1,
            class: "bar-seg"
          });
          grupo.appendChild(rectSeg);
        }

        let tTot = null;
        if (tot > 0) {
          tTot = crearSVG("text", {
            x: (s.x + barW / 2).toFixed(2),
            y: (yBase - 4).toFixed(2),
            class: "bar-val-top"
          });
          tTot.textContent = tot + "%";
          grupo.appendChild(tTot);
        }

        let tIns = null;
        if (hIns >= 14) {
          tIns = crearSVG("text", {
            x: (s.x + barW / 2).toFixed(2),
            y: (yBase - 4).toFixed(2),
            class: "bar-val-in"
          });
          tIns.textContent = ins + "%";
          grupo.appendChild(tIns);
        }

        let tSeg = null;
        if (hSeg >= 14) {
          tSeg = crearSVG("text", {
            x: (s.x + barW / 2).toFixed(2),
            y: (yBase - 4).toFixed(2),
            class: "bar-val-in"
          });
          tSeg.textContent = seg + "%";
          grupo.appendChild(tSeg);
        }

        tareasDeEsteModelo.push(() => {
          if (rectIns) { rectIns.setAttribute("y", (yBase - hTot).toFixed(2)); rectIns.setAttribute("height", hIns.toFixed(2)); }
          if (rectSeg) { rectSeg.setAttribute("y", (yBase - hSeg).toFixed(2)); rectSeg.setAttribute("height", hSeg.toFixed(2)); }
          if (tTot) tTot.setAttribute("y", (yBase - hTot - 5).toFixed(2));
          if (tIns) tIns.setAttribute("y", (yBase - hSeg - hIns / 2 + 4).toFixed(2));
          if (tSeg) tSeg.setAttribute("y", (yBase - hSeg / 2 + 4).toFixed(2));
        });
      });

      const partesNombre = item.nombre.trim().split(" ");
      const tX = crearSVG("text", {
        x: centerX.toFixed(2),
        y: (yBase + 22).toFixed(2),
        class: "x-label"
      });
      if (partesNombre.length > 1 && item.nombre.length > 10) {
        const mitad = Math.ceil(partesNombre.length / 2);
        const l1 = partesNombre.slice(0, mitad).join(" ");
        const l2 = partesNombre.slice(mitad).join(" ");
        tX.innerHTML = `<tspan x="${centerX.toFixed(2)}" dy="0">${l1}</tspan><tspan x="${centerX.toFixed(2)}" dy="14">${l2}</tspan>`;
      } else {
        tX.textContent = item.nombre;
      }
      grupo.appendChild(tX);

      aplicarFinal.push(() => tareasDeEsteModelo.forEach((fn) => fn()));
    });

    // Efecto de construcción: cada modelo crece con un pequeño delay en cascada
    requestAnimationFrame(() => {
      aplicarFinal.forEach((aplicar, i) => setTimeout(aplicar, i * 110));
    });
  }

  function onFlecha(dir) {
    if (indiceActivoBarras === -1) {
      indiceActivoBarras = dir > 0 ? 0 : N - 1;
    } else {
      indiceActivoBarras += dir;
      if (indiceActivoBarras >= N || indiceActivoBarras < 0) {
        indiceActivoBarras = -1; // se cierra el recorrido: vuelta a la comparación general
      }
    }
    actualizarEstadoBarras();
  }

  renderSVG();
  actualizarEstadoBarras();

  return { onFlecha };
}

/* ========================================================================
   GRÁFICO RADIAL — sección 02 "Calidad vs Tiempo" (SÓLO 2026)
   Pop-ups flotantes alejados del pentágono con flechas cibernéticas precisas
   ======================================================================== */
let nodoAbiertoIdx = -1;

function montarGraficoRadial(contenedor) {
  contenedor.classList.add("grafico-placeholder--activo");

  contenedor.innerHTML = `
    <div class="radial-stage" id="radial-stage">
      <div class="radial-header-2026">
        <div class="radial-header-badge">[ AÑO 2026 // ESTADO CONSOLIDADO ]</div>
        <div class="radial-header-hint">&gt; HACÉ CLICK EN CUALQUIER NODO PARA VER SU VENTANITA EXPLICATIVA</div>
      </div>

      <div class="radial-chart-viewport" id="radial-chart-viewport">
        <svg data-el="svg" class="radial-svg" width="880" height="430" viewBox="0 0 880 430">
          <defs>
            <marker id="arrowCyber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#bbf853" />
            </marker>
          </defs>

          <!-- Grupo de grilla y polígonos -->
          <g data-el="grid" class="radial-grid"></g>

          <!-- Polígono central y vértices -->
          <g data-el="data-shapes"></g>

          <!-- Grupo del conector dinámico (flecha que sale exactamente del nodo al popup) -->
          <g id="conector-svg-grupo" class="conector-svg-grupo"></g>

          <!-- foreignObject para la ventanita pop-up dentro del mismo espacio SVG (coordenadas 100% coincidentes) -->
          <foreignObject id="popup-foreign" class="popup-foreign" x="0" y="0" width="250" height="400" style="display: none;">
            <div xmlns="http://www.w3.org/1999/xhtml" class="popup-nodo" id="popup-nodo">
              <div class="popup-nodo__header">
                <div class="popup-nodo__header-izq">
                  <svg class="popup-nodo__icono-ojo" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="8" rx="1" fill="currentColor"/>
                    <circle cx="12" cy="7" r="2" fill="#050a06"/>
                    <rect x="2" y="13" width="20" height="8" rx="1" fill="currentColor"/>
                    <circle cx="12" cy="17" r="2" fill="#050a06"/>
                  </svg>
                  <span class="popup-nodo__titulo" id="popup-nodo-titulo">//_ VARIABLE</span>
                </div>
                <button type="button" class="popup-nodo__cerrar" id="popup-nodo-cerrar" aria-label="Cerrar pop-up">✕</button>
              </div>

              <div class="popup-nodo__cuerpo">
                <!-- Imagen pequeña enmarcada dithered -->
                <div class="popup-nodo__img-frame">
                  <div class="popup-nodo__img-container" id="popup-nodo-img-container"></div>
                  <div class="popup-nodo__img-scanlines"></div>
                  <span class="popup-nodo__img-caption" id="popup-nodo-img-caption">FIG // 2026</span>
                </div>

                <!-- Barra horizontal sólida verde lima (referencia visual) -->
                <div class="popup-nodo__barra-acento" aria-hidden="true"></div>

                <!-- Caja de texto terminal -->
                <div class="popup-nodo__texto-box">
                  <div class="popup-nodo__parrafos" id="popup-nodo-parrafos"></div>
                </div>

                <!-- Pie del pop-up -->
                <div class="popup-nodo__pie">
                  <span class="popup-nodo__pie-tag" id="popup-nodo-pie-tag">VALOR: 8/10</span>
                  <span class="popup-nodo__pie-hint">[CLICK OTRA VARIABLE]</span>
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
      </div>

      <p class="footer-note">Hacé click en los nodos del pentágono para abrir la ventanita de cada variable</p>
      <button type="button" class="boton-3d" data-accion="ver-3d">▣ Ver la conjunción de años en 3D</button>
    </div>
  `;

  const svg = contenedor.querySelector('[data-el="svg"]');
  const grid = contenedor.querySelector('[data-el="grid"]');
  const dataShapes = contenedor.querySelector('[data-el="data-shapes"]');
  const boton3d = contenedor.querySelector('[data-accion="ver-3d"]');
  const popupForeign = document.getElementById("popup-foreign");
  const btnCerrarPopup = document.getElementById("popup-nodo-cerrar");
  const conectorGrupo = document.getElementById("conector-svg-grupo");

  const N = NODOS_RADIAL_2026.length;
  // Centro en 440 para dejar 270px a la izquierda y 270px a la derecha para las ventanas
  const cx = 440, cy = 205, R = 115;

  const angulo = (i) => (Math.PI * 2 * i / N) - Math.PI / 2;
  const puntoEn = (i, valor) => {
    const r = (valor / ESCALA_MAX_GRAFICO) * R;
    const a = angulo(i);
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };
  const puntosPoligono = (valores) => valores.map((v, i) => puntoEn(i, v));
  const puntosAPath = (pts) =>
    pts.map((p, i) => (i === 0 ? "M" : "L") + p.x.toFixed(2) + "," + p.y.toFixed(2)).join(" ") + " Z";

  // Grid concéntrico poligonal
  [2, 4, 6, 8, 10].forEach((paso) => {
    const r = (paso / ESCALA_MAX_GRAFICO) * R;
    const pts = [];
    for (let i = 0; i < N; i++) {
      const a = angulo(i);
      pts.push({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });
    }
    grid.appendChild(
      crearSVG("polygon", {
        points: pts.map((p) => p.x.toFixed(2) + "," + p.y.toFixed(2)).join(" "),
        class: "grid-ring",
      })
    );
  });

  // Radios / rayos
  for (let i = 0; i < N; i++) {
    const a = angulo(i);
    const externo = { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
    grid.appendChild(
      crearSVG("line", { x1: cx, y1: cy, x2: externo.x.toFixed(2), y2: externo.y.toFixed(2), class: "spoke" })
    );
  }

  // Etiquetas numéricas de escala
  [2, 4, 6, 8, 10].forEach((paso) => {
    const r = (paso / ESCALA_MAX_GRAFICO) * R;
    const t = crearSVG("text", { x: cx + 5, y: (cy - r + 3).toFixed(2), class: "scale-label" });
    t.textContent = paso;
    grid.appendChild(t);
  });

  // Polígono de datos para 2026
  const valores2026 = NODOS_RADIAL_2026.map(n => n.valor);
  const pts2026 = puntosPoligono(valores2026);

  const forma = crearSVG("path", { class: "shape" });
  forma.setAttribute("d", puntosAPath(pts2026));
  dataShapes.appendChild(forma);

  // Configuración de anclaje de ventanas completamente alejadas del pentágono (sin taparlo):
  // Nodos de la derecha (0, 1, 2) van a x = 615 (flecha apunta a su borde izquierdo x = 615).
  // Nodos de la izquierda (3, 4) van a x = 25 (ancho 242px, flecha apunta a su borde derecho x = 267).
  // cardY calibrado a 15, 35 o 55 para que el pop-up nunca sobrepase la parte inferior del gráfico ni se corte.
  const configPopupNodos = [
    { cardX: 615, cardY: 15, edgeX: 615 }, // Nodo 0: Ahorro de tiempo (arriba derecha)
    { cardX: 615, cardY: 35, edgeX: 615 }, // Nodo 1: Tareas completadas (derecha)
    { cardX: 615, cardY: 55, edgeX: 615 }, // Nodo 2: Código aprobado (derecha abajo)
    { cardX: 25,  cardY: 55, edgeX: 267 }, // Nodo 3: Vulnerabilidad (izquierda abajo)
    { cardX: 25,  cardY: 35, edgeX: 267 }  // Nodo 4: Tasa de error (izquierda arriba)
  ];

  const gruposNodos = [];

  // Vértices y grupos interactivos para cada nodo
  NODOS_RADIAL_2026.forEach((nodo, i) => {
    const p = pts2026[i];
    const a = angulo(i);
    const lx = cx + (R + 28) * Math.cos(a);
    const ly = cy + (R + 28) * Math.sin(a);
    let anchor = "middle";
    if (Math.cos(a) > 0.3) anchor = "start";
    else if (Math.cos(a) < -0.3) anchor = "end";

    const grupoNodo = crearSVG("g", {
      class: "nodo-radar",
      "data-indice": i,
      tabindex: "0",
      role: "button",
      "aria-label": `Ver detalles de ${nodo.nombre} (Valor: ${nodo.valor}/10)`
    });

    // Hitbox invisible amplio de 26px de radio
    const hitbox = crearSVG("circle", {
      cx: p.x.toFixed(2),
      cy: p.y.toFixed(2),
      r: 26,
      class: "nodo-radar__hitbox"
    });
    grupoNodo.appendChild(hitbox);

    // Anillo de pulso animado
    const pulse = crearSVG("circle", {
      cx: p.x.toFixed(2),
      cy: p.y.toFixed(2),
      r: 8,
      class: "nodo-radar__pulse"
    });
    grupoNodo.appendChild(pulse);

    // Círculo principal del vértice
    const circle = crearSVG("circle", {
      cx: p.x.toFixed(2),
      cy: p.y.toFixed(2),
      r: 5,
      class: "nodo-radar__circle"
    });
    grupoNodo.appendChild(circle);

    // Núcleo fósforo central
    const core = crearSVG("circle", {
      cx: p.x.toFixed(2),
      cy: p.y.toFixed(2),
      r: 1.8,
      class: "nodo-radar__core"
    });
    grupoNodo.appendChild(core);

    // Nombre de la variable (clickeable)
    const textLabel = crearSVG("text", {
      x: lx.toFixed(2),
      y: ly.toFixed(2),
      class: "axis-label",
      "text-anchor": anchor,
      "dominant-baseline": "middle"
    });
    textLabel.textContent = nodo.nombre;
    grupoNodo.appendChild(textLabel);

    // Valor de la variable (clickeable)
    const valLabel = crearSVG("text", {
      x: lx.toFixed(2),
      y: (ly + 15).toFixed(2),
      class: "axis-value",
      "text-anchor": anchor,
      "dominant-baseline": "middle"
    });
    valLabel.textContent = nodo.valor;
    grupoNodo.appendChild(valLabel);

    // Eventos de click y teclado
    grupoNodo.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePopupNodo(i);
    });

    grupoNodo.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePopupNodo(i);
      }
    });

    dataShapes.appendChild(grupoNodo);
    gruposNodos.push(grupoNodo);
  });

  function abrirPopup(indice) {
    nodoAbiertoIdx = indice;
    const nodo = NODOS_RADIAL_2026[indice];
    const cfg = configPopupNodos[indice];
    const p = pts2026[indice];

    // Marcar nodo activo
    gruposNodos.forEach((g, idx) => {
      g.classList.toggle("nodo-radar--activo", idx === indice);
    });

    // Calcular altura de impacto en el lateral del popup asegurando que la flecha quede dentro de los límites de la ventana
    const targetY = Math.max(cfg.cardY + 30, Math.min(cfg.cardY + 295, p.y));

    // Dibujar conector cibernético en SVG que sale con precisión milimétrica del centro del nodo al popup
    if (conectorGrupo) {
      conectorGrupo.innerHTML = `
        <circle cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="10" class="conector-origen-halo" />
        <line x1="${p.x.toFixed(2)}" y1="${p.y.toFixed(2)}" x2="${cfg.edgeX}" y2="${targetY.toFixed(2)}" class="conector-flecha" marker-end="url(#arrowCyber)" />
        <circle cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="3.5" fill="#bbf853" />
      `;
    }

    // Posicionar el foreignObject dentro del SVG
    popupForeign.setAttribute("x", cfg.cardX);
    popupForeign.setAttribute("y", cfg.cardY);
    popupForeign.style.display = "block";

    // Llenar contenido
    const tituloEl = document.getElementById("popup-nodo-titulo");
    const imgCont = document.getElementById("popup-nodo-img-container");
    const captionEl = document.getElementById("popup-nodo-img-caption");
    const parrafosEl = document.getElementById("popup-nodo-parrafos");
    const tagEl = document.getElementById("popup-nodo-pie-tag");

    if (tituloEl) tituloEl.textContent = `//_ ${nodo.nombre.toUpperCase()}`;

    if (imgCont) {
      if (nodo.imagen && nodo.imagen.trim()) {
        imgCont.innerHTML = `<img src="${nodo.imagen}" alt="${nodo.nombre}" class="popup-nodo__img">`;
        const img = imgCont.querySelector("img");
        img.onerror = () => {
          imgCont.innerHTML = generarGraficoOjoDitherSVG(nodo.imagenCaption, indice);
        };
      } else {
        imgCont.innerHTML = generarGraficoOjoDitherSVG(nodo.imagenCaption, indice);
      }
    }

    if (captionEl) {
      captionEl.textContent = nodo.imagenCaption || `FIG_0${indice + 1} // REGISTRO 2026`;
    }

    if (parrafosEl) {
      parrafosEl.innerHTML = "";
      const lineas = Array.isArray(nodo.parrafos) ? nodo.parrafos : [nodo.parrafos];
      lineas.forEach((texto) => {
        const pEl = document.createElement("p");
        pEl.className = "popup-nodo__desc";
        const limpio = texto.startsWith(">") ? texto.slice(1).trim() : texto.trim();
        pEl.innerHTML = `<span class="popup-nodo__prompt">&gt;</span>${limpio}`;
        parrafosEl.appendChild(pEl);
      });
    }

    if (tagEl) {
      tagEl.textContent = `VALOR: ${nodo.valor}/10`;
    }
  }

  function cerrarPopup() {
    nodoAbiertoIdx = -1;
    if (popupForeign) popupForeign.style.display = "none";
    if (conectorGrupo) conectorGrupo.innerHTML = "";
    gruposNodos.forEach((g) => g.classList.remove("nodo-radar--activo"));
  }

  function togglePopupNodo(indice) {
    if (nodoAbiertoIdx === indice) {
      cerrarPopup();
    } else {
      abrirPopup(indice);
    }
  }

  if (btnCerrarPopup) {
    btnCerrarPopup.addEventListener("click", (e) => {
      e.stopPropagation();
      cerrarPopup();
    });
  }

  // Cerrar al clickear fuera del popup o de los nodos
  document.addEventListener("click", (e) => {
    if (!popupForeign || popupForeign.style.display === "none") return;
    if (!popupForeign.contains(e.target) && !e.target.closest(".nodo-radar")) {
      cerrarPopup();
    }
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popupForeign && popupForeign.style.display !== "none") {
      cerrarPopup();
    }
  });

  boton3d.addEventListener("click", () => abrirGrafico3D("year"));

  // Abrir el primer nodo automáticamente por defecto para mostrar la interacción lista
  abrirPopup(0);

  return {
    onFlecha: (delta) => {
      const proximo = (nodoAbiertoIdx + delta + NODOS_RADIAL_2026.length) % NODOS_RADIAL_2026.length;
      abrirPopup(proximo);
    }
  };
}

/* ========================================================================
   GRÁFICO DE TIEMPO ("En el tiempo") — sección "El fin del teclado"
   Navegación interactiva por años (2023 a 2026) con hitos y métricas.
   ======================================================================== */
function montarGraficoTiempo(contenedor) {
  contenedor.classList.add("grafico-placeholder--activo");
  contenedor.innerHTML = `
    <div class="nav">
      <button type="button" class="nav__flecha" data-accion="anterior" aria-label="Año anterior">&#8592;</button>
      <div class="label"><span class="n" data-el="numero">01</span> · <span data-el="nombre">2023</span></div>
      <button type="button" class="nav__flecha" data-accion="siguiente" aria-label="Año siguiente">&#8594;</button>
    </div>
    <div class="timeline-anios" data-el="timeline-anios"></div>
    <p class="trend" data-el="tendencia"></p>
    <div class="chart-wrap">
      <svg data-el="svg" width="560" height="260" viewBox="0 0 560 260"></svg>
    </div>
    <div class="panel-hito" data-el="panel-hito">
      <div class="panel-hito__top">
        <span class="panel-hito__fase" data-el="fase"></span>
        <span class="panel-hito__metrica" data-el="metrica"></span>
      </div>
      <p class="panel-hito__detalle" data-el="detalle"></p>
    </div>
    <p class="footer-note">Usá <kbd>&#8592;</kbd> <kbd>&#8594;</kbd> o hacé click en los años para explorar la evolución</p>
  `;

  const svg = contenedor.querySelector('[data-el="svg"]');
  const numeroEl = contenedor.querySelector('[data-el="numero"]');
  const nombreEl = contenedor.querySelector('[data-el="nombre"]');
  const timelineEl = contenedor.querySelector('[data-el="timeline-anios"]');
  const tendenciaEl = contenedor.querySelector('[data-el="tendencia"]');
  const prevBtn = contenedor.querySelector('[data-accion="anterior"]');
  const nextBtn = contenedor.querySelector('[data-accion="siguiente"]');
  const faseEl = contenedor.querySelector('[data-el="fase"]');
  const metricaEl = contenedor.querySelector('[data-el="metrica"]');
  const detalleEl = contenedor.querySelector('[data-el="detalle"]');

  const anios = HITOS_GRAFICO_TIEMPO;
  let añoIdx = 0; // Empieza en 2023

  // Botones de acceso directo para cada año
  const btnsAnio = [];
  anios.forEach((hito, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "timeline-anio-btn" + (i === 0 ? " active" : "");
    btn.textContent = hito.anio;
    btn.title = `Ver hito de ${hito.anio}`;
    btn.addEventListener("click", () => irA(i));
    timelineEl.appendChild(btn);
    btnsAnio.push(btn);
  });

  const padL = 44, padR = 30, padT = 26, padB = 36;
  const LW = 560, LH = 260;
  const plotW = LW - padL - padR;
  const plotH = LH - padT - padB;

  const xFor = (i) => padL + (plotW * i / (anios.length - 1));
  const yFor = (v) => padT + plotH - (plotH * v / ESCALA_MAX_TIEMPO);

  // Cuadrícula horizontal y valores del eje Y
  const grid = crearSVG("g", { class: "chart-grid" });
  svg.appendChild(grid);
  [0, 2, 4, 6, 8, 10].forEach((paso) => {
    const y = yFor(paso);
    grid.appendChild(crearSVG("line", { x1: padL, y1: y.toFixed(2), x2: LW - padR, y2: y.toFixed(2), class: "grid-h" }));
    const t = crearSVG("text", { x: padL - 10, y: (y + 3.5).toFixed(2), class: "y-label" });
    t.textContent = paso;
    grid.appendChild(t);
  });

  // Cuadrícula vertical y etiquetas de año
  const xLabels = [];
  anios.forEach((hito, i) => {
    const x = xFor(i);
    grid.appendChild(crearSVG("line", { x1: x.toFixed(2), y1: padT, x2: x.toFixed(2), y2: LH - padB, class: "grid-v" }));
    const t = crearSVG("text", { x: x.toFixed(2), y: LH - padB + 20, class: "x-label" + (i === 0 ? " active" : "") });
    t.textContent = hito.anio;
    svg.appendChild(t);
    xLabels.push(t);
  });

  // Trayectoria base (línea punteada completa de fondo)
  const ptsAll = anios.map((h, i) => ({ x: xFor(i), y: yFor(h.valor) }));
  const linePathBase = crearSVG("path", { class: "line-path--base" });
  const baseD = ptsAll.map((p, i) => (i === 0 ? "M" : "L") + p.x.toFixed(2) + "," + p.y.toFixed(2)).join(" ");
  linePathBase.setAttribute("d", baseD);
  svg.appendChild(linePathBase);

  // Línea guía vertical para el año activo
  const cursorV = crearSVG("line", {
    x1: ptsAll[0].x.toFixed(2),
    y1: padT,
    x2: ptsAll[0].x.toFixed(2),
    y2: LH - padB,
    class: "cursor-v"
  });
  svg.appendChild(cursorV);

  // Área y línea de progreso hasta el año seleccionado
  const areaProgreso = crearSVG("path", { class: "area-path--progreso" });
  const lineProgreso = crearSVG("path", { class: "line-path--progreso" });
  svg.appendChild(areaProgreso);
  svg.appendChild(lineProgreso);

  // Halo animado para el punto seleccionado
  const halo = crearSVG("circle", {
    cx: ptsAll[0].x.toFixed(2),
    cy: ptsAll[0].y.toFixed(2),
    r: 12,
    fill: "none",
    stroke: "var(--color-verde-brillante)",
    "stroke-width": 2,
    class: "pt-halo"
  });
  svg.appendChild(halo);

  // Nodos y etiquetas de valores
  const puntos = [];
  const puntosTexto = [];

  anios.forEach((hito, i) => {
    const p = ptsAll[i];

    // Círculo visual
    const c = crearSVG("circle", {
      cx: p.x.toFixed(2),
      cy: p.y.toFixed(2),
      r: i === 0 ? 8 : 5.5,
      class: "pt pt--interactivo" + (i === 0 ? " active" : "")
    });
    svg.appendChild(c);
    puntos.push(c);

    // Texto del valor
    const t = crearSVG("text", {
      x: p.x.toFixed(2),
      y: (p.y - 13).toFixed(2),
      class: "pt-value"
    });
    t.textContent = hito.porcentaje;
    svg.appendChild(t);
    puntosTexto.push(t);

    // Hit area invisible para facilitar el click táctil / mouse
    const hit = crearSVG("circle", {
      cx: p.x.toFixed(2),
      cy: p.y.toFixed(2),
      r: 22,
      class: "pt-hit"
    });
    hit.addEventListener("click", () => irA(i));
    svg.appendChild(hit);
  });

  function render() {
    const hitoActual = anios[añoIdx];
    const ptActual = ptsAll[añoIdx];

    // Encabezado
    numeroEl.textContent = hitoActual.numero;
    nombreEl.textContent = hitoActual.anio;

    // Botones de año activos
    btnsAnio.forEach((b, i) => b.classList.toggle("active", i === añoIdx));
    xLabels.forEach((l, i) => l.classList.toggle("active", i === añoIdx));

    // Flechas deshabilitadas en los límites
    prevBtn.disabled = añoIdx === 0;
    nextBtn.disabled = añoIdx === anios.length - 1;

    // Línea guía y halo
    cursorV.setAttribute("x1", ptActual.x.toFixed(2));
    cursorV.setAttribute("x2", ptActual.x.toFixed(2));
    halo.setAttribute("cx", ptActual.x.toFixed(2));
    halo.setAttribute("cy", ptActual.y.toFixed(2));

    // Progreso de línea y área hasta el año actual
    const ptsHasta = ptsAll.slice(0, añoIdx + 1);
    if (ptsHasta.length === 1) {
      lineProgreso.setAttribute("d", `M${ptActual.x.toFixed(2)},${ptActual.y.toFixed(2)} L${ptActual.x.toFixed(2)},${ptActual.y.toFixed(2)}`);
      areaProgreso.setAttribute("d", "");
    } else {
      const lineD = ptsHasta.map((p, i) => (i === 0 ? "M" : "L") + p.x.toFixed(2) + "," + p.y.toFixed(2)).join(" ");
      lineProgreso.setAttribute("d", lineD);

      const base = yFor(0);
      let areaD = `M${ptsHasta[0].x.toFixed(2)},${base.toFixed(2)}`;
      ptsHasta.forEach((p) => { areaD += ` L${p.x.toFixed(2)},${p.y.toFixed(2)}`; });
      areaD += ` L${ptsHasta[ptsHasta.length - 1].x.toFixed(2)},${base.toFixed(2)} Z`;
      areaProgreso.setAttribute("d", areaD);
    }

    // Actualizar puntos visuales
    puntos.forEach((c, i) => {
      c.classList.toggle("active", i === añoIdx);
      c.setAttribute("r", i === añoIdx ? "8" : "5.5");
    });

    // Panel de hito descriptivo
    faseEl.textContent = hitoActual.fase;
    metricaEl.textContent = hitoActual.metrica;
    detalleEl.textContent = hitoActual.detalle;

    // Resumen de tendencia
    const primero = anios[0];
    if (añoIdx === 0) {
      tendenciaEl.innerHTML = `${primero.porcentaje} de código con IA · Punto de partida (${primero.anio})`;
    } else {
      const aumento = Math.round(((hitoActual.valor - primero.valor) / primero.valor) * 100);
      tendenciaEl.innerHTML = `${primero.porcentaje} <span class="arrow up">↑</span> ${hitoActual.porcentaje} (+${aumento}% vs ${primero.anio}) · ${hitoActual.anio}`;
    }
  }

  function ir(delta) {
    const next = añoIdx + delta;
    if (next < 0 || next >= anios.length) return;
    añoIdx = next;
    render();
  }

  function irA(idx) {
    if (idx < 0 || idx >= anios.length || idx === añoIdx) return;
    añoIdx = idx;
    render();
  }

  prevBtn.addEventListener("click", () => ir(-1));
  nextBtn.addEventListener("click", () => ir(1));

  render();
  return { onFlecha: (delta) => ir(delta) };
}

/* ========================================================================
   GRÁFICO 3D — el "tubo" que conecta el radial y el de tiempo
   Vive en un modal que se abre desde cualquiera de las dos secciones de
   arriba. three.js se carga recién la primera vez que se abre el modal,
   para no pesar la carga inicial de la página.
   ======================================================================== */
(function () {
  const modal3d = document.getElementById("modal-3d");
  const wrap3d = document.getElementById("canvas3dWrap");

  const RMAX3D = 130;
  const LAYER_GAP = 62;
  const N = VALORES_GRAFICO.length;

  let scene3d, camera3d, renderer3d, group3d, labelWrap3d;
  let segmentGroups = [];
  let ringGroups = [];
  let vertexLabelEls = [];
  let yearLabelEls = [];
  let axisLabelEls = [];
  let isDragging3d = false, prevMouseX = 0, prevMouseY = 0;
  let autoRotate3d = true;
  let showValueNumbers3d = true;
  let currentView3d = "free";
  let inited3d = false;
  let buildToken = 0;
  let focusYear3d = -1;
  let threeCargado = false;

  const CAM_DISTANCE = 480;
  const DEFAULT_CAM_THETA = -0.62;
  const DEFAULT_CAM_PHI = 0.30;
  let camTheta = DEFAULT_CAM_THETA;
  let camPhi = DEFAULT_CAM_PHI;
  let camAnimTarget = null;

  function cargarThreeJS() {
    return new Promise((resolve, reject) => {
      if (window.THREE) { resolve(); return; }
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("No se pudo cargar three.js"));
      document.head.appendChild(script);
    });
  }

  function updateCameraFromOrbit() {
    const x = CAM_DISTANCE * Math.cos(camPhi) * Math.sin(camTheta);
    const y = CAM_DISTANCE * Math.sin(camPhi);
    const z = CAM_DISTANCE * Math.cos(camPhi) * Math.cos(camTheta);
    camera3d.position.set(x, y, z);
    camera3d.lookAt(0, 0, 0);
  }
  function flyCameraTo(theta, phi) {
    camAnimTarget = { theta, phi };
  }
  function angle3d(i) { return (Math.PI * 2 * i / N) - Math.PI / 2; }
  function layerPositions(values) {
    return values.map((v, i) => {
      const r = (v / ESCALA_MAX_GRAFICO) * RMAX3D;
      const a = angle3d(i);
      return new THREE.Vector3(0, r * Math.cos(a), r * Math.sin(a));
    });
  }

  function buildLegend() {
    const legend = document.getElementById("legend3d");
    legend.innerHTML = "";
    AÑOS_GRAFICO.forEach((y, i) => {
      const item = document.createElement("div");
      item.className = "item" + (focusYear3d === i ? " active" : "");
      item.style.cursor = "pointer";
      const sw = document.createElement("span");
      sw.className = "swatch";
      item.appendChild(sw);
      const txt = document.createElement("span");
      txt.textContent = y;
      item.appendChild(txt);
      item.addEventListener("click", () => {
        focusYear3d = focusYear3d === i ? -1 : i;
        buildLegend();
        applyFocus3d();
      });
      legend.appendChild(item);
    });
    const hint = document.createElement("div");
    hint.className = "item hint3d";
    hint.textContent = focusYear3d === -1 ? "(tocá un año para aislarlo)" : "(tocá de nuevo para ver todos)";
    legend.appendChild(hint);
  }

  function applyFocus3d() {
    ringGroups.forEach((g, i) => {
      const on = focusYear3d === -1 || focusYear3d === i;
      g.traverse((o) => {
        if (o.material) {
          o.material.transparent = true;
          o.material.opacity = on ? 1 : 0.15;
        }
      });
    });
    segmentGroups.forEach((m, li) => {
      const on = focusYear3d === -1 || focusYear3d === li || focusYear3d === li + 1;
      m.material.opacity = on ? 0.8 : 0.08;
    });
    vertexLabelEls.forEach((item) => {
      const on = focusYear3d === -1 || focusYear3d === item.yearIdx;
      item.el.classList.toggle("dimmed", !on);
    });
  }

  function initThree() {
    if (inited3d) return;
    inited3d = true;

    const W = wrap3d.clientWidth || 480;
    const H = wrap3d.clientHeight || 480;

    scene3d = new THREE.Scene();
    camera3d = new THREE.PerspectiveCamera(40, W / H, 1, 2000);
    updateCameraFromOrbit();

    renderer3d = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer3d.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer3d.setSize(W, H);
    wrap3d.appendChild(renderer3d.domElement);

    labelWrap3d = document.createElement("div");
    labelWrap3d.style.position = "absolute";
    labelWrap3d.style.top = "0";
    labelWrap3d.style.left = "0";
    labelWrap3d.style.width = "100%";
    labelWrap3d.style.height = "100%";
    labelWrap3d.style.pointerEvents = "none";
    wrap3d.appendChild(labelWrap3d);

    scene3d.add(new THREE.AmbientLight(0x224d2e, 0.6));
    const dir1 = new THREE.DirectionalLight(0xbfffcf, 0.75);
    dir1.position.set(150, 200, 150);
    scene3d.add(dir1);
    const dir2 = new THREE.DirectionalLight(0x39ff6a, 0.4);
    dir2.position.set(-150, -100, -100);
    scene3d.add(dir2);

    group3d = new THREE.Group();
    scene3d.add(group3d);

    const grid = new THREE.GridHelper(360, 12, 0x145c2c, 0x0a2814);
    grid.position.y = -RMAX3D - 40;
    scene3d.add(grid);

    wrap3d.addEventListener("pointerdown", (e) => {
      isDragging3d = true;
      camAnimTarget = null;
      setActiveViewBtn("free");
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      wrap3d.setPointerCapture(e.pointerId);
    });
    wrap3d.addEventListener("pointermove", (e) => {
      if (!isDragging3d) return;
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      camTheta -= dx * 0.006;
      camPhi += dy * 0.006;
      camPhi = Math.max(-1.3, Math.min(1.3, camPhi));
      updateCameraFromOrbit();
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });
    window.addEventListener("pointerup", () => { isDragging3d = false; });

    window.addEventListener("resize", () => {
      const w = wrap3d.clientWidth, h = wrap3d.clientHeight;
      if (!w || !h) return;
      camera3d.aspect = w / h;
      camera3d.updateProjectionMatrix();
      renderer3d.setSize(w, h);
    });

    animate3d();
  }

  function makeLabel(text, extraClass) {
    const el = document.createElement("div");
    el.className = "label3d" + (extraClass ? " " + extraClass : "");
    el.textContent = text;
    el.style.opacity = "0";
    labelWrap3d.appendChild(el);
    return el;
  }

  function buildScene3d() {
    buildToken++;
    const myToken = buildToken;

    for (let i = group3d.children.length - 1; i >= 0; i--) {
      const c = group3d.children[i];
      if (c.geometry) c.geometry.dispose();
      if (c.material) c.material.dispose();
      group3d.remove(c);
    }
    labelWrap3d.innerHTML = "";
    segmentGroups = [];
    ringGroups = [];
    vertexLabelEls = [];
    yearLabelEls = [];
    axisLabelEls = [];

    const totalLen = LAYER_GAP * (AÑOS_GRAFICO.length - 1);
    const baseX = -totalLen / 2;
    const color = new THREE.Color(0x39ff6a); // un solo verde matrix para toda la figura

    const layers = AÑOS_GRAFICO.map((_, yi) => {
      const pts = layerPositions(DATOS_GRAFICO[yi]);
      pts.forEach((p) => { p.x = baseX + yi * LAYER_GAP; });
      return pts;
    });

    AÑOS_GRAFICO.forEach((yearName, yi) => {
      const g = new THREE.Group();
      const pts = layers[yi];

      const loopPts = pts.concat([pts[0]]);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(loopPts);
      const lineMat = new THREE.LineBasicMaterial({ color, linewidth: 2 });
      g.add(new THREE.Line(lineGeo, lineMat));

      pts.forEach((p, vi) => {
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(4, 12, 12),
          new THREE.MeshPhongMaterial({ color, shininess: 60 })
        );
        sphere.position.copy(p);
        g.add(sphere);

        const lbl = makeLabel(String(DATOS_GRAFICO[yi][vi]), "value-tag");
        const labelPos = new THREE.Vector3(p.x, p.y * 1.05, p.z * 1.05);
        vertexLabelEls.push({ el: lbl, pos: labelPos, yearIdx: yi });

        if (yi === 0) {
          const a = angle3d(vi);
          const axisLbl = makeLabel(VALORES_GRAFICO[vi], "axis-tag");
          const axisPos = new THREE.Vector3(p.x - 12, RMAX3D * 1.14 * Math.cos(a), RMAX3D * 1.14 * Math.sin(a));
          axisLabelEls.push({ el: axisLbl, pos: axisPos });
        }
      });

      const yLbl = makeLabel(yearName, "year-tag");
      const yPos = new THREE.Vector3(pts[0].x, RMAX3D * 0.85, 0);
      yearLabelEls.push({ el: yLbl, pos: yPos });

      group3d.add(g);
      g.visible = false;
      ringGroups.push(g);
    });

    for (let li = 0; li < layers.length - 1; li++) {
      const a = layers[li], b = layers[li + 1];
      const positions = [];
      const colors = [];

      for (let i = 0; i < N; i++) {
        const i2 = (i + 1) % N;
        const A = a[i], B = a[i2], C = b[i2], D = b[i];
        positions.push(A.x, A.y, A.z, B.x, B.y, B.z, C.x, C.y, C.z);
        colors.push(color.r, color.g, color.b, color.r, color.g, color.b, color.r, color.g, color.b);
        positions.push(A.x, A.y, A.z, C.x, C.y, C.z, D.x, D.y, D.z);
        colors.push(color.r, color.g, color.b, color.r, color.g, color.b, color.r, color.g, color.b);
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
      geo.computeVertexNormals();

      const mat = new THREE.MeshPhongMaterial({
        vertexColors: true,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
        shininess: 40,
        flatShading: true,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      group3d.add(mesh);
      segmentGroups.push(mesh);
    }

    applyFocus3d();
    playBuildAnimation(myToken);
  }

  function playBuildAnimation(myToken) {
    const steps = [];
    steps.push(() => { ringGroups[0].visible = true; });
    for (let i = 0; i < segmentGroups.length; i++) {
      steps.push(() => {
        segmentGroups[i].visible = true;
        ringGroups[i + 1].visible = true;
      });
    }
    let stepIdx = 0;
    function next() {
      if (myToken !== buildToken) return;
      if (stepIdx >= steps.length) return;
      steps[stepIdx]();
      stepIdx++;
      setTimeout(next, 420);
    }
    next();
  }

  function updateLabelPositions() {
    if (!renderer3d) return;
    const W = wrap3d.clientWidth, H = wrap3d.clientHeight;
    const tmp = new THREE.Vector3();

    function projectAndPlace(el, worldVec, fadeByDepth) {
      worldVec.project(camera3d);
      const visible = worldVec.z < 1;
      const depthFade = fadeByDepth ? Math.max(0.35, 1 - Math.max(0, worldVec.z) * 0.9) : 1;
      el.style.opacity = visible ? String(depthFade) : "0";
      el.style.left = (worldVec.x * 0.5 + 0.5) * W + "px";
      el.style.top = (-worldVec.y * 0.5 + 0.5) * H + "px";
    }

    vertexLabelEls.forEach((item) => {
      if (!showValueNumbers3d) { item.el.style.opacity = "0"; return; }
      tmp.copy(item.pos);
      group3d.localToWorld(tmp);
      projectAndPlace(item.el, tmp, true);
    });
    axisLabelEls.forEach((item) => {
      tmp.copy(item.pos);
      group3d.localToWorld(tmp);
      projectAndPlace(item.el, tmp, false);
    });
    yearLabelEls.forEach((item) => {
      tmp.copy(item.pos);
      projectAndPlace(item.el, tmp, false);
    });
  }

  function animate3d() {
    requestAnimationFrame(animate3d);
    if (!renderer3d) return;
    if (modal3d.hidden) return; // no renderiza mientras el modal está cerrado
    if (autoRotate3d) group3d.rotation.x += 0.006;
    if (camAnimTarget) {
      camTheta += (camAnimTarget.theta - camTheta) * 0.12;
      camPhi += (camAnimTarget.phi - camPhi) * 0.12;
      if (Math.abs(camAnimTarget.theta - camTheta) < 0.001 && Math.abs(camAnimTarget.phi - camPhi) < 0.001) {
        camTheta = camAnimTarget.theta;
        camPhi = camAnimTarget.phi;
        camAnimTarget = null;
      }
    }
    updateCameraFromOrbit();
    updateLabelPositions();
    renderer3d.render(scene3d, camera3d);
  }

  function setActiveViewBtn(view) {
    currentView3d = view;
    document.getElementById("view2dYearBtn").classList.toggle("active", view === "year");
    document.getElementById("view2dTimeBtn").classList.toggle("active", view === "time");
    document.getElementById("viewFreeBtn").classList.toggle("active", view === "free");
  }
  function pauseRotationForView() {
    autoRotate3d = false;
    document.getElementById("toggleRotateBtn").textContent = "▶ Reanudar giro";
  }
  function irVistaPorAnio() {
    pauseRotationForView();
    group3d.rotation.x = 0;
    flyCameraTo(-Math.PI / 2, 0.05);
    if (focusYear3d === -1) focusYear3d = 0;
    buildLegend();
    applyFocus3d();
    setActiveViewBtn("year");
  }
  function irVistaEnElTiempo() {
    pauseRotationForView();
    group3d.rotation.x = 0;
    flyCameraTo(0, 0);
    focusYear3d = -1;
    buildLegend();
    applyFocus3d();
    setActiveViewBtn("time");
  }
  function irVistaLibre() {
    autoRotate3d = true;
    document.getElementById("toggleRotateBtn").textContent = "⏸ Pausar giro";
    flyCameraTo(DEFAULT_CAM_THETA, DEFAULT_CAM_PHI);
    setActiveViewBtn("free");
  }

  document.getElementById("toggleRotateBtn").addEventListener("click", (e) => {
    autoRotate3d = !autoRotate3d;
    e.target.textContent = autoRotate3d ? "⏸ Pausar giro" : "▶ Reanudar giro";
  });
  document.getElementById("replayBuildBtn").addEventListener("click", () => {
    ringGroups.forEach((g) => (g.visible = false));
    segmentGroups.forEach((m) => (m.visible = false));
    playBuildAnimation(buildToken);
  });
  document.getElementById("toggleNumbersBtn").addEventListener("click", (e) => {
    showValueNumbers3d = !showValueNumbers3d;
    e.target.textContent = showValueNumbers3d ? "# Ocultar números" : "# Mostrar números";
    e.target.classList.toggle("active", !showValueNumbers3d);
  });
  document.getElementById("view2dYearBtn").addEventListener("click", irVistaPorAnio);
  document.getElementById("view2dTimeBtn").addEventListener("click", irVistaEnElTiempo);
  document.getElementById("viewFreeBtn").addEventListener("click", irVistaLibre);
  document.getElementById("modal-3d-cerrar").addEventListener("click", cerrarGrafico3D);
  modal3d.addEventListener("click", (e) => { if (e.target === modal3d) cerrarGrafico3D(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal3d.hidden) cerrarGrafico3D(); });

  buildLegend();

  function cerrarGrafico3D() {
    modal3d.hidden = true;
    document.body.classList.remove("modal-3d-abierto");
  }

  // punto de entrada: lo llaman los botones "Ver conjunto en 3D" de las
  // secciones "Calidad vs Tiempo" ('year') y "El fin del teclado" ('time')
  window.abrirGrafico3D = async function (vistaInicial) {
    modal3d.hidden = false;
    document.body.classList.add("modal-3d-abierto");
    try {
      if (!threeCargado) {
        await cargarThreeJS();
        threeCargado = true;
      }
    } catch (err) {
      wrap3d.textContent = "No se pudo cargar el gráfico 3D. Revisá tu conexión.";
      return;
    }
    if (!inited3d) {
      initThree();
      buildScene3d();
    }
    if (vistaInicial === "year") irVistaPorAnio();
    else if (vistaInicial === "time") irVistaEnElTiempo();
    else irVistaLibre();
  };
})();
