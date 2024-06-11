"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Form } from "@components/Form";

const CreatePrompt = () => {
  const [setsubmitting, setSetsubmitting] = useState(false);
  const [Post, setPost] = useState({
    post: "",
    tag: "",
  });

  const createPrompt = async (e) => {};
  return <Form type="Create" post={post} />;
};

export default CreatePrompt;
