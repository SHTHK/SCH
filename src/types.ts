export interface Character {
  id: string;
  name: string;
  gender: string;
  age: string;
  race: string;
  className: string;
  group: "엘리트반" | "상급반" | "중급반" | "초급반" | "교사";
  info: string;
  physical: number;
  defense: number;
  magic: number;
  imageUrl?: string;
  secretInfo?: string; // For Hamiel and Miki
}

export interface WorldSetting {
  title: string;
  content: string[];
}

export interface ScheduleItem {
  date: string;
  event: string;
  description: string;
}
