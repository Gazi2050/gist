// ─── Auth Types ─────────────────────────────────────────────

export type AuthType = "signup" | "signin";

export interface AuthFormData {
    authType?: AuthType;
    username?: string;
    email: string;
    password: string;
}

export interface AuthFormProps {
    authType: AuthType;
    onAuthSubmit?: (data: AuthFormData) => void;
    loading?: boolean;
}

export interface AuthState {
    username: string | null;
    email: string | null;
    isAuthenticated: boolean;
    signup: (username: string, email: string, password: string) => Promise<void>;
    signin: (email: string, password: string) => Promise<void>;
    signout: () => void;
}

// ─── UI Component Props ─────────────────────────────────────

export interface NavLinkProps {
    label: string;
    href: string;
}

export interface EditorProps {
    language: string;
    code: string;
}
