const {getEpochDateTime}=require('../server/middlewares/EpochDateTime/getEpochDateTime')

describe('test current Epoch',()=>{
    
    it('type of current epoch is number',()=>{
        const curEpoch=getEpochDateTime(Date.now())
        expect(typeof(curEpoch)).toBe('number')
    })

    it('current epoch returned is not NaN',()=>{
        const curEpoch=getEpochDateTime()
        expect(curEpoch).not.toBe(NaN)
    })
})