const redis=require('redis')
const redisClient=redis.createClient()
const {promisify}=require('util')
const getAsync=promisify(redisClient.get).bind(redisClient)
const setexAsync=promisify(redisClient.setex).bind(redisClient)
const ttlAsync=promisify(redisClient.ttl).bind(redisClient)

module.exports={
    getAsync:getAsync,
    setexAsync:setexAsync,
    ttlAsync:ttlAsync
}