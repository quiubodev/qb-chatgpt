const { app, BrowserWindow } = require("electron");

const bootstrap = () => {
  const { width, height } = getBounds();

  const win = new BrowserWindow({
    width,
    height,
  });
  win.loadURL("https://chat.openai.com/");
};

const getBounds = () => {
  // check if the window is larger than the screen
  const { width: screenWidth, height: screenHeight } =
    require("electron").screen.getPrimaryDisplay().workAreaSize;

  // 80% of the screen
  const width = Math.round(screenWidth * 0.8);
  const height = Math.round(screenHeight * 0.8);

  return { width, height };
};


app.whenReady().then(bootstrap);
