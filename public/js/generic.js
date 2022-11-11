function redirect(page) {
    let currentURL = window.location.href;
    switch(page) {
        case 'home':
            window.location.href = currentURL;
            break;
        default:
            window.location.href = currentURL.replace(page, '');
            break;
    }
}