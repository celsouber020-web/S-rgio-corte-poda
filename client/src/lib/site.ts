export const siteConfig = {
  name: "Sérgio Corte & Poda",
  professionalName: "Sérgio",
  whatsappNumber: "5515996284128",
  phoneDisplay: "(15) 99628-4128",
  location: "Estrada Vicinal do Lageadinho, nº 18 — Ibiúna/SP",
  initialMessage:
    "Olá, Sérgio! Vi seu site e gostaria de solicitar informações sobre um serviço de corte, poda ou limpeza de árvores/coqueiros.",
  images: {
    hero: "/manus-storage/podadearvore_c8152c9f.jpg",
    pruning:
      "/manus-storage/10-05-18.podasesupressoesdearvoresembh-rodrigoclemente-pbh33_7ced7e0d.jpg",
    climbing: "/manus-storage/photo-1626828476637-5bd713ef9f22_823ccb1d.avif",
    coconut: "/manus-storage/images_786991e0.jpg",
    precise:
      "/manus-storage/1934597-929511203797792-1537478094235727354-n_9b040f82.webp",
  },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.initialMessage)}`;
