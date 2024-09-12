import https from 'https'
import cron from 'cron'

const backendUrl = 'https://projects-page-l4av.onrender.com/'
const job = new cron.CronJob('*/14 * * * *', function () {
  console.log('Restarting server')

  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log(`Server restarted`)
      } else {
        console.error(`failed error`)
      }
    })
    .on('error', (error) => {
      console.error(`failed error ${error.message}`)
    })
})

export default job