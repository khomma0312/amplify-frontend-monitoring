import { AWSCloudWatchProvider, Amplify, Logger } from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure({
  Logging: {
    logGroupName: "frontendmonitoring",
    logStreamName: "test",
  },
  ...awsExports,
});

const LOG_LEVEL = "INFO";

const logger = new Logger("MyLogger", LOG_LEVEL);
Amplify.register(logger);
logger.addPluggable(new AWSCloudWatchProvider());

export default logger;
