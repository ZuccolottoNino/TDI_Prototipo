/* ========================================================================
   1) CONTENIDO — Esta es la lista de secciones de tu infografía.
      Para agregar, quitar o reordenar accesos, editá este arreglo.

      "id"        -> identificador único, se usa para el <div> del gráfico
                     (así vas a poder ubicarlo después: #grafico-<id>)
      "comando"   -> nombre de archivo simulado que se "tipea" en el
                     prompt al seleccionar la opción (mantiene el efecto
                     consola aunque el título real sea una oración larga)
      "titulo"    -> el texto completo que se ve en el menú como opción.
                     Si contiene ":", lo que está ANTES se usa como
                     encabezado grande al abrir la sección, y lo que
                     está DESPUÉS como bajada. Si no tiene ":", el texto
                     completo se usa como encabezado.
   ======================================================================== */
const secciones = [
  {
    id: "vibe-coding",
    comando: "opcion_01.exe",
    titulo: "¿Qué tan buenos y seguros son los modelos de IA actuales?",
    badges: ["AUDITORÍA: CRÍTICA", "BENCHMARK: BAXBENCH", "EVAL: 2025"],
    resumenCorto: "Evaluación BaxBench de LLMs: brecha crítica entre funcionalidad y seguridad.",
    contexto: "Este panel compara la seguridad del código que generan distintos modelos de IA (Claude 4.5, Gemini 3 Pro, Claude 3.7, Gemini 2.5 y Grok 4) sobre dos bancos de pruebas: AutoBaxBuilder y BaxBench, un benchmark que mide si los backends generados por LLMs son correctos y seguros a la vez. Cada barra se reparte en el porcentaje de programas que resultó seguro, el que presentó alguna vulnerabilidad y el resto, que directamente falló. La idea es mostrar que un modelo puede escribir código que \"funciona\" sin que eso lo vuelva confiable: esa distancia entre funcionar y ser seguro es justamente lo que benchmarks como este buscan medir.",
    callout: {
      icono: "⚠️",
      header: "HALLAZGO CRÍTICO DE AUDITORÍA",
      texto: "Un modelo puede escribir código funcional que compile y supere tests básicos, pero hasta un 37% de los backends generados introduce vulnerabilidades graves de seguridad en endpoints y bases de datos."
    },
    kpis: [
      { valor: "44%-60%", etiqueta: "CÓDIGO SEGURO (LÍDERES)" },
      { valor: "37%", etiqueta: "VULNERABILIDAD MÁXIMA" },
      { valor: "2 BENCHMARKS", etiqueta: "AUTOBAX + BAXBENCH" }
    ],
    tldr: [
      { num: "01", tit: "Funcional ≠ Seguro", desc: "Superar tests unitarios no previene inyecciones SQL ni fallos de permisos no contemplados por el prompt." },
      { num: "02", tit: "Liderazgo en la Brecha", desc: "Claude 4.5 y Gemini 3 Pro logran los mejores índices, pero mantienen tasas de inseguridad del 21% al 37%." },
      { num: "03", tit: "Auditoría Real", desc: "BaxBench y AutoBaxBuilder miden resiliencia ante ataques concretos, no sólo compilación." }
    ],
    metodologia: [
      { clave: "BANCO_DE_PRUEBAS", valor: "AutoBaxBuilder & BaxBench (2025)" },
      { clave: "MODELOS_EVALUADOS", valor: "Claude 4.5, Gemini 3 Pro, Claude 3.7, Gemini 2.5, Grok 4" },
      { clave: "CRITERIO_DE_CORTE", valor: "Seguro (0 vulnerabilidades) / Vulnerable (funciona pero explotable) / Falló" }
    ]
  },
  {
    id: "calidad-vs-tiempo",
    comando: "opcion_02.exe",
    titulo: "Calidad vs Tiempo: La dicotomía al usar IA en programación en porcentajes",
    badges: ["TENSIÓN: VELOCIDAD vs DEUDA", "5 DIMENSIONES", "PERÍODO: 2024-2026"],
    resumenCorto: "Tensión radial entre aceleración inicial de prototipado y deuda técnica acumulada.",
    contexto: "Este radial resume, año a año, la tensión entre velocidad y calidad al programar con IA, a partir de cinco variables: ahorro de tiempo, tareas completadas, código aprobado, vulnerabilidad y tasa de error. El Vibe Coding acelera mucho las primeras etapas de un proyecto —prototipos, pruebas de una idea, funcionalidades simples— pero esa velocidad puede jugar en contra si no hay una revisión posterior: el código puede pasar las pruebas iniciales y aun así tener problemas de arquitectura, rendimiento o mantenimiento cuando el proyecto crece. Por eso conviene mirar las cinco puntas juntas: más ahorro de tiempo no siempre viene acompañado de más código aprobado.",
    callout: {
      icono: "⚡",
      header: "LEY DE DEUDA TÉCNICA",
      texto: "El 55% de ahorro de tiempo en prototipos y scaffolding inicial se contrapone con un 70% de desarrolladores que dedican horas imprevistas a depurar alucinaciones y desfases de contexto."
    },
    kpis: [
      { valor: "55%", etiqueta: "AHORRO DE TIEMPO INICIAL" },
      { valor: "91%", etiqueta: "EQUIPOS QUE FUSIONAN IA" },
      { valor: "70%", etiqueta: "DEPURACIÓN EXTRA REQUERIDA" }
    ],
    tldr: [
      { num: "01", tit: "Velocidad Temprana", desc: "Ahorro de hasta 55% de tiempo en tareas repetitivas, prototipado y generación de boilerplate." },
      { num: "02", tit: "Falsos Merges", desc: "El 91% de equipos aprueba código sugerido por IA, pero el 45% arrastra vulnerabilidades a producción." },
      { num: "03", tit: "Pentágono Integral", desc: "No se puede evaluar el rendimiento por una sola métrica: velocidad sin revisión dispara la deuda técnica." }
    ],
    metodologia: [
      { clave: "FUENTE_PRIMARIA", valor: "Developer Surveys y reportes de telemetría de código (2024-2026)" },
      { clave: "VARIABLES_CLAVE", valor: "Ahorro de tiempo, Tareas completadas, Aprobación de PRs, Vulnerabilidad, Tasa de error" },
      { clave: "SISTEMA_COORDENADAS", valor: "Proyección pentagonal normalizada de 0 a 10" }
    ]
  },
  {
    id: "fin-del-teclado",
    comando: "opcion_03.exe",
    titulo: "El fin del teclado: ¿Cuánto código de internet pasó realmente por manos humanas?",
    badges: ["PARADIGMA: VIBE CODING", "SERIE: 2020-2025", "PROYECCIÓN: 2030"],
    resumenCorto: "Evolución histórica: del código tipeado manualmente a la orquestación con lenguaje natural.",
    contexto: "Este gráfico sigue, año a año, cuánto código se escribe hoy a partir de instrucciones en lenguaje natural en vez de tipearse línea por línea. La pregunta de fondo es simple: de todo el código que corre en internet, ¿cuánta parte pasó realmente por manos humanas? Ya se habla de una porción creciente del código publicado en plataformas como GitHub escrito con asistencia de IA, una tendencia que el Vibe Coding —término que popularizó Andrej Karpathy en 2025— ayudó a acelerar, corriendo el foco de \"escribir cada línea\" hacia \"definir bien el objetivo y revisar el resultado\".",
    callout: {
      icono: "⌨️",
      header: "MUTACIÓN DEL OFICIO",
      texto: "La programación se transforma de una disciplina de mecanografía sintáctica a una de arquitectura, definición de restricciones de negocio y auditoría continua de salidas sintéticas."
    },
    kpis: [
      { valor: "<5%", etiqueta: "CÓDIGO ASISTIDO (2020)" },
      { valor: "32%", etiqueta: "CÓDIGO ASISTIDO (2025)" },
      { valor: ">70%", etiqueta: "PROYECCIÓN (2030)" }
    ],
    tldr: [
      { num: "01", tit: "Crecimiento Exponencial", desc: "De una herramienta exploratoria en 2020 a constituir más de un tercio del código fuente en 2025." },
      { num: "02", tit: "Era Karpathy (2025)", desc: "El Vibe Coding consolidó la sustitución del tipeo línea por línea por especificaciones en lenguaje natural." },
      { num: "03", tit: "Horizonte 2030", desc: "Se proyecta que la mayor parte del código global será sintetizado por agentes bajo supervisión humana." }
    ],
    metodologia: [
      { clave: "ALCANCE_TEMPORAL", valor: "Registros históricos 2020-2025 y modelo proyectivo 2026-2030" },
      { clave: "FUENTES_ANALIZADAS", valor: "Métricas de GitHub, repositorios de código abierto e índices del sector" },
      { clave: "UNIDAD_DE_MEDIDA", valor: "% de nuevo código generado asistido por IA vs. tipeado a mano" }
    ]
  }
];

