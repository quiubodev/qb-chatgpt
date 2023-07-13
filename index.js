const { app, BrowserWindow } = require('electron')

const bootstrap = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
    })
    win.loadURL('https://chat.openai.com/')
}

app.whenReady().then(bootstrap);
