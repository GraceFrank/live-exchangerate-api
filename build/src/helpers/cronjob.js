"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cron_1 = require("cron");
class CronJobFactory {
    constructor(job) {
        this.job = new cron_1.CronJob('*/10 * * * *', job);
    }
    start() {
        this.job.start();
    }
}
exports.default = CronJobFactory;
//# sourceMappingURL=cronjob.js.map