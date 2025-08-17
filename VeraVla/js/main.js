(function () {

    // бургер
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.header__button')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--open-menu')) {
            document.body.classList.add('body--open-menu')
        } else {
            document.body.classList.remove('body--open-menu')
        }

    }

    //  модалка
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.hero__button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__button-close') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {
        
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
            
            const accordionControl = e.target.closest('.accordion-list__control')
            if(!accordionControl) return;
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;
    
            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');
    
            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

            
        })
    });

    // Слайдер 

    new Swiper('.school__slider', {
        spaceBetween: 30,
        slidesPerView: 1,

        navigation: {
            nextEl: '.school__next',
            prevEl: '.school__prev',
        },
        breakpoints: {
            601: {
                slidesPerView: 1,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 2,
            }
        }
    });
    document.querySelectorAll('.more').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();

            const container = btn.closest('.fade-container');
            container.classList.toggle('expanded');

            btn.textContent = container.classList.contains('expanded') ? 'Скрыть' : 'Подробнее';
        });
    });

    new Swiper('.vacancies__slider', {
        spaceBetween: 30,
        slidesPerView: 1,

        navigation: {
            nextEl: '.vacancies__next',
            prevEl: '.vacancies__prev',
        },
        breakpoints: {
            601: {
                slidesPerView: 1,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 2,
            }
        }
    });

    const telInput = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask("+7 (999) 999-99-99")
    im.mask(telInput)
    
})();