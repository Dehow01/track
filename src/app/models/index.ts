export interface INode {
  name: string;
  date: string;
  type: string;
  geolocation: object;
  // extraordinaryEvents: boolean;
}
export interface IStatics {
  from: object;
  to: object;
  date: string;
  type: string;
  events: string;
  extraordinaryEvents: string;
  title: string;
}
