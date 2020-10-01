export enum Error {
    MIN_LENGTH_ERROR = "MIN_LENGTH_ERROR",
    MAX_LENGTH_ERROR = "MAX_LENGTH_ERROR"
}

export function validateInputField(min: number, max: number, content: string) {
    if (content.length > max) {
        return {
            type: Error.MAX_LENGTH_ERROR,
            message: `Must be ${max} characters or less`
        };
    }
    else if (content.length < min) {
        return {
            type: Error.MIN_LENGTH_ERROR,
            message: `Todo cannot be less than ${min} characters`
        }
    }
    else {
        return null;
    }
}