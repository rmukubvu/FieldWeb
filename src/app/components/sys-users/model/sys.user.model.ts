
export interface SystemUser {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  enabled: boolean;
  contactNumber: string;
  creationDate: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  authenticationToken: string;
  refreshToken: string;
  expiresAt: number;
  username: string;
  isError: boolean;
}
