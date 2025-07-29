import { createContext,useState,useContext,useEffect, use } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = () => {}