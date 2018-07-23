
export const createDate = (stringFormat?: string) => {
    return stringFormat ? new Date(stringFormat) : new Date();
};