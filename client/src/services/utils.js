export function extractProject(projectId, user) {
  if (
    user !== null &&
    user !== undefined &&
    typeof user === "object" &&
    projectId !== null &&
    projectId !== undefined
  ) {
    return user.projects.filter((project) => project._id === projectId);
  }
}

export function formatNameToInitials(name) {
  name = name.split(" ");

  const initial = name.map((segment) => segment.substring(0, 1));
  const cleanInitial = initial.toString().replace(/,/g, "").toUpperCase();
  return cleanInitial;
}

export function dateReformat(date) {
  const newDate = new Date(date).toDateString().split(" ");
  return `${newDate[1]} ${newDate[2]}`; // MMM DD
}

export function formatDuration(duration) {
  let formatted = "";

  const days = Math.floor(duration / (60 * 60 * 24)); // seconds x 60 sec/min x 60 min/hr x 24 hr/day
  if (days >= 1) {
    formatted = `${formatted} ${days}d`;
    duration = duration - days * 60 * 60 * 24;
  }

  const hours = Math.floor(duration / (60 * 60)); // seconds x 60 sec/min x 60 min/hr
  if (hours >= 1) {
    formatted = `${formatted} ${hours}h`;
    duration = duration - hours * 60 * 60;
  }

  const minutes = Math.floor(duration / 60); // seconds x 60 sec/min
  if (minutes >= 1) {
    formatted = `${formatted} ${minutes}m`;
    duration = duration - minutes * 60;
  }

  if (duration >= 1) {
    formatted = `${formatted} ${duration}s`;
  }

  return formatted;
}
