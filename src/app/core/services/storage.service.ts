import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private values: Map<string, [number]> = new Map<string, [number]>();

  set(key: string, value: number): void {
    const existingValue = this.get(key);

    if (existingValue) {
      existingValue.push(value);
    } else {
      this.values.set(key, [value]);
    }
  }

  get(key: string): any {
    return this.values.get(key);
  }

  delete(key: string): void {
    this.values.delete(key)
  }

  check(key: string, value: number): boolean {
    const existingValue = this.get(key);
    let isExist: boolean = false;

    if (existingValue) {
      isExist = existingValue.includes(value);
    }

    return isExist;
  }

  removeFromValue(key: string, value: number): void {
    if (this.check(key, value)) {
      const existingValue = this.get(key);
      const newValue = existingValue.filter((item: number) => item !== value);

      if (newValue.length) {
        this.set(key, newValue);
      } else {
        this.delete(key);
      }
    }
  }

}
