export type ApplicationValidator {
    public static validate<
        T extends z.ZodType,
        target extends 
}

export type ApplicationResult<T> = ApplicationSuccessResult<T> | ApplicationFailedResult;

export type ApplicationSuccessResult<T> = {
    success: true;
    data: T;
};

export type ApplicationFailedResult = {
    success: false;
    error: string;
}

type DemoType<FirstGeneric, SecondGeneric> = {
    id: FirstGeneric;
    title: SecondGeneric;
}