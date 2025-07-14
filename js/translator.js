// Simple website translator for English to Spanish
const translations = {
    // Navigation
    "Website Development": "Desarrollo Web",
    "About": "Acerca de",
    "Services": "Servicios",
    "Resources": "Recursos",
    "Blog": "Blog",
    "Schedule a Call": "Programar una Llamada",
    
    // Hero section
    "Professional websites tailored to your business needs - from simple static sites to dynamic web applications": 
    "Sitios web profesionales adaptados a las necesidades de su negocio - desde sitios estáticos simples hasta aplicaciones web dinámicas",
    
    // Package titles and descriptions
    "Essential Package": "Paquete Esencial",
    "Professional Package": "Paquete Profesional",
    "Enterprise Package": "Paquete Empresarial",
    
    // Pricing USD to CRC conversions
    "$799": "₡415,000",
    "$1,499": "₡779,000",
    "$2,999": "₡1,559,000",
    "$800": "₡416,000",
    "$850": "₡442,000",
    "$600": "₡312,000",
    "$500": "₡260,000",
    "$1,500": "₡780,000",
    "$1,800": "₡936,000",
    "$1,200": "₡624,000",
    "$1,000": "₡520,000",
    "Simple and powerful website for professionals.": 
    "Sitio web estático para una presencia confiable en línea.",
    "Dynamic site with branding and CMS.": 
    "Sitio dinámico con CMS y branding personalizado.",
    "Full-featured app with payments & logic.": 
    "Aplicación web completa con pagos y usuarios.",
    
    // Package features
    "Up to 5 static pages": "Hasta 5 páginas",
    "Mobile responsive": "Diseño móvil responsivo",
    "Speed optimization": "Optimización de velocidad",
    "Basic SEO": "SEO básico",
    "Contact form": "Formulario de contacto",
    "Social media links": "Enlaces sociales",
    "Domain + DNS setup": "Configuración de dominio y DNS",
    "Email setup": "1 cuenta de correo electrónico",
    "Technical setup (Vercel + domain)": "Configuración técnica (Vercel + dominio)",
    "1 post-launch milestone": "1 hito de soporte post-lanzamiento",
    "→ Ideal for simple web presence": "→ Ideal para profesionales o pequeños negocios",
    "CMS with editable content": "CMS editable (ej. Supabase)",
    "Custom design & branding": "Diseño personalizado",
    "Advanced SEO": "SEO avanzado",
    "Social media integration": "Integración social",
    "Basic auth (Clerk)": "Autenticación básica (Clerk)",
    "Database support": "Base de datos simple",
    "Domain + email setup": "Dominio y correo electrónico",
    "Technical setup (Supabase, Clerk, Vercel)": "Configuración técnica (Supabase, Vercel, Clerk)",
    "1-hour UX consult": "1 hora de consultoría UX",
    "2 post-launch milestones": "2 hitos de soporte post-lanzamiento",
    "→ For businesses growing online": "→ Para negocios en crecimiento",
    "Full web app (auth, db, payments)": "App con autenticación y pagos",
    "Custom workflows": "Flujos personalizados",
    "User roles": "Roles de usuario",
    "Payment integration": "Integración de pagos",
    "API integrations": "APIs a medida",
    "Supabase + Clerk backend": "Backend Supabase + Clerk",
    "Email + domain setup": "Dominio y correo electrónico",
    "3 post-launch milestones": "3 hitos de soporte post-lanzamiento",
    "→ Ideal for startups & digital businesses": "→ Ideal para startups y negocios digitales",
    
    // Add-on sections
    "Add-On Services": "Servicios Adicionales",
    "Enhance any package with these extra features. Perfect for growing your business without breaking the bank.": 
    "Mejorá cualquier paquete con funciones premium. Pensados para empresas que quieren crecer en digital sin complicaciones.",
    "Professional Package Add-Ons": "Complementos para el Paquete Profesional",
    "Enterprise Package Add-Ons": "Complementos para el Paquete Empresarial",
    
    // Add-on features
    "Business Insights Dashboard": "Panel de Métricas Interno",
    "Starter E-Commerce Setup": "E-commerce Inicial",
    "Flexible Content Editor": "Editor de Contenido Avanzado",
    "Custom Visual Enhancements": "Personalización Visual Extra",
    "Personalized User Portals": "Portales de Usuario Personalizados",
    "Full E-Commerce Integration": "E-commerce Completo",
    "Custom Automation & Logic": "Automatizaciones y Lógica Avanzada",
    "API Connectivity & Sync": "Integraciones API Personalizadas",
    
    // Add-on descriptions
    "Track key metrics in a simple internal dashboard": "Dashboard simple para ver estadísticas del negocio",
    "Add product pages, cart, and checkout functionality": "Página de productos + carrito + checkout",
    "Make updates easier with enhanced content tools": "Mayor facilidad para editar contenidos",
    "Deeper design personalization beyond base package": "Ajustes adicionales al diseño del sitio",
    "Custom dashboards per user role": "Dashboard según el tipo de usuario",
    "Full store setup with inventory, checkout, and payment processing": "Tienda con pagos, inventario y procesamiento de pagos",
    "Workflow logic, automations, and advanced forms": "Flujos, lógica condicional y formularios dinámicos",
    "Connect to external systems like CRMs or ERPs": "Conexión con CRMs u otros sistemas externos",
    
    // Bundle discount content
    "Bundle Discount: Save 10% on 2 add-ons, 15% on 3 add-ons, or 20% on 4+ add-ons!": 
    "¡Descuento por Paquete: Ahorre 10% en 2 complementos, 15% en 3 complementos, o 20% en 4+ complementos!",
    "💡 Bundle Discount: Save 10% on 2 add-ons, 15% on 3 add-ons, or 20% on 4+ add-ons!": 
    "💡 ¡Descuento por Paquete: Ahorre 10% en 2 complementos, 15% en 3 complementos, o 20% en 4+ complementos!",
    "Bundle Discount Details": "Detalles del Descuento por Paquete",
    "2 Add-ons": "2 Complementos",
    "3 Add-ons": "3 Complementos", 
    "4+ Add-ons": "4+ Complementos",
    "10% OFF": "10% DESCUENTO",
    "15% OFF": "15% DESCUENTO",
    "20% OFF": "20% DESCUENTO",
    "Example: $800 + $850 = $1,485 (save $165)": "Ejemplo: ₡416,000 + ₡442,000 = ₡772,200 (ahorre ₡85,800)",
    "Example: $800 + $850 + $600 = $1,912 (save $338)": "Ejemplo: ₡416,000 + ₡442,000 + ₡312,000 = ₡1,015,200 (ahorre ₡175,800)",
    "Example: $800 + $850 + $600 + $500 = $2,200 (save $550)": "Ejemplo: ₡416,000 + ₡442,000 + ₡312,000 + ₡260,000 = ₡1,144,000 (ahorre ₡286,000)",
    
    // Additional translations for the discount examples
    "$1,485 (save $165)": "₡772,200 (ahorre ₡85,800)",
    "$1,912 (save $338)": "₡1,015,200 (ahorre ₡175,800)",
    "$2,200 (save $550)": "₡1,144,000 (ahorre ₡286,000)",
    "(save $165)": "(ahorre ₡85,800)",
    "(save $338)": "(ahorre ₡175,800)",
    "(save $550)": "(ahorre ₡286,000)",
    "Discounts apply to add-ons from the same package tier. Mix and match any add-ons to qualify!": 
    "Los descuentos aplican a complementos del mismo paquete. ¡Combine cualquier complemento para calificar!",
    
    // Why choose section
    "Why Choose Our Website Development?": "¿Por Qué Elegir Nuestro Desarrollo de Sitios Web?",
    "Why Choose Our Desarrollo Web?": "¿Por Qué Elegir Nuestro Desarrollo de Sitios Web?",
    "No Ongoing Maintenance": "Sin Mantenimiento Continuo",
    "Our websites are built to be low-maintenance. We focus on creating reliable solutions that don't require constant updates.": 
    "Nuestros sitios web están construidos para requerir poco mantenimiento. Nos enfocamos en crear soluciones confiables que no requieren actualizaciones constantes.",
    "Performance Optimized": "Rendimiento Optimizado",
    "Fast-loading websites built with modern technologies for optimal performance and reliability.": 
    "Sitios web de carga rápida construidos con tecnologías modernas para un rendimiento y confiabilidad óptimos.",
    "Complete Technical Setup": "Configuración Técnica Completa",
    "From domain acquisition and DNS configuration to hosting setup, we handle all technical aspects of your website.": 
    "Desde la adquisición de dominios y configuración de DNS hasta la configuración de alojamiento, nos encargamos de todos los aspectos técnicos de su sitio web.",
    "Scalable Solutions": "Soluciones Escalables",
    "Start with what you need now and easily upgrade as your business grows without rebuilding from scratch.": 
    "Comience con lo que necesita ahora y actualice fácilmente a medida que su negocio crece sin reconstruir desde cero.",
    
    // Call to action
    "Ready to Get Started?": "¿Listo para Comenzar?",
    "Let's discuss how we can create the perfect website for your business. Schedule a consultation today to explore the possibilities.": 
    "Hablemos sobre cómo podemos crear el sitio web perfecto para su negocio. Programe una consulta hoy para explorar las posibilidades.",
    "Schedule Your Website Consultation": "Programe Su Consulta de Sitio Web",
    "Schedule a Consultation": "Programar una Consulta"
};

