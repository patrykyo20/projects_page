import https from 'https';
import { CronJob } from 'cron';

const backendUrl = 'https://projects-page-l4av.onrender.com/';

const job = new CronJob('*/14 * * * *', function () {
  console.log('Pinging server to keep it awake');

  https
    .get(backendUrl, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('Server is awake and responding correctly');
        } else {
          console.error(`Server responded with status code: ${res.statusCode}`);
        }
      });
    })
    .on('error', (error) => {
      console.error(`Request failed: ${error.message}`);
    });
});

export default job;
