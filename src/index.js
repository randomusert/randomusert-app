const { app, BrowserWindow, Menu } = require('electron');
const path = require('node:path');
const popup = require("./popup")

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}


// setup toolbar
const toolbar = [ 
  {
    label: 'help',
    submenu: [
      {
        label: 'about',
        click: () => {
          about();
        }
      },
      {
        label: 'issues',
        click: () => {
          popup.issuepopup();
        }
      },
      {
        label: 'quit',
        click: () => {
          app.quit();
        }
      }
    ]
  }
]



const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
      
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));


 
  
  

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

const menu = Menu.buildFromTemplate(toolbar);
Menu.setApplicationMenu(menu);

//about popup
function about() {
  const popup = new BrowserWindow({
    width: 800,
    height: 800,
    parent: BrowserWindow.getFocusedWindow(), // Makes it a child window
    modal: true, // Makes it a modal dialog
    show: false, // Don't show until fully loaded
    frame: false, // Remove window frame
    webPreferences: {
      nodeIntegration: true, // Enable Node.js integration if needed
      contextIsolation: false, // Set to false for simple projects
    },
  });

  popup.loadFile('src/about/about.html'); // Load your popup content
  popup.once('ready-to-show', () => popup.show()); // Show when ready
  //popup.webContents.openDevTools(); // Open DevTools
}


