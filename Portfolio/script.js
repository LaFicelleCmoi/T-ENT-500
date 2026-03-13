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
                    animateSkills(); // Lance l'animation des barres
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
