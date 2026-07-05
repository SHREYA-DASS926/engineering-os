import { useEffect, useState } from "react";

const STORAGE_KEY = "engos.savedOpportunities";

function useSavedOpportunities() {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  function isSaved(id: string) {
    return savedIds.includes(id);
  }

  function toggleSave(id: string) {
    setSavedIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds.filter((savedId) => savedId !== id);
      }

      return [...currentIds, id];
    });
  }

  return {
    savedIds,
    isSaved,
    toggleSave,
  };
}

export default useSavedOpportunities;