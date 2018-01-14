export function tryCacheGet<T>(cache: T, action: () => T) {
    if (cache == null)
        cache = action();
    return cache;
}