new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new Swiper('.swiper-2', {
    pagination: { el: '.swiper-pagination', clickable: true },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
    },
});

const body = document.body;
const btn = document.getElementById('newYearBtn');
const audio = document.getElementById('bgMusic');

if (btn) {
    btn.addEventListener('click', () => {
        const isActive = body.classList.toggle('new-year');
        btn.textContent = isActive ? '✨ Выключить' : '🎄 Новогоднее настроение';
        btn.classList.toggle('active', isActive);

        if (audio) {
            if (isActive) {
                audio.volume = 0.3;
                audio.play().catch(() => {});
            } else {
                audio.pause();
            }
        }
    });
}

const snowflakesContainer = document.querySelector('.snowflakes');
if (snowflakesContainer) {
    for (let i = 0; i < 50; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = ['❄', '❅', '❆', '✦'][Math.floor(Math.random() * 4)];
        flake.style.left = Math.random() * 100 + '%';
        flake.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
        flake.style.animationDuration = (Math.random() * 5 + 5) + 's';
        flake.style.animationDelay = (Math.random() * 5) + 's';
        snowflakesContainer.appendChild(flake);
    }
}

const garland = document.querySelector('.garland');
if (garland) {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 30; i++) {
        const light = document.createElement('div');
        light.className = 'garland-light';
        light.style.left = Math.random() * 100 + '%';
        light.style.top = Math.random() * 100 + '%';
        light.style.width = (Math.random() * 10 + 6) + 'px';
        light.style.height = light.style.width;
        light.style.background = colors[Math.floor(Math.random() * colors.length)];
        light.style.boxShadow = `0 0 10px 2px ${light.style.background}`;
        light.style.animationDelay = (Math.random() * 1.5) + 's';
        light.style.animationDuration = (Math.random() * 0.5 + 1) + 's';
        garland.appendChild(light);
    }
}
