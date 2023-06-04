import React from "react";

const SingleTopic = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div className="p-2 m-5">
      <img src={logo} className="rounded-2xl" alt="topic_img" />
      <p>{name}</p>
    </div>
  );
};

export default SingleTopic;
