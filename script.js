document.addEventListener("DOMContentLoaded", function () {
    // 1. Fun Greeting Message  
    setTimeout(() => {
        alert("Welcome to my resume! 💜");
    }, 500); // Shows after 0.5 seconds

    // 2. Floating Animation on Hover (for your name)  
    let headerName = document.querySelector("header h1"); // Adjust selector if needed
    headerName.addEventListener("mouseenter", function () {
        this.style.transition = "transform 0.3s ease-in-out";
        this.style.transform = "translateY(-5px)"; // Moves up slightly
    });

    headerName.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"; // Returns to normal position
    });

    // 3. Back to Top Button  
    let topButton = document.createElement("button");
    topButton.innerText = "⬆ Back to Top";
    topButton.style.position = "fixed";
    topButton.style.bottom = "20px";
    topButton.style.right = "20px";
    topButton.style.padding = "10px 15px";
    topButton.style.borderRadius = "10px";
    topButton.style.border = "none";
    topButton.style.backgroundColor = "#bb88ff";
    topButton.style.color = "white";
    topButton.style.fontSize = "1em";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none"; // Hidden initially
    document.body.appendChild(topButton);

    // Show button when scrolling down  
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    // Scroll back to top when clicked  
    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 4. Subtle Section Fade-In Effect  
    let sections = document.querySelectorAll(".content-section");  
    function fadeInSections() {
        sections.forEach(section => {
            let sectionPosition = section.getBoundingClientRect().top;
            let screenPosition = window.innerHeight - 100; // Trigger effect slightly before visible
            if (sectionPosition < screenPosition) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    // Initial state: make sections invisible  
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)"; // Starts slightly lower
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    // Trigger fade-in on scroll  
    window.addEventListener("scroll", fadeInSections);
    fadeInSections(); // Run on page load in case sections are already visible
  
});

