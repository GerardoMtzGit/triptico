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
  // Portada (Outside Right)
  portadaTitle: string;
  portadaSubtitle: string;
  portadaTag: string;
  portadaEdition: string;
  
  // Contraportada (Outside Center)
  contraTitle: string;
  contraEmail: string; // Used for Student Name
  contraPhone: string; // Used for Program Name
  contraAddress: string; // Used for University Name
  contraQRLabel: string; // Used for Course Name
  
  // Solapa (Outside Left)
  solapaTag: string;
  solapaTitle: string;
  solapaDesc: string;
  solapaButton: string;

  // Inside Left
  insideLeftTag: string;
  insideLeftTitle: string;
  insideLeftDesc: string;
  insideLeftBullet1Title: string;
  insideLeftBullet1Desc: string;
  insideLeftBullet2Title: string;
  insideLeftBullet2Desc: string;

  // Inside Center
  insideCenterTag: string;
  insideCenterTitle: string;
  insideCenterDesc: string;
  insideCenterStat1Label: string;
  insideCenterStat2Label: string;
  insideCenterStat3Label: string;

  // Inside Right
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

  // Brochure Text Content State (Populated for Gerardo's homework)
  const [content, setContent] = useState<BrochureContent>({
    portadaTitle: "ESTUDIO DE MERCADO",
    portadaSubtitle: "Conceptos principales y metodologías para el análisis y evaluación financiera de proyectos de inversión.",
    portadaTag: "UVM - MAESTRÍA IA",
    portadaEdition: "ACTIVIDAD 1",
    
    contraTitle: "Actividad 1. Infografía",
    contraEmail: "Gerardo Antonio Martínez García",
    contraPhone: "Maestría en Inteligencia Artificial",
    contraAddress: "Universidad del Valle de México (UVM)",
    contraQRLabel: "Evaluación financiera y análisis de costos y riesgos",
    
    solapaTag: "Bibliografía",
    solapaTitle: "Referencias APA",
    solapaDesc: "Listado de fuentes empleadas en el desarrollo de este estudio de mercado:",
    solapaButton: "Saber más",

    insideLeftTag: "Fase 1",
    insideLeftTitle: "Definición del Bien y Análisis del Consumidor",
    insideLeftDesc: "El punto de partida de todo estudio de mercado es la delimitación del producto o servicio y la comprensión del público objetivo.",
    insideLeftBullet1Title: "1. Definición del bien a producir",
    insideLeftBullet1Desc: "Consiste en la descripción exacta del producto o servicio: especificaciones técnicas, utilidad, empaque, patentes y el valor diferenciador que resolverá la necesidad identificada.",
    insideLeftBullet2Title: "2. Análisis del consumidor",
    insideLeftBullet2Desc: "Investiga quién compra, por qué, con qué frecuencia y cuáles son sus preferencias. Permite segmentar el mercado de forma demográfica, geográfica y conductual.",

    insideCenterTag: "Fase 2",
    insideCenterTitle: "Competencia y Previsión de la Demanda",
    insideCenterDesc: "Evaluación del entorno competitivo y estimación del comportamiento futuro de las ventas del proyecto.",
    insideCenterStat1Label: "3. Análisis de la competencia: Identificación de competidores, cuota de mercado, fortalezas, debilidades, precios y canales de distribución.",
    insideCenterStat2Label: "4. Previsión de la demanda: Estimación de ventas futuras usando datos históricos, métodos cualitativos (expertos) y cuantitativos.",
    insideCenterStat3Label: "Eficiencia y Viabilidad Comercial del Proyecto en el Mercado",

    insideRightTag: "Fase 3",
    insideRightTitle: "El Plan de Comercialización",
    insideRightDesc: "Estrategias de colocación e inserción del producto.",
    insideRightQuote: "Las 4Ps (Producto, Precio, Plaza y Promoción) definen el Plan de Comercialización. Determinan cómo el bien llegará al consumidor final y cómo se comunicará la propuesta de valor para asegurar el éxito del proyecto.",
    insideRightQuoteAuthor: "Estrategia del Marketing Mix",
  });

  // Default font sizes map (key -> size in pixels)
  const [fontSizes, setFontSizes] = useState<Record<string, number>>({});

  // Pre-populated custom blocks (references for Gerardo's homework)
  const [customBlocks, setCustomBlocks] = useState<Record<string, CustomBlock[]>>({
    insideLeft: [],
    insideCenter: [],
    insideRight: [],
    solapa: [
      {
        id: "ref1",
        type: "paragraph",
        text: "Baca Urbina, G. (2016). Evaluación de proyectos (8va ed.). McGraw-Hill Education.",
        fontSize: 12
      },
      {
        id: "ref2",
        type: "paragraph",
        text: "Kotler, P., & Keller, K. L. (2016). Dirección de marketing (15va ed.). Pearson Educación.",
        fontSize: 12
      },
      {
        id: "ref3",
        type: "paragraph",
        text: "Malhotra, N. K. (2020). Investigación de mercados: Conceptos esenciales (6ta ed.). Pearson.",
        fontSize: 12
      },
      {
        id: "ref4",
        type: "paragraph",
        text: "Nassir Sapag, C., & Sapag Chain, R. (2014). Preparación y evaluación de proyectos (6ta ed.). McGraw-Hill.",
        fontSize: 12
      },
      {
        id: "ref5",
        type: "paragraph",
        text: "Porter, M. E. (2015). Ventaja competitiva: Creación y sostenimiento de un desempeño superior (2da ed.). Patria.",
        fontSize: 12
      }
    ],
    contra: [],
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
                      block.type === "heading" ? "text-lg font-bold" : "text-sm text-foreground/70"
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
          className="hidden lg:block w-full max-w-[1080px] brochure-viewport relative transition-all duration-150"
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
              
              {/* PANEL 1: LEFT PANEL (Inside Left / Outside Solapa) */}
              <div 
                className={`panel-container panel-left-fold w-full h-full absolute top-0 left-0`}
                style={{
                  width: "33.333333%",
                  transform: isOpen ? "rotateY(0deg)" : "rotateY(140deg)",
                  zIndex: isOpen ? 10 : 30
                }}
              >
                {/* Inside Left (Cara Interior - Izquierda) */}
                <div className="panel-side-front w-full h-full glass-panel rounded-l-2xl p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-2`}>
                        <Compass className="w-3.5 h-3.5" />
                        <EditableField contentKey="insideLeftTag" element="span" defaultSize={12} />
                      </div>
                    </div>
                    <EditableField contentKey="insideLeftTitle" element="h3" className="text-2xl font-bold tracking-tight mb-4" defaultSize={22} />
                    <EditableField contentKey="insideLeftDesc" element="p" className="text-sm text-foreground/70 leading-relaxed mb-6" defaultSize={13} />
                    
                    <div className="space-y-4">
                      <div className="flex gap-3 items-start">
                        <div className="mt-1 p-1 rounded bg-white/5 border border-white/10 text-emerald-500">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="w-full">
                          <EditableField contentKey="insideLeftBullet1Title" element="h4" className="text-sm font-semibold" defaultSize={14} />
                          <EditableField contentKey="insideLeftBullet1Desc" element="p" className="text-xs text-foreground/60" defaultSize={12} />
                        </div>
                      </div>
                      <div className="flex gap-3 items-start">
                        <div className="mt-1 p-1 rounded bg-white/5 border border-white/10 text-emerald-500">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="w-full">
                          <EditableField contentKey="insideLeftBullet2Title" element="h4" className="text-sm font-semibold" defaultSize={14} />
                          <EditableField contentKey="insideLeftBullet2Desc" element="p" className="text-xs text-foreground/60" defaultSize={12} />
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

                {/* Outside Solapa (Cara Exterior - Flap Interno) */}
                <div className="panel-side-back w-full h-full glass-panel rounded-r-2xl p-8 flex flex-col justify-between overflow-y-auto bg-black/40">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="mb-6">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-2`}>
                          <Sparkles className="w-3.5 h-3.5" />
                          <EditableField contentKey="solapaTag" element="span" defaultSize={12} />
                        </div>
                      </div>
                      <EditableField contentKey="solapaTitle" element="h3" className="text-2xl font-bold tracking-tight mb-4" defaultSize={22} />
                      <EditableField contentKey="solapaDesc" element="p" className="text-sm text-foreground/70 leading-relaxed mb-6" defaultSize={13} />

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

              {/* PANEL 2: CENTER PANEL (Inside Center / Outside Contraportada) */}
              <div 
                className="panel-container w-full h-full absolute top-0 left-[33.333333%]"
                style={{
                  width: "33.333333%",
                  zIndex: 20
                }}
              >
                {/* Inside Center (Cara Interior - Centro) */}
                <div className="panel-side-front w-full h-full glass-panel p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-2`}>
                        <Cpu className="w-3.5 h-3.5" />
                        <EditableField contentKey="insideCenterTag" element="span" defaultSize={12} />
                      </div>
                    </div>
                    <EditableField contentKey="insideCenterTitle" element="h3" className="text-2xl font-bold tracking-tight mb-4" defaultSize={22} />
                    <EditableField contentKey="insideCenterDesc" element="p" className="text-sm text-foreground/70 leading-relaxed mb-6" defaultSize={13} />

                    {/* Stats labels */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1 w-full text-inherit">
                          <EditableField contentKey="insideCenterStat1Label" element="span" defaultSize={12} />
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${getGradient("primary")} rounded-full`} style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1 w-full text-inherit">
                          <EditableField contentKey="insideCenterStat2Label" element="span" defaultSize={12} />
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${getGradient("secondary")} rounded-full`} style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1 w-full text-inherit">
                          <EditableField contentKey="insideCenterStat3Label" element="span" defaultSize={12} />
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${getGradient("primary")} rounded-full`} style={{ width: "99%" }}></div>
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

                {/* Outside Contraportada (Cara Exterior - Centro / Parte de atrás - CREDENCIALES ACADÉMICAS) */}
                <div className="panel-side-back w-full h-full glass-panel p-8 flex flex-col justify-between overflow-y-auto bg-black/20">
                  <div className="my-auto">
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 rounded-full bg-gradient-to-br ${getGradient("primary")} shadow-lg shadow-black/20`}>
                        <GraduationCap className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    <EditableField contentKey="contraTitle" element="h3" className="text-2xl font-extrabold tracking-tight text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500" defaultSize={22} />
                    
                    <div className="space-y-5 text-center mt-6">
                      <div className="text-xl font-bold tracking-tight text-foreground/95 border-b border-white/5 pb-3">
                        <EditableField contentKey="contraEmail" element="div" defaultSize={18} />
                      </div>
                      <div className="text-sm font-semibold text-foreground/80">
                        <EditableField contentKey="contraPhone" element="div" defaultSize={14} />
                      </div>
                      <div className="text-sm font-medium text-cyan-400">
                        <EditableField contentKey="contraAddress" element="div" defaultSize={14} />
                      </div>
                      <div className="text-xs text-foreground/50 border-t border-white/10 pt-5 mt-5">
                        <span className="block mb-2 text-[10px] font-extrabold uppercase tracking-widest text-foreground/40">Asignatura</span>
                        <div className="font-semibold text-foreground leading-relaxed px-4">
                          <EditableField contentKey="contraQRLabel" element="div" defaultSize={13} />
                        </div>
                      </div>
                    </div>

                    {/* Custom added blocks */}
                    {renderCustomBlocks("contra")}
                  </div>

                  <div className="text-xs text-foreground/40 font-mono mt-4 pt-4 border-t border-white/5 flex justify-between">
                    <span>Contraportada</span>
                    <span>Cara Externa</span>
                  </div>
                </div>
              </div>

              {/* PANEL 3: RIGHT PANEL (Inside Right / Outside Portada) */}
              <div 
                className={`panel-container panel-right-fold w-full h-full absolute top-0 left-[66.666666%]`}
                style={{
                  width: "33.333333%",
                  transform: isOpen ? "rotateY(0deg)" : "rotateY(-140deg)",
                  zIndex: isOpen ? 10 : 35
                }}
              >
                {/* Inside Right (Cara Interior - Derecha) */}
                <div className="panel-side-front w-full h-full glass-panel rounded-r-2xl p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getGradient("accent")} mb-2`}>
                        <Shield className="w-3.5 h-3.5" />
                        <EditableField contentKey="insideRightTag" element="span" defaultSize={12} />
                      </div>
                    </div>
                    <EditableField contentKey="insideRightTitle" element="h3" className="text-2xl font-bold tracking-tight mb-4" defaultSize={22} />
                    <EditableField contentKey="insideRightDesc" element="p" className="text-sm text-foreground/70 leading-relaxed mb-6" defaultSize={13} />

                    {/* Testimonial Quote */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative mb-2">
                      <EditableField contentKey="insideRightQuote" element="p" className="text-xs italic text-foreground/85 leading-relaxed" defaultSize={12} />
                      <div className="mt-3 text-right">
                        <EditableField contentKey="insideRightQuoteAuthor" element="span" className="text-[10px] font-bold uppercase tracking-wider text-cyan-400" defaultSize={10} />
                      </div>
                    </div>

                    {/* Custom added blocks */}
                    {renderCustomBlocks("insideRight")}
                  </div>

                  <div className="text-xs text-foreground/40 font-mono mt-4 pt-4 border-t border-white/5">
                    Pág 3 / Cara Interna
                  </div>
                </div>

                {/* Outside Portada (Cara Exterior - Portada Principal) */}
                <div 
                  className={`panel-side-back w-full h-full glass-panel rounded-l-2xl p-8 flex flex-col justify-between overflow-y-auto relative cursor-pointer`}
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
                      <EditableField contentKey="portadaEdition" element="span" className="text-[10px] font-mono opacity-50 px-2 py-0.5 rounded border border-white/10" defaultSize={10} />
                    </div>

                    <div className="my-auto py-8">
                      <EditableField contentKey="portadaTitle" element="h2" className="text-3xl font-extrabold tracking-tight leading-tight mb-3" defaultSize={30} />
                      <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 rounded-full"></div>
                      <EditableField contentKey="portadaSubtitle" element="p" className="text-xs text-foreground/60 leading-relaxed max-w-[200px] mb-4" defaultSize={12} />
                      
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
          className={`hidden lg:flex w-full max-w-[1080px] h-7 items-center justify-center cursor-ns-resize group/handle mt-3 relative select-none z-20 ${
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
                    <EditableField contentKey="insideLeftDesc" element="p" className="text-sm text-foreground/70 leading-relaxed" defaultSize={14} />
                    
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
                    <div className="space-y-4 font-semibold">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <EditableField contentKey="insideCenterStat1Label" element="span" defaultSize={12} />
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${getGradient("primary")} rounded-full`} style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <EditableField contentKey="insideCenterStat2Label" element="span" defaultSize={12} />
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${getGradient("secondary")} rounded-full`} style={{ width: "90%" }}></div>
                        </div>
                      </div>
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
                    <EditableField contentKey="insideRightDesc" element="p" className="text-sm text-foreground/70 leading-relaxed mb-4" defaultSize={14} />
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-3">
                      <EditableField contentKey="insideRightQuote" element="p" className="text-xs italic text-foreground/80" defaultSize={12} />
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
                    <EditableField contentKey="portadaEdition" element="span" className="text-[10px] font-mono opacity-50 px-2 py-0.5 rounded border border-white/10" defaultSize={10} />
                  </div>
                  <div className="my-auto py-6">
                    <EditableField contentKey="portadaTitle" element="h2" className="text-2xl font-extrabold tracking-tight leading-tight mb-2" defaultSize={26} />
                    <EditableField contentKey="portadaSubtitle" element="p" className="text-xs text-foreground/60 leading-relaxed" defaultSize={12} />
                    
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
