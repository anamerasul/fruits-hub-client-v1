import React from "react";
import useBlogsHooks from "../../Hooks/useBlogsHooks";
import Spinner from "../Shared/Spinner/Spinner";
import QuestionWithAnswes from "./QuestionWithAnswes";

const Blog = () => {
  const [answers] = useBlogsHooks([]);

  // console.log(answers);
  return (
    <div className="bg-yellow-200">
      {answers.length === 0 ? (
        <Spinner></Spinner>
      ) : (
        <section className="px-4 pt-20 pb-24 mx-auto max-w-5xl md:px-2">
          <div className="">
            <div>
              <h1 className="mb-6 text-2xl  text-orange-700 md:text-4xl font-bold">
                Frequently asked question
              </h1>
              {answers.map((data) => (
                <QuestionWithAnswes
                  key={data._id}
                  data={data}
                ></QuestionWithAnswes>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Blog;
