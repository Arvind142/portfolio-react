export interface SkillType {
    softSkills: string[],
    hardSkills: {
        programmingLanguages: string[];
        "Development Framework": string[];
        "Testing Framework": string[];
        Automation: {
            Browser: string[];
            Windows: string[];
            API: string[];
        };
        BDD: string[];
        "VCS/SCM": string[];
        CICD: string[];
        "software project management": string[];
        Containerization: string[];
    }
}