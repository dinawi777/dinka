import z from "zod";

export const UserSchema = z.object({
  id: z.number(),
  title: z.string(),
  email: z.email(),
  password: z.string(),
});

export const UserCreateSchema = UserSchema.omit({ id: true });
export const userAuthSchema = UserSchema.pick ({ email: true, password: true});
export const UserUpdateSchema = z.object({ token: z.string() });

export type UserType = z.infer<typeof UserSchema>;
export type userRegisterSchema = z.infer<typeof userRegisterSchema>;
export type UserAuthType = z.infer<typeof UserAuthSchema>;
export type UserTokenType = z.infer<typeof userTokenSchema>;