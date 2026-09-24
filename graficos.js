/* ========================================================================
   DATOS — GRÁFICO DE BARRAS (sección 01 "El Vibe Coding")
   5 variables/modelos. Cada variable tiene 2 series agrupadas (Serie A y Serie B),
   y cada serie tiene 2 sub-valores (% Seguro / Correcto y Seguro, y % Inseguro / Correcto e Inseguro).
   El porcentaje restante hasta 100% se calcula automáticamente como % Incorrecto.
   Podés editar estos valores acá o directamente en el panel interactivo de la app.
   ======================================================================== */
const NOM_SERIE_A = "AutoBaxBench (Difícil)";
const NOM_SERIE_B = "BaxBench";

/* DATOS OFICIALES:
   - Serie A: AutoBaxBench (Prueba Difícil / Hard — la más exigente entre sus 3 dificultades)
     1. GPT-5 *: 30.7% seguro, 59.3% correcto (48.2% inseguro del correcto, 40.7% incorrecto)
     2. Claude Sonnet 4.5: 25.1% seguro, 82.9% correcto (69.7% inseguro del correcto, 17.1% incorrecto)
     3. Gemini 3 Pro: 24.9% seguro, 76.2% correcto (67.3% inseguro del correcto, 23.8% incorrecto)
     4. Grok 4: 16.4% seguro, 42.1% correcto (61.0% inseguro del correcto, 57.9% incorrecto)
     5. DeepSeek R1 *: 8.6% seguro, 35.0% correcto (75.5% inseguro del correcto, 65.0% incorrecto)
   - Serie B: BaxBench (Leaderboard Oficial)
     1. Claude Opus 4.5 Thinking: 56.1% seguro, 86.2% correcto (34.9% inseguro del correcto, 13.8% incorrecto)
     2. GPT-5: 54.3% seguro, 70.7% correcto (23.1% inseguro del correcto, 29.3% incorrecto)
     3. DeepSeek R1: 34.4% seguro, 58.4% correcto (41.0% inseguro del correcto, 41.6% incorrecto)
     4. Grok 4: 33.4% seguro, 57.7% correcto (42.0% inseguro del correcto, 42.3% incorrecto)
     5. Géminis 2.5 Pro: 32.0% seguro, 49.8% correcto (35.8% inseguro del correcto, 50.2% incorrecto) */
const DATOS_GRAFICO_BARRAS = [
  {
    nombre: "Claude 4.5",
    serieA: { seguro: 25.1, inseguro: 57.8, inseguroDelCorrecto: 69.7, correctoTotal: 82.9, modelo: "Claude Sonnet 4.5" },
    serieB: { seguro: 56.1, inseguro: 30.1, inseguroDelCorrecto: 34.9, correctoTotal: 86.2, modelo: "Claude Opus 4.5 Thinking" }
  },
  {
    nombre: "GPT-5",
    serieA: { seguro: 30.7, inseguro: 28.6, inseguroDelCorrecto: 48.2, correctoTotal: 59.3, modelo: "GPT-5 *" },
    serieB: { seguro: 54.3, inseguro: 16.4, inseguroDelCorrecto: 23.1, correctoTotal: 70.7, modelo: "GPT-5" }
  },
  {
    nombre: "Gemini",
    serieA: { seguro: 24.9, inseguro: 51.3, inseguroDelCorrecto: 67.3, correctoTotal: 76.2, modelo: "Gemini 3 Pro" },
    serieB: { seguro: 32.0, inseguro: 17.8, inseguroDelCorrecto: 35.8, correctoTotal: 49.8, modelo: "Géminis 2.5 Pro" }
  },
  {
    nombre: "Grok 4",
    serieA: { seguro: 16.4, inseguro: 25.7, inseguroDelCorrecto: 61.0, correctoTotal: 42.1, modelo: "Grok 4" },
    serieB: { seguro: 33.4, inseguro: 24.3, inseguroDelCorrecto: 42.0, correctoTotal: 57.7, modelo: "Grok 4" }
  },
  {
    nombre: "DeepSeek R1",
    serieA: { seguro: 8.6, inseguro: 26.4, inseguroDelCorrecto: 75.5, correctoTotal: 35.0, modelo: "DeepSeek R1 *" },
    serieB: { seguro: 34.4, inseguro: 24.0, inseguroDelCorrecto: 41.0, correctoTotal: 58.4, modelo: "DeepSeek R1 Búsqueda Profunda" }
  }
];

/* ========================================================================
/* ========================================================================
   DATOS — GRÁFICO RADIAL (sección 02 "Calidad vs Tiempo" — SÓLO 2026)
   Configuración de los 5 nodos del pentágono para el año 2026.
   Cada nodo tiene su valor en el gráfico y el contenido de su ventana.
   Podés editar directamente los valores, imágenes y párrafos acá abajo:
   ======================================================================== */
/* NODOS_RADIAL_ACTUAL es la data que el pentágono dibuja en cada momento.
   Arranca mostrando el panorama 2026 (5 métricas de industria), pero al
   navegar entre modelos (ver MODELOS_RADIAL más abajo) se reemplaza por
   los 5 nodos del modelo elegido y se vuelve a llamar a montarGraficoRadial. */
let NODOS_RADIAL_2026 = [
  {
    id: "ahorro-tiempo",
    nombre: "Ahorro de tiempo",
    valor: 5, // ⚠️ SIN FUENTE VERIFICADA — valor neutro de referencia, no es una medición real
    metricaDisplay: "⚠ SIN DATO VERIFICADO EN LA BIBLIOGRAFÍA DEL TP",
    tag: "METRICA_01 // SPEED_OPT — PENDIENTE",
    imagen: "",
    imagenCaption: "FIG_01 // ANÁLISIS DE REDUCCIÓN DE TIEMPO EN DESARROLLO",
    parrafos: [
      "> NINGUNA DE LAS 11 FUENTES LISTADAS EN EL DOCUMENTO DEL TP MIDE EL AHORRO DE TIEMPO AL PROGRAMAR CON IA (LOS ESTUDIOS DE GITHUB, JETBRAINS Y MCKINSEY QUE SE USABAN ANTES NO ESTÁN EN LA BIBLIOGRAFÍA Y FUERON QUITADOS).",
      "> EL DOCUMENTO SÍ AFIRMA, SIN NÚMERO, QUE EL VIBE CODING \"ACELERA CONSIDERABLEMENTE LAS PRIMERAS ETAPAS DEL DESARROLLO\" EN PROTOTIPOS E IDEAS SIMPLES — ESE TEXTO PUEDE USARSE ACÁ, PERO SIN INVENTAR UN PORCENTAJE.",
      "> PARA CERRAR ESTE NODO CON UN DATO REAL, HAY QUE AGREGAR UNA FUENTE QUE MIDA ESTO ESPECÍFICAMENTE (POR EJEMPLO EL ESTUDIO DE GITHUB CON 4.800 DEVELOPERS) A LA LISTA DE REFERENCIAS DEL TP."
    ],
    pie: "PENDIENTE DE FUENTE — NO INCLUIR NÚMERO SIN RESPALDO"
  },
  {
    id: "tareas-completadas",
    nombre: "Tareas completadas",
    valor: 5, // ⚠️ SIN FUENTE VERIFICADA — valor neutro de referencia, no es una medición real
    metricaDisplay: "⚠ SIN DATO VERIFICADO EN LA BIBLIOGRAFÍA DEL TP",
    tag: "METRICA_02 // TASK_THROUGHPUT — PENDIENTE",
    imagen: "",
    imagenCaption: "FIG_02 // VOLUMEN DE COMMITS Y TICKETS RESUELTOS",
    parrafos: [
      "> NINGUNA DE LAS 11 FUENTES DEL TP MIDE CUÁNTAS TAREAS SE COMPLETAN MÁS RÁPIDO CON IA (LOS DATOS DE GITHUB+ACCENTURE Y FAROS AI QUE SE USABAN ANTES NO ESTÁN EN LA BIBLIOGRAFÍA Y FUERON QUITADOS).",
      "> LARRIDIN.COM (SÍ CITADO EN EL TP) MIDE ALGO PARECIDO PERO DISTINTO: EL \"AI CODE SHARE\", O SEA QUÉ PORCENTAJE DEL CÓDIGO ES GENERADO POR IA, NO CUÁNTAS TAREAS SE TERMINAN MÁS RÁPIDO — NO SON INTERCAMBIABLES.",
      "> PARA CERRAR ESTE NODO CON UN DATO REAL, HAY QUE AGREGAR UNA FUENTE QUE MIDA VELOCIDAD DE FINALIZACIÓN DE TAREAS ESPECÍFICAMENTE."
    ],
    pie: "PENDIENTE DE FUENTE — NO INCLUIR NÚMERO SIN RESPALDO"
  },
  {
    id: "codigo-aprobado",
    nombre: "Código aprobado",
    valor: 5, // ⚠️ SIN FUENTE VERIFICADA — valor neutro de referencia, no es una medición real
    metricaDisplay: "⚠ SIN DATO VERIFICADO EN LA BIBLIOGRAFÍA DEL TP",
    tag: "METRICA_03 // CODE_APPROVAL — PENDIENTE",
    imagen: "",
    imagenCaption: "FIG_03 // REVISIÓN HUMANA Y MERGES EN PRODUCCIÓN",
    parrafos: [
      "> NINGUNA DE LAS 11 FUENTES DEL TP MIDE QUÉ PORCENTAJE DE EQUIPOS FUSIONA (MERGE) CÓDIGO SUGERIDO POR IA (EL DATO DE GITHUB+ACCENTURE QUE SE USABA ANTES NO ESTÁ EN LA BIBLIOGRAFÍA Y FUE QUITADO).",
      "> BAXBENCH (SÍ CITADA) MIDE ALGO RELACIONADO PERO NO IGUAL: QUÉ PORCENTAJE DEL CÓDIGO GENERADO PASA LAS PRUEBAS FUNCIONALES (~60% EN EL MEJOR MODELO) — ESO ES \"CORRECCIÓN\", NO \"APROBACIÓN POR UN EQUIPO HUMANO\", ASÍ QUE NO SE PUEDE USAR COMO REEMPLAZO DIRECTO.",
      "> PARA CERRAR ESTE NODO CON UN DATO REAL, HAY QUE AGREGAR UNA FUENTE QUE MIDA TASA DE MERGE/APROBACIÓN POR EQUIPOS HUMANOS ESPECÍFICAMENTE."
    ],
    pie: "PENDIENTE DE FUENTE — NO INCLUIR NÚMERO SIN RESPALDO"
  },
  {
    id: "vulnerabilidad",
    nombre: "Vulnerabilidad",
    valor: 4, // 40% real / 10 — CORREGIDO Y CONFIRMADO por fuente del TP
    metricaDisplay: "40% // programas con fallas explotables",
    tag: "METRICA_04 // SEC_VULNERABILITY",
    imagen: "",
    imagenCaption: "FIG_04 // DETECCIÓN DE BRECHAS Y PATRONES INSEGUROS",
    parrafos: [
      "> UNA INVESTIGACIÓN DE LA UNIVERSIDAD DE NYU PUBLICADA EN ARXIV (\"AN EMPIRICAL CYBERSECURITY EVALUATION OF GITHUB COPILOT'S CODE CONTRIBUTIONS\") ANALIZÓ 1.692 PROGRAMAS GENERADOS A PARTIR DE 89 ESCENARIOS Y ENCONTRÓ QUE ~40% PRESENTABA ERRORES O FALLAS DE DISEÑO POTENCIALMENTE EXPLOTABLES.",
      "> ESTE MISMO ~40% ES EL QUE CITA EL DOCUMENTO DE REFERENCIA DEL TP, Y COINCIDE CON EL TECHO QUE MIDE BAXBENCH: NINGÚN MODELO EVALUADO SUPERA EL 37% DE GENERACIÓN CORRECTA Y SEGURA, Y CERCA DEL 40% DE LOS PROGRAMAS FALLA DIRECTAMENTE LA PRUEBA FUNCIONAL.",
      "> LAS DOS FUENTES (COPILOT 2021 Y BAXBENCH 2025) MIDEN COSAS LIGERAMENTE DISTINTAS PERO CONVERGEN EN EL MISMO ORDEN DE MAGNITUD, LO QUE REFUERZA QUE EL ~40% ES UNA CIFRA SÓLIDA PARA ESTA VARIABLE."
    ],
    pie: "ACT NOW AGAINST MASS VULNERABILITIES // SEC_CHECK_2026"
  },
  {
    id: "tasa-error",
    nombre: "Tasa de error",
    valor: 4, // Aproximación a partir de BaxBench: ~40% de los programas falla directamente la prueba funcional
    metricaDisplay: "~40% // programas que fallan la prueba funcional (aprox., ver nota)",
    tag: "METRICA_05 // RUNTIME_ERROR_RATE",
    imagen: "",
    imagenCaption: "FIG_05 // MONITOREO DE EXCEPCIONES Y REGISTRO DE FALLAS",
    parrafos: [
      "> NINGUNA FUENTE DEL TP MIDE \"TIEMPO EXTRA DE DEPURACIÓN\" DIRECTAMENTE (LOS DATOS DE HARNESS/MANEKTECH Y FAROS AI QUE SE USABAN ANTES NO ESTÁN EN LA BIBLIOGRAFÍA Y FUERON QUITADOS).",
      "> COMO APROXIMACIÓN, SE USA EL ~40% DE PROGRAMAS QUE FALLA DIRECTAMENTE LA PRUEBA FUNCIONAL EN BAXBENCH: ESE CÓDIGO ROTO ES, EN LOS HECHOS, EL QUE VA A NECESITAR DEPURACIÓN ANTES DE PODER USARSE.",
      "> ES UNA APROXIMACIÓN, NO UNA MEDICIÓN DIRECTA DE \"TASA DE ERROR EN PRODUCCIÓN\" — SI SE QUIERE UN DATO MÁS PRECISO, CONVIENE AGREGAR UNA FUENTE QUE MIDA ESPECÍFICAMENTE TIEMPO DE DEPURACIÓN O BUGS POST-DEPLOY."
    ],
    pie: "ACT NOW // EXCEPTION TRACE PROTOCOL 2026"
  }
];
const NODOS_RADIAL_PANORAMA_2026 = NODOS_RADIAL_2026; // respaldo de solo lectura, nunca se reasigna

/* ========================================================================
   DATOS — RADIAL POR MODELO (comparación entre las 5 empresas de gráfico 01)
   Mismos 5 ejes que el pentágono 2026, pero un pentágono por modelo.
   Se navega con las flechas / teclado, igual que el gráfico de tiempo.

   FUENTES (2 orígenes distintos, aclarado en cada nodo):
   - Corrección y Vulnerabilidad: BaxBench, leaderboard oficial (misma
     fuente y misma columna "BaxBench Oficial" que ya usás en el gráfico
     de barras de la sección 01) — modelo evaluado por BaxBench.
   - Velocidad, Precio y Contexto: trackers de precios de API (Price Per
     Token / AnotherWrapper), tomados del modelo insignia VIGENTE de cada
     empresa a agosto-septiembre 2026 — puede no ser exactamente la misma
     versión que evaluó BaxBench, así que se aclara el modelo en cada caso.

   NORMALIZACIÓN: cada eje se lleva a escala 0-10 tomando el valor más
   alto entre los 5 modelos como 10 y el más bajo como 0 (proporcional en
   el medio). En Precio se invierte la escala (más barato = más alto en
   el gráfico). El dato real (no normalizado) siempre se muestra en
   "metricaDisplay" para no perder la cifra concreta detrás del 0-10.
   ======================================================================== */
function normalizar(valor, min, max, invertir) {
  if (max === min) return 5;
  const t = (valor - min) / (max - min);
  const escalado = invertir ? (1 - t) : t;
  return Math.round(escalado * 10 * 10) / 10; // 1 decimal
}

