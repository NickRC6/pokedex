

export type CacheEntry<T> = {
    createdAt: number;
    value: T;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval
        this.#startReapLoop()
    }

    add<T>(key: string, val: T): void {
        const entry: CacheEntry<T> = { value: val, createdAt: Date.now() };
        this.#cache.set(key, entry);
    }

    get<T>(key: string): T | undefined {
        const entry = this.#cache.get(key);
        return entry?.value
    }

    #reap(): void {
        const cutoff = Date.now() - this.#interval;
        for (const [key, entry] of this.#cache) {
            if (entry.createdAt < cutoff) {
                this.#cache.delete(key);
            }
        }
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId)
        this.#reapIntervalId = undefined
    }
}
