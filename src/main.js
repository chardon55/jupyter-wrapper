const { app, BrowserWindow } = require('electron')
const path = require("path")
const uiAddon = require("./ui-addon")

const INDEX_PAGE = "./static/index.html"

function createWindow() {
    const win = new BrowserWindow({
        frame = false
    })

    win.maximize()
    win.setAutoHideMenuBar(true)
    win.loadFile(path.resolve(app.getAppPath(), INDEX_PAGE))

    uiAddon.customTitleBar(win)
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
})