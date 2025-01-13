/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('header h1');

    title.addEventListener('click', () => {
        window.location.href = "https://google.com"; // 원하는 링크로 수정
    });
});

document.getElementById('launch-app').addEventListener('click', () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is on iOS or Android
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    const appScheme = "kbstarfx://"; // Replace with your app's URL scheme
    const androidStoreUrl = "https://play.google.com/store/apps/details?id=com.kbstar.kbstarfx"; // Replace with your app's Play Store URL
    const iosStoreUrl = "https://https://apps.apple.com/us/app/kb-star-fx/id6480251323"; // Replace with your app's App Store URL

    // Try to open the app
    window.location.href = appScheme;

    // Redirect to store if app is not installed
    setTimeout(() => {
        if (isAndroid) {
            window.location.href = androidStoreUrl;
        } else if (isIOS) {
            window.location.href = iosStoreUrl;
        } else {
            window.location.href = androidStoreUrl;
        }
    }, 2000); // Adjust delay as necessary
});

document.getElementById("submitBtn").addEventListener("click", function() {
    // 입력값 가져오기
    const inputValue = document.getElementById("userInput").value;
    
    // 함수 실행
    sendDataToFlutter(data);
  });
  
function sendDataToFlutter(data) {
    window.flutter_inappwebview.callHandler('flutterHandler', data)
      .then(function(response) {
        console.log("Flutter 응답: " + response);
      });
  }