// Keep track of the extension state
let state = {
  isEnabled: false,
};

// Listen for messages from popup or content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case "getState":
      sendResponse({ isEnabled: state.isEnabled });
      break;
    case "setResolution":
      chrome.windows.getCurrent({}, (window) => {
        chrome.windows.update(window.id, {
          width: request.width,
          height: request.height,
          state: "normal", // Ensure window isn't maximized
        });
      });
      break;
  }
  return true;
});

function isAllowedUrl(url) {
  // Check if URL is valid and not a restricted page
  return (
    url &&
    !url.startsWith("chrome://") &&
    !url.startsWith("edge://") &&
    !url.startsWith("about:") &&
    !url.startsWith("chrome-extension://")
  );
}
