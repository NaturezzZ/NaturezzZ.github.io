window.onload = function () {
    const urlA = "http://lab.zhengnq.com:8096/web/index.html";
    const urlB = "http://39.99.250.62:8096/web/index.html";

    const timeout = 1000; // 超时时间设置为 1 秒（1000 毫秒）

    // 创建一个超时承诺
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Request timed out'));
        }, timeout);
    });

    // 使用 Promise.race 竞赛
    Promise.race([fetch(urlA, { mode: 'no-cors', referrerPolicy: 'no-referrer' }), timeoutPromise])
        .then(response => {
            if (response.ok || response.type === 'opaque') {
                window.location.href = urlA;
            } else {
                window.location.href = urlB;
            }
        })
        .catch(error => {
            console.log('Error or timeout:', error);
            window.location.href = urlB;
        });
}

