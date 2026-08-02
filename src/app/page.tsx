"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  Layers, 
  RotateCw, 
  Compass, 
  Globe, 
  Cpu, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  Sparkles,
  Sun,
  Edit3,
  Save,
  ZoomIn,
  ZoomOut,
  Plus,
  Trash2,
  Image as ImageIcon,
  GraduationCap
} from "lucide-react";

type Theme = "cyber" | "emerald" | "sunset" | "light";

interface BrochureContent {
  // Portada (Outside Right) -> Definición del bien a producir
  portadaTitle: string;
  portadaSubtitle: string;
  portadaTag: string;
  portadaEdition: string;
  portadaImage: string;
  
  // Contraportada (Outside Center) -> Credenciales UVM
  contraTitle: string;
  contraEmail: string; // Used for Student Name
  contraPhone: string; // Used for Program Name
  contraAddress: string; // Used for University Name
  contraQRLabel: string; // Used for Course Name
  contraImage: string;
  
  // Solapa (Outside Left) -> Análisis del consumidor
  solapaTag: string;
  solapaTitle: string;
  solapaDesc: string;
  solapaButton: string;
  solapaImage: string;

  // Inside Left (Pag 1) -> Análisis de la competencia
  insideLeftTag: string;
  insideLeftTitle: string;
  insideLeftDesc: string;
  insideLeftBullet1Title: string;
  insideLeftBullet1Desc: string;
  insideLeftBullet2Title: string;
  insideLeftBullet2Desc: string;
  insideLeftImage: string;

  // Inside Center (Pag 2) -> Previsión de la demanda
  insideCenterTag: string;
  insideCenterTitle: string;
  insideCenterDesc: string;
  insideCenterStat1Label: string;
  insideCenterStat2Label: string;
  insideCenterStat3Label: string;
  insideCenterImage: string;

  // Inside Right (Pag 3) -> El plan de comercialización
  insideRightTag: string;
  insideRightTitle: string;
  insideRightDesc: string;
  insideRightQuote: string;
  insideRightQuoteAuthor: string;
  insideRightImage: string;
}

interface CustomBlock {
  id: string;
  type: "paragraph" | "heading" | "image";
  text: string; // Text content or Image DataURL
  fontSize?: number; // Size for text blocks
  height?: number; // Height for image blocks
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [theme, setTheme] = useState<Theme>("cyber");
  const [isEditing, setIsEditing] = useState(false);
  const [scale, setScale] = useState<number>(1.0);
  const [height, setHeight] = useState<number>(550);
  const [isResizing, setIsResizing] = useState(false);

  // Brochure Text Content State (Tripled in size for maximum depth)
  const [content, setContent] = useState<BrochureContent>({
    // Cara Exterior - Portada (Derecha) -> Definición del bien a producir
    portadaTag: "Etapa 1 - Estudio de Mercado",
    portadaTitle: "Definición del bien a producir",
    portadaSubtitle: "La definición del bien o servicio es la piedra angular sobre la cual se edifica cualquier estudio de mercado y evaluación financiera. Consiste en la caracterización y descripción detallada de todas las propiedades físicas, químicas, técnicas y funcionales del producto o servicio que se pretende introducir en el mercado. Esto permite al evaluador de proyectos delimitar el alcance técnico del proceso de producción y prever los insumos, maquinaria e infraestructura necesarios para su desarrollo comercial de manera rigurosa.",
    portadaEdition: "CARACTERÍSTICAS METODOLÓGICAS:\n1. Especificaciones Técnicas y de Diseño: Incluye dimensiones, peso, materiales de composición (plásticos, metals, componentes electrónicos), empaque (primario, secundario, terciario) y ciclo de vida estimado.\n2. Propuesta de Valor y Usos: Se debe responder a la pregunta fundamental de qué problema resuelve o qué necesidad satisface. Describe la diferenciación competitiva y el valor agregado intangible que percibirá el cliente.\n3. Aspectos Regulatorios y Propiedad Intelectual: Normas oficiales de calidad (NOM, ISO), registros sanitarios (FDA, COFEPRIS), marcas registradas, patentes de invención y regulaciones ambientales obligatorias para su venta.\n\nEJEMPLO DE APLICACIÓN PRÁCTICA:\nCaso - Dispositivo IoT 'EcoTemp v2': Un termostato inteligente doméstico fabricado con aluminio reciclado y vidrio templado, con dimensiones de 10x10 cm. Cuenta con sensores de temperatura, humedad y presencia, y conectividad Wi-Fi dual. Su propuesta de valor es el ahorro automático de hasta un 30% en consumo eléctrico residencial gracias a un algoritmo predictivo de IA. Legalmente, cuenta con certificación internacional de seguridad eléctrica, patente del algoritmo registrada ante la oficina de propiedad intelectual y empaque biodegradable de cartón prensado con instructivo digital.",
    portadaImage: "/images/product_definition.png",
    
    // Cara Exterior - Contraportada (Centro) -> Credenciales UVM
    contraTitle: "Actividad 1. Infografía",
    contraEmail: "Gerardo Antonio Martínez García",
    contraPhone: "Maestría en Inteligencia Artificial",
    contraAddress: "Universidad del Valle de México (UVM)",
    contraQRLabel: "Evaluación financiera y análisis de costos y riesgos",
    contraImage: "/images/academic_credentials.png",
    
    // Cara Exterior - Solapa Interna (Izquierda) -> Análisis del consumidor
    solapaTag: "Etapa 2",
    solapaTitle: "Análisis del consumidor",
    solapaDesc: "El análisis del consumidor investiga los patrones de comportamiento de compra y consumo del público objetivo para estructurar estrategias comerciales eficaces. En el diseño de proyectos, este análisis ayuda a cuantificar el tamaño de la demanda potencial y a entender qué variables influyen en la toma de decisiones del consumidor final.",
    solapaButton: "CARACTERÍSTICAS METODOLÓGICAS:\n1. Segmentación del Mercado: Proceso de fragmentar el mercado en grupos homogéneos basados en criterios demográficos (edad, ingresos, ocupación), geográficos (localización, clima), psicográficos (personalidad, estilo de vida, valores) y conductuales (frecuencia de uso, beneficios buscados, lealtad de marca).\n2. Perfil del Consumidor (Buyer Persona): Arquetipo semificticio que describe al cliente ideal, detallando sus objetivos diarios, frustraciones con soluciones actuales y motivaciones de compra.\n3. Proceso y Hábitos de Compra: Estudio de los roles en la compra (iniciador, influyente, decisor, comprador, usuario), la frecuencia de compra, los canales preferidos de información y los disparadores de decisión.\n\nEJEMPLO DE APLICACIÓN PRÁCTICA:\nCaso - Consumidor de Plataforma SaaS de Gestión Escolar: El cliente decisor se segmenta como Directores de Colegios Privados en zonas urbanas de ingresos medios, de 35 a 60 años, con conocimientos tecnológicos básicos. El buyer persona representativo es 'Director Carlos', cuyas frustraciones son la pérdida de tiempo en reportes de asistencia manuales y la comunicación ineficiente con los padres. Su disparador de compra es la necesidad de digitalizar la administración del plantel para retener matrícula y proyectar una imagen de vanguardia educativa.",
    solapaImage: "/images/consumer_analysis.png",

    // Inside Left (Página 1) -> Análisis de la competencia
    insideLeftTag: "Etapa 3",
    insideLeftTitle: "Análisis de la competencia",
    insideLeftDesc: "El análisis de la competencia es una evaluación sistemática de las capacidades, recursos, debilidades, fortalezas y estrategias comerciales de los competidores directos (rivales que ofrecen el mismo producto) e indirectos (empresas que comercializan productos sustitutos) que operan en el mismo segmento de mercado. Conocer al adversario permite diseñar estrategias de diferenciación sólidas y prever sus reacciones ante nuestra entrada al mercado.",
    insideLeftBullet1Title: "Características Clave:",
    insideLeftBullet1Desc: "1. Benchmarking Competitivo: Comparativa técnica de atributos (calidad de materiales, facilidad de uso, soporte técnico, tiempo de entrega, garantías) frente a los líderes del sector.\n2. Estructura de Precios y Costos: Análisis de las políticas de precios de los competidores, márgenes de intermediación, esquemas de crédito y promociones especiales.\n3. Identificación de Barreras de Entrada y Salida: Evaluación de obstáculos del mercado como patentes dominantes, economías de escala de grandes cadenas, contratos exclusivos de distribución y altos costos de cambio para el cliente.",
    insideLeftBullet2Title: "Ejemplo Práctico:",
    insideLeftBullet2Desc: "Caso - Empresa de Delivery Local frente a Gigantes (UberEats/Rappi): La competencia directa posee economías de escala y gran presupuesto publicitario, pero su debilidad es la alta tasa de comisión (hasta 30%) cobrada a los restaurantes locales y el soporte automatizado ineficiente. La nueva empresa local decide diferenciarse ofreciendo una comisión reducida del 15%, un canal de soporte telefónico directo para restaurantes y repartidores locales contratados formalmente, asegurando una atención premium y comunitaria.",
    insideLeftImage: "/images/competition_analysis.png",

    // Inside Center (Página 2) -> Previsión de la demanda
    insideCenterTag: "Etapa 4",
    insideCenterTitle: "Previsión de la demanda",
    insideCenterDesc: "La previsión de la demanda consiste en proyectar el volumen futuro de ventas de un bien o servicio a través de modelos matemáticos y análisis cualitativos. Esta proyección permite al evaluador del proyecto dimensionar la capacidad instalada de la planta, definir el presupuesto de operación, planificar inventarios y estimar los ingresos futuros en los flujos de caja del análisis de factibilidad financiera.",
    insideCenterStat1Label: "Métodos Cualitativos: Se aplican cuando los datos históricos son escasos (por ejemplo, en el lanzamiento de un producto innovador). Incluyen encuestas de intención de compra de consumidores potenciales, consulta a paneles de vendedores y el Método Delphi (consenso de expertos mediante rondas de preguntas anónimas).",
    insideCenterStat2Label: "Métodos Cuantitativos: Modelos de series de tiempo (promedios móviles, suavizamiento exponencial) que proyectan basándose en el comportamiento histórico del mercado, y modelos causales (regresiones lineales simples o múltiples) que asocian la demanda con variables externas explicativas.",
    insideCenterStat3Label: "EJEMPLO: Caso - Alimento Orgánico de Mascotas: Se realiza un modelo causal donde la variable independiente es la tasa de adopción de mascotas de raza pequeña en la región y el crecimiento del gasto promedio en bienestar animal. El modelo de regresión lineal simple ($Y = a + bX$) proyecta una demanda de 12,000 unidades para el primer año de operación, con una tasa de crecimiento anual sostenida del 8.5% en función de la tendencia de humanización de las mascotas.",
    insideCenterImage: "/images/demand_forecasting.png",

    // Inside Right (Página 3) -> El plan de comercialización
    insideRightTag: "Etapa 5",
    insideRightTitle: "El plan de comercialización",
    insideRightDesc: "El plan de comercialización define la estrategia integrada para hacer llegar el producto o servicio al público objetivo en el momento, lugar y precio correctos, motivando la compra a través de canales de comunicación eficaces. Es la ejecución comercial del proyecto y la interfaz directa con el mercado.",
    insideRightQuote: "El Marketing Mix (Las 4Ps): Producto (portafolio de productos, diseño de la marca, empaque y políticas de garantías y servicio postventa), Precio (fijación del precio basada en costos [markup], precios de la competencia o valor percibido), Plaza (canales directos [venta web, tiendas propias] o indirectos [mayoristas, detallistas]) y Promoción (publicidad digital [SEO, SEM, redes sociales], relaciones públicas y marketing de influencia).",
    insideRightQuoteAuthor: "EJEMPLO: Caso - Marca de Cosméticos Orgánicos Veganos: El plan establece un catálogo de cremas faciales en envases de vidrio retornable (Producto). El precio se fija por valor percibido un 15% arriba del mercado tradicional para proyectar exclusividad y cubrir costos de ingredientes orgánicos certificados (Precio). La plaza inicial se enfoca en canales digitales propios (e-commerce Shopify) y distribución física selectiva en 10 boutiques ecológicas aliadas (Plaza). La promoción se apoya en publicidad pagada en Instagram y TikTok enfocada en sustentabilidad, y colaboraciones con influencers del movimiento cruelty-free (Promoción).",
    insideRightImage: "/images/marketing_plan.png",
  });

