import { ObjectId } from "mongodb";
import { ParamValue } from "next/dist/server/request/params";

// ───────────────────────────────────────────────────────────
// ▶ Auth Types
// ───────────────────────────────────────────────────────────

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

// ───────────────────────────────────────────────────────────
// ▶ UI & Component Props
// ───────────────────────────────────────────────────────────

export interface NavLinkProps {
    label: string;
    href: string;
}

export interface InputProps {
    title: string;
    setTitle: (value: string) => void;
    description: string;
    setDescription: (value: string) => void;
}

export interface EditorProps {
    language: string;
    code: string;
    setCode: (value: string) => void;
    readOnly?: boolean;
}

export interface LanguageInputProps {
    value: string;
    onChange: (lang: string) => void;
    suggestions: string[];
}

export interface FormatCodeParams {
    code: string;
    setCode: (code: string) => void;
}

export interface ErrorProps {
    errorMessage: string;
}

export interface GistFormProps {
    formState: FormState;
    action?: 'post' | 'update';
}

export interface UpdateGistProps {
    projects: Project;
    action?: 'true' | 'false';
}

// ───────────────────────────────────────────────────────────
// ▶ Form & State Types
// ───────────────────────────────────────────────────────────

export interface FormState {
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
    language: string;
    setLanguage: (language: string) => void;
    code: string;
    setCode: (code: string) => void;
    handleSubmit: (event: React.FormEvent) => void;
    loading: boolean;
}

export interface GistFormType extends Omit<Project, "username"> {
    username: string | null;
}

// ───────────────────────────────────────────────────────────
// ▶ Project & Gist Types
// ───────────────────────────────────────────────────────────

export type Project = {
    _id?: string;
    title: string;
    description: string;
    username: string;
    language: string;
    code?: string;
    stars: string[];
    views: string[];
    createdAt: string;
    updatedAt?: string;
};

export type UpdateGistType = {
    _id: ParamValue;
    title?: string;
    description?: string;
    language?: string;
    code?: string;
    updatedAt: string;
};

export interface ProjectDB extends Omit<Project, "_id"> {
    _id: ObjectId;
}

// ───────────────────────────────────────────────────────────
// ▶ Utility & other Types
// ───────────────────────────────────────────────────────────

export type LanguageExtensions = {
    [key: string]: string;
};

export type UserType = {
    username: string | null;
};

export type FeedProps = {
    Projects: Project[];
};

export type ActionParams = {
    id: string | undefined;
    username: string;
    action: "view" | "vote";
};
