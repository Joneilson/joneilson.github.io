document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-background');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const binary = "01";
    const columns = Math.floor(width / 20);
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.045)";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#630113ff";
        ctx.font = "15pt monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = binary.charAt(Math.floor(Math.random() * binary.length));
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);

    // Ajusta o tamanho do canvas quando a janela é redimensionada
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        // Recalcula o número de colunas para o novo tamanho
        const newColumns = Math.floor(width / 20);
        // Reseta as gotas para evitar problemas de renderização
        drops.length = 0;
        for (let x = 0; x < newColumns; x++) {
            drops[x] = 1;
        }
    });
});