
import * as console from "console";
import {Error} from "./Error";
import {ErrorMethodConfig} from "./ErrorMethodConfig";

const config: Array<ErrorMethodConfig> = [
    {
        methodName: "badRequest",
        statusCode: 400,
        errorMessage: "Bad Request"
    },
    {
        methodName: "notFound",
        statusCode: 404,
        errorMessage: "Not Found"
    }
];

function createErrorMethods(config: Array<ErrorMethodConfig>): {[key:string]: Function} {
    let errorMethods: {[key:string]: Function} = {};

    for (let configItem in config) {
        let currentConfig: ErrorMethodConfig = config[configItem];

        type errorMethodObj = {
            [key: string]: Function
        }

        let errorMethod: errorMethodObj = {};
        errorMethod[currentConfig.methodName] = (errorMessage: string|null): Error => {
            if (typeof errorMessage === "string") {
                currentConfig.errorMessage = errorMessage;
            }
            return new Error(currentConfig)
        };

        errorMethods = {...errorMethods, ...errorMethod}
    }

    return errorMethods;
}

const errorMethods = createErrorMethods(config);
const { badRequest, notFound } = errorMethods;

let result: Error = badRequest('override the error message');

// result.statusCode = 200;
console.log(result)


let notFoundResult = notFound();
console.log(notFoundResult)

