import { Storage } from "@ionic/storage";

const store = new Storage();

store.create().then(() => {
  console.log("Storage is ready!");
});

export default store;
