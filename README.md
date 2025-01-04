# Resolution Setter Chrome Extension

A Chrome extension that helps you quickly set your browser window to specific dimensions. Perfect for screen recording and testing responsive designs.

## Features

- 🎯 Set browser window to exactly 1920x1080 pixels with one click
- ⚡ Fast and lightweight
- 🎬 Ideal for screen recording at consistent dimensions

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Usage

1. Click the Resolution Setter icon in your Chrome toolbar
2. Click the "Set to 1920x1080" button
3. Your browser window will automatically resize to exactly 1920x1080 pixels

## Technical Details

The extension uses Chrome's windows API to precisely control window dimensions. It accounts for browser chrome and window borders to ensure exact dimensions.

### Files Structure

- `manifest.json`: Extension configuration
- `popup/`: Contains the extension popup UI
- `background.js`: Handles window resizing logic
