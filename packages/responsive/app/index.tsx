import React from "react";

import ReactDOM from "react-dom";

import { App } from "./src/application/app";
import { MediaProvider } from "../media";

ReactDOM.render(
  <React.StrictMode>
    <MediaProvider>
      <App />
    </MediaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
