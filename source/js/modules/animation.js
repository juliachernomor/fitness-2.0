import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
// TextPlugin, EasePack
gsap.registerPlugin(ScrollTrigger);


const tlPreview = () => {

  gsap.from('#hero-picture', {
    x: 800,
    duration: 3,
    opacity: 0,
    ease: 'back.out(1.5)',
  });

  gsap.from('#abonement', {
    x: -800,
    duration: 3,
    opacity: 0,
    ease: 'back.out(1.5)',
  }, '<');

  gsap.from('#abonements', {
    x: -800,
    duration: 3,
    opacity: 0,
    scrollTrigger: {
      // markers:true,
      trigger: '#abonements',
      end: '30% 60%',
      scrub: 1.5,
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from('#supergames', {
    x: -800,
    duration: 3,
    opacity: 0,
    scrollTrigger: {
      // markers:true,
      trigger: '#supergames',
      end: '30% 60%',
      scrub: 1.5,
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from('#trainer', {
    x: -800,
    duration: 3,
    opacity: 0,
    scrollTrigger: {
      // markers:true,
      trigger: '#trainer',
      end: '30% 60%',
      scrub: 1.5,
      toggleActions: 'play none none reverse',
    },
  });
};

export {tlPreview};
