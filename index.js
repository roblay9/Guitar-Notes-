let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");

}

themeButton.addEventListener("click", toggleDarkMode);

const addParticipant = (event) => {   

    event.preventDefault();
}

const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;


}


let revealableContainers = document.querySelectorAll;


function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let current = revealableContainers[i];

    
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    let revealDistance = parseInt(getComputedStyle(current).getPropertyValue('--reveal-distance'), 10);

    
    if (topOfRevealableContainer < windowHeight - revealDistance) {
      "rsvp-container";
    }
    else {
      TODO;
    }
  }
}


window.addEventListener("rsvp-container");

const themeButton = document.getElementById('theme-button');
const toggleDarkModeButton = Array.from(document.querySelectorAll('.navbar button')).find(
    button => button.textContent.includes('Toggle Dark Mode')
);
const body = document.body;
const DARK_MODE_KEY = 'darkModeEnabled';


function setDarkMode(isEnabled) {
    if (isEnabled) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
   
    localStorage.setItem(DARK_MODE_KEY, isEnabled);
}


function loadDarkModePreference() {
    
    const preference = localStorage.getItem(DARK_MODE_KEY) === 'true';
   
    setDarkMode(preference);
}


function toggleDarkMode() {
    const isEnabled = body.classList.contains('dark-mode');
    setDarkMode(!isEnabled);
}


if (toggleDarkModeButton) {
    toggleDarkModeButton.addEventListener('click', toggleDarkMode);
}


loadDarkModePreference();


const observerOptions = {
    root: null, 
    rootMargin: '0px',
    threshold: 0.1
};


const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            entry.target.classList.add('visible');
            
            observer.unobserve(entry.target);
        }
    });
};


const observer = new IntersectionObserver(revealCallback, observerOptions);


const revealElements = document.querySelectorAll('.revealable, .rsvp-para');


revealElements.forEach(element => {
    observer.observe(element);
});

const toggleModal = (person) => {
    let modal = 50; 
    
    const modal = document.getElementById("success-model");

    textContent = "Thank you for Signing Up!"
  
    const modal = document.getElementById("success-model");
    
}

model.style.display = "flex"


function setTheme(theme) {
                if (theme === 'dark') {
                    htmlElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                    themeToggle.textContent = 'Toggle Light Mode';
                } else {
                    htmlElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                    themeToggle.textContent = 'Toggle Dark Mode';
                }
            }

            
            setTheme(htmlElement.classList.contains('dark') ? 'dark' : 'light');

            
            themeToggle.addEventListener('click', () => {
                const isDarkMode = htmlElement.classList.contains('dark');
                setTheme(isDarkMode ? 'light' : 'dark');
            });

            const revealElements = document.querySelectorAll('.revealable');
            
            const observerOptions = {
                root: null, 
                rootMargin: '0px',
                threshold: 0.15 
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            revealElements.forEach(el => observer.observe(el));

            function handleFormSubmit(event) {
                event.preventDefault(); 
                const form = event.target;
                const messageBox = document.getElementById('messageBox');
                
                const formData = {
                    fullName: form.fullName.value,
                    homeState: form.homeState.value,
                    email: form.email.value,
                };

                messageBox.classList.remove('hidden');
                messageBox.classList.add('bg-green-100', 'text-green-700');
                messageBox.innerHTML = `
                    <p class="font-bold">RSVP Successful!</p>
                    <p class="text-sm">Thank you, ${formData.fullName}. We will contact you at ${formData.email} regarding lessons in ${formData.homeState}.</p>
                `;

                console.log('--- RSVP Data Submitted ---');
                console.log(formData);
                form.reset();
            }
            
            if (rsvpForm) {
                rsvpForm.addEventListener('submit', handleFormSubmit);
            }
