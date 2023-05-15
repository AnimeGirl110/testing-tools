export class Controller {
  constructor(app) {
    this.app = app;
  }
  initialize() {
    console.log("initializing controller");
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "Escape":
          console.log("quitting");
          this.app.isRunning = false;
          break;
        case "KeyQ":
          console.log("quitting");
          this.app.isRunning = false;
          break;
      }
    });
  }

  run() {
    //console.log("running controller");
  }

  finalize() {
    console.log("finalizing controller");
  }
}
