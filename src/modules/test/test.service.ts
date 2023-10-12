import { Test } from "./test.model";

export const postTest = async (name: string, age: string) => {
  const result = await Test.create({
    name,
    age,
  });
  return result;
};

export const getTest = async () => {
  const result = await Test.find({}).exec();
  return result;
};
