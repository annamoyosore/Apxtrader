import { databases, DATABASE_ID, WALLET_COLLECTION } from "./appwrite";
import { ID, Query } from "appwrite";

export const createWallet = async (userId) => {
  return await databases.createDocument(
    DATABASE_ID,
    WALLET_COLLECTION,
    ID.unique(),
    {
      userId,
      balance: 10000,
      createdAt: new Date().toISOString(),
    }
  );
};

export const getWallet = async (userId) => {
  const res = await databases.listDocuments(
    DATABASE_ID,
    WALLET_COLLECTION,
    [Query.equal("userId", userId)]
  );

  return res.documents[0];
};

export const updateBalance = async (docId, balance) => {
  return await databases.updateDocument(
    DATABASE_ID,
    WALLET_COLLECTION,
    docId,
    { balance }
  );
};