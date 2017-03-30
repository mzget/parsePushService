# parsePushService

### Installation

    npm install parse-push-service --save

### Example...
```javascript
const pushConfig = new PushConfig();
pushConfig.pushServer = Config.pushServer;
pushConfig.pushPort = Config.pushPort;
pushConfig.pushPath = Config.pushPath;
pushConfig.ParseApplicationId = Config.ParseApplicationId;
pushConfig.ParseMasterKey = Config.ParseMasterKey;
pushConfig.ParseRESTAPIKey = Config.ParseRESTAPIKey;

const pushService = new PushServiceBuilder(pushConfig);

// Push!
pushService.sendPushToTargetDevices(targetDevices, alertMessage);
```