// Separa "encabezado : bajada" solo si el título trae dos puntos
function partirTitulo(titulo) {
  const indice = titulo.indexOf(":");
  if (indice === -1) {
    return { encabezado: titulo, bajada: "" };
  }
  return {
    encabezado: titulo.slice(0, indice).trim(),
    bajada: titulo.slice(indice + 1).trim()
  };
}

/* ========================================================================
   2) REFERENCIAS AL DOM
   ======================================================================== */
const vistaIntro = document.getElementById("vista-intro");
const listaMenu = document.getElementById("lista-menu");
const vistaMenu = document.getElementById("vista-menu");
const vistaSeccion = document.getElementById("vista-seccion");
const promptForm = document.getElementById("prompt-form");
const promptInput = document.getElementById("prompt-input");
const promptRuta = document.getElementById("prompt-ruta");
const promptCursor = document.getElementById("prompt-cursor");
const promptErrorMsg = document.getElementById("prompt-error-msg");
const seccionTitulo = document.getElementById("seccion-titulo");
const seccionDescripcion = document.getElementById("seccion-descripcion");
const seccionContexto = document.getElementById("seccion-contexto");
const seccionGrafico = document.getElementById("seccion-grafico");
const seccionGraficoWrapper = document.getElementById("seccion-grafico-wrapper");
const seccionGraficoBloqueo = document.getElementById("seccion-grafico-bloqueo");
const btnIrReadme = document.getElementById("btn-ir-readme");
const pieEstado = document.getElementById("pie-estado");
const botonCruzTop = document.getElementById("boton-cruz-top");
const botonIntro = document.getElementById("boton-intro");

