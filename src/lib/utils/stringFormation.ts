export const capitalizeFirstLetter = (s: string) => {
  if (!s || s === "") return "";

  return s.charAt(0).toUpperCase() + s.slice(1);
};
