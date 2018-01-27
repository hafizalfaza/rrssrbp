export const numberToString = (number) => {
  const value = number.toLocaleString(
    undefined, // leave undefined to use the browser's locale,
               // or use a string like 'en-US' to override it.
    { minimumFractionDigits: 0 }
  );

  return value;
}