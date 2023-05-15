import { Actor } from "./actor.js";

export class Model {
  constructor(app) {
    this.app = app;
    this.actors = [];
  }

  initialize() {
    console.log("initializing model");
    for (let i = 0; i < 5; i++) {
      this.actors.push(new Actor(Math.random(), Math.random(), 0.1, 0.1));
    }
  }

  run() {
    //console.log("running model");
  }

  finalize() {
    console.log("finalizing model");
  }
}
