export class Actor {
  constructor(posX, posY, dimX, dimY) {
    console.log("building actor");
    this.pos = {
      x: posX,
      y: posY,
    };
    this.dim = {
      x: dimX,
      y: dimY,
    };
  }

  draw(can, con) {
    let posX = this.pos.x * can.width;
    let posY = this.pos.y * can.height;
    let dimX = this.dim.x * can.width;
    let dimY = this.dim.y * can.height;
    console.log("drawing actor");
    //pos and dim in %
    con.translate(posX, posY);
    con.fillStyle = "red";
    con.fillRect(-dimX / 2, -dimY / 2, dimX, dimY);
    con.translate(-posX, -posY);
  }
}
