export type Lang = "pt" | "en" | "zh";

export interface Step {
  title: string;
  text: string;
}

export interface Dictionary {
  nav: { about: string; advantages: string; services: string; team: string; contact: string };
  hero: { eyebrow: string; title: string; subtitle: string; cta: string; secondary: string; location: string };
  about: { eyebrow: string; title: string; lead: string; pillars: Step[] };
  advantages: {
    eyebrow: string;
    title: string;
    intro: string;
    stats: { value: string; label: string }[];
    logisticsTitle: string;
    logisticsNote: string;
    logistics: { name: string; distance: string }[];
  };
  roadmap: { eyebrow: string; title: string; intro: string; steps: Step[] };
  expertise: { eyebrow: string; title: string; intro: string; items: Step[] };
  team: {
    eyebrow: string;
    title: string;
    intro: string;
    photo: string;
    partners: { name: string; role: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    whatsapp: string;
    addressLabel: string;
    address: string;
    rights: string;
  };
}

export const LANGS: { code: Lang; label: string; html: string }[] = [
  { code: "pt", label: "PT", html: "pt-BR" },
  { code: "en", label: "EN", html: "en" },
  { code: "zh", label: "ZH", html: "zh-CN" },
];

const expertiseEN: Step[] = [
  { title: "Corporate & Contracts", text: "" },
  { title: "Tax", text: "" },
  { title: "Labor & Employment", text: "" },
  { title: "Civil & Business Litigation", text: "" },
  { title: "Real Estate & Regulatory", text: "" },
  { title: "Ongoing Legal Counsel", text: "" },
];

const withTexts = (texts: string[]): Step[] =>
  expertiseEN.map((item, i) => ({ title: item.title, text: texts[i] }));

export const translations: Record<Lang, Dictionary> = {
  pt: {
    nav: { about: "Sobre", advantages: "Vantagens", services: "Serviços", team: "Equipe", contact: "Contato" },
    hero: {
      eyebrow: "Vieira e Rabelo Nogueira · Advocacia",
      title: "Investir na Bahia",
      subtitle: "Guia jurídico e estratégico para empresas que pretendem investir e operar no Brasil",
      cta: "Fale com um Especialista",
      secondary: "Ver a jornada de implantação",
      location: "Camaçari · Bahia · Brasil",
    },
    about: {
      eyebrow: "Sobre o escritório",
      title: "Perto do Polo. Presente em cada etapa.",
      lead: "Conhecemos de perto o Polo de Camaçari e os órgãos locais. Acompanhamos o investidor estrangeiro em todas as etapas da implantação.",
      pillars: [
        { title: "Conhecimento local", text: "Conhecemos de perto o Polo de Camaçari e os órgãos locais." },
        { title: "Acompanhamento integral", text: "Acompanhamos o investidor estrangeiro em todas as etapas da implantação." },
        { title: "Visão internacional", text: "Atendimento para empresas estrangeiras, chinesas e de outros estados brasileiros." },
      ],
    },
    advantages: {
      eyebrow: "Por que Camaçari",
      title: "Um polo industrial consolidado, conectado ao mundo",
      intro: "O Polo Industrial de Camaçari reúne escala, cadeia produtiva instalada e acesso logístico direto a portos e aeroporto.",
      stats: [
        { value: "R$ 38 bi", label: "em investimentos" },
        { value: "254", label: "empreendimentos" },
        { value: "90+", label: "empresas" },
      ],
      logisticsTitle: "Logística estratégica",
      logisticsNote: "Distâncias a partir do Polo Industrial",
      logistics: [
        { name: "Aeroporto", distance: "30 km" },
        { name: "Terminal de Aratu", distance: "24 km" },
        { name: "Porto de Salvador", distance: "45 km" },
      ],
    },
    roadmap: {
      eyebrow: "Jornada de implantação",
      title: "Do primeiro estudo à operação plena",
      intro: "Cinco etapas que organizam a chegada da sua empresa ao Brasil com segurança jurídica.",
      steps: [
        { title: "Definir a Estrutura", text: "Escolha do tipo societário e do modelo de entrada mais adequado ao seu negócio." },
        { title: "Constituir e Planejar", text: "Constituição da empresa, registros e planejamento tributário desde o início." },
        { title: "Estruturar o Capital", text: "Ingresso de capital estrangeiro, registros no Banco Central e fluxos financeiros." },
        { title: "Implantar com Segurança", text: "Licenças, contratos, imóveis e contratação de equipe com conformidade." },
        { title: "Operar e Crescer", text: "Assessoria contínua para a rotina e para a expansão da operação." },
      ],
    },
    expertise: {
      eyebrow: "Áreas de atuação",
      title: "Assessoria completa para operar no Brasil",
      intro: "Uma equipe integrada para as principais frentes jurídicas de quem investe e opera na Bahia.",
      items: withTexts([
        "Societário, contratos comerciais, joint ventures e governança.",
        "Planejamento tributário, incentivos fiscais e contencioso tributário.",
        "Relações de trabalho, contratação de equipes e conformidade trabalhista.",
        "Contencioso cível e empresarial, negociação e resolução de disputas.",
        "Aquisição e locação de imóveis, licenças e questões regulatórias.",
        "Acompanhamento jurídico contínuo da rotina da empresa.",
      ]),
    },
    team: {
      eyebrow: "Equipe",
      title: "Sócios Fundadores",
      intro: "Atendimento conduzido diretamente pelos sócios do escritório.",
      photo: "Foto",
      partners: [
        { name: "Jessica Chaves Rabelo Nogueira", role: "Especialista em Direito Civil" },
        { name: "Temístocles Vieira de Mattos Filho", role: "Especialista em Direito Tributário" },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Fale com um Especialista",
      intro: "Conte-nos sobre o seu projeto de investimento. Retornaremos o seu contato.",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada. Entraremos em contato em breve.",
      error: "Não foi possível enviar. Tente novamente.",
      whatsapp: "Conversar no WhatsApp",
      addressLabel: "Endereço",
      address: "Camaçari, Bahia, Brasil",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: { about: "About", advantages: "Advantages", services: "Services", team: "Team", contact: "Contact" },
    hero: {
      eyebrow: "Vieira e Rabelo Nogueira · Law Firm",
      title: "Invest in Bahia",
      subtitle: "A legal and strategic guide for companies planning to invest and operate in Brazil",
      cta: "Talk to a Specialist",
      secondary: "See the setup journey",
      location: "Camaçari · Bahia · Brazil",
    },
    about: {
      eyebrow: "About the firm",
      title: "Close to the Complex. Present at every step.",
      lead: "We know the Camaçari Industrial Complex and the local authorities first-hand. We guide foreign investors through every stage of their setup.",
      pillars: [
        { title: "Local knowledge", text: "We know the Camaçari Industrial Complex and the local authorities first-hand." },
        { title: "End-to-end guidance", text: "We guide foreign investors through every stage of their setup." },
        { title: "International outlook", text: "Serving foreign and Chinese companies, as well as companies from other Brazilian states." },
      ],
    },
    advantages: {
      eyebrow: "Why Camaçari",
      title: "An established industrial complex, connected to the world",
      intro: "The Camaçari Industrial Complex combines scale, an established supply chain and direct logistics access to ports and the airport.",
      stats: [
        { value: "R$ 38 bn", label: "in investments" },
        { value: "254", label: "projects" },
        { value: "90+", label: "companies" },
      ],
      logisticsTitle: "Strategic logistics",
      logisticsNote: "Distances from the Industrial Complex",
      logistics: [
        { name: "Airport", distance: "30 km" },
        { name: "Aratu Terminal", distance: "24 km" },
        { name: "Port of Salvador", distance: "45 km" },
      ],
    },
    roadmap: {
      eyebrow: "Setup journey",
      title: "From first assessment to full operation",
      intro: "Five stages that structure your company's arrival in Brazil with legal certainty.",
      steps: [
        { title: "Define the Structure", text: "Choosing the corporate type and the entry model that best fits your business." },
        { title: "Incorporate and Plan", text: "Incorporation, registrations and tax planning from day one." },
        { title: "Structure the Capital", text: "Foreign capital inflow, Central Bank registrations and financial flows." },
        { title: "Set Up Safely", text: "Licenses, contracts, real estate and hiring, fully compliant." },
        { title: "Operate and Grow", text: "Ongoing counsel for day-to-day operations and expansion." },
      ],
    },
    expertise: {
      eyebrow: "Practice areas",
      title: "Full legal support to operate in Brazil",
      intro: "An integrated team covering the key legal fronts for those who invest and operate in Bahia.",
      items: withTexts([
        "Corporate law, commercial contracts, joint ventures and governance.",
        "Tax planning, tax incentives and tax litigation.",
        "Labor relations, hiring and employment compliance.",
        "Civil and business litigation, negotiation and dispute resolution.",
        "Property acquisition and leasing, licensing and regulatory matters.",
        "Continuous legal support for the company's daily operations.",
      ]),
    },
    team: {
      eyebrow: "Team",
      title: "Founding Partners",
      intro: "Client work led directly by the firm's partners.",
      photo: "Photo",
      partners: [
        { name: "Jessica Chaves Rabelo Nogueira", role: "Civil Law Specialist" },
        { name: "Temístocles Vieira de Mattos Filho", role: "Tax Law Specialist" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Talk to a Specialist",
      intro: "Tell us about your investment project. We will get back to you.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent. We will be in touch soon.",
      error: "Could not send. Please try again.",
      whatsapp: "Chat on WhatsApp",
      addressLabel: "Address",
      address: "Camaçari, Bahia, Brazil",
      rights: "All rights reserved.",
    },
  },
  zh: {
    nav: { about: "关于我们", advantages: "优势", services: "服务", team: "团队", contact: "联系" },
    hero: {
      eyebrow: "Vieira e Rabelo Nogueira · 律师事务所",
      title: "投资巴伊亚",
      subtitle: "为计划在巴西投资和运营的企业提供法律与战略指南",
      cta: "咨询专家",
      secondary: "查看落地流程",
      location: "卡马萨里 · 巴伊亚州 · 巴西",
    },
    about: {
      eyebrow: "关于事务所",
      title: "扎根工业园区，全程陪伴每一步。",
      lead: "我们深入了解卡马萨里工业园区及当地政府部门，并在落地的每一个阶段陪伴外国投资者。",
      pillars: [
        { title: "本地经验", text: "我们深入了解卡马萨里工业园区及当地政府部门。" },
        { title: "全程陪伴", text: "我们在落地的每一个阶段陪伴外国投资者。" },
        { title: "国际视野", text: "服务外国企业、中国企业以及来自巴西其他州的企业。" },
      ],
    },
    advantages: {
      eyebrow: "为什么选择卡马萨里",
      title: "成熟的工业园区，连接世界",
      intro: "卡马萨里工业园区兼具规模、完善的产业链以及通往港口和机场的直接物流通道。",
      stats: [
        { value: "380亿雷亚尔", label: "投资总额" },
        { value: "254", label: "个项目" },
        { value: "90+", label: "家企业" },
      ],
      logisticsTitle: "战略物流",
      logisticsNote: "距工业园区的距离",
      logistics: [
        { name: "机场", distance: "30 公里" },
        { name: "阿拉图码头", distance: "24 公里" },
        { name: "萨尔瓦多港", distance: "45 公里" },
      ],
    },
    roadmap: {
      eyebrow: "落地流程",
      title: "从初步评估到全面运营",
      intro: "五个阶段，确保贵公司在法律保障下顺利进入巴西。",
      steps: [
        { title: "确定架构", text: "选择最适合贵公司业务的公司类型和进入模式。" },
        { title: "设立与规划", text: "公司注册、登记以及从一开始的税务规划。" },
        { title: "资本架构", text: "外国资本流入、巴西央行登记及资金流动安排。" },
        { title: "安全落地", text: "合规办理许可证、合同、不动产及员工招聘。" },
        { title: "运营与发展", text: "为日常运营和业务扩张提供持续法律支持。" },
      ],
    },
    expertise: {
      eyebrow: "业务领域",
      title: "在巴西运营的全方位法律支持",
      intro: "一支综合团队，覆盖在巴伊亚投资和运营所需的主要法律领域。",
      items: withTexts([
        "公司法、商业合同、合资企业与公司治理。",
        "税务规划、税收优惠及税务诉讼。",
        "劳动关系、员工招聘及劳动合规。",
        "民事与商业诉讼、谈判及争议解决。",
        "不动产购置与租赁、许可及监管事务。",
        "为企业日常运营提供持续法律顾问服务。",
      ]),
    },
    team: {
      eyebrow: "团队",
      title: "创始合伙人",
      intro: "由事务所合伙人直接负责客户服务。",
      photo: "照片",
      partners: [
        { name: "Jessica Chaves Rabelo Nogueira", role: "民法专家" },
        { name: "Temístocles Vieira de Mattos Filho", role: "税法专家" },
      ],
    },
    contact: {
      eyebrow: "联系",
      title: "咨询专家",
      intro: "请告诉我们您的投资项目，我们将与您联系。",
      name: "姓名",
      email: "电子邮箱",
      message: "留言",
      send: "发送留言",
      sending: "发送中...",
      success: "留言已发送，我们将尽快与您联系。",
      error: "发送失败，请重试。",
      whatsapp: "WhatsApp 咨询",
      addressLabel: "地址",
      address: "巴西 巴伊亚州 卡马萨里",
      rights: "版权所有。",
    },
  },
};
