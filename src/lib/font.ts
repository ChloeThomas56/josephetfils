import { DM_Sans, Cormorant, Cormorant_Infant } from "next/font/google";

export const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"]
});

export const cormorant = Cormorant({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["600", "700"]
});

export const cormorant_infant = Cormorant_Infant({
    variable: "--font-cormorant-infant",
    subsets: ["latin"],
    weight: ["600"]
});