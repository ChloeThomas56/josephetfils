export type ProjectType = {
    id: number;
    name: string;
    slug: string;
    tag: string;
    description: string;
    home_img: string;
    images: string[];
}

export type TestimonyType = {
    id: number;
    fullname: string;
    review: string;
    date: string;
    link: string;
    rate: number;
}