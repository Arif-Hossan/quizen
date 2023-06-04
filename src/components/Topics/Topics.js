import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { topicsLoader } from "../../DataLoader/topicsLoader";
import SingleTopic from "../SingleTopic/SingleTopic";

const Topics = () => {
  const topics = useLoaderData().data;

  return <div className="mt-2 flex ">
    {
        topics.map(topic=> <SingleTopic
                                key={topic.id}
                                topic={topic}
                            ></SingleTopic>)
    }
    </div>;
};

export default Topics;
