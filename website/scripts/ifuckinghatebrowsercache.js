(async () => {
    try {
        const res = await fetch("/version.txt", {
            cache: "no-cache"
        });
        const serverVersion = (await res.text()).trim();
        const localVersion = localStorage.getItem("siteVersion");

        console.log("Local vs Server:", localVersion, serverVersion);

        if (localVersion !== serverVersion) {
            console.log("Version mismatch. Reloading…");

            localStorage.setItem("siteVersion", serverVersion);

            window.location.reload();
        }
    } catch (err) {
        console.error("Version check failed:", err);
    }
})();
