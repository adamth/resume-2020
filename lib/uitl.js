import { format, formatDistance } from 'date-fns';

const dateFormat = 'MMM yyyy';

export const formatTimePeriod = (dateFrom, dateTo) => {
  if (!dateTo) {
    const distance = formatDistance(dateFrom, new Date());
    return `${format(dateFrom, dateFormat)} - Present, ${distance}`;
  }
  const distance = formatDistance(dateFrom, dateTo);
  return `${format(dateFrom, dateFormat)} - ${format(dateTo, dateFormat)}, ${distance}`;
};