// Estado del gateway y de la ventana // README
const seccionesDesbloqueadas = new Set();
let seccionActual = null;
let tabActiva = "docs";
let readmeColapsado = false;

// Elementos de la consola de introducción
const introForm = document.getElementById("intro-form");
const introInput = document.getElementById("intro-input");
const introSalida = document.getElementById("intro-salida");
const chipRun = document.getElementById("chip-run");
const introTerminalBox = document.getElementById("intro-terminal-box");
const introInputWrapper = document.querySelector(".intro__input-wrapper");

// Lee la velocidad de tipeo definida en las variables CSS, para mantener un único lugar de configuración
const msPorCaracter = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--velocidad-tipeo')) || 38;
const msTransicion = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--duracion-transicion')) || 420;

let escribiendo = false;
let graficoActivo = null; // referencia al controlador del gráfico montado en la sección abierta (si tiene)

// Estado inicial del pie de consola
if (pieEstado) pieEstado.textContent = 'esperando comando "run"';

/* ========================================================================
   2.1) PROMPT INTERACTIVO PRINCIPAL (C:\INFOGRAFIA> run 01/02/03)
   ======================================================================== */
function ajustarAnchoPromptInput() {
  if (!promptInput) return;
  const longitud = promptInput.value.length;
  promptInput.style.width = longitud + "ch";
  if (promptErrorMsg) promptErrorMsg.textContent = "";
  if (promptForm) promptForm.classList.remove("error");
}

if (promptInput) {
  promptInput.addEventListener("input", ajustarAnchoPromptInput);
}

if (promptForm) {
  promptForm.addEventListener("click", () => {
    if (promptInput) promptInput.focus();
  });

  promptForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ejecutarComandoConsola(promptInput ? promptInput.value : "");
  });
}

function ejecutarComandoConsola(rawCmd) {
  const comando = (rawCmd || "").trim().toLowerCase();

  if (comando === "run 01" || comando === "run 1" || comando === "run01" || comando === "01") {
    abrirSeccion(secciones[0]);
  } else if (comando === "run 02" || comando === "run 2" || comando === "run02" || comando === "02") {
    abrirSeccion(secciones[1]);
  } else if (comando === "run 03" || comando === "run 3" || comando === "run03" || comando === "03") {
    abrirSeccion(secciones[2]);
  } else if (comando === "cd .." || comando === "volver" || comando === "exit" || comando === "menu") {
    if (!vistaSeccion.hidden) {
      volverAlMenu();
    } else {
      volverAIntro();
    }
  } else if (comando === "intro" || comando === "inicio" || comando === "home") {
    volverAIntro();
  } else if (comando === "clear" || comando === "cls") {
    if (promptInput) promptInput.value = "";
    ajustarAnchoPromptInput();
    if (promptErrorMsg) promptErrorMsg.textContent = "";
  } else if (comando === "help" || comando === "ayuda") {
    if (promptErrorMsg) {
      promptErrorMsg.textContent = 'Comandos válidos: "run 01", "run 02", "run 03", "cd .." o "intro"';
    }
  } else {
    if (promptForm) {
      promptForm.classList.add("error");
      setTimeout(() => promptForm.classList.remove("error"), 400);
    }
    if (promptErrorMsg) {
      if (!comando) {
        promptErrorMsg.textContent = 'Escribí "run 01", "run 02" o "run 03" y presioná ENTER.';
      } else {
        promptErrorMsg.textContent = `Comando no reconocido: "${rawCmd}". Escribí "run 01", "run 02" o "run 03".`;
      }
    }
    if (promptInput) {
      promptInput.select();
    }
  }
}

