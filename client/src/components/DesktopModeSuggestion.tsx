import React from "react";

export function DesktopModeSuggestion() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!isMobile || dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#1e293b",
        color: "white",
        padding: "12px 18px",
        borderRadius: "8px",
        fontSize: "14px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        zIndex: 10000,
      }}
    >
      For the best experience, enable <b>Desktop Mode</b> in your mobile browser.
      <button
        onClick={() => setDismissed(true)}
        style={{
          marginLeft: "12px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "4px 8px",
          cursor: "pointer",
        }}
      >
        Got it
      </button>
    </div>
  );
}