// Current language state
let currentLanguage = 'en';

// Function to translate the page
function translatePage(targetLanguage) {
    if (targetLanguage === currentLanguage) return;
    
    // Update language state
    currentLanguage = targetLanguage;
    
    // Update button text
    const translateButton = document.getElementById('translate-button');
    if (translateButton) {
        translateButton.textContent = targetLanguage === 'en' ? 'Español' : 'English';
    }
    
    // Update URL to reflect language change
    updateUrl(targetLanguage);
    
    // Handle specific elements by ID
    const whyChooseHeading = document.getElementById('why-choose-heading');
    if (whyChooseHeading && targetLanguage === 'es') {
        whyChooseHeading.setAttribute('data-original-text', whyChooseHeading.textContent);
        whyChooseHeading.textContent = '¿Por Qué Elegir Nuestro Desarrollo de Sitios Web?';
    }
    
    // If switching to English, restore original content
    if (targetLanguage === 'en') {
        const elementsToRestore = document.querySelectorAll('[data-original-text]');
        elementsToRestore.forEach(element => {
            element.textContent = element.getAttribute('data-original-text');
        });
        return;
    }
    
    // Translate all text nodes in the document
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    let node;
    while (node = walker.nextNode()) {
        const parent = node.parentNode;
        
        // Skip script and style tags
        if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') {
            continue;
        }
        
        const text = node.textContent.trim();
        if (text && text.length > 1) {  // Skip empty or single character nodes
            // Check if we have a translation
            for (const [english, spanish] of Object.entries(translations)) {
                if (text.includes(english)) {
                    // Save original text if not already saved
                    if (!parent.hasAttribute('data-original-text')) {
                        parent.setAttribute('data-original-text', parent.textContent);
                    }
                    
                    // Replace the text
                    node.textContent = node.textContent.replace(english, spanish);
                }
            }
        }
    }
    
    // Translate attributes (like button values, placeholders, etc.)
    const elements = document.querySelectorAll('[value], [placeholder]');
    elements.forEach(element => {
        if (element.hasAttribute('value')) {
            const value = element.getAttribute('value');
            if (translations[value]) {
                if (!element.hasAttribute('data-original-value')) {
                    element.setAttribute('data-original-value', value);
                }
                element.setAttribute('value', translations[value]);
            }
        }
        
        if (element.hasAttribute('placeholder')) {
            const placeholder = element.getAttribute('placeholder');
            if (translations[placeholder]) {
                if (!element.hasAttribute('data-original-placeholder')) {
                    element.setAttribute('data-original-placeholder', placeholder);
                }
                element.setAttribute('placeholder', translations[placeholder]);
            }
        }
    });
}

