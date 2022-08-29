import { Student } from "../../domain/entities/student";

export interface StudentsRepository {
  items: Student[];
  findById(id: string): Promise<Student | null>;
}
