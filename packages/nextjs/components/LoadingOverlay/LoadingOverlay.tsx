import React, { useState, useEffect } from "react";
import { generateRandomLoadingLines } from "./LoadingOverlay.utils";
import { classes } from "./LoadingOverlay.styles";
import { useProgress } from "~~/hooks/useProgress";

const linesToRender = generateRandomLoadingLines();

const LoadingOverlay = () => {
  const [textIndex, setTextIndex] = useState(0);

  const { progress: progress1, isReady: isReady1 } = useProgress();
  const { progress: progress2, isReady: isReady2 } = useProgress();
  const { progress: progress3, isReady: isReady3 } = useProgress();

  useEffect(() => {
    if (textIndex < lines.length) {
      const timer = setTimeout(() => setTextIndex(textIndex + 1), 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  const generateProgressBar = (percentage: number) => {
    const totalBlocks = 10;
    const filledBlocks = Math.floor((percentage / 100) * totalBlocks);
    return "█".repeat(filledBlocks) + "░".repeat(totalBlocks - filledBlocks);
  };

  const lines = [
    linesToRender[0],
    `${linesToRender[1]} ${isReady1 ? "READY" : generateProgressBar(progress1)} ${isReady1 ? "" : progress1 + "%"}`,
    `${linesToRender[2]} ${isReady2 ? "READY" : generateProgressBar(progress2)} ${isReady2 ? "" : progress2 + "%"}`,
    `${linesToRender[3]} ${isReady3 ? "READY" : generateProgressBar(progress3)} ${isReady3 ? "" : progress3 + "%"}`,
  ];

  return (
    <div className={classes.container}>
      <pre className={classes.linesWrapper}>
        {lines.slice(0, textIndex).map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        <span className="blinkCursor"></span>
      </pre>
    </div>
  );
};

export default LoadingOverlay;
