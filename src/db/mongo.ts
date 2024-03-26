import { MongoClient } from 'mongodb'
import { MONGO_URL } from '$env/static/private'
console.log('url >>> ' + MONGO_URL)
export const client = new MongoClient(
  MONGO_URL
)
export const start_mongo =
  (): Promise<MongoClient> => {
    console.log('Starting mongo...')
    return client.connect()
  }

export default client.db('mydb')
