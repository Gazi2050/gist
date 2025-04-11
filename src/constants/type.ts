export type AuthType = "signup" | "signin";

export interface AuthFormData {
    authType: AuthType;
    username?: string;
    email: string;
    password: string;
}

export type AuthFormProps = {
    authType: AuthType;
    onAuthSubmit?: (data: AuthFormData) => void;
};
export interface NavLinkProps {
    label: string;
    href: string;
}

export interface EditorProps {
    language: string;
    code: string;
}
