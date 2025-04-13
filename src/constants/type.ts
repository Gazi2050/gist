// ─── Auth Types ─────────────────────────────────────────────

import { ObjectId } from "mongodb";

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

export type ErrorProps = {
    errorMessage: string;
};

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

export interface GistFormType extends Omit<Project, "username"> {
    username: string | null;
}

export interface ProjectDB extends Omit<Project, "_id"> {
    _id: ObjectId;
}
