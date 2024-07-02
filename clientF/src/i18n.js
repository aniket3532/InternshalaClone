import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      make_your_dream_career_a_reality: "Make your dream career a reality",
      company_name: "Company name",
      cover_letter: "Cover Letter",
      application_date: "Application Date",
      applied_by: "Applied By",
      accept: "Accept",
      reject: "Reject",
      sign_up_and_apply_for_free: "Sign-up and Apply For Free",
      companies_hiring: "1,50,000+ companies hiring on Internshala",
      sign_in_with_google: "Sign in with Google",
      sign_in_with_phone: "Sign in with Phone",
      or: "or",
      phone_number: "Phone Number",
      otp: "OTP",
      request_otp: "Request OTP",
      verify_otp: "Verify OTP",
      email: "Email",
      password: "Password",
      first_name: "First Name",
      last_name: "Last Name",
      agree_terms: "By signing up, you agree to our",
      terms_and_conditions: "Terms and Conditions.",
      sign_up: "Sign Up",
      already_registered: "Already registered?",
      login: "Login",
      student: "Student",
      employee_and_tp: "Employee and T&P",
      login_with_google: "Login With Google",
      login_with_phone: "Login With Phone",
      forget_password: "Forget Password?",
      new_to_internarea: "new to internarea? Register",
      company: "company",
      internship_by_places: "Internship by places",
      internship_by_stream: "Internship by stream",
      job_places: "Job Places",
      jobs_by_streams: "Jobs by streams",
      about_us: "About us",
      new_york: "New York",
      los_angeles: "Los Angeles",
      chicago: "Chicago",
      san_francisco: "San Francisco",
      miami: "Miami",
      seattle: "Seattle",
      careers: "Careers",
      press: "Press",
      news: "News",
      media_kit: "Media kit",
      contact: "Contact",
      blog: "Blog",
      newsletter: "Newsletter",
      events: "Events",
      help_center: "Help center",
      supports: "Supports",
      startups: "Startups",
      enterprise: "Enterprise",
      government: "Government",
      saas: "Saas",
      marketplaces: "Marketplaces",
      ecommerce: "Ecommerce",
      team_diary: "Team diary",
      terms_and_conditions_footer: "Terms and conditions",
      sitemap: "sitemap",
      get_android_app: "Get Android App",
      copyright: "Copyright 2024. All Rights Reserved.",
      trending_on_internarea: "Trending on InternArea",
      latest_internships: "Latest internships on Intern Area",
      popular_categories: "POPULAR CATEGORIES",
      big_brands: "Big Brands",
      work_from_home: "Work From Home",
      part_time: "Part-time",
      mba: "MBA",
      engineering: "Engineering",
      media: "Media",
      design: "Design",
      data_science: "Data Science",
      actively_hiring: "Actively Hiring",
      internship: "Internship",
      view_details: "View details",
      companies_hiring_count: "companies hiring",
      new_openings_everyday: "new openings everyday",
      active_students: "active students",
      learners: "learners",
      empower_your_career: "Empower your career with InternArea today",
      register: "Register",
      job: "Job",
      filter: "Filter",
      profile: "Profile",
      location: "Location",
      internships: "Internships",
      desired_minimum_monthly_stipend: "Desired minimum monthly Stipend (₹)",
      view_more_filters: "View more filters",
      clear_all: "Clear all",
      total_internships: "total internships",
      start_date: "Start Date",
      duration: "Duration",
      stipend: "Stipend",
      view_in_details: "View In Details",
      experience: "Experience",
      about: "About",
      instagram_page: "Instagram page",
      about_job: "about Job",
      learn_business_communication: "Learn Business Communication",
      who_can_apply: "Who can apply",
      perks: "Perks",
      additional_information: "Additional information",
      number_of_openings: "Number of openings",
      apply: "Apply",
      applying_for: "Applying for",
      close: "close",
      your_resume: "Your resume",
      your_current_resume_will_be_submitted_along_with_the_application: "your current resume will be submitted along with the application",
      why_should_we_hire_for_this_role: "why should we hire for this role?",
      your_availability: "your availability",
      confirm_your_availability: "confirm your availability",
      yes_i_am_available_to_join_immediately: "Yes, I am available to join immediately",
      no_i_am_currently_on_notice_period: "No, I am currently on notice period",
      no_i_will_have_to_serve_notice_period: "No, I will have to serve notice period",
      please_specify_your_availability: "(Please specify your availability)",
      other: "Other",
      custom_resume: "Custom resume",
      optional: "(Optional)",
      employer_can_download_and_view_this_resume: "Employer can download and view this resume",
      submit_application: "Submit application",
      annual_salary_in_lakhs: "Annual salary (in lakhs)",
      total_jobs: "total Jobs",
      salary: "Salary",
      english: "English",
      spanish: "Spanish",
      hindi: "Hindi",
      portuguese: "Portuguese",
      chinese: "Chinese",
      french: "French",
      enter_your_email: "Enter your email",
      enter_your_phone_number: "Enter your phone number",
      send_otp: "Send OTP",
      enter_otp: "Enter OTP",
      jobs: "Jobs",
      logout: "Logout",
      hire_talent: "Hire Talent",
      admin: "Admin",
      top_locations: "Top Locations",
      top_category: "Top Category",
      explore_more_internships: "Explore More Internships",
      intern_at_india: "Intern at India",
      profile_name: "Profile name",
      contact_us: "Contact Us",
      my_applications: "My Applications",
      view_resume: "View Resume",
      more: "More",
      register_as_a_student: "Register- As a Student",
      register_as_an_employer: "Register- As an Employer",
      admin_login: "Admin Login",
      uid: "UID",
      view_applications: "View Applications",
      login_history: "Login History",
      ip: "IP",
      browser: "Browser",
      os: "OS",
      platform: "Platform",
      device_type: "Device Type",
      timestamp: "Timestamp",
      total_applications: "Total Applications",
      category: "Category",
      applied_on: "Applied On",
      view_detail: "View Detail",
      application_status: "Application Status",
      view_all_applications: "View All Applications",
      view_in_detail: "View in detail"
    },
  },
  es: {
    translation: {
      make_your_dream_career_a_reality: "Haz realidad tu carrera soñada",
      company_name: "Nombre de la compañía",
      cover_letter: "Carta de presentación",
      application_date: "Fecha de solicitud",
      applied_by: "Aplicado por",
      accept: "Aceptar",
      reject: "Rechazar",
      sign_up_and_apply_for_free: "Regístrate y aplica gratis",
      companies_hiring: "Más de 50,000 empresas contratando en Internshala",
      sign_in_with_google: "Iniciar sesión con Google",
      sign_in_with_phone: "Iniciar sesión con teléfono",
      or: "o",
      internships: "Prácticas",
      phone_number: "Número de teléfono",
      otp: "OTP",
      request_otp: "Solicitar OTP",
      verify_otp: "Verificar OTP",
      email: "Correo electrónico",
      password: "Contraseña",
      first_name: "Nombre",
      last_name: "Apellido",
      agree_terms: "Al registrarte, aceptas nuestros",
      terms_and_conditions: "Términos y condiciones.",
      sign_up: "Registrarse",
      already_registered: "¿Ya estás registrado?",
      login: "Iniciar sesión",
      student: "Estudiante",
      employee_and_tp: "Empleado y T&P",
      login_with_google: "Iniciar sesión con Google",
      login_with_phone: "Iniciar sesión con teléfono",
      forget_password: "¿Olvidaste tu contraseña?",
      new_to_internarea: "¿Nuevo en internarea? Regístrate",
      company: "empresa",
      internship_by_places: "Prácticas por lugares",
      internship_by_stream: "Prácticas por rama",
      job_places: "Lugares de trabajo",
      jobs_by_streams: "Trabajos por rama",
      about_us: "Acerca de nosotros",
      new_york: "Nueva York",
      los_angeles: "Los Ángeles",
      chicago: "Chicago",
      san_francisco: "San Francisco",
      miami: "Miami",
      seattle: "Seattle",
      careers: "Carreras",
      press: "Prensa",
      news: "Noticias",
      media_kit: "Kit de medios",
      contact: "Contacto",
      blog: "Blog",
      newsletter: "Boletín informativo",
      events: "Eventos",
      help_center: "Centro de ayuda",
      supports: "Soportes",
      startups: "Startups",
      enterprise: "Empresa",
      government: "Gobierno",
      saas: "SaaS",
      marketplaces: "Mercados",
      ecommerce: "Comercio electrónico",
      team_diary: "Diario del equipo",
      terms_and_conditions_footer: "Términos y condiciones",
      sitemap: "mapa del sitio",
      get_android_app: "Obtén la aplicación de Android",
      copyright: "Derechos de autor 2024. Todos los derechos reservados.",
      trending_on_internarea: "Tendencias en InternArea",
      latest_internships: "Últimas prácticas en Intern Area",
      popular_categories: "CATEGORÍAS POPULARES",
      big_brands: "Grandes marcas",
      work_from_home: "Trabajar desde casa",
      part_time: "Medio tiempo",
      mba: "MBA",
      engineering: "Ingeniería",
      media: "Medios",
      design: "Diseño",
      data_science: "Ciencia de datos",
      actively_hiring: "Contratando activamente",
      internship: "Práctica",
      view_details: "Ver detalles",
      companies_hiring_count: "empresas contratando",
      new_openings_everyday: "nuevas aperturas todos los días",
      active_students: "estudiantes activos",
      learners: "aprendices",
      empower_your_career: "Empodera tu carrera con InternArea hoy",
      register: "Registrarse",
      job: "Trabajo",
      filter: "Filtro",
      profile: "Perfil",
      location: "Ubicación",
      desired_minimum_monthly_stipend: "Estipendio mínimo mensual deseado (₹)",
      view_more_filters: "Ver más filtros",
      clear_all: "Borrar todo",
      total_internships: "total de prácticas",
      start_date: "Fecha de inicio",
      duration: "Duración",
      stipend: "Estipendio",
      view_in_details: "Ver en detalles",
      experience: "Experiencia",
      about: "Acerca de",
      instagram_page: "Página de Instagram",
      about_job: "acerca del trabajo",
      learn_business_communication: "Aprender Comunicación Empresarial",
      who_can_apply: "Quién puede aplicar",
      perks: "Beneficios",
      additional_information: "Información adicional",
      number_of_openings: "Número de vacantes",
      apply: "Aplicar",
      applying_for: "Aplicando para",
      close: "cerrar",
      your_resume: "Tu currículum",
      your_current_resume_will_be_submitted_along_with_the_application: "tu currículum actual se enviará junto con la aplicación",
      
      why_should_we_hire_for_this_role: "¿por qué deberíamos contratarte para este puesto?",
      your_availability: "tu disponibilidad",
      confirm_your_availability: "confirma tu disponibilidad",
      yes_i_am_available_to_join_immediately: "Sí, estoy disponible para unirme de inmediato",
      no_i_am_currently_on_notice_period: "No, actualmente estoy en período de preaviso",
      no_i_will_have_to_serve_notice_period: "No, tendré que cumplir el período de preaviso",
      please_specify_your_availability: "(Por favor, especifica tu disponibilidad)",
      other: "Otro",
      custom_resume: "Currículum personalizado",
      optional: "(Opcional)",
      employer_can_download_and_view_this_resume: "El empleador puede descargar y ver este currículum",
      submit_application: "Enviar solicitud",
      annual_salary_in_lakhs: "Salario anual (en lakhs)",
      total_jobs: "total de trabajos",
      salary: "Salario",
      english: "Inglés",
      spanish: "Español",
      hindi: "Hindi",
      portuguese: "Portugués",
      chinese: "Chino",
      french: "Francés",
      enter_your_email: "Introduce tu correo electrónico",
      enter_your_phone_number: "Introduce tu número de teléfono",
      send_otp: "Enviar OTP",
      enter_otp: "Introduce OTP",
      jobs: "Trabajos",
      logout: "Cerrar sesión",
      hire_talent: "Contratar talento",
      admin: "Administrador",
      top_locations: "Principales ubicaciones",
      top_category: "Categoría principal",
      explore_more_internships: "Explorar más prácticas",
      intern_at_india: "Prácticas en India",
      profile_name: "Nombre del perfil",
      contact_us: "Contáctenos",
      my_applications: "Mis aplicaciones",
      view_resume: "Ver currículum",
      more: "Más",
      register_as_a_student: "Registrarse como estudiante",
      register_as_an_employer: "Registrarse como empleador",
      admin_login: "Inicio de sesión de administrador",
      uid: "UID",
      view_applications: "Ver aplicaciones",
      login_history: "Historial de inicio de sesión",
      ip: "IP",
      browser: "Navegador",
      os: "SO",
      platform: "Plataforma",
      device_type: "Tipo de dispositivo",
      timestamp: "Marca de tiempo",
      total_applications: "Total de aplicaciones",
      category: "Categoría",
      applied_on: "Aplicado en",
      view_detail: "Ver detalles",
      application_status: "Estado de la aplicación",
      view_all_applications: "Ver todas las aplicaciones",
      
      view_in_detail: "Ver en detalle"
    },
  },
  hi: {
    translation: {
      make_your_dream_career_a_reality: "अपने सपनों का करियर हकीकत बनाएं",
      company_name: "कंपनी का नाम",
      cover_letter: "कवर लेटर",
      application_date: "आवेदन की तारीख",
      applied_by: "द्वारा आवेदन किया गया",
      accept: "स्वीकार करना",
      reject: "अस्वीकार करना",
      internships: "इंटर्नशिप",
      sign_up_and_apply_for_free: "मुफ्त में साइन अप और आवेदन करें",
      companies_hiring: "इंटर्नशाला पर 50,000+ कंपनियां हायरिंग कर रही हैं",
      sign_in_with_google: "गूगल के साथ साइन इन करें",
      sign_in_with_phone: "फोन के साथ साइन इन करें",
      or: "या",
      phone_number: "फ़ोन नंबर",
      otp: "ओटीपी",
      request_otp: "ओटीपी का अनुरोध करें",
      verify_otp: "ओटीपी सत्यापित करें",
      email: "ईमेल",
      password: "पासवर्ड",
      first_name: "पहला नाम",
      last_name: "अंतिम नाम",
      agree_terms: "साइन अप करके, आप हमारी सहमति देते हैं",
      terms_and_conditions: "नियम और शर्तें।",
      sign_up: "साइन अप करें",
      already_registered: "पहले से पंजीकृत?",
      login: "लॉग इन करें",
      student: "छात्र",
      employee_and_tp: "कर्मचारी और टी एंड पी",
      login_with_google: "गूगल के साथ लॉगिन करें",
      login_with_phone: "फोन के साथ लॉगिन करें",
      forget_password: "पासवर्ड भूल गए?",
      new_to_internarea: "इंटर्नएरिया में नए हैं? पंजीकरण करें",
      company: "कंपनी",
      internship_by_places: "स्थान के अनुसार इंटर्नशिप",
      internship_by_stream: "स्ट्रीम के अनुसार इंटर्नशिप",
      job_places: "नौकरी के स्थान",
      jobs_by_streams: "स्ट्रीम के अनुसार नौ",
      about_us: "हमारे बारे में",
      new_york: "न्यूयॉर्क",
      los_angeles: "लॉस एंजिल्स",
      chicago: "शिकागो",
      san_francisco: "सैन फ्रांसिस्को",
      miami: "मियामी",
      seattle: "सिएटल",
      careers: "करियर",
      press: "प्रेस",
      news: "समाचार",
      media_kit: "मीडिया किट",
      contact: "संपर्क",
      blog: "ब्लॉग",
      newsletter: "न्यूजलेटर",
      events: "कार्यक्रम",
      help_center: "सहायता केंद्र",
      supports: "समर्थन",
      startups: "स्टार्टअप",
      enterprise: "उद्यम",
      government: "सरकार",
      saas: "सास",
      marketplaces: "मार्केटप्लेस",
      ecommerce: "ईकॉमर्स",
      team_diary: "टीम डायरी",
      terms_and_conditions_footer: "नियम और शर्तें",
      sitemap: "साइटमैप",
      get_android_app: "एंड्रॉइड ऐप प्राप्त करें",
      copyright: "कॉपीराइट 2024. सर्वाधिकार सुरक्षित।",
      trending_on_internarea: "इंटर्नएरिया पर ट्रेंडिंग",
      latest_internships: "इंटर्न एरिया पर नवीनतम इंटर्नशिप",
      popular_categories: "लोकप्रिय श्रेणियाँ",
      big_brands: "बड़ी ब्रांड्स",
      work_from_home: "घर से काम करें",
      part_time: "पार्ट-टाइम",
      mba: "एमबीए",
      engineering: "इंजीनियरिंग",
      media: "मीडिया",
      design: "डिज़ाइन",
      data_science: "डेटा विज्ञान",
      actively_hiring: "सक्रिय रूप से भर्ती",
      internship: "इंटर्नशिप",
      view_details: "विवरण देखें",
      companies_hiring_count: "कंपनियां भर्ती कर रही हैं",
      new_openings_everyday: "नए उद्घाटन हर दिन",
      active_students: "सक्रिय छात्र",
      learners: "शिक्षार्थी",
      empower_your_career: "आज ही इंटर्नएरिया के साथ अपने करियर को सशक्त करें",
      register: "पंजीकरण करें",
      job: "नौकरी",
      filter: "फ़िल्टर",
      profile: "प्रोफ़ाइल",
      location: "स्थान",
      desired_minimum_monthly_stipend: "वांछित न्यूनतम मासिक वजीफा (₹)",
      view_more_filters: "और फ़िल्टर देखें",
      clear_all: "सभी हटाएं",
      total_internships: "कुल इंटर्नशिप",
      start_date: "प्रारंभ तिथि",
      duration: "अवधि",
      stipend: "वजीफा",
      view_in_details: "विवरण में देखें",
      experience: "अनुभव",
      about: "के बारे में",
      instagram_page: "इंस्टाग्राम पेज",
      about_job: "नौकरी के बारे में",
      learn_business_communication: "व्यावसायिक संचार सीखें",
      who_can_apply: "कौन आवेदन कर सकता है",
      perks: "लाभ",
      additional_information: "अतिरिक्त जानकारी",
      number_of_openings: "खाली पदों की संख्या",
      apply: "आवेदन करें",
      applying_for: "के लिए आवेदन कर रहे हैं",
      close: "बंद करें",
      your_resume: "आपका रिज्यूमे",
      your_current_resume_will_be_submitted_along_with_the_application: "आपका वर्तमान रिज्यूमे आवेदन के साथ सबमिट किया जाएगा",
      
      why_should_we_hire_for_this_role: "हमें इस भूमिका के लिए आपको क्यों नियुक्त करना चाहिए?",
      your_availability: "आपकी उपलब्धता",
      confirm_your_availability: "अपनी उपलब्धता की पुष्टि करें",
      yes_i_am_available_to_join_immediately: "हाँ, मैं तुरंत शामिल होने के लिए उपलब्ध हूँ",
      no_i_am_currently_on_notice_period: "नहीं, मैं वर्तमान में नोटिस अवधि में हूँ",
      no_i_will_have_to_serve_notice_period: "नहीं, मुझे नोटिस अवधि की सेवा करनी होगी",
      please_specify_your_availability: "(कृपया अपनी उपलब्धता निर्दिष्ट करें)",
      other: "अन्य",
      custom_resume: "कस्टम रिज्यूमे",
      optional: "(वैकल्पिक)",
      employer_can_download_and_view_this_resume: "नियोक्ता इस रिज्यूमे को डाउनलोड और देख सकते हैं",
      submit_application: "आवेदन सबमिट करें",
      annual_salary_in_lakhs: "वार्षिक वेतन (लाखों में)",
      total_jobs: "कुल नौकरियां",
      salary: "वेतन",
      english: "अंग्रेज़ी",
      spanish: "स्पेनिश",
      hindi: "हिंदी",
      portuguese: "पुर्तगाली",
      chinese: "चीनी",
      french: "फ्रेंच",
      enter_your_email: "अपना ईमेल दर्ज करें",
      enter_your_phone_number: "अपना फोन नंबर दर्ज करें",
      send_otp: "ओटीपी भेजें",
      enter_otp: "ओटीपी दर्ज करें",
      jobs: "नौकरियां",
      logout: "लॉग आउट",
      hire_talent: "प्रतिभा किराए पर लें",
      admin: "प्रशासन",
      top_locations: "शीर्ष स्थान",
      top_category: "शीर्ष श्रेणी",
      explore_more_internships: "अधिक इंटर्नशिप एक्सप्लोर करें",
      intern_at_india: "भारत में इंटर्न",
      profile_name: "प्रोफ़ाइल नाम",
      contact_us: "हमसे संपर्क करें",
      my_applications: "मेरे आवेदन",
      view_resume: "रिज्यूमे देखें",
      more: "अधिक",
      register_as_a_student: "एक छात्र के रूप में पंजीकरण करें",
      register_as_an_employer: "एक नियोक्ता के रूप में पंजीकरण करें",
      admin_login: "प्रशासन लॉगिन",
      uid: "यूआईडी",
      view_applications: "आवेदन देखें",
      login_history: "लॉगिन इतिहास",
      ip: "आईपी",
      browser: "ब्राउज़र",
      os: "ओएस",
      platform: "प्लेटफॉर्म",
      device_type: "डिवाइस प्रकार",
      timestamp: "टाइमस्टैम्प",
      total_applications: "कुल आवेदन",
      category: "श्रेणी",
      applied_on: "आवेदन की तिथि",
      view_detail: "विवरण देखें",
      application_status: "आवेदन की स्थिति",
      view_all_applications: "सभी आवेदन देखें",
      
      view_in_detail: "विवरण में देखें"
    },
  },
  pt: {
    translation: {
      make_your_dream_career_a_reality:
        "Faça da sua carreira dos sonhos uma realidade",
        company_name: "Nome da empresa",
        cover_letter: "Carta de apresentação",
        application_date: "Data de aplicação",
        applied_by: "Aplicado por",
        accept: "Aceitar",
        reject: "Rejeitar",
        internships: "Estágios",
        sign_up_and_apply_for_free: "Inscreva-se e candidate-se gratuitamente",
        companies_hiring: "Mais de 50.000 empresas contratando no Internshala",
        sign_in_with_google: "Entrar com o Google",
        sign_in_with_phone: "Entrar com o telefone",
        or: "ou",
        phone_number: "Número de telefone",
        otp: "OTP",
        request_otp: "Solicitar OTP",
        verify_otp: "Verificar OTP",
        email: "E-mail",
        password: "Senha",
        first_name: "Primeiro nome",
        last_name: "Último nome",
        agree_terms: "Ao se inscrever, você concorda com nossos",
        terms_and_conditions: "Termos e Condições.",
        sign_up: "Inscrever-se",
        already_registered: "Já registrado?",
        login: "Entrar",
        student: "Estudante",
        employee_and_tp: "Funcionário e T&P",
        login_with_google: "Entrar com o Google",
        login_with_phone: "Entrar com o telefone",
        forget_password: "Esqueceu a senha?",
        new_to_internarea: "Novo no internarea? Registrar",
        company: "empresa",
        internship_by_places: "Estágios por locais",
        internship_by_stream: "Estágios por stream",
        job_places: "Locais de trabalho",
        jobs_by_streams: "Trabalhos por streams",
        about_us: "Sobre nós",
        new_york: "Nova Iorque",
        los_angeles: "Los Angeles",
        chicago: "Chicago",
        san_francisco: "São Francisco",
        miami: "Miami",
        seattle: "Seattle",
        careers: "Carreiras",
        press: "Imprensa",
        news: "Notícias",
        media_kit: "Kit de mídia",
        contact: "Contato",
        blog: "Blog",
        newsletter: "Boletim informativo",
        events: "Eventos",
        help_center: "Centro de ajuda",
        supports: "Suportes",
        startups: "Startups",
        enterprise: "Empresa",
        government: "Governo",
        saas: "SaaS",
        marketplaces: "Mercados",
        ecommerce: "Ecommerce",
        team_diary: "Diário da equipe",
        terms_and_conditions_footer: "Termos e Condições",
        sitemap: "mapa do site",
        get_android_app: "Obter aplicativo Android",
        copyright: "Direitos autorais 2024. Todos os direitos reservados.",
        trending_on_internarea: "Tendências no InternArea",
        latest_internships: "Últimos estágios no Intern Area",
        popular_categories: "CATEGORIAS POPULARES",
        big_brands: "Grandes marcas",
        work_from_home: "Trabalhar de casa",
        part_time: "Meio período",
        mba: "MBA",
        engineering: "Engenharia",
        media: "Mídia",
        design: "Design",
        data_science: "Ciência de dados",
        actively_hiring: "Contratando ativamente",
        internship: "Estágio",
        view_details: "Ver detalhes",
        companies_hiring_count: "mil empresas contratando",
        new_openings_everyday: "mil novas vagas todos os dias",
        active_students: "milhões de estudantes ativos",
        learners: "mil alunos",
        empower_your_career: "Empodere sua carreira com InternArea hoje",
        register: "Registrar",
        job: "Trabalho",
        filter: "Filtro",
      profile: "Perfil",
      location: "Localização",
      desired_minimum_monthly_stipend: "Estipêndio mensal mínimo desejado (₹)",
      view_more_filters: "Ver mais filtros",
      clear_all: "Limpar tudo",
      total_internships: "total de estágios",
      start_date: "Data de início",
      duration: "Duração",
      stipend: "Estipêndio",
      view_in_details: "Ver em detalhes",
      experience: "Experiência",
      about: "Sobre",
      instagram_page: "Página do Instagram",
      about_job: "sobre o trabalho",
      learn_business_communication: "Aprender Comunicação Empresarial",
      who_can_apply: "Quem pode se candidatar",
      perks: "Benefícios",
      additional_information: "Informações adicionais",
      number_of_openings: "Número de vagas",
      apply: "Candidatar-se",
      applying_for: "Candidatando-se para",
      close: "fechar",
      your_resume: "Seu currículo",
      your_current_resume_will_be_submitted_along_with_the_application: "seu currículo atual será enviado junto com a aplicação",
      
      why_should_we_hire_for_this_role: "por que devemos contratá-lo para este cargo?",
      your_availability: "sua disponibilidade",
      confirm_your_availability: "confirme sua disponibilidade",
      yes_i_am_available_to_join_immediately: "Sim, estou disponível para começar imediatamente",
      no_i_am_currently_on_notice_period: "Não, atualmente estou em período de aviso prévio",
      no_i_will_have_to_serve_notice_period: "Não, terei que cumprir o período de aviso prévio",
      please_specify_your_availability: "(Por favor, especifique sua disponibilidade)",
      other: "Outro",
      custom_resume: "Currículo personalizado",
      optional: "(Opcional)",
      employer_can_download_and_view_this_resume: "O empregador pode baixar e visualizar este currículo",
      submit_application: "Enviar candidatura",
      annual_salary_in_lakhs: "Salário anual (em lakhs)",
      total_jobs: "total de empregos",
      salary: "Salário",
      english: "Inglês",
      spanish: "Espanhol",
      hindi: "Hindi",
      portuguese: "Português",
      chinese: "Chinês",
      french: "Francês",
      enter_your_email: "Insira seu e-mail",
      enter_your_phone_number: "Insira seu número de telefone",
      send_otp: "Enviar OTP",
      enter_otp: "Insira OTP",
      jobs: "Empregos",
      logout: "Sair",
      hire_talent: "Contratar talento",
      admin: "Admin",
      top_locations: "Principais localizações",
      top_category: "Categoria principal",
      explore_more_internships: "Explorar mais estágios",
      intern_at_india: "Estágio na Índia",
      profile_name: "Nome do perfil",
      contact_us: "Contate-Nos",
      my_applications: "Minhas candidaturas",
      view_resume: "Ver currículo",
      more: "Mais",
      register_as_a_student: "Registre-se como estudante",
      register_as_an_employer: "Registre-se como empregador",
      admin_login: "Login do administrador",
      uid: "UID",
      view_applications: "Ver candidaturas",
      login_history: "Histórico de login",
      ip: "IP",
      browser: "Navegador",
      os: "SO",
      platform: "Plataforma",
      device_type: "Tipo de dispositivo",
      timestamp: "Timestamp",
      total_applications: "Total de candidaturas",
      category: "Categoria",
      applied_on: "Candidatado em",
      view_detail: "Ver detalhes",
      application_status: "Status da candidatura",
      view_all_applications: "Ver todas as candidaturas",
      
      view_in_detail: "Ver em detalhe"
    },
  },
  zh: {
    translation: {
      make_your_dream_career_a_reality: "让你的梦想职业成为现实",
      company_name: "公司名称",
      cover_letter: "求职信",
      application_date: "申请日期",
      applied_by: "申请人",
      accept: "接受",
      reject: "拒绝",
      sign_up_and_apply_for_free: "注册并免费申请",
      companies_hiring: "Internshala上有超过50,000家公司在招聘",
      sign_in_with_google: "使用Google登录",
      sign_in_with_phone: "使用电话登录",
      or: "或",
      phone_number: "电话号码",
      otp: "OTP",
      request_otp: "请求OTP",
      verify_otp: "验证OTP",
      email: "电子邮件",
      password: "密码",
      internships: "实习",
      first_name: "名字",
      last_name: "姓氏",
      agree_terms: "注册即表示您同意我们的",
      terms_and_conditions: "条款和条件。",
      sign_up: "注册",
      already_registered: "已注册？",
      login: "登录",
      student: "学生",
      employee_and_tp: "员工和T&P",
      login_with_google: "用Google登录",
      login_with_phone: "用电话登录",
      forget_password: "忘记密码？",
      new_to_internarea: "新到internarea？ 注册",
      company: "公司",
      internship_by_places: "按地点实习",
      internship_by_stream: "按流实习",
      job_places: "工作地点",
      jobs_by_streams: "按流工作",
      about_us: "关于我们",
      new_york: "纽约",
      los_angeles: "洛杉矶",
      chicago: "芝加哥",
      san_francisco: "旧金山",
      miami: "迈阿密",
      seattle: "西雅图",
      careers: "职业",
      press: "按",
      news: "新闻",
      media_kit: "媒体工具包",
      contact: "接触",
      blog: "博客",
      newsletter: "时事通讯",
      events: "活动",
      help_center: "帮助中心",
      supports: "支持",
      startups: "初创公司",
      enterprise: "企业",
      government: "政府",
      saas: "SaaS",
      marketplaces: "市场",
      ecommerce: "电子商务",
      team_diary: "团队日记",
      terms_and_conditions_footer: "条款和条件",
      sitemap: "网站地图",
      get_android_app: "获取Android应用",
      copyright: "版权所有2024。保留所有权利。",
      trending_on_internarea: "InternArea上的趋势",
      latest_internships: "Intern Area的最新实习",
      popular_categories: "热门类别",
      big_brands: "大品牌",
      work_from_home: "在家工作",
      part_time: "兼职",
      mba: "MBA",
      engineering: "工程",
      media: "媒体",
      design: "设计",
      data_science: "数据科学",
      actively_hiring: "积极招聘",
      internship: "实习",
      view_details: "查看详细信息",
      companies_hiring_count: "家公司正在招聘",
      new_openings_everyday: "每天有10K+个新职位",
      active_students: "活跃学生",
      learners: "学习者",
      empower_your_career: "今天通过InternArea增强你的职业",
      register: "注册",
      job: "工作",
      filter: "筛选",
      profile: "个人资料",
      location: "位置",
      desired_minimum_monthly_stipend: "期望的最低月津贴 (₹)",
      view_more_filters: "查看更多筛选",
      clear_all: "清除所有",
      total_internships: "总实习",
      start_date: "开始日期",
      duration: "持续时间",
      stipend: "津贴",
      view_in_details: "详细查看",
      experience: "经验",
      about: "关于",
      instagram_page: "Instagram 页面",
      about_job: "关于工作",
      learn_business_communication: "学习商务沟通",
      who_can_apply: "谁可以申请",
      perks: "福利",
      additional_information: "附加信息",
      number_of_openings: "职位空缺数",
      apply: "申请",
      applying_for: "申请职位",
      close: "关闭",
      your_resume: "你的简历",
      your_current_resume_will_be_submitted_along_with_the_application: "您的当前简历将随申请一同提交",
     
      why_should_we_hire_for_this_role: "我们为什么要聘用您担任这个职位?",
      your_availability: "你的可用性",
      confirm_your_availability: "确认你的可用性",
      yes_i_am_available_to_join_immediately: "是的，我可以立即加入",
      no_i_am_currently_on_notice_period: "不，我目前在通知期",
      no_i_will_have_to_serve_notice_period: "不，我需要提供通知期",
      please_specify_your_availability: "(请注明你的可用性)",
      other: "其他",
      custom_resume: "自定义简历",
      optional: "(可选)",
      employer_can_download_and_view_this_resume: "雇主可以下载和查看此简历",
      submit_application: "提交申请",
      annual_salary_in_lakhs: "年薪（以千卢比计）",
      total_jobs: "总职位",
      salary: "工资",
      english: "英语",
      spanish: "西班牙语",
      hindi: "印地语",
      portuguese: "葡萄牙语",
      chinese: "中文",
      french: "法语",
      enter_your_email: "输入您的电子邮件",
      enter_your_phone_number: "输入您的电话号码",
      send_otp: "发送 OTP",
      enter_otp: "输入 OTP",
      jobs: "职位",
      logout: "登出",
      hire_talent: "招聘人才",
      admin: "管理员",
      top_locations: "热门地点",
      top_category: "热门类别",
      explore_more_internships: "探索更多实习机会",
      intern_at_india: "在印度实习",
      profile_name: "个人资料名称",
      contact_us: "联系我们",
      my_applications: "我的申请",
      view_resume: "查看简历",
      more: "更多",
      register_as_a_student: "以学生身份注册",
      register_as_an_employer: "以雇主身份注册",
      admin_login: "管理员登录",
      uid: "UID",
      view_applications: "查看申请",
      login_history: "登录历史",
      ip: "IP",
      browser: "浏览器",
      os: "操作系统",
      platform: "平台",
      device_type: "设备类型",
      timestamp: "时间戳",
      total_applications: "总申请",
      category: "类别",
      applied_on: "申请日期",
      view_detail: "查看详情",
      application_status: "申请状态",
      view_all_applications: "查看所有申请",
      view_in_detail: "详细查看"
    },
  },
  fr: {
    translation: {
      make_your_dream_career_a_reality:
        "Faites de votre carrière de rêve une réalité",
        company_name: "Nom de l'entreprise",
        cover_letter: "Lettre de motivation",
        application_date: "Date de la candidature",
        applied_by: "Appliqué par",
        accept: "Accepter",
        reject: "Rejeter",
        sign_up_and_apply_for_free: "Inscrivez-vous et postulez gratuitement",
        companies_hiring: "Plus de 50 000 entreprises recrutent sur Internshala",
        sign_in_with_google: "Se connecter avec Google",
        sign_in_with_phone: "Se connecter avec le téléphone",
        or: "ou",
        phone_number: "Numéro de téléphone",
        otp: "OTP",
        request_otp: "Demander OTP",
        verify_otp: "Vérifier OTP",
        email: "E-mail",
        password: "Mot de passe",
        first_name: "Prénom",
        last_name: "Nom de famille",
        agree_terms: "En vous inscrivant, vous acceptez nos",
        terms_and_conditions: "Termes et Conditions.",
        sign_up: "S'inscrire",
        already_registered: "Déjà enregistré?",
        login: "Connexion",
        internships: "Stages",
        student: "Étudiant",
        employee_and_tp: "Employé et T&P",
        login_with_google: "Connexion avec Google",
        login_with_phone: "Connexion avec le téléphone",
        forget_password: "Mot de passe oublié?",
        new_to_internarea: "nouveau sur internarea? S'inscrire",
        company: "entreprise",
        internship_by_places: "Stage par lieux",
        internship_by_stream: "Stage par filière",
        job_places: "Lieux de travail",
        jobs_by_streams: "Emplois par filières",
        about_us: "À propos de nous",
        new_york: "New York",
        los_angeles: "Los Angeles",
        chicago: "Chicago",
        san_francisco: "San Francisco",
        miami: "Miami",
        seattle: "Seattle",
        careers: "Carrières",
        press: "Presse",
        news: "Nouvelles",
        media_kit: "Kit média",
        contact: "Contact",
        blog: "Blog",
        newsletter: "Bulletin",
        events: "Événements",
        help_center: "Centre d'aide",
        supports: "Supporte",
        startups: "Startups",
        enterprise: "Entreprise",
        government: "Gouvernement",
        saas: "SaaS",
        marketplaces: "Places de marché",
        ecommerce: "Commerce électronique",
        team_diary: "Journal de l'équipe",
        terms_and_conditions_footer: "Termes et conditions",
        sitemap: "plan du site",
        get_android_app: "Obtenez l'application Android",
        copyright: "Droit d'auteur 2024. Tous droits réservés.",
        trending_on_internarea: "Tendances sur InternArea",
        latest_internships: "Derniers stages sur Intern Area",
        popular_categories: "CATÉGORIES POPULAIRES",
        big_brands: "Grandes marques",
        work_from_home: "Travail à domicile",
        part_time: "Temps partiel",
        mba: "MBA",
        engineering: "Ingénierie",
        media: "Médias",
        design: "Conception",
        data_science: "Science des données",
        actively_hiring: "Recrutement actif",
        internship: "Stage",
        view_details: "Voir les détails",
        companies_hiring_count: "entreprises recrutent",
        new_openings_everyday: "nouvelles ouvertures chaque jour",
        active_students: "d'étudiants actifs",
        learners: "apprenants",
        empower_your_career: "Renforcez votre carrière avec InternArea aujourd'hui",
        register: "S'inscrire",
        job: "Emploi",
        filter: "Filtre",
      profile: "Profil",
      location: "Lieu",
      desired_minimum_monthly_stipend: "Allocation mensuelle minimale souhaitée (₹)",
      view_more_filters: "Voir plus de filtres",
      clear_all: "Tout effacer",
      total_internships: "total des stages",
      start_date: "Date de début",
      duration: "Durée",
      stipend: "Allocation",
      view_in_details: "Voir en détails",
      experience: "Expérience",
      about: "À propos",
      instagram_page: "Page Instagram",
      about_job: "à propos du poste",
      learn_business_communication: "Apprendre la communication d'entreprise",
      who_can_apply: "Qui peut postuler",
      perks: "Avantages",
      additional_information: "Informations supplémentaires",
      number_of_openings: "Nombre de postes",
      apply: "Postuler",
      applying_for: "Postuler pour",
      close: "fermer",
      your_resume: "Votre CV",
      your_current_resume_will_be_submitted_along_with_the_application: "votre CV actuel sera soumis avec la candidature",
   
      why_should_we_hire_for_this_role: "pourquoi devrions-nous vous embaucher pour ce poste?",
      your_availability: "votre disponibilité",
      confirm_your_availability: "confirmez votre disponibilité",
      yes_i_am_available_to_join_immediately: "Oui, je suis disponible pour rejoindre immédiatement",
      no_i_am_currently_on_notice_period: "Non, je suis actuellement en période de préavis",
      no_i_will_have_to_serve_notice_period: "Non, je devrai respecter la période de préavis",
      please_specify_your_availability: "(Veuillez spécifier votre disponibilité)",
      other: "Autre",
      custom_resume: "CV personnalisé",
      optional: "(Facultatif)",
      employer_can_download_and_view_this_resume: "L'employeur peut télécharger et consulter ce CV",
      submit_application: "Soumettre la candidature",
      annual_salary_in_lakhs: "Salaire annuel (en lakhs)",
      total_jobs: "total des emplois",
      salary: "Salaire",
      english: "Anglais",
      spanish: "Espagnol",
      hindi: "Hindi",
      portuguese: "Portugais",
      chinese: "Chinois",
      french: "Français",
      enter_your_email: "Entrez votre e-mail",
      enter_your_phone_number: "Entrez votre numéro de téléphone",
      send_otp: "Envoyer OTP",
      enter_otp: "Entrez OTP",
      jobs: "Emplois",
      logout: "Déconnexion",
      hire_talent: "Recruter des talents",
      admin: "Admin",
      top_locations: "Meilleurs lieux",
      top_category: "Catégorie principale",
      explore_more_internships: "Explorer plus de stages",
      intern_at_india: "Stage en Inde",
      profile_name: "Nom du profil",
      contact_us: "Nous contacter",
      my_applications: "Mes candidatures",
      view_resume: "Voir le CV",
      more: "Plus",
      register_as_a_student: "S'inscrire en tant qu'étudiant",
      register_as_an_employer: "S'inscrire en tant qu'employeur",
      admin_login: "Connexion admin",
      uid: "UID",
      view_applications: "Voir les candidatures",
      login_history: "Historique des connexions",
      ip: "IP",
      browser: "Navigateur",
      os: "OS",
      platform: "Plateforme",
      device_type: "Type d'appareil",
      timestamp: "Horodatage",
      total_applications: "Nombre total de candidatures",
      category: "Catégorie",
      applied_on: "Postulé le",
      view_detail: "Voir les détails",
      application_status: "Statut de la candidature",
      view_all_applications: "Voir toutes les candidatures",

      view_in_detail: "Voir en détail"
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources,
  });

export default i18n;