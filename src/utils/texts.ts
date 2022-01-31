export function ellipsize(text: string, maxLength: number = 20) {
  return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
}