/* ========================================================================
   2.2) INTERACCIÓN DE LA PANTALLA DE INICIO (COMANDO RUN)
   ======================================================================== */
async function procesarComandoIntro(valor) {
  const comando = (valor || "").trim().toLowerCase();

  if (comando === "run" || comando === "run.exe" || comando === "start") {
    if (introInput) introInput.disabled = true;
    if (introInputWrapper) introInputWrapper.classList.remove("error");

    if (introSalida) {
      introSalida.innerHTML = `
        <div class="intro__log intro__log--ok">&gt; run</div>
        <div class="intro__log intro__log--info">&gt; [OK] Autenticando entorno de visualización...</div>
        <div class="intro__log intro__log--ok">&gt; [OK] Acceso autorizado. Cargando infografía...</div>
      `;
    }
    if (pieEstado) pieEstado.textContent = "acceso concedido...";

    setTimeout(() => {
      if (promptForm) promptForm.hidden = false;
      if (botonIntro) botonIntro.hidden = false;
      if (promptRuta) promptRuta.textContent = "C:\\INFOGRAFIA>";
      if (promptInput) {
        promptInput.value = "";
        ajustarAnchoPromptInput();
      }
      cambiarVista(vistaIntro, vistaMenu);
      if (pieEstado) pieEstado.textContent = "listo";
      if (introInput) {
        introInput.disabled = false;
        introInput.value = "";
      }
      setTimeout(() => {
        if (promptInput) promptInput.focus();
      }, msTransicion + 60);
    }, 650);
  } else {
    if (introInputWrapper) {
      introInputWrapper.classList.add("error");
      setTimeout(() => introInputWrapper.classList.remove("error"), 400);
    }
    if (introSalida) {
      if (!comando) {
        introSalida.innerHTML = `<div class="intro__log intro__log--error">&gt; Por favor, escribí "run" y presioná ENTER.</div>`;
      } else {
        introSalida.innerHTML = `<div class="intro__log intro__log--error">&gt; Comando no reconocido: "${valor}". Escribí "run" para ingresar.</div>`;
      }
    }
    if (introInput) {
      introInput.focus();
      introInput.select();
    }
  }
}

if (introForm) {
  introForm.addEventListener("submit", (e) => {
    e.preventDefault();
    procesarComandoIntro(introInput ? introInput.value : "");
  });
}

if (chipRun) {
  chipRun.addEventListener("click", () => {
    if (introInput) introInput.value = "run";
    procesarComandoIntro("run");
  });
}

if (introTerminalBox && introInput) {
  introTerminalBox.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON" && e.target !== chipRun) {
      introInput.focus();
    }
  });
}

// Autoenfoque al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  if (introInput) {
    setTimeout(() => introInput.focus(), 150);
  }
});

function volverAIntro() {
  if (escribiendo) return;
  if (typeof cerrarModalNodo === "function") cerrarModalNodo();
  const vistaActiva = (!vistaSeccion.hidden) ? vistaSeccion : vistaMenu;
  if (botonCruzTop) botonCruzTop.classList.remove("visible");
  if (botonIntro) botonIntro.hidden = true;
  if (promptForm) promptForm.hidden = true;
  if (introSalida) introSalida.innerHTML = "";
  if (introInput) {
    introInput.value = "";
    introInput.disabled = false;
  }
  cambiarVista(vistaActiva, vistaIntro);
  if (pieEstado) pieEstado.textContent = 'esperando comando "run"';
  graficoActivo = null;
  setTimeout(() => {
    if (introInput) introInput.focus();
  }, msTransicion + 60);
}

if (botonIntro) {
  botonIntro.addEventListener("click", volverAIntro);
}

/* ========================================================================
   3) CONSTRUCCIÓN DEL MENÚ (Instructivo de comandos por sección)
   ======================================================================== */
secciones.forEach((seccion, indice) => {
  const item = document.createElement("li");
  item.className = "menu__instruccion-item";
  const numComando = `0${indice + 1}`;

  item.innerHTML = `
    <span class="menu__instruccion-prefijo">Ejecutar</span>
    <code class="menu__comando-badge">run ${numComando}</code>
    <span class="menu__instruccion-conector">para acceder a:</span>
    <span class="menu__instruccion-titulo">${seccion.titulo}</span>
  `;

  listaMenu.appendChild(item);
});

/* ========================================================================
   4) EFECTO DE TIPEO EN EL PROMPT (para respuestas simuladas si aplica)
   ======================================================================== */
