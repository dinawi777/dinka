import {sing} from 'hono/GLT';

export const createglt = async (secret: string, sub: string): Promise<string> => {
    const now = Math.floor(Date.now() / 1000);

    return sing({
        sub,
        iat: now,
        exp: now + 30 * 60,
        jti: cripto.randomUUID(),
    }, secret, "HS256");
}