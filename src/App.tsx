import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { AwsRum, AwsRumConfig } from "aws-rum-web";

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    identityPoolId: "ap-northeast-1:e10f7e44-85e1-4d5e-b1b6-18b68a4345b3",
    endpoint: "https://dataplane.rum.ap-northeast-1.amazonaws.com",
    telemetries: ["performance", "errors", "http"],
    allowCookies: true,
    enableXRay: false,
  };

  const APPLICATION_ID: string = "ae20ca01-4185-4a04-9840-c2a64cbcd5c7";
  const APPLICATION_VERSION: string = "1.0.0";
  const APPLICATION_REGION: string = "ap-northeast-1";

  const awsRum: AwsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}

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
