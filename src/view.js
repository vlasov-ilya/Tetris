export default class View {
  constructor(elements, width, height, rows, columns) {
    this.elements = elements;
    this.width = width;
    this.height = height;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext('2d');

    this.blockWidth = this.width / columns;
    this.blochHeight = this.height / rows;

    this.elements.appendChild(this.canvas);
  }

  render( { playfield } ) {
    this.clearScreen();
    this.renderPlayfield(playfield);
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  renderPlayfield(playfield) {
    for (let y = 0; y < playfield.length; y++) {
      const line = playfield[y];

      for (let x = 0; x < line.length; x++) {
        const block = line[x];

          if (block) {
            this.renderBlock(x * this.blockWidth, y * this.blochHeight, this.blockWidth, this.blochHeight, 'red')
          }
        
      }
      
    }
  }

  renderBlock(x,y, width, height, color) {
    this.context.fillStyle = "red";
    this.context.strokeStyle = "black";
    this.context.lineWidth = 2;

    this.context.fillRect(x, y ,width, height);
    this.context.strokeRect(x, y, width, height);
  }
}