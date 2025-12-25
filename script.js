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
        "education.title": "Education & Timeline",
    "education.item1.title": "Web Development",
    "education.item1.place": "Self-Learning (1st Year)",
    "education.item1.description": "Mastered HTML, CSS, JavaScript & Python basics through hands-on projects.",
    "education.item2.title": "Networking Fundamentals",
    "education.item2.place": "CCNA Studies (2nd Year)",
    "education.item2.description": "Studied network infrastructure, protocols, and CCNA certification concepts.",
    "education.item3.title": "SOC Specialist Training",
    "education.item3.place": "Cybersecurity Focus (3rd Year)",
    "education.item3.description": "Learning SOC operations, threat analysis, and security monitoring techniques.",
    "education.item4.title": "Cybersecurity Student",
    "education.item4.place": "Arab Open University (AOU)",
    "education.item4.description": "Third year B.Sc. student specializing in cybersecurity and information security.",
        // الاتصال
        "contact.title": "Contact",
        "contact.titleSpan": "Me",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.locationValue": "10th of Ramadan, Egypt",
        "contact.education": "Education",
        "contact.educationValue": "Cybersecurity Student",
        
        // وسائل التواصل
        "social.title": "Connect with me",
        
        // معلومات شخصية
        "personal.name": "Name",
        "personal.age": "Age",
        "personal.location": "Location",
        "personal.nationality": "Nationality",
        "personal.education": "Education",
        "personal.birthDate": "Birth Date",
        
        // الفوتر
        "footer.text": "Cybersecurity Specialist & SOC Analyst",
        "footer.copyright": "© 2025 Mahmoud Hassan. All rights reserved."
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
        "education.title": "التعليم والجدول الزمني",
    "education.item1.title": "تطوير الويب",
    "education.item1.place": "تعلم ذاتي (السنة الأولى)",
    "education.item1.description": "أتقنت أساسيات HTML، CSS، JavaScript وPython من خلال مشاريع عملية.",
    "education.item2.title": "أساسيات الشبكات",
    "education.item2.place": "دراسات CCNA (السنة الثانية)",
    "education.item2.description": "درست بنية الشبكات، البروتوكولات، ومفاهيم شهادة CCNA.",
    "education.item3.title": "تدريب متخصص SOC",
    "education.item3.place": "تركيز على الأمن السيبراني (السنة الثالثة)",
    "education.item3.description": "أتعلم عمليات SOC، تحليل التهديدات، وتقنيات مراقبة الأمن.",
    "education.item4.title": "طالب أمن سيبراني",
    "education.item4.place": "الجامعة العربية المفتوحة (AOU)",
    "education.item4.description": "طالب سنة ثالثة بكالوريوس متخصص في الأمن السيبراني وأمن المعلومات.",
        
        // الاتصال
        "contact.title": "اتصل",
        "contact.titleSpan": "بي",
        "contact.email": "البريد الإلكتروني",
        "contact.phone": "الهاتف",
        "contact.location": "الموقع",
        "contact.locationValue": "العاشر من رمضان، مصر",
        "contact.education": "التعليم",
        "contact.educationValue": "طالب أمن سيبراني",
        
        // وسائل التواصل
        "social.title": "تواصل معي على",
        
        // معلومات شخصية
        "personal.name": "الاسم",
        "personal.age": "العمر",
        "personal.location": "الموقع",
        "personal.nationality": "الجنسية",
        "personal.education": "التعليم",
        "personal.birthDate": "تاريخ الميلاد",
        
        // الفوتر
        "footer.text": "أخصائي أمن سيبراني ومحلل SOC",
        "footer.copyright": "© 2025 محمود حسن. جميع الحقوق محفوظة."
    }
};

// الحالة الحالية
let currentLang = 'en';
let currentTheme = 'dark';

// دالة لحساب العمر التلقائي بدون عرض العملية
function calculateAge() {
    const birthDate = new Date('2006-01-01'); // 1 يناير 2006
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    const ageElement = document.getElementById('age');
    if (ageElement) {
        // إخفاء العملية الحسابية - تظهر الرقم النهائي مباشرة
        ageElement.textContent = age;
        ageElement.removeAttribute('data-target'); // إزالة خاصية العد
        ageElement.classList.remove('counter'); // إزالة كلاس العداد
    }
    
    return age;
}

// دالة لعرض تاريخ الميلاد بالصيغة المطلوبة
function displayBirthDate() {
    const birthDate = new Date('2006-01-01'); // 1 يناير 2006
    
    // تاريخ الميلاد بالإنجليزية: January 1, 2006
    const birthDateEn = 'January 1, 2006';
    
    // تاريخ الميلاد بالعربية: ١ يناير ٢٠٠٦
    const birthDateAr = '١ يناير ٢٠٠٦';
    
    // تحديث في الترجمات
    translations.en.birthDate = birthDateEn;
    translations.ar.birthDate = birthDateAr;
    
    // تحديث الواجهة
    const birthDateElement = document.getElementById('birthDate');
    if (birthDateElement) {
        birthDateElement.textContent = birthDateEn;
    }
}

