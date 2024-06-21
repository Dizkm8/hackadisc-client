export interface RelatedActivityDetailUsers {
  rut: string;
  username: string;
  email: string;
  area: string;
}

export interface ActivityDetail {
  id: number;
  name: string;
  description: string;
  date: Date;
  category: number;
  aptitude: number;
  participants: RelatedActivityDetailUsers[];
}
