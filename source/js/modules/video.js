const video = document.querySelector('.video');
const link = video.querySelector('.video__link');
const button = video.querySelector('.video__button');

const setupVideo = () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw';
  iframe.title = 'YouTube video player';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.width = '100%';
  iframe.height = '100%';
  video.appendChild(iframe);

  button.addEventListener('click', () => {
    link.remove();
    button.remove();
  });
  link.removeAttribute('href');
  video.classList.add('video--enabled');
};
export {setupVideo};

