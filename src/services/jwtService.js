import jwt from "jsonwebtoken"
import config from "../config/config.js";

class JwtService {
  constructor() {
    this.jwt = jwt; 
    this.config = config;
  }

  generateToken(payload) {
    return this.jwt.sign(payload, this.config.getJwtKey(), {
      expiresIn: "1h",
    });
  }

  verifyToken(token) {
    return this.jwt.verify(token, this.config.getJwtKey());
  }

    decodeToken(token) {
        return this.jwt.decode(token);
    }

    getTokenFromHeader(req) {
        return req.headers.authorization.split(' ')[1];
    }

    getTokenFromCookie(req) {
        return req.cookies.jwt;
    }

    clearTokenCookie(res) {
        res.clearCookie('jwt');
    }

    setTokenHeader(res, token) {
        res.set('Authorization', `Bearer ${token}`);
    }

    clearTokenHeader(res) {
        res.removeHeader('Authorization');
    }

}

export default new JwtService();