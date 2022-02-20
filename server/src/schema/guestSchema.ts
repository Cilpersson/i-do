import mongoose from "mongoose";

export interface IGuest {
  name: string;
  email: string;
  password: string;
  attending: boolean;
}

const guestSchema = new mongoose.Schema<IGuest>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  attending: {
    type: Boolean,
  },
});

export default mongoose.model<IGuest>("Guest", guestSchema);
