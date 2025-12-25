// الترجمة
const translations = {
    en: {
        // التنقل
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.education": "Education",
        "nav.contact": "Contact",
        
        // القسم الرئيسي
        "hero.greeting": "Hello, I'm",
        "hero.role": "SOC Analyst & Cybersecurity Student",
        "hero.description": "Third-year Cybersecurity student specializing in information security and networks. Strong background in threat analysis and SOC fundamentals with technical skills in Python and Linux. Seeking an internship opportunity in cybersecurity.",
        "hero.contactBtn": "Contact Me",
        "hero.aboutBtn": "Learn More",
        "hero.roleShort": "SOC Analyst",
        "hero.imageNote": "Place your photo in images folder as mahmoud-photo.jpg",
        
        // عني
        "about.title": "About",
        "about.titleSpan": "Me",
        "about.description1": "Third-year Cybersecurity student with a strong passion for information security and networks. Currently studying for SOC and threat analysis certifications.",
        "about.description2": "Possess solid knowledge in networking (CCNA), programming languages like Python and JavaScript, Linux system administration, and web development fundamentals.",
        "about.email": "Email:",
        "about.phone": "Phone:",
        "about.specialization": "Specialization:",
        "about.specializationValue": "Cybersecurity",
        "about.status": "Status:",
        "about.statusValue": "University Student",
        "about.year": "Third Year",
        "about.yearDesc": "Academic Level",
        "about.cert": "Certifications in Progress",
        "about.techLevel": "Technical Level",
        "about.techDesc": "Intermediate - Advanced",
        
        // المهارات
        "skills.title": "My",
        "skills.titleSpan": "Skills",
        "skills.cyber": "Cybersecurity",
        "skills.soc": "SOC Operations",
        "skills.threat": "Threat Analysis",
        "skills.security": "Security Fundamentals",
        "skills.networking": "Networking",
        "skills.ccna": "CCNA Networking",
        "skills.netSecurity": "Network Security",
        "skills.programming": "Programming & Development",
        "skills.python": "Python Programming",
        "skills.linux": "Linux Administration",
        
        // التعليم
        "education.title": "Education & Experience",
        "education.item1.title": "Third Year Student",
        "education.item1.place": "University - Cybersecurity Major",
        "education.item1.description": "In-depth study in cybersecurity, networks, and information security.",
        "education.item2.title": "SOC Specialist (Trainee)",
        "education.item2.place": "Self-learning & Personal Initiatives",
        "education.item2.description": "Studying and preparing for SOC and threat analysis certifications.",
        "education.item3.title": "Web Developer (Personal Projects)",
        "education.item3.place": "Practical Projects",
        "education.item3.description": "Developing websites and small applications using HTML, CSS, JavaScript, Python.",
        
        // الاتصال
        "contact.title": "Contact",
        "contact.titleSpan": "Me",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.locationValue": "Egypt",
        "contact.education": "Education",
        "contact.educationValue": "Cybersecurity Student",
        
        // الفوتر
        "footer.text": "Cybersecurity Specialist & SOC Analyst",
        "footer.copyright": "© 2024 Mahmoud Hassan. All rights reserved."
    },
    ar: {
        // التنقل
        "nav.home": "الرئيسية",
        "nav.about": "عني",
        "nav.skills": "المهارات",
        "nav.education": "التعليم",
        "nav.contact": "اتصل بي",
        
        // القسم الرئيسي
        "hero.greeting": "مرحباً، أنا",
        "hero.role": "محلل أمني وطالب أمن سيبراني",
        "hero.description": "طالب سنة ثالثة في الأمن السيبراني، متخصص في أمن المعلومات والشبكات. أتمتع بخلفية قوية في تحليل التهديدات وأساسيات الـSOC مع مهارات تقنية في Python وLinux. أسعى للحصول على فرصة تدريب في مجال الأمن السيبراني.",
        "hero.contactBtn": "تواصل معي",
        "hero.aboutBtn": "اعرف أكثر عني",
        "hero.roleShort": "محلل أمني",
        "hero.imageNote": "ضع صورتك في مجلد images باسم mahmoud-photo.jpg",
        
        // عني
        "about.title": "عن",
        "about.titleSpan": "ي",
        "about.description1": "طالب سنة ثالثة في مجال الأمن السيبراني، أتمتع بشغف كبير تجاه أمن المعلومات والشبكات. أدرس حاليًا للحصول على شهادات في مجال الـSOC وتحليل التهديدات.",
        "about.description2": "أمتلك قاعدة معرفية قوية في الشبكات (CCNA) ولغات البرمجة مثل Python وJavaScript، بالإضافة إلى إدارة أنظمة Linux وأساسيات تطوير الويب.",
        "about.email": "البريد الإلكتروني:",
        "about.phone": "الهاتف:",
        "about.specialization": "التخصص:",
        "about.specializationValue": "الأمن السيبراني",
        "about.status": "الحالة:",
        "about.statusValue": "طالب جامعي",
        "about.year": "سنة ثالثة",
        "about.yearDesc": "المرحلة الدراسية",
        "about.cert": "شهادات قيد الدراسة",
        "about.techLevel": "مستوى تقني",
        "about.techDesc": "متوسط - متقدم",
        
        // المهارات
        "skills.title": "مهارات",
        "skills.titleSpan": "ي",
        "skills.cyber": "الأمن السيبراني",
        "skills.soc": "عمليات SOC",
        "skills.threat": "تحليل التهديدات",
        "skills.security": "أساسيات الأمن",
        "skills.networking": "الشبكات",
        "skills.ccna": "شبكات CCNA",
        "skills.netSecurity": "أمن الشبكات",
        "skills.programming": "البرمجة والتطوير",
        "skills.python": "برمجة Python",
        "skills.linux": "إدارة Linux",
        
        // التعليم
        "education.title": "التعليم والخبرة",
        "education.item1.title": "طالب سنة ثالثة",
        "education.item1.place": "جامعة - تخصص الأمن السيبراني",
        "education.item1.description": "دراسة متعمقة في مجال الأمن السيبراني، الشبكات، وأمن المعلومات.",
        "education.item2.title": "متخصص SOC (متدرب)",
        "education.item2.place": "تعلّم ذاتي ومبادرات شخصية",
        "education.item2.description": "دراسة وتحضير للحصول على شهادات SOC وتحليل التهديدات.",
        "education.item3.title": "مطور ويب (مشاريع شخصية)",
        "education.item3.place": "مشاريع تطبيقية",
        "education.item3.description": "تطوير مواقع ويب وتطبيقات صغيرة باستخدام HTML, CSS, JavaScript, Python.",
        
        // الاتصال
        "contact.title": "اتصل",
        "contact.titleSpan": "بي",
        "contact.email": "البريد الإلكتروني",
        "contact.phone": "الهاتف",
        "contact.location": "الموقع",
        "contact.locationValue": "مصر",
        "contact.education": "التعليم",
        "contact.educationValue": "طالب أمن سيبراني",
        
        // الفوتر
        "footer.text": "أخصائي أمن سيبراني ومحلل SOC",
        "footer.copyright": "© 2024 محمود حسن. جميع الحقوق محفوظة."
    }
};

