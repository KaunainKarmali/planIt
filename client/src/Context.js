import { createContext } from "react";

// Tracks user state hroughout the app
export const UserContext = createContext();

export const BoardContext = createContext();

// Tracks timer state
export const TimerContext = createContext();

// Tracks project state based on the project page the user is in
export const ProjectContext = createContext();
