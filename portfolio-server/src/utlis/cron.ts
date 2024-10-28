// import https from 'https'
// import { CronJob } from 'cron'
// import 'dotenv/config';

// const backendUrl = process.env.BACKEND_URL || 'localhost';

// const job = new CronJob('*/14 * * * *', function () {
//   https
//     .get(backendUrl, (res) => {
//       let data = ''

//       res.on('data', (chunk) => {
//         data += chunk
//       })

//       res.on('end', () => {
//         if (res.statusCode === 200) {
//         } else {
//           console.error(`Server responded with status code: ${res.statusCode}`)
//         } 
//       })
//     })
//     .on('error', (error) => {
//       console.error(`Request failed: ${error.message}`)
//     })
// })

// export default job
