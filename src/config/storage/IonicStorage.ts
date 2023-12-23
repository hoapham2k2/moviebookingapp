import { Storage } from "@ionic/storage";

const store = new Storage();

store.create().then(() => {
  console.log("Storage is ready!");
});


export const StorageGetItem = async (key: string): Promise<any> => {
  const value = await store.get(key);
  console.log(
    "StorageGetItem with key: ",
    key,
    " and value: ",
    JSON.stringify(value)
  );
  return value;
};

export const StorageSetItem = async (key: string, value: any): Promise<any> => {
  await store.set(key, value);
};


export default store;
