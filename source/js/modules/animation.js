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

// const container = document.querySelector('#city');
// const _sentenceEndExp = /(\.|\?|!)$/g;

// const machineGun = (text) => {
//   const words = text.split(' ');


//   let wordCount = words.length;
//   let time = 0;
//   let word;
//   let element;
//   let duration;
//   let i;
//   let isSentenceEnd;

//   for (i = 0; i < wordCount; i++) {
//     word = words[i];
//     isSentenceEnd = _sentenceEndExp.test(word);
//     element = ('<h3>" + word + "</h3>').appendTo(container);
//     duration = Math.max(0.5, word.length * 0.08);
//     if (isSentenceEnd) {
//       duration += 0.6;
//     }
//     gsap.set(element, {autoAlpha: 0, scale: 0, z: 0.01});

//     gsap.to(
//         element,
//         duration,
//         {delay: 0.6, repeat: 2, repeatDelay: 4,scale: 1.2, ease: 'slow(0.25, 0.9)'},
//         time);
//     gsap.to(
//         element,
//         duration,
//         {delay: 0.6, repeat: 2, repeatDelay: 4, autoAlpha: 1, ease: 'slow(0.25, 0.9, true)'}, time);
//     time += duration - 0.05;
//     if (isSentenceEnd) {
//       time += 0.6;
//     }
//   }
// };

// machineGun('Самара Екатеринбург Москва Тюмень Санкт-Перербург Новороссийск Владивасток Новосибирск Челябинск');

//   .from('#advantages-list',{
//     stagger:0.1,
//     opacity:0,
//     y:200,
//     scrollTrigger:{
//       // markers:true,
//       trigger: '#advantages-list',
//       start: 'top 90%',
//       end:'30% 60%',
//       scrub:1.5,
//       toggleActions: 'play none none reverse',
//     }
//   })

//   .from('#example',{
//     stagger:0.1,
//     opacity:0,
//     y:100,
//     scrollTrigger:{
//       // markers:true,
//       trigger: '#example',
//       start: 'top 90%',
//       end:'30% 60%',
//       scrub:1.5,
//       toggleActions: 'play none none reverse',
//     }
//   })

export {tlPreview};

//   function parallax(){
//     const preview = document.querySelector('#secton-nutrition');

//     const initialX = preview.offsetLeft + preview.offsetWidth / 0.1;
//     const initialY = preview.offsetTop + preview.offsetHeight / 0.1;

//     preview.addEventListener('mousemove', function(event) {
//       const mouseX = event.clientX - initialX;
//       const mouseY = event.clientY - initialY;

//       gsap.to('#nutrition', {
//         rotationX: -mouseY * 0.2, // Изменение угла поворота по оси X
//         rotationY: -mouseX * 0.2, // Изменение угла поворота по оси Y
//         ease: 'power2.out'
//       });
//   });

// }
// parallax()