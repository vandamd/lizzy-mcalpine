// When a <a> with the id 'notice-link' is hovered over, the <p> with class 'f1' inside the divs with id 'flower' will have their inner html changed to a flower emoji
const noticeLink = document.querySelector('#notice-link');
const flowers1 = document.querySelectorAll('#flower .f1');
const flowers2 = document.querySelectorAll('#flower .f2');

noticeLink.addEventListener('mouseover', () => {
  flowers1.forEach(flower => {
        flower.style.transition = 'transform 0.2s ease-in-out';
        flower.style.transform = `rotate(${Math.floor(Math.random() * 180)}deg)`;
        flower.style.color = '#FF82AB';
    });
});

noticeLink.addEventListener('mouseout', () => {
    flowers1.forEach(flower => {
        flower.innerHTML = '❀';
        flower.style.transform = 'translateY(0px)';
        flower.style.color = '#fff';
    });
});


noticeLink.addEventListener('mouseover', () => {
  flowers2.forEach(flower => {
        flower.style.transition = 'transform 0.2s ease-in-out';
        flower.style.transform = `rotate(${Math.floor(Math.random() * 180)}deg)`;
        flower.style.color = '#F3CD01';
    });
});

noticeLink.addEventListener('mouseout', () => {
    flowers2.forEach(flower => {
        flower.innerHTML = '✿';
        flower.style.transform = 'translateY(0px)';
        flower.style.color = '#fff';
    });
});