const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const formatDate = (date: Date) => {
  return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${
    days[date.getDay()]
  }`;
};
