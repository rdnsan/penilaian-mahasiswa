/**
 * Concatenates multiple strings className into a single string separated by spaces.
 */
export default function classnames(...args: string[]) {
  return args.join(' ');
}
