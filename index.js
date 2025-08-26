// -------------------------TRADUCTIONS

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

// ---------------------- FIN TRADUCTION

window.addEventListener("DOMContentLoaded", () => {
  const firstSection = document.querySelector(".section.active");
  if (firstSection) {
    setTimeout(() => {
      firstSection.style.opacity = 1;
    }, 50); // petit délai pour forcer l’animation
  }
});

// ---------------------------------- WORK SECTION - PROJECT DETAILS

const listItems = document.querySelectorAll('.list-item');
const projectDetail = document.getElementById('project-detail');
const backBtn = document.getElementById('back-btn'); // bouton fixe

const projects = {
    "Datascience and IA": [
        { title: "Prédiction des prix de maisons", description: "Utilisation de modèles de régression pour prédire les prix.", image: "images/houseprice.jpg" },
        { title: "Analyse de sentiments", description: "Classification de tweets selon leur polarité (positif, négatif, neutre).", image: "images/sentiment.jpg" }
    ],
    "Web Development": [
        { title: "Portfolio personnel", 
          description: `My interactif portforlio .
          Langage : Html + css + javascript`, 
          image: "images/projets/web/portfolio.png" 
        },
        { title: "CafeCampus Start-up", 
          description: ` CaféCampus mobile application (PHP+Oracle)
          CaféCampus is an innovative solution designed to address the issue of coffee machine availability on the Université Paris-Saclay campus. 
          The app aims to enhance the experience of both students and staff by providing real-time information on the status of coffee machines, 
          including their availability and any malfunctions. 
          A little startup for this course and explore the side of creating one
          Langage : HTML/CSS + PHP + Oracle
          link to the repository :`, 
          image: "images/projets/web/cafecampus.png" 
        },
        { title: "Ahgavote - Voting plateform", 
          description: `Aghavote is an online voting platform designed to manage elections in a simple and efficient way. 
          Inspired by platforms like Belenios and Balotilo, Aghavote allows organizers to create secure and anonymous online votes, while simplifying the management of proxies and participation tracking. 
          This project was developed to explore web programming concepts such as jQuery and AJAX.
          Langage : HTML/CSS + PHP
          link to the repository`, 
          image: "images/projets/web/ahgavote.png" 
        },
        { title: "Epayi Ya Makoundou - shopping website", 
          description: `shopping website using and learning about React and Node.js
          Langage : React + Node.js
          link to the repository`, 
          image: "images/projets/web/ahgavote.png" 
        },
        
        
    ],
    "UI/UX Design": [
        { title: "None",
          description: `None`, 
          image: "images/uiux.jpg" 
        }
    ],

    "Video Games": [
        { title: "Frogger", 
          description: `Retro game from 1981 by Konami in order to explore Object programming concept made in group of two.
          language : Java
          link to the repository : https://github.com/Cheima1/Frogger `, 
          image: "images/projets/videogame/frogger.png" 
        },
        { title: "Forbidden Island/Desert", 
          description: `Board game in order to explore Object programming + Software engineering concept such as UML diagrams. Made in group of two
          language : Java
          link to the repositories : https://github.com/Chlooow/Projet_IleInterdite_POGL
           https://github.com/Chlooow/ForbiddenDesert_POGL`, 
          image: "images/projets/videogame/desertinterdit.png" 
        },
        { title: "Egyptian Labyrinth", 
          description: `POV game linking 3D graphics and data + Processing in order to explore the graphical interfaces and 3D programming made in group of two.
          language : Java + Processing
          link to the repository : https://github.com/Chlooow/Projet_Egypte_IGSD `, 
          image: "images/projets/videogame/pyramid.png" 
        },
        { title: "Heptagon Catcher", 
          description: `Catcher type of game with GOT7 new album theme using pygame dependencies. I was also able to create for the first time game designs.
          language : Python
          link to the repository : https://github.com/Chlooow/Heptagon-Catcher `, 
          image: "images/projets/videogame/heptagon.png" 
        },
        { title: "Baccalaureate training game", 
          description: `in this project i was able to discover programming for the first time. It was a free project and with my team we had decided to do something that will help student study for the baccalaureat
          language : C
          link to the repository : https://github.com/Chlooow/Projet_ABACA_ISN `, 
          image: "images/projets/videogame/mapabaca.bmp" 
        },
    ],

    "Algorithm and System": [
        { 
          title: "Pyramid of Ulam", 
          description: `Mathematical representation in the form of a 3D pyramid + 
          Processing in order to explore the graphical interfaces and 3D programming.
          langage : Java + Processing
          Link to the repository : `, 
          image: "images/algorithm.jpg" 
        },
        { 
          title: "Simulation of an ant colony ", 
          description: `A simulation of an ant colony on a 20x20 grid, where ants search for sugar, avoid obstacles, and interact with their environment using pheromone trails. Ants follow "nest pheromones" to return home and leave "sugar pheromones" to guide others to food sources.
          This project showcases concepts like pathfinding, 
          environmental interaction
          langage : C++
          Link to the repository : `, 
          image: "images/algo/algorithm.jpg" 
        },
        { 
          title: "Algorithm homework", 
          description: `A homework to understand the concepts of lists and trees
          langage : C
          Link to the repository : `, 
          image: "images/algo/algorithm.jpg" 
        },
        { 
          title: "Solitaire game homework", 
          description: `A homework to understand functional programming
          langage : OCaml
          Link to the repository : `, 
          image: "images/algo/algorithm.jpg" 
        },
    ]
};

// Gestion clic sur les thèmes
listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Masquer le texte initial
        document.querySelector('.text-box').style.display = 'none';

        // Réinitialiser les autres list-items
        listItems.forEach(otherItem => {
            otherItem.style.display = 'block';
            otherItem.classList.remove('clicked');
            if (otherItem !== item) otherItem.style.display = 'none';
        });

        // Marquer l'élément cliqué
        item.classList.add('clicked');

        // Récupérer les projets
        const key = item.textContent.trim();
        const projectArray = projects[key];

        // Vider les projets précédents
        projectDetail.querySelectorAll('.project-item').forEach(el => el.remove());

        // Générer les projets
        projectArray.forEach(p => {
            const projectHTML = document.createElement('div');
            projectHTML.classList.add('project-item');
            projectHTML.innerHTML = `
                <div class="project-image">
                    <img src="${p.image}" alt="${p.title}">
                </div>
                <div class="project-info">
                    <h2>${p.title}</h2>
                    <p>${p.description}</p>
                </div>
            `;
            projectDetail.appendChild(projectHTML);

            // Ajoutez un petit délai avant d'ajouter la classe 'show-project'
            setTimeout(() => {
                projectHTML.classList.add('show-project');
            }, 50);
        });

        // Afficher la section détail
        projectDetail.classList.add('active');
        projectDetail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
const backToTopText = document.getElementById('back-to-top-text');

backToTopText.addEventListener('click', (e) => {
    e.preventDefault();  // éviter le saut par défaut
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Gestion clic sur le bouton retour
backBtn.addEventListener('click', () => {
    // Masquer les détails
    projectDetail.classList.remove('active');

    // Réafficher le texte initial
    document.querySelector('.text-box').style.display = 'block';

    // Réafficher toutes les catégories
    listItems.forEach(item => {
        item.style.display = 'block';
        item.classList.remove('clicked'); // <- supprime la classe clicked pour restaurer le style
    });

    // Vider les projets
    projectDetail.querySelectorAll('.project-item').forEach(el => el.remove());

    // Scroll vers le haut de la section
    document.getElementById('work-section').scrollIntoView({ behavior: 'smooth' });
});





// --------------------------------- NAV BAR 

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





