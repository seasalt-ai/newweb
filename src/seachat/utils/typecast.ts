// Utility functions for type casting translation objects
export function asArray<T>(value: any): T[] {
  return Array.isArray(value) ? value : [];
}

export function asString(value: any): string {
  return typeof value === 'string' ? value : '';
}

export function asNumber(value: any): number {
  return typeof value === 'number' ? value : 0;
}

export function asObject<T>(value: any): T {
  return typeof value === 'object' ? value : {} as T;
}
