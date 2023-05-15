import { Controller } from "./controller/controller.js";
import { View } from "./view/view.js";
import { Model } from "./model/model.js";

export class App {
  constructor() {
    console.log("initializing");
    this.model = new Model(this);
    this.view = new View(this);
    this.controller = new Controller(this);
    this.model.initialize();
    this.view.initialize();
    this.controller.initialize();
    this.isRunning = false;
    this.run();
    this.finalize();
  }

  run() {
    //controller.run();
    this.model.run();
    this.view.run();
  }

  finalize() {
    this.model.finalize();
    this.controller.finalize();
    this.view.finalize();
  }
}
