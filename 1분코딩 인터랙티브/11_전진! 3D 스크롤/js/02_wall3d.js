//전역변수를 피하기 위해서 ()안에서 함수를 선언하고 코드를 작성!
(function () {

    const houseElem = document.querySelector('.house');
    let maxScrollValue = document.body.offsetHeight - window.innerHeight;

    window.addEventListener('scroll', function() {
    const zMove = pageYOffset / maxScrollValue * 985 - 490;
    houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
});

})();