(async () => {
    try {
        const res = await fetch("/version.txt?ts=" + Date.now());
        const serverVersion = (await res.text()).trim();
        const localVersion = localStorage.getItem("siteVersion");

        if (localVersion !== serverVersion) {
            localStorage.setItem("siteVersion", serverVersion);

            const url = new URL(location.href);
            url.searchParams.set("v", serverVersion);

            location.href = url.toString();
        }
    } catch (e) {
        console.error("Version check failed:", e);
    }
})();
