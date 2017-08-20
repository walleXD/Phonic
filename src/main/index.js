// Native
import { join } from 'path'
import { format } from 'url'

// Packages
import { BrowserWindow, app } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'
import windowStateKeeper from 'electron-window-state'

let mainWindow
let firstLoad = true

const createMainWindow = async () => {
  if (firstLoad) {
    await prepareNext('./src/client')
    firstLoad = false
  }

  let windowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 500
  })

  mainWindow = new BrowserWindow({
    height: windowState.height,
    useContentSize: true,
    width: windowState.width,
    x: windowState.x,
    y: windowState.y
  })

  windowState.manage(mainWindow)

  const url = isDev ? 'http://localhost:8000' : format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  })

  mainWindow.loadURL(url)

  mainWindow.on('closed', () => { mainWindow = null })
}

// Prepare the renderer once the app is ready
app.on('ready', createMainWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  } else {
    mainWindow = null
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow()
  }
})
