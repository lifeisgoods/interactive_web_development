//전역변수를 피하기 위해서 ()안에서 함수를 선언하고 코드를 작성!
(function () {

    const houseElem = document.querySelector('.house');

    window.addEventListener('scroll', function(){
        console.log(pageYOffset);
});

})();