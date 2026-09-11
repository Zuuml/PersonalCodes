const header=document.querySelector('.header'),progress=document.querySelector('.progress'),menuBtn=document.querySelector('.menu-btn'),mobile=document.querySelector('.mobile-menu');

function scrollUI() {
    const y=scrollY;
    header?.classList.toggle('scrolled',y>25);
    const m=document.documentElement.scrollHeight-innerHeight;
    if(progress)progress.style.width=(m?y/m*100:0)+'%'
}
addEventListener('scroll',scrollUI, {
    passive:true
}
);
scrollUI();
menuBtn?.addEventListener('click',()=> {
    const o=!mobile.classList.contains('open');
    mobile.classList.toggle('open',o);
    menuBtn.classList.toggle('active',o);
    document.body.classList.toggle('menu-open',o)
}
);
mobile?.querySelectorAll('a').forEach(a=>a.onclick=()=> {
    mobile.classList.remove('open');
    menuBtn.classList.remove('active');
    document.body.classList.remove('menu-open')
}
);

const io=new IntersectionObserver(es=>es.forEach(e=> {
    if(e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target)
    }
}
), {
    threshold:.1
}
);
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());


/* =========================================================
   V8 — MOBILE BACKGROUND VIDEO
   ========================================================= */

const backgroundVideos = document.querySelectorAll(
    "video[autoplay]"
);

function prepareBackgroundVideo(video) {
    video.muted = true;
    video.defaultMuted = true;

    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
        const promise = video.play();

        if (promise && typeof promise.catch === "function") {
            promise.catch(() => {
                /*
                 * iOS can still postpone autoplay in low-power mode.
                 * The poster remains visible, and the first user touch
                 * below will try playback again.
                 */
            });
        }
    };

    if (video.readyState >= 2) {
        tryPlay();
    } else {
        video.addEventListener(
            "canplay",
            tryPlay,
            { once: true }
        );
    }

    document.addEventListener(
        "touchstart",
        tryPlay,
        { once: true, passive: true }
    );

    document.addEventListener(
        "pointerdown",
        tryPlay,
        { once: true, passive: true }
    );
}

backgroundVideos.forEach(
    prepareBackgroundVideo
);

/*
 * Pause videos outside the viewport to save battery,
 * then resume them when they become visible again.
 */
const videoObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            const video = entry.target;

            if (entry.isIntersecting) {
                video.muted = true;

                const promise = video.play();

                if (
                    promise &&
                    typeof promise.catch === "function"
                ) {
                    promise.catch(() => {});
                }
            } else {
                video.pause();
            }
        });
    },
    {
        threshold: 0.08
    }
);

backgroundVideos.forEach(
    video => videoObserver.observe(video)
);

document.addEventListener(
    "visibilitychange",
    () => {
        if (document.hidden) {
            backgroundVideos.forEach(
                video => video.pause()
            );

            return;
        }

        backgroundVideos.forEach(video => {
            const rect = video.getBoundingClientRect();

            if (
                rect.bottom > 0 &&
                rect.top < window.innerHeight
            ) {
                video.muted = true;

                const promise = video.play();

                if (
                    promise &&
                    typeof promise.catch === "function"
                ) {
                    promise.catch(() => {});
                }
            }
        });
    }
);
