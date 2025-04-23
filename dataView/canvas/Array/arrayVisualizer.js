// arrayVisualizer.js
class ArrayVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.boxWidth = 60;
    this.boxHeight = 60;
    this.startX = 50;
    this.startY = 50;
    this.initialized = false;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBoxes(arr) {
    if (Array.isArray(arr[0])) {
      // 二维数组
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          const x = this.startX + j * this.boxWidth;
          const y = this.startY + i * this.boxHeight;
          this.ctx.strokeRect(x, y, this.boxWidth, this.boxHeight);
        }
      }
    } else {
      // 一维数组
      for (let i = 0; i < arr.length; i++) {
        const x = this.startX + i * this.boxWidth;
        const y = this.startY;
        this.ctx.strokeRect(x, y, this.boxWidth, this.boxHeight);
      }
    }
  }

  drawAxes(arr) {
    // 绘制X轴
    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
    this.ctx.lineTo(
      this.startX +
        this.boxWidth * (Array.isArray(arr[0]) ? arr[0].length : arr.length),
      this.startY
    );
    this.ctx.stroke();

    // 绘制Y轴
    this.ctx.beginPath();
    this.ctx.moveTo(this.startX, this.startY);
    this.ctx.lineTo(
      this.startX,
      this.startY + this.boxHeight * (Array.isArray(arr[0]) ? arr.length : 1)
    );
    this.ctx.stroke();

    // 绘制X轴刻度
    this.ctx.font = "12px Arial";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "bottom";
    for (
      let i = 0;
      i < (Array.isArray(arr[0]) ? arr[0].length : arr.length);
      i++
    ) {
      this.ctx.fillText(
        i,
        this.startX + i * this.boxWidth + this.boxWidth / 2,
        this.startY - 5
      );
    }

    // 绘制Y轴刻度
    this.ctx.textAlign = "right";
    this.ctx.textBaseline = "middle";
    for (let i = 0; i < (Array.isArray(arr[0]) ? arr.length : 1); i++) {
      this.ctx.fillText(
        i,
        this.startX - 5,
        this.startY + i * this.boxHeight + this.boxHeight / 2
      );
    }
  }

  drawValues(arr, currentUpdate = null) {
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.font = "24px Arial"; // 设置字体大小为24像素
    if (Array.isArray(arr[0])) {
      // 二维数组
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          const x = this.startX + j * this.boxWidth;
          const y = this.startY + i * this.boxHeight;
          this.ctx.clearRect(
            x + 2,
            y + 2,
            this.boxWidth - 4,
            this.boxHeight - 4
          );
          if (
            currentUpdate &&
            currentUpdate[0] === i &&
            currentUpdate[1] === j
          ) {
            this.ctx.fillStyle = "green"; // 设置当前更新的值为绿色
          } else {
            this.ctx.fillStyle = "black"; // 默认颜色
          }
          this.ctx.fillText(
            arr[i][j],
            x + this.boxWidth / 2,
            y + this.boxHeight / 2
          );
        }
      }
    } else {
      // 一维数组
      for (let i = 0; i < arr.length; i++) {
        const x = this.startX + i * this.boxWidth;
        const y = this.startY;
        this.ctx.clearRect(x + 2, y + 2, this.boxWidth - 4, this.boxHeight - 4);
        if (currentUpdate && currentUpdate[0] === i) {
          this.ctx.fillStyle = "green"; // 设置当前更新的值为绿色
        } else {
          this.ctx.fillStyle = "black"; // 默认颜色
        }
        this.ctx.fillText(
          arr[i],
          x + this.boxWidth / 2,
          y + this.boxHeight / 2
        );
      }
    }
  }

  drawArray(arr) {
    if (!this.initialized) {
      // 首次绘制时，绘制整个数组，包括框框和坐标系
      this.clearCanvas();
      this.drawBoxes(arr);
      this.drawAxes(arr);
      this.drawValues(arr);
      this.initialized = true;
    } else {
      // 后续更新时，只更新数组的值
      this.drawValues(arr);
    }
  }
}

// 导出类，方便在外部引用
export { ArrayVisualizer };
