export interface INavigationItem {
  to: string;
  name?: string;
  content: React.ReactNode | React.ReactPortal;
}