// الحالة الحالية
let currentLang = 'en';
let currentTheme = 'dark';

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة الترجمة
    updateLanguage(currentLang);
    
    // تهيئة الثيم
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
    
    // تهيئة القائمة المتنقلة
    initMobileMenu();
    
    // إضافة مستمعي الأحداث
    document.getElementById('langSwitch').addEventListener('click', toggleLanguage);
    document.getElementById('themeSwitch').addEventListener('click', toggleTheme);
    
    // تحسين التمرير
    initSmoothScroll();
    
    // تحميل الصورة
    loadProfileImage();
});

// تبديل اللغة
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(newLang);
}

function updateLanguage(lang) {
    currentLang = lang;
    
    // تحديث نص الزر
    const langBtn = document.getElementById('langSwitch');
    const langText = langBtn.querySelector('span');
    const langIcon = langBtn.querySelector('i');
    
    if (lang === 'ar') {
        langText.textContent = 'AR';
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
    } else {
        langText.textContent = 'EN';
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
    }
    
    // تحديث كل النصوص المترجمة
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // تحديث السمة lang
    document.documentElement.lang = lang;
    
    // تحديث الاتجاه
    document.body.setAttribute('data-lang', lang);
}

// تبديل الثيم
function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    
    // تحديث زر الثيم
    const themeBtn = document.getElementById('themeSwitch');
    const themeIcon = themeBtn.querySelector('i');
    
    if (theme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-moon';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.className = 'fas fa-sun';
    }
    
    // حفظ التفضيل
    localStorage.setItem('theme', theme);
}

// القائمة المتنقلة
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
}

// تمرير سلس
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// تحميل الصورة الشخصية
function loadProfileImage() {
    const img = document.getElementById('profile-image');
    const defaultImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" viewBox="0 0 350 350"><rect width="100%" height="100%" fill="%232D2D2D"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="%23CCCCCC" text-anchor="middle" dy=".3em">Mahmoud Hassan</text></svg>';
    
    // تحقق من وجود الصورة
    fetch(img.src)
        .then(response => {
            if (!response.ok) {
                img.src = defaultImage;
            }
        })
        .catch(() => {
            img.src = defaultImage;
        });
}

// تأثير عند التمرير
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 4px 12px var(--shadow)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    }
});