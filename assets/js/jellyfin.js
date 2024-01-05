window.onload = function () {
    const url_test = "https://chat.lcpu.dev/favicon.svg"
    const urlA = "http://lab.zhengnq.com:8096/web/index.html";
    const urlB = "http://39.99.250.62:8096/web/index.html";

    const timeout = 1000; // 超时时间设置为 1 秒（1000 毫秒）

    let imageLoaded = false;

    const testImage = new Image();

    testImage.onload = function() {
        if (!imageLoaded) {
            imageLoaded = true;
            window.location.href = urlA; // 如果图片加载成功，跳转到网站A
        }
    };

    testImage.onerror = function() {
        if (!imageLoaded) {
            imageLoaded = true;
            window.location.href = urlB; // 如果图片加载失败，跳转到网站B
        }
    };

    testImage.src = url_test; // 尝试加载图片

    // 设置超时检测
    setTimeout(function() {
        if (!imageLoaded) {
            imageLoaded = true;
            window.location.href = urlB; // 如果超时，跳转到网站B
        }
    }, timeout);
}

