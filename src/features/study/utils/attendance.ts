export function calculateAttendance(attended: number, total: number) {
  if (total === 0) {
    return 0;
  }

  return Math.round((attended / total) * 100);
}

export function getAttendanceStatus(attendance: number) {
  if (attendance >= 75) {
    return "Safe";
  }

  if (attendance >= 60) {
    return "Warning";
  }

  return "Critical";
}

export function getStatusStyle(status: string) {
  if (status === "Safe") {
    return "bg-green-100 text-green-700";
  }

  if (status === "Warning") {
    return "bg-yellow-100 text-yellow-700";
  }

  return "bg-red-100 text-red-700";
}