// --- datos crudos por modelo (los 5 ejes según tablas verificadas) ---------------
const CRUDOS_MODELOS = [
  {
    modelo: "Claude Opus 4.7",
    empresa: "Anthropic",
    correccion: 86.2,
    codigoSeguro: 56.1,
    vulnerabilidad: 34.9,
    velocidad: 0.0,
    precio: 1.7,
    contexto: 8.3,
    throughputTexto: "42 tok/s",
    throughputDetalle: "42 tok/s (modo estándar; con \"Fast mode\" beta llega a ~105, hasta 2.5x)",
    contextoTokens: "1,000,000",
    contextoTexto: "1.0M tok",
    contextoDetalle: "1,000,000 tokens de ventana de contexto",
    precioBlended: "$30.00/M",
    precioDetalle: "$30.00 USD/M (promedio blended fusionando tarifas input y output)",
    modeloBax: "Claude Opus 4.5 Thinking",
    modeloSpecs: "Claude Opus 4.7",
    autoBaxCorrecto: 82.9,
    autoBaxSeguro: 25.1
  },
  {
    modelo: "GPT-5.5",
    empresa: "OpenAI",
    correccion: 70.7,
    codigoSeguro: 54.3,
    vulnerabilidad: 23.1,
    velocidad: 0.6,
    precio: 0.0,
    contexto: 10.0,
    throughputTexto: "45 tok/s",
    throughputDetalle: "45 tok/s medidos en inferencia de salida continua",
    contextoTokens: "1,100,000",
    contextoTexto: "1.1M tok",
    contextoDetalle: "1,100,000 tokens de ventana de contexto (máximo del grupo)",
    precioBlended: "$35.00/M",
    precioDetalle: "$35.00 USD/M (promedio blended fusionando tarifas input y output)",
    modeloBax: "GPT-5",
    modeloSpecs: "GPT-5.5",
    autoBaxCorrecto: 59.3,
    autoBaxSeguro: 30.7
  },
  {
    modelo: "Gemini 3.1 Pro",
    empresa: "Google",
    correccion: 49.8,
    codigoSeguro: 32.0,
    vulnerabilidad: 35.8,
    velocidad: 10.0,
    precio: 7.1,
    contexto: 8.3,
    throughputTexto: "90 tok/s",
    throughputDetalle: "90 tok/s (rango real 126–137 según Google Vertex/AI Studio)",
    contextoTokens: "1,000,000",
    contextoTexto: "1.0M tok",
    contextoDetalle: "1,000,000 tokens de ventana de contexto",
    precioBlended: "$14.00/M",
    precioDetalle: "$14.00 USD/M (promedio blended fusionando tarifas input y output)",
    modeloBax: "Géminis 2.5 Pro (Bax) / Gemini 3 Pro (AutoBax)",
    modeloSpecs: "Gemini 3.1 Pro",
    autoBaxCorrecto: 76.2,
    autoBaxSeguro: 24.9
  },
  {
    modelo: "Grok 4.6",
    empresa: "xAI",
    correccion: 57.7,
    codigoSeguro: 33.4,
    vulnerabilidad: 42.0,
    velocidad: 3.3,
    precio: 9.1,
    contexto: 0.0,
    throughputTexto: "58 tok/s",
    throughputDetalle: "58 tok/s de salida en clúster Colossus de entrenamiento y servicio",
    contextoTokens: "500,000",
    contextoTexto: "500K tok",
    contextoDetalle: "500,000 tokens de ventana de contexto (0.5M)",
    precioBlended: "$8.00/M",
    precioDetalle: "$8.00 USD/M (promedio blended fusionando tarifas input y output)",
    modeloBax: "Grok 4",
    modeloSpecs: "Grok 4.6",
    autoBaxCorrecto: 42.1,
    autoBaxSeguro: 16.4
  },
  {
    modelo: "DeepSeek V4 Pro",
    empresa: "DeepSeek",
    correccion: 58.4,
    codigoSeguro: 34.4,
    vulnerabilidad: 41.0,
    velocidad: 0.4,
    precio: 10.0,
    contexto: 8.3,
    throughputTexto: "~44 tok/s",
    throughputDetalle: "~44 tok/s (rango 42–46 entre Fireworks/Novita/DeepInfra)",
    contextoTokens: "1,000,000",
    contextoTexto: "1.0M tok",
    contextoDetalle: "1,000,000 tokens de ventana de contexto",
    precioBlended: "$5.22/M",
    precioDetalle: "$5.22 USD/M (promedio blended fusionando tarifas input y output)",
    modeloBax: "DeepSeek R1",
    modeloSpecs: "DeepSeek V4 Pro",
    autoBaxCorrecto: 35.0,
    autoBaxSeguro: 8.6
  }
];

const RANGO = (campo) => {
  const vals = CRUDOS_MODELOS.map(m => m[campo]);
  return { min: Math.min(...vals), max: Math.max(...vals) };
};
const R_CORR = RANGO("correccion");
const R_SEG = RANGO("codigoSeguro");

const MODELOS_RADIAL = CRUDOS_MODELOS.map(m => ({
  modelo: m.modelo,
  empresa: m.empresa,
  nodos: [
    {
      id: "correccion",
      nombre: "Corrección",
      imagen: "corrección.png",
      imagenCaption: "TELEMETRÍA // CORRECCIÓN",
      valor: normalizar(m.correccion, R_CORR.min, R_CORR.max, false),
      datoReal: `${m.correccion}%`,
      datoTipo: "CÓDIGO GENERADO CORRECTAMENTE",
      datoAmpliado: `${m.correccion}% de corrección funcional`,
      datoSub: `BaxBench Oficial · Modelo evaluado: ${m.modeloBax}`,
      metricaDisplay: `${m.correccion}% correcto y funcional`,
      tag: "METRICA_01 // FUNCTIONAL_CORRECTNESS",
      parrafos: [
        `> BAXBENCH OFICIAL (GRÁFICO 01): EL ${m.correccion}% DEL CÓDIGO GENERADO PASA CON ÉXITO TODOS LOS TESTS FUNCIONALES SOBRE 392 TAREAS EN 14 FRAMEWORKS (MODELO: ${m.modeloBax}).`,
        `> AUTOBAXBENCH DIFÍCIL: REGISTRA ${m.autoBaxCorrecto}% DE CORRECCIÓN FUNCIONAL EN GENERACIÓN AUTÓNOMA DE MICROSERVICIOS.`,
        `> PUNTUACIÓN RELATIVA: ${Number(normalizar(m.correccion, R_CORR.min, R_CORR.max, false)).toFixed(1)}/10 EN LA ESCALA NORMALIZADA DEL RELEVAMIENTO.`
      ],
      pie: "FUENTE: BAXBENCH.COM // GRÁFICO 01"
    },
    {
      id: "vulnerabilidad",
      nombre: "Vulnerabilidad",
      imagen: "vulnerabilidad.png",
      imagenCaption: "TELEMETRÍA // VULNERABILIDAD",
      valor: normalizar(m.codigoSeguro, R_SEG.min, R_SEG.max, false),
      datoReal: `${m.codigoSeguro}% seg`,
      datoTipo: "PORCENTAJE DE CÓDIGO SEGURO",
      datoAmpliado: `${m.codigoSeguro}% código correcto y seguro`,
      datoSub: `Vulnerabilidad del correcto: ${m.vulnerabilidad}% · AutoBax: ${m.autoBaxSeguro}% seg`,
      metricaDisplay: `${m.codigoSeguro}% seguro (BaxBench Oficial)`,
      tag: "METRICA_02 // SEC_SAFE_CODE",
      parrafos: [
        `> BAXBENCH OFICIAL (GRÁFICO 01): EL ${m.codigoSeguro}% DEL TOTAL DE CÓDIGO GENERADO RESULTA A LA VEZ CORRECTO Y LIBRE DE VULNERABILIDADES CONOCIDAS.`,
        `> BRECHA DE SEGURIDAD: DE LOS PROGRAMAS QUE SÍ PASAN LOS TESTS FUNCIONALES, EL ${m.vulnerabilidad}% RESULTA VULNERABLE ANTE EXPLOITS DE SEGURIDAD.`,
        `> AUTOBAXBENCH DIFÍCIL: EL CÓDIGO SEGURO REGISTRA ${m.autoBaxSeguro}% BAJO GENERACIÓN AUTÓNOMA EXIGENTE.`,
        `> PUNTUACIÓN RELATIVA: ${Number(normalizar(m.codigoSeguro, R_SEG.min, R_SEG.max, false)).toFixed(1)}/10 EN CÓDIGO SEGURO RESPECTO AL GRUPO.`
      ],
      pie: "FUENTE: BAXBENCH.COM // GRÁFICO 01"
    },
    {
      id: "velocidad",
      nombre: "Velocidad",
      imagen: "velocidad.png",
      imagenCaption: "TELEMETRÍA // VELOCIDAD",
      valor: m.velocidad,
      datoReal: m.throughputTexto,
      datoTipo: "THROUGHPUT DE INFERENCIA",
      datoAmpliado: `${m.throughputTexto} (tokens/s)`,
      datoSub: `${m.throughputDetalle}`,
      metricaDisplay: `${m.throughputTexto} (Puntuación: ${m.velocidad.toFixed(1)}/10)`,
      tag: "METRICA_03 // OUTPUT_THROUGHPUT",
      parrafos: [
        `> RENDIMIENTO EN PRODUCCIÓN: ${m.throughputDetalle}.`,
        "> VELOCIDAD DE SALIDA SOSTENIDA MEDIDA EN TOKENS POR SEGUNDO PARA DESARROLLO FLUIDO Y VIBE CODING EN TIEMPO REAL.",
        `> EVALUACIÓN NORMALIZADA: ${m.velocidad.toFixed(1)}/10 RESPECTO AL RESTO DEL GRUPO DE FRONTERA.`
      ],
      pie: "FUENTE: TABLA DE THROUGHPUT // 2026"
    },
    {
      id: "precio",
      nombre: "Precio",
      imagen: "precio.png",
      imagenCaption: "TELEMETRÍA // PRECIO",
      valor: m.precio,
      datoReal: m.precioBlended,
      datoTipo: "PRECIO PROMEDIO BLENDED (IN/OUT)",
      datoAmpliado: `${m.precioBlended} por millón de tokens`,
      datoSub: `${m.precioDetalle}`,
      metricaDisplay: `${m.precioBlended} (Puntuación: ${m.precio.toFixed(1)}/10)`,
      tag: "METRICA_04 // API_COST",
      parrafos: [
        `> PRECIO BLENDED PROMEDIO: ${m.precioDetalle}.`,
        "> FUSIÓN PONDERADA: COMBINA LAS TARIFAS DE ENTRADA (INPUT $/M) Y SALIDA (OUTPUT $/M) EN EL CONSUMO DE API.",
        `> EN ESTE EJE, MENOR PRECIO = MAYOR PUNTUACIÓN. ÍNDICE: ${m.precio.toFixed(1)}/10.`
      ],
      pie: "FUENTE: TABLA DE PRECIOS BLENDED // 2026"
    },
    {
      id: "contexto",
      nombre: "Contexto",
      imagen: "contexto.png",
      imagenCaption: "TELEMETRÍA // CONTEXTO",
      valor: m.contexto,
      datoReal: m.contextoTexto,
      datoTipo: "CANTIDAD DE TOKENS (VENTANA)",
      datoAmpliado: `${m.contextoTokens} tokens (${m.contextoTexto})`,
      datoSub: `${m.contextoDetalle}`,
      metricaDisplay: `${m.contextoTexto} (Puntuación: ${m.contexto.toFixed(1)}/10)`,
      tag: "METRICA_05 // CONTEXT_WINDOW",
      parrafos: [
        `> VENTANA TOTAL DISPONIBLE: ${m.contextoTokens} TOKENS (${m.contextoTexto}) DISPONIBLES EN INGESTIÓN DIRECTA.`,
        "> CAPACIDAD PARA PROCESAR REPOSITORIOS COMPLETOS, ARCHIVOS GRANDES Y DEPENDENCIAS SIN TRUNCADO.",
        `> EVALUACIÓN NORMALIZADA: ${m.contexto.toFixed(1)}/10 EN RETENCIÓN Y AMPLITUD DE CONTEXTO.`
      ],
      pie: "FUENTE: TABLA DE CONTEXTO // 2026"
    }
  ]
}));

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

/* Datos para el modal 3D — "conjunción de modelos": cada capa es un modelo
   distinto (no un año), tomados directamente de MODELOS_RADIAL para no
   duplicar los números en dos lugares. Los 5 ejes son fijos (Corrección,
   Vulnerabilidad, Velocidad, Precio, Contexto), y cada capa es un modelo
   independiente — no representan una evolución en el tiempo, así que no
   deben mezclarse ni promediarse entre sí. */
const AÑOS_GRAFICO = MODELOS_RADIAL.map(m => m.modelo);
const VALORES_GRAFICO = MODELOS_RADIAL[0].nodos.map(n => n.nombre);
const ESCALA_MAX_GRAFICO = 10;
const DATOS_GRAFICO = MODELOS_RADIAL.map(m => m.nodos.map(n => n.valor));

/* ========================================================================
   DATOS — GRÁFICO DE TIEMPO (sección 03 "El fin del teclado")
   Navegación interactiva por años: de 2023 a 2026.
   Mide la evolución de la cantidad de código generado / asistido con IA.
   ======================================================================== */
/* CORREGIDO — La serie "año por año 2023→2026" original citaba estudios
   (Sonar, Xataka, Stack Overflow 2024, ORSYS, Google Cloud Next 2026 /
   Sundar Pichai) que NO están en la bibliografía de 11 fuentes del TP, y el
   valor de Google para 2026 (75%) queda directamente CONTRADICHO por una de
   las fuentes que sí están citadas: gloss.run dice que Google está en 25% de
   código nuevo generado por IA (no 75%), GitHub en 51% y Snap en 65%.
   Como ninguna fuente del TP da una serie histórica año por año, se
   reemplaza el eje por niveles de adopción organizacional en 2026, que es
   justamente lo que SÍ mide una de las fuentes citadas (larridin.com,
   "Developer Productivity Benchmarks 2026"), y se usan los casos reales de
   gloss.run como ejemplos concretos dentro de cada nivel. */
const NOMBRE_GRAFICO_TIEMPO = "Evolución de código generado con IA (2023–2027): Realidad vs Expectativa";
const ESCALA_MAX_TIEMPO = 10;
const HITOS_GRAFICO_TIEMPO = [
  {
    anio: "2023",
    numero: "01",
    valor: 0.6,
    porcentaje: "6%",
    valorReal: 0.6,
    porcentajeReal: "6%",
    valorExp: 0.4,
    porcentajeExp: "4%",
    fase: "AÑO 2023 // DESPEGUE Y PRIMERAS PRUEBAS",
    metrica: "REAL: 6% de código commiteado · EXPECTATIVA: 4%",
    detalle: "Con la masificación de ChatGPT y GitHub Copilot, la IA empezó a instalarse en el flujo de trabajo diario como asistente puntual. El relevamiento a desarrolladores registró que el 6% del código commiteado fue generado o asistido por herramientas de IA."
  },
  {
    anio: "2024",
    numero: "02",
    valor: 1.9,
    porcentaje: "19%",
    valorReal: 1.9,
    porcentajeReal: "19%",
    valorExp: 1.5,
    porcentajeExp: "15%",
    fase: "AÑO 2024 // ADOPCIÓN EN FLUIDEZ",
    metrica: "REAL: 19% de código generado o asistido · EXPECTATIVA: 15%",
    detalle: "La adopción se triplica: el promedio de código commiteado asistido por IA sube al 19% entre los desarrolladores encuestados, superando la previsión inicial del 15% a medida que los asistentes se integran de forma natural en los IDEs."
  },
  {
    anio: "2025",
    numero: "03",
    valor: 4.2,
    porcentaje: "42%",
    valorReal: 4.2,
    porcentajeReal: "42%",
    valorExp: 3.0,
    porcentajeExp: "30%",
    fase: "AÑO 2025 // EL SALTO DEL VIBE CODING",
    metrica: "REAL: 42% del código commiteado · EXPECTATIVA: 30%",
    detalle: "Punto de inflexión marcado con un 42% del código generado o asistido por IA (hito actual del relevamiento). La llegada del Vibe Coding y los modelos de razonamiento consolidan la generación de bloques completos de software mediante lenguaje natural."
  },
  {
    anio: "2026",
    numero: "04",
    valor: 5.5,
    porcentaje: "55%",
    valorReal: 5.5,
    porcentajeReal: "55%",
    valorExp: 4.5,
    porcentajeExp: "45%",
    fase: "AÑO 2026 // ESTADO CONSOLIDADO Y CASO GOOGLE",
    metrica: "REAL: 55% promedio industria (n=979) · GOOGLE: 75%",
    detalle: "El promedio de código asistido o generado por IA alcanza el 55% del código commiteado por los desarrolladores. En empresas de frontera el salto es aún mayor: el 75% del código de Google está generado o asistido con IA (anunciado por Sundar Pichai en Cloud Next), con ingenieros supervisando y aprobando cada entrega."
  },
  {
    anio: "2027",
    numero: "05",
    valor: 6.5,
    porcentaje: "65%",
    valorReal: null,
    porcentajeReal: null,
    valorExp: 6.5,
    porcentajeExp: "65%",
    fase: "AÑO 2027 // EXPECTATIVA Y HORIZONTE",
    metrica: "EXPECTATIVA: 65% de todo el código commiteado · DATO REAL: PENDIENTE",
    detalle: "La expectativa de los desarrolladores para 2027 sitúa la cuota de código generado o asistido por IA en un 65%, consolidando un paradigma donde casi dos tercios de todo el código commiteado en el mundo provendrá de herramientas de inteligencia artificial. Al tratarse de un horizonte proyectivo, sólo se computa como expectativa previa (línea punteada) y no como dato real medido."
  }
];
const DATOS_GRAFICO_TIEMPO = HITOS_GRAFICO_TIEMPO.map(h => h.valorReal != null ? h.valorReal : h.valorExp);

