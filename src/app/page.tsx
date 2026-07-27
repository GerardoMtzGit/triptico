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
  
  // Contraportada (Outside Center) -> Credenciales UVM
  contraTitle: string;
  contraEmail: string; // Used for Student Name
  contraPhone: string; // Used for Program Name
  contraAddress: string; // Used for University Name
  contraQRLabel: string; // Used for Course Name
  
  // Solapa (Outside Left) -> Análisis del consumidor
  solapaTag: string;
  solapaTitle: string;
  solapaDesc: string;
  solapaButton: string;

  // Inside Left (Pag 1) -> Análisis de la competencia
  insideLeftTag: string;
  insideLeftTitle: string;
  insideLeftDesc: string;
  insideLeftBullet1Title: string;
  insideLeftBullet1Desc: string;
  insideLeftBullet2Title: string;
  insideLeftBullet2Desc: string;

  // Inside Center (Pag 2) -> Previsión de la demanda
  insideCenterTag: string;
  insideCenterTitle: string;
  insideCenterDesc: string;
  insideCenterStat1Label: string;
  insideCenterStat2Label: string;
  insideCenterStat3Label: string;

  // Inside Right (Pag 3) -> El plan de comercialización
  insideRightTag: string;
  insideRightTitle: string;
  insideRightDesc: string;
  insideRightQuote: string;
  insideRightQuoteAuthor: string;
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

  // Brochure Text Content State (Extended with comprehensive explanations and examples)
  const [content, setContent] = useState<BrochureContent>({
    // Cara Exterior - Portada (Derecha) -> Definición del bien a producir
    portadaTag: "Etapa 1 - Estudio de Mercado",
    portadaTitle: "Definición del bien a producir",
    portadaSubtitle: "Consiste en la caracterización exacta, técnica y comercial del producto o servicio que se pretende introducir en el mercado. Esta definición establece el punto de partida del proyecto al clarificar la naturaleza física, funcional y legal del bien, asegurando que cubra una necesidad específica identificada en el mercado.",
    portadaEdition: "CARACTERÍSTICAS:\n1. Especificaciones Técnicas: Dimensiones, materiales, peso, envase, empaque y vida útil.\n2. Propuesta de Valor y Usos: Identificación del factor diferenciador y beneficios clave.\n3. Normativas y Patentes: Requisitos legales, registros sanitarios y patentes.\n\nEJEMPLO: Un termo inteligente fabricado con acero de grado alimenticio, con pantalla LED de temperatura en tiempo real y patente de aislamiento de doble pared que mantiene bebidas calientes por 12 horas.",
    
    // Cara Exterior - Contraportada (Centro) -> Credenciales UVM
    contraTitle: "Actividad 1. Infografía",
    contraEmail: "Gerardo Antonio Martínez García",
    contraPhone: "Maestría en Inteligencia Artificial",
    contraAddress: "Universidad del Valle de México (UVM)",
    contraQRLabel: "Evaluación financiera y análisis de costos y riesgos",
    
    // Cara Exterior - Solapa Interna (Izquierda) -> Análisis del consumidor
    solapaTag: "Etapa 2",
    solapaTitle: "Análisis del consumidor",
    solapaDesc: "Es el estudio sistemático del comportamiento, necesidades, motivaciones, hábitos de compra y niveles de satisfacción del público objetivo. Permite a las empresas orientar sus esfuerzos comerciales hacia los clientes más rentables y ajustar su propuesta de valor a las demandas reales.",
    solapaButton: "CARACTERÍSTICAS:\n1. Segmentación del Mercado: División del mercado por variables demográficas, geográficas y psicográficas.\n2. Perfil del Consumidor (Buyer Persona): Creación de un arquetipo detallado del cliente ideal y sus necesidades.\n3. Comportamiento y Hábitos de Compra: Análisis del proceso de decisión de compra y frecuencia de adquisición.\n\nEJEMPLO: Para una aplicación de fitness, el consumidor objetivo son profesionales urbanos de 25 a 45 años, con ingresos medios-altos, bajo alto estrés laboral y que prefieren rutinas cortas de 20 minutos en casa sin equipo.",

    // Inside Left (Página 1) -> Análisis de la competencia
    insideLeftTag: "Etapa 3",
    insideLeftTitle: "Análisis de la competencia",
    insideLeftDesc: "Es la evaluación estructurada de las empresas que ofrecen productos similares (competencia directa) o sustitutos (competencia indirecta) en el mismo mercado geográfico y demográfico. Sirve para identificar sus capacidades, estrategias, fortalezas y debilidades.",
    insideLeftBullet1Title: "Características Clave:",
    insideLeftBullet1Desc: "1. Benchmarking de Atributos: Comparación de características, calidad, servicio al cliente y canales.\n2. Estrategia de Precios: Análisis de sus esquemas de descuento, políticas de crédito y márgenes de ganancia.\n3. Barreras de Entrada: Evaluación de patentes, de economías de escala y lealtad a la marca ya establecida.",
    insideLeftBullet2Title: "Ejemplo Práctico:",
    insideLeftBullet2Desc: "Una nueva cafetería artesanal analiza a Starbucks (competencia directa), reconociendo su fortaleza en conveniencia y estatus de marca, pero su debilidad en café industrial estandarizado. La cafetería local decide diferenciarse ofreciendo café de origen único de especialidad con tostado local.",

    // Inside Center (Página 2) -> Previsión de la demanda
    insideCenterTag: "Etapa 4",
    insideCenterTitle: "Previsión de la demanda",
    insideCenterDesc: "Consiste en estimar científicamente la cantidad futura de un bien o servicio que los consumidores estarán dispuestos a adquirir en un periodo determinado y bajo condiciones de mercado específicas, permitiendo planificar la producción y flujos financieros.",
    insideCenterStat1Label: "Métodos Cualitativos: Encuestas de intención de compra del consumidor, opinión de la fuerza de ventas y el Método Delphi.",
    insideCenterStat2Label: "Métodos Cuantitativos: Modelos de series de tiempo (promedios móviles, suavizamiento) y modelos causales de regresión lineal.",
    insideCenterStat3Label: "EJEMPLO: Una fábrica de abrigos proyecta un alza del 40% en ventas cruzando datos de temperatura invernal pronosticada e intención de compra en otoño, optimizando así la compra de lanas y turnos de costura.",

    // Inside Right (Página 3) -> El plan de comercialización
    insideRightTag: "Etapa 5",
    insideRightTitle: "El plan de comercialización",
    insideRightDesc: "Es el conjunto de estrategias, canales y acciones comerciales dirigidas a colocar el bien o servicio en manos del consumidor final en las condiciones óptimas, al precio correcto y con la comunicación adecuada para maximizar ventas.",
    insideRightQuote: "El Marketing Mix (Las 4Ps): Producto (marca, diseño, postventa), Precio (descuentos, costos), Plaza (canales físicos o e-commerce directo) y Promoción (publicidad digital, redes sociales, relaciones públicas).",
    insideRightQuoteAuthor: "EJEMPLO: Para un software SaaS contable, el plan integra una aplicación en la nube (Producto), con suscripción mensual escalable (Precio), distribución directa vía descarga web (Plaza) y una campaña en LinkedIn junto con pruebas gratuitas de 14 días (Promoción).",
  });

  // Default font sizes map (key -> size in pixels)
  const [fontSizes, setFontSizes] = useState<Record<string, number>>({});

  // Pre-populated custom blocks (Updated to only show the two requested references)
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
              ? "outline-dashed outline-2 outline-cyan-500/70 px-1.5 py-0.5 rounded bg-white/5 dark:bg-black/20 cursor-text hover:bg-white/10" 
              : "transition-all duration-300"
          }`}
        >
          {value}
        </Element>
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
                        ? "outline-dashed outline-2 outline-cyan-500/70 px-1.5 py-0.5 rounded bg-white/5 dark:bg-black/20 cursor-text hover:bg-white/10" 
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-blue-600/10 to-indigo-500/5 blur-[120px] glow-bg"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-purple-600/10 to-pink-500/5 blur-[140px] glow-bg" style={{ animationDelay: "-3s" }}></div>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-4 mb-8 z-10">
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
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
              !isOpen 
                ? "opacity-40 cursor-not-allowed border-transparent text-foreground/40" 
                : "border-white/10 hover:bg-white/10 text-foreground cursor-pointer"
            }`}
          >
            <RotateCw className="w-4 h-4" />
            <span>{isFlipped ? "Ver Interior" : "Girar Tríptico"}</span>
          </button>
        </div>
      </header>

      {/* Main View Area */}
      <main className="flex-1 w-full flex flex-col items-center justify-center py-4 z-10">
        
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

        {/* DESKTOP 3D BROCHURE VIEW */}
        <div 
          className="hidden lg:block w-full max-w-[90vw] brochure-viewport relative transition-all duration-150"
          style={{ height: `${height}px` }}
        >
          <div 
            className={`w-full h-full brochure-wrapper duration-1000 ${isOpen ? "" : "folded"}`}
            style={{
              transform: `scale(${scale}) rotateX(15deg) ${isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}`,
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
                    
                    {/* SVG Illustration: Competencia */}
                    <svg className="w-16 h-16 text-amber-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>

                    <EditableField contentKey="insideLeftTitle" element="h3" className="text-2xl font-bold tracking-tight mb-4 text-center" defaultSize={22} />
                    <EditableField contentKey="insideLeftDesc" element="p" className="text-xs text-foreground/70 leading-relaxed mb-6" defaultSize={12} />
                    
                    <div className="space-y-4">
                      <div className="flex gap-3 items-start">
                        <div className="mt-1 p-1 rounded bg-white/5 border border-white/10 text-amber-500">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="w-full">
                          <EditableField contentKey="insideLeftBullet1Title" element="h4" className="text-sm font-semibold" defaultSize={14} />
                          <EditableField contentKey="insideLeftBullet1Desc" element="p" className="text-[11px] text-foreground/60 leading-relaxed" defaultSize={11} />
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="mt-1 p-1 rounded bg-white/5 border border-white/10 text-amber-500">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="w-full">
                          <EditableField contentKey="insideLeftBullet2Title" element="h4" className="text-sm font-semibold" defaultSize={14} />
                          <EditableField contentKey="insideLeftBullet2Desc" element="p" className="text-[11px] text-foreground/60 leading-relaxed" defaultSize={11} />
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

                      {/* SVG Illustration: Consumidor */}
                      <svg className="w-16 h-16 text-purple-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>

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

                    {/* SVG Illustration: Demanda */}
                    <svg className="w-16 h-16 text-emerald-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>

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
                    <div className="flex justify-center mb-3">
                      <div className={`p-2.5 rounded-full bg-gradient-to-br ${getGradient("primary")} shadow-lg shadow-black/20`}>
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                    </div>

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

                    {/* Custom blocks list (APA References block - displays ONLY Meza & Mondragón) */}
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

                    {/* SVG Illustration: Comercialización */}
                    <svg className="w-16 h-16 text-cyan-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.22.927a3.75 3.75 0 005.13 2.19l.221-.096m-7.29-9.529l.067.284a3.75 3.75 0 004.912 2.697l.065-.022M9 10.5h.008V10.5H9zm6 3h.008v.008H15V13.5zm-6-3a2.25 2.25 0 00-2.25 2.25v1.318a2.25 2.25 0 002.25 2.25H15a2.25 2.25 0 002.25-2.25v-1.318a2.25 2.25 0 00-2.25-2.25H9z" />
                    </svg>

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

                    {/* SVG Illustration: Diseño del Bien */}
                    <svg className="w-20 h-20 text-cyan-400 mx-auto my-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>

                    <div className="my-auto py-4 text-center">
                      <EditableField contentKey="portadaTitle" element="h2" className="text-3xl font-extrabold tracking-tight leading-tight mb-3" defaultSize={26} />
                      <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 rounded-full mx-auto"></div>
                      <EditableField contentKey="portadaSubtitle" element="p" className="text-xs text-foreground/60 leading-relaxed mb-4" defaultSize={12} />
                      <EditableField contentKey="portadaEdition" element="p" className="text-[11px] text-cyan-400/90 italic border-t border-white/5 pt-3 whitespace-pre-line text-left leading-relaxed" defaultSize={11} />
                      
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

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/5 text-xs text-foreground/40 z-10">
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
