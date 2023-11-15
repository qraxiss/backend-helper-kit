type directories = {
    schemaDirectory: string;
    typeOutputDirectory: string;
}[];
export declare function convert(directories: directories): Promise<boolean[]>;
export {};
