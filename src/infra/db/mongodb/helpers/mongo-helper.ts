import { type Collection, MongoClient } from 'mongodb'

let client: null | MongoClient

export const MongoHelper = {
  async connect (uri: string): Promise<void> {
    client = new MongoClient(uri)
    await client.connect()
  },

  async disconnect (): Promise<void> {
    await client.close()
  },

  getCollection (name: string): Collection {
    return client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return { ...collectionWithoutId, id: _id }
  }
}
