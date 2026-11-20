import type { UserType } from "./users/users.types";

export type ApplicationEnvironment = {
    Bindings: {
        JWT_SECRET: string;
    }

    Variables: {
        user: UserType;
    }
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