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
    authLoaded: boolean;
    signup: (username: string, email: string, password: string) => Promise<void>;
    signin: (email: string, password: string) => Promise<void>;
    signout: () => void;
    setAuthLoaded: () => void;
}


// ─── UI Component Types ─────────────────────────────────────

export interface NavLinkProps {
    label: string;
    href: string;
}

export interface EditorProps {
    language: string;
    code: string;
}

export interface LanguageInputProps {
    value: string;
    onChange: (lang: string) => void;
    suggestions: string[];
}


export type Project = {
    _id: string;
    title: string;
    description: string;
    username?: string;
    language: string;
    code?: string;
    time: string;
    stars: string[];
    views: string[];
    updatedAt?: Date;
};
