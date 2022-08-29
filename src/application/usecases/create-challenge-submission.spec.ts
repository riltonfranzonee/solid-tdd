import { InMemoryChallengesRepository } from "../../../test/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../test/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { ChallengesRepository } from "../repositories/ChallengesRepository";
import { StudentsRepository } from "../repositories/StudentsRepository";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create challenge submission use case", () => {
  let studentsRepository: StudentsRepository;
  let challengesRepository: ChallengesRepository;

  beforeEach(() => {
    studentsRepository = new InMemoryStudentsRepository();
    challengesRepository = new InMemoryChallengesRepository();
  });

  it("should be able to create a new challenge submission", async () => {
    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );

    const student = Student.create({
      name: "Rilton",
      email: "test",
    });

    const challenge = Challenge.create({
      title: "Challenge 01",
      instructionsUrl: "http://localhost:3000",
    });

    studentsRepository.items.push(student);
    challengesRepository.items.push(challenge);

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
