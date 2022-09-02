// drawer tải ứng dụng
const downloadApp = document.querySelector('.header__navbar-item--dowload-app');
const dowloadAppHover = document.querySelector('.header__navbar-item-link');
function openDrawerDownload(){
    downloadApp.innerHTML = `
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
}


function closeDrawerDownload(){
    downloadApp.innerHTML = `<a class="header__navbar-item-link " href="">Tải ứng dụng</a>`;
}
downloadApp.addEventListener('mouseenter', openDrawerDownload);
downloadApp.addEventListener('mouseleave', closeDrawerDownload);



