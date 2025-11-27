(async () => {
    try {
        const res = await fetch("/version.txt", {
            cache: "no-cache"
        });
        const serverVersion = (await res.text()).trim();
        const localVersion = localStorage.getItem("siteVersion");

        if (localVersion !== serverVersion) {
            localStorage.setItem("siteVersion", serverVersion);

            // Force reload to pull new assets
            window.location.reload();
        }
    } catch (err) {
        console.error("Version check failed:", err);
    }
})();
