import Lenis from 'lenis';

export const scrollToElement = (lenis: Lenis, element: string) => {
    const target = document.querySelector(element);

    if (lenis && target instanceof HTMLElement) {
        lenis.scrollTo(target, {
            duration: 1,
            easing: (t) => t,
        });
    }
};
