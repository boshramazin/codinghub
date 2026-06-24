// دالة فتح وإغلاق قائمة الجوال
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

// بيانات أعضاء اللجان والفرق لتعرض داخل الـ Modal
const teamData = {
    leadership: {
        title: "Team Leadership",
        members: ["Hasan Dalaleh", "Ahmad Kasasbeh", "Jasmine Kazziha", "Alhasan Amareen"]
    },
    social: {
        title: "Social Media Team",
                members: ["Rawa'a Abedelkaeem", "Boshra Al’batoush", "Sidra Khatatbeh", "Shahed Daradkah","Retaj Louranse","Bayan Al’azzam","Roa’a Melhem","Taimaa ALQatawneh","Sohad Alnaddaf","Sedra Tarawneh","Hebaش",]

    },
    activities: {
        title: "Activities Team",
        members: ["Yaqeen Ababneh", "Omar Al-Saeed", "Layan Al-Rousan", "Faisal Khamees"]
    }
};

// دالة فتح النافذة المنبثقة وتعبئة الأسماء بناءً على الفريق الذي تم الضغط عليه
function openMembersModal(teamKey) {
    const modal = document.getElementById('membersModal');
    const modalTitle = document.getElementById('modalTitle');
    const membersList = document.getElementById('membersList');
    
    if (teamData[teamKey]) {
        modalTitle.textContent = teamData[teamKey].title;
        membersList.innerHTML = ""; // تنظيف القائمة القديمة
        
        // إضافة الأسماء الجديدة داخل الليست
        teamData[teamKey].members.forEach(member => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-3 bg-slate-900/60 border border-gray-800/80 px-4 py-2.5 rounded-xl text-gray-200 text-sm";
            li.innerHTML = `<i class="fas fa-user-circle text-sky-500 text-base"></i> ${member}`;
            membersList.appendChild(li);
        });
        
        modal.classList.remove('hidden'); // إظهار النافذة
    }
}

// دالة إغلاق النافذة المنبثقة
function closeMembersModal() {
    const modal = document.getElementById('membersModal');
    modal.classList.add('hidden');
}

// إغلاق القائمة التلقائي عند تغيير حجم الشاشة
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('menu-icon');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            if (menuIcon) {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        }
    }
});
