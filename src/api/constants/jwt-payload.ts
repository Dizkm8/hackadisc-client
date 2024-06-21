export interface JWTPayload {
  user_id: number;
  exp: number;
  iat: number;
  role: number;
  jti: string;
  token_type: string;
  name: string;
}
