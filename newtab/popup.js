function main() {
    const formMap = {
        "newTabUrl": urlKey,
    }

    function handleMainUrlChange(storageKey, value) {
        console.log(`${storageKey}=${value}`);
        storageSet(storageKey, value)
    }

    for (let [elementId, storageKey] of Object.entries(formMap)) {
        const ele = document.querySelector(`#${elementId}`)
        ele.addEventListener("change", evt => handleMainUrlChange(storageKey, evt.target.value))
        try {
            ele.value = storageGet(storageKey) || ""
        } catch (e) {
            console.error(e);
        }
    }


    getConfig().then(resp => {
        document.querySelector("#newTabUrl").placeholder = resp.placeholder;
    })
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        main()
    }
}