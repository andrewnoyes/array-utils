/**
 * Reorders an item from its start position to a new position in an array. 
 * Returns the reordered array, does not modify original array.
 * @param array The array to reorder
 * @param startIndex Start index of the item 
 * @param endIndex End (or destination) index for the item
 */
export function reorder<T>(array: T[], startIndex: number, endIndex: number): T[] {
    const result = array.slice();
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
}