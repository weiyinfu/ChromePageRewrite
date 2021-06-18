function getUrl() {
    return storageGet(urlKey)
}

getConfig().then(resp => {
    let url = resp.defaultUrl;
    if (getUrl()) {
        url = getUrl();
    }
    document.body.innerHTML = `<iframe src="${url}"></iframe>`;
})
