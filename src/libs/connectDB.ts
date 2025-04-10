import { MongoClient, ServerApiVersion, Db } from "mongodb";

let db: Db | null = null;
export const connectDB = async (): Promise<Db | null> => {
    if (db) {
        return db;
    } else {
        try {
            const uri = `${process.env.NEXT_PUBLIC_DB_URL}`;
            const client = new MongoClient(uri, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            });
            await client.connect();
            db = client.db('gist');
            return db;
        } catch (error) {
            console.dir(error);
            return null
        }
    }
};
