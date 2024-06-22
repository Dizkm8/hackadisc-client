export interface RelatedActivityUsersDto {
  rut: string;
  user_name: string;
  email: string;
  area_name: string;
}

export interface FilesActivityDto {
  name: string;
  url: string;
}

export interface GetActivityDetailDto {
  name: string;
  description: string;
  date: Date;
  category: number;
  competence: number;
  is_completed: boolean;
  participants: RelatedActivityUsersDto[];
  files: FilesActivityDto[];
}
