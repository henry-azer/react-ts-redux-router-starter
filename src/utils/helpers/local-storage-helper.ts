export class LocalStorageHelper {
  private prefix: string;

  constructor(prefix: string = 'app_') {
    this.prefix = prefix;
  }

  private generateKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  setItem(key: string, value: any): void {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(this.generateKey(key), serializedValue);
  }

  getItem<T>(key: string): T | null {
    const serializedValue = localStorage.getItem(this.generateKey(key));
    if (serializedValue) {
      return JSON.parse(serializedValue) as T;
    }
    return null;
  }

  updateItem(key: string, updater: (item: any) => any): void {
    const currentValue = this.getItem(key);
    if (currentValue !== null) {
      const updatedValue = updater(currentValue);
      this.setItem(key, updatedValue);
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(this.generateKey(key));
  }

  clear(): void {
    localStorage.clear();
  }
}