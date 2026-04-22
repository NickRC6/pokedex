

export type CacheEntry<T> = {
    createdAt: number;
    value: T;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
}

export function add<T>(key: string, val: T) {
    // Create an add<T>() method that adds a new entry to the cache object. It should take a key (a string) and a val (a T generic).
}

export function get<T>(key: string): T | undefined {
    // Create a get<T>() method that gets an entry from the cache object. It should take a key (a string) and returns some object. Return undefined if the entry is missing.
    return undefined
}
