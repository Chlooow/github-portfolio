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
        { title: "I.M Chatbot", 
          description: `IN DEVELOPMENT - This project is to explore and try to develop a AI Chatbot on the theme of I.M a famous singer from Korea. 
          By taking the ressources and knowledges from IBM course build your own chatbot, i'm able to do a chatbot with Javascript, PHP, HTML/CSS and JQuery and AJAX request. 
          The project doesn't use models for now but i'll try to explore this path in the futur
          Language : PHP, HTML/CSS, Javascript`, 
          image: "images/projets/data/imchat.png" 
        },
        { title: "Bambam Chatbot", 
          description: `IN DEVELOPMENT - This project is to explore and try to develop a AI Chatbot on the theme of Bambam a famous Thai singer based in South Korea. 
          By taking the ressources and knowledges from fine-tuning, by created my own model from Bambam's content (X, Interview on Youtube...etc).
          Language : Python + Flask`, 
          image: "images/projets/data/bambamchatbot.png" 
        },
        { title: "Mini AI Chatbot", 
          description: `This project explores IBM Watson Assistant through the "Build Your Own Chatbot" course. The goal is to create a customized chatbot for a specific use case, such as a business website. Through this project, I learned how to structure an AI assistant using key concepts such as:
          - Intents: Understanding user intentions
          - Entities: Identifying key information in user messages
          - Dialogues: Building a smooth conversational flow
          - Context Variables and Slots: Managing memory and dynamic interactions
          I also applied these concepts to design my own personal chatbot. This project allowed me to earn a digital credential and strengthen my knowledge of Watson Assistant and chatbot development fundamentals.
          Language : Python + Flask
          Link : https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Feu-de.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-642c9c61-435a-43a7-bde2-bc85aace7e36%3A%3A10a22d45-4eb1-4a3d-8af8-758fccc3b878&integrationID=5c9ff6a5-f3d8-4674-bae0-843036beb7dc&region=eu-de&serviceInstanceID=642c9c61-435a-43a7-bde2-bc85aace7e36`, 
          image: "images/projets/data/cholorchatbot.png" 
        },
        { title: "Binary classification of artificial medical data and personal data", 
          description: `A machine learning project focused on predicting patient survival during hospital stays using supervised learning techniques. The dataset includes information from 80,000 patients with 342 variables such as age, gender, blood pressure, glucose levels, and more.
          The goal is to build a predictive model that analyzes medical, demographic, and clinical data to determine the likelihood of a patient's survival based on their health records.
          Language : Python + Jupyter Notebook
          link to the repository: https://github.com/Chlooow/ISD_Projet/tree/main`, 
          image: "images/projets/data/isd.png" 
        },
        { title: "Prediction of a Kpop group success mini project", 
          description: `A supervised learning project aiming to predict the success of GOT7's songs using techniques such as gradient descent, logistic regression, perceptron, PCA/SVM, and convergence analysis. 
          Although based on fictional data, the project leverages relevant features to forecast a song's popularity based on various metrics. (Mini IAS project to apply knowledge acquired during the module.)
          Language : Python + Jupyter Notebook
          link to the repository: https://github.com/Chlooow/GOT7_Success`, 
          image: "images/projets/data/kpopsuccess.png" 
        },
        { title: "Mini Database management projects", 
          description: `I designed databases to meet specific requirements:
          -Sports Club Management System:
          I created a database to organize sports events, managing sports types, venues (indoor/outdoor), fields, participants, and roles (organizer/player), with consideration for skill levels.
          -Camping Management System:
          I developed a database for a camping site, handling reservations, customer information, accommodations (tents, bungalows), and activity management, while tracking availability and services.
          Language : SQL`, 
          image: "images/projets/data/bdd.png" 
        }
    ],

    "Web Development": [
        { title: "Portfolio personnel", 
          description: `My interactif portforlio .
          Language : Html + css + javascript`, 
          image: "images/projets/web/portfolio.png" 
        },
        { title: "Showme", 
          description: `During my development internship at TDF, I worked on ShowMe, a Python Flask application for network monitoring. 
          I maintained and improved the application by implementing new features and enhancing its deployment process. In particular, 
          I added Docker support to streamline deployment and ensure consistent environments across different systems. This project allowed me to gain hands-on experience with web development,
           network monitoring tools, and containerization.
          Language : Python + Flask`, 
          image: "images/projets/web/showme.PNG" 
        },
        { title: "CafeCampus Start-up", 
          description: ` CaféCampus mobile application (PHP+Oracle)
          CaféCampus is an innovative solution designed to address the issue of coffee machine availability on the Université Paris-Saclay campus. 
          The app aims to enhance the experience of both students and staff by providing real-time information on the status of coffee machines, 
          including their availability and any malfunctions. 
          A little startup for this course and explore the side of creating one
          Language : HTML/CSS + PHP + Oracle
          link to the repository :https://github.com/Chlooow/CafeCampus_CMS`, 
          image: "images/projets/web/cafecampus.png" 
        },
        { title: "Ahgavote - Voting plateform", 
          description: `Aghavote is an online voting platform designed to manage elections in a simple and efficient way. 
          Inspired by platforms like Belenios and Balotilo, Aghavote allows organizers to create secure and anonymous online votes, while simplifying the management of proxies and participation tracking. 
          This project was developed to explore web programming concepts such as jQuery and AJAX.
          Language : HTML/CSS + PHP
          link to the repository: https://github.com/Chlooow/ProgWeb_IGOTvote`, 
          image: "images/projets/web/aghavote.png" 
        },
        { title: "Epayi Ya Makoundou - shopping website", 
          description: `shopping website using and learning about React and Node.js
          Language : React + Node.js`, 
          image: "images/projets/web/ahgavote.png" 
        },
        
        
    ],
    "UI/UX Design": [
        { title: "Collab Campus",
          description: `JavaFX Text processing application to learn more about User Interfaces as well as User experience concept
          Language: Java + Java FX
          link to the repository :https://github.com/Chlooow/PIIA_CollabCampus `, 
          image: "images/projets/uxui/collabcampus.png" 
        },
        { title: "Garden App project",
          description: `Mini project in order to learn about UX/UI and HCI interaction by designing a Garden managment`, 
          image: "images/projets/uxui/garden.png" 
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
          Link to the repository :https://github.com/Chlooow/Projet_Ulam_IGSD `, 
          image: "images/projets/algo/ulam.png" 
        },
        { 
          title: "Simulation of an ant colony ", 
          description: `A simulation of an ant colony on a 20x20 grid, where ants search for sugar, avoid obstacles, and interact with their environment using pheromone trails. Ants follow "nest pheromones" to return home and leave "sugar pheromones" to guide others to food sources.
          This project showcases concepts like pathfinding, 
          environmental interaction
          langage : C++
          Link to the repository : https://github.com/Chlooow/Projet_Fourmis_ProgImp`, 
          image: "images/projets/algo/antswalk.gif" 
        },
        { 
          title: "Algorithm homework", 
          description: `A homework to understand the concepts of lists and trees
          langage : C`, 
          image: "images/projets/algo/DMalgo.png" 
        },
        { 
          title: "Solitaire game homework", 
          description: `A homework to understand functional programming
          langage : OCaml`, 
          image: "images/projets/algo/solitaire.png" 
        },
        { 
          title: "industrialization of image based software", 
          description: `A project from my Intro to Computer Science (Info 111) course, focused on basic image processing techniques like binary and grayscale manipulation,
           edge detection, color processing, and region segmentation. It helped me apply core programming concepts such as loops, arrays, functions, and modular design.
          langage : C++
          Link to the repository :https://github.com/Chlooow/Projet_Image_IntroInfo `, 
          image: "images/projets/algo/projetimage.png" 
        },
        { 
          title: "System homework", 
          description: `A homework to understand system and concurrential programming
          langage : C`,
          image: "images/projets/algo/system.png" 
        }
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





