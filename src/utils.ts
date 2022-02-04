export function SortArray(x: string, y: string) {
    return x.localeCompare(y, 'fr', {ignorePunctuation: true});
}