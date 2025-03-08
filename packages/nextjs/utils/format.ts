export const truncateAddress = (
  address: string,
  startLength = 6,
  endLength = 6,
): string => {
  if (!address) return "";

  if (address.length <= startLength + endLength) return address;

  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};

export const formatLocalTime = (date: Date): string => {
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;

  return `${year}-${month}-${day} ${hours}:${minutes}${period}`;
};
