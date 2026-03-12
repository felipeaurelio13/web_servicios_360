import {
  Vote,
  Landmark,
  Building2,
  Headset,
  Fingerprint,
  Users,
  CalendarCheck,
  Scale,
  Mic,
  ClipboardList,
  ShieldCheck,
  UserPlus,
  Tablet,
  ScanFace,
  MessageCircle,
  Video,
  FileCheck,
  UserCheck,
  MonitorPlay,
  ScrollText,
  Accessibility,
  DoorOpen,
  Star,
  Server,
  PenLine,
  LayoutDashboard,
  Calculator,
  Smartphone,
  KeyRound,
  BarChart3,
  Zap,
  FolderDown,
  Mail,
} from 'lucide-react';
import { Planet, Satellite } from './types';

// =============================================
// PLANETS (3 main services)
// =============================================

export const planets: Planet[] = [
  {
    id: 'votaciones',
    name: 'Votaciones',
    brandName: 'EVoters',
    tagline: 'Votación electrónica segura para instituciones',
    description:
      'Plataforma de votación electrónica que automatiza procesos electorales complejos, garantizando la integridad y el secreto del voto mediante criptografía avanzada. Para instituciones de cualquier tamaño.',
    icon: Vote,
    color: '#e85700',
    colorSecondary: '#c44a00',
    features: [
      'Secreto absoluto del voto con llaves criptográficas',
      'Papeletas segmentadas por distrito o estamento',
      'Voto ponderado configurable',
      'Múltiples métodos de autenticación robusta',
      'Certificación de la Dirección del Trabajo (Chile)',
      'Resultados inmediatos y verificables',
    ],
    stats: [
      { label: 'Procesos', value: '3.600+' },
      { label: 'Votantes', value: '3M+' },
      { label: 'Participación', value: '83%' },
    ],
    subBrands: [
      {
        id: 'euniversidades',
        name: 'EUniversidades',
        description: 'Democracia electrónica para educación superior: elecciones de rectores, decanos y consultas estudiantiles.',
      },
      {
        id: 'eparticipa',
        name: 'EParticipa',
        description: 'Participación ciudadana territorial: presupuestos participativos, consultas comunales y plebiscitos.',
      },
    ],
    satelliteIds: ['addon-inscripcion', 'addon-empadronamiento', 'addon-puntos-presencial', 'addon-biometrica', 'addon-soporte-extendido', 'addon-videos', 'addon-ceremonias-remotas', 'addon-bulletins-custom', 'addon-envio-masivo'],
    coreModuleIds: ['eassistance', 'identyz', 'esocios', 'acreditacion', 'registro-candidaturas'],
    slides: [
      {
        id: 'votaciones-1',
        title: 'Votación 100% Remota',
        description: 'Participa desde cualquier dispositivo con protocolos de seguridad estrictos.',
        imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 'votaciones-2',
        title: 'Votación Presencial Electrónica',
        description: 'Votación en puntos designados con supervisión técnica y monitores capacitados.',
        imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 'votaciones-3',
        title: 'Resultados Inmediatos',
        description: 'Conteo automático y resultados verificables al instante del cierre.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      },
    ],
    targetAudience: ['Sindicatos', 'Cooperativas', 'Universidades', 'Municipalidades', 'Colegios profesionales'],
    modalities: ['100% Remoto', 'Presencial', 'Híbrido'],
  },
  {
    id: 'juntas',
    name: 'Juntas y Asambleas',
    brandName: 'EHolders',
    tagline: 'Juntas de accionistas y asambleas corporativas',
    description:
      'Plataforma integral que unifica videoconferencia, control de quórum en tiempo real y votación electrónica, ajustándose a normativas legales y estatutarias.',
    icon: Landmark,
    color: '#2B50AA',
    colorSecondary: '#1B3A7B',
    features: [
      'Cálculo y proyección de quórum en tiempo real',
      'Videoconferencia Zoom integrada en plataforma',
      'Desempates automatizados',
      'Modificación de representantes en vivo',
      'Acompañamiento de moderador técnico (Guarantor)',
      'Voto ponderado y distribuible',
    ],
    stats: [
      { label: 'Juntas realizadas', value: '1.000+' },
      { label: 'Empresas IPSA', value: '1/3' },
      { label: 'Participación', value: '75%' },
    ],
    subBrands: [
      {
        id: 'easambleas',
        name: 'EAsambleas',
        description: 'Plataforma modular de decisión colectiva para asociaciones, cooperativas, federaciones y fundaciones.',
      },
    ],
    satelliteIds: ['addon-gestion-poderes', 'addon-acreditacion-presencial', 'addon-videoconferencia', 'addon-transcripcion-actas', 'addon-lenguaje-senas', 'addon-salitas', 'addon-premium', 'addon-nube-privada', 'addon-firma-electronica', 'addon-eholders-lite', 'addon-repositorio-documentos', 'addon-envio-masivo'],
    coreModuleIds: ['eassistance', 'identyz', 'esocios', 'acreditacion', 'gestion-poderes', 'transcriptor', 'custodia'],
    slides: [
      {
        id: 'juntas-1',
        title: 'Juntas 100% Remotas',
        description: 'Participantes se conectan por videoconferencia desde cualquier lugar del mundo.',
        imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 'juntas-2',
        title: 'Cumplimiento Regulatorio',
        description: 'Adherencia completa a la normativa vigente de juntas de accionistas.',
        imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 'juntas-3',
        title: 'Modalidad Híbrida',
        description: 'Combina participación presencial y remota con integración audiovisual completa.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      },
    ],
    targetAudience: ['Empresas listadas (IPSA)', 'Emisores de deuda', 'Fondos de inversión', 'Cooperativas', 'Cajas de compensación'],
    modalities: ['100% Remoto', 'Presencial', 'Híbrido'],
  },
  {
    id: 'electoral',
    name: 'Procesos Electorales',
    brandName: 'SIE',
    tagline: 'Infraestructura tecnológica para elecciones nacionales',
    description:
      'Sistema de integridad de cómputo electoral diseñado para calcular, validar y publicar resultados electorales masivos en tiempo real, operando en paralelo a los sistemas oficiales. Desplegado como sistema de contingencia oficial en Chile (SERVEL) y como cómputo paralelo anticorrupción en Honduras (CNA), con proyecciones activas en Perú, Colombia y Brasil.',
    icon: Building2,
    color: '#5c6bc0',
    colorSecondary: '#3f51b5',
    features: [
      'Gestión de alta concurrencia (millones de datos)',
      'Validación paralela de escrutinios oficiales',
      'Infraestructura cloud de alta disponibilidad',
      'Capacidad offline (servidores locales para contingencia)',
      'Auditoría de calidad con Ethical Hacking',
      'Publicación de resultados en tiempo real',
    ],
    stats: [
      { label: 'Elecciones nacionales', value: 'Chile' },
      { label: 'Presencia internacional', value: 'Honduras' },
      { label: 'Tipos de proceso', value: '5+' },
    ],
    subBrands: [],
    satelliteIds: ['addon-portal-resultados', 'addon-calculos-escrutadores', 'addon-conteo-paralelo'],
    coreModuleIds: ['eassistance', 'acreditacion'],
    slides: [
      {
        id: 'electoral-1',
        title: 'Elecciones Nacionales',
        description: 'Infraestructura robusta utilizada en primarias, regionales, municipales y segundas vueltas.',
        imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800',
      },
      {
        id: 'electoral-2',
        title: 'Alta Disponibilidad',
        description: 'Procesamiento resiliente en la nube con contingencia offline para máxima confiabilidad.',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      },
    ],
    targetAudience: ['Servicios electorales (Servel, ONPE)', 'Partidos políticos', 'Organismos de gobierno'],
    modalities: ['Procesamiento remoto/nube', 'Centros de operación (COE)'],
  },
];

// =============================================
// SATELLITES (modules)
// =============================================

export const satellites: Satellite[] = [
  {
    id: 'eassistance',
    name: 'EAssistance',
    subtitle: 'Mesa de Ayuda',
    description:
      'Equipo de soporte omnicanal que asiste a votantes y accionistas durante todo el proceso. Más de 2 millones de personas asistidas en 10+ años.',
    icon: Headset,
    color: '#e85700',
    priority: 'critical',
    type: 'human',
    planetIds: ['votaciones', 'juntas', 'electoral'],
    features: [
      'Soporte vía teléfono, correo y WhatsApp',
      'Orientación paso a paso y resolución de credenciales',
      'Sistema de tickets (Freshdesk) con trazabilidad',
      'Soporte en múltiples idiomas',
      'Capacitación y ensayos previos',
      'Publicación inmediata de resultados e informes',
    ],
    stats: [
      { label: 'Personas asistidas', value: '2M+' },
      { label: 'Años operando', value: '10+' },
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800', caption: 'Centro de soporte omnicanal' },
      { url: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=800', caption: 'Atención personalizada al votante' },
    ],
  },
  {
    id: 'identyz',
    name: 'Identyz',
    subtitle: 'Autenticación e Identidad',
    description:
      'Sistema de validación de identidad digital y firma electrónica. Conexión con métodos oficiales como Clave Única, biometría facial y OCR de documentos.',
    icon: Fingerprint,
    color: '#006466',
    priority: 'high',
    type: 'technical',
    planetIds: ['votaciones', 'juntas'],
    features: [
      'Verificación de identidad robusta multi-factor',
      'Conexión con Clave Única y métodos oficiales',
      'Biometría facial y OCR de documentos',
      'Firma electrónica de actas y documentos',
      'Enrolamiento seguro',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800', caption: 'Verificación biométrica de identidad' },
      { url: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800', caption: 'Autenticación multi-factor' },
    ],
  },
  {
    id: 'esocios',
    name: 'ESocios',
    subtitle: 'Gestión de Comunidades y Padrones',
    description:
      'CRM y Membership Management System (MMS) que funciona como la "fuente de la verdad" para organizaciones con base de socios o miembros. Se ofrece como servicio standalone o como complemento previo a EVoters o EHolders para mantener el padrón depurado y actualizado.',
    icon: Users,
    color: '#bec757',
    priority: 'high',
    type: 'technical',
    planetIds: ['votaciones', 'juntas'],
    features: [
      'Base de datos viva con altas y bajas en tiempo real',
      'Portal del socio con autogestión de datos',
      'Cobro de cuotas con bloqueo automático de socios morosos',
      'Sistema de postulación y enrolamiento de nuevos socios',
      'Módulo de difusión, calendario y gestión de eventos',
      'Estadísticas demográficas y dashboard administrativo',
      'Sub-organizaciones o capítulos territoriales',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', caption: 'Gestión centralizada de comunidades' },
      { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800', caption: 'Dashboard administrativo de padrones' },
    ],
  },
  {
    id: 'acreditacion',
    name: 'Acreditación',
    subtitle: 'MyPass / E-Events',
    description:
      'Sistema para invitar, registrar, realizar check-in rápido y trazar la asistencia de personas en eventos. Landing pages, códigos QR y escaneo de cédulas.',
    icon: CalendarCheck,
    color: '#e85700',
    priority: 'high',
    type: 'mixed',
    planetIds: ['votaciones', 'juntas', 'electoral'],
    features: [
      'Landing pages de eventos personalizadas',
      'Envío masivo de correos con códigos QR',
      'Escaneo de cédulas (DNI) para validación',
      'Impresión de gafetes/credenciales en sitio',
      'Dashboard de asistencia en tiempo real',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800', caption: 'Check-in y acreditación en eventos' },
      { url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800', caption: 'Escaneo QR para registro rápido' },
    ],
  },
  {
    id: 'gestion-poderes',
    name: 'Gestión de Poderes',
    subtitle: 'Representación Legal',
    description:
      'Plataforma de onboarding para documentar, asignar y validar representaciones legales (poderes) antes de una junta. Flujo de revisión y aprobación legal.',
    icon: Scale,
    color: '#2B50AA',
    priority: 'high',
    type: 'mixed',
    planetIds: ['juntas'],
    features: [
      'Formulario web de carga de documentos',
      'Flujo de revisión y aprobación legal',
      'Notificaciones automáticas al usuario',
      'Integración automática al padrón de junta',
      'Panel centralizado para el administrador',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800', caption: 'Revisión y validación de poderes legales' },
      { url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800', caption: 'Flujo de aprobación documental' },
    ],
  },
  {
    id: 'transcriptor',
    name: 'Transcriptor IA',
    subtitle: 'Actas Inteligentes',
    description:
      'Plataforma impulsada por Inteligencia Artificial para generar actas rápidas y precisas a partir del audio de las reuniones. Identifica oradores y exporta resúmenes estructurados. Versión 2.0 permitirá interactuar con IA generativa para responder preguntas sobre lo discutido y generar carpetas por comité.',
    icon: Mic,
    color: '#2B50AA',
    priority: 'medium',
    type: 'technical',
    planetIds: ['juntas'],
    features: [
      'Transcripción automática con IA',
      'Identificación de oradores (Speaker ID)',
      'Resúmenes automáticos estructurados',
      'Sincronización texto/audio para edición',
      'Exportación a Word (.docx)',
      'IA generativa para consultas sobre lo discutido (v2.0)',
      'Generación de carpetas por comité (v2.0)',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800', caption: 'Transcripción automatizada con IA' },
      { url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800', caption: 'Identificación de oradores y resúmenes' },
    ],
  },
  {
    id: 'registro-candidaturas',
    name: 'Registro de Candidaturas',
    subtitle: 'Inscripción Digital',
    description:
      'Formulario digital avanzado para automatizar la inscripción de candidatos o listas en un proceso electoral.',
    icon: ClipboardList,
    color: '#e85700',
    priority: 'specific',
    type: 'technical',
    planetIds: ['votaciones'],
    features: [
      'Recepción de antecedentes y fotos',
      'Segmentación por categorías (territorial, funcional)',
      'Panel de verificación para admitir o rechazar',
      'Conexión directa con configuración de papeleta',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800', caption: 'Formulario digital de postulaciones' },
    ],
  },
  {
    id: 'custodia',
    name: 'Custodia de Dispositivos',
    subtitle: 'Seguridad Presencial',
    description:
      'Servicio logístico-tecnológico para asambleas de extrema seguridad donde no se permiten teléfonos. Registro, bolsas de seguridad y entrega controlada.',
    icon: ShieldCheck,
    color: '#1B3A4B',
    priority: 'specific',
    type: 'logistic',
    planetIds: ['juntas'],
    features: [
      'Registro digital del equipo',
      'Asignación de bolsas de seguridad numeradas',
      'Vinculación al gafete del usuario',
      'Entrega controlada al finalizar',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800', caption: 'Custodia segura de dispositivos' },
    ],
  },

  // ── EVoters — Servicios Adicionales ──────────────────
  {
    id: 'addon-inscripcion',
    name: 'Inscripción de Candidaturas',
    subtitle: 'Registro Digital',
    description: 'Sistema digital y formularios para registrar postulaciones, subir documentos y gestionar candidaturas antes de la elección.',
    icon: ClipboardList,
    color: '#e85700',
    priority: 'specific',
    type: 'technical',
    planetIds: ['votaciones'],
    features: [
      'Formulario digital de postulaciones en línea',
      'Carga de documentos y fotografías',
      'Panel de revisión y admisión de candidaturas',
      'Conexión directa con la configuración de papeleta',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800', caption: 'Registro digital de candidaturas' },
    ],
  },
  {
    id: 'addon-empadronamiento',
    name: 'Empadronamiento / E-Socios',
    subtitle: 'Gestión del Padrón',
    description: 'Servicio para enrolar, actualizar datos o administrar el padrón (por ejemplo, validando correos o fotos de documentos de identidad) previo al proceso.',
    icon: UserPlus,
    color: '#e85700',
    priority: 'specific',
    type: 'mixed',
    planetIds: ['votaciones'],
    features: [
      'Enrolamiento y actualización de datos del padrón',
      'Validación de correos electrónicos',
      'Verificación de fotos de documentos de identidad',
      'Gestión previa al inicio del proceso electoral',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&q=80&w=800', caption: 'Enrolamiento y actualización de padrones' },
    ],
  },
  {
    id: 'addon-puntos-presencial',
    name: 'Puntos de Votación Presencial',
    subtitle: 'Hardware y Personal',
    description: 'Arriendo de hardware (iPads, tablets, escáneres de cédula) y provisión de personal de EVoting (monitores) para asistir presencialmente a los votantes.',
    icon: Tablet,
    color: '#e85700',
    priority: 'specific',
    type: 'mixed',
    planetIds: ['votaciones'],
    features: [
      'Arriendo de iPads, tablets y escáneres de cédula',
      'Monitores EVoting capacitados en sala',
      'Asistencia presencial al votante',
      'Integración con la plataforma de votación remota',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', caption: 'Kioscos de votación presencial asistida' },
      { url: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&q=80&w=800', caption: 'Tablets y monitores en sala' },
    ],
  },
  {
    id: 'addon-biometrica',
    name: 'Autenticación Biométrica',
    subtitle: 'Verificación de Identidad',
    description: 'Verificación de identidad con reconocimiento facial o prueba de vida, muy solicitado últimamente en clientes internacionales.',
    icon: ScanFace,
    color: '#e85700',
    priority: 'specific',
    type: 'technical',
    planetIds: ['votaciones'],
    features: [
      'Reconocimiento facial en tiempo real',
      'Prueba de vida (liveness detection)',
      'Alta demanda en clientes internacionales',
      'Integración con el flujo de autenticación',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800', caption: 'Reconocimiento facial y prueba de vida' },
    ],
  },
  {
    id: 'addon-soporte-extendido',
    name: 'Soporte Extendido',
    subtitle: 'Canales Extra',
    description: 'Integración de mesa de ayuda vía WhatsApp (con Chatbot como primera línea), atención telefónica y extensión de soporte en horarios nocturnos o fines de semana.',
    icon: MessageCircle,
    color: '#e85700',
    priority: 'specific',
    type: 'human',
    planetIds: ['votaciones'],
    features: [
      'Mesa de ayuda vía WhatsApp con Chatbot',
      'Atención telefónica dedicada',
      'Soporte en horario nocturno y fines de semana',
      'Escalamiento humano desde primera línea automatizada',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800', caption: 'Soporte WhatsApp con chatbot' },
      { url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800', caption: 'Atención telefónica extendida' },
    ],
  },
  {
    id: 'addon-videos',
    name: 'Videos Explicativos',
    subtitle: 'Comunicación Personalizada',
    description: 'Creación de videos del "paso a paso" para votar, adaptados a la gráfica del cliente y con intérprete de lenguaje de señas.',
    icon: Video,
    color: '#e85700',
    priority: 'specific',
    type: 'human',
    planetIds: ['votaciones'],
    features: [
      'Videos "paso a paso" personalizados',
      'Adaptados a la identidad gráfica del cliente',
      'Intérprete de lenguaje de señas incluido',
      'Reducen consultas a la mesa de ayuda',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800', caption: 'Videos explicativos paso a paso' },
    ],
  },

  // ── EHolders — Servicios Adicionales ─────────────────
  {
    id: 'addon-gestion-poderes',
    name: 'Gestión de Poderes',
    subtitle: 'Revisión Legal',
    description: 'Módulo integrado en el landing que permite a los accionistas subir su documentación y poderes para ser revisados (por nosotros o los abogados del cliente) previo a la junta.',
    icon: FileCheck,
    color: '#2B50AA',
    priority: 'specific',
    type: 'mixed',
    planetIds: ['juntas'],
    features: [
      'Carga de documentos y poderes en el landing',
      'Revisión por equipo EVoting o abogados del cliente',
      'Notificaciones de estado al accionista',
      'Integración automática al padrón de la junta',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800', caption: 'Carga y revisión de poderes en línea' },
    ],
  },
  {
    id: 'addon-acreditacion-presencial',
    name: 'Acreditación Presencial',
    subtitle: 'Registro In Situ',
    description: 'Apoyo con tótems, tablets y personal in situ para registrar asistencia en juntas de formato híbrido o 100% presenciales.',
    icon: UserCheck,
    color: '#2B50AA',
    priority: 'specific',
    type: 'mixed',
    planetIds: ['juntas'],
    features: [
      'Tótems y tablets de registro in situ',
      'Personal capacitado en sala',
      'Registro de asistencia en tiempo real',
      'Compatible con formato híbrido y 100% presencial',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800', caption: 'Tótems y tablets de acreditación in situ' },
    ],
  },
  {
    id: 'addon-videoconferencia',
    name: 'Videoconferencia y AV',
    subtitle: 'Producción Audiovisual',
    description: 'Integración de Zoom y coordinación de la producción audiovisual del evento, incluyendo el manejo técnico de las cámaras y el streaming.',
    icon: MonitorPlay,
    color: '#2B50AA',
    priority: 'specific',
    type: 'mixed',
    planetIds: ['juntas'],
    features: [
      'Integración de Zoom en la plataforma',
      'Coordinación de producción audiovisual',
      'Manejo técnico de cámaras y streaming',
      'Operador técnico dedicado durante el evento',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1587825140708-dfaf18c4c5ad?auto=format&fit=crop&q=80&w=800', caption: 'Producción audiovisual integrada' },
      { url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800', caption: 'Videoconferencia Zoom en plataforma' },
    ],
  },
  {
    id: 'addon-transcripcion-actas',
    name: 'Transcripción de Actas',
    subtitle: 'Post-Junta con IA',
    description: 'Servicio post-junta utilizando nuestra herramienta Transcriptor (con IA) para entregar las minutas, resúmenes e identificar oradores.',
    icon: ScrollText,
    color: '#2B50AA',
    priority: 'specific',
    type: 'technical',
    planetIds: ['juntas'],
    features: [
      'Transcripción automática con IA',
      'Identificación de oradores',
      'Resúmenes e identificación de puntos clave',
      'Entrega de minutas post-junta',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800', caption: 'Transcripción automática post-junta' },
    ],
  },
  {
    id: 'addon-lenguaje-senas',
    name: 'Lenguaje de Señas / Traducción',
    subtitle: 'Inclusión y Accesibilidad',
    description: 'Servicio de accesibilidad audiovisual que se inyecta dentro de la transmisión de la asamblea. Incluye intérprete de lengua de señas en pantalla y/o traducción simultánea a otro idioma, garantizando la inclusión de todos los participantes.',
    icon: Accessibility,
    color: '#2B50AA',
    priority: 'specific',
    type: 'human',
    planetIds: ['juntas'],
    features: [
      'Intérprete de lengua de señas en transmisión en vivo',
      'Traducción simultánea a otros idiomas',
      'Accesibilidad para personas con discapacidad auditiva',
      'Inclusión de participantes de habla diferente',
      'Coordinación logística del intérprete y traductor',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800', caption: 'Intérprete de lengua de señas en vivo' },
    ],
  },
  {
    id: 'addon-salitas',
    name: 'Pre-registro / Salitas',
    subtitle: 'Validación Previa',
    description: 'Sesiones previas al evento donde operadores validan visualmente la identidad de los asistentes antes de otorgarles credenciales.',
    icon: DoorOpen,
    color: '#2B50AA',
    priority: 'specific',
    type: 'human',
    planetIds: ['juntas'],
    features: [
      'Sesiones previas de validación de identidad',
      'Operadores validan visualmente a cada asistente',
      'Otorgamiento de credenciales de acceso',
      'Compatible con juntas de alta seguridad',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=800', caption: 'Validación previa de identidad' },
    ],
  },
  {
    id: 'addon-premium',
    name: 'Acompañamiento Premium',
    subtitle: 'Presencia Legal y Técnica',
    description: 'Incluye un landing premium personalizado, presencia de un abogado de EVoting (para apoyo normativo in situ) y tableros para visualización de quórum en tiempo real.',
    icon: Star,
    color: '#2B50AA',
    priority: 'specific',
    type: 'mixed',
    planetIds: ['juntas'],
    features: [
      'Landing premium personalizado para la junta',
      'Abogado EVoting de apoyo normativo in situ',
      'Tableros de visualización de quórum en tiempo real',
      'Acompañamiento técnico y legal integral',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', caption: 'Acompañamiento premium en sala' },
      { url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800', caption: 'Landing personalizado y tableros de quórum' },
    ],
  },
  {
    id: 'addon-nube-privada',
    name: 'Nube Exclusiva / Privada',
    subtitle: 'Infraestructura Dedicada',
    description: 'Levantamiento de la plataforma en servidores dedicados para el cliente, usualmente requerido por bancos o instituciones que exigen auditorías y hacking ético.',
    icon: Server,
    color: '#2B50AA',
    priority: 'specific',
    type: 'technical',
    planetIds: ['juntas'],
    features: [
      'Servidores dedicados para el cliente',
      'Requerido por bancos e instituciones financieras',
      'Soporte para auditorías y hacking ético',
      'Aislamiento total de la infraestructura compartida',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800', caption: 'Infraestructura dedicada en nube privada' },
    ],
  },
  {
    id: 'addon-firma-electronica',
    name: 'Firma Electrónica',
    subtitle: 'Documentos Remotos',
    description: 'Posibilidad de que los participantes firmen poderes o documentos remotamente.',
    icon: PenLine,
    color: '#2B50AA',
    priority: 'specific',
    type: 'technical',
    planetIds: ['juntas'],
    features: [
      'Firma remota de poderes y documentos',
      'Integración en el flujo de la junta',
      'Validez legal en Chile',
      'Registro y notificación de firmas',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800', caption: 'Firma electrónica remota de documentos' },
    ],
  },

  // ── SIE — Servicios Adicionales ───────────────────────
  {
    id: 'addon-portal-resultados',
    name: 'Portal de Resultados',
    subtitle: 'Panel de Control',
    description: 'Módulo para la publicación de escrutinios, visualización de datos y envío directo de información a los medios de comunicación acreditados.',
    icon: LayoutDashboard,
    color: '#5c6bc0',
    priority: 'specific',
    type: 'technical',
    planetIds: ['electoral'],
    features: [
      'Publicación de escrutinios en tiempo real',
      'Panel de control y visualización de datos',
      'Envío directo a medios acreditados',
      'Interfaz pública y de operación diferenciadas',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', caption: 'Portal público de resultados electorales' },
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', caption: 'Visualización de datos en tiempo real' },
    ],
  },
  {
    id: 'addon-calculos-escrutadores',
    name: 'Cálculos Escrutadores',
    subtitle: 'Reglas Electorales',
    description: "Generación de cálculos territoriales (aplicando reglas como D'Hondt, paridad, etc.) sobre los datos para emitir resultados provisorios.",
    icon: Calculator,
    color: '#5c6bc0',
    priority: 'specific',
    type: 'technical',
    planetIds: ['electoral'],
    features: [
      "Cálculos territoriales con D'Hondt y paridad",
      'Reglas electorales configurables',
      'Emisión de resultados provisorios',
      'Validación cruzada de datos',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800', caption: 'Motor de cálculos electorales' },
    ],
  },
  {
    id: 'addon-conteo-paralelo',
    name: 'App Conteo Paralelo',
    subtitle: 'Partidos Políticos',
    description: 'Una aplicación de escaneo o conteo centralizado ofrecida a los partidos políticos para que lleven sus resultados en tiempo real y de forma paralela al conteo oficial.',
    icon: Smartphone,
    color: '#5c6bc0',
    priority: 'specific',
    type: 'technical',
    planetIds: ['electoral'],
    features: [
      'App de escaneo o conteo centralizado',
      'Ofrecida a partidos políticos',
      'Resultados en tiempo real',
      'Paralela al conteo oficial',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800', caption: 'App móvil de conteo paralelo' },
    ],
  },

  // ── EVoters — Satélites Nuevos ──────────────────────
  {
    id: 'addon-ceremonias-remotas',
    name: 'Ceremonias Remotas',
    subtitle: 'Llaves y Escrutinio a Distancia',
    description: 'Permite realizar las ceremonias de generación de llaves criptográficas y apertura del escrutinio a distancia, sin requerir presencia física de los custodios. Reemplaza la logística del pendrive físico por llaves virtuales y claves.',
    icon: KeyRound,
    color: '#e85700',
    priority: 'specific',
    type: 'technical',
    planetIds: ['votaciones'],
    features: [
      'Generación de llaves criptográficas a distancia',
      'Apertura de escrutinio remota',
      'Elimina logística del pendrive físico',
      'Llaves virtuales y claves para custodios',
      'Ideal para organizaciones con múltiples procesos anuales',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800', caption: 'Ceremonia de llaves criptográficas remota' },
    ],
  },
  {
    id: 'addon-bulletins-custom',
    name: 'Bulletins Custom',
    subtitle: 'Pizarras de Resultados a Medida',
    description: 'Visualizaciones personalizadas de resultados electorales construidas a medida del cliente, con la identidad gráfica de la organización, filtros interactivos y despliegue por segmento.',
    icon: BarChart3,
    color: '#e85700',
    priority: 'specific',
    type: 'technical',
    planetIds: ['votaciones'],
    features: [
      'Visualización personalizada con identidad gráfica del cliente',
      'Filtros interactivos por segmento o estamento',
      'Despliegue de resultados por categoría',
      'Diseño a medida para cada organización',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', caption: 'Pizarras de resultados personalizadas' },
      { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', caption: 'Filtros interactivos por segmento' },
    ],
  },

  // ── EHolders — Satélites Nuevos ─────────────────────
  {
    id: 'addon-eholders-lite',
    name: 'EHolders Lite',
    subtitle: 'Autogestión para Organizaciones',
    description: 'Versión simplificada y autogestionada de EHolders, diseñada para organizaciones pequeñas como sindicatos, condominios o asociaciones. El cliente administra el evento sin asistencia operativa de EVoting: carga participantes, crea materias y gestiona la reunión.',
    icon: Zap,
    color: '#2B50AA',
    priority: 'specific',
    type: 'mixed',
    planetIds: ['juntas'],
    features: [
      'Autogestión total sin PM ni operador dedicado',
      'Carga de participantes y creación de materias por el cliente',
      'Modelo SaaS mensual o anual accesible',
      'Capacitación vía manuales y soporte técnico básico',
      'Ideal para sindicatos, condominios y asociaciones',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800', caption: 'Plataforma autogestionada para organizaciones' },
    ],
  },
  {
    id: 'addon-repositorio-documentos',
    name: 'Repositorio de Documentos',
    subtitle: 'Documentación Pre-Asamblea',
    description: 'Espacio en el landing previo de la asamblea donde los asistentes pueden descargar informes, balances, memorias anuales u otros documentos relevantes antes de ingresar a la sala virtual.',
    icon: FolderDown,
    color: '#2B50AA',
    priority: 'specific',
    type: 'technical',
    planetIds: ['juntas'],
    features: [
      'Descarga de informes, balances y memorias anuales',
      'Integrado en el landing previo a la asamblea',
      'Participantes llegan informados sin envíos por correo',
      'Cumple regulaciones que exigen disponibilidad previa de estados financieros',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=800', caption: 'Repositorio de documentos pre-asamblea' },
    ],
  },

  // ── Transversal — Satélites Nuevos ──────────────────
  {
    id: 'addon-envio-masivo',
    name: 'Envío Masivo de Recordatorios',
    subtitle: 'Invitaciones y Campañas',
    description: 'Herramienta integrada en el panel de gestión para lanzar campañas de correos y recordatorios a participantes antes del evento. Incluye segmentación por tipo de accionista, socio o votante.',
    icon: Mail,
    color: '#e85700',
    priority: 'specific',
    type: 'mixed',
    planetIds: ['juntas', 'votaciones'],
    features: [
      'Campañas masivas de correos e invitaciones',
      'Recordatorios automáticos pre-evento',
      'Segmentación por tipo de participante',
      'Integrado en el panel de gestión del administrador',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&q=80&w=800', caption: 'Campañas masivas de invitaciones' },
      { url: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800', caption: 'Segmentación por tipo de participante' },
    ],
  },
];

// =============================================
// HELPERS
// =============================================

export function getPlanetById(id: string): Planet | undefined {
  return planets.find((p) => p.id === id);
}

export function getSatelliteById(id: string): Satellite | undefined {
  return satellites.find((s) => s.id === id);
}

export function getSatellitesForPlanet(planetId: string): Satellite[] {
  const planet = getPlanetById(planetId);
  if (!planet) return [];
  return planet.satelliteIds
    .map((sid) => getSatelliteById(sid))
    .filter((s): s is Satellite => s !== undefined);
}

export function getPlanetsForSatellite(satelliteId: string): Planet[] {
  const satellite = getSatelliteById(satelliteId);
  if (!satellite) return [];
  return satellite.planetIds
    .map((pid) => getPlanetById(pid))
    .filter((p): p is Planet => p !== undefined);
}

export function isSharedSatellite(satellite: Satellite): boolean {
  return satellite.planetIds.length > 1;
}

export function getCoreModulesForPlanet(planetId: string): Satellite[] {
  const planet = getPlanetById(planetId);
  if (!planet) return [];
  return planet.coreModuleIds
    .map((sid) => getSatelliteById(sid))
    .filter((s): s is Satellite => s !== undefined);
}
