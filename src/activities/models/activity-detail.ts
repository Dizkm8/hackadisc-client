export interface RelatedActivityDetailUsers {
  rut: string;
  username: string;
  email: string;
  area: string;
}

export interface ActivityDetail {
  name: string;
  description: string;
  date: Date;
  category: string;
  aptitude: string;
  participants: RelatedActivityDetailUsers[];
}
