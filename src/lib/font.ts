import { Cormorant, DM_Sans } from "next/font/google";

export const cormorant = Cormorant({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["600"]
});

export const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"]
});