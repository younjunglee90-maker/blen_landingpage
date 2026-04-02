// Download 버튼 동작: 실제 앱 스토어 링크로 연결
// 아래 URL은 사용자에게서 받은 뒤 여기에 채워 넣으면 됩니다.
const ANDROID_URL = "#";
const IOS_URL = "#";

function bindStoreLinks(){
  const androidBtn = document.getElementById("androidBtn");
  const iosBtn = document.getElementById("iosBtn");
  if (androidBtn) androidBtn.href = ANDROID_URL;
  if (iosBtn) iosBtn.href = IOS_URL;
}

bindStoreLinks();

