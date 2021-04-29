const { BrowserWindow, WebContents } = require('electron')

/**
 * Load window control
 * 
 * @param {WebContents} webContents
 * @returns {string} Control HTML
 */
function loadWindowControl(webContents) {
    // TODO: Add controller
}

/**
 * Load custom title bar
 * 
 * @param {BrowserWindow} win 
 */
function customTitleBar(win) {
    let webContents = win.webContents

    webContents.on('update-target-url', function () {
        if (/.+index\.html$/.test(webContents.getURL())) {
            return
        }

        webContents.on('did-finish-load', function () {
            loadWindowControl(webContents)
        })
    })
}

exports.customTitleBar = customTitleBar
