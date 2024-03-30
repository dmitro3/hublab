import React from "react";
import { Button, InputOptions } from "..";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoClose } from "react-icons/io5";

const PickAnswer = ({ showQuestions, setShowQuestions }) => {
  const initialValue = {
    question: "",
    options: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    answer: "",
  };

  const pushToPickAnswer = (newValue) => {
    setShowQuestions((prevState) => ({
      ...prevState,
      pickAnswer: {
        ...prevState.pickAnswer,
        value: [...prevState.pickAnswer.value, newValue],
      },
    }));
  };

  return (
    <section className="w-full pt-6 md:pt-24">
      <div className="my-3">
        <p className="font-semibold text-[24px]">
          <span className="mr-3 text-">*</span>Pick an answer
        </p>
      </div>
      <div className="border border-primary rounded-lg p-6 flex flex-col items-cente gap-3">
        {/* <div> */}
        {showQuestions?.pickAnswer?.value?.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <div className="flex gap-3">
              <span>{index + 1}.</span>
              <p>{item.question}</p>
            </div>
              <ol className="list-[lower-alpha] list-inside flex flex-col sm:flex-row gap-3 flex-wrap">
                <li>{item?.options?.a}</li>
                <li>{item?.options?.b}</li>
                <li>{item?.options?.c}</li>
                <li>{item?.options?.d}</li>
              </ol>
          </div>
        ))}
        {/* </div> */}
        <Formik initialValues={initialValue} onSubmit={() => {}}>
          {({ values, setFieldValue, resetForm }) => (
            <Form>
              <div className="w-full bg-[#FFE5F8] flex flex-col items-center gap-3 border border-primary rounded-lg p-6 mb-5">
                <Field
                  name="question"
                  type="text"
                  className="rounded-lg w-full bg-inherit outline-none p-2 border border-primary placeholder:text-normal placeholder:text-[16px] placeholder:text-[#787887]"
                  placeholder="Write your question"
                />

                {/* <InputOptions value={"Option A"} /> */}

                <div className="w-full h-full relative">
                  <Field
                    name="options.a"
                    // name="a"
                    type="text"
                    className="rounded-lg w-full outline-none bg-inherit p-2 border border-primary placeholder:text-normal placeholder:text-[16px] placeholder:text-[#787887]"
                    placeholder="Option A"
                    onChange={(e) => {
                      setFieldValue("options.a", e.target.value);
                    }}
                  />
                  <span className="absolute top-3 right-[3%] cursor-pointer">
                    <IoClose />
                  </span>
                </div>
                <div className="w-full h-full relative">
                  <Field
                    name="options.b"
                    // name="b"
                    type="text"
                    className="rounded-lg w-full outline-none bg-inherit p-2 border border-primary placeholder:text-normal placeholder:text-[16px] placeholder:text-[#787887]"
                    placeholder="Option B"
                    onChange={(e) => {
                      setFieldValue("options.b", e.target.value);
                    }}
                  />
                  <span className="absolute top-3 right-[3%] cursor-pointer">
                    <IoClose />
                  </span>
                </div>
                <div className="w-full h-full relative">
                  <Field
                    name="options.c"
                    // name="c"
                    type="text"
                    className="rounded-lg w-full outline-none bg-inherit p-2 border border-primary placeholder:text-normal placeholder:text-[16px] placeholder:text-[#787887]"
                    placeholder="Option C"
                    onChange={(e) => {
                      setFieldValue("options.c", e.target.value);
                    }}
                  />
                  <span className="absolute top-3 right-[3%] cursor-pointer">
                    <IoClose />
                  </span>
                </div>
                <div className="w-full h-full relative">
                  <Field
                    // name="options.d"
                    name="options.d"
                    type="text"
                    className="rounded-lg w-full outline-none bg-inherit p-2 border border-primary placeholder:text-normal placeholder:text-[16px] placeholder:text-[#787887]"
                    placeholder="Option D"
                    onChange={(e) => {
                      setFieldValue("options.d", e.target.value);
                    }}
                  />
                  <span className="absolute top-3 right-[3%] cursor-pointer">
                    <IoClose />
                  </span>
                </div>
                <div className="w-full h-full relative flex items-center gap-4">
                  <p>Correct Option:</p>
                  <Field
                    // name="options.d"
                    name="answer"
                    type="text"
                    className="rounded-lg w-[40%] outline-none bg-inherit p-2 border border-primary placeholder:text-normal placeholder:text-[16px] placeholder:text-[#787887]"
                    placeholder="answer"
                  />
                </div>
              </div>
              <Button
                name="Add Another Section"
                outline
                onClick={() => {
                  console.log(values);
                  pushToPickAnswer(values);
                  resetForm()
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

export default PickAnswer;