const SVGNS = "http://www.w3.org/2000/svg";
function crearSVG(tag, attrs) {
  const e = document.createElementNS(SVGNS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  return e;
}

/* ========================================================================
   GRÁFICO DE BARRAS — sección "El Vibe Coding" (BaxBench / Auditoría de Seguridad)
   Enfocado en la brecha de seguridad:
   - 🔴 Rojo: Código Incorrecto (falla funcional / no compila, 40% a 59%)
   - 🟠 Ámbar: Código Correcto e Inseguro (vulnerable / explotable, 17% a 23%)
   - 🟢 Verde/Cyan: Código Correcto y Seguro (techo máx. 37%)
   - ⚡ Línea de Techo 37% de BaxBench
   - 🎛 Selector de Benchmark: BaxBench / AutoBaxBuilder / Comparativa Dual
   - ⚠️ Modo Foco en Inseguridad (resalta el 63% - 76% de código riesgoso)
   ======================================================================== */
let indiceActivoBarras = -1; // -1 = vista general, 0 = barra izquierda, 1 = barra derecha
let modoBenchmarkBarras = "baxbench"; // "baxbench" | "autobax" | "dual"
let focoInseguridadBarras = false;

// Estado de selección de modelos:
let modeloA_idx = 0; // Índice en DATOS_GRAFICO_BARRAS para Slot A (izq) -> Claude 4.5
let modeloB_idx = 1; // Índice en DATOS_GRAFICO_BARRAS para Slot B (der) -> GPT-5
let modeloDual_idx = 0; // Índice en DATOS_GRAFICO_BARRAS para Comparativa Dual -> Claude 4.5

function montarGraficoBarras(contenedor) {
  contenedor.classList.add("grafico-placeholder--activo");
  indiceActivoBarras = -1;

  contenedor.innerHTML = `
    <!-- BARRA DE HERRAMIENTAS: SELECTOR DE BENCHMARK + FOCO EN INSEGURIDAD -->
    <div class="barras-toolbar">
      <div class="bench-selector" role="tablist" aria-label="Seleccionar benchmark">
        <button type="button" class="bench-btn ${modoBenchmarkBarras === 'baxbench' ? 'bench-btn--activo' : ''}" data-bench="baxbench" role="tab" aria-selected="${modoBenchmarkBarras === 'baxbench'}">
          <span class="bench-btn__led"></span>BAXBENCH (PRINCIPAL)
        </button>
        <button type="button" class="bench-btn ${modoBenchmarkBarras === 'autobax' ? 'bench-btn--activo' : ''}" data-bench="autobax" role="tab" aria-selected="${modoBenchmarkBarras === 'autobax'}">
          <span class="bench-btn__led"></span>AUTOBAXBENCH (DIFÍCIL)
        </button>
        <button type="button" class="bench-btn ${modoBenchmarkBarras === 'dual' ? 'bench-btn--activo' : ''}" data-bench="dual" role="tab" aria-selected="${modoBenchmarkBarras === 'dual'}">
          <span class="bench-btn__led"></span>COMPARATIVA DUAL
        </button>
      </div>

      <button type="button" class="btn-foco-inseguridad ${focoInseguridadBarras ? 'btn-foco-inseguridad--activo' : ''}" id="btn-foco-inseguridad" title="Resaltar la brecha de código no confiable">
        <span class="foco-icon">⚠️</span>
        <span class="foco-text">FOCO EN INSEGURIDAD / RIESGO</span>
      </button>
    </div>

    <!-- SELECTOR COMPARATIVO DE MODELOS -->
    <div class="barras-selector-modelos" id="barras-selector-modelos"></div>

    <!-- LEYENDA SEMÁNTICA: ROJO = INCORRECTO, ÁMBAR = INSEGURO, VERDE = SEGURO -->
    <div class="legend-barras">
      <div class="legend-barras__item">
        <span class="swatch swatch--incorrecto"></span>
        <span><strong>Incorrecto</strong> (falla funcional)</span>
      </div>
      <div class="legend-barras__item">
        <span class="swatch swatch--inseguro"></span>
        <span><strong>Correcto e Inseguro</strong> (vulnerable)</span>
      </div>
      <div class="legend-barras__item">
        <span class="swatch swatch--seguro"></span>
        <span id="legend-seguro-txt"><strong>Correcto y Seguro</strong> (aprobado y verificado)</span>
      </div>
    </div>

    <div class="barras-hint" id="barras-hint"></div>

    <!-- ÁREA DEL GRÁFICO SVG DUAL -->
    <div class="chart-wrap ${focoInseguridadBarras ? 'foco-inseguridad-activo' : ''}" id="barras-chart-wrap">
      <svg data-el="svg" width="1070" height="430" viewBox="0 0 1070 430"></svg>

      <!-- POPUP FLOTANTE DE DETALLE -->
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
            <span class="popup-nodo__pie-tag" id="popup-barra-tag">MODELO</span>
            <span class="popup-nodo__pie-hint">◄ ► PARA MOVERTE</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SCORECARD SIMPLIFICADO -->
    <div class="barras-scorecard" id="barras-scorecard"></div>
  `;

  const chartWrap = contenedor.querySelector("#barras-chart-wrap");
  const svg = contenedor.querySelector('[data-el="svg"]');
  const popupBarra = contenedor.querySelector("#popup-barra");
  const popupTituloEl = contenedor.querySelector("#popup-barra-titulo");
  const popupParrafosEl = contenedor.querySelector("#popup-barra-parrafos");
  const popupTagEl = contenedor.querySelector("#popup-barra-tag");
  const popupCerrarBtn = contenedor.querySelector("#popup-barra-cerrar");
  const btnFocoInseguridad = contenedor.querySelector("#btn-foco-inseguridad");
  const benchBtns = contenedor.querySelectorAll(".bench-btn");
  const barrasHintEl = contenedor.querySelector("#barras-hint");
  const legendSeguroTxt = contenedor.querySelector("#legend-seguro-txt");
  const legendTechoTxt = contenedor.querySelector("#legend-techo-txt");
  const selectorModelosWrap = contenedor.querySelector("#barras-selector-modelos");
  const scorecardWrap = contenedor.querySelector("#barras-scorecard");

  // Defs con texturas para código vulnerable e incorrecto
  const defs = crearSVG("defs", {});
  defs.innerHTML = `
    <!-- Rayado de peligro para código vulnerable -->
    <pattern id="hatch-inseguro" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="8" height="8" fill="#78350f" />
      <line x1="0" y1="0" x2="0" y2="8" stroke="#fbbf24" stroke-width="2.5" />
    </pattern>

    <!-- Rayado de alerta para código roto/incorrecto -->
    <pattern id="hatch-incorrecto" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <rect width="8" height="8" fill="#5a1111" />
      <line x1="0" y1="0" x2="0" y2="8" stroke="#ef4444" stroke-width="2" />
    </pattern>
  `;
  svg.appendChild(defs);

  const padL = 70, padT = 52, padB = 84;
  const W = 1070, H = 430;
  const plotW = 710;
  const plotH = H - padT - padB; // 294
  const yBase = H - padB; // 346

  // Grilla horizontal con porcentajes (rectas horizontales a través de ambos gráficos)
  const gridGroup = crearSVG("g", { class: "barras-grid" });
  svg.appendChild(gridGroup);
  for (let pct = 0; pct <= 100; pct += 10) {
    const y = yBase - (pct / 100) * plotH;
    const esBase = pct === 0;
    gridGroup.appendChild(crearSVG("line", {
      x1: padL,
      y1: y.toFixed(2),
      x2: (padL + plotW).toFixed(2),
      y2: y.toFixed(2),
      class: esBase ? "grid-h grid-h--base" : "grid-h"
    }));
    const t = crearSVG("text", { x: padL - 8, y: (y + 4).toFixed(2), class: "y-label" });
    t.textContent = pct + "%";
    gridGroup.appendChild(t);
  }

  // Contenedores SVG
  const chartGroup = crearSVG("g", { class: "barras-chart" });
  svg.appendChild(chartGroup);

  let gruposBarras = [];

  function calcularMetricas(serie) {
    const seg = Math.min(100, Math.max(0, +(Number(serie.seguro) || 0).toFixed(1)));
    const ins = Math.min(100 - seg, Math.max(0, +(Number(serie.inseguro) || 0).toFixed(1)));
    const inc = Math.max(0, +(100 - seg - ins).toFixed(1));
    const noConfiable = +(ins + inc).toFixed(1);
    const correctoTotal = serie.correctoTotal ? +Number(serie.correctoTotal).toFixed(1) : +(seg + ins).toFixed(1);
    const insDelCorrecto = serie.inseguroDelCorrecto ? +Number(serie.inseguroDelCorrecto).toFixed(1) : +((ins / (seg + ins || 1)) * 100).toFixed(1);
    return {
      seguro: seg,
      inseguro: ins,
      incorrecto: inc,
      noConfiable,
      correctoTotal,
      insDelCorrecto
    };
  }

  function obtenerConfigBarras() {
    if (modoBenchmarkBarras === "dual") {
      const item = DATOS_GRAFICO_BARRAS[modeloDual_idx];
      const metBax = calcularMetricas(item.serieB);
      const metAuto = calcularMetricas(item.serieA);
      return {
        barraIzq: {
          slotIdx: 0,
          modelIdx: modeloDual_idx,
          nombreModelo: item.nombre,
          tituloEje: item.nombre,
          subtituloEje: item.serieB.modelo,
          tagEje: "BAXBENCH // OFICIAL",
          benchmarkNombre: "BaxBench (Leaderboard Oficial)",
          ...metBax
        },
        barraDer: {
          slotIdx: 1,
          modelIdx: modeloDual_idx,
          nombreModelo: item.nombre,
          tituloEje: item.nombre,
          subtituloEje: item.serieA.modelo,
          tagEje: "AUTOBAX // DIFÍCIL",
          benchmarkNombre: "AutoBaxBench (Prueba Difícil / Hard)",
          ...metAuto
        }
      };
    } else if (modoBenchmarkBarras === "autobax") {
      const itemA = DATOS_GRAFICO_BARRAS[modeloA_idx];
      const itemB = DATOS_GRAFICO_BARRAS[modeloB_idx];
      const metA = calcularMetricas(itemA.serieA);
      const metB = calcularMetricas(itemB.serieA);
      return {
        barraIzq: {
          slotIdx: 0,
          modelIdx: modeloA_idx,
          nombreModelo: itemA.nombre,
          tituloEje: itemA.nombre,
          subtituloEje: itemA.serieA.modelo,
          tagEje: "AUTOBAXBENCH DIFÍCIL",
          benchmarkNombre: "AutoBaxBench (Prueba Difícil / Hard)",
          ...metA
        },
        barraDer: {
          slotIdx: 1,
          modelIdx: modeloB_idx,
          nombreModelo: itemB.nombre,
          tituloEje: itemB.nombre,
          subtituloEje: itemB.serieA.modelo,
          tagEje: "AUTOBAXBENCH DIFÍCIL",
          benchmarkNombre: "AutoBaxBench (Prueba Difícil / Hard)",
          ...metB
        }
      };
    } else {
      // baxbench
      const itemA = DATOS_GRAFICO_BARRAS[modeloA_idx];
      const itemB = DATOS_GRAFICO_BARRAS[modeloB_idx];
      const metA = calcularMetricas(itemA.serieB);
      const metB = calcularMetricas(itemB.serieB);
      return {
        barraIzq: {
          slotIdx: 0,
          modelIdx: modeloA_idx,
          nombreModelo: itemA.nombre,
          tituloEje: itemA.nombre,
          subtituloEje: itemA.serieB.modelo,
          tagEje: "BAXBENCH OFICIAL",
          benchmarkNombre: "BaxBench (Leaderboard Oficial)",
          ...metA
        },
        barraDer: {
          slotIdx: 1,
          modelIdx: modeloB_idx,
          nombreModelo: itemB.nombre,
          tituloEje: itemB.nombre,
          subtituloEje: itemB.serieB.modelo,
          tagEje: "BAXBENCH OFICIAL",
          benchmarkNombre: "BaxBench (Leaderboard Oficial)",
          ...metB
        }
      };
    }
  }

  function renderizarSelectorModelos() {
    if (!selectorModelosWrap) return;

    if (modoBenchmarkBarras === "dual") {
      selectorModelosWrap.innerHTML = `
        <div class="selector-comparativo selector-comparativo--dual">
          <div class="selector-dual-wrap">
            <div class="selector-slot__header">
              <span class="selector-slot__badge">// COMPARATIVA DUAL: SELECCIONÁ UN MODELO (BAXBENCH vs AUTOBAXBENCH DIFÍCIL)</span>
            </div>
            <div class="selector-slot__chips selector-slot__chips--dual">
              ${DATOS_GRAFICO_BARRAS.map((m, idx) => `
                <button type="button" class="chip-m ${idx === modeloDual_idx ? 'chip-m--activo-dual' : ''}" data-idx="${idx}">
                  ${m.nombre}
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `;

      selectorModelosWrap.querySelectorAll(".chip-m").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-idx"));
          if (idx === modeloDual_idx) return;
          modeloDual_idx = idx;
          indiceActivoBarras = -1;
          renderizarSelectorModelos();
          renderSVG();
          actualizarScorecard();
          actualizarEstadoBarras();
        });
      });
    } else {
      selectorModelosWrap.innerHTML = `
        <div class="selector-comparativo">
          <!-- SLOT A -->
          <div class="selector-slot selector-slot--a">
            <div class="selector-slot__header">
              <span class="selector-slot__badge">// MODELO 1 (COLUMNA IZQUIERDA)</span>
            </div>
            <div class="selector-slot__chips">
              ${DATOS_GRAFICO_BARRAS.map((m, idx) => `
                <button type="button" class="chip-m ${idx === modeloA_idx ? 'chip-m--activo-a' : ''}" data-slot="a" data-idx="${idx}" title="Seleccionar ${m.nombre} en columna izquierda">
                  ${m.nombre}
                </button>
              `).join("")}
            </div>
          </div>

          <div class="selector-divider" aria-hidden="true"></div>

          <!-- SLOT B -->
          <div class="selector-slot selector-slot--b">
            <div class="selector-slot__header">
              <span class="selector-slot__badge">// MODELO 2 (COLUMNA DERECHA)</span>
            </div>
            <div class="selector-slot__chips">
              ${DATOS_GRAFICO_BARRAS.map((m, idx) => `
                <button type="button" class="chip-m ${idx === modeloB_idx ? 'chip-m--activo-b' : ''}" data-slot="b" data-idx="${idx}" title="Seleccionar ${m.nombre} en columna derecha">
                  ${m.nombre}
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `;

      // Listeners Slot A
      selectorModelosWrap.querySelectorAll('[data-slot="a"]').forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-idx"));
          if (idx === modeloA_idx) return;
          if (idx === modeloB_idx) {
            modeloB_idx = modeloA_idx;
            modeloA_idx = idx;
          } else {
            modeloA_idx = idx;
          }
          indiceActivoBarras = -1;
          renderizarSelectorModelos();
          renderSVG();
          actualizarScorecard();
          actualizarEstadoBarras();
        });
      });

      // Listeners Slot B
      selectorModelosWrap.querySelectorAll('[data-slot="b"]').forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-idx"));
          if (idx === modeloB_idx) return;
          if (idx === modeloA_idx) {
            modeloA_idx = modeloB_idx;
            modeloB_idx = idx;
          } else {
            modeloB_idx = idx;
          }
          indiceActivoBarras = -1;
          renderizarSelectorModelos();
          renderSVG();
          actualizarScorecard();
          actualizarEstadoBarras();
        });
      });
    }
  }

  function actualizarScorecard() {
    if (!scorecardWrap) return;
    const { barraIzq, barraDer } = obtenerConfigBarras();

    const diffSeg = +(barraIzq.seguro - barraDer.seguro).toFixed(1);
    const diffRiesgo = +(barraIzq.noConfiable - barraDer.noConfiable).toFixed(1);

    let deltaTexto = "";
    if (modoBenchmarkBarras === "dual") {
      deltaTexto = `CAÍDA DE -${Math.abs(diffSeg)}% EN AUTOBAX · RIESGO +${Math.abs(diffRiesgo)}%`;
    } else {
      if (diffSeg > 0) {
        deltaTexto = `+${diffSeg}% SEGURO A FAVOR DE ${barraIzq.tituloEje.toUpperCase()}`;
      } else if (diffSeg < 0) {
        deltaTexto = `+${Math.abs(diffSeg)}% SEGURO A FAVOR DE ${barraDer.tituloEje.toUpperCase()}`;
      } else {
        deltaTexto = `EMPATE EN CÓDIGO SEGURO (${barraIzq.seguro}%)`;
      }
    }

    scorecardWrap.innerHTML = `
      <div class="scorecard-simple">
        <!-- SLOT IZQUIERDO -->
        <div class="sc-simple-card sc-simple-card--izq">
          <div class="sc-simple-header">
            <span class="sc-simple-bench">${barraIzq.tagEje}</span>
            <span class="sc-simple-nombre">${barraIzq.tituloEje}</span>
          </div>
          <div class="sc-simple-pills">
            <span class="sc-pill sc-pill--seguro">🟢 ${barraIzq.seguro}% SEGURO</span>
            <span class="sc-pill sc-pill--inseguro">🟠 ${barraIzq.inseguro}% VULNERABLE</span>
            <span class="sc-pill sc-pill--incorrecto">🔴 ${barraIzq.incorrecto}% INCORRECTO</span>
            <span class="sc-pill sc-pill--riesgo">▲ ${barraIzq.noConfiable}% RIESGO</span>
          </div>
        </div>

        <!-- CENTRO DELTA -->
        <div class="sc-simple-center">
          <span class="sc-simple-vs">VS</span>
          <span class="sc-simple-delta">${deltaTexto}</span>
        </div>

        <!-- SLOT DERECHO -->
        <div class="sc-simple-card sc-simple-card--der">
          <div class="sc-simple-header">
            <span class="sc-simple-bench">${barraDer.tagEje}</span>
            <span class="sc-simple-nombre">${barraDer.tituloEje}</span>
          </div>
          <div class="sc-simple-pills">
            <span class="sc-pill sc-pill--seguro">🟢 ${barraDer.seguro}% SEGURO</span>
            <span class="sc-pill sc-pill--inseguro">🟠 ${barraDer.inseguro}% VULNERABLE</span>
            <span class="sc-pill sc-pill--incorrecto">🔴 ${barraDer.incorrecto}% INCORRECTO</span>
            <span class="sc-pill sc-pill--riesgo">▲ ${barraDer.noConfiable}% RIESGO</span>
          </div>
        </div>
      </div>
    `;
  }

  function mostrarPopupDetalle(slotIdx) {
    const { barraIzq, barraDer } = obtenerConfigBarras();
    const barra = slotIdx === 0 ? barraIzq : barraDer;
    if (!barra) return;

    if (popupTituloEl) popupTituloEl.textContent = `//_ ${barra.subtituloEje.toUpperCase()}`;

    const lineas = [
      `> 🔴 CÓDIGO INCORRECTO: ${barra.incorrecto}% (FALLA PRUEBAS FUNCIONALES; DIRECTAMENTE ROTO).`,
      `> 🟠 CORRECTO E INSEGURO: ${barra.inseguro}% (${barra.insDelCorrecto}% DEL CÓDIGO QUE FUNCIONA CONTIENE VULNERABILIDADES).`,
      `> 🟢 CORRECTO Y SEGURO: ${barra.seguro}% (APROBÓ PRUEBAS FUNCIONALES Y AUDITORÍA DE SEGURIDAD).`,
      `> 📊 TOTAL FUNCIONAL: ${barra.correctoTotal}% CORRECTO (${barra.seguro}% SEGURO + ${barra.inseguro}% VULNERABLE).`,
      `> ⚠️ BRECHA DE RIESGO: EL ${barra.noConfiable}% DEL CÓDIGO GENERADO ES DEFECTUOSO O EXPLOTABLE.`
    ];

    if (barra.benchmarkNombre.includes("AutoBax")) {
      lineas.push(`> ℹ️ DIFICULTAD: PRUEBA DIFÍCIL (HARD) DE AUTOBAXBENCH — LA MÁS RIGUROSA DE LAS 3 DIFICULTADES DEL BENCHMARK.`);
    }

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

    if (popupTagEl) popupTagEl.textContent = `SLOT_0${slotIdx + 1} // ${barra.tagEje}`;
    if (popupBarra) popupBarra.hidden = false;
  }

  function actualizarEstadoBarras() {
    const hayActivo = indiceActivoBarras !== -1;
    gruposBarras.forEach((g, idx) => {
      const esActivo = idx === indiceActivoBarras;
      g.classList.toggle("barra-grupo--activo", esActivo);
      g.classList.toggle("barra-grupo--dim", hayActivo && !esActivo);
    });

    if (hayActivo) {
      mostrarPopupDetalle(indiceActivoBarras);
    } else {
      if (popupBarra) popupBarra.hidden = true;
    }
  }

  if (popupCerrarBtn) {
    popupCerrarBtn.addEventListener("click", () => {
      indiceActivoBarras = -1;
      actualizarEstadoBarras();
    });
  }

  if (btnFocoInseguridad) {
    btnFocoInseguridad.addEventListener("click", () => {
      focoInseguridadBarras = !focoInseguridadBarras;
      btnFocoInseguridad.classList.toggle("btn-foco-inseguridad--activo", focoInseguridadBarras);
      if (chartWrap) chartWrap.classList.toggle("foco-inseguridad-activo", focoInseguridadBarras);
    });
  }

  benchBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const bench = btn.getAttribute("data-bench");
      if (bench === modoBenchmarkBarras) return;
      modoBenchmarkBarras = bench;
      benchBtns.forEach((b) => {
        const esActivo = b.getAttribute("data-bench") === modoBenchmarkBarras;
        b.classList.toggle("bench-btn--activo", esActivo);
        b.setAttribute("aria-selected", String(esActivo));
      });
      indiceActivoBarras = -1;
      renderizarSelectorModelos();
      renderSVG();
      actualizarScorecard();
      actualizarEstadoBarras();
    });
  });

  function renderSVG() {
    chartGroup.innerHTML = "";
    gruposBarras = [];

    const { barraIzq, barraDer } = obtenerConfigBarras();

    const esAuto = modoBenchmarkBarras === "autobax";
    const esDual = modoBenchmarkBarras === "dual";

    // Actualización de textos en hint
    if (esAuto) {
      if (barrasHintEl) barrasHintEl.innerHTML = `&gt; <strong>AUTOBAXBENCH // PRUEBA DIFÍCIL</strong>: Comparando ${barraIzq.tituloEje} (${barraIzq.seguro}% seguro) frente a ${barraDer.tituloEje} (${barraDer.seguro}% seguro).`;
      if (legendSeguroTxt) legendSeguroTxt.innerHTML = "<strong>Correcto y Seguro</strong>";
    } else if (esDual) {
      if (barrasHintEl) barrasHintEl.innerHTML = `&gt; <strong>COMPARATIVA DUAL // ${barraIzq.nombreModelo.toUpperCase()}</strong>: BaxBench (${barraIzq.seguro}% seguro) frente a AutoBaxBench Difícil (${barraDer.seguro}% seguro).`;
      if (legendSeguroTxt) legendSeguroTxt.innerHTML = "<strong>Correcto y Seguro</strong>";
    } else {
      if (barrasHintEl) barrasHintEl.innerHTML = `&gt; <strong>BAXBENCH (LEADERBOARD OFICIAL)</strong>: Comparando ${barraIzq.tituloEje} (${barraIzq.seguro}% seguro) frente a ${barraDer.tituloEje} (${barraDer.seguro}% seguro).`;
      if (legendSeguroTxt) legendSeguroTxt.innerHTML = "<strong>Correcto y Seguro</strong>";
    }

    // Elementos Centrales (Separador VS + Delta)
    const midX = 420;
    const vDivider = crearSVG("line", {
      x1: midX,
      y1: padT,
      x2: midX,
      y2: yBase,
      class: "vs-line-divider"
    });
    chartGroup.appendChild(vDivider);

    const vsCircle = crearSVG("circle", {
      cx: midX,
      cy: "165",
      r: "18",
      class: "vs-circle-bg"
    });
    chartGroup.appendChild(vsCircle);

    const vsTxt = crearSVG("text", {
      x: midX,
      y: "165.5",
      class: "vs-text"
    });
    vsTxt.textContent = "VS";
    chartGroup.appendChild(vsTxt);

    // Delta Pill debajo del VS
    const diffSeg = +(barraIzq.seguro - barraDer.seguro).toFixed(1);
    const pillW = 126, pillH = 22;
    const pillX = midX - pillW / 2;
    const pillY = 196;

    const deltaPillG = crearSVG("g", { class: "delta-pill-wrap" });
    const deltaPillBg = crearSVG("rect", {
      x: pillX.toFixed(2),
      y: pillY.toFixed(2),
      width: pillW,
      height: pillH,
      rx: "4",
      class: "badge-riesgo-bg"
    });
    if (diffSeg !== 0) {
      deltaPillBg.style.fill = "rgba(0, 255, 65, 0.15)";
      deltaPillBg.style.stroke = "rgba(0, 255, 65, 0.55)";
    }
    deltaPillG.appendChild(deltaPillBg);

    const deltaPillTxt = crearSVG("text", {
      x: midX,
      y: (pillY + pillH / 2 + 0.5).toFixed(2),
      class: "badge-riesgo-txt",
      "dominant-baseline": "central"
    });
    if (diffSeg > 0) {
      deltaPillTxt.style.fill = "#00ff41";
      deltaPillTxt.textContent = `◄ +${diffSeg}% SEGURO`;
    } else if (diffSeg < 0) {
      deltaPillTxt.style.fill = "#38bdf8";
      deltaPillTxt.textContent = `+${Math.abs(diffSeg)}% SEGURO ►`;
    } else {
      deltaPillTxt.style.fill = "#ffffff";
      deltaPillTxt.textContent = `= EMPATE SEGURO`;
    }
    deltaPillG.appendChild(deltaPillTxt);
    chartGroup.appendChild(deltaPillG);

    // Dibujo de las 2 Barras: Izquierda (x = 270) y Derecha (x = 570)
    const barW = 104;
    const tareasAnim = [];

    [{ cfg: barraIzq, x: 270, idx: 0 }, { cfg: barraDer, x: 570, idx: 1 }].forEach((item, slotIndex) => {
      const centerX = item.x;
      const b = item.cfg;
      const barX = centerX - barW / 2;

      const grupo = crearSVG("g", { class: "barra-grupo", "data-idx": String(slotIndex) });
      chartGroup.appendChild(grupo);
      gruposBarras.push(grupo);

      // Columna de fondo para hover y click amplio
      const bgCol = crearSVG("rect", {
        x: (centerX - 68).toFixed(2),
        y: padT,
        width: 136,
        height: plotH,
        class: "bg-columna"
      });
      grupo.appendChild(bgCol);

      // Fondo 100% contorno
      const rectBg = crearSVG("rect", {
        x: barX.toFixed(2),
        y: padT,
        width: barW,
        height: plotH,
        class: "bar-bg"
      });
      grupo.appendChild(rectBg);

      const hSeg = (b.seguro / 100) * plotH;
      const hIns = (b.inseguro / 100) * plotH;
      const hInc = (b.incorrecto / 100) * plotH;

      const formatearPct = (v) => {
        const r = +(Number(v) || 0).toFixed(1);
        return Number.isInteger(r) ? String(r) : r.toFixed(1);
      };

      // 1) Incorrecto (base roja)
      const rectInc = crearSVG("rect", {
        x: barX.toFixed(2),
        y: yBase.toFixed(2),
        width: barW,
        height: 0,
        fill: "url(#hatch-incorrecto)",
        stroke: "#ff4d5e",
        "stroke-width": 1.5,
        class: "bar-seg bar-seg--incorrecto"
      });
      grupo.appendChild(rectInc);

      // 2) Inseguro (medio ámbar)
      const rectIns = crearSVG("rect", {
        x: barX.toFixed(2),
        y: yBase.toFixed(2),
        width: barW,
        height: 0,
        fill: "url(#hatch-inseguro)",
        stroke: "#fbbf24",
        "stroke-width": 1.5,
        class: "bar-seg bar-seg--inseguro"
      });
      grupo.appendChild(rectIns);

      // 3) Seguro (tope verde)
      const rectSeg = crearSVG("rect", {
        x: barX.toFixed(2),
        y: yBase.toFixed(2),
        width: barW,
        height: 0,
        fill: "#059669",
        stroke: "#00ff41",
        "stroke-width": 1.5,
        class: "bar-seg bar-seg--seguro"
      });
      grupo.appendChild(rectSeg);

      // Textos dentro de cada segmento con tipografía AGRANDADA
      let tIncPct = null, tIncSub = null;
      if (hInc >= 20) {
        tIncPct = crearSVG("text", { x: centerX.toFixed(2), y: yBase.toFixed(2), class: "bar-lbl-pct" });
        tIncPct.textContent = formatearPct(b.incorrecto) + "%";
        grupo.appendChild(tIncPct);

        if (hInc >= 38) {
          tIncSub = crearSVG("text", { x: centerX.toFixed(2), y: yBase.toFixed(2), class: "bar-lbl-sub" });
          tIncSub.textContent = "INCORRECTO";
          grupo.appendChild(tIncSub);
        }
      }

      let tInsPct = null, tInsSub = null;
      if (hIns >= 20) {
        tInsPct = crearSVG("text", { x: centerX.toFixed(2), y: yBase.toFixed(2), class: "bar-lbl-pct" });
        tInsPct.textContent = formatearPct(b.inseguro) + "%";
        grupo.appendChild(tInsPct);

        if (hIns >= 38) {
          tInsSub = crearSVG("text", { x: centerX.toFixed(2), y: yBase.toFixed(2), class: "bar-lbl-sub" });
          tInsSub.textContent = "VULNERABLE";
          grupo.appendChild(tInsSub);
        }
      }

      let tSegPct = null, tSegSub = null;
      if (hSeg >= 20) {
        tSegPct = crearSVG("text", { x: centerX.toFixed(2), y: yBase.toFixed(2), class: "bar-lbl-pct" });
        tSegPct.textContent = formatearPct(b.seguro) + "%";
        grupo.appendChild(tSegPct);

        if (hSeg >= 38) {
          tSegSub = crearSVG("text", { x: centerX.toFixed(2), y: yBase.toFixed(2), class: "bar-lbl-sub" });
          tSegSub.textContent = "SEGURO";
          grupo.appendChild(tSegSub);
        }
      }

      // Badge de Riesgo en el tope AGRANDADO
      const badgeW = 138;
      const badgeH = 28;
      const badgeX = barX + (barW - badgeW) / 2;
      const badgeY = 15;

      const gRiesgo = crearSVG("g", { class: "badge-riesgo-wrap", opacity: "0" });
      const rBg = crearSVG("rect", {
        x: badgeX.toFixed(2),
        y: badgeY.toFixed(2),
        width: badgeW,
        height: badgeH,
        rx: 4,
        class: "badge-riesgo-bg"
      });
      const rTxt = crearSVG("text", {
        x: centerX.toFixed(2),
        y: (badgeY + badgeH / 2 + 0.5).toFixed(2),
        class: "badge-riesgo-txt",
        "dominant-baseline": "central"
      });
      rTxt.textContent = `▲ ${formatearPct(b.noConfiable)}% RIESGO`;
      gRiesgo.appendChild(rBg);
      gRiesgo.appendChild(rTxt);
      grupo.appendChild(gRiesgo);

      // Etiquetas eje X AGRANDADAS (Nombre 17px, Subtítulo 11.5px, Benchmark Badge 13px en pastilla iluminada)
      const tNombre = crearSVG("text", {
        x: centerX.toFixed(2),
        y: (yBase + 24).toFixed(2),
        class: "bar-label-nombre"
      });
      tNombre.textContent = b.tituloEje;
      grupo.appendChild(tNombre);

      const tVersion = crearSVG("text", {
        x: centerX.toFixed(2),
        y: (yBase + 42).toFixed(2),
        class: "bar-label-version"
      });
      tVersion.textContent = b.subtituloEje;
      grupo.appendChild(tVersion);

      // Pastilla de Benchmark visible y llamativa
      const benchBadgeW = 204;
      const benchBadgeH = 28;
      const benchBadgeX = centerX - benchBadgeW / 2;
      const benchBadgeY = yBase + 48;

      const gBenchBadge = crearSVG("g", { class: "bar-bench-badge-wrap" });
      const benchBadgeBg = crearSVG("rect", {
        x: benchBadgeX.toFixed(2),
        y: benchBadgeY.toFixed(2),
        width: benchBadgeW,
        height: benchBadgeH,
        rx: 4,
        class: "bar-bench-badge-bg"
      });
      if (b.tagEje.includes("AUTOBAX")) {
        benchBadgeBg.style.fill = "rgba(245, 158, 11, 0.16)";
        benchBadgeBg.style.stroke = "#fbbf24";
      } else {
        benchBadgeBg.style.fill = "rgba(0, 255, 65, 0.16)";
        benchBadgeBg.style.stroke = "#00ff41";
      }
      benchBadgeBg.style.strokeWidth = "1.5px";
      gBenchBadge.appendChild(benchBadgeBg);

      const benchBadgeTxt = crearSVG("text", {
        x: centerX.toFixed(2),
        y: (benchBadgeY + benchBadgeH / 2 + 0.5).toFixed(2),
        class: "bar-bench-badge-txt",
        "dominant-baseline": "central"
      });
      benchBadgeTxt.textContent = `[ ${b.tagEje} ]`;
      if (b.tagEje.includes("AUTOBAX")) {
        benchBadgeTxt.style.fill = "#fde68a";
      } else {
        benchBadgeTxt.style.fill = "#00ff41";
      }
      gBenchBadge.appendChild(benchBadgeTxt);
      grupo.appendChild(gBenchBadge);

      // Click en la barra para enfocarla y abrir el modal
      grupo.addEventListener("click", () => {
        indiceActivoBarras = (indiceActivoBarras === slotIndex) ? -1 : slotIndex;
        actualizarEstadoBarras();
      });

      // Tarea de animación en cascada
      tareasAnim.push(() => {
        // Incorrecto
        rectInc.setAttribute("y", (yBase - hInc).toFixed(2));
        rectInc.setAttribute("height", hInc.toFixed(2));
        if (tIncPct) tIncPct.setAttribute("y", (yBase - hInc / 2 + (tIncSub ? -2 : 4)).toFixed(2));
        if (tIncSub) tIncSub.setAttribute("y", (yBase - hInc / 2 + 12).toFixed(2));

        // Inseguro
        rectIns.setAttribute("y", (yBase - hInc - hIns).toFixed(2));
        rectIns.setAttribute("height", hIns.toFixed(2));
        if (tInsPct) tInsPct.setAttribute("y", (yBase - hInc - hIns / 2 - 2).toFixed(2));
        if (tInsSub) tInsSub.setAttribute("y", (yBase - hInc - hIns / 2 + 12).toFixed(2));

        // Seguro
        rectSeg.setAttribute("y", (yBase - hInc - hIns - hSeg).toFixed(2));
        rectSeg.setAttribute("height", hSeg.toFixed(2));
        if (tSegPct) tSegPct.setAttribute("y", (padT + hSeg / 2 - 2).toFixed(2));
        if (tSegSub) tSegSub.setAttribute("y", (padT + hSeg / 2 + 12).toFixed(2));

        if (gRiesgo) gRiesgo.setAttribute("opacity", "1");
      });
    });

    // Ejecución de animación
    requestAnimationFrame(() => {
      tareasAnim.forEach((anim, i) => setTimeout(anim, i * 110));
    });
  }

  function onFlecha(dir) {
    if (modoBenchmarkBarras === "dual") {
      modeloDual_idx = (modeloDual_idx + dir + DATOS_GRAFICO_BARRAS.length) % DATOS_GRAFICO_BARRAS.length;
      indiceActivoBarras = -1;
      renderizarSelectorModelos();
      renderSVG();
      actualizarScorecard();
      actualizarEstadoBarras();
    } else {
      if (indiceActivoBarras === -1) {
        indiceActivoBarras = dir > 0 ? 1 : 0;
      } else if (indiceActivoBarras === 0) {
        indiceActivoBarras = dir > 0 ? 1 : -1;
      } else {
        indiceActivoBarras = dir < 0 ? 0 : -1;
      }
      actualizarEstadoBarras();
    }
  }

  renderizarSelectorModelos();
  renderSVG();
  actualizarScorecard();
  actualizarEstadoBarras();

  return { onFlecha };
}

