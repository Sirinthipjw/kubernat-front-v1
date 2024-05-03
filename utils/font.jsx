import { Kanit, Taviraj } from "next/font/google";

const kanit_init = Kanit({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-kanit",
});
  
const taviraj_init = Taviraj({
    subsets: ["latin"],
    weight: "200",
    variable: "--font-taviraj",
});

export const kanit = kanit_init.variable;
export const taviraj = taviraj_init.variable;


