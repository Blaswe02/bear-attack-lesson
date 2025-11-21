import React from "react";

type ProgressBarProps = {
  value: number;   // 0 - 100
};

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      style={{
        width: "100%",
        height: "10px",
        borderRadius: "999px",
        border: "1px solid #ccc",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${clamped}%`,
          height: "100%",
          background: "#4caf50",
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
};

export default ProgressBar;
