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


// Box thông báo 
const notificationBox = document.querySelector('.header__navbar-item-link.notice');
const notificationBoxClose = document.getElementById('header__navbar-item-notice');
const notificationBoxString  = '<div class="header__navbar-item--login-or-register-container"> <div class="header__navbar-item-arrow"> <div class="header__navbar-item-arrow--inner"></div> </div> <div class="header__navbar-item--box-login-register"> <div class="header__navbar-item--box-login-register-img-container"> <div class="header__navbar-item--box-login-register-img"> <img src="./assets/img/login-register-img.png" alt="login-register-img" style="width: 100px; height: 100px;"> <p class="header__navbar-item--box-login-register-img-content">Đăng nhập để xem Thông báo</p> </div> <div class="header__navbar-item--box-login-register-main"> <button class="header__navbar-item--box-login-register-main-content"> <div>Đăng ký</div> </button> <button class="header__navbar-item--box-login-register-main-content">Đăng nhập</button> </div> </div> </div></div>'
function openNotificationBox(){
    if(document.querySelector('.header__navbar-item--login-or-register-container')!= null){
        document.querySelector('.header__navbar-item--login-or-register-container').remove();
    }
    notificationBox.insertAdjacentHTML("afterend", notificationBoxString);
}
function closeNotificationBox(){
    document.querySelector('.header__navbar-item--login-or-register-container').remove();
}

notificationBox.addEventListener('mouseenter', openNotificationBox);
notificationBoxClose.addEventListener('mouseleave', closeNotificationBox);
