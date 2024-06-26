document.addEventListener('DOMContentLoaded', () => {
    init();
    initTheme();
    const themeToggleBtn = document.getElementById('theme-icon');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
});

async function language(lang) {
    try {
        const response = await fetch(`./src/locales/${lang}.json`);
        const data = await response.json();
        console.log(`Dados carregados para (${lang})`, data);

        updateContent(data);
        updateMetaTags(data);
        updateLanguageDropdown(data.lang);
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
        updateCurrentLanguageDisplay(lang, data.lang);
    } catch (error) {
        console.error('Erro ao carregar arquivo JSON:', error);
    }
}

function updateContent(data) {
    const elementsToTranslate = document.querySelectorAll('.i18n');
    elementsToTranslate.forEach(element => updateElement(element, data));
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

function updateCurrentLanguageDisplay(lang, languageNames) {
    const currentLanguageElement = document.getElementById('current-language');
    currentLanguageElement.textContent = languageNames[lang] || 'English';
}

function updateLanguageDropdown(languageNames) {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        const langKey = link.id.split('.')[1];
        if (languageNames[langKey]) {
            link.textContent = languageNames[langKey];
        }
    });
}

function getDefaultLanguage() {
    return navigator.language.split('-')[0];
}

async function init() {
    let lang = localStorage.getItem('language') || getDefaultLanguage();
    await language(lang);
}

/* Theme
------------------------------------------------------------------------------------------------ */
function setTheme(theme) {
    const htmlElement = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const icon = (t, i) => `<li id="theme-icon ${theme}" class="flex"><i class="fas fa-${t} fa-lg" title="${i}"></i></li> ${i}`;

    if (htmlElement && themeIcon) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeIcon.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon', theme === 'dark' ? ' Light' : ' Dark');
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}
