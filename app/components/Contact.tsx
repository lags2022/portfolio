"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Toaster } from "react-hot-toast";
import { ContactProps } from "../../types";
import { sendEmailValue } from "../services/sendEmail";
import dynamic from "next/dynamic";
import clsx from "clsx";
import ErrorForm from "./ErrorForm";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const GlobeThree = dynamic(() => import("./GlobeThree"), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Deshabilita la renderización del lado del servidor
});

interface StateContactProps {
  values: ContactProps;
}

const INITIAL_VALUES: ContactProps = {
  name: "",
  email: "",
  message: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Too short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [check, setCheck] = useState("");
  const divRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (
    values: StateContactProps["values"],
    { resetForm }: FormikHelpers<StateContactProps["values"]>
  ) => {
    //no olvidar que sendEmailValue es asincrono porque esta usando el fetch que es una peticion a una api, y hacer eso es hacer una peticion asincronica a un servidor. x eso el await.
    setShow2(true);
    await sendEmailValue(values);
    setShow2(false);
    setCheck("✔️");
    setTimeout(() => {
      setCheck("");
    }, 2000);

    resetForm({
      values: INITIAL_VALUES,
    });
  };
  return (
    <div id="contact" className="w-full space-y-6">
      <h2 className="mt-20 text-center font-bold text-3xl">Contact me</h2>
      <div className="m-auto py-6 flex items-center justify-center gap-6 ">
        <GlobeThree />
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={ContactSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="w-[300px] flex flex-col gap-4 [&>div]:flex [&>div]:flex-col focus:[&>div>input]:outline-none [&>div>label]:text-sm sm:[&>div>label]:text-base">
              <div>
                <label htmlFor="name">Name:</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  disabled={isSubmitting}
                  className={clsx(
                    `forminput`,
                    errors.name && "focus:ring-rose-500",
                    isSubmitting && "opacity-50 cursor-default"
                  )}
                />
                <div className="relative flex items-center justify-center">
                  {errors.name && touched.name && show && (
                    <ErrorForm formError={errors.name} />
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  disabled={isSubmitting}
                  className={clsx(
                    `forminput`,
                    errors.email && "focus:ring-rose-500",
                    isSubmitting && "opacity-50 cursor-default"
                  )}
                />
                <div className="relative flex items-center justify-center">
                  {errors.email && touched.email && show && (
                    <ErrorForm formError={errors.email} />
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <Field
                  component="textarea"
                  id="message"
                  name="message"
                  type="text"
                  rows={5}
                  disabled={isSubmitting}
                  className={clsx(
                    `forminput focus:outline-none`,
                    errors.message && "focus:ring-rose-500",
                    isSubmitting && "opacity-50 cursor-default"
                  )}
                />
                <div className="relative flex items-center justify-center">
                  {errors.message && touched.message && show && (
                    <ErrorForm formError={errors.message} />
                  )}
                </div>
              </div>
              <motion.button
                type="submit"
                className={clsx(
                  `relative m-auto p-0 h-10 w-24 rounded-lg font-semibold bg-black text-white flex items-center justify-center gap-1`,
                  isSubmitting && "cursor-not-allowed"
                )}
                disabled={isSubmitting}
                onClick={() => {
                  setShow(true);
                  setTimeout(() => {
                    setShow(false);
                  }, 4000);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                {show2 ? <div className="loading" /> : `${check}` || "Submit"}
              </motion.button>
            </Form>
          )}
        </Formik>
        <Toaster />
      </div>
    </div>
  );
};

export default Contact;
