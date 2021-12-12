
/*header 메뉴 toogle 버튼 작동*/
const toggleBtn = document.querySelector('.navbar__toogleBtn');
/*html 안의 클래스가 nav__toogleBtn 클래스인 아이들을 찾아서 토클 버튼에 연결시켜줌*/
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

/*예전에는 j쿼리를 이용해서 썼는데 , 이제는 api들이 잘 되어있어서 더이상 제이쿼리 불필요*/
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    /*버튼이 클릭될때마다 메뉴와 아이콘의 클래스 리스트 중에 active 클래스를 toggling 함. 
    즉 마우스를 클릭시 메뉴, icon의 클래스가 active가 없다면 active를 추가해주고 있다면 빼주는 역할 */
    icons.classList.toggle('active');
}); /*클릭 될때 마다 지정한 함수를 호출*/

