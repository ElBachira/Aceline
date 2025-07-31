document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DE PRE-LOADER, SONIDOS, PESTAÑAS Y ANIMACIONES ---
    const preloader=document.getElementById('preloader');window.addEventListener('load',()=>{preloader.classList.add('loaded')});const clickSound=new Audio('https://www.fesliyanstudios.com/play-mp3/387');const swooshSound=new Audio('https://www.fesliyanstudios.com/play-mp3/570');document.querySelectorAll('.tab-button, .close-btn, .play-button').forEach(button=>{button.addEventListener('click',()=>{clickSound.currentTime=0;clickSound.play()})});document.querySelectorAll('.links-grid a').forEach(button=>{button.addEventListener('click',()=>{swooshSound.currentTime=0;swooshSound.play()})});document.addEventListener('mousemove',(e)=>{const{clientX,clientY}=e;const{innerWidth,innerHeight}=window;const xOffset=(clientX/innerWidth-.5)*-2;const yOffset=(clientY/innerHeight-.5)*-2;document.body.style.backgroundPosition=`calc(50% + ${xOffset}%) calc(50% + ${yOffset}%)`});const tabButtons=document.querySelectorAll('.tab-button');const closeButtons=document.querySelectorAll('.close-btn');tabButtons.forEach(button=>{button.addEventListener('click',()=>{const paneId=button.dataset.tab;document.getElementById(paneId).classList.add('active');if(paneId==='stats-tab'){animateStats()}})});closeButtons.forEach(button=>{button.addEventListener('click',()=>{button.closest('.overlay-pane').classList.remove('active')})});function animateStats(){document.querySelectorAll('.overlay-pane.active .fill').forEach(bar=>{bar.style.width='0%';const percentage=bar.getAttribute('data-p');setTimeout(()=>{bar.style.width=percentage+'%'},100)})}
    const audio=document.getElementById('song');const playPauseBtn=document.getElementById('play-pause-btn');const spotifyIcon=document.querySelector('.spotify-icon');const playIcon='<i class="fas fa-play"></i>';const pauseIcon='<i class="fas fa-pause"></i>';playPauseBtn.addEventListener('click',()=>{if(audio.paused){audio.play().then(()=>{playPauseBtn.innerHTML=pauseIcon;spotifyIcon.classList.add('is-spinning')}).catch(error=>{console.error("Error de reproducción:",error)})}else{audio.pause();playPauseBtn.innerHTML=playIcon;spotifyIcon.classList.remove('is-spinning')}});audio.addEventListener('ended',()=>{playPauseBtn.innerHTML=playIcon;spotifyIcon.classList.remove('is-spinning')});const fnafSticker=document.getElementById('fnaf-sticker');const honkSound=new Audio('https://www.myinstants.com/media/sounds/fnaf-nose-honk.mp3');fnafSticker.addEventListener('click',()=>{honkSound.currentTime=0;honkSound.play()});const copyBtn=document.getElementById('copy-link-btn');if(copyBtn){const originalBtnText=copyBtn.innerHTML;copyBtn.addEventListener('click',(e)=>{e.preventDefault();const url=window.location.href;navigator.clipboard.writeText(url).then(()=>{copyBtn.innerHTML='<i class="fas fa-check"></i> ¡Copiado!';copyBtn.classList.add('copied');swooshSound.currentTime=0;swooshSound.play();setTimeout(()=>{copyBtn.innerHTML=originalBtnText;copyBtn.classList.remove('copied')},2000)})})}

    // --- LÓGICA DE GALERÍA Y TEXTO ANIMADO (¡AHORA SINCRONIZADOS!) ---
    const typewriterElements = document.querySelectorAll('.typewriter');
    const galeriaMasc = document.getElementById('galeria-masculina');
    const galeriaFem = document.getElementById('galeria-femenina');

    // Función para construir la galería
    function buildGallery() {
        if (typeof botsMasculinos !== 'undefined' && galeriaMasc) {
            botsMasculinos.forEach(bot => {
                const botIcon = `<a href="${bot.link}" target="_blank" class="char-icon"><img src="${bot.imagen}" alt="${bot.nombre}"><span class="char-name">${bot.nombre}</span></a>`;
                galeriaMasc.innerHTML += botIcon;
            });
        }
        if (typeof botsFemeninos !== 'undefined' && galeriaFem) {
            botsFemeninos.forEach(bot => {
                const botIcon = `<a href="${bot.link}" target="_blank" class="char-icon"><img src="${bot.imagen}" alt="${bot.nombre}"><span class="char-name">${bot.nombre}</span></a>`;
                galeriaFem.innerHTML += botIcon;
            });
        }
    }

    // Función para animar el texto
    function animateText() {
        typewriterElements.forEach((element) => {
            const text = element.innerHTML;
            element.innerHTML = '';
            element.style.opacity = 1;
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i); i++;
                } else { clearInterval(typing); }
            }, 25);
        });
    }

    // Ejecuta todo en orden
    buildGallery();
    animateText();
});
