import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const animatePairedElements = (start, end) => {
    const list = gsap.utils.toArray('.js-animation');

    list.forEach((item, index) => {
        gsap.fromTo(
            item,
            {
                opacity: 0,
                x: index % 2 ? 170 : -170,
            },
            {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    start: start, //top bottom
                    end: end, //top center+=250
                    trigger: item,
                    scrub: true,
                    // markers: true,
                },
            }
        );
    });
};