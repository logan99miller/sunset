//allows use of shorter terms to refer to x
const {app, BrowserWindow} = require("electron"); 
const path = require("path");
const url = require("url");

let win //global reference of window to prevent program shutting down when JS garbage is collected

function createWindow () {
        win = new BrowserWindow ({
        
        //all required for transparency 
        transparent: true,
        frame: false,
        toolbar: false,
        fullscreen: true

    });

    win.setIgnoreMouseEvents(true); //allows user to click on windows / type without being blocked by window created by program
    win.setAlwaysOnTop(true, "screen"); //prevents another program to be brought to front of our window
    
    //loads file containing a opaque and coloured div
    win.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"), //allows files to be moved about
        protocol: "file",
        slashes: true
    }));
}
app.on("ready", createWindow);