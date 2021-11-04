import { CronJob } from 'cron';
export default class CronJobFactory {
    job: CronJob;
    constructor(job: () => void);
    start(): void;
}