  // Default font sizes map (key -> size in pixels)
  const [fontSizes, setFontSizes] = useState<Record<string, number>>({});

  // Pre-populated custom blocks (Exactly two APA references)
  const [customBlocks, setCustomBlocks] = useState<Record<string, CustomBlock[]>>({
    insideLeft: [],
    insideCenter: [],
    insideRight: [],
    solapa: [],
    contra: [
      {
        id: "ref_header",
        type: "heading",
        text: "Referencias Bibliográficas (APA):",
        fontSize: 12
      },
      {
        id: "ref1",
        type: "paragraph",
        text: "Meza, J. (2013). Evaluación financiera de proyectos: 10 casos prácticos resueltos en Excel. [Archivo PDF]. Recuperado de http://190.57.147.202:90/jspui/bitstream/123456789/1402/1/Evaluaci%C3%B3n%20financiera%20de%20proyectos.pdf",
        fontSize: 9
      },
      {
        id: "ref2",
        type: "paragraph",
        text: "Mondragon, D. (2017). Formulación y evaluación de proyectos. [Archivo PDF]. Recuperado de https://digitk.areandina.edu.co/bitstream/handle/areandina/1318/Formulaci%C3%B3n%20y%20Evaluaci%C3%B3n%20de%20Proyectos.pdf?sequence=1",
        fontSize: 9
      }
    ],
    portada: [],
  });

