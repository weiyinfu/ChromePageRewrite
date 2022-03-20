function getUrl() {
    return storageGet(urlKey)
}

getConfig().then(resp => {
    function useIframe() {
        let url = resp.defaultUrl;
        if (getUrl()) {
            url = getUrl();
        }
        document.title=resp.name;
        document.body.innerHTML = `<iframe src="${url}"></iframe>`;
    }

    function useLocation() {
        let url = resp.defaultUrl;
        if (getUrl()) {
            url = getUrl();
        }
        location.href = url;
    }
    useLocation();
})
