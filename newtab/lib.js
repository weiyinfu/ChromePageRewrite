function storageSet(k, v) {
    //保存数据
    localStorage[k] = v
}

function storageGet(k) {
    return localStorage[k]
}

const urlKey = "url";

function getConfig() {
    return axios.get("./config.json")
}
