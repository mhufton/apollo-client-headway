import React, { useState } from "react";
import "./styles.css";

export default function App({ client }) {
  const [data, setData] = useState({
    url: "",
    slug: ""
  })

  const changeHandler = ({ target }) => {
    setData({
      [target.name]: [target.value]
    })
  }
  console.log(data)

  return (
    <div className="App">
      <div>
        Nav bar here
      </div>
      <div>
        hero stuff here
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="your URL"
            onChange={changeHandler}
          />
          <input 
            type="text"
            placeholder="custom slug"
            onChange={changeHandler}
            minLength="4"
          />
          <button>Shorten URL</button>
        </form>
      </div>
    </div>
  );
}
