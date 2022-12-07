function redirect(page, source) {
    let sourceURL = source + '.html';
    let pageURL = page + '.html';
    let currentURL = window.location.href;
    if(source === 'home') {
        switch(page) {
            case 'home':
                window.location.href = currentURL;
                break;
            default:
                window.location.href = currentURL + pageURL;
                break;
        }
    } else {
        switch(page) {
            case 'home':
                window.location.href = currentURL.replace(sourceURL, '');
                break;
            default:
                window.location.href = currentURL.replace(sourceURL, pageURL);
                break;
        }
    }

}