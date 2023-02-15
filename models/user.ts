import mongoose, { SchemaOptions } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordEncrypted: {
    type: String,
    required: true,
  },
  trainingPrograms: {
    programs: [
      {
        trainingProgramIsPublic: { type: Boolean, required: true },
        durationOfTrainingProgramUntilRepeat: { type: Number, required: true },
        trainingProgram: [
          {
            day: { type: Number, required: true },
            exercises: {
              exerciseId: { type: Number, required: true },
              restTimeBetweenSets: { type: Number, required: true },
              lastTimeWeightInExercise: {
                metricSystem: { type: String, required: true },
                weight: { type: Number, required: true },
                noteAboutLastExerciseNuance: { type: String, required: false },
              },
            },
          },
        ],
        exercises: [
          {
            name: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: false,
            },
            amountOfSets: {
              type: Number,
              required: true,
            },
            diapasonOfRepeatings: {
              from: {
                type: Number,
                required: true,
              },
              to: {
                type: Number,
                required: true,
              },
            },
            restBetweenSets: {
              type: Number,
              required: true,
            },
          },
        ],
      },
    ],
  },
} as SchemaOptions);

export default mongoose.model("User", userSchema);
