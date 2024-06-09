document.addEventListener('DOMContentLoaded', (event) => {
    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        document.body.appendChild(firework);

        setTimeout(() => {
            document.body.removeChild(firework);
        }, 1000);
    }

    function createFireworksEffect() {
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            setTimeout(() => createFirework(x, y), i * 100);
        }
    }

    window.addEventListener('load', createFireworksEffect);
});