function tipear(texto) {
  return new Promise((resolve) => {
    if (!promptInput) return resolve();
    escribiendo = true;
    promptInput.value = "";
    ajustarAnchoPromptInput();
    let i = 0;
    const intervalo = setInterval(() => {
      promptInput.value += texto[i];
      ajustarAnchoPromptInput();
      i++;
      if (i >= texto.length) {
        clearInterval(intervalo);
        escribiendo = false;
        resolve();
      }
    }, msPorCaracter);
  });
}

/* ========================================================================
   5) TRANSICIÓN ENTRE VISTAS
   ======================================================================== */
function cambiarVista(vistaOculta, vistaVisible) {
  vistaOculta.classList.add("vista--saliendo");
  setTimeout(() => {
    vistaOculta.hidden = true;
    vistaOculta.classList.remove("vista--saliendo");

    vistaVisible.hidden = false;
    vistaVisible.classList.add("vista--entrando");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        vistaVisible.classList.remove("vista--entrando");
      });
    });
  }, msTransicion);
}

/* ========================================================================
   5.5) SISTEMA DINÁMICO // README Y GATEWAY OBLIGATORIO DE AUDITORÍA
   ======================================================================== */
function formatearTextoReadme(texto) {
  if (!texto) return "";
  return texto
    .replace(/(Claude 4\.5|Gemini 3 Pro|Claude 3\.7|Gemini 2\.5|Grok 4)/g, '<span class="readme__chip-inline">$1</span>')
    .replace(/(AutoBaxBuilder|BaxBench|Vibe Coding|Andrej Karpathy)/g, '<span class="readme__chip-inline">$1</span>')
    .replace(/(\b\d{1,2}%\b|\b\d{1,2}%-\d{1,2}%\b)/g, '<span class="readme__metric-inline">$1</span>');
}

