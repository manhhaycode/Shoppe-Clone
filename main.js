// drawer tải ứng dụng
const dowloadApp = document.querySelector('.header__navbar-item--dowload-app');
function openDrawerDownload(){
    dowloadApp.innerHTML = `
<a class="header__navbar-item-link " href="">Tải ứng dụng</a>
<div class="drawer-dowload-apps-container">
    <div class="drawer-dowload-apps">
        <div class="drawer-dowload-apps__qr-code">
            <img class="drawer-dowload-apps__qr-code-img" src="./assets/img/qr-code.jpg" alt="qr-code">
        </div>
        <div class="drawer-dowload-apps-icons">
            <img src="./assets/img/app-store.png" alt="" class="drawer-dowload-apps-icons__store">
            <img src="./assets/img/google-play.png" alt="" class="drawer-dowload-apps-icons__store">
            <img src="./assets/img/app-gallery.png" alt="" class="drawer-dowload-apps-icons__store">
        </div>
    </div>
</div>`;
    var drawerContainer = document.querySelector('.drawer-dowload-apps-container');
    if(dowloadApp.addEventListener){

    }
}

function closeDrawerDownload(){
    dowloadApp.innerHTML = `<a class="header__navbar-item-link " href="">Tải ứng dụng</a>`;
}

dowloadApp.addEventListener('mousemove', openDrawerDownload);
dowloadApp.addEventListener('mouseout', closeDrawerDownload);



