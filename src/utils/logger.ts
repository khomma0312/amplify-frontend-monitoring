import { AWSCloudWatchProvider, Amplify, Logger } from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure({
  Logging: {
    logGroupName: "frontendmonitoring",
    logStreamName: "test",
  },
  aws_cognito_region: "ap-northeast-1",
  aws_cognito_identity_pool_id: import.meta.env.VITE_IDENTITY_POOL_ID,
  ...awsExports,
});

const LOG_LEVEL = "INFO";

const logger = new Logger("MyLogger", LOG_LEVEL);
Amplify.register(logger);
logger.addPluggable(new AWSCloudWatchProvider());

export default logger;
