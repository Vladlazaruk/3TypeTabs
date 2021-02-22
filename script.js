const triggers = document.querySelectorAll('.tabs-triggers__item'),
      contentItems = document.querySelectorAll('.tabs-content__item');

triggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        triggers.forEach(item => {
            item.classList.remove('tabs-triggers__item-active');
        });
        contentItems.forEach(item => {
            item.classList.remove('tabs-content__item-active');
        });
        trigger.classList.add('tabs-triggers__item-active');
        document.getElementById(id).classList.add('tabs-content__item-active');

    });
});

document.querySelector('.tabs-triggers__item').click();