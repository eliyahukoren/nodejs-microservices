/*
Important Note about Node v15 and Unhandled Promise Rejections
In the upcoming lecture, we will be adding POST requests to our Event bus. If you are using the newest version of Node (v15+) instead of the LTS (v14) version, there are going to be some breaking changes. Most notably that Unhandled Promise Rejections are now treated as errors instead of warnings and will cause the servers to crash.

You can read up about it here:

https://nodejs.medium.com/node-js-v15-0-0-is-here-deb00750f278

At the bare minimum, you'll need to add a catch block to every request of the event-bus/index.js:

  axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
  });
  axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: 'OK' });
*/

import { createEventServer } from "./server";

const PORT = 4005;

createEventServer().listen(PORT, () => {
  console.log(`1️⃣ [server]: Events Bus is running at http://localhost:${PORT}`);
});
