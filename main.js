const {app, BrowserWindow} = require("electron")
const path = require("path")
const url = require("url")
let win
function createWindow () {
    //win.setIgnoreMouseEvents(ignore) = new BrowserWindow ({
        win = new BrowserWindow ({
        transparent: true,
        frame: false,
        toolbar: false,
        fullscreen: true

    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file",
        slashes: true
    }))
}
app.on("ready", createWindow)