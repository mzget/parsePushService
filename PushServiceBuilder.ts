import { ParsePushService } from "./ParsePushService";
import { PushConfig } from "./PushConfig";


export class PushServiceBuilder {
    pushConfig: PushConfig;
    pushService: ParsePushService;

    constructor(_config: PushConfig) {
        this.pushConfig = { ..._config };
        this.pushService = new ParsePushService(this.pushConfig);
    }

    sendPushToTargetDevices(registrationIds: string[], alert: string) {
        this.pushService.sendPushToTargetDevices(registrationIds, alert);
    }
}