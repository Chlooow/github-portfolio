const translations = {
  en: {
    homeTitle: "CHOLOR’S PORTFOLIO",
    homeIntro: `Welcome to my portfolio showcasing all the IT and UX/UI projects I have completed during my academic years,
            as well as personal projects. I recently graduated with a Bachelor's degree in Computer Science from Paris-Saclay University and will soon be starting a Master's program in Big Data. 
            Ambitious and creative, I am always ready to take on new projects! 
            I am also an artist on social media, so feel free to check out my paintings here ✨<a href="#">My Paintings</a>✨`,
    titleabout: "ABOUT ME",
    intropart1: `Hi, I'm Chloé Makoundou, a passionate Computer Science student who has loved creating and playing on a computer since I was a child. 
                  I enjoy designing things inspired by my daily life, blending creativity with technology. 
                  I'm also a language enthusiast, currently learning Korean, Spanish, Kikongo, and Lingala in addition to French and English, which I speak fluently.`,
    intropart2: `Besides coding, I like traveling, drawing, dancing, and listening to music.
                  These passions fuel my creativity and inspire me in both my personal and academic projects. 
                  I'm interested in several fields of computer science such as Data Science.`,
    introcontact:`Interested in collaborating or learning more about my work? Feel free to reach out through the contacts below. I'd be happy to connect with you!`,
    menu: {
      home: "HOME",
      work: "WORK",
      about: "ABOUT ME",
      contact: "CONTACT"
    }
  },
  fr: {
    homeTitle: "PORTFOLIO DE CHLOE",
    homeIntro: `Bienvenue sur mon portfolio qui met en avant l’ensemble des projets en informatique et en UX/UI que j’ai réalisés au cours de mes années universitaires, ainsi que mes projets personnels.  
                Je suis récemment diplômée d’une Licence en Informatique à l’Université Paris-Saclay et je vais prochainement débuter un Master en Big Data.  
                Ambitieuse et créative, je suis toujours prête à relever de nouveaux défis !  
                Je suis également artiste sur les réseaux sociaux, n’hésitez pas à découvrir mes peintures ici ✨<a href="#">Mes Peintures</a>✨.
 `,
    titleabout: "À PROPOS",
    intropart1: `Salut, je suis Chloé Makoundou, une étudiante passionnée en informatique qui aime créer et jouer sur ordinateur depuis mon enfance.  
                  J’aime concevoir des choses inspirées de ma vie quotidienne, en mêlant créativité et technologie.  
                  Je suis aussi passionnée par les langues : en plus du français et de l’anglais que je maîtrise, j’apprends actuellement le coréen, l’espagnol, le kikongo et le lingala.`,
    intropart2: `En dehors du code, j’aime voyager, dessiner, danser et écouter de la musique.  
                  Ces passions nourrissent ma créativité et m’inspirent dans mes projets personnels comme académiques.  
                  Je m’intéresse particulièrement à plusieurs domaines de l’informatique comme la Data Science.`,
    introcontact:`Intéressé(e) par une collaboration ou envie d’en savoir plus sur mon travail ? N’hésitez pas à me contacter via les coordonnées ci-dessous. Je serai ravie d’échanger avec vous !`,
    menu: {
      home: "ACCUEIL",
      work: "PROJETS",
      about: "À PROPOS",
      contact: "CONTACT"
    }
  }
};

function setHomeText(lang) {
  document.getElementById("title").innerHTML = translations[lang].homeTitle;
  document.getElementById("intro").innerHTML = translations[lang].homeIntro;
}

function setAboutText(lang) {
  document.getElementById("titleabout").textContent = translations[lang].titleabout;
  document.getElementById("intropart1").textContent = translations[lang].intropart1;
  document.getElementById("intropart2").textContent = translations[lang].intropart2;
}

function setContactText(lang) {
    document.getElementById("introcontact").textContent = translations[lang].introcontact;
}

function setWorkText(lang) {

}

function setMenuText(lang) {
  document.getElementById("home").innerHTML = translations[lang].menu.home;
  document.getElementById("work").innerHTML = translations[lang].menu.work;
  document.getElementById("about").innerHTML = translations[lang].menu.about;
  document.getElementById("contact").innerHTML = translations[lang].menu.contact;
}

// Fonction globale
function setLanguage(lang) {
  setHomeText(lang);
  setAboutText(lang);
  setMenuText(lang);
  setContactText(lang);
}

window.addEventListener("DOMContentLoaded", () => {
  const firstSection = document.querySelector(".section.active");
  if (firstSection) {
    setTimeout(() => {
      firstSection.style.opacity = 1;
    }, 50); // petit délai pour forcer l’animation
  }
});


const sections = document.querySelectorAll('.section');
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.id + '-section';
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;

    const activeSection = document.querySelector('.section.active');
    if (activeSection === targetSection) return;

    // fade out
    activeSection.style.opacity = 0;

    setTimeout(() => {
      activeSection.classList.remove('active');
      targetSection.classList.add('active');

      // petit délai pour que le fade in fonctionne
      setTimeout(() => {
        targetSection.style.opacity = 1; // fade in
      }, 20);
    }, 600); // correspond à la durée de la transition CSS
  });
});





