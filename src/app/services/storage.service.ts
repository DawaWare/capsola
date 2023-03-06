import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  async set(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async get(key: string) {
    return await this.storage.get(key);
  }

  async remove(key: string) {
    await this.storage.remove(key);
  }

  async clear() {
    await this.storage.clear();
  }

  async keys() {
    return await this.storage.keys();
  }

  async length() {
    return await this.storage.length();
  }

  async forEach(
    callback: (value: any, key: string, iterationNumber: Number) => void
  ) {
    await this.storage.forEach(callback);
  }

  async create() {
    await this.storage.create();
  }
}
