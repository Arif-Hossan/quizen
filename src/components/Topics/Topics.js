import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleTopic from "../SingleTopic/SingleTopic";

const Topics = () => {
  const topics = useLoaderData().data;

  return <div className="mt-2 md:flex ">
    {
        topics.map(topic=> <SingleTopic
                                key={topic.id}
                                topic={topic}
                            ></SingleTopic>)
    }
    </div>;
};

export default Topics;
