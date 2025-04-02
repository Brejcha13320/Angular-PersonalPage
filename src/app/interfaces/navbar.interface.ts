export interface NavbarOption {
  name: string;
  fragment: string;
}

export interface SubMenuNavbar {
  name: string;
  items: SubMenuNavbarOption[];
}

export interface SubMenuNavbarOption {
  name: string;
  fragment: string;
}
