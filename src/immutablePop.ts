/**
 * Removes last item from copy of array and returns new array
 * @param array Array to pop
 */
export function immutablePop<T>(array: T[]): T[] {
    return array.slice(0, -1);
}