interface returnType {
    result?: object;
    error?: {
        detail?: string;
        message: string;
        name: string;
        status?: number;
    };
    message?: string;
    status?: string | number;
}
export declare function returnFormatter(data: any, message?: string, status?: string): returnType;
export {};
