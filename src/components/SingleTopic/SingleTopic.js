import React from "react";
import { useNavigate } from "react-router-dom";

const SingleTopic = ({ topic }) => {
  const { id, name, logo } = topic;
  const navigate= useNavigate();
  const handleQuiz = () => {
    navigate(`topics/${id}`);
  }
  return (
    <div onClick={handleQuiz} className="p-2 m-5">
      <img src={logo} className="rounded-2xl" alt="topic_img" />
      <p>{name}</p>
    </div>
  );
};

export default SingleTopic;
