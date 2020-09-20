class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.img = loadImage("square.png");
  }
  display() {
    // console.log(this.body.speed);

    if (this.body.speed < 14) {
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.img, pos.x, pos.y, this.width, this.height);
    }
    else {
      var pos = this.body.position;
      World.remove(world, this.body);
      push();
      this.visibilty -= 0.0000001;
      tint(255, this.visibilty);
      imageMode(CENTER);
      image(this.img, pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
};
