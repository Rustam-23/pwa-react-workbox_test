import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { registerServiceWorker } from "./serviceWorkerRegistration";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

registerServiceWorker();
