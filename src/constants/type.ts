export type AuthType = "signup" | "signin";
export interface NavLinkProps {
    label: string;
    href: string;
}

export interface EditorProps {
    language: string;
    code: string;
}
