document.addEventListener('DOMContentLoaded', () => {

    const startScreen = document.getElementById('start-screen');
    const pods = document.querySelectorAll('.light-pod');
    let lightStep = 0;

    const sequence = setInterval(() => {
        if(lightStep < 5) {
            const bulbs = pods[lightStep].querySelectorAll('.l-bulb');
            bulbs.forEach(b => b.classList.add('red'));
            lightStep++;
        } else {
            clearInterval(sequence);
            setTimeout(() => {
                document.querySelectorAll('.l-bulb').forEach(b => b.classList.remove('red'));

                setTimeout(() => {
                    startScreen.style.transform = 'translateY(-100%)';
                    animateSkills();
                    startClock();
                }, 600);
            }, 1000 + Math.random() * 1500);
        }
    }, 800);

    function animateSkills() {
        const fills = document.querySelectorAll('.skill-fill');
        fills.forEach(fill => {
            const targetWidth = fill.style.width;
            fill.style.width = '0';
            setTimeout(() => {
                fill.style.width = targetWidth;
            }, 200);
        });
    }

    function startClock() {
        const days = ['DIMANCHE', 'LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI'];

        function updateClock() {
            const now = new Date();

            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            const ms = String(now.getMilliseconds()).padStart(3, '0');

            const clockTime = document.getElementById('clockTime');
            const clockMs = document.getElementById('clockMs');
            const clockDate = document.getElementById('clockDate');
            const clockDay = document.getElementById('clockDay');
            const clockTZ = document.getElementById('clockTZ');
            const clockSession = document.getElementById('clockSession');

            if (clockTime) clockTime.textContent = h + ':' + m + ':' + s;
            if (clockMs) clockMs.textContent = '.' + ms;

            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            if (clockDate) clockDate.textContent = day + '/' + month + '/' + year;

            if (clockDay) clockDay.textContent = days[now.getDay()];

            const offset = -now.getTimezoneOffset() / 60;
            const sign = offset >= 0 ? '+' : '';
            if (clockTZ) clockTZ.textContent = 'UTC' + sign + offset;

            if (clockSession) {
                const hour = now.getHours();
                let session = 'NIGHT';
                if (hour >= 6 && hour < 12) session = 'MORNING';
                else if (hour >= 12 && hour < 14) session = 'MIDDAY';
                else if (hour >= 14 && hour < 18) session = 'AFTERNOON';
                else if (hour >= 18 && hour < 22) session = 'EVENING';
                clockSession.textContent = session;
            }
        }

        updateClock();
        setInterval(updateClock, 37);
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = "BOX BOX BOX! 📻";
        } else {
            document.title = "Loïs Clerc | Telemetry Portfolio";
        }
    });
});

function scrollToSection(id) {
    const target = document.getElementById(id);
    if(target) {
        target.scrollIntoView({ behavior: 'smooth' });

        document.querySelectorAll('.pos-box').forEach(b => b.classList.remove('active'));
        event.currentTarget.classList.add('active');
    }

    document.addEventListener('contextmenu', e => e.preventDefault());
    document.onkeydown = function(e){
        if(e.keyCode==123) return false;
        if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0)) return false;
        if(e.ctrlKey&&e.shiftKey&&e.keyCode=='C'.charCodeAt(0)) return false;
        if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0)) return false;
        if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0)) return false;
    };
    setInterval(function(){
        const start = performance.now(); debugger; const end = performance.now();
        if(end-start>100){
            document.getElementById('securityBreach').style.display='flex';
            document.getElementById('container').style.display='none';
        } else {
            document.getElementById('securityBreach').style.display='none';
            document.getElementById('container').style.display='grid';
        }
    }, 1000);
}
