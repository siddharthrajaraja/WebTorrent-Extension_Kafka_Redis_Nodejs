const {MongoClient} = require('mongodb');
const {MONGODB_URL,SAMPLE_COLLECTION,SAMPLE_DB}=require('./testENV.js')
const {v4}=require('uuid')

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
    db = await connection.db(SAMPLE_DB);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection(SAMPLE_COLLECTION);

    const curUID=v4();

    const mockUser = {_id: curUID , name: 'John'};
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: curUID});
    expect(insertedUser).toEqual(mockUser);
  });
});