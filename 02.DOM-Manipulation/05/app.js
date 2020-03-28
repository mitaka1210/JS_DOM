function notify(messeage) {

    let notificationBox = document.getElementById('notification');
    notificationBox.style.display = 'block';
    notificationBox.textContent = messeage;
    setTimeout(() => { notificationBox.style.display = 'none'; }, 10000)
}