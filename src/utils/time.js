import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function getRelativeTime(time) {
  return dayjs(time).fromNow();
}
