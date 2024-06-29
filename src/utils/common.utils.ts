const formatViews = (views: number) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + 'm';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'k';
  }
  return views.toString();
};

const formattedDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

function formatTimeAgo(inputDate: Date) {
  const now = new Date();
  const date = new Date(inputDate);

  const diff = now.getTime() - date.getTime(); // milliseconds
  const diffInSeconds = Math.floor(diff / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInSeconds < 60) {
    return 'mới';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour ago`;
  } else if (diffInDays < 30) {
    return `${diffInDays} day ago`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths} month ago`;
  } else {
    return `${diffInYears} year ago`;
  }
}

export const commonUtils = { formatViews, formattedDate, formatTimeAgo };
