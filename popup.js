document.getElementById("toggleTranslation").addEventListener("click", async () => {
    const queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    if (tab && tab.url) {
        let url = new URL(tab.url);
        let paramToRemove = "translation=disable";
        if (url.searchParams.has("translation") && url.searchParams.get("translation") === "disable") {
            url.searchParams.delete("translation");
        } else {
            url.searchParams.set("translation", "disable");
        }
        chrome.tabs.update(tab.id, { url: url.href });
    }
});