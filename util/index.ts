import { customAlphabet } from "nanoid";
export const nanoId = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 6);

export function generateKey<T>(arr: T[]): (T & {key: string})[] {
  return arr.map(it => (
    {
      key: nanoId(),
      ...it
    }
  ));
}
