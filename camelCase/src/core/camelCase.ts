export function toCamelCase(text: string): string {
    const words = text.split(/[ _-]/);
    return words.map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
