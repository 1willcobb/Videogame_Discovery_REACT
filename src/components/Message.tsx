import { useEffect, useState } from "react";

const Message = () => {
  const initialState = "click me!";
  const [buttonTxt, setButtonTxt] = useState("click me!");

  useEffect(() => {
    if (buttonTxt !== initialState) {
      setTimeout(() => setButtonTxt(initialState), 1000);
    }
  }, [buttonTxt]);

  return (
    <div>
      <button type="button" onClick={() => setButtonTxt("thanks!")}>
        {buttonTxt}
      </button>
    </div>
  );
};

export default Message;
