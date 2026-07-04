import { useEffect, useState } from "react";

import { activityService } from "../../../core/activity/activity.service";
import { mapActivityToTimelineItem } from "../../../core/activity/activity.utils";

function useActivities() {
  const [activities, setActivities] = useState<
    ReturnType<typeof mapActivityToTimelineItem>[]
  >([]);

  async function loadActivities() {
    const savedActivities = await activityService.getAll();

    setActivities(
      savedActivities
        .slice(0, 5)
        .map(mapActivityToTimelineItem)
    );
  }

  useEffect(() => {
    loadActivities();

    const unsubscribe = activityService.subscribe(() => {
      loadActivities();
    });

    return unsubscribe;
  }, []);

  return activities;
}

export default useActivities;