import axios from 'axios';

const cronTasks = {
  '*/10 * * * * *': {
    task: async () => {
      console.log(`Current Date & Time: ${new Date().toISOString()}`);

      try {
        await axios.get('https://my-store-strapi.onrender.com/_health');
        console.log('Pinged server to keep it alive.');
      } catch (error) {
        console.error('Ping failed:', error.message);
      }
    },
    options: {
      tz: 'UTC', // Optional: Set timezone
    },
  },
};

export default cronTasks;
