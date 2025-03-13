export interface Project {
  name: string;
  description: string;
  img: string;
  skills: Skill[];
  startDate: string;
  endDate: string;
  githubUrl?: string;
  video?: string;
  liveUrl: string;
}

export type Skill = {
  name: string;
  url: string;
};
