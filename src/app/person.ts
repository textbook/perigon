export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Person {
    gender: string;
    name: Name;
    picture: Picture;
}
