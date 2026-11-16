

export class ApplicationValidator {
    public static validate<
        T extends z.ZodType,
        Target extends keyof ValidationTargets,
    >(target: Target, schema: T) {
        return zValidator(target, schema, this.onValidate.bind(this));
    };
    public static onValidate(result: {
        success: boolean;
        error?: string;
    }): void {
        if(!result.success) {
            throw result.error;
        }
    }
}