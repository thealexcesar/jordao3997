/* i18n
------------------------------------------------------------------------------------------------ */
async function language(lang) {
    try {
        const response = await fetch(`./src/locales/${lang}.json`);
        const data = await response.json();

        console.log(`Dados carregados para (${lang})`, data);

        updateContent(data);
        updateMetaTags(data);
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
    } catch (error) {
        console.error('Erro ao carregar arquivo JSON:', error);
    }
}

function updateContent(data) {
    const elementsToTranslate = document.querySelectorAll('.i18n');

    elementsToTranslate.forEach(element => {
        updateElement(element, data);
    });
}

function updateElement(element, data) {
    element.childNodes.forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE && child.classList.contains('i18n')) {
            updateElement(child, data);
        } else if (child.nodeType === Node.ELEMENT_NODE && child.id && data[child.id]) {
            child.textContent = data[child.id];
        }
    });

    if (element.id && data[element.id]) {
        element.textContent = data[element.id];
    }
}

function updateMetaTags(data) {
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    const metaTwitterDescription = document.querySelector('meta[name="twitter:description"]');
    const titleElement = document.querySelector('title');

    if (titleElement && data.title) {
        titleElement.textContent = data.title;
    }
    if (metaDescription) {
        metaDescription.content = data.meta.description;
    }

    if (metaOgDescription) {
        metaOgDescription.content = data.meta.description;
    }

    if (metaTwitterDescription) {
        metaTwitterDescription.content = data.meta.description;
    }
}

function getDefaultLanguage() {
    return navigator.language.split('-')[0];
}

async function init() {
    let lang = localStorage.getItem('language') || getDefaultLanguage();

    try {
        await language(lang);
    } catch (error) {
        console.error('Erro ao inicializar aplicativo:', error);
    }
}

/* Theme
------------------------------------------------------------------------------------------------ */
function setTheme(theme) {
    const htmlElement = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    if (htmlElement && themeIcon) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            themeIcon.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeIcon.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('light');
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    initTheme();
    // toggleMenus();

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

  /*  const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenuDisplay);
    }*/
});

/*
function toggleMenuDisplay() {
    const abcMenu = document.querySelector('.abc-menu');
    if (abcMenu.style.display === 'none' || abcMenu.style.display === '') {
        abcMenu.style.display = 'block';
    } else {
        abcMenu.style.display = 'none';
    }

    console.log('Menu ícone clicado!');
}

function toggleMenus() {
    const smallScreen = window.matchMedia("(max-width: 600px)");

    function handleToggle(e) {
        const menu = document.querySelector('.menu');
        const abcMenu = document.querySelector('.abc-menu');

        if (e.matches) {
            menu.style.display = 'block';
            abcMenu.style.display = 'none';
        } else {
            menu.style.display = 'none';
            abcMenu.style.display = 'block';
        }
    }

    handleToggle(smallScreen);
    smallScreen.addListener(handleToggle);
}
*/
