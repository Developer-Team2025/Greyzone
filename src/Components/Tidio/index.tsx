import { useEffect } from "react";

const TidioChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/e4mdj99nn3qorjoeaexflmwiwup69gcb.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null; // No UI needed, just loads the script
};

export default TidioChat;
