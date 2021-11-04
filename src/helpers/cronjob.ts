import {CronJob} from 'cron';

export default class CronJobFactory {
  job: CronJob;

  constructor(job: () => void) {
    this.job = new CronJob('*/15 * * * * *', job);
  }

  start() {
    console.log('Starting cron job... ...');
    this.job.start();
  }
}
