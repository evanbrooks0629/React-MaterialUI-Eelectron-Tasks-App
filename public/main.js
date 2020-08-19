const electron = require('electron');
const app = electron.app;
const path = require('path');
const BrowserWindow = electron.BrowserWindow;

// const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 435, 
        height: 800,
        maxWidth: 435,
        maxHeight: 800,
        minWidth: 435,
        minHeight: 800,
        nodeIntegration: true
    });
    mainWindow.removeMenu();
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});