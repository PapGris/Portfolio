/* ceci est un commentaire js */
// console.log('toto');

// string

let myVar = "ma variable";
myVar = "variable changée";

const myVar2 = "ma variable 2";

// console.log(myVar);

// boolean
let isTrue = true;
let isFalse = false;

// console.log(isFalse);

// chiffres et opérateurs

let chiffre1 = 4; 
let chiffre2 = 3;

// console.log(chiffre1 + chiffre2);

// template string, littéraux de gabarits et concat

let test = "test " + myVar + "value";
let test2 = `test ${myVar}`;

// console.log(test2)
/*
if(chiffre1 <= 3) {
    console.log("condition est valide");
} else if (chiffre1 <=4) {
    console.log("je passe la")
} else {
    console.log("condition pas valide")
}


// tableaux

let array = ["item 1", "item 2", "item 3", "item 4"];
console.log(array[3]);

// objets

let obj = {
    title: "Mon titre",
    description: "Ma description"
}

console.log(obj.title, obj.description);

// les boucles, while, for, foreach
/*
for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

array.forEach(item => {
    console.log(item);
});

*/

// fonctions

/*function myFunction(item, item2) {
    console.log(item, item2);
}*/

const myFunction = (item, item2) => {
    // console.log(item, item2);
}

myFunction("toto",5);
myFunction("tata",6);

const calcul = (nb1, nb2) => {
    return nb1 + nb1;
}

let result = calcul(4, 5);
// console.log(result);

// interagir avec le dom // methode, propriete, evenement

// selectors
// let header = document.querySelector(".header");
// console.log(header);

// let grids = document.querySelectorAll(".grid");
/* 
grids.forEach(grid => {
   grid.classList.add("titi");
   console.log(grid)
});
*/
// evenements les plus courants
/*
document.addEventListener("DOMContentLoader", () => {
    console.log("DOM entièrement chargé et analysé");
});

header.addEventListener("click", (e) => {
    console.log(e);
});

header.addEventListener("mouseenter", (e) => {
    console.log("souris entre");
});*/

// insertion dom et navigation dans le dom

let div = document.createElement("div");
div.classList.add("top");
div.innerHTML = `<span>Top zone</span>`;
// console.log(header.nextElementSibling);

// fin de la théorie

/* Menu Mobile */

function menuMobile() {
    const btn = document.querySelector(".burger");
    const header = document.querySelector(".header");
    const links = document.querySelectorAll(".navbar a");

    btn.addEventListener("click", () => {
        header.classList.toggle("show-nav");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            header.classList.remove("show-nav");
        });
    });
}

menuMobile();

/* Portfolio */

function tabsFilters() {
    const tabs = document.querySelectorAll(".portfolio-filters a");
    const projets = document.querySelectorAll(".portfolio .card");

    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove("active");
        })
    }

    const showProjects = (elem) => {
        console.log(elem)
        projets.forEach(projet => {

            let filter = projet.getAttribute("data-category");

            if(elem =="all") {
                projet.parentNode.classList.remove("hide");
                return
            }


            // ne sera pas pris en compte
            if(filter !== elem) {
                projet.parentNode.classList.add("hide");
            } else {
                projet.parentNode.classList.remove("hide");
            }

           // console.log(projet);
        })
    }

    tabs.forEach(elem => {
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            let filter = elem.getAttribute("data-filter");
            // console.log(filter);
            showProjects(filter)
            resetActiveLinks();
            elem.classList.add("active");
        })
    })

}

tabsFilters()

function showProjectsDetails() {
    const links = document.querySelectorAll(".card__link");
    const modals = document.querySelectorAll(".modal");
    const btns = document.querySelectorAll(".modal__close");

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove("show");
        });
    }

    links.forEach(elem => {
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add("show");
        });
    });

    btns.forEach(btn => {
        btn.addEventListener("click", (event) => {
           hideModals();
        });
    });

}

showProjectsDetails();

// effets

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll("section");
    const compétences = document.querySelectorAll(".compétences .bar");


    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transition = "all 2s";
    });

    compétences.forEach((elem, index) => {
        elem.style.width = "0";
        elem.style.transition = "all 2s";
    });

    let sectionObserveur = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let elem = entry.target;
                elem.style.opacity = 1
            }
        })
    });

    sections.forEach(section => {
        sectionObserveur.observe(section)
    });

    let compétencesObserveur = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let elem = entry.target;
                elem.style.width = elem.dataset.width + "%";
            }
        })
    });

    compétences.forEach(compétences => {
        compétencesObserveur.observe(compétences)
    });
}

observerIntersectionAnimation ();