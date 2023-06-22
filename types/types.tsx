export interface Wrapper {
  children?: React.ReactNode;
  className?: string;
}

export interface Data {
  id: number;
  name: string;
  url?: string;
  subMenu?: boolean | undefined;
}

export interface Menu {
  showCatMenu?: boolean;
  setMobileMenu: (open: boolean) => void;
  setShowCatMenu: (open: boolean) => void;
}
