import { useState } from "react";
import AIChat from "./AIChat";
import FloatingChatButton from "./FloatingChatButton";

const AIChatManager = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat((prev) => !prev);
  };

  return (
    <div className="fixed bottom-0 right-0 z-30 flex flex-col items-end pb-5 pr-10 gap-3">
      {showChat && <AIChat />}
      <FloatingChatButton onClick={handleChatToggle} />
    </div>
  );
};

export default AIChatManager;
