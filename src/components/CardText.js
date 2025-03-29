import { useState } from "react";

const CardText = ({ data }) => {
  const [moreText, setMoreText] = useState(true);
  const toggleMoreText = () => {
    setMoreText(!moreText);
  };
  return (
    <div className="text-xs break-words">
      {moreText ? data.slice(0, 140) : data}
      {data.length > 150 && (
        <span onClick={toggleMoreText}>{moreText ? "...more" : ""}</span>
      )}
    </div>
  );
};
export default CardText;
