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
    titulo: "El Vibe Coding, la programación con IA o Ai-assisted y sus consecuencias directas."
  },
  {
    id: "fin-del-teclado",
    comando: "opcion_02.exe",
    titulo: "El fin del teclado: ¿Cuánto código de internet pasó realmente por manos humanas?"
  },
  {
    id: "calidad-vs-tiempo",
    comando: "opcion_03.exe",
    titulo: "Calidad vs Tiempo: La dicotomía al usar IA en programación"
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
const listaMenu = document.getElementById("lista-menu");
const vistaMenu = document.getElementById("vista-menu");
const vistaSeccion = document.getElementById("vista-seccion");
const promptTexto = document.getElementById("prompt-texto");
const seccionTitulo = document.getElementById("seccion-titulo");
const seccionDescripcion = document.getElementById("seccion-descripcion");
const seccionGrafico = document.getElementById("seccion-grafico");
const botonVolver = document.getElementById("boton-volver");
const pieEstado = document.getElementById("pie-estado");

// Lee la velocidad de tipeo definida en las variables CSS, para mantener un único lugar de configuración
const msPorCaracter = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--velocidad-tipeo')) || 38;
const msTransicion = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--duracion-transicion')) || 420;

let escribiendo = false;

/* ========================================================================
   3) CONSTRUCCIÓN DEL MENÚ (a partir del arreglo "secciones")
   ======================================================================== */
secciones.forEach((seccion, indice) => {
  const item = document.createElement("li");
  const numero = String(indice + 1).padStart(2, "0");

  const boton = document.createElement("button");
  boton.className = "menu__item";
  boton.type = "button";
  boton.innerHTML = `
    <span class="menu__indice">[${numero}]</span>
    <span class="menu__nombre">${seccion.titulo}</span>
    <span class="menu__flecha">→</span>
  `;
  boton.addEventListener("click", () => abrirSeccion(seccion));

  item.appendChild(boton);
  listaMenu.appendChild(item);
});

/* ========================================================================
   4) EFECTO DE TIPEO EN EL PROMPT
   ======================================================================== */
function tipear(texto) {
  return new Promise((resolve) => {
    escribiendo = true;
    promptTexto.textContent = "";
    let i = 0;
    const intervalo = setInterval(() => {
      promptTexto.textContent += texto[i];
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
   6) ABRIR UNA SECCIÓN
   ======================================================================== */
async function abrirSeccion(seccion) {
  if (escribiendo) return;

  pieEstado.textContent = "ejecutando...";
  await tipear(`run ${seccion.comando}`);

  const { encabezado, bajada } = partirTitulo(seccion.titulo);
  seccionTitulo.textContent = encabezado;
  seccionDescripcion.textContent = bajada;
  seccionDescripcion.style.display = bajada ? "block" : "none";
  seccionGrafico.id = `grafico-${seccion.id}`;
  seccionGrafico.textContent = `[ acá va el gráfico interactivo de "${encabezado}" ]`;

  cambiarVista(vistaMenu, vistaSeccion);
  pieEstado.textContent = `listo — ${seccion.comando}`;
}

/* ========================================================================
   7) VOLVER AL MENÚ
   ======================================================================== */
botonVolver.addEventListener("click", async () => {
  if (escribiendo) return;
  pieEstado.textContent = "ejecutando...";
  await tipear("cd ..");
  cambiarVista(vistaSeccion, vistaMenu);
  pieEstado.textContent = "listo";
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
