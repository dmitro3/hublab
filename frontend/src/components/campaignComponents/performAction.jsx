import React, { useEffect } from "react";
import { Button, InputOptions } from "..";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoClose } from "react-icons/io5";
import { setChoosePoint } from "@/store/slices/statesSlice";
import { useDispatch } from "react-redux";

const PerformAction = ({ showQuestions, setShowQuestions, value }) => {
  const dispatch = useDispatch();

  const initialValue = {
    question: "",
    url: "",
    points: showQuestions.performAction.point,
  };

  const pushToPerformAction = (newValue) => {
    setShowQuestions((prevState) => ({
      ...prevState,
      performAction: {
        ...prevState.performAction,
        value: [...prevState.performAction.value, newValue],
      },
    }));
  };

  console.log(showQuestions?.performAction?.point);
  console.log((showQuestions?.performAction?.value).length);

  return (
    <section className="w-full pt-6 md:pt-24">
      <div className="my-3">
        <p className="font-semibold text-[24px]">
          <span className="mr-3 text-">*</span>Perform an action
        </p>
      </div>
      <div className="border border-primary rounded-lg p-6 flex flex-col items-cente gap-3">
        {/* <div> */}
        {showQuestions?.performAction?.value?.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <div className="flex gap-3">
              <span>{index + 1}.</span>
              <p>{item.question}</p>
            </div>
          </div>
        ))}
        {/* </div> */}
        <Formik initialValues={initialValue} onSubmit={() => {}}>
          {({ values, setFieldValue, resetForm }) => (
            <Form>
              <div className="w-full bg-[#FFE5F8] flex flex-col items-cente gap-3 border border-primary rounded-lg p-6 mb-5">
                <div className="flex gap-2 items-center">
                  <p className="font-medium">Task:</p>
                  <Field
                    name="question"
                    type="text"
                    className="rounded-lg w-full bg-inherit outline-none p-2 border border-primary placeholder:text-normal placeholder:text-[16px] placeholder:text-[#787887]"
                    placeholder="what should the participants do"
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" w-[80px] font-medium">URL link:</p>
                  <Field
                    name="url"
                    type="text"
                    className="rounded-lg w-full bg-inherit outline-none p-2 border border-primary placeholder:text-normal placeholder:text-[16px] placeholder:text-[#787887]"
                    placeholder="https://"
                  />
                </div>
              </div>
              <Button
                name="Add Another Field"
                outline
                onClick={() => {
                  console.log(values);
                  pushToPerformAction(values);
                  setShowQuestions((prevState) => ({
                    ...prevState,
                    performAction: {
                      ...prevState[value],
                      show: false,
                    },
                  }));
                  dispatch(setChoosePoint(0));
                  resetForm();
                }}
                className="w-full bg-white"
              />
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default PerformAction;
