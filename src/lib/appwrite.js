import { Client, Account, Databases, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);

export const databases = new Databases(client);

export { ID, Query };

export const DATABASE_ID =
  import.meta.env.VITE_DATABASE_ID;

export const WALLET_COLLECTION =
  import.meta.env.VITE_WALLET_COLLECTION;

export const TRADE_COLLECTION =
  import.meta.env.VITE_TRADE_COLLECTION;