function renderizarReadme(seccion) {
  if (!seccionContexto) return;
  const estaDesbloqueado = seccionesDesbloqueadas.has(seccion.id);

  const badgeHtml = estaDesbloqueado
    ? `<span class="readme__badge-estado readme__badge-estado--auditado">🔓 AUDITADO ✓</span>`
    : `<span class="readme__badge-estado readme__badge-estado--pendiente">🔒 REVISIÓN REQUERIDA</span>`;

  const tabsHtml = `
    <div class="readme__tabs" role="tablist">
      <button class="readme__tab-btn ${tabActiva === 'docs' ? 'activo' : ''}" data-tab="docs" type="button" role="tab">
        📄 DOCS
      </button>
      <button class="readme__tab-btn ${tabActiva === 'tldr' ? 'activo' : ''}" data-tab="tldr" type="button" role="tab">
        ⚡ TL;DR
      </button>
      <button class="readme__tab-btn ${tabActiva === 'metodologia' ? 'activo' : ''}" data-tab="metodologia" type="button" role="tab">
        🔬 METODOLOGÍA
      </button>
    </div>
  `;

  const calloutHtml = seccion.callout ? `
    <div class="readme__callout">
      <div class="readme__callout-icono">${seccion.callout.icono || '⚠️'}</div>
      <div>
        <div class="readme__callout-header">${seccion.callout.header}</div>
        <p class="readme__callout-texto">${seccion.callout.texto}</p>
      </div>
    </div>
  ` : '';

  const kpisHtml = (seccion.kpis && seccion.kpis.length > 0) ? `
    <div class="readme__kpis">
      ${seccion.kpis.map(k => `
        <div class="readme__kpi-card">
          <div class="readme__kpi-valor">${k.valor}</div>
          <div class="readme__kpi-etiqueta">${k.etiqueta}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const tldrHtml = (seccion.tldr && seccion.tldr.length > 0) ? `
    <div class="readme__tldr-grid">
      ${seccion.tldr.map(item => `
        <div class="readme__tldr-card">
          <div class="readme__tldr-num">[${item.num}]</div>
          <div class="readme__tldr-tit">${item.tit}</div>
          <p class="readme__tldr-desc">${item.desc}</p>
        </div>
      `).join('')}
    </div>
  ` : '';

  const metodologiaHtml = (seccion.metodologia && seccion.metodologia.length > 0) ? `
    <div class="readme__metodologia-grid">
      ${seccion.metodologia.map(m => `
        <div class="readme__metodologia-item">
          <div class="readme__metodologia-clave">${m.clave}</div>
          <div class="readme__metodologia-valor">${m.valor}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const pieAccionHtml = estaDesbloqueado ? `
    <div class="readme__aviso-bloqueo readme__aviso-bloqueo--auditado">
      <span>✓</span> <span>Documentación revisada — Visualización interactiva activa.</span>
    </div>
    <button class="readme__btn-desbloquear readme__btn-desbloquear--desbloqueado" type="button" disabled>
      ✓ LECTURA CONFIRMADA
    </button>
  ` : `
    <div class="readme__aviso-bloqueo">
      <span>⚠️</span> <span>Acceso al gráfico bloqueado hasta confirmar revisión de este archivo.</span>
    </div>
    <button class="readme__btn-desbloquear" id="btn-desbloquear-grafico" type="button">
      <span>↵</span> CONFIRMAR LECTURA Y DESBLOQUEAR GRÁFICO
    </button>
  `;

  seccionContexto.className = `seccion__readme ${readmeColapsado ? 'readme--colapsado' : ''}`;
  seccionContexto.innerHTML = `
    <div class="readme__barra">
      <div class="readme__barra-izq">
        <span class="readme__archivo">📄 // README.md</span>
        ${badgeHtml}
      </div>
      <div class="readme__barra-der">
        ${tabsHtml}
        <button class="readme__btn-toggle" type="button" aria-label="Colapsar o expandir README">
          ${readmeColapsado ? '[ ▴ EXPANDIR ]' : '[ ▾ MINIMIZAR ]'}
        </button>
      </div>
    </div>

    <div class="readme__resumen-colapsado">
      <span><strong>// README:</strong> ${seccion.resumenCorto || seccion.titulo}</span>
      <button class="readme__btn-toggle" type="button">[ ▴ EXPANDIR ]</button>
    </div>

    <div class="readme__cuerpo">
      <div class="readme__panel" data-panel="docs" ${tabActiva === 'docs' ? '' : 'hidden'}>
        ${calloutHtml}
        <p class="readme__texto-principal">${formatearTextoReadme(seccion.contexto)}</p>
        ${kpisHtml}
      </div>

      <div class="readme__panel" data-panel="tldr" ${tabActiva === 'tldr' ? '' : 'hidden'}>
        ${tldrHtml}
      </div>

      <div class="readme__panel" data-panel="metodologia" ${tabActiva === 'metodologia' ? '' : 'hidden'}>
        ${metodologiaHtml}
      </div>
    </div>

    <div class="readme__pie-accion">
      ${pieAccionHtml}
    </div>
  `;

  // Listeners de pestañas
  const tabBtns = seccionContexto.querySelectorAll(".readme__tab-btn");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabActiva = btn.getAttribute("data-tab");
      seccionContexto.querySelectorAll(".readme__tab-btn").forEach((b) => {
        b.classList.toggle("activo", b.getAttribute("data-tab") === tabActiva);
      });
      seccionContexto.querySelectorAll(".readme__panel").forEach((p) => {
        if (p.getAttribute("data-panel") === tabActiva) {
          p.removeAttribute("hidden");
        } else {
          p.setAttribute("hidden", "true");
        }
      });
    });
  });

  // Listeners de minimizar / expandir
  const toggleBtns = seccionContexto.querySelectorAll(".readme__btn-toggle");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      readmeColapsado = !readmeColapsado;
      seccionContexto.classList.toggle("readme--colapsado", readmeColapsado);
      toggleBtns.forEach((b) => {
        b.textContent = readmeColapsado ? "[ ▴ EXPANDIR ]" : "[ ▾ MINIMIZAR ]";
      });
    });
  });

  // Listener del botón de desbloqueo
  const btnDesbloquear = seccionContexto.querySelector("#btn-desbloquear-grafico");
  if (btnDesbloquear) {
    btnDesbloquear.addEventListener("click", () => {
      desbloquearGraficoActual();
    });
  }
}

function actualizarBloqueoGrafico(seccionId) {
  const estaDesbloqueado = seccionesDesbloqueadas.has(seccionId);
  if (!seccionGraficoWrapper) return;

  if (estaDesbloqueado) {
    seccionGraficoWrapper.classList.remove("grafico-wrapper--bloqueado");
    if (seccionGraficoBloqueo) {
      seccionGraficoBloqueo.style.display = "none";
    }
  } else {
    seccionGraficoWrapper.classList.add("grafico-wrapper--bloqueado");
    if (seccionGraficoBloqueo) {
      seccionGraficoBloqueo.style.display = "flex";
      seccionGraficoBloqueo.style.opacity = "1";
      seccionGraficoBloqueo.style.visibility = "visible";
    }
  }
}

