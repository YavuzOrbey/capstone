export interface UserDoc extends Document {
    email: {
      type: string;
      required: boolean;
      trim:boolean
    };
    password: {
      type: string;
      required: boolean;
      trim:boolean
    };
    isAdmin: {
      type: boolean,
      default:boolean
    }
  }