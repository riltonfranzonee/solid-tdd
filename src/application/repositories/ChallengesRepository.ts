import { Challenge } from "../../domain/entities/challenge";

export interface ChallengesRepository {
  items: Challenge[];
  findById(id: string): Promise<Challenge | null>;
}
