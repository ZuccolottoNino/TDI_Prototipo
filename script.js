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
    badges: ["AUDITORÍA: CRÍTICA", "BENCHMARKS: BAXBENCH + AUTOBAX", "EVAL: 2025-2026"],
    resumenCorto: "Evaluación BaxBench y AutoBaxBench (Prueba Difícil): brecha crítica entre funcionalidad y seguridad.",
    contexto: "Este panel compara la seguridad del código generado por modelos de frontera sobre dos bancos de pruebas: BaxBench (leaderboard oficial) y AutoBaxBench evaluado en su Prueba Difícil (Hard, la más rigurosa entre las 3 dificultades disponibles del benchmark). Cada barra desglosa el código en: Seguro (supera pruebas funcionales y no presenta fallas), Inseguro (funciona pero contiene vulnerabilidades explotables) e Incorrecto (directamente no compila o falla las pruebas funcionales). En la prueba difícil de AutoBaxBench, ningún modelo supera el 30.7% de código seguro (liderado por GPT-5 * con 30.7%, seguido de Claude Sonnet 4.5 con 25.1%), y modelos como DeepSeek R1 presentan un 65.0% de código incorrecto con un 75.5% de vulnerabilidades en el código que parece funcionar.",
    callout: {
      icono: "⚠️",
      header: "HALLAZGO CRÍTICO // 3 DIFICULTADES EN AUTOBAX",
      texto: "AutoBaxBench evalúa a los modelos en 3 niveles de dificultad. En la prueba Difícil (Hard), el techo seguro cae dramáticamente al 30.7% (GPT-5), mientras que en Claude Sonnet 4.5 el 69.7% del código que compila y pasa las pruebas funcionales contiene vulnerabilidades críticas."
    },
    kpis: [
      { valor: "56.1% / 30.7%", etiqueta: "TECHOS SEGUROS (BAXBENCH / AUTOBAX DIFÍCIL)" },
      { valor: "hasta 65.0%", etiqueta: "CÓDIGO ROTO (AUTOBAX DIFÍCIL // DEEPSEEK)" },
      { valor: "48% - 75%", etiqueta: "INSEGURO DEL CÓDIGO FUNCIONAL (AUTOBAX DIFÍCIL)" }
    ],
    tldr: [
      { num: "01", tit: "Funcional ≠ Seguro", desc: "Superar tests unitarios no previene inyecciones SQL ni fallos de autenticación: el código puede compilar y seguir siendo inseguro." },
      { num: "02", tit: "3 Dificultades", desc: "AutoBaxBench incluye 3 niveles de dificultad; en la prueba Difícil (Hard), el techo máximo alcanzado cae a 30.7% (GPT-5 *)." },
      { num: "03", tit: "Vulnerabilidad Oculta", desc: "En la prueba difícil de AutoBaxBench, entre el 48.2% y el 75.5% de los programas que aprueban los tests funcionales esconden fallos graves." }
    ],
    metodologia: [
      { clave: "BANCOS_DE_PRUEBAS", valor: "BaxBench Oficial & AutoBaxBench (Prueba Difícil / Hard entre 3 dificultades)" },
      { clave: "MODELOS_EVALUADOS", valor: "Claude 4.5 (Opus / Sonnet), GPT-5 (*), Gemini (2.5 / 3 Pro), Grok 4, DeepSeek R1 (*)" },
      { clave: "CRITERIO_DE_CORTE", valor: "Seguro (0 vulnerabilidades) / Inseguro (funciona pero explotable) / Incorrecto (falló)" }
    ]
  },
  {
    id: "calidad-vs-tiempo",
    comando: "opcion_02.exe",
    titulo: "Calidad vs Tiempo: La dicotomía al usar IA en programación en porcentajes",
    badges: ["TENSIÓN: VELOCIDAD vs DEUDA", "5 DIMENSIONES", "PERÍODO: 2024-2026"],
    resumenCorto: "Tensión radial entre aceleración inicial de prototipado y deuda técnica acumulada.",
    contexto: "Este radial resume la tensión entre velocidad y calidad al programar con IA, a partir de cinco variables: ahorro de tiempo, tareas completadas, código aprobado, vulnerabilidad y tasa de error. El Vibe Coding acelera mucho las primeras etapas de un proyecto —prototipos, pruebas de una idea, funcionalidades simples— pero esa velocidad puede jugar en contra si no hay una revisión posterior: el código puede pasar las pruebas iniciales y aun así tener problemas de arquitectura, rendimiento o mantenimiento cuando el proyecto crece. IMPORTANTE: de las 5 variables, solo \"Vulnerabilidad\" tiene un número respaldado por la bibliografía del TP (~40%, ver nodo correspondiente). Las otras cuatro no las mide ninguna de las 11 fuentes citadas y quedan marcadas como pendientes en el gráfico — hay que sumar fuentes que las midan antes de presentar números ahí.",
    callout: {
      icono: "⚠️",
      header: "DATO CONFIRMADO VS. DATOS PENDIENTES",
      texto: "De las 5 variables del pentágono, la única respaldada por la bibliografía del TP es Vulnerabilidad (~40%, mismo orden de magnitud que mide BaxBench). Ahorro de tiempo, Tareas completadas, Código aprobado y Tasa de error no tienen fuente en la lista de 11 links del documento y no deberían mostrarse con un porcentaje hasta conseguir una."
    },
    kpis: [
      { valor: "~40%", etiqueta: "VULNERABILIDAD (ÚNICO DATO CONFIRMADO)" },
      { valor: "4 DE 5", etiqueta: "VARIABLES SIN FUENTE EN EL TP" },
      { valor: "1 DE 5", etiqueta: "VARIABLE RESPALDADA" }
    ],
    tldr: [
      { num: "01", tit: "Solo un vértice confirmado", desc: "De las 5 variables del pentágono, únicamente Vulnerabilidad (~40%) tiene respaldo directo en la bibliografía del TP." },
      { num: "02", tit: "Cuatro variables pendientes", desc: "Ahorro de tiempo, Tareas completadas, Código aprobado y Tasa de error no las mide ninguna de las 11 fuentes citadas — necesitan bibliografía nueva." },
      { num: "03", tit: "Pentágono Integral", desc: "No se puede evaluar el rendimiento por una sola métrica: por eso conviene completar las 4 variables faltantes con fuentes reales antes de sacar conclusiones." }
    ],
    metodologia: [
      { clave: "FUENTE_CONFIRMADA", valor: "Vulnerabilidad: estudio NYU vía The Register (2021) + BaxBench (2025)" },
      { clave: "VARIABLES_CLAVE", valor: "Ahorro de tiempo, Tareas completadas, Aprobación de PRs, Vulnerabilidad, Tasa de error" },
      { clave: "PENDIENTE", valor: "4 de 5 variables necesitan una fuente nueva en la bibliografía del TP" }
    ]
  },
  {
    id: "fin-del-teclado",
    comando: "opcion_03.exe",
    titulo: "El fin del teclado: ¿Cuánto código de internet pasó realmente por manos humanas?",
    badges: ["PERÍODO: 2023-2027", "SERIE TEMPORAL", "REALIDAD VS EXPECTATIVA"],
    resumenCorto: "Evolución 2023–2027: 6% en 2023, 19% en 2024, 42% en 2025, 55% en 2026 (75% en Google) y expectativa de 65% para 2027.",
    contexto: "Este gráfico muestra la evolución de la proporción de código generado o asistido por IA commiteado por desarrolladores (relevamiento n=979): 6% en 2023, 19% en 2024, 42% en 2025 y 55% en 2026, con una expectativa proyectada que alcanza el 65% para 2027. Además, en 2026 destaca la aceleración en empresas de frontera como Google, donde Sundar Pichai confirmó en Cloud Next que el 75% del código nuevo ya está generado o asistido con IA (y supervisado por ingenieros).",
    callout: {
      icono: "📈",
      header: "ACELERACIÓN EXPONENCIAL // 2023 A 2027",
      texto: "A lo largo de los cuatro años medidos y la proyección a 2027, el código commiteado asistido por IA se multiplicó por más de diez: del 6% inicial a más de la mitad en 2026 (55%) y camino al 65% en 2027."
    },
    kpis: [
      { valor: "55%", etiqueta: "PROMEDIO INDUSTRIA 2026 (n=979)" },
      { valor: "75%", etiqueta: "CÓDIGO IA EN GOOGLE (2026)" },
      { valor: "65%", etiqueta: "EXPECTATIVA PARA 2027" }
    ],
    tldr: [
      { num: "01", tit: "2023–2024: De 6% a 19%", desc: "El código generado pasó del 6% en 2023 al 19% en 2024, afianzando la asistencia en los flujos diarios de trabajo." },
      { num: "02", tit: "2025: Inflexión al 42%", desc: "El salto al 42% en 2025 marca la consolidación del Vibe Coding y la generación conversacional de software." },
      { num: "03", tit: "2026–2027: De 55% (75% Google) a 65%", desc: "En 2026 la media alcanza el 55% (75% en Google) y la expectativa para 2027 proyecta el 65% de todo el código commiteado." }
    ],
    metodologia: [
      { clave: "ALCANCE_TEMPORAL", valor: "2023 a 2027 (5 hitos: 4 medidos + expectativa 2027)" },
      { clave: "FUENTE_PRINCIPAL", valor: "Relevamiento a desarrolladores sobre código commiteado (n=979)" },
      { clave: "CASO_TESTIGO_2026", valor: "Google Cloud Next: 75% del código nuevo generado o asistido por IA" }
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
const pieEstado = document.getElementById("pie-estado");
const botonCruzTop = document.getElementById("boton-cruz-top");
const botonIntro = document.getElementById("boton-intro");

// Estado de la ventana // README
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
    .replace(/(Claude Opus 4\.5 Thinking|GPT-5|DeepSeek R1|Grok 4|Géminis 2\.5 Pro|Claude 4\.5|Gemini 3 Pro)/g, '<span class="readme__chip-inline">$1</span>')
    .replace(/(AutoBaxBuilder|BaxBench|Vibe Coding|Andrej Karpathy)/g, '<span class="readme__chip-inline">$1</span>')
    .replace(/(\b\d{1,2}(?:\.\d)?%\b|\b\d{1,2}%-\d{1,2}%\b)/g, '<span class="readme__metric-inline">$1</span>');
}

function renderizarReadme(seccion) {
  if (!seccionContexto) return;

  const badgeHtml = `<span class="readme__badge-estado readme__badge-estado--auditado">DOCS // REFERENCIA</span>`;

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
  if (seccionGraficoWrapper) {
    seccionGraficoWrapper.classList.remove("grafico-wrapper--bloqueado");
  }

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
