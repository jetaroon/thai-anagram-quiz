const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const serve = require("electron-serve");
const loadURL = serve({ directory: "dist" });
const _NUXT_URL_ = `http://localhost:3000`

let win

async function createWindow () {
        win = new BrowserWindow({
            width: 1024,
            height: 768,
            webSecurity: false,
            webPreferences:{
               nodeIntegration: true,
            }
        })
        await loadURL(win)
       
    
    }
   
    Menu.setApplicationMenu(null)
    
    app.whenReady().then(async () => {
         createWindow()
        // If in macOS, Open a window when there are none
        app.on('activate', function () {
        	if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
        app.on('second-instance', () => {
          if (win) {
            // Focus on the main window if the user tried to open another
            if (win.isMinimized())
              win.restore()
            win.focus()
          }
        })
  
      //If not in macOS, Quit Application when all windows are closed
      app.on('window-all-closed', function () {
          if (process.platform !== 'darwin') app.quit()
      })
    })



