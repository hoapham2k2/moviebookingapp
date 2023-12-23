import { StorageGetItem } from "../config/storage/IonicStorage";
import { CURRENT_USER } from "./SharedValues";

export default async function GetUserID(): Promise<string> {
  return StorageGetItem(CURRENT_USER).then((res) => {
    return res.id;
  });
}
