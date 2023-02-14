import Redis from 'ioredis';

const redisClient = new Redis({
    host: 'localhost',
    port: 6379
});

redisClient.on('error', (error) => {
    console.log(error);
});

export { redisClient };