function desbloquearGraficoActual() {
  if (!seccionActual) return;
  seccionesDesbloqueadas.add(seccionActual.id);

  if (seccionGraficoBloqueo) {
    seccionGraficoBloqueo.style.transition = "opacity 0.35s ease";
    seccionGraficoBloqueo.style.opacity = "0";
    setTimeout(() => {
      seccionGraficoBloqueo.style.display = "none";
      if (seccionGraficoWrapper) {
        seccionGraficoWrapper.classList.remove("grafico-wrapper--bloqueado");
      }
    }, 350);
  } else if (seccionGraficoWrapper) {
    seccionGraficoWrapper.classList.remove("grafico-wrapper--bloqueado");
  }

  if (pieEstado) pieEstado.textContent = "módulo interactivo desbloqueado — listo";

  renderizarReadme(seccionActual);

  // Colapsar suavemente para darle protagonismo al gráfico tras confirmar
  setTimeout(() => {
    if (seccionContexto && !readmeColapsado) {
      readmeColapsado = true;
      seccionContexto.classList.add("readme--colapsado");
      const toggleBtns = seccionContexto.querySelectorAll(".readme__btn-toggle");
      toggleBtns.forEach((b) => (b.textContent = "[ ▴ EXPANDIR ]"));
    }
  }, 450);
}

function enfocarBotonDesbloqueo() {
  if (seccionContexto) {
    if (readmeColapsado) {
      readmeColapsado = false;
      seccionContexto.classList.remove("readme--colapsado");
      const toggleBtns = seccionContexto.querySelectorAll(".readme__btn-toggle");
      toggleBtns.forEach((b) => (b.textContent = "[ ▾ MINIMIZAR ]"));
    }
    seccionContexto.scrollIntoView({ behavior: "smooth", block: "start" });
    const btn = seccionContexto.querySelector("#btn-desbloquear-grafico");
    if (btn) {
      btn.classList.remove("readme__btn-desbloquear--pulse");
      void btn.offsetWidth; // reiniciar animación
      btn.classList.add("readme__btn-desbloquear--pulse");
      btn.focus();
    }
  }
}

if (seccionGraficoBloqueo) {
  seccionGraficoBloqueo.addEventListener("click", enfocarBotonDesbloqueo);
}

if (btnIrReadme) {
  btnIrReadme.addEventListener("click", (e) => {
    e.stopPropagation();
    enfocarBotonDesbloqueo();
  });
}

/* ========================================================================
   6) ABRIR UNA SECCIÓN
   ======================================================================== */
async function abrirSeccion(seccion) {
  if (escribiendo) return;

  seccionActual = seccion;
  tabActiva = "docs";
  readmeColapsado = false;
  if (seccionContexto) seccionContexto.classList.remove("readme--colapsado");

  const num = seccion.id === "vibe-coding" ? "01" : seccion.id === "calidad-vs-tiempo" ? "02" : "03";
  pieEstado.textContent = "ejecutando...";

  if (promptErrorMsg) promptErrorMsg.textContent = "";
  if (promptRuta) promptRuta.textContent = `C:\\INFOGRAFIA\\SECCION_${num}>`;
  if (promptInput) {
    promptInput.value = "";
    ajustarAnchoPromptInput();
  }

  const { encabezado, bajada } = partirTitulo(seccion.titulo);
  seccionTitulo.textContent = encabezado;
  seccionDescripcion.textContent = bajada;
  seccionDescripcion.style.display = bajada ? "block" : "none";

  renderizarReadme(seccion);
  actualizarBloqueoGrafico(seccion.id);

  seccionGrafico.id = `grafico-${seccion.id}`;
  seccionGrafico.className = "grafico-placeholder";
  seccionGrafico.innerHTML = "";

  if (seccion.id === "vibe-coding" && typeof montarGraficoBarras === "function") {
    graficoActivo = montarGraficoBarras(seccionGrafico);
  } else if (seccion.id === "calidad-vs-tiempo" && typeof montarGraficoRadial === "function") {
    graficoActivo = montarGraficoRadial(seccionGrafico);
  } else if (seccion.id === "fin-del-teclado" && typeof montarGraficoTiempo === "function") {
    graficoActivo = montarGraficoTiempo(seccionGrafico);
  } else {
    graficoActivo = null;
    seccionGrafico.textContent = `[ acá va el gráfico interactivo de "${encabezado}" ]`;
  }

  if (botonCruzTop) botonCruzTop.classList.add("visible");
  cambiarVista(vistaMenu, vistaSeccion);
  pieEstado.textContent = `listo — run ${num}`;
  setTimeout(() => {
    if (promptInput) promptInput.focus();
  }, msTransicion + 60);
}

/* ========================================================================
   7) VOLVER AL MENÚ
   ======================================================================== */
