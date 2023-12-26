export default function handleCreateAt(createdAt: string) {
  //   const date = new Date(createdAt);
  //   return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;

  // convert "2023-12-25T16:42:37.221164+00:00" to "xx days ago"

  const date = new Date(createdAt);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);
  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else if (seconds > 0) {
    return `${seconds} seconds ago`;
  } else {
    return "just now";
  }
}