/* ========================================================================
   GRÁFICO RADIAL — sección 02 "Calidad vs Tiempo" (SÓLO 2026)
   Modo Individual y Modo Comparar 2 Modelos (Head to Head)
   Pop-ups flotantes alejados del pentágono con flechas cibernéticas precisas
   ======================================================================== */
let nodoAbiertoIdx = -1;
let modeloRadialIdx = 0;       // 0..4 = índice en MODELOS_RADIAL
let modoRadialActivo = "individual"; // "individual" | "comparar"
let compModelo1Idx = 0;        // 0..4 = Modelo 1 a comparar (Claude por defecto)
let compModelo2Idx = 1;        // 0..4 = Modelo 2 a comparar (GPT-5.5 por defecto)
let contenedorRadialActivo = null;

const COLORES_MODELOS_RADIAL = [
  { hex: 0xffa500, css: "#ffa500", rgb: "255, 165, 0", name: "Claude Opus 4.7" },
  { hex: 0x00f59b, css: "#00f59b", rgb: "0, 245, 155", name: "GPT-5.5" },
  { hex: 0x00c8ff, css: "#00c8ff", rgb: "0, 200, 255", name: "Gemini 3.1 Pro" },
  { hex: 0xff3b69, css: "#ff3b69", rgb: "255, 59, 105", name: "Grok 4.6" },
  { hex: 0xbbf853, css: "#bbf853", rgb: "187, 248, 83", name: "DeepSeek V4 Pro" }
];

