import { CronJob } from 'cron'
import cronstrue from 'cronstrue'

import task from './task'


// https://crontab.guru/
const CRON_STRING = '0 11 * * *'
console.info(`Cron: "${CRON_STRING}". Readable: ${cronstrue.toString(CRON_STRING)}`)


const job = new CronJob(CRON_STRING, task, null, true)
