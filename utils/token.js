import jwt from "jsonwebtoken";

export const createToken = (data) =>{
    const key= process.env.JWT_TOKEN_SECRET;
    const expireTime = process.env.TOKEN_EXPIRATION;
    const token = jwt.sign(data, key, {expiresIn: expireTime});
    return token;
}

export const decodeToken = (token) =>{
    const key = process.env.JWT_TOKEN_SECRET;
    const decodedToken = jwt.verify(token, key);
    return decodedToken;
    


}