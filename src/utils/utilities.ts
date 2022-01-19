const nonce = (length = 10): string => {
    let result = "";
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return result;
};

const github_url = "https://github.com/xanderwaugh/funimation-extended";
const webstore_url =
    "https://chrome.google.com/webstore/detail/funimation-extended/dgjjammnljkoaikdkchpagpklahibajf";

export { nonce, github_url, webstore_url };