  const updateText = (key: keyof BrochureContent, value: string) => {
    setContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const getFontSize = (key: string, defaultSize: number) => {
    return fontSizes[key] || defaultSize;
  };

  const updateFontSize = (key: string, size: number) => {
    setFontSizes(prev => ({
      ...prev,
      [key]: size
    }));
  };

  // Add custom blocks
  const addCustomBlock = (panelKey: string, type: "paragraph" | "heading" | "image") => {
    const newBlock: CustomBlock = {
      id: Math.random().toString(),
      type,
      text: type === "image" ? "" : type === "heading" ? "Nuevo Título..." : "Haz clic aquí para escribir...",
      fontSize: type === "heading" ? 18 : 14,
      height: type === "image" ? 180 : undefined
    };
    setCustomBlocks(prev => ({
      ...prev,
      [panelKey]: [...(prev[panelKey] || []), newBlock]
    }));
  };

  const updateCustomBlockText = (panelKey: string, id: string, text: string) => {
    setCustomBlocks(prev => ({
      ...prev,
      [panelKey]: (prev[panelKey] || []).map(b => b.id === id ? { ...b, text } : b)
    }));
  };

  const updateCustomBlockFontSize = (panelKey: string, id: string, size: number) => {
    setCustomBlocks(prev => ({
      ...prev,
      [panelKey]: (prev[panelKey] || []).map(b => b.id === id ? { ...b, fontSize: size } : b)
    }));
  };

  const updateCustomBlockHeight = (panelKey: string, id: string, height: number) => {
    setCustomBlocks(prev => ({
      ...prev,
      [panelKey]: (prev[panelKey] || []).map(b => b.id === id ? { ...b, height } : b)
    }));
  };

  const removeCustomBlock = (panelKey: string, id: string) => {
    setCustomBlocks(prev => ({
      ...prev,
      [panelKey]: (prev[panelKey] || []).filter(b => b.id !== id)
    }));
  };

  // File Upload Helper
  const handleImageUpload = (panelKey: string, id: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        updateCustomBlockText(panelKey, id, result);
      }
    };
    reader.readAsDataURL(file);
  };

  // Drag to resize handler for brochure height
  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    const startY = e.clientY;
    const startHeight = height;

    const doResize = (moveEvent: MouseEvent) => {
      const newHeight = startHeight + (moveEvent.clientY - startY);
      // Limits from 400px up to 1100px
      if (newHeight >= 400 && newHeight <= 1100) {
        setHeight(newHeight);
      }
    };

    const stopResize = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", doResize);
      document.removeEventListener("mouseup", stopResize);
    };

    document.addEventListener("mousemove", doResize);
    document.addEventListener("mouseup", stopResize);
  };

  // Helper component for default editable texts with hover size slider
  const EditableField = ({ 
    contentKey, 
    defaultSize = 14,
    className = "", 
    element = "p" 
  }: { 
    contentKey: keyof BrochureContent; 
    defaultSize?: number;
    className?: string; 
    element?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  }) => {
    const Element = element;
    const value = content[contentKey];
    const fontSize = getFontSize(contentKey, defaultSize);

    return (
      <div className="relative group/field inline-block w-full text-inherit">
        {isEditing && (
          <div className="absolute -top-7 left-0 flex items-center gap-1.5 bg-zinc-950 border border-white/10 px-2 py-0.5 rounded-lg shadow-lg z-30 opacity-0 group-hover/field:opacity-100 transition-opacity pointer-events-auto select-none">
            <span className="text-[9px] text-foreground/50">Tamaño:</span>
            <input 
              type="range" 
              min="10" 
              max="60" 
              value={fontSize} 
              onChange={(e) => updateFontSize(contentKey, parseInt(e.target.value))}
              className="w-14 h-1 bg-white/20 rounded cursor-pointer accent-cyan-400"
            />
            <span className="text-[9px] font-mono text-cyan-400">{fontSize}px</span>
          </div>
        )}
        <Element
          contentEditable={isEditing}
          suppressContentEditableWarning
          onBlur={(e) => updateText(contentKey, e.currentTarget.textContent || "")}
          style={{ fontSize: `${fontSize}px` }}
          className={`${className} ${
            isEditing 
              ? "outline-dashed outline-2 outline-cyan-500/70 px-1.5 py-0.5 rounded bg-white/5 dark:bg-black/20 cursor-text hover:bg-white/10 select-text pointer-events-auto relative z-30" 
              : "transition-all duration-300"
          }`}
        >
          {value}
        </Element>
      </div>
    );
  };

  // Helper component to render and edit main panel images
  const EditableImage = ({ 
    contentKey, 
    alt, 
    className = "", 
    defaultHeight = 128,
    isRound = false,
  }: { 
    contentKey: keyof BrochureContent; 
    alt: string; 
    className?: string; 
    defaultHeight?: number;
    isRound?: boolean;
  }) => {
    const imageUrl = content[contentKey];
    const [imageHeight, setImageHeight] = useState<number>(defaultHeight);

    const handleUpload = (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          updateText(contentKey, result);
        }
      };
      reader.readAsDataURL(file);
    };

    return (
      <div className={`relative group/img-editable w-full flex justify-center mb-4 ${isEditing ? "z-30" : ""}`}>
        <img 
          src={imageUrl} 
          alt={alt} 
          style={{ height: isRound ? `${imageHeight}px` : undefined, maxHeight: isRound ? undefined : `${imageHeight}px` }}
          className={`${className} ${isRound ? "w-auto object-cover" : "w-full object-cover"} ${
            isEditing 
              ? "outline-dashed outline-2 outline-cyan-500/70 cursor-pointer hover:brightness-90 transition-all" 
              : "transition-all duration-300"
          }`}
        />
        
        {isEditing && (
          <div className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1 opacity-0 group-hover/img-editable:opacity-100 transition-opacity duration-200 z-30 ${isRound ? "rounded-full" : "rounded-xl"}`}>
            {/* Height slider control */}
            <div className="absolute -top-7 left-0 right-0 mx-auto w-max flex items-center gap-1.5 bg-zinc-950 border border-white/10 px-2 py-0.5 rounded-lg shadow-lg z-30 select-none">
              <span className="text-[9px] text-foreground/50">Altura:</span>
              <input 
                type="range" 
                min="60" 
                max="350" 
                value={imageHeight} 
                onChange={(e) => setImageHeight(parseInt(e.target.value))}
                className="w-14 h-1 bg-white/20 rounded cursor-pointer accent-cyan-400"
              />
              <span className="text-[9px] font-mono text-cyan-400">{imageHeight}px</span>
            </div>

            {/* Upload action */}
            <div 
              className={`${isRound ? "w-[75%] h-[75%] rounded-full" : "w-[85%] h-[80%] rounded-lg"} border border-dashed border-white/30 flex flex-col items-center justify-center p-2 cursor-pointer hover:border-cyan-400 hover:bg-white/5 transition`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file && file.type.startsWith("image/")) {
                  handleUpload(file);
                }
              }}
              onClick={() => {
                const input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    handleUpload(file);
                  }
                };
                input.click();
              }}
            >
              <ImageIcon className="w-5 h-5 text-white/70 mb-1" />
              <span className="text-[9px] text-white/80 text-center font-medium">Sube o arrastra imagen</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Helper to render custom added blocks (text sizes editable by mouse / Drag images)
  const renderCustomBlocks = (panelKey: string) => {
    return (
      <div className="mt-4">
        {/* Custom blocks list */}
        <div className="space-y-4">
          {(customBlocks[panelKey] || []).map((block) => {
            if (block.type === "image") {
              // RENDER IMAGE BLOCK
              if (!block.text) {
                // Dropzone for files
                return (
                  <div key={block.id} className="relative group/block w-full">
                    <div 
                      className="w-full h-32 rounded-xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center p-4 hover:border-cyan-500/50 hover:bg-white/5 transition cursor-pointer relative"
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        const file = e.dataTransfer.files[0];
                        if (file && file.type.startsWith("image/")) {
                          handleImageUpload(panelKey, block.id, file);
                        }
                      }}
                      onClick={() => {
                        const input = document.createElement("input");
                        input.type = "file";
                        input.accept = "image/*";
                        input.onchange = (e) => {
                          const file = (e.target as HTMLInputElement).files?.[0];
                          if (file) {
                            handleImageUpload(panelKey, block.id, file);
                          }
                        };
                        input.click();
                      }}
                    >
                      <ImageIcon className="w-6 h-6 text-foreground/40 mb-1" />
                      <span className="text-[10px] text-foreground/50 text-center font-medium">Arrastra una imagen aquí o haz clic</span>
                    </div>
                    {isEditing && (
                      <button 
                        onClick={() => removeCustomBlock(panelKey, block.id)}
                        className="absolute -top-2.5 -right-2.5 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 cursor-pointer shadow z-25"
                        title="Eliminar bloque de imagen"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              } else {
                // Show uploaded image with mouse height resizer
                return (
                  <div key={block.id} className="relative group/img w-full my-2">
                    <img 
                      src={block.text} 
                      alt="Imagen tríptico" 
                      className="w-full object-cover rounded-xl border border-white/10" 
                      style={{ height: `${block.height || 180}px` }}
                    />
                    {isEditing && (
                      <div className="absolute -top-7 left-0 flex items-center gap-1.5 bg-zinc-950 border border-white/10 px-2 py-0.5 rounded-lg shadow-lg z-30 opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <span className="text-[9px] text-foreground/50">Altura:</span>
                        <input 
                          type="range" 
                          min="80" 
                          max="400" 
                          value={block.height || 180} 
                          onChange={(e) => updateCustomBlockHeight(panelKey, block.id, parseInt(e.target.value))}
                          className="w-14 h-1 bg-white/20 rounded cursor-pointer accent-cyan-400"
                        />
                        <span className="text-[9px] font-mono text-cyan-400">{block.height || 180}px</span>
                        <button 
                          onClick={() => updateCustomBlockText(panelKey, block.id, "")}
                          className="text-[9px] text-cyan-400 hover:text-cyan-300 ml-2 border-l border-white/10 pl-2 cursor-pointer font-semibold"
                        >
                          Cambiar
                        </button>
                      </div>
                    )}
                    {isEditing && (
                      <button 
                        onClick={() => removeCustomBlock(panelKey, block.id)}
                        className="absolute -top-2.5 -right-2.5 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 cursor-pointer shadow z-25"
                        title="Eliminar bloque de imagen"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              }
            } else {
              // RENDER TEXT BLOCK (Paragraph or Heading) WITH SIZE SLIDER
              return (
                <div key={block.id} className="relative group/block w-full">
                  {isEditing && (
                    <div className="absolute -top-7 left-0 flex items-center gap-1.5 bg-zinc-950 border border-white/10 px-2 py-0.5 rounded-lg shadow-lg z-30 opacity-0 group-hover/block:opacity-100 transition-opacity pointer-events-auto select-none">
                      <span className="text-[9px] text-foreground/50">Tamaño:</span>
                      <input 
                        type="range" 
                        min="10" 
                        max="60" 
                        value={block.fontSize || 14} 
                        onChange={(e) => updateCustomBlockFontSize(panelKey, block.id, parseInt(e.target.value))}
                        className="w-14 h-1 bg-white/20 rounded cursor-pointer accent-cyan-400"
                      />
                      <span className="text-[9px] font-mono text-cyan-400">{block.fontSize || 14}px</span>
                    </div>
                  )}
                  <div
                    contentEditable={isEditing}
                    suppressContentEditableWarning
                    onBlur={(e) => updateCustomBlockText(panelKey, block.id, e.currentTarget.textContent || "")}
                    style={{ fontSize: `${block.fontSize || 14}px` }}
                    className={`${
                      block.type === "heading" ? "text-sm font-bold text-cyan-400 mb-1" : "text-[11px] text-foreground/75 leading-relaxed"
                    } ${
                      isEditing 
                        ? "outline-dashed outline-2 outline-cyan-500/70 px-1.5 py-0.5 rounded bg-white/5 dark:bg-black/20 cursor-text hover:bg-white/10 select-text pointer-events-auto relative z-30" 
                        : ""
                    }`}
                  >
                    {block.text}
                  </div>
                  {isEditing && (
                    <button 
                      onClick={() => removeCustomBlock(panelKey, block.id)}
                      className="absolute -top-2.5 -right-2.5 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 cursor-pointer shadow z-25 opacity-0 group-hover/block:opacity-100 transition"
                      title="Eliminar este bloque"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              );
            }
          })}
        </div>

        {/* Action Buttons to Add blocks */}
        {isEditing && (
          <div className="mt-4 flex flex-wrap gap-2 border-t border-dashed border-white/10 pt-3">
            <button 
              onClick={() => addCustomBlock(panelKey, "heading")}
              className="flex items-center gap-1 text-[9px] font-semibold bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded hover:bg-cyan-500/30 transition border border-cyan-500/30 cursor-pointer"
            >
              <Plus className="w-2.5 h-2.5" />
              <span>+ Título</span>
            </button>
            <button 
              onClick={() => addCustomBlock(panelKey, "paragraph")}
              className="flex items-center gap-1 text-[9px] font-semibold bg-purple-500/20 text-purple-400 px-2 py-1 rounded hover:bg-purple-500/30 transition border border-purple-500/30 cursor-pointer"
            >
              <Plus className="w-2.5 h-2.5" />
              <span>+ Párrafo</span>
            </button>
            <button 
              onClick={() => addCustomBlock(panelKey, "image")}
              className="flex items-center gap-1 text-[9px] font-semibold bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded hover:bg-emerald-500/30 transition border border-emerald-500/30 cursor-pointer"
            >
              <Plus className="w-2.5 h-2.5" />
              <span>+ Imagen</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  const getThemeClass = () => {
    switch (theme) {
      case "emerald":
        return "theme-emerald";
      case "sunset":
        return "theme-sunset";
      case "light":
        return "theme-light";
      default:
        return "";
    }
  };

  const getGradient = (type: "primary" | "secondary" | "accent" | "bg") => {
    const gradients = {
      cyber: {
        primary: "from-cyan-500 via-blue-600 to-indigo-600",
        secondary: "from-purple-600 to-pink-600",
        accent: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
        bg: "from-slate-950 via-zinc-950 to-zinc-900"
      },
      emerald: {
        primary: "from-emerald-400 via-teal-600 to-cyan-600",
        secondary: "from-teal-500 to-emerald-700",
        accent: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
        bg: "from-teal-950 via-emerald-950 to-stone-900"
      },
      sunset: {
        primary: "from-amber-400 via-orange-600 to-red-600",
        secondary: "from-red-500 to-rose-700",
        accent: "bg-orange-500/20 text-orange-400 border-orange-500/30",
        bg: "from-orange-950 via-stone-950 to-neutral-950"
      },
      light: {
        primary: "from-blue-600 via-indigo-600 to-violet-600",
        secondary: "from-indigo-500 to-purple-600",
        accent: "bg-blue-100 text-blue-700 border-blue-200",
        bg: "from-slate-50 via-blue-50/20 to-slate-100"
      }
    };
    return gradients[theme][type];
  };

  return (
    <div className={`min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-gradient-to-b ${getGradient("bg")} ${getThemeClass()} p-4 md:p-8 font-sans transition-all duration-1000 relative`}>
      
      {/* Background glow elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 print:hidden">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-blue-600/10 to-indigo-500/5 blur-[120px] glow-bg"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-purple-600/10 to-pink-500/5 blur-[140px] glow-bg" style={{ animationDelay: "-3s" }}></div>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-4 mb-8 z-10 print:hidden">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl bg-gradient-to-r ${getGradient("primary")} shadow-lg shadow-black/10`}>
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Tríptico Digital Interactivo
            </h1>
            <p className="text-xs text-foreground/50 font-medium">Next.js & Tailwind CSS 3D Showcase</p>
          </div>
        </div>

        {/* Floating Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4 bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl p-2.5 backdrop-blur-md shadow-xl">
          
          {/* Theme Selector */}
          <div className="flex items-center gap-1 border-r border-white/10 pr-3">
            {(["cyber", "emerald", "sunset", "light"] as Theme[]).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`w-8 h-8 rounded-lg capitalize text-xs font-semibold transition-all duration-300 relative flex items-center justify-center ${
                  theme === t 
                    ? "bg-white text-black scale-110 shadow-md" 
                    : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                }`}
                title={`Tema ${t}`}
              >
                {t === "cyber" && <Cpu className="w-4 h-4" />}
                {t === "emerald" && <Globe className="w-4 h-4" />}
                {t === "sunset" && <Sparkles className="w-4 h-4" />}
                {t === "light" && <Sun className="w-4 h-4" />}
              </button>
            ))}
          </div>

          {/* Scale / Zoom Control */}
          <div className="flex items-center gap-2 border-r border-white/10 pr-3">
            <ZoomOut className="w-4 h-4 text-foreground/50" />
            <input 
              type="range" 
              min="0.75" 
              max="1.4" 
              step="0.05" 
              value={scale} 
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-24 h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
              title="Ajustar Escala"
            />
            <ZoomIn className="w-4 h-4 text-foreground/50" />
            <button 
              onClick={() => setScale(1.0)} 
              className="text-xs text-foreground/65 hover:text-foreground hover:bg-white/5 px-2 py-1 rounded border border-white/10 cursor-pointer"
              title="Restablecer escala"
            >
              Reset ({Math.round(scale * 100)}%)
            </button>
          </div>

          {/* Edit Mode Toggle */}
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 border cursor-pointer ${
              isEditing 
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30" 
                : "border-white/10 hover:bg-white/10 text-foreground"
            }`}
          >
            {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
            <span>{isEditing ? "Guardar Textos" : "Editar Textos"}</span>
          </button>

          {/* Action Buttons */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              isOpen 
                ? "bg-white/10 text-foreground border border-white/10" 
                : `bg-gradient-to-r ${getGradient("primary")} text-white shadow-lg shadow-black/10 hover:brightness-110 hover:scale-[1.02]`
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{isOpen ? "Cerrar" : "Abrir Tríptico"}</span>
          </button>

          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            disabled={!isOpen}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 border mr-1 ${
              !isOpen 
                ? "opacity-40 cursor-not-allowed border-transparent text-foreground/40" 
                : "border-white/10 hover:bg-white/10 text-foreground cursor-pointer"
            }`}
          >
            <RotateCw className="w-4 h-4" />
            <span>{isFlipped ? "Ver Interior" : "Girar Tríptico"}</span>
          </button>

          {/* Native PDF Print Trigger */}
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 bg-cyan-600 hover:bg-cyan-500 text-white border border-cyan-500/50 shadow-lg cursor-pointer"
            title="Exportar tríptico a PDF para impresión o entrega"
          >
            <Layers className="w-4 h-4" />
            <span>Exportar PDF</span>
          </button>
        </div>
      </header>

      {/* Main View Area */}
      <main className="flex-1 w-full flex flex-col items-center justify-center py-4 z-10 print:hidden">
        
        {/* Helper Instructions Banner */}
        <div className="mb-6 text-center max-w-md">
          <p className="text-sm font-medium text-foreground/70">
            {isEditing 
              ? "Modo de edición ACTIVO. Pasa el mouse sobre los textos para ajustar su tamaño. Usa '+ Imagen' para arrastrar/soltar tus imágenes."
              : !isOpen 
                ? "Haz clic en \"Abrir Tríptico\" o en la portada para desplegar el folleto."
                : isFlipped 
                  ? "Estás viendo la cara EXTERIOR (Portada, Contraportada y Solapa)." 
                  : "Estás viendo la cara INTERIOR (Páginas de contenido)."}
          </p>
        </div>

        {/* DESKTOP 3D BROCHURE VIEW (Perspective and rotateX are set to 0 when editing to enable perfect contentEditable focus) */}
        <div 
          className="hidden lg:block w-full max-w-[90vw] brochure-viewport relative transition-all duration-150"
          style={{ 
            height: `${height}px`,
            perspective: isEditing ? "none" : "2500px"
          }}
        >
          <div 
            className={`w-full h-full brochure-wrapper duration-1000 ${isOpen ? "" : "folded"} ${isEditing ? "editing-active" : ""}`}
            style={{
              transform: `scale(${scale}) rotateX(${isEditing ? 0 : 15}deg) ${isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}`,
              transformOrigin: "center center"
            }}
          >
            {/* 3D BROCHURE GRID */}
            <div className="w-full h-full grid grid-cols-3 relative" style={{ transformStyle: "preserve-3d" }}>
              
              {/* PANEL 1: LEFT PANEL (Inside Left [Pág 1] / Outside Solapa) */}
              <div 
                className={`panel-container panel-left-fold w-full h-full absolute top-0 left-0`}
                style={{
                  width: "33.333333%",
                  transform: isOpen ? "rotateY(0deg)" : "rotateY(140deg)",
                  zIndex: isOpen ? 10 : 30
                }}
              >
                {/* Inside Left (Página 1: Análisis de la competencia) */}
                <div className={`panel-side-front w-full h-full glass-panel rounded-l-2xl p-8 flex flex-col justify-between overflow-y-auto transition-opacity duration-500 ${isOpen && !isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <div>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-2`}>
                        <Compass className="w-3.5 h-3.5" />
                        <EditableField contentKey="insideLeftTag" element="span" defaultSize={12} />
                      </div>
                    </div>
                    
                    {/* Descriptive Image: Competencia */}
                    <EditableImage 
                      contentKey="insideLeftImage" 
                      alt="Análisis de la competencia" 
                      className="rounded-xl border border-white/10" 
                      defaultHeight={128} 
                    />

                    <EditableField contentKey="insideLeftTitle" element="h3" className="text-2xl font-bold tracking-tight mb-4 text-center" defaultSize={22} />
                    <EditableField contentKey="insideLeftDesc" element="p" className="text-xs text-foreground/70 leading-relaxed mb-6" defaultSize={12} />
                    
                    <div className="space-y-4">
                      <div className="flex gap-3 items-start">
                        <div className="mt-1 p-1 rounded bg-white/5 border border-white/10 text-amber-500">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="w-full">
                          <EditableField contentKey="insideLeftBullet1Title" element="h4" className="text-sm font-semibold" defaultSize={14} />
                          <EditableField contentKey="insideLeftBullet1Desc" element="p" className="text-[11px] text-foreground/60 leading-relaxed whitespace-pre-line" defaultSize={11} />
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="mt-1 p-1 rounded bg-white/5 border border-white/10 text-amber-500">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="w-full">
                          <EditableField contentKey="insideLeftBullet2Title" element="h4" className="text-sm font-semibold" defaultSize={14} />
                          <EditableField contentKey="insideLeftBullet2Desc" element="p" className="text-[11px] text-foreground/60 leading-relaxed whitespace-pre-line" defaultSize={11} />
                        </div>
                      </div>
                    </div>

                    {/* Custom added blocks */}
                    {renderCustomBlocks("insideLeft")}
                  </div>
                  <div className="text-xs text-foreground/40 font-mono mt-4 pt-4 border-t border-white/5">
                    Pág 1 / Cara Interna
                  </div>
                </div>

                {/* Outside Solapa (Cara Exterior - Solapa Interna: Análisis del consumidor) */}
                <div className={`panel-side-back w-full h-full glass-panel rounded-r-2xl p-8 flex flex-col justify-between overflow-y-auto bg-black/40 transition-opacity duration-500 ${isOpen && isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="mb-6">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-2`}>
                          <Sparkles className="w-3.5 h-3.5" />
                          <EditableField contentKey="solapaTag" element="span" defaultSize={12} />
                        </div>
                      </div>

                      {/* Descriptive Image: Consumidor */}
                      <EditableImage 
                        contentKey="solapaImage" 
                        alt="Análisis del consumidor" 
                        className="rounded-xl border border-white/10" 
                        defaultHeight={128} 
                      />

                      <EditableField contentKey="solapaTitle" element="h3" className="text-2xl font-bold tracking-tight mb-4 text-center" defaultSize={22} />
                      <EditableField contentKey="solapaDesc" element="p" className="text-[11px] text-foreground/70 leading-relaxed mb-6" defaultSize={11} />
                      <EditableField contentKey="solapaButton" element="p" className="text-[11px] text-foreground/60 italic leading-relaxed border-l-2 border-purple-500/50 pl-3 mt-4 whitespace-pre-line" defaultSize={11} />

                      {/* Custom added blocks */}
                      {renderCustomBlocks("solapa")}
                    </div>

                    <div className="text-xs text-foreground/40 font-mono mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                      <span>Solapa Interna</span>
                      <span>Cara Externa</span>
                    </div>
                  </div>
                </div>

                {/* Simulated page fold shadow */}
                <div className="fold-shadow-left"></div>
              </div>

              {/* PANEL 2: CENTER PANEL (Inside Center [Pág 2] / Outside Contraportada) */}
              <div 
                className="panel-container w-full h-full absolute top-0 left-[33.333333%]"
                style={{
                  width: "33.333333%",
                  zIndex: 20
                }}
              >
                {/* Inside Center (Página 2: Previsión de la demanda) */}
                <div className={`panel-side-front w-full h-full glass-panel p-8 flex flex-col justify-between overflow-y-auto transition-opacity duration-500 ${isOpen && !isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <div>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-2`}>
                        <Cpu className="w-3.5 h-3.5" />
                        <EditableField contentKey="insideCenterTag" element="span" defaultSize={12} />
                      </div>
                    </div>

                    {/* Descriptive Image: Demanda */}
                    <EditableImage 
                      contentKey="insideCenterImage" 
                      alt="Previsión de la demanda" 
                      className="rounded-xl border border-white/10" 
                      defaultHeight={128} 
                    />

                    <EditableField contentKey="insideCenterTitle" element="h3" className="text-2xl font-bold tracking-tight mb-4 text-center" defaultSize={22} />
                    <EditableField contentKey="insideCenterDesc" element="p" className="text-[11px] text-foreground/70 leading-relaxed mb-6" defaultSize={11} />

                    {/* Stats / Characteristics */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1.5 w-full text-inherit leading-relaxed">
                          <EditableField contentKey="insideCenterStat1Label" element="span" defaultSize={11} />
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${getGradient("primary")} rounded-full`} style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] mb-1.5 w-full text-inherit leading-relaxed">
                          <EditableField contentKey="insideCenterStat2Label" element="span" defaultSize={11} />
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${getGradient("secondary")} rounded-full`} style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-semibold mb-1 w-full text-inherit leading-relaxed">
                          <EditableField contentKey="insideCenterStat3Label" element="span" defaultSize={11} className="italic text-cyan-400" />
                        </div>
                      </div>
                    </div>

                    {/* Custom added blocks */}
                    {renderCustomBlocks("insideCenter")}
                  </div>
                  <div className="text-xs text-foreground/40 font-mono mt-4 pt-4 border-t border-white/5">
                    Pág 2 / Cara Interna
                  </div>
                </div>

                {/* Outside Contraportada (Cara Exterior - Centro / Parte de atrás - CREDENCIALES UVM & APA REFERENCES) */}
                <div className={`panel-side-back w-full h-full glass-panel p-6 flex flex-col justify-between overflow-y-auto bg-black/25 transition-opacity duration-500 ${isOpen && isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <div>
                    <EditableImage 
                      contentKey="contraImage" 
                      alt="Credenciales académicas" 
                      className="rounded-full border border-white/10 shadow-lg shadow-purple-500/10" 
                      defaultHeight={80} 
                      isRound={true} 
                    />

                    <EditableField contentKey="contraTitle" element="h3" className="text-lg font-bold tracking-tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500" defaultSize={16} />
                    
                    <div className="space-y-2 text-center text-xs">
                      <div className="font-extrabold text-foreground/95">
                        <EditableField contentKey="contraEmail" element="div" defaultSize={14} />
                      </div>
                      <div className="text-foreground/80 font-medium">
                        <EditableField contentKey="contraPhone" element="div" defaultSize={11} />
                      </div>
                      <div className="text-cyan-400 font-semibold">
                        <EditableField contentKey="contraAddress" element="div" defaultSize={11} />
                      </div>
                      <div className="text-[10px] text-foreground/50 border-t border-white/10 pt-2 mt-2">
                        <span className="block mb-0.5 text-[8px] font-extrabold uppercase tracking-widest text-foreground/40">Asignatura</span>
                        <div className="font-semibold text-foreground leading-relaxed px-2">
                          <EditableField contentKey="contraQRLabel" element="div" defaultSize={11} />
                        </div>
                      </div>
                    </div>

                    {/* Custom blocks list (Used for APA References) */}
                    {renderCustomBlocks("contra")}
                  </div>

                  <div className="text-xs text-foreground/40 font-mono mt-4 pt-2 border-t border-white/5 flex justify-between">
                    <span>Contraportada</span>
                    <span>Cara Externa</span>
                  </div>
                </div>
              </div>

              {/* PANEL 3: RIGHT PANEL (Inside Right [Pág 3] / Outside Portada) */}
              <div 
                className={`panel-container panel-right-fold w-full h-full absolute top-0 left-[66.666666%]`}
                style={{
                  width: "33.333333%",
                  transform: isOpen ? "rotateY(0deg)" : "rotateY(-140deg)",
                  zIndex: isOpen ? 10 : 35
                }}
              >
                {/* Inside Right (Página 3: El plan de comercialización) */}
                <div className={`panel-side-front w-full h-full glass-panel rounded-r-2xl p-8 flex flex-col justify-between overflow-y-auto transition-opacity duration-500 ${isOpen && !isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <div>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-2`}>
                        <Shield className="w-3.5 h-3.5" />
                        <EditableField contentKey="insideRightTag" element="span" defaultSize={12} />
                      </div>
                    </div>

                    {/* Descriptive Image: Comercialización */}
                    <EditableImage 
                      contentKey="insideRightImage" 
                      alt="Plan de comercialización" 
                      className="rounded-xl border border-white/10" 
                      defaultHeight={128} 
                    />

                    <EditableField contentKey="insideRightTitle" element="h3" className="text-2xl font-bold tracking-tight mb-4 text-center" defaultSize={22} />
                    <EditableField contentKey="insideRightDesc" element="p" className="text-[11px] text-foreground/70 leading-relaxed mb-6" defaultSize={11} />

                    {/* Marketing Mix Box */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative mb-2">
                      <EditableField contentKey="insideRightQuote" element="p" className="text-[11px] font-medium text-foreground/85 leading-relaxed mb-3" defaultSize={11} />
                      <div className="text-right">
                        <EditableField contentKey="insideRightQuoteAuthor" element="span" className="text-[10px] font-bold tracking-wider text-cyan-400 italic" defaultSize={10} />
                      </div>
                    </div>

                    {/* Custom added blocks */}
                    {renderCustomBlocks("insideRight")}
                  </div>

                  <div className="text-xs text-foreground/40 font-mono mt-4 pt-4 border-t border-white/5">
                    Pág 3 / Cara Interna
                  </div>
                </div>

                {/* Outside Portada (Cara Exterior - Portada Principal: Definición del bien a producir) */}
                <div 
                  className={`panel-side-back w-full h-full glass-panel rounded-l-2xl p-8 flex flex-col justify-between overflow-y-auto relative cursor-pointer transition-opacity duration-500 ${!isOpen || (isOpen && isFlipped) ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                  onClick={() => {
                    if (!isOpen && !isEditing) setIsOpen(true);
                  }}
                >
                  {/* Decorative glowing gradient circle on cover */}
                  <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${getGradient("primary")} opacity-30 blur-2xl pointer-events-none`}></div>

                  <div className="flex flex-col h-full justify-between z-10">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${getGradient("primary")}`} />
                        <EditableField contentKey="portadaTag" element="span" className="text-xs font-bold tracking-wider uppercase opacity-85" defaultSize={12} />
                      </div>
                    </div>

                    {/* Descriptive Image: Portada */}
                    <EditableImage 
                      contentKey="portadaImage" 
                      alt="Definición del bien a producir" 
                      className="rounded-xl border border-white/10 shadow-lg shadow-cyan-500/10" 
                      defaultHeight={144} 
                    />

                    <div className="my-auto py-4 text-center">
                      <EditableField contentKey="portadaTitle" element="h2" className="text-3xl font-extrabold tracking-tight leading-tight mb-3" defaultSize={26} />
                      <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 rounded-full mx-auto"></div>
                      <EditableField contentKey="portadaSubtitle" element="p" className="text-xs text-foreground/60 leading-relaxed mb-4" defaultSize={12} />
                      <EditableField contentKey="portadaEdition" element="p" className="text-[11px] text-cyan-400/90 italic border-t border-white/5 pt-3 whitespace-pre-line text-left leading-relaxed font-sans" defaultSize={11} />
                      
                      {/* Custom added blocks */}
                      {renderCustomBlocks("portada")}
                    </div>

                    <div className="flex flex-col gap-2">
                      {!isOpen && (
                        <div className={`animate-pulse inline-flex items-center gap-1 text-xs font-semibold bg-white/10 border border-white/10 text-white rounded-xl py-2 px-3 justify-center`}>
                          <span>Haz clic para abrir</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <div className="text-[10px] text-foreground/40 font-mono flex justify-between items-center">
                        <span>PORTADA PRINCIPAL</span>
                        <span>Cara Externa</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated page fold shadow */}
                <div className="fold-shadow-right"></div>
              </div>

            </div>
          </div>
        </div>

        {/* Drag handle to resize height (visible on desktop) */}
        <div 
          onMouseDown={startResize}
          className={`hidden lg:flex w-full max-w-[90vw] h-7 items-center justify-center cursor-ns-resize group/handle mt-3 relative select-none z-20 ${
            isResizing ? "bg-cyan-500/10 rounded-lg border border-cyan-500/20" : ""
          }`}
          title="Arrastra hacia abajo para ajustar la altura del tríptico"
        >
          {/* Grab indicator line */}
          <div className="w-1/3 h-1 bg-white/10 dark:bg-white/5 rounded-full group-hover/handle:bg-cyan-500/50 transition duration-300 relative flex items-center justify-center">
            <div className="absolute px-2.5 py-0.5 rounded-lg bg-zinc-950 border border-white/10 text-[9px] font-mono text-cyan-400 opacity-0 group-hover/handle:opacity-100 transition-opacity duration-300 pointer-events-none -top-6">
              Altura actual: {height}px (Arrastra para cambiar)
            </div>
            {/* Horizontal dots indicator */}
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 group-hover/handle:bg-cyan-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 group-hover/handle:bg-cyan-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 group-hover/handle:bg-cyan-400"></div>
            </div>
          </div>
        </div>


        {/* MOBILE RESPONSIVE TABS VIEW */}
        <div className="block lg:hidden w-full max-w-md mx-auto z-10 px-2">
          {/* Tab Selection */}
          <div className="flex bg-white/5 border border-white/10 rounded-xl p-1 mb-4">
            <button 
              onClick={() => setIsFlipped(false)} 
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${!isFlipped ? "bg-white text-black" : "text-foreground/75"}`}
            >
              Interior (Contenido)
            </button>
            <button 
              onClick={() => setIsFlipped(true)} 
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${isFlipped ? "bg-white text-black" : "text-foreground/75"}`}
            >
              Exterior (Portada/Info)
            </button>
          </div>

          {/* Carousel Panels */}
          <div className="space-y-4">
            {!isFlipped ? (
              // Inside pages
              <div className="grid grid-cols-1 gap-4">
                {/* Panel 1 */}
                <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-4`}>
                      <Compass className="w-3.5 h-3.5" />
                      <EditableField contentKey="insideLeftTag" element="span" defaultSize={12} />
                    </div>
                    <EditableField contentKey="insideLeftTitle" element="h3" className="text-xl font-bold tracking-tight mb-2" defaultSize={20} />
                    <img src={content.insideLeftImage} alt="Análisis de la competencia" className="w-full h-32 object-cover rounded-xl border border-white/10 mb-4" />
                    <EditableField contentKey="insideLeftDesc" element="p" className="text-xs text-foreground/70 leading-relaxed mb-4" defaultSize={12} />
                    <div className="space-y-2">
                      <EditableField contentKey="insideLeftBullet1Title" element="h4" className="text-sm font-semibold" defaultSize={14} />
                      <EditableField contentKey="insideLeftBullet1Desc" element="p" className="text-[11px] text-foreground/60 leading-relaxed" defaultSize={11} />
                    </div>
                    
                    {/* Custom Blocks */}
                    {renderCustomBlocks("insideLeft")}
                  </div>
                </div>

                {/* Panel 2 */}
                <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-4`}>
                      <Cpu className="w-3.5 h-3.5" />
                      <EditableField contentKey="insideCenterTag" element="span" defaultSize={12} />
                    </div>
                    <EditableField contentKey="insideCenterTitle" element="h3" className="text-xl font-bold tracking-tight mb-4" defaultSize={20} />
                    <img src={content.insideCenterImage} alt="Previsión de la demanda" className="w-full h-32 object-cover rounded-xl border border-white/10 mb-4" />
                    <EditableField contentKey="insideCenterDesc" element="p" className="text-xs text-foreground/70 mb-4 leading-relaxed" defaultSize={11} />
                    <div className="space-y-2">
                      <EditableField contentKey="insideCenterStat1Label" element="div" className="text-[11px] text-foreground/80 leading-relaxed" defaultSize={11} />
                      <EditableField contentKey="insideCenterStat2Label" element="div" className="text-[11px] text-foreground/80 leading-relaxed" defaultSize={11} />
                    </div>

                    {/* Custom Blocks */}
                    {renderCustomBlocks("insideCenter")}
                  </div>
                </div>

                {/* Panel 3 */}
                <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-4`}>
                      <Shield className="w-3.5 h-3.5" />
                      <EditableField contentKey="insideRightTag" element="span" defaultSize={12} />
                    </div>
                    <EditableField contentKey="insideRightTitle" element="h3" className="text-xl font-bold tracking-tight mb-2" defaultSize={20} />
                    <img src={content.insideRightImage} alt="Plan de comercialización" className="w-full h-32 object-cover rounded-xl border border-white/10 mb-4" />
                    <EditableField contentKey="insideRightDesc" element="p" className="text-xs text-foreground/70 leading-relaxed mb-4" defaultSize={11} />
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-3">
                      <EditableField contentKey="insideRightQuote" element="p" className="text-xs italic text-foreground/85 leading-relaxed" defaultSize={11} />
                    </div>

                    {/* Custom Blocks */}
                    {renderCustomBlocks("insideRight")}
                  </div>
                </div>
              </div>
            ) : (
              // Outside pages
              <div className="grid grid-cols-1 gap-4">
                {/* Portada */}
                <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
                  <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${getGradient("primary")} opacity-30 blur-2xl pointer-events-none`}></div>
                  <div className="flex justify-between items-center">
                    <EditableField contentKey="portadaTag" element="span" className="text-xs font-bold tracking-wider uppercase opacity-85" defaultSize={12} />
                  </div>
                  <div className="my-auto py-6">
                    <EditableField contentKey="portadaTitle" element="h2" className="text-2xl font-extrabold tracking-tight leading-tight mb-2" defaultSize={26} />
                    <img src={content.portadaImage} alt="Definición del bien" className="w-full h-32 object-cover rounded-xl border border-white/10 mb-4" />
                    <EditableField contentKey="portadaSubtitle" element="p" className="text-xs text-foreground/60 leading-relaxed" defaultSize={12} />
                    <EditableField contentKey="portadaEdition" element="p" className="text-[11px] text-cyan-400/90 italic mt-2 whitespace-pre-line" defaultSize={11} />
                    
                    {/* Custom Blocks */}
                    {renderCustomBlocks("portada")}
                  </div>
                </div>

                {/* Contraportada (Hoja de enmedio) */}
                <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <span className="text-[10px] font-mono opacity-50 px-2 py-0.5 rounded border border-white/10 float-right font-semibold">ATRÁS</span>
                    <EditableField contentKey="contraTitle" element="h3" className="text-lg font-bold tracking-tight mb-4" defaultSize={18} />
                    <div className="flex justify-center mb-4">
                      <img src={content.contraImage} alt="Credenciales académicas" className="w-16 h-16 object-cover rounded-full border border-white/10 shadow-lg shadow-purple-500/10" />
                    </div>
                    
                    <div className="space-y-4 mt-6 text-sm text-foreground/80">
                      <div className="font-bold border-b border-white/5 pb-2">
                        <EditableField contentKey="contraEmail" element="div" defaultSize={16} />
                      </div>
                      <div>
                        <EditableField contentKey="contraPhone" element="div" defaultSize={14} />
                      </div>
                      <div className="text-cyan-400 font-medium">
                        <EditableField contentKey="contraAddress" element="div" defaultSize={14} />
                      </div>
                      <div className="text-xs text-foreground/50 border-t border-white/10 pt-4 mt-4">
                        <span className="block mb-1 text-[9px] font-bold uppercase tracking-wider text-foreground/40">Asignatura</span>
                        <EditableField contentKey="contraQRLabel" element="div" defaultSize={12} />
                      </div>
                    </div>

                    {/* Custom Blocks */}
                    {renderCustomBlocks("contra")}
                  </div>
                </div>

                {/* Solapa */}
                <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <EditableField contentKey="solapaTag" element="span" className="text-[10px] font-mono opacity-50 px-2 py-0.5 rounded border border-white/10 float-right" defaultSize={10} />
                    <EditableField contentKey="solapaTitle" element="h3" className="text-lg font-bold tracking-tight mb-2" defaultSize={18} />
                    <img src={content.solapaImage} alt="Análisis del consumidor" className="w-full h-32 object-cover rounded-xl border border-white/10 mb-4" />
                    <EditableField contentKey="solapaDesc" element="p" className="text-sm text-foreground/70 leading-relaxed mb-4" defaultSize={14} />
                    <EditableField contentKey="solapaButton" element="p" className="text-xs text-foreground/60 italic leading-relaxed mt-2 whitespace-pre-line" defaultSize={12} />

                    {/* Custom Blocks */}
                    {renderCustomBlocks("solapa")}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </main>

      {/* PRINT-ONLY AREA */}
      <div className="print-only-container hidden print:block w-full text-zinc-100 bg-[#09090b] font-sans p-0 m-0">
        
        {/* PAGE 1: CARA INTERNA (Inside Face) */}
        <div className="print-page w-full h-[100vh] grid grid-cols-3 gap-6 p-8 bg-[#09090b]" style={{ pageBreakAfter: "always" }}>
          
          {/* Panel 1: Análisis de la Competencia */}
          <div className="border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-full bg-white/5 backdrop-blur-md overflow-hidden">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 mb-2">Etapa 3 - Cara Interna</div>
              <h3 className="text-lg font-bold text-white mb-2">Análisis de la competencia</h3>
              <img src={content.insideLeftImage} alt="Análisis de la competencia" className="w-full h-20 object-cover rounded-xl border border-white/10 mb-3" />
              <p className="text-[9px] text-zinc-300 mb-3 leading-relaxed whitespace-pre-line">{content.insideLeftDesc}</p>
              <div className="border-t border-white/10 pt-2 mt-2">
                <h4 className="text-[10px] font-bold text-white mb-0.5">{content.insideLeftBullet1Title}</h4>
                <p className="text-[8px] text-zinc-400 leading-relaxed whitespace-pre-line">{content.insideLeftBullet1Desc}</p>
              </div>
              <div className="border-t border-white/10 pt-2 mt-2">
                <h4 className="text-[10px] font-bold text-white mb-0.5">{content.insideLeftBullet2Title}</h4>
                <p className="text-[8px] text-zinc-400 leading-relaxed whitespace-pre-line">{content.insideLeftBullet2Desc}</p>
              </div>
            </div>
            <div className="text-[8px] text-zinc-500 font-mono border-t border-white/10 pt-1 mt-2">Pág 1 / Cara Interna</div>
          </div>

          {/* Panel 2: Previsión de la Demanda */}
          <div className="border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-full bg-white/5 backdrop-blur-md overflow-hidden">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 mb-2">Etapa 4 - Cara Interna</div>
              <h3 className="text-lg font-bold text-white mb-2">Previsión de la demanda</h3>
              <img src={content.insideCenterImage} alt="Previsión de la demanda" className="w-full h-20 object-cover rounded-xl border border-white/10 mb-3" />
              <p className="text-[9px] text-zinc-300 mb-3 leading-relaxed whitespace-pre-line">{content.insideCenterDesc}</p>
              <div className="space-y-2 border-t border-white/10 pt-2 mt-2">
                <p className="text-[8px] text-zinc-400 leading-relaxed"><span className="font-bold text-white">Cualitativo:</span> {content.insideCenterStat1Label}</p>
                <p className="text-[8px] text-zinc-400 leading-relaxed"><span className="font-bold text-white">Cuantitativo:</span> {content.insideCenterStat2Label}</p>
                <p className="text-[8px] text-cyan-300 font-semibold italic bg-white/5 p-2 rounded-lg border border-white/5">{content.insideCenterStat3Label}</p>
              </div>
            </div>
            <div className="text-[8px] text-zinc-500 font-mono border-t border-white/10 pt-1 mt-2">Pág 2 / Cara Interna</div>
          </div>

          {/* Panel 3: El Plan de Comercialización */}
          <div className="border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-full bg-white/5 backdrop-blur-md overflow-hidden">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 mb-2">Etapa 5 - Cara Interna</div>
              <h3 className="text-lg font-bold text-white mb-2">El plan de comercialización</h3>
              <img src={content.insideRightImage} alt="Plan de comercialización" className="w-full h-20 object-cover rounded-xl border border-white/10 mb-3" />
              <p className="text-[9px] text-zinc-300 mb-3 leading-relaxed whitespace-pre-line">{content.insideRightDesc}</p>
              <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                <p className="text-[8px] text-zinc-200 leading-relaxed font-medium mb-1">{content.insideRightQuote}</p>
                <p className="text-[7px] text-cyan-400 font-bold text-right italic">{content.insideRightQuoteAuthor}</p>
              </div>
            </div>
            <div className="text-[8px] text-zinc-500 font-mono border-t border-white/10 pt-1 mt-2">Pág 3 / Cara Interna</div>
          </div>
        </div>

        {/* PAGE 2: CARA EXTERNA (Outside Face) */}
        <div className="print-page w-full h-[100vh] grid grid-cols-3 gap-6 p-8 bg-[#09090b]">
          
          {/* Panel 1: Solapa - Análisis del Consumidor */}
          <div className="border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-full bg-white/5 backdrop-blur-md overflow-hidden">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-purple-400 mb-2">Etapa 2 - Solapa Interna</div>
              <h3 className="text-lg font-bold text-white mb-2">Análisis del consumidor</h3>
              <img src={content.solapaImage} alt="Análisis del consumidor" className="w-full h-20 object-cover rounded-xl border border-white/10 mb-3" />
              <p className="text-[9px] text-zinc-300 mb-3 leading-relaxed whitespace-pre-line">{content.solapaDesc}</p>
              <p className="text-[8px] text-zinc-400 italic border-l-2 border-purple-500/50 pl-2 mt-2 whitespace-pre-line">{content.solapaButton}</p>
            </div>
            <div className="text-[8px] text-zinc-500 font-mono border-t border-white/10 pt-1 mt-2">Solapa / Cara Externa</div>
          </div>

          {/* Panel 2: Contraportada - Credenciales UVM y Referencias */}
          <div className="border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-full bg-white/5 backdrop-blur-md text-center overflow-hidden">
            <div>
              <div className="flex justify-center mb-2">
                <img src={content.contraImage} alt="Credenciales académicas" className="w-12 h-12 object-cover rounded-full border border-white/10 shadow-md" />
              </div>
              <h3 className="text-sm font-bold text-white mb-0.5">{content.contraTitle}</h3>
              <p className="text-[10px] font-extrabold text-white">{content.contraEmail}</p>
              <p className="text-[9px] text-zinc-300">{content.contraPhone}</p>
              <p className="text-[9px] text-cyan-400 font-semibold mb-1">{content.contraAddress}</p>
              <p className="text-[8px] text-zinc-500 border-t border-white/10 pt-1 mt-1 mb-2">{content.contraQRLabel}</p>
              
              {/* Referencias APA */}
              <div className="text-left border-t border-white/10 pt-2">
                <h4 className="text-[9px] font-bold text-white mb-1">Referencias Bibliográficas (APA):</h4>
                <p className="text-[7.5px] text-zinc-400 leading-normal mb-1">Meza, J. (2013). Evaluación financiera de proyectos: 10 casos prácticos resueltos en Excel. [Archivo PDF]. Recuperado de http://190.57.147.202:90/jspui/bitstream/123456789/1402/1/Evaluaci%C3%B3n%20financiera%20de%20proyectos.pdf</p>
                <p className="text-[7.5px] text-zinc-400 leading-normal">Mondragon, D. (2017). Formulación y evaluación de proyectos. [Archivo PDF]. Recuperado de https://digitk.areandina.edu.co/bitstream/handle/areandina/1318/Formulaci%C3%B3n%20y%20Evaluaci%C3%B3n%20de%20Proyectos.pdf?sequence=1</p>
              </div>
            </div>
            <div className="text-[8px] text-zinc-500 font-mono border-t border-white/10 pt-1 mt-2 text-left">Contraportada / Cara Externa</div>
          </div>

          {/* Panel 3: Portada - Definición del Bien */}
          <div className="border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-full bg-white/5 backdrop-blur-md overflow-hidden">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 mb-2">Etapa 1 - Portada Principal</div>
              <h2 className="text-xl font-extrabold text-white mb-2">{content.portadaTitle}</h2>
              <div className="w-12 h-0.5 bg-cyan-400 mb-3 rounded-full"></div>
              <img src={content.portadaImage} alt="Definición del bien" className="w-full h-20 object-cover rounded-xl border border-white/10 mb-3 shadow-md" />
              <p className="text-[9px] text-zinc-300 mb-2 leading-relaxed">{content.portadaSubtitle}</p>
              <p className="text-[8px] text-zinc-400 border-t border-white/10 pt-2 mt-2 whitespace-pre-line text-left leading-relaxed">{content.portadaEdition}</p>
            </div>
            <div className="text-[8px] text-zinc-500 font-mono border-t border-white/10 pt-1 mt-2">Portada / Cara Externa</div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/5 text-xs text-foreground/40 z-10 print:hidden">
        <div>
          <span>Desarrollado para fines académicos y de demostración. © 2026.</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-foreground transition flex items-center gap-1">
            <Monitor className="w-3.5 h-3.5" />
            <span>Escalado: {Math.round(scale * 100)}% | Altura: {height}px | Vista de Escritorio recomendada</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