// تحديث دالة animateCounter لتظهر العمر مباشرة بدون عد
function animateCounter() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        // إذا كان هذا هو العمر، نعرضه مباشرة بدون عد
        if (counter.id === 'age') {
            const age = calculateAge();
            counter.textContent = age;
        } else {
            // للعدادات الأخرى إن وجدت
            const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
            const increment = target / 50;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 30);
        }
    });
}

// دالة لتحديث تاريخ الميلاد عند تغيير اللغة
function updateBirthDateOnLangChange(lang) {
    const birthDateElement = document.getElementById('birthDate');
    if (birthDateElement) {
        if (lang === 'ar') {
            birthDateElement.textContent = translations.ar.birthDate; // ١ يناير ٢٠٠٦
        } else {
            birthDateElement.textContent = translations.en.birthDate; // January 1, 2006
        }
    }
}

// دالة لتحديث المعلومات
function updateLocationInfo() {
    const locationElements = document.querySelectorAll('.info-content p');
    locationElements.forEach(el => {
        if (el.textContent === 'Egypt') {
            el.textContent = '10th of Ramadan, Egypt';
        }
        if (el.textContent === 'University Student') {
            el.textContent = 'Arab Open University (AOU)';
        }
    });
}

// تحسين التنسيق عند تغيير اللغة
function updateLanguage(lang) {
    currentLang = lang;
    
    const langBtn = document.getElementById('langSwitch');
    const langText = langBtn.querySelector('span');
    const langIcon = langBtn.querySelector('i');
    
    if (lang === 'ar') {
        langText.textContent = 'AR';
        langIcon.className = 'fas fa-language';
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
        document.body.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';
        
        // تحسين التنسيق للعربية
        setTimeout(() => {
            // إعادة حساب التنسيقات
            if (window.innerWidth <= 768) {
                document.querySelectorAll('.timeline-item').forEach(item => {
                    item.style.marginRight = '50px';
                    item.style.marginLeft = '0';
                });
            }
        }, 100);
        
    } else {
        langText.textContent = 'EN';
        langIcon.className = 'fas fa-globe';
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
        document.body.setAttribute('dir', 'ltr');
        document.documentElement.lang = 'en';
    }
    
    // تحديث النصوص المترجمة
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    updateBirthDateOnLangChange(lang);
    document.body.setAttribute('data-lang', lang);
}

// تبديل اللغة
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(newLang);
}

// تبديل الثيم
function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    currentTheme = theme;
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
    
    localStorage.setItem('theme', theme);
}

// القائمة المتنقلة
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        const mobileSocial = document.querySelector('.nav-social.mobile');
        if (navLinks.classList.contains('active')) {
            if (!mobileSocial) {
                addSocialToMobileMenu();
            }
        } else {
            if (mobileSocial) {
                mobileSocial.remove();
            }
        }
    });
    
    document.querySelectorAll('.nav-links a, .nav-social a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const mobileSocial = document.querySelector('.nav-social.mobile');
            if (mobileSocial) {
                mobileSocial.remove();
            }
        });
    });
}

function addSocialToMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const socialHTML = `
        <div class="nav-social mobile">
            <a href="https://facebook.com" target="_blank" class="nav-social-icon" title="Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="nav-social-icon" title="Instagram">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/201030552768" target="_blank" class="nav-social-icon" title="WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" class="nav-social-icon" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
    `;
    navLinks.insertAdjacentHTML('afterend', socialHTML);
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

// عد الأرقام بشكل متحرك
function animateCounter() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
        const increment = target / 50;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 30);
    });
}

// أنيميشن البطاقات
function animateInfoCards() {
    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
        }, 500);
    });
}

// تحديث تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تجاهل اللغة المحفوظة وإجبار الإنجليزية أولاً
    currentLang = 'en';
    
    // تطبيق اللغة الإنجليزية مباشرة
    updateLanguage('en');
    
    // باقي التهيئة...
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // إضافة مستمعي الأحداث
    document.getElementById('langSwitch').addEventListener('click', toggleLanguage);
    document.getElementById('themeSwitch').addEventListener('click', toggleTheme);
    
    // تهيئة المكونات
    initMobileMenu();
    initSmoothScroll();
    loadProfileImage();
    
    // المعلومات الشخصية
    calculateAge();
    displayBirthDate();
    updateLocationInfo();
    
    // الأنيميشن
    setTimeout(() => {
        animateCounter();
        animateInfoCards();
    }, 800);
    
    // تأثير التمرير على النافبار
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
    
    // تحميل الصفحة ناعم
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// تأثير ظل النافبار عند التحميل
document.body.style.transition = 'opacity 0.5s ease';
document.body.style.opacity = '0';