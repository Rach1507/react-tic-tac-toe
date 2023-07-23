import { useState } from "react";

export default function Square({ value }) {
  const [val, setVal] = useState(null);

  const handleClick = () => {
    if (!val) {
      setVal(value);
    }
  };

  return (
    <button className="square" onClick={handleClick}>
      {val}
    </button>
  );
}
