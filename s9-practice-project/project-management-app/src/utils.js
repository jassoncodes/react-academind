export const formattedDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "long",
  });
};

export function newId() {
  return crypto.randomUUID().replace(/-/g, "");
}
