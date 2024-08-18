import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { AwsRum, AwsRumConfig } from "aws-rum-web";
import logger from "./utils/logger";

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID,
    endpoint: "https://dataplane.rum.ap-northeast-1.amazonaws.com",
    telemetries: ["performance", "errors", "http"],
    allowCookies: true,
    enableXRay: false,
  };

  const APPLICATION_ID: string = import.meta.env
    .VITE_CLOUDWATCH_RUM_APPLICATION_ID;
  const APPLICATION_VERSION: string = "1.0.0";
  const APPLICATION_REGION: string = import.meta.env.VITE_APP_REGION;

  new AwsRum(APPLICATION_ID, APPLICATION_VERSION, APPLICATION_REGION, config);
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
  logger.error(error);
}

logger.info("App started");

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={() => {
            throw new Error("Test Error");
          }}
        >
          Cause Error
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
