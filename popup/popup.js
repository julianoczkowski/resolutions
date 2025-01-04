document.addEventListener("DOMContentLoaded", () => {
  const setResolutionButton = document.getElementById("setResolution");

  setResolutionButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({
      action: "setResolution",
      width: 1936,
      height: 1087,
    });
  });
});
