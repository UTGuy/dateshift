function tryCacheGet<U, T>(target: U, cache: T, getAction: (target: U) => T, cacheAction: (value: T) => void) {
    if (cache != undefined)
        return cache;

    const result = getAction(target);
    cacheAction(result);
    return result;
}

export function cacheProp<U, T>(getAction: (target: U) => T): any {
    return function decorator(target: U, propertyKey: string | symbol) {
        let cache: T;
        const setAction = (value: T) => cache = value;

        return {
            get: () => tryCacheGet(target, cache, getAction, setAction),
            set: setAction,
            enumerable: true,
            configurable: true
        } as TypedPropertyDescriptor<T>;
    };
}