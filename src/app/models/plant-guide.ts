export interface PlantGuide {
    slug: string;

    title: string;
    popularName: string;

    introduction: string;

    sections: {
        title: string;
        content: string;
    }[];

    highlights: string[];

    problems: {
        problem: string;
        solution: string;
    }[];
}

