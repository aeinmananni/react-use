import { useTitle } from "react-use";
import { ChangeEvent, useState } from "react";

const PageTitle = () => {
  const [title, setTitle] = useState<string>("🤩");

  useTitle(title);
  return (
    <div>
      <input
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <button onClick={() => setTitle("---")}>Reset</button>
      <p></p>
    </div>
  );
};

export default PageTitle;
