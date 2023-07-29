import React, { useState } from "react";

type UserType = {
  sessionId: number;
  name: string;
};

const StateExample = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserType | null>(null);
  // OR
  // const [user, setUser] = useState<UserType>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };
  return (
    <div>
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
          <input
            className="mr-2 rounded-xl border border-gray-400 p-2"
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
          <button
            className="rounded-xl bg-purple-500 p-2"
            onClick={handleClick}
          >
            Login
          </button>
        </form>
      )}
      {/* BE AWARE */}
      {user?.name}
    </div>
  );
};

export default StateExample;
