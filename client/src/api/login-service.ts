import { ICreateUserPayload, ILoginPayload } from "@/store/user/user.types";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export class LoginService {
  static async login(payload: ILoginPayload) {
    const { data } = await axios.post(`${baseUrl}/login`, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  }

  static async signup(payload: ICreateUserPayload) {
    const { data } = await axios.post(`${baseUrl}/signup`, payload, {
      headers: { "Content-Type": "application/json" },
    });
    return data;
  }
}
