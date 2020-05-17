import { format, formatDistance, differenceInYears } from 'date-fns';

const dateFormat = 'MMM yyyy';

export const formatTimePeriod = (dateFrom, dateTo) => {
  if (!dateTo) {
    const distance = formatDistance(dateFrom, new Date());
    return `${format(dateFrom, dateFormat)} - Present, ${distance}`;
  }
  const distance = formatDistance(dateFrom, dateTo);
  return `${format(dateFrom, dateFormat)} - ${format(dateTo, dateFormat)}, ${distance}`;
};

export const yearsOfExperience = differenceInYears(new Date(), new Date(2013, 0, 1));
