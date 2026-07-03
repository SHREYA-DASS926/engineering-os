import { useEffect, useState } from "react";

import { activityService } from "../../../core/activity/activity.service";
import { mapActivityToTimelineItem } from "../../../core/activity/activity.utils";

function useActivities() {
  const loadActivities = () =>
    activityService
      .getAll()
      .slice(0, 5)
      .map(mapActivityToTimelineItem);

  const [activities, setActivities] = useState(loadActivities);

  useEffect(() => {
    const unsubscribe = activityService.subscribe(() => {
      setActivities(loadActivities());
    });

    return unsubscribe;
  }, []);

  return activities;
}

export default useActivities;