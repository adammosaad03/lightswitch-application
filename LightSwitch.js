import React, { useState } from 'react';
export default function LightSwitch({ switchNumber = 1 }) {
  const [isOn, setIsOn] = useState(false);
  const [badSwitchPressed, setBadSwitchPressed] = useState(false);

  if (badSwitchPressed) {
    throw new Error("Why do we even have this switch?");
  }

  const bgColor = isOn ? "white" : "black";
  const textColor = isOn ? "black" : "white";

  const handleLightSwitchClick = () => {
    setIsOn((isOn) => !isOn);
  };
  const handleBadSwitchClick = () => {
    setBadSwitchPressed(true);
  };

  return (
    <div
      className="lightSwitch"
      style={{ background: bgColor, color: textColor }}
    >
      <button onClick={handleLightSwitchClick}>
        {switchNumber} — {isOn ? "On" : "Off"}
      </button>
      <button onClick={handleBadSwitchClick}>Bad Switch</button>
    </div>
  );
}
