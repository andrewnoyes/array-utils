/**
 * Returns copy of the array with item pushed on
 * @param array Array to push onto
 * @param item Item to push onto array
 */
export function immutablePush<T>(array: T[], item: T): T[] {
    return [...array, item];
}
