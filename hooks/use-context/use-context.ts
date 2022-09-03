import { AnimeContextProps } from "interfaces";
import { createContext } from "react";

 export const AnimeContext = createContext<AnimeContextProps>(null);
 export default AnimeContext