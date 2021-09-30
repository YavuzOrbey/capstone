export interface QuestionDoc extends Document {
    questionText: {
      type: string;
      required: boolean;
      trim:boolean
    };
    A: {
      type: string ;
      required: boolean;
      trim:boolean
    };
    B: {
      type: string;
      required: boolean;
      trim:boolean
      };
    C: {
      type: string;
      required: boolean;
      trim:boolean
    };
    D: {
      type: string;
      required: boolean;
      trim:boolean
    };
    correctAnswer: {
      type: string;
      required: boolean;
      trim: boolean;
    }
  }