function setModoRadial(nuevoModo) {
  modoRadialActivo = nuevoModo;
  if (contenedorRadialActivo) {
    graficoActivo = montarGraficoRadial(contenedorRadialActivo);
  }
}

function cambiarModeloRadial(nuevoIdx) {
  const total = MODELOS_RADIAL.length;
  let idx = (nuevoIdx + total) % total;
  modeloRadialIdx = idx;
  NODOS_RADIAL_2026 = MODELOS_RADIAL[idx].nodos;
  if (contenedorRadialActivo) {
    graficoActivo = montarGraficoRadial(contenedorRadialActivo);
  }
}

function cambiarComparacionRadial(m1Idx, m2Idx) {
  if (m1Idx !== undefined && m1Idx !== null) compModelo1Idx = m1Idx;
  if (m2Idx !== undefined && m2Idx !== null) compModelo2Idx = m2Idx;
  if (contenedorRadialActivo) {
    graficoActivo = montarGraficoRadial(contenedorRadialActivo);
  }
}

function montarGraficoRadial(contenedor) {
  contenedorRadialActivo = contenedor;
  contenedor.classList.add("grafico-placeholder--activo");

  // Cargamos los nodos del modelo seleccionado
  NODOS_RADIAL_2026 = MODELOS_RADIAL[modeloRadialIdx].nodos;

  const colorM1 = COLORES_MODELOS_RADIAL[compModelo1Idx % COLORES_MODELOS_RADIAL.length];
  const colorM2 = COLORES_MODELOS_RADIAL[compModelo2Idx % COLORES_MODELOS_RADIAL.length];
  const m1Data = MODELOS_RADIAL[compModelo1Idx];
  const m2Data = MODELOS_RADIAL[compModelo2Idx];

  // Cálculo de victorias para el modo comparar
  let winsM1 = 0, winsM2 = 0, ties = 0;
  if (modoRadialActivo === "comparar") {
    for (let i = 0; i < 5; i++) {
      const v1 = m1Data.nodos[i].valor;
      const v2 = m2Data.nodos[i].valor;
      if (v1 > v2) winsM1++;
      else if (v2 > v1) winsM2++;
      else ties++;
    }
  }

  contenedor.innerHTML = `
    <div class="radial-stage" id="radial-stage">
      <!-- Selector de Modo: Individual vs Comparar 2 -->
      <div class="radial-tabs-modo">
        <button type="button" class="radial-tab-btn ${modoRadialActivo === "individual" ? "active" : ""}" id="tabModoIndividual">
          ◈ Exploración Individual
        </button>
        <button type="button" class="radial-tab-btn ${modoRadialActivo === "comparar" ? "active" : ""}" id="tabModoComparar">
          ⚔ Comparar 2 Modelos (Head to Head)
        </button>
      </div>

      <!-- Barra de navegación según modo -->
      ${modoRadialActivo === "individual" ? `
        <div class="radial-nav-modelos" id="radial-nav-modelos">
          <button type="button" class="radial-nav-modelos__flecha" id="radial-nav-prev" aria-label="Modelo anterior">‹</button>
          <div class="radial-nav-modelos__lista">
            ${MODELOS_RADIAL.map((m, i) => `
              <button type="button" class="radial-nav-modelos__chip ${i === modeloRadialIdx ? "radial-nav-modelos__chip--activo" : ""}" data-idx="${i}">
                ${m.modelo}
              </button>
            `).join("")}
          </div>
          <button type="button" class="radial-nav-modelos__flecha" id="radial-nav-next" aria-label="Modelo siguiente">›</button>
        </div>
      ` : `
        <div class="radial-dual-selector" id="radial-dual-selector">
          <div class="radial-dual-selector__col">
            <span class="radial-dual-selector__label" style="color: ${colorM1.css};">MODELO 1 (Lado Izquierdo)</span>
            <div class="radial-dual-selector__custom-select">
              <span class="radial-dual-selector__dot" style="background-color: ${colorM1.css}; box-shadow: 0 0 8px ${colorM1.css};"></span>
              <select class="radial-dual-selector__dropdown" id="radialSelectM1" aria-label="Elegir Modelo 1 a comparar">
                ${MODELOS_RADIAL.map((m, i) => `
                  <option value="${i}" ${i === compModelo1Idx ? "selected" : ""}>${m.modelo} (${m.empresa})</option>
                `).join("")}
              </select>
            </div>
          </div>

          <div class="radial-dual-selector__vs">
            <span class="radial-dual-selector__vs-badge">VS</span>
          </div>

          <div class="radial-dual-selector__col">
            <span class="radial-dual-selector__label" style="color: ${colorM2.css}; text-align: right;">MODELO 2 (Lado Derecho)</span>
            <div class="radial-dual-selector__custom-select" style="flex-direction: row-reverse;">
              <span class="radial-dual-selector__dot" style="background-color: ${colorM2.css}; box-shadow: 0 0 8px ${colorM2.css};"></span>
              <select class="radial-dual-selector__dropdown" id="radialSelectM2" style="text-align: right;" aria-label="Elegir Modelo 2 a comparar">
                ${MODELOS_RADIAL.map((m, i) => `
                  <option value="${i}" ${i === compModelo2Idx ? "selected" : ""}>${m.modelo} (${m.empresa})</option>
                `).join("")}
              </select>
            </div>
          </div>
        </div>
      `}

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
          <foreignObject id="popup-foreign" class="popup-foreign" x="0" y="0" width="250" height="440" style="display: none;">
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

      <!-- Resumen Scorecard Head-to-Head si está en modo comparar -->
      ${modoRadialActivo === "comparar" ? `
        <div class="radial-h2h-summary">
          <div class="radial-h2h-summary__score" style="color: ${colorM1.css};">
            <span class="radial-h2h-summary__badge" style="background: rgba(${colorM1.rgb}, 0.2); border: 1px solid ${colorM1.css};">
              ${m1Data.modelo}: ${winsM1} ${winsM1 === 1 ? "victoria" : "victorias"}
            </span>
          </div>
          <div style="color: #bbf853; font-weight: 700; letter-spacing: 0.05em;">
            ⚔ COMPARATIVA DIRECTA (5 EJES) ⚔
          </div>
          <div class="radial-h2h-summary__score" style="color: ${colorM2.css};">
            <span class="radial-h2h-summary__badge" style="background: rgba(${colorM2.rgb}, 0.2); border: 1px solid ${colorM2.css};">
              ${m2Data.modelo}: ${winsM2} ${winsM2 === 1 ? "victoria" : "victorias"}
            </span>
          </div>
        </div>
      ` : ""}

      <p class="footer-note">Hacé click en los nodos del pentágono para abrir la ventanita de cada variable</p>
      <button type="button" class="boton-3d" data-accion="ver-3d">▣ Ver comparativa multi-modelo en 3D</button>
    </div>
  `;

  const svg = contenedor.querySelector('[data-el="svg"]');
  const grid = contenedor.querySelector('[data-el="grid"]');
  const dataShapes = contenedor.querySelector('[data-el="data-shapes"]');
  const boton3d = contenedor.querySelector('[data-accion="ver-3d"]');
  const popupForeign = document.getElementById("popup-foreign");
  const btnCerrarPopup = document.getElementById("popup-nodo-cerrar");
  const conectorGrupo = document.getElementById("conector-svg-grupo");

  const N = 5;
  // Centro en 440 para dejar espacio balanceado a los laterales para las ventanas flotantes
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

  const nodosActuales = (modoRadialActivo === "individual") ?
    MODELOS_RADIAL[modeloRadialIdx].nodos :
    m1Data.nodos;

  let ptsM1, ptsM2;

  if (modoRadialActivo === "individual") {
    // Polígono de datos para el modelo individual
    const valores = NODOS_RADIAL_2026.map(n => n.valor);
    ptsM1 = puntosPoligono(valores);

    const forma = crearSVG("path", { class: "shape" });
    forma.setAttribute("d", puntosAPath(ptsM1));
    dataShapes.appendChild(forma);
  } else {
    // Modo comparativo: 2 polígonos
    const valsM1 = m1Data.nodos.map(n => n.valor);
    const valsM2 = m2Data.nodos.map(n => n.valor);
    ptsM1 = puntosPoligono(valsM1);
    ptsM2 = puntosPoligono(valsM2);

    // Polígono 1 (Modelo 1)
    const forma1 = crearSVG("path", {
      d: puntosAPath(ptsM1),
      fill: `rgba(${colorM1.rgb}, 0.22)`,
      stroke: colorM1.css,
      "stroke-width": "2.6"
    });
    dataShapes.appendChild(forma1);

    // Polígono 2 (Modelo 2)
    const forma2 = crearSVG("path", {
      d: puntosAPath(ptsM2),
      fill: `rgba(${colorM2.rgb}, 0.22)`,
      stroke: colorM2.css,
      "stroke-width": "2.6",
      "stroke-dasharray": "6 3"
    });
    dataShapes.appendChild(forma2);

    // Líneas punteadas de delta conectando vértices de ambos modelos en cada eje
    for (let i = 0; i < N; i++) {
      const p1 = ptsM1[i];
      const p2 = ptsM2[i];
      const lineDelta = crearSVG("line", {
        x1: p1.x.toFixed(2),
        y1: p1.y.toFixed(2),
        x2: p2.x.toFixed(2),
        y2: p2.y.toFixed(2),
        stroke: "rgba(255, 255, 255, 0.45)",
        "stroke-width": "1.5",
        "stroke-dasharray": "3 2"
      });
      dataShapes.appendChild(lineDelta);
    }
  }

  // Configuración de anclaje de ventanas alejadas del pentágono
  const configPopupNodos = [
    { cardX: 615, cardY: 15, edgeX: 615 }, // Nodo 0: Corrección (arriba derecha)
    { cardX: 615, cardY: 35, edgeX: 615 }, // Nodo 1: Vulnerabilidad (derecha)
    { cardX: 615, cardY: 55, edgeX: 615 }, // Nodo 2: Velocidad (derecha abajo)
    { cardX: 25, cardY: 55, edgeX: 267 },  // Nodo 3: Precio (izquierda abajo)
    { cardX: 25, cardY: 35, edgeX: 267 }   // Nodo 4: Contexto (izquierda arriba)
  ];

  const gruposNodos = [];

  // Vértices y grupos interactivos para cada eje
  nodosActuales.forEach((nodo, i) => {
    const p = ptsM1[i];
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
      "aria-label": `Ver detalles de ${nodo.nombre}`
    });

    if (modoRadialActivo === "individual") {
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
    } else {
      // Modo comparar: Hitbox amplio centrado entre ambos puntos
      const p2 = ptsM2[i];
      const midX = (p.x + p2.x) / 2;
      const midY = (p.y + p2.y) / 2;
      const hitbox = crearSVG("circle", {
        cx: midX.toFixed(2),
        cy: midY.toFixed(2),
        r: 30,
        class: "nodo-radar__hitbox"
      });
      grupoNodo.appendChild(hitbox);

      // Vértice M1 con su color
      const c1 = crearSVG("circle", {
        cx: p.x.toFixed(2),
        cy: p.y.toFixed(2),
        r: 5.2,
        fill: colorM1.css,
        stroke: "#fff",
        "stroke-width": "1.5"
      });
      grupoNodo.appendChild(c1);

      // Vértice M2 con su color
      const c2 = crearSVG("circle", {
        cx: p2.x.toFixed(2),
        cy: p2.y.toFixed(2),
        r: 5.2,
        fill: colorM2.css,
        stroke: "#fff",
        "stroke-width": "1.5"
      });
      grupoNodo.appendChild(c2);
    }

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

    // Valor de la variable
    const valLabel = crearSVG("text", {
      x: lx.toFixed(2),
      y: (ly + 15).toFixed(2),
      class: "axis-value",
      "text-anchor": anchor,
      "dominant-baseline": "middle"
    });

    if (modoRadialActivo === "individual") {
      const tspanNum = crearSVG("tspan", { class: "axis-val-num" });
      tspanNum.textContent = Number(nodo.valor).toFixed(1);

      const tspanSub = crearSVG("tspan", { class: "axis-val-sub" });
      tspanSub.textContent = ` (${nodo.datoReal})`;

      valLabel.appendChild(tspanNum);
      valLabel.appendChild(tspanSub);
    } else {
      const n1 = m1Data.nodos[i];
      const n2 = m2Data.nodos[i];

      const tspanM1 = crearSVG("tspan", { fill: colorM1.css, "font-weight": "800", "font-size": "10.5px" });
      tspanM1.textContent = `${n1.datoReal}`;

      const tspanVs = crearSVG("tspan", { fill: "#bbf853", "font-size": "9px" });
      tspanVs.textContent = ` vs `;

      const tspanM2 = crearSVG("tspan", { fill: colorM2.css, "font-weight": "800", "font-size": "10.5px" });
      tspanM2.textContent = `${n2.datoReal}`;

      valLabel.appendChild(tspanM1);
      valLabel.appendChild(tspanVs);
      valLabel.appendChild(tspanM2);
    }

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
    const cfg = configPopupNodos[indice];
    const p = ptsM1[indice];

    // Marcar nodo activo
    gruposNodos.forEach((g, idx) => {
      g.classList.toggle("nodo-radar--activo", idx === indice);
    });

    // Calcular altura de impacto en el lateral del popup
    const targetY = Math.max(cfg.cardY + 30, Math.min(cfg.cardY + 295, p.y));

    // Dibujar conector cibernético en SVG
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

    const nodo = nodosActuales[indice];

    if (modoRadialActivo === "individual") {
      if (tituloEl) tituloEl.textContent = `//_ ${nodo.nombre.toUpperCase()}`;

      if (imgCont) {
        const rutaImg = nodo.imagen || (
          nodo.id === "correccion" ? "corrección.png" :
          nodo.id === "vulnerabilidad" ? "vulnerabilidad.png" :
          nodo.id === "velocidad" ? "velocidad.png" :
          nodo.id === "precio" ? "precio.png" :
          nodo.id === "contexto" ? "contexto.png" : ""
        );

        if (rutaImg) {
          imgCont.innerHTML = `<img src="${rutaImg}" alt="${nodo.nombre}" class="popup-nodo__img">`;
          const img = imgCont.querySelector("img");
          img.onerror = () => {
            if (rutaImg.includes("corrección") && !img.src.includes("correccion.png")) {
              img.src = "correccion.png";
            } else if (nodo.id === "velocidad" && !img.src.endsWith(".jpg")) {
              img.src = "velocidad.jpg";
            } else {
              imgCont.innerHTML = generarGraficoOjoDitherSVG(nodo.imagenCaption, indice);
            }
          };
        } else {
          imgCont.innerHTML = generarGraficoOjoDitherSVG(nodo.imagenCaption, indice);
        }
      }

      if (captionEl) {
        captionEl.textContent = nodo.imagenCaption || `${nodo.nombre.toUpperCase()} // SCAN:OK`;
      }

      if (parrafosEl) {
        parrafosEl.innerHTML = "";

        // Tarjeta de dato ampliado destacada
        if (nodo.datoAmpliado) {
          const datoCard = document.createElement("div");
          datoCard.className = "popup-nodo__dato-ampliado";
          datoCard.innerHTML = `
            <div class="popup-nodo__dato-label">${nodo.datoTipo || "DATO AMPLIADO"}:</div>
            <div class="popup-nodo__dato-valor">${nodo.datoAmpliado}</div>
            ${nodo.datoSub ? `<div class="popup-nodo__dato-sub">${nodo.datoSub}</div>` : ""}
          `;
          parrafosEl.appendChild(datoCard);
        }

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
        tagEl.textContent = `${nodo.datoReal} · ÍNDICE ${Number(nodo.valor).toFixed(1)}/10`;
      }
    } else {
      // Modo comparar
      const n1 = m1Data.nodos[indice];
      const n2 = m2Data.nodos[indice];
      const diff = (n1.valor - n2.valor).toFixed(1);

      if (tituloEl) tituloEl.textContent = `//_ ${nodo.nombre.toUpperCase()} (H2H)`;

      if (imgCont) {
        const rutaImg = nodo.id === "correccion" ? "corrección.png" :
          nodo.id === "vulnerabilidad" ? "vulnerabilidad.png" :
          nodo.id === "velocidad" ? "velocidad.png" :
          nodo.id === "precio" ? "precio.png" :
          nodo.id === "contexto" ? "contexto.png" : "";

        if (rutaImg) {
          imgCont.innerHTML = `<img src="${rutaImg}" alt="${nodo.nombre}" class="popup-nodo__img">`;
          const img = imgCont.querySelector("img");
          img.onerror = () => {
            if (rutaImg.includes("corrección") && !img.src.includes("correccion.png")) {
              img.src = "correccion.png";
            } else if (nodo.id === "velocidad" && !img.src.endsWith(".jpg")) {
              img.src = "velocidad.jpg";
            } else {
              imgCont.innerHTML = generarGraficoOjoDitherSVG(n1.imagenCaption, indice);
            }
          };
        }
      }

      if (captionEl) {
        const lider = n1.valor > n2.valor ? `VENTAJA: ${m1Data.modelo.split(" ")[0]} (+${diff})` :
          n2.valor > n1.valor ? `VENTAJA: ${m2Data.modelo.split(" ")[0]} (+${Math.abs(diff)})` :
          "EMPATE TÉCNICO EN ESTE EJE";
        captionEl.textContent = lider;
      }

      if (parrafosEl) {
        parrafosEl.innerHTML = "";

        // Tarjeta comparativa M1
        const cardM1 = document.createElement("div");
        cardM1.className = "popup-nodo__dato-ampliado";
        cardM1.style.borderColor = colorM1.css;
        cardM1.style.background = `rgba(${colorM1.rgb}, 0.12)`;
        cardM1.innerHTML = `
          <div class="popup-nodo__dato-label" style="color: ${colorM1.css};">[01] ${m1Data.modelo}</div>
          <div class="popup-nodo__dato-valor" style="color: #fff;">${n1.datoReal} <small style="font-size: 0.72rem; color: ${colorM1.css};">(${n1.valor.toFixed(1)}/10)</small></div>
          <div class="popup-nodo__dato-sub" style="color: ${colorM1.css};">${n1.datoAmpliado}</div>
        `;
        parrafosEl.appendChild(cardM1);

        // Tarjeta comparativa M2
        const cardM2 = document.createElement("div");
        cardM2.className = "popup-nodo__dato-ampliado";
        cardM2.style.borderColor = colorM2.css;
        cardM2.style.background = `rgba(${colorM2.rgb}, 0.12)`;
        cardM2.innerHTML = `
          <div class="popup-nodo__dato-label" style="color: ${colorM2.css};">[02] ${m2Data.modelo}</div>
          <div class="popup-nodo__dato-valor" style="color: #fff;">${n2.datoReal} <small style="font-size: 0.72rem; color: ${colorM2.css};">(${n2.valor.toFixed(1)}/10)</small></div>
          <div class="popup-nodo__dato-sub" style="color: ${colorM2.css};">${n2.datoAmpliado}</div>
        `;
        parrafosEl.appendChild(cardM2);
      }

      if (tagEl) {
        tagEl.textContent = `${m1Data.modelo.split(" ")[0]} vs ${m2Data.modelo.split(" ")[0]}`;
      }
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

  boton3d.addEventListener("click", () => abrirGrafico3D(modoRadialActivo === "comparar" ? "compare2" : "year"));

  // Listeners de pestañas de modo
  const tabInd = contenedor.querySelector("#tabModoIndividual");
  const tabComp = contenedor.querySelector("#tabModoComparar");
  if (tabInd) tabInd.addEventListener("click", () => setModoRadial("individual"));
  if (tabComp) tabComp.addEventListener("click", () => setModoRadial("comparar"));

  // --- navegación entre modelos modo individual ---------------
  const botonModeloPrev = contenedor.querySelector("#radial-nav-prev");
  const botonModeloNext = contenedor.querySelector("#radial-nav-next");
  if (botonModeloPrev) botonModeloPrev.addEventListener("click", () => cambiarModeloRadial(modeloRadialIdx - 1));
  if (botonModeloNext) botonModeloNext.addEventListener("click", () => cambiarModeloRadial(modeloRadialIdx + 1));
  contenedor.querySelectorAll(".radial-nav-modelos__chip").forEach((chip) => {
    chip.addEventListener("click", () => cambiarModeloRadial(parseInt(chip.dataset.idx, 10)));
  });

  // --- selectores dropdowns modo comparar --------------------
  const selectM1 = contenedor.querySelector("#radialSelectM1");
  const selectM2 = contenedor.querySelector("#radialSelectM2");
  if (selectM1) {
    selectM1.addEventListener("change", (e) => {
      cambiarComparacionRadial(parseInt(e.target.value, 10), compModelo2Idx);
    });
  }
  if (selectM2) {
    selectM2.addEventListener("change", (e) => {
      cambiarComparacionRadial(compModelo1Idx, parseInt(e.target.value, 10));
    });
  }

  // Abrir el nodo activo para mostrar sus datos (nodo 0 por defecto)
  const nodoApertura = (nodoAbiertoIdx >= 0) ? nodoAbiertoIdx : 0;
  abrirPopup(nodoApertura);

  return {
    onFlecha: (delta) => {
      if (modoRadialActivo === "individual") {
        cambiarModeloRadial(modeloRadialIdx + delta);
      } else {
        const total = MODELOS_RADIAL.length;
        if (delta < 0) {
          cambiarComparacionRadial((compModelo1Idx - 1 + total) % total, compModelo2Idx);
        } else {
          cambiarComparacionRadial(compModelo1Idx, (compModelo2Idx + 1) % total);
        }
      }
    }
  };
}

/* ========================================================================
   GRÁFICO DE TIEMPO ("En el tiempo") — sección "El fin del teclado"
   Navegación interactiva por años (2023 a 2026):
   - Línea continua sólida: Datos reales medidos de código generado con IA
   - Línea punteada: Expectativa previa estimada de la industria
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

    <!-- LEYENDA CLARA DE LAS DOS LÍNEAS -->
    <div class="legend-tiempo">
      <div class="legend-tiempo__item">
        <span class="swatch-tiempo swatch-tiempo--real"></span>
        <span><strong>Datos Reales</strong> (código generado con IA)</span>
      </div>
      <div class="legend-tiempo__item">
        <span class="swatch-tiempo swatch-tiempo--expectativa"></span>
        <span><strong>Expectativa Previa</strong> (proyección estimada)</span>
      </div>
    </div>

    <p class="trend" data-el="tendencia"></p>
    <div class="chart-wrap">
      <svg data-el="svg" width="620" height="280" viewBox="0 0 620 280"></svg>
    </div>
    <div class="panel-hito" data-el="panel-hito">
      <div class="panel-hito__top">
        <span class="panel-hito__fase" data-el="fase"></span>
        <span class="panel-hito__metrica" data-el="metrica"></span>
      </div>
      <p class="panel-hito__detalle" data-el="detalle"></p>
    </div>
    <p class="footer-note">Usá <kbd>&#8592;</kbd> <kbd>&#8594;</kbd> o hacé click en los años para comparar la realidad con la expectativa</p>
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
    btn.title = `Ver análisis de ${hito.anio}`;
    btn.addEventListener("click", () => irA(i));
    timelineEl.appendChild(btn);
    btnsAnio.push(btn);
  });

  const padL = 55, padR = 38, padT = 30, padB = 38;
  const LW = 620, LH = 280;
  const plotW = LW - padL - padR;
  const plotH = LH - padT - padB;

  const xFor = (i) => padL + (plotW * i / (anios.length - 1));
  const yFor = (v) => padT + plotH - (plotH * (v / ESCALA_MAX_TIEMPO));

  // Cuadrícula horizontal y valores del eje Y en porcentaje
  const grid = crearSVG("g", { class: "chart-grid" });
  svg.appendChild(grid);
  [0, 2, 4, 6, 8, 10].forEach((paso) => {
    const y = yFor(paso);
    grid.appendChild(crearSVG("line", { x1: padL, y1: y.toFixed(2), x2: LW - padR, y2: y.toFixed(2), class: "grid-h" }));
    const t = crearSVG("text", { x: padL - 10, y: (y + 3.5).toFixed(2), class: "y-label" });
    t.textContent = (paso * 10) + "%";
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

  // Indicador de muestra en el gráfico
  const tagSampleSize = crearSVG("text", {
    x: (LW - padR).toFixed(2),
    y: (LH - 6).toFixed(2),
    "text-anchor": "end",
    class: "chart-sample-size"
  });
  tagSampleSize.textContent = "FUENTE: RELEVAMIENTO A DESARROLLADORES // n=979";
  svg.appendChild(tagSampleSize);

  const ptsReal = anios.map((h, i) => h.valorReal != null ? { x: xFor(i), y: yFor(h.valorReal) } : null);
  const ptsExp = anios.map((h, i) => ({ x: xFor(i), y: yFor(h.valorExp) }));

  // 1) LÍNEA 2: EXPECTATIVA PREVIA (Línea punteada completa de fondo, conecta hasta 2027)
  const linePathExp = crearSVG("path", { class: "line-path--expectativa" });
  const expD = ptsExp.map((p, i) => (i === 0 ? "M" : "L") + p.x.toFixed(2) + "," + p.y.toFixed(2)).join(" ");
  linePathExp.setAttribute("d", expD);
  svg.appendChild(linePathExp);

  // 2) LÍNEA 1: DATOS REALES (Área semitransparente y línea continua sólida, sólo hasta 2026)
  const areaProgreso = crearSVG("path", { class: "area-path--progreso" });
  const lineProgreso = crearSVG("path", { class: "line-path--progreso" });
  svg.appendChild(areaProgreso);
  svg.appendChild(lineProgreso);

  // Línea guía vertical para el año activo
  const cursorV = crearSVG("line", {
    x1: (ptsReal[0] || ptsExp[0]).x.toFixed(2),
    y1: padT,
    x2: (ptsReal[0] || ptsExp[0]).x.toFixed(2),
    y2: LH - padB,
    class: "cursor-v"
  });
  svg.appendChild(cursorV);

  // Halos animados para el punto activo (Real verde neón y Expectativa cian)
  const haloReal = crearSVG("circle", {
    cx: (ptsReal[0] || ptsExp[0]).x.toFixed(2),
    cy: (ptsReal[0] || ptsExp[0]).y.toFixed(2),
    r: 12,
    fill: "none",
    stroke: "var(--color-verde-brillante)",
    "stroke-width": 2,
    class: "pt-halo pt-halo--real"
  });
  svg.appendChild(haloReal);

  const haloExp = crearSVG("circle", {
    cx: ptsExp[0].x.toFixed(2),
    cy: ptsExp[0].y.toFixed(2),
    r: 10,
    fill: "none",
    stroke: "#38bdf8",
    "stroke-width": 1.8,
    class: "pt-halo pt-halo--exp"
  });
  svg.appendChild(haloExp);

  // Nodos y etiquetas de EXPECTATIVA PREVIA (incluye el hito proyectivo 2027)
  const puntosExp = [];
  const textosExp = [];
  anios.forEach((hito, i) => {
    const p = ptsExp[i];
    const esUltimo = (i === anios.length - 1);
    const c = crearSVG("circle", {
      cx: p.x.toFixed(2),
      cy: p.y.toFixed(2),
      r: i === 0 ? 6.5 : (esUltimo ? 5.5 : 4.5),
      class: "pt-exp" + (i === 0 ? " active" : "")
    });
    svg.appendChild(c);
    puntosExp.push(c);

    if (esUltimo) {
      // En 2027 solo hay expectativa: porcentaje 65% arriba y etiqueta EXPECTATIVA abajo
      const tVal = crearSVG("text", {
        x: p.x.toFixed(2),
        y: (p.y - 12).toFixed(2),
        class: "pt-value-exp pt-value-exp--primary"
      });
      tVal.textContent = hito.porcentajeExp;
      svg.appendChild(tVal);
      textosExp.push(tVal);

      const tSub = crearSVG("text", {
        x: p.x.toFixed(2),
        y: (p.y + 17).toFixed(2),
        class: "pt-value-exp pt-value-exp--sub"
      });
      tSub.textContent = "EXPECTATIVA";
      svg.appendChild(tSub);
    } else {
      const t = crearSVG("text", {
        x: p.x.toFixed(2),
        y: (p.y + 17).toFixed(2),
        class: "pt-value-exp"
      });
      t.textContent = hito.porcentajeExp;
      svg.appendChild(t);
      textosExp.push(t);
    }
  });

  // Nodos y etiquetas de DATOS REALES (2023 a 2026; en 2027 no conecta la línea real)
  const puntosReal = [];
  const textosReal = [];
  anios.forEach((hito, i) => {
    const p = ptsReal[i];
    if (!p) {
      puntosReal.push(null);
      textosReal.push(null);
      return;
    }
    const c = crearSVG("circle", {
      cx: p.x.toFixed(2),
      cy: p.y.toFixed(2),
      r: i === 0 ? 8 : 5.5,
      class: "pt-real pt--interactivo" + (i === 0 ? " active" : "")
    });
    svg.appendChild(c);
    puntosReal.push(c);

    const t = crearSVG("text", {
      x: p.x.toFixed(2),
      y: (p.y - 12).toFixed(2),
      class: "pt-value-real"
    });
    t.textContent = hito.porcentajeReal;
    svg.appendChild(t);
    textosReal.push(t);
  });

  // Hit area invisible que abarca ambos puntos verticalmente
  anios.forEach((hito, i) => {
    const pExp = ptsExp[i];
    const pReal = ptsReal[i] || pExp;
    const hit = crearSVG("circle", {
      cx: pExp.x.toFixed(2),
      cy: ((pReal.y + pExp.y) / 2).toFixed(2),
      r: 28,
      class: "pt-hit"
    });
    hit.addEventListener("click", () => irA(i));
    svg.appendChild(hit);
  });

  function render() {
    const hitoActual = anios[añoIdx];
    const ptRealActual = ptsReal[añoIdx];
    const ptExpActual = ptsExp[añoIdx];
    const ptRefActual = ptRealActual || ptExpActual;

    // Encabezado
    numeroEl.textContent = hitoActual.numero;
    nombreEl.textContent = hitoActual.anio;

    // Botones de año activos y etiquetas X
    btnsAnio.forEach((b, i) => b.classList.toggle("active", i === añoIdx));
    xLabels.forEach((l, i) => l.classList.toggle("active", i === añoIdx));

    // Flechas deshabilitadas en los límites
    prevBtn.disabled = añoIdx === 0;
    nextBtn.disabled = añoIdx === anios.length - 1;

    // Línea guía vertical y halos
    cursorV.setAttribute("x1", ptRefActual.x.toFixed(2));
    cursorV.setAttribute("x2", ptRefActual.x.toFixed(2));

    if (ptRealActual) {
      haloReal.style.display = "";
      haloReal.setAttribute("cx", ptRealActual.x.toFixed(2));
      haloReal.setAttribute("cy", ptRealActual.y.toFixed(2));
    } else {
      // 2027 es horizonte proyectivo sin registro real aún
      haloReal.style.display = "none";
    }

    haloExp.setAttribute("cx", ptExpActual.x.toFixed(2));
    haloExp.setAttribute("cy", ptExpActual.y.toFixed(2));

    // Progreso de línea y área real hasta el año actual (máximo 2026: no conecta a 2027)
    const limiteRealIdx = Math.min(añoIdx, 3);
    const ptsHastaReal = ptsReal.slice(0, limiteRealIdx + 1).filter(Boolean);

    if (ptsHastaReal.length <= 1) {
      const p0 = ptsHastaReal[0] || ptsExp[0];
      lineProgreso.setAttribute("d", `M${p0.x.toFixed(2)},${p0.y.toFixed(2)} L${p0.x.toFixed(2)},${p0.y.toFixed(2)}`);
      areaProgreso.setAttribute("d", "");
    } else {
      const lineD = ptsHastaReal.map((p, i) => (i === 0 ? "M" : "L") + p.x.toFixed(2) + "," + p.y.toFixed(2)).join(" ");
      lineProgreso.setAttribute("d", lineD);

      const base = yFor(0);
      let areaD = `M${ptsHastaReal[0].x.toFixed(2)},${base.toFixed(2)}`;
      ptsHastaReal.forEach((p) => { areaD += ` L${p.x.toFixed(2)},${p.y.toFixed(2)}`; });
      areaD += ` L${ptsHastaReal[ptsHastaReal.length - 1].x.toFixed(2)},${base.toFixed(2)} Z`;
      areaProgreso.setAttribute("d", areaD);
    }

    // Actualizar estados visuales de los nodos
    puntosReal.forEach((c, i) => {
      if (!c) return;
      c.classList.toggle("active", i === añoIdx);
      c.setAttribute("r", i === añoIdx ? "8" : "5.5");
    });
    puntosExp.forEach((c, i) => {
      c.classList.toggle("active", i === añoIdx);
      c.setAttribute("r", i === añoIdx ? (i === anios.length - 1 ? "8" : "7") : (i === anios.length - 1 ? "5.5" : "4.5"));
    });

    // Panel de hito descriptivo
    faseEl.textContent = hitoActual.fase;
    if (hitoActual.anio === "2027") {
      metricaEl.innerHTML = `<span class="tag-exp">EXPECTATIVA 2027: ${hitoActual.porcentajeExp}</span> <span class="tag-vs">·</span> <span class="tag-real" style="opacity: 0.65; border-color: rgba(0,255,65,0.3); color: #7bc624;">REAL: PENDIENTE</span>`;
    } else {
      metricaEl.innerHTML = `<span class="tag-real">REAL: ${hitoActual.porcentajeReal}</span> <span class="tag-vs">vs</span> <span class="tag-exp">EXPECTATIVA: ${hitoActual.porcentajeExp}</span>`;
    }
    detalleEl.textContent = hitoActual.detalle;

    // Resumen de tendencia y comparación de brecha
    if (hitoActual.anio === "2026") {
      tendenciaEl.innerHTML = `<strong>AÑO 2026</strong>: 55% promedio commiteado (n=979) · <span style="color: #00ff41;">Google: 75% generado o asistido con IA</span>`;
    } else if (hitoActual.anio === "2027") {
      tendenciaEl.innerHTML = `<strong>AÑO 2027</strong>: Proyección de expectativa al <strong>65%</strong> de todo el código commiteado (<span style="color: #38bdf8;">+10% vs 2026</span>) · <em>Dato real en curso</em>`;
    } else {
      const brecha = Math.round((hitoActual.valorReal - hitoActual.valorExp) * 10);
      tendenciaEl.innerHTML = `<strong>AÑO ${hitoActual.anio}</strong>: Datos Reales <strong>${hitoActual.porcentajeReal}</strong> vs Expectativa previa <strong>${hitoActual.porcentajeExp}</strong> (<span style="color: #00ff41;">+${brecha}% por encima de lo previsto</span>)`;
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
   GRÁFICO 3D — COMPARATIVA MULTI-MODELO INDEPENDIENTE
   Presenta 5 modelos de frontera como planos/platos holográficos
   individuales, completamente separados entre sí y con código de color
   dedicado para máxima legibilidad sin solapamiento de datos.
   ======================================================================== */
(function () {
  const modal3d = document.getElementById("modal-3d");
  const wrap3d = document.getElementById("canvas3dWrap");
  const hud3d = document.getElementById("hud3d");
  const legend3d = document.getElementById("legend3d");

  const RMAX3D = 120;
  const N_AXIS = VALORES_GRAFICO.length; // 5
  const N_MODELS = MODELOS_RADIAL.length; // 5

  // Colores neón cyberpunk dedicados para cada modelo
  const COLORES_3D = [
    { hex: 0xffa500, css: "#ffa500", rgb: "255, 165, 0", name: "Amber (Claude)" },
    { hex: 0x00f59b, css: "#00f59b", rgb: "0, 245, 155", name: "Neon Mint (GPT-5.5)" },
    { hex: 0x00c8ff, css: "#00c8ff", rgb: "0, 200, 255", name: "Cyan (Gemini)" },
    { hex: 0xff3b69, css: "#ff3b69", rgb: "255, 59, 105", name: "Rose (Grok)" },
    { hex: 0xbbf853, css: "#bbf853", rgb: "187, 248, 83", name: "Lime (DeepSeek)" }
  ];

  let scene3d, camera3d, renderer3d, group3d, labelWrap3d;
  let modelPlates = []; // Array de platos de modelos
  let plateLabelEls = []; // Etiquetas con nombre del modelo
  let valueLabelEls = []; // Etiquetas numéricas flotantes
  let axisLabelEls = []; // Etiquetas de los 5 ejes
  let raycaster, mouseVec;

  let isDragging3d = false, prevMouseX = 0, prevMouseY = 0;
  let autoRotate3d = true;
  let showValueNumbers3d = false; // por defecto false para evitar polución visual
  let displayMode3d = "separated"; // "separated", "superposed", "profile"
  let inited3d = false;
  let focusModelIdx = -1; // -1 = todos visibles
  let threeCargado = false;

  const DEFAULT_CAM_DISTANCE = 460;
  let camDistance = DEFAULT_CAM_DISTANCE;
  const DEFAULT_CAM_THETA = -0.65;
  const DEFAULT_CAM_PHI = 0.28;
  let camTheta = DEFAULT_CAM_THETA;
  let camPhi = DEFAULT_CAM_PHI;
  let camAnimTarget = null;

  // Espaciado entre capas
  const LAYER_GAP_EXPANDED = 90;
  let currentLayerGap = LAYER_GAP_EXPANDED;
  let targetLayerGap = LAYER_GAP_EXPANDED;

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
    const x = camDistance * Math.cos(camPhi) * Math.sin(camTheta);
    const y = camDistance * Math.sin(camPhi);
    const z = camDistance * Math.cos(camPhi) * Math.cos(camTheta);
    camera3d.position.set(x, y, z);
    camera3d.lookAt(0, 0, 0);
  }

  function flyCameraTo(theta, phi, dist) {
    camAnimTarget = { theta, phi, dist: dist || camDistance };
  }

  function angle3d(i) {
    return (Math.PI * 2 * i / N_AXIS) - Math.PI / 2;
  }

  // Genera los puntos del radar de un modelo en el plano YZ
  function getModelVerticesYZ(values) {
    return values.map((v, i) => {
      const r = (v / ESCALA_MAX_GRAFICO) * RMAX3D;
      const a = angle3d(i);
      return new THREE.Vector3(0, r * Math.cos(a), r * Math.sin(a));
    });
  }

  // Construye la barra superior de chips de modelos
  function renderLegendChips() {
    if (!legend3d) return;
    legend3d.innerHTML = "";

    // Botón "Todos los modelos"
    const allChip = document.createElement("button");
    allChip.type = "button";
    allChip.className = "chip3d" + (focusModelIdx === -1 ? " active" : "");
    allChip.innerHTML = `<span class="chip3d__dot" style="background-color: #fff; box-shadow: 0 0 6px #fff;"></span> ★ Todos (5)`;
    allChip.addEventListener("click", () => {
      focusModelIdx = -1;
      renderLegendChips();
      updateFocusVisuals();
      renderHUD();
    });
    legend3d.appendChild(allChip);

    // Chip individual por modelo
    MODELOS_RADIAL.forEach((m, idx) => {
      const c = COLORES_3D[idx % COLORES_3D.length];
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip3d" + (focusModelIdx === idx ? " active" : "");
      chip.innerHTML = `<span class="chip3d__dot" style="background-color: ${c.css};"></span> ${m.modelo}`;
      chip.addEventListener("click", () => {
        focusModelIdx = (focusModelIdx === idx) ? -1 : idx;
        renderLegendChips();
        updateFocusVisuals();
        renderHUD();
      });
      legend3d.appendChild(chip);
    });
  }

  // Renderiza el Panel de Telemetría (HUD) en la columna derecha
  function renderHUD() {
    if (!hud3d) return;

    if (focusModelIdx >= 0 && focusModelIdx < N_MODELS) {
      // Detalle individual del modelo enfocado
      const m = MODELOS_RADIAL[focusModelIdx];
      const color = COLORES_3D[focusModelIdx];

      hud3d.innerHTML = `
        <div class="hud3d__badge-top">
          <span class="hud3d__empresa-tag">${m.empresa} // BENCHMARK 2026</span>
          <span class="hud3d__modelo-pill" style="background-color: rgba(${color.rgb}, 0.2); color: ${color.css}; border: 1px solid ${color.css};">
            MODELO 0${focusModelIdx + 1}
          </span>
        </div>

        <h3 class="hud3d__titulo" style="color: ${color.css};">${m.modelo}</h3>

        <div class="hud3d__metricas-grid">
          ${m.nodos.map((nodo) => `
            <div class="hud3d__metrica-card">
              <div class="hud3d__metrica-fila">
                <span class="hud3d__metrica-label">${nodo.nombre}</span>
                <span class="hud3d__metrica-score" style="color: ${color.css};">${nodo.datoReal} <small style="color: var(--color-verde-apagado);">(${nodo.valor.toFixed(1)}/10)</small></span>
              </div>
              <div class="hud3d__bar-bg">
                <div class="hud3d__bar-fill" style="width: ${Math.max(4, nodo.valor * 10)}%; background-color: ${color.css}; box-shadow: 0 0 6px ${color.css};"></div>
              </div>
              <div class="hud3d__metrica-sub">${nodo.datoAmpliado}</div>
            </div>
          `).join("")}
        </div>

        <button type="button" class="btn3d" id="hudVolverTodos" style="margin-top: 4px; width: 100%; justify-content: center;">
          ← Ver los 5 modelos juntos
        </button>
      `;

      const btnVolver = document.getElementById("hudVolverTodos");
      if (btnVolver) {
        btnVolver.addEventListener("click", () => {
          focusModelIdx = -1;
          renderLegendChips();
          updateFocusVisuals();
          renderHUD();
        });
      }
    } else {
      // Vista panorámica de los 5 modelos
      hud3d.innerHTML = `
        <div class="hud3d__resumen">
          <div class="hud3d__resumen-titulo">//_ PANORAMA MULTI-MODELO (5 DISCOS)</div>
          <p class="hud3d__resumen-desc">
            Cada modelo se proyecta en su propio plato de radar sin mezclar datos. Tocá cualquier modelo para inspeccionarlo en detalle:
          </p>

          <div class="hud3d__lista-modelos">
            ${MODELOS_RADIAL.map((m, idx) => {
              const color = COLORES_3D[idx];
              const nodoTop = [...m.nodos].sort((a, b) => b.valor - a.valor)[0];
              return `
                <div class="hud3d__comparativa-item" data-idx="${idx}">
                  <span class="hud3d__comparativa-dot" style="background-color: ${color.css}; box-shadow: 0 0 6px ${color.css};"></span>
                  <div class="hud3d__comparativa-info">
                    <span class="hud3d__comparativa-name">${m.modelo} <small style="color: var(--color-verde-apagado); font-weight: normal;">(${m.empresa})</small></span>
                    <span class="hud3d__comparativa-detail">Destaca en: ${nodoTop.nombre} (${nodoTop.datoReal})</span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;

      hud3d.querySelectorAll(".hud3d__comparativa-item").forEach(item => {
        item.addEventListener("click", () => {
          const idx = parseInt(item.dataset.idx, 10);
          focusModelIdx = idx;
          renderLegendChips();
          updateFocusVisuals();
          renderHUD();
        });
      });
    }
  }

  // Aplica estilos de foco y transparencia en la escena 3D
  function updateFocusVisuals() {
    const isFiltered = focusModelIdx !== -1;

    modelPlates.forEach((plate, idx) => {
      const isTarget = !isFiltered || focusModelIdx === idx;

      // Opacidades según si el modelo está enfocado o no
      if (plate.meshFill) {
        plate.meshFill.material.opacity = isTarget ? (isFiltered ? 0.45 : 0.26) : 0.04;
      }
      if (plate.lineLoop) {
        plate.lineLoop.material.opacity = isTarget ? 1.0 : 0.15;
      }
      if (plate.spheres) {
        plate.spheres.forEach(s => {
          s.material.opacity = isTarget ? 1.0 : 0.15;
          const scale = (isFiltered && isTarget) ? 1.3 : 1.0;
          s.scale.set(scale, scale, scale);
        });
      }
      if (plate.gridRing) {
        plate.gridRing.material.opacity = isTarget ? (isFiltered ? 0.35 : 0.18) : 0.03;
      }
      if (plate.spokes) {
        plate.spokes.material.opacity = isTarget ? (isFiltered ? 0.25 : 0.12) : 0.02;
      }
    });

    // Etiquetas HTML flotantes
    plateLabelEls.forEach(item => {
      const isTarget = !isFiltered || focusModelIdx === item.modelIdx;
      item.el.style.display = isTarget ? "" : "none";
    });

    valueLabelEls.forEach(item => {
      const isTarget = (!isFiltered || focusModelIdx === item.modelIdx);
      const shouldShow = showValueNumbers3d && isTarget;
      item.el.style.display = shouldShow ? "" : "none";
    });
  }

  function initThree() {
    if (inited3d) return;
    inited3d = true;

    const W = wrap3d.clientWidth || 640;
    const H = wrap3d.clientHeight || 460;

    scene3d = new THREE.Scene();
    camera3d = new THREE.PerspectiveCamera(40, W / H, 1, 2500);
    updateCameraFromOrbit();

    renderer3d = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer3d.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer3d.setSize(W, H);
    wrap3d.appendChild(renderer3d.domElement);

    raycaster = new THREE.Raycaster();
    mouseVec = new THREE.Vector2();

    labelWrap3d = document.createElement("div");
    labelWrap3d.style.position = "absolute";
    labelWrap3d.style.top = "0";
    labelWrap3d.style.left = "0";
    labelWrap3d.style.width = "100%";
    labelWrap3d.style.height = "100%";
    labelWrap3d.style.pointerEvents = "none";
    wrap3d.appendChild(labelWrap3d);

    // Iluminación
    scene3d.add(new THREE.AmbientLight(0x224d2e, 0.7));
    const dir1 = new THREE.DirectionalLight(0xffffff, 0.85);
    dir1.position.set(200, 300, 200);
    scene3d.add(dir1);

    const dir2 = new THREE.DirectionalLight(0x39ff6a, 0.35);
    dir2.position.set(-200, -150, -100);
    scene3d.add(dir2);

    group3d = new THREE.Group();
    scene3d.add(group3d);

    // Grilla base horizontal inferior (estilo suelo holográfico)
    const floorGrid = new THREE.GridHelper(520, 16, 0x145c2c, 0x082010);
    floorGrid.position.y = -RMAX3D - 45;
    scene3d.add(floorGrid);

    // Eventos de ratón para órbita
    wrap3d.addEventListener("pointerdown", (e) => {
      isDragging3d = true;
      camAnimTarget = null;
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

    // Zoom con rueda del ratón
    wrap3d.addEventListener("wheel", (e) => {
      e.preventDefault();
      camDistance += e.deltaY * 0.35;
      camDistance = Math.max(220, Math.min(850, camDistance));
      updateCameraFromOrbit();
    }, { passive: false });

    // Click / Raycast para seleccionar modelo tocándolo en 3D
    wrap3d.addEventListener("click", (e) => {
      const rect = wrap3d.getBoundingClientRect();
      mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseVec, camera3d);
      const interactiveMeshes = modelPlates.map(p => p.meshFill).filter(Boolean);
      const intersects = raycaster.intersectObjects(interactiveMeshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const hitIdx = hitMesh.userData.modelIdx;
        if (hitIdx !== undefined) {
          focusModelIdx = (focusModelIdx === hitIdx) ? -1 : hitIdx;
          renderLegendChips();
          updateFocusVisuals();
          renderHUD();
        }
      }
    });

    window.addEventListener("resize", () => {
      const w = wrap3d.clientWidth, h = wrap3d.clientHeight;
      if (!w || !h) return;
      camera3d.aspect = w / h;
      camera3d.updateProjectionMatrix();
      renderer3d.setSize(w, h);
    });

    animate3d();
  }

  function makeHtmlLabel(text, className) {
    const el = document.createElement("div");
    el.className = "label3d " + className;
    el.textContent = text;
    el.style.opacity = "0";
    labelWrap3d.appendChild(el);
    return el;
  }

  // Construye la escena con los 5 modelos separados como discos independientes
  function buildScene3d() {
    // Limpieza
    for (let i = group3d.children.length - 1; i >= 0; i--) {
      const c = group3d.children[i];
      if (c.geometry) c.geometry.dispose();
      if (c.material) {
        if (Array.isArray(c.material)) c.material.forEach(m => m.dispose());
        else c.material.dispose();
      }
      group3d.remove(c);
    }

    labelWrap3d.innerHTML = "";
    modelPlates = [];
    plateLabelEls = [];
    valueLabelEls = [];
    axisLabelEls = [];

    // Eje central de referencia (guía sutil compartida que conecta los centros, sin mallas de datos)
    const totalSpan = LAYER_GAP_EXPANDED * (N_MODELS - 1);
    const spineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-totalSpan / 2 - 25, 0, 0),
      new THREE.Vector3(totalSpan / 2 + 25, 0, 0)
    ]);
    const spineMat = new THREE.LineDashedMaterial({
      color: 0x1a4d25,
      dashSize: 6,
      gapSize: 4,
      transparent: true,
      opacity: 0.35
    });
    const spineLine = new THREE.Line(spineGeo, spineMat);
    spineLine.computeLineDistances();
    group3d.add(spineLine);

    // Creamos las etiquetas de los 5 ejes principales
    for (let vi = 0; vi < N_AXIS; vi++) {
      const a = angle3d(vi);
      const axisName = VALORES_GRAFICO[vi].toUpperCase();
      const el = makeHtmlLabel(axisName, "axis-tag");
      const pos = new THREE.Vector3(0, (RMAX3D + 18) * Math.cos(a), (RMAX3D + 18) * Math.sin(a));
      axisLabelEls.push({ el, pos });
    }

    // Geometría compartida para los círculos de referencia de cada plato
    const circlePoints = [];
    const nSegs = 40;
    for (let s = 0; s <= nSegs; s++) {
      const th = (s / nSegs) * Math.PI * 2;
      circlePoints.push(new THREE.Vector3(0, RMAX3D * Math.cos(th), RMAX3D * Math.sin(th)));
    }
    const circleGeo = new THREE.BufferGeometry().setFromPoints(circlePoints);

    const halfCirclePoints = [];
    for (let s = 0; s <= nSegs; s++) {
      const th = (s / nSegs) * Math.PI * 2;
      halfCirclePoints.push(new THREE.Vector3(0, (RMAX3D * 0.5) * Math.cos(th), (RMAX3D * 0.5) * Math.sin(th)));
    }
    const halfCircleGeo = new THREE.BufferGeometry().setFromPoints(halfCirclePoints);

    // Construcción de cada modelo como plato holográfico independiente
    MODELOS_RADIAL.forEach((m, yi) => {
      const plateGroup = new THREE.Group();
      const color = COLORES_3D[yi % COLORES_3D.length];
      const modelColorHex = color.hex;

      // Posición X calculada (centrada alrededor de 0)
      const baseX = (yi - (N_MODELS - 1) / 2) * currentLayerGap;
      plateGroup.position.x = baseX;

      // 1. Plato holográfico de referencia (círculos concéntricos y radios)
      const gridRingMat = new THREE.LineBasicMaterial({
        color: modelColorHex,
        transparent: true,
        opacity: 0.18
      });
      const gridRing = new THREE.LineLoop(circleGeo, gridRingMat);
      plateGroup.add(gridRing);

      const halfGridRing = new THREE.LineLoop(halfCircleGeo, new THREE.LineBasicMaterial({
        color: 0x145c2c,
        transparent: true,
        opacity: 0.12
      }));
      plateGroup.add(halfGridRing);

      // Radios guía desde el centro
      const spokePoints = [];
      for (let vi = 0; vi < N_AXIS; vi++) {
        const a = angle3d(vi);
        spokePoints.push(new THREE.Vector3(0, 0, 0));
        spokePoints.push(new THREE.Vector3(0, RMAX3D * Math.cos(a), RMAX3D * Math.sin(a)));
      }
      const spokeGeo = new THREE.BufferGeometry().setFromPoints(spokePoints);
      const spokes = new THREE.LineSegments(spokeGeo, new THREE.LineBasicMaterial({
        color: 0x145c2c,
        transparent: true,
        opacity: 0.12
      }));
      plateGroup.add(spokes);

      // Punto central
      const centerDot = new THREE.Mesh(
        new THREE.SphereGeometry(2, 8, 8),
        new THREE.MeshBasicMaterial({ color: modelColorHex, transparent: true, opacity: 0.5 })
      );
      plateGroup.add(centerDot);

      // 2. Vértices del polígono de datos
      const rawVals = DATOS_GRAFICO[yi];
      const verticesYZ = getModelVerticesYZ(rawVals);

      // 3. Cara poligonal semitransparente (fan de 5 triángulos)
      const fanPositions = [];
      const C = new THREE.Vector3(0, 0, 0);
      for (let vi = 0; vi < N_AXIS; vi++) {
        const next = (vi + 1) % N_AXIS;
        const P1 = verticesYZ[vi];
        const P2 = verticesYZ[next];
        fanPositions.push(C.x, C.y, C.z);
        fanPositions.push(P1.x, P1.y, P1.z);
        fanPositions.push(P2.x, P2.y, P2.z);
      }

      const fillGeo = new THREE.BufferGeometry();
      fillGeo.setAttribute("position", new THREE.Float32BufferAttribute(fanPositions, 3));
      fillGeo.computeVertexNormals();

      const fillMat = new THREE.MeshBasicMaterial({
        color: modelColorHex,
        transparent: true,
        opacity: 0.26,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      const meshFill = new THREE.Mesh(fillGeo, fillMat);
      meshFill.userData = { modelIdx: yi };
      plateGroup.add(meshFill);

      // 4. Perímetro luminoso del polígono
      const perimeterGeo = new THREE.BufferGeometry().setFromPoints(verticesYZ);
      const lineLoop = new THREE.LineLoop(perimeterGeo, new THREE.LineBasicMaterial({
        color: modelColorHex,
        linewidth: 2.5,
        transparent: true,
        opacity: 1.0
      }));
      plateGroup.add(lineLoop);

      // 5. Esferas en cada vértice con brillo
      const spheres = [];
      verticesYZ.forEach((p, vi) => {
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(3.6, 12, 12),
          new THREE.MeshPhongMaterial({
            color: modelColorHex,
            emissive: modelColorHex,
            emissiveIntensity: 0.45,
            shininess: 90
          })
        );
        sphere.position.copy(p);
        plateGroup.add(sphere);
        spheres.push(sphere);

        // Etiqueta flotante de valor para este vértice
        const nodo = m.nodos[vi];
        const valLbl = makeHtmlLabel(`${nodo.datoReal}`, "value-tag");
        valLbl.style.color = color.css;
        valLbl.style.borderColor = color.css;
        valLbl.style.boxShadow = `0 0 8px rgba(${color.rgb}, 0.5)`;
        valueLabelEls.push({
          el: valLbl,
          modelIdx: yi,
          localPos: p.clone(),
          plateGroup
        });
      });

      // 6. Etiqueta con el nombre del modelo flotando sobre el plato
      const plateLbl = makeHtmlLabel(`[0${yi + 1}] ${m.modelo}`, "plate-tag");
      plateLbl.style.color = color.css;
      plateLbl.style.borderColor = color.css;
      plateLabelEls.push({
        el: plateLbl,
        modelIdx: yi,
        localPos: new THREE.Vector3(0, RMAX3D * 0.95, 0),
        plateGroup
      });

      group3d.add(plateGroup);

      modelPlates.push({
        group: plateGroup,
        meshFill,
        lineLoop,
        spheres,
        gridRing,
        spokes,
        targetX: baseX,
        modelIdx: yi
      });
    });

    renderLegendChips();
    renderHUD();
    updateFocusVisuals();
  }

  // Actualiza la posición 2D en pantalla de las etiquetas flotantes
  function updateFloatingLabels() {
    if (!renderer3d) return;
    const W = wrap3d.clientWidth, H = wrap3d.clientHeight;
    const tmp = new THREE.Vector3();

    function projectAndPlace(el, worldVec) {
      tmp.copy(worldVec);
      tmp.project(camera3d);
      const isFront = tmp.z < 1;
      if (!isFront) {
        el.style.opacity = "0";
        return;
      }
      el.style.opacity = "1";
      el.style.left = (tmp.x * 0.5 + 0.5) * W + "px";
      el.style.top = (-tmp.y * 0.5 + 0.5) * H + "px";
    }

    // Nombres de los platos
    plateLabelEls.forEach(item => {
      if (item.el.style.display === "none") return;
      tmp.copy(item.localPos);
      item.plateGroup.localToWorld(tmp);
      projectAndPlace(item.el, tmp);
    });

    // Etiquetas de los 5 ejes
    axisLabelEls.forEach(item => {
      tmp.copy(item.pos);
      if (focusModelIdx >= 0 && modelPlates[focusModelIdx]) {
        tmp.x = modelPlates[focusModelIdx].group.position.x;
      } else {
        tmp.x = 0;
      }
      group3d.localToWorld(tmp);
      projectAndPlace(item.el, tmp);
    });

    // Etiquetas de números/valores
    valueLabelEls.forEach(item => {
      if (item.el.style.display === "none") return;
      tmp.copy(item.localPos);
      item.plateGroup.localToWorld(tmp);
      projectAndPlace(item.el, tmp);
    });
  }

  function animate3d() {
    requestAnimationFrame(animate3d);
    if (!renderer3d || modal3d.hidden) return;

    // Giro automático sutil
    if (autoRotate3d && !isDragging3d) {
      group3d.rotation.x += 0.005;
    }

    // Animación suave de espaciado entre platos (slider o toggle de superposición)
    currentLayerGap += (targetLayerGap - currentLayerGap) * 0.12;
    modelPlates.forEach((p, yi) => {
      const targetX = (displayMode3d === "superposed") ? 0 : (yi - (N_MODELS - 1) / 2) * currentLayerGap;
      p.group.position.x += (targetX - p.group.position.x) * 0.15;
    });

    // Animación suave de cámara
    if (camAnimTarget) {
      camTheta += (camAnimTarget.theta - camTheta) * 0.12;
      camPhi += (camAnimTarget.phi - camPhi) * 0.12;
      camDistance += (camAnimTarget.dist - camDistance) * 0.12;

      if (Math.abs(camAnimTarget.theta - camTheta) < 0.001 &&
          Math.abs(camAnimTarget.phi - camPhi) < 0.001 &&
          Math.abs(camAnimTarget.dist - camDistance) < 0.5) {
        camTheta = camAnimTarget.theta;
        camPhi = camAnimTarget.phi;
        camDistance = camAnimTarget.dist;
        camAnimTarget = null;
      }
      updateCameraFromOrbit();
    }

    updateFloatingLabels();
    renderer3d.render(scene3d, camera3d);
  }

  // Modos de vista
  function setDisplayMode(mode) {
    displayMode3d = mode;
    document.querySelectorAll(".btn3d--mode").forEach(b => b.classList.remove("active"));

    if (mode === "separated") {
      targetLayerGap = LAYER_GAP_EXPANDED;
      document.getElementById("viewSeparatedBtn")?.classList.add("active");
      flyCameraTo(DEFAULT_CAM_THETA, DEFAULT_CAM_PHI, DEFAULT_CAM_DISTANCE);
    } else if (mode === "superposed") {
      targetLayerGap = 0;
      document.getElementById("viewSuperposedBtn")?.classList.add("active");
      group3d.rotation.x = 0;
      autoRotate3d = false;
      const rotateBtn = document.getElementById("toggleRotateBtn");
      if (rotateBtn) rotateBtn.textContent = "▶ Reanudar giro";
      flyCameraTo(-Math.PI / 2, 0, 420);
    } else if (mode === "profile") {
      targetLayerGap = LAYER_GAP_EXPANDED;
      document.getElementById("viewProfileBtn")?.classList.add("active");
      group3d.rotation.x = 0;
      autoRotate3d = false;
      const rotateBtn = document.getElementById("toggleRotateBtn");
      if (rotateBtn) rotateBtn.textContent = "▶ Reanudar giro";
      flyCameraTo(0, 0.05, 520);
    }
  }

  // Listeners de controles
  document.getElementById("viewSeparatedBtn")?.addEventListener("click", () => setDisplayMode("separated"));
  document.getElementById("viewSuperposedBtn")?.addEventListener("click", () => setDisplayMode("superposed"));
  document.getElementById("viewProfileBtn")?.addEventListener("click", () => setDisplayMode("profile"));

  document.getElementById("toggleRotateBtn")?.addEventListener("click", (e) => {
    autoRotate3d = !autoRotate3d;
    e.target.textContent = autoRotate3d ? "⏸ Pausar giro" : "▶ Reanudar giro";
  });

  document.getElementById("toggleNumbersBtn")?.addEventListener("click", (e) => {
    showValueNumbers3d = !showValueNumbers3d;
    e.target.textContent = showValueNumbers3d ? "# Ocultar números" : "# Números";
    e.target.classList.toggle("active", showValueNumbers3d);
    updateFocusVisuals();
  });

  document.getElementById("resetCamBtn")?.addEventListener("click", () => {
    autoRotate3d = true;
    const rotateBtn = document.getElementById("toggleRotateBtn");
    if (rotateBtn) rotateBtn.textContent = "⏸ Pausar giro";
    setDisplayMode("separated");
  });

  document.getElementById("modal-3d-cerrar")?.addEventListener("click", cerrarGrafico3D);
  modal3d.addEventListener("click", (e) => { if (e.target === modal3d) cerrarGrafico3D(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal3d.hidden) cerrarGrafico3D(); });

  function cerrarGrafico3D() {
    modal3d.hidden = true;
    document.body.classList.remove("modal-3d-abierto");
  }

  // Punto de entrada global
  window.abrirGrafico3D = async function (vistaInicial) {
    modal3d.hidden = false;
    document.body.classList.add("modal-3d-abierto");

    try {
      if (!threeCargado) {
        await cargarThreeJS();
        threeCargado = true;
      }
    } catch (err) {
      wrap3d.textContent = "No se pudo cargar el gráfico 3D. Revisá tu conexión a Internet.";
      return;
    }

    if (!inited3d) {
      initThree();
      buildScene3d();
    }

    if (vistaInicial === "superposed") {
      setDisplayMode("superposed");
    } else {
      setDisplayMode("separated");
    }
  };
})();
