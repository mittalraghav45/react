import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({...name, firstName: e.target.value })}
      ></input>

      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({...name, lastName: e.target.value })}
      ></input>
      <p>first name {name.firstName}</p>
      <p>last name {name.lastName}</p>
      <p>{JSON.stringify(name)}</p>
    </form>
  );
}

export default HookCounterThree;
