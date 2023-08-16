const MAX_ATTEMPT = 5;

const _retryOnError = async <T>(cb: () => Promise<T>, attempt: number = 0) => {
  if (attempt > 0) {
    try {
      console.log(`[LOG] fetch: attempt=${attempt}`);
      return await cb();
    } catch (e) {
      return _retryOnError(cb, attempt - 1);
    }
  }
  throw new Error('[ERROR] http request timeout');
};

export const retryOnError = <T>(cb: () => Promise<T>) => {
  return _retryOnError(cb, MAX_ATTEMPT);
};
