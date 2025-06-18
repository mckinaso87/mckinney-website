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
    "Perfect for small businesses and professionals who need a simple online presence.": 
    "Perfecto para pequeñas empresas y profesionales que necesitan una presencia en línea simple.",
    "Perfect for businesses that need to regularly update content and manage basic user interactions.": 
    "Perfecto para empresas que necesitan actualizar contenido regularmente y gestionar interacciones básicas de usuarios.",
    "For businesses requiring user accounts, payments, and custom functionality.": 
    "Para empresas que requieren cuentas de usuario, pagos y funcionalidad personalizada.",
    
    // Package features
    "Static website with up to 5 pages": "Sitio web estático con hasta 5 páginas",
    "Mobile responsive design": "Diseño adaptable para móviles",
    "Fast loading optimization": "Optimización de carga rápida",
    "Basic SEO integration": "Integración básica de SEO",
    "Contact form setup": "Configuración de formulario de contacto",
    "Basic social media integration": "Integración básica de redes sociales",
    "Domain & DNS setup assistance": "Asistencia en configuración de dominio y DNS",
    "30-day support": "Soporte por 30 días",
    "Dynamic website with CMS integration": "Sitio web dinámico con integración de CMS",
    "Custom design elements & branding": "Elementos de diseño personalizados y marca",
    "Enhanced SEO optimization": "Optimización SEO mejorada",
    "Advanced social media integration": "Integración avanzada de redes sociales",
    "Basic user authentication": "Autenticación básica de usuarios",
    "Content management system": "Sistema de gestión de contenidos",
    "Simple database functionality": "Funcionalidad básica de base de datos",
    "Domain & hosting configuration": "Configuración de dominio y alojamiento",
    "60-day support": "Soporte por 60 días",
    "Full-featured web application": "Aplicación web completa",
    "Advanced user authentication": "Autenticación avanzada de usuarios",
    "Custom user workflows": "Flujos de trabajo personalizados",
    "Payment processing integration": "Integración de procesamiento de pagos",
    "Database integration": "Integración de base de datos",
    "Complete technical setup": "Configuración técnica completa",
    "90-day priority support": "Soporte prioritario por 90 días",
    
    // Add-on sections
    "Add-On Solutions": "Soluciones Adicionales",
    "Enhance any package above with these specialized add-on services. Pricing shown is in addition to your selected base package:": 
    "Mejore cualquier paquete anterior con estos servicios adicionales especializados. Los precios mostrados son adicionales a su paquete base seleccionado:",
    "Professional Package Add-ons": "Complementos del Paquete Profesional",
    "Compatible with Professional Package": "Compatible con el Paquete Profesional",
    "Enterprise Package Add-ons": "Complementos del Paquete Empresarial",
    "Compatible with Enterprise Package": "Compatible con el Paquete Empresarial",
    
    // Add-on features
    "Basic Dashboard": "Panel de Control Básico",
    "Simple E-commerce Features": "Funciones Básicas de Comercio Electrónico",
    "Advanced Content Management": "Gestión Avanzada de Contenido",
    "Additional Design Customization": "Personalización Adicional de Diseño",
    "Custom User Dashboards": "Paneles de Usuario Personalizados",
    "Advanced E-commerce System": "Sistema Avanzado de Comercio Electrónico",
    "Complex Workflows": "Flujos de Trabajo Complejos",
    "Custom API Integrations": "Integraciones API Personalizadas",
    
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

// Function to add translation button
function addTranslationButton() {
    // Create the translation button
    const translateButton = document.createElement('button');
    translateButton.id = 'translate-button';
    translateButton.textContent = 'Español';
    translateButton.className = 'translate-button';
    translateButton.onclick = function() {
        translatePage(currentLanguage === 'en' ? 'es' : 'en');
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
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    addTranslationButton();
});