// Function to check URL for language preference
function checkUrlLanguage() {
    const path = window.location.pathname;
    if (path.includes('/es/')) {
        // URL indicates Spanish, translate immediately
        translatePage('es');
        // Update button text
        const translateButton = document.getElementById('translate-button');
        if (translateButton) {
            translateButton.textContent = 'English';
        }
    }
}

// Function to update URL when language changes
function updateUrl(language) {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    
    if (language === 'es') {
        // Add /es/ to the path
        if (!currentPath.includes('/es/')) {
            const newPath = currentPath.replace('/services/', '/es/services/');
            const newUrl = newPath + currentSearch + currentHash;
            window.history.replaceState({}, '', newUrl);
        }
    } else {
        // Remove /es/ from the path
        if (currentPath.includes('/es/')) {
            const newPath = currentPath.replace('/es/services/', '/services/');
            const newUrl = newPath + currentSearch + currentHash;
            window.history.replaceState({}, '', newUrl);
        }
    }
}

// Function to add translation button
function addTranslationButton() {
    // Create the translation button
    const translateButton = document.createElement('button');
    translateButton.id = 'translate-button';
    translateButton.textContent = 'Español';
    translateButton.className = 'translate-button';
    translateButton.onclick = function() {
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        translatePage(newLanguage);
        updateUrl(newLanguage);
    };
    
    // Add button styles
    const style = document.createElement('style');
    style.textContent = `
        .translate-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            background-color: var(--chocolate);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            transition: background-color 0.3s;
        }
        
        .translate-button:hover {
            background-color: var(--chocolate-light);
        }
        
        @media (max-width: 768px) {
            .translate-button {
                bottom: 10px;
                right: 10px;
                padding: 6px 12px;
                font-size: 12px;
            }
        }
    `;
    
    // Add elements to the page
    document.head.appendChild(style);
    document.body.appendChild(translateButton);
    
    // Check URL for language preference
    checkUrlLanguage();
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    addTranslationButton();
});
