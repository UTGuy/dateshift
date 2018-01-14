export function tryCacheGet<T>(cache: T, getAction: () => T, cacheAction: (value: T) => void) {
    if (cache != undefined)
        return cache;

    const result = getAction();
    cacheAction(result);
    return result;
}