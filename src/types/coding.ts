export type CodingProblem = {
  id: number;
  name: string;
  platform: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topic: string;
  solved: boolean;
};