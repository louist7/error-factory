import {ErrorMethodConfig} from "./ErrorMethodConfig";

export class Error {

    readonly statusCode: number;
    readonly message: string;

    constructor(config: ErrorMethodConfig) {
        this.statusCode = config.statusCode;
        this.message = config.errorMessage;
    }

    getStatusCode(): number {
        return this.statusCode;
    }

    getMessage(): string {
        return this.message;
    }
}