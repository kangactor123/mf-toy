import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";

import "@mf-toy/ui-kit/index.css";

createRoot(document.getElementById("app")!).render(<App />);
