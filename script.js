document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar .nav-link");
  
    function onScroll() {
        let scrollPos = window.scrollY + 100;
  
        sections.forEach((section) => {
            if (
                section.offsetTop <= scrollPos &&
                section.offsetTop + section.offsetHeight > scrollPos
            ) {
                navLinks.forEach((link) => link.classList.remove("active"));
                const activeLink = document.querySelector(
                    `#navbar a[href="#${section.id}"]`
                );
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }
  
    document.addEventListener("scroll", onScroll);
});
  
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("section > header");
  
    headers.forEach((header) => {
        const section = header.parentElement;
        const contentElements = [...section.children].filter(
            (el) => el !== header
        );
    
        const icon = document.createElement("span");
        icon.textContent = " ⯆";
        icon.style.cursor = "pointer";
        icon.style.marginLeft = "10px";
        header.appendChild(icon);
        header.style.cursor = "pointer";
    
        header.addEventListener("click", () => {
            const isHidden = contentElements[0].style.display === "none";
            contentElements.forEach((el) => {
                el.style.display = isHidden ? "block" : "none";
            });
            icon.textContent = isHidden ? " ⯆" : " ⯈";
        });
    });
});
  
  
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.createElement("button");
    toggle.textContent = "🌓";
    toggle.id = "darkModeToggle";
    toggle.title = "Toggle Dark Mode";
    toggle.style.position = "fixed";
    toggle.style.top = "1rem";
    toggle.style.right = "1rem";
    toggle.style.zIndex = 1000;
    toggle.style.padding = "0.5rem 1rem";
    toggle.style.border = "none";
    toggle.style.borderRadius = "5px";
    toggle.style.cursor = "pointer";
    toggle.style.backgroundColor = "#333";
    toggle.style.color = "#fff";
  
    document.body.appendChild(toggle);
  
    const enableDarkMode = () => {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    };
  
    const disableDarkMode = () => {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    };
  
    toggle.addEventListener("click", () => {
        if (document.body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
  
    if (localStorage.getItem("theme") === "dark") {
        enableDarkMode();
    }
});
  
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.createElement("button");
    btn.textContent = "↑ Top";
    btn.id = "backToTop";
    btn.style.position = "fixed";
    btn.style.bottom = "2rem";
    btn.style.right = "1rem";
    btn.style.padding = "0.5rem 1rem";
    btn.style.display = "none";
    btn.style.zIndex = 999;
    btn.style.border = "none";
    btn.style.backgroundColor = "#007bff";
    btn.style.color = "#fff";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
  
    document.body.appendChild(btn);
  
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    window.addEventListener("scroll", () => {
        btn.style.display = window.scrollY > 300 ? "block" : "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navbar");
    const navList = nav.querySelector("ul");
  
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "hamburgerToggle";
    toggleBtn.innerHTML = "☰";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "1rem";
    toggleBtn.style.left = "1rem";
    toggleBtn.style.zIndex = 1001;
    toggleBtn.style.fontSize = "1.5rem";
    toggleBtn.style.background = "transparent";
    toggleBtn.style.border = "none";
    toggleBtn.style.color = "#007bff";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.display = "none";
  
    document.body.appendChild(toggleBtn);
  
    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
});
  
  