export interface QuestionDoc extends Document {
    questionText: {
      type: string;
      required: boolean;
      trim:boolean
    };
    answerChoiceA: {
      type: string;
      required: boolean;
      trim:boolean
    };
    answerChoiceB: {
        type: string;
        required: boolean;
        trim:boolean
      };
    answerChoiceC: {
    type: string;
    required: boolean;
    trim:boolean
    };
    answerChoiceD: {
    type: string;
    required: boolean;
    trim:boolean
    };
  }