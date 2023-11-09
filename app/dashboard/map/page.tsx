"use client";
import React, { useEffect, useRef } from "react";

export default function MapPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current != null) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      // 在这里进行绘制操作
      // 例如：绘制矩形
      if (context !== null) {
        // Now draw something on the canvas
        context.fillStyle = "red";
        context.fillRect(0, 0, 100, 100);
      }
      // 清除画布
      // context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
}
