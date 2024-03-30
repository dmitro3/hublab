"use client";
import { useState } from "react";
import { InputOptions, Button } from "../../components";
import QuestionFormat from "./questionFormat";
import PickAnswer from "./pickAnswer";
import SubmitUrl from "./submitUrl";

const questionFormatData = [
  {
    headerText: "Pick an answer",
    description: "Ask candidates to choose an answer from your list of options",
    points: "40 Points",
    value: "pickAnswer",
  },
  {
    headerText: "Submit a URL",
    description:
      "Ask candidates to submit a url of a completed task. (It would be manually reviewed)",
    points: "50 Points",
    value: "submitURL",
  },
  {
    headerText: "Choose an Image",
    description: "Ask candidates to choose an image from your list of options",
    points: "10 Points",
    value: "chooseImg",
  },
  {
    headerText: "Open-ended questions",
    description: "Ask candidates to give a detailed answer",
    points: "40 Points",
    value: "openEndedQuestion",
  },
  // {
  //   headerText: "Pick an answer",
  //   description: "Ask candidates to choose an answer from your list of options",
  //   points: "40 Points",
  // },
];

const InputCampaign = () => {
  const [showQuestions, setShowQuestions] = useState({
    pickAnswer: {
      show: false,
      value: [],
    },
    submitURL: {
      show: false,
      value: [],
    },
    chooseImg: {
      show: false,
      value: [],
    },
    openEndedQuestion: {
      show: false,
      value: [],
    },
  });

  console.log(showQuestions);

  const questions = {
    pickAnswer: [
      {
        question: "",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        answer: "",
      },
    ],
    submitURL: [{}],
    chooseImg: [{}],
    openEndedQuestion: [{}],
  };

  return (
    <>
      <section className="w-full space-y-3 mt-10 text-[#484851]">
        <div className="my-3">
          <p className="font-semibold text-[24px]">
            <span className="mr-3 text-">*</span>Choose a campaign template
          </p>
        </div>

        <div className="border border-primary rounded-lg p-6 flex flex-col items-cente gap-5">
          {questionFormatData.map((data, index) => (
            <QuestionFormat
              key={`question-number-${index}`}
              {...data}
              setShowQuestions={setShowQuestions}
            />
          ))}
        </div>

        {showQuestions.pickAnswer.show && (
          <PickAnswer
            showQuestions={showQuestions}
            setShowQuestions={setShowQuestions}
          />
        )}
        {showQuestions.submitURL.show && (
          <SubmitUrl
            showQuestions={showQuestions}
            setShowQuestions={setShowQuestions}
          />
        )}

        <div className="w-full my-8">
          <Button
            name="Continue"
            // href="/campaign?tab=criterion"
            className="w-full text-[20px] mt-12"
            onClick={()=> console.log(showQuestions)}
          />
        </div>
      </section>
    </>
  );
};

export default InputCampaign;
