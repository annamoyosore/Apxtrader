import { Client, Account, Databases, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("YOUR_PROJECT_ID");

export const account = new Account(client);
export const databases = new Databases(client);

export { ID, Query };

export const DATABASE_ID = "forex";
export const WALLET_COLLECTION = "wallets";
export const TRADE_COLLECTION = "trades";