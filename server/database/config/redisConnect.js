const redis=require('redis')
const redisClient=redis.createClient()
const {promisify}=require('util')
const getAsync=promisify(redisClient.get).bind(redisClient)
const setexAsync=promisify(redisClient.setex).bind(redisClient)
const ttlAsync=promisify(redisClient.ttl).bind(redisClient)
const setAsync=promisify(redisClient.set).bind(redisClient)
const saddAsync=promisify(redisClient.sadd).bind(redisClient)
const smembers=promisify(redisClient.smembers).bind(redisClient)

module.exports={
    getAsync:getAsync,
    setexAsync:setexAsync,
    ttlAsync:ttlAsync,
    setAsync:setAsync,
    setAddAsync:saddAsync,
    smembers:smembers
}