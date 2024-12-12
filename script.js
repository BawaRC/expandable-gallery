const slides = document.querySelectorAll(".slide");

// Function to set the active slide based on the index
function setActiveSlide(index) {
    removeActiveClasses();
    slides[index].classList.add("active");
}

// Function to remove active classes from all slides
function removeActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
}

// Event listeners for each slide
slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        setActiveSlide(index);
        // Store the active slide index in localStorage
        localStorage.setItem('activeslideIndex', index);
    });
});

// Check localStorage for the active slide index on page load
const activeslideIndex = localStorage.getItem('activeslideIndex');
if (activeslideIndex !== null) {
    setActiveSlide(parseInt(activeslideIndex));
}