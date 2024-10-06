import { app, BrowserWindow } from "electron/main";
import { join } from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";
// import isDev from "electron-is-dev";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, "preload.js"),
    },
  });

  win.setIcon(join(__dirname, "../src/assets/namicz-Icon.png"));
  win.loadURL("https://namicz.vercel.app");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
