export type Role = "professor" | "phd" | "master" | "undergrad";

export interface People {
  name: string;
  role: Role;
  googleScholarPage: string;
  shortBio: string;
  personalWeb: string;
  githubLink: string;
}
