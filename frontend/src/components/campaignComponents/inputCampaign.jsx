"use client";
import { InputOptions, Button } from "../../components";
import QuestionFormat from "./questionFormat";

const questionFormatData = [
  {
    headerText: "Pick an answer",
    description: "Ask candidates to choose an answer from your list of options",
    points: "40 Points",
  },
  {
    headerText: "Submit a URL",
    description:
      "Ask candidates to submit a url of a completed task. (It would be manually reviewed)",
    points: "50 Points",
  },
  {
    headerText: "Choose an Image",
    description: "Ask candidates to choose an image from your list of options",
    points: "10 Points",
  },
  {
    headerText: "Open-ended questions",
    description: "Ask candidates to give a detailed answer",
    points: "40 Points",
  },
  {
    headerText: "Pick an answer",
    description: "Ask candidates to choose an answer from your list of options",
    points: "40 Points",
  },
];

const InputCampaign = () => {
  return (
    <>
      <section className="w-full space-y-3">
        <div className="my-3">
          <p className="font-semibold text-[24px]">
            <span className="mr-3 text-">*</span>Choose a question format
          </p>
        </div>

        <div className="border border-primary rounded-lg p-6 flex flex-col items-center gap-5">
          {questionFormatData.map((data, index) => (
            <QuestionFormat key={`question-number-${index}`} {...data} />
          ))}
        </div>

        <section className="w-full pt-6 md:pt-24">
          <div className="my-3">
            <p className="font-semibold text-[24px]">
              <span className="mr-3 text-">*</span>Pick an answer
            </p>
          </div>

          <div className="border border-primary rounded-lg p-6 flex flex-col items-center gap-3">
            <div className="w-full bg-[#FFE5F8] flex flex-col items-center gap-3 border border-primary rounded-lg p-6">
              <input
                type="text"
                className="rounded-lg w-full bg-inherit outline-none p-2 border border-primary placeholder:text-normal placeholder:text-[16px] placeholder:text-[#787887]"
                placeholder="Write your question"
              />

              <InputOptions value={"Option A"} />
              <InputOptions value={"Option B"} />
              <InputOptions value={"Option C"} />
              <InputOptions value={"Option D"} />
            </div>

            <Button
              name="Add Another Section"
              outline
              className="w-full bg-white"
            />
          </div>
        </section>

        <div className="w-full my-8">
          <Button name="Continue" className="w-full" />
        </div>
      </section>
    </>
  );
};

export default InputCampaign;
