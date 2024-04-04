"use client";
import { useEffect, useState } from "react";
import { InputOptions, Button } from "../../components";
import QuestionFormat from "./questionFormat";
import PickAnswer from "./pickAnswer";
import SubmitUrl from "./submitUrl";
import { useSelector, useDispatch } from "react-redux";
import { setInput, setTotalCampaignPoint } from "@/store/slices/statesSlice";
import { useRouter } from "next/navigation";
import { root } from "@/store/store";
import PerformAction from "./performAction";

const questionFormatData = [
  {
    headerText: "Pick an answer",
    description: "Ask community to choose an answer from your list of options",
    points: "40 Points",
    value: "pickAnswer",
  },
  {
    headerText: "Submit a URL",
    description:
      "Ask community to submit a url of a completed task. (It would be manually reviewed)",
    points: "50 Points",
    value: "submitUrl",
  },
  // {
  //   headerText: "Choose an Image",
  //   description: "Ask community to choose an image from your list of options",
  //   points: "10 Points",
  //   value: "chooseImg",
  // },
  // {
  //   headerText: "Open-ended questions",
  //   description: "Ask community to give a detailed answer about something",
  //   points: "40 Points",
  //   value: "openEndedQuestion",
  // },
  {
    headerText: "Perform an action",
    description:
      "Ask participants to perform a specific action e.g follow your community",
    points: "40 Points",
    value: 'performAction'
  },
];

const InputCampaign = () => {
  const [showQuestions, setShowQuestions] = useState({
    pickAnswer: {
      show: false,
      value: [],
      point: 0,
    },
    submitUrl: {
      show: false,
      value: [],
      point: 0,
    },
    performAction: {
      show: false,
      value: [],
      point: 0,
    },
    chooseImg: {
      show: false,
      value: [],
      points: 0,
    },
    // openEndedQuestion: {
    //   show: false,
    //   value: [],
    //   points: 0,
    // },
  });

  const dispatch = useDispatch();
  const router = useRouter();

  console.log(showQuestions);

  const quest = useSelector((state) => state.generalStates.input);
  console.log(quest);

  // useEffect(() => {
  //   dispatch(setTotalCampaignPoint(pickAnswerTotal + submitURLTotal));
  // }, [pickAnswerTotal, submitURLTotal]);

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
              showQuestions={showQuestions}
            />
          ))}
        </div>

        {showQuestions.pickAnswer.show && (
          <PickAnswer
            showQuestions={showQuestions}
            setShowQuestions={setShowQuestions}
            value="pickAnswer"
          />
        )}
        {showQuestions.submitUrl.show && (
          <SubmitUrl
            showQuestions={showQuestions}
            setShowQuestions={setShowQuestions}
            value="submitUrl"
          />
        )}
        {showQuestions.performAction.show && (
          <PerformAction
            showQuestions={showQuestions}
            setShowQuestions={setShowQuestions}
            value="performAction"
          />
        )}

        <div className="w-full my-8">
          <Button
            name="Continue"
            // href="/campaign?tab=criterion"
            className="w-full text-[20px] mt-12"
            onClick={() => {
              dispatch(setInput(showQuestions));
              router.push("/campaign?tab=criterion");
              console.log(showQuestions);
            }}
          />
        </div>
      </section>
    </>
  );
};

export default InputCampaign;
