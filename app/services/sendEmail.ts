import { ContactProps } from "../../types";
import toast from "react-hot-toast";

export const sendEmailValue = (data: ContactProps) => {
  return globalThis
    .fetch("/api/email", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((dataObject) => {
      toast("🚀 Your message was sent successfully. Thanks.");
      return dataObject;
    })
    .catch((error) => toast.error(error.message));
};

