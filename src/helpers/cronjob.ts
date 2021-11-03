import {CronJob} from 'cron';

export default class CronJobFactory {
  job: CronJob;

  constructor(job: () => void) {
    this.job = new CronJob('*/10 * * * *', job);
  }

  start() {
    this.job.start();
  }
}
