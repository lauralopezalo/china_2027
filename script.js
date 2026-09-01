const tabs = document.querySelectorAll(".route-tab");
const panels = document.querySelectorAll(".route-panel");
const stopCards = document.querySelectorAll(".stop-card");
const dialog = document.querySelector(".stop-dialog");
const closeDialog = document.querySelector(".dialog-close");

const stopDetails = {
  beijing: { kicker: "4 noches · historia imperial", title: "Pekín", intro: "La gran puerta de entrada: una mezcla intensa de palacios, barrios tradicionales y uno de los grandes símbolos del viaje.", image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1400&q=85", alt: "Gran Muralla China cerca de Pekín", items: ["Ciudad Prohibida y plaza de Tiananmén", "Templo del Cielo al amanecer", "Paseo en bicicleta o a pie por los hutongs", "Excursión de día completo a la Gran Muralla"] },
  xian: { kicker: "2 noches · China antigua", title: "Xi'an", intro: "Una parada compacta y muy especial, ideal para entrar en la época imperial y comer de maravilla por la noche.", image: "https://whc.unesco.org/uploads/thumbs/site_0441_0003-1000-750-20120827115234.jpg", alt: "Guerreros de Terracota en Xi'an", items: ["Guerreros de Terracota, mejor a primera hora", "Vuelta por la muralla de Xi'an en bici", "Barrio musulmán y mercado nocturno", "Dumplings y biang biang noodles"] },
  zhangjiajie: { kicker: "3 noches · paisajes de Avatar", title: "Zhangjiajie", intro: "La parte más escénica del viaje común: agujas de piedra, pasarelas entre nubes y días pensados para mirar alrededor.", image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1400&q=85", alt: "Montañas de Zhangjiajie", items: ["Parque Nacional de Zhangjiajie", "Ascensor Bailong y miradores", "Montaña Tianmen y carretera de las 99 curvas", "Puente de cristal, si apetece"] },
  shanghai: { kicker: "4 noches · cierre del viaje común", title: "Shanghái", intro: "El contraste perfecto después de los paisajes: moderno, caminable y con suficiente energía para despedir al grupo o continuar hacia el sur.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2008_Shanghai_Pudong_skyline_03.jpg/1280px-2008_Shanghai_Pudong_skyline_03.jpg", alt: "Skyline de Pudong y Torre Perla Oriental en Shanghái", items: ["Atardecer en el Bund", "Paseo por la Concesión Francesa", "Jardín Yuyuan y ciudad antigua", "Mirador en Pudong o crucero nocturno"] },
  guilin: { kicker: "3 noches · extensión tranquila", title: "Guilin y Yangshuo", intro: "Un cambio de ritmo total: río, arrozales y montañas kársticas para una extensión mucho más relajada.", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1400&q=85", alt: "Paisaje kárstico cerca de Yangshuo", items: ["Crucero o balsa por el río Li", "Ruta en bici por Yangshuo", "Pueblos y arrozales de los alrededores", "Espectáculo Impression Liu Sanjie, opcional"] },
  hongkong: { kicker: "2 noches · final internacional", title: "Hong Kong", intro: "Una despedida fácil y vibrante: rascacielos, comida de todo tipo y vuelos internacionales para la vuelta.", image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?auto=format&fit=crop&w=1400&q=85", alt: "Skyline de Hong Kong", items: ["Ferry Star entre Kowloon y Central", "Victoria Peak al atardecer", "Mercados de Mong Kok", "Dim sum y bares de SoHo"] },
  chengdu: { kicker: "2-3 noches · Sichuan y pandas", title: "Chengdu", intro: "Una ciudad más tranquila y gastronómica, ideal para cambiar el ritmo después de los grandes clásicos.", image: "https://www.localchengdutours.com/public/upload/photo/chengdu-research-base-of-giant-panda-breeding/img_658_d20210426093735.jpg", alt: "Entrada de la base de pandas de Chengdu", items: ["Base de cría de pandas a primera hora", "Casas de té y parques locales", "Hotpot de Sichuan y platos picantes", "Excursión opcional a Leshan o Sanxingdui"] },
  chongqing: { kicker: "2 noches · ciudad vertical", title: "Chongqing", intro: "El final más urbano y sorprendente de la extensión: una metrópolis construida entre colinas, ríos y neón.", image: "https://p7.itc.cn/images01/20230101/8115d084b6cd41acb40df072752174e8.jpeg", alt: "Skyline de Chongqing junto al río", items: ["Hongyadong iluminado al anochecer", "Teleférico sobre el Yangtsé", "Tren que atraviesa un edificio en Liziba", "Hotpot de Chongqing"] }
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const routeId = tab.dataset.route;

    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    panels.forEach((panel) => panel.classList.toggle("is-active", panel.id === routeId));
  });
});

stopCards.forEach((card) => {
  card.addEventListener("click", () => {
    const detail = stopDetails[card.dataset.stop];
    document.querySelector("#stop-dialog-kicker").textContent = detail.kicker;
    document.querySelector("#stop-dialog-title").textContent = detail.title;
    document.querySelector("#stop-dialog-intro").textContent = detail.intro;
    document.querySelector(".dialog-image").src = detail.image;
    document.querySelector(".dialog-image").alt = detail.alt;
    document.querySelector("#stop-dialog-list").innerHTML = detail.items.map((item) => `<li>${item}</li>`).join("");
    dialog.showModal();
  });
});

closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
