export class View {
  constructor(app) {
    this.app = app;
    this.can = document.getElementById("can");
    this.con = can.getContext("2d");
  }
  initialize() {
    console.log("initializing view");

    onresize = this.resize;
    this.resize();
  }

  run() {
    //console.log("running view");
  }

  finalize() {
    console.log("finalizing view");
  }

  draw() {
    this.con.clearRect(0, 0, can.width, can.height);
    for (let actor of this.app.model.actors) {
      actor.draw(this.can, this.con);
    }
  }

  resize() {
    console.log("resizing");
    this.can.width = window.innerWidth;
    this.can.height = window.innerHeight;
    this.draw();
  }
}
