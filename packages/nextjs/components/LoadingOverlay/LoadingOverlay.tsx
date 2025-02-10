import React, { useState, useEffect } from "react";
import { generateRandomLoadingLines } from "./LoadingOverlay.utils";
import { classes } from "./LoadingOverlay.styles";

const linesToRender = generateRandomLoadingLines();

const LoadingOverlay = () => {
  const [textIndex, setTextIndex] = useState(0);

  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);

  const [isReady1, setIsReady1] = useState(false);
  const [isReady2, setIsReady2] = useState(false);
  const [isReady3, setIsReady3] = useState(false);

  useEffect(() => {
    if (textIndex < lines.length) {
      const timer = setTimeout(() => setTextIndex(textIndex + 1), 150);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textIndex]);

  const generateProgressBar = (percentage: number) => {
    const totalBlocks = 10;
    const filledBlocks = Math.floor((percentage / 100) * totalBlocks);
    return "█".repeat(filledBlocks) + "░".repeat(totalBlocks - filledBlocks);
  };

  const handleAdvanceProgress = (
    interval: NodeJS.Timeout,
    setProgress: React.Dispatch<React.SetStateAction<number>>,
    setIsReady: React.Dispatch<React.SetStateAction<boolean>>,
    progress: number,
  ) => {
    setProgress((prev) => {
      const newValue = prev + progress;
      if (newValue >= 100) {
        clearInterval(interval);
        setIsReady(true);
        return 100;
      }
      return newValue;
    });
  };

  useEffect(() => {
    if (progress1 < 100) {
      const randomProgress = Math.floor(Math.random() * 10) + 1;
      const timer1 = setInterval(
        () =>
          handleAdvanceProgress(
            timer1,
            setProgress1,
            setIsReady1,
            randomProgress,
          ),
        200,
      );
      return () => clearInterval(timer1);
    }
  }, [progress1]);

  useEffect(() => {
    if (progress2 < 100) {
      const randomProgress = Math.floor(Math.random() * 10) + 1;
      const timer2 = setInterval(
        () =>
          handleAdvanceProgress(
            timer2,
            setProgress2,
            setIsReady2,
            randomProgress,
          ),
        200,
      );
      return () => clearInterval(timer2);
    }
  }, [progress2]);

  useEffect(() => {
    if (progress3 < 100) {
      const randomProgress = Math.floor(Math.random() * 10) + 1;
      const timer3 = setInterval(
        () =>
          handleAdvanceProgress(
            timer3,
            setProgress3,
            setIsReady3,
            randomProgress,
          ),
        200,
      );
      return () => clearInterval(timer3);
    }
  }, [progress3]);

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
