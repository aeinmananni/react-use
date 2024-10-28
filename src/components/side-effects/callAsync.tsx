import { useAsync } from "react-use";
import { useState } from "react";

const CallAsync = () => {
  const [url, setUrl] = useState("");
  const state = useAsync(async () => {
    if (url.length > 0) {
      const response = await fetch(url);
      const result = response.text();
      return result;
    } else {
      return null;
    }
  }, [url]);

  const user_info = state.value ? JSON.parse(state.value) : null;
  return (
    <div>
      <button onClick={() => setUrl("https://reqres.in/api/users/2")}>
        Fetch Data
      </button>
      {state.loading ? (
        <p>Loading</p>
      ) : (
        <p>{JSON.stringify(user_info, null, 2)}</p>
      )}
    </div>
  );
};

export default CallAsync;
