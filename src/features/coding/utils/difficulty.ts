export function getDifficultyVariant(
  difficulty: "Easy" | "Medium" | "Hard"
): "success" | "warning" | "danger" {
  switch (difficulty) {
    case "Easy":
      return "success";

    case "Medium":
      return "warning";

    case "Hard":
      return "danger";

    default:
      return "success";
  }
}