async function volverAlMenu() {
  if (escribiendo || vistaSeccion.hidden) return;
  if (typeof cerrarModalNodo === "function") cerrarModalNodo();
  if (botonCruzTop) botonCruzTop.classList.remove("visible");
  pieEstado.textContent = "ejecutando...";

  if (promptRuta) promptRuta.textContent = "C:\\INFOGRAFIA>";
  if (promptInput) {
    promptInput.value = "";
    ajustarAnchoPromptInput();
  }
  if (promptErrorMsg) promptErrorMsg.textContent = "";

  cambiarVista(vistaSeccion, vistaMenu);
  pieEstado.textContent = "listo";
  graficoActivo = null;
  setTimeout(() => {
    if (promptInput) promptInput.focus();
  }, msTransicion + 60);
}

if (botonCruzTop) botonCruzTop.addEventListener("click", volverAlMenu);

// Captura de tipeo en el menú para enfocar la consola automáticamente
document.addEventListener("keydown", (e) => {
  if (vistaMenu && !vistaMenu.hidden && promptInput && document.activeElement !== promptInput) {
    if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      promptInput.focus();
    }
  }
});

// flechas del teclado: navegan el gráfico de la sección abierta (si tiene)
document.addEventListener("keydown", (e) => {
  if (!graficoActivo || vistaSeccion.hidden) return;
  if (e.target === promptInput) return;
  if (seccionActual && !seccionesDesbloqueadas.has(seccionActual.id)) return;
  if (e.key === "ArrowLeft") graficoActivo.onFlecha(-1);
  if (e.key === "ArrowRight") graficoActivo.onFlecha(1);
});

/* ========================================================================
   8) FONDO — LLUVIA DE CARACTERES (efecto "matrix")
      Una parte de las gotas dibuja los logos de las IA en vez de un
      caracter, con opacidad reducida para que se mimeticen con el resto
      de la lluvia en lugar de resaltar como estampitas pegadas encima.
      Se controla desde el CSS: --proporcion-logos-ia, --escala-logo-ia,
      --opacidad-logos-ia.
   ======================================================================== */
(function lluviaDeCodigo() {
  const canvas = document.getElementById("lluvia");
  const ctx = canvas.getContext("2d");
  const caracteres = "アイウエオカキクケコサシスセソ0123456789ABCDEF";
  let columnas, gotas;
  const tamanoFuente = 25;

  function leerVariable(nombre, porDefecto) {
    const valor = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(nombre));
    return Number.isNaN(valor) ? porDefecto : valor;
  }

  const proporcionLogos = leerVariable('--proporcion-logos-ia', 1);
  const escalaLogo = leerVariable('--escala-logo-ia', 2.4);
  const opacidadLogos = leerVariable('--opacidad-logos-ia', 0.55);

  /* --- LOGOS que caen mezclados con los caracteres -----------------------
     Para cambiar qué marcas aparecen, reemplazá los archivos dentro de
     assets/logos/ (mantené los mismos nombres) o editá este arreglo.
     Ya vienen recortados en verde sobre fondo transparente, por eso no
     hace falta aplicarles ningún filtro de color. */
  const logos = ["chatgpt.png", "claude.png", "gemini.png", "grok.png"].map((nombre) => {
    const img = new Image();
    img.src = `assets/logos/${nombre}`;
    return img;
  });

  function logoListo(img) {
    return img.complete && img.naturalWidth > 0;
  }

  function redimensionar() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columnas = Math.floor(canvas.width / tamanoFuente);
    gotas = new Array(columnas).fill(0).map(() => Math.random() * canvas.height / tamanoFuente);
  }

  function dibujar() {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-verde-principal').trim() || "#33ff5b";
    ctx.font = tamanoFuente + "px monospace";

    for (let i = 0; i < gotas.length; i++) {
      const x = i * tamanoFuente;
      const y = gotas[i] * tamanoFuente;
      const logo = logos[Math.floor(Math.random() * logos.length)];

      if (Math.random() < proporcionLogos && logoListo(logo)) {
        const tamanoLogo = tamanoFuente * escalaLogo - 35;
        ctx.globalAlpha = opacidadLogos;
        ctx.drawImage(logo, x - tamanoLogo * 0.3, y - tamanoLogo * 0.8, tamanoLogo, tamanoLogo);
        ctx.globalAlpha = 1;
      } else {
        const caracter = caracteres[Math.floor(Math.random() * caracteres.length)];
        ctx.fillText(caracter, x, y);
      }

      if (gotas[i] * tamanoFuente > canvas.height && Math.random() > 0.975) {
        gotas[i] = 0;
      }
      gotas[i]++;
    }
  }

  redimensionar();
  window.addEventListener("resize", redimensionar);

  const prefiereMenosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefiereMenosMovimiento) {
    setInterval(dibujar, 60);
  }
})();
