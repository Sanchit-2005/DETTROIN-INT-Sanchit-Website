console.log("basic website is  Loaded Successfully");
/* ==============================
        GALLERY DATA
================================ */

const galleryData = {

    campus: [
        {
            img: "images/campus1.jpg",
            title: "Main Campus"
        },
        {
            img: "images/campus2.jpg",
            title: "Smart Classroom"
        },
        {
            img: "images/campus3.jpg",
            title: "Science Lab"
        },
        {
            img: "images/campus4.jpg",
            title: "Campus View"
        }
    ],

    academics: [
        {
            img: "images/academic1.jpg",
            title: "Interactive Learning"
        },
        {
            img: "images/academic2.jpg",
            title: "Digital Classroom"
        },
        {
            img: "images/academic3.jpg",
            title: "Creative Learning"
        }
    ],

    sports: [
        {
            img: "images/sports1.jpg",
            title: "Football"
        },
        {
            img: "images/sports2.jpg",
            title: "Basketball"
        },
        {
            img: "images/sports3.jpg",
            title: "Athletics"
        }
    ],

    events: [
        {
            img: "images/event1.jpg",
            title: "Annual Day"
        },
        {
            img: "images/event2.jpg",
            title: "Cultural Fest"
        },
        {
            img: "images/event3.jpg",
            title: "Science Exhibition"
        }
    ],

    labs: [
        {
            img: "images/lab1.jpg",
            title: "Computer Lab"
        },
        {
            img: "images/lab2.jpg",
            title: "Physics Lab"
        },
        {
            img: "images/lab3.jpg",
            title: "Chemistry Lab"
        }
    ],

    library: [
        {
            img: "images/library1.jpg",
            title: "Modern Library"
        },
        {
            img: "images/library2.jpg",
            title: "Reading Zone"
        },
        {
            img: "images/library3.jpg",
            title: "Digital Library"
        }
    ]

};

/* ==============================
        SELECT ELEMENTS
================================ */

const buttons = document.querySelectorAll(".gallery-filter button");

const leftImage = document.querySelector(".gallery-card.left img");
const centerImage = document.querySelector(".gallery-card.active img");
const rightImage = document.querySelector(".gallery-card.right img");

const leftTitle = document.getElementById("left-title");
const centerTitle = document.getElementById("center-title");
const rightTitle = document.getElementById("right-title");

const prevButtons = document.querySelectorAll(".prev");
const nextButtons = document.querySelectorAll(".next");

/* ==============================
        VARIABLES
================================ */

let currentCategory = "campus";
let currentIndex = 0;

/* ==============================
        UPDATE GALLERY
================================ */

function updateGallery() {

    const images = galleryData[currentCategory];

    const leftIndex =
        (currentIndex - 1 + images.length) % images.length;

    const rightIndex =
        (currentIndex + 1) % images.length;

    leftImage.src = images[leftIndex].img;
    centerImage.src = images[currentIndex].img;
    rightImage.src = images[rightIndex].img;

    leftTitle.textContent = images[leftIndex].title;
    centerTitle.textContent = images[currentIndex].title;
    rightTitle.textContent = images[rightIndex].title;

}

/* ==============================
        CATEGORY BUTTONS
================================ */

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentCategory = button.dataset.category;

        currentIndex = 0;

        updateGallery();

    });

});

/* ==============================
        NEXT
================================ */

nextButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const images = galleryData[currentCategory];

        currentIndex++;

        if (currentIndex >= images.length) {

            currentIndex = 0;

        }

        updateGallery();

    });

});

/* ==============================
        PREVIOUS
================================ */

prevButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        const images = galleryData[currentCategory];

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex = images.length - 1;

        }

        updateGallery();

    });

});

/* ==============================
        AUTO SLIDE
================================ */

setInterval(() => {

    const images = galleryData[currentCategory];

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    updateGallery();

}, 5000);

/* ==============================
        INITIAL LOAD
================================ */

updateGallery();



const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            counters.forEach(counter=>{

                const target = +counter.dataset.target;

                let count = 0;

                const speed = target/100;

                function update(){

                    count += speed;

                    if(count < target){

                        counter.innerText = Math.ceil(count);

                        requestAnimationFrame(update);

                    }else{

                        counter.innerText = target;

                    }

                }

                update();

            });

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".achievement-banner"));