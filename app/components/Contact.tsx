"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Toaster } from "react-hot-toast";
import { ContactProps } from "../../types";
import { sendEmailValue } from "../services/sendEmail";
import dynamic from "next/dynamic";

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
    .min(2, "Too short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {
  const handleSubmit = async (
    values: StateContactProps["values"],
    { resetForm }: FormikHelpers<StateContactProps["values"]>
  ) => {
    resetForm({
      values: INITIAL_VALUES,
    });

    //no olvidar que sendEmailValue es asincrono porque esta usando el fetch que es una peticion a una api, y hacer eso es hacer una peticion asincronica a un servidor. x eso el await.
    await sendEmailValue(values);
  };

  return (
    <div id="contact" className="w-full space-y-6">
      <h2 className="mt-20 text-center font-bold text-3xl">Contact me</h2>
      <div className="flex items-center justify-around gap-6 ">
        {/* <GlobeThree /> */}
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={ContactSchema}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col [&>p]:text-red-500 [&>p]:text-xs">
              <label htmlFor="name">Name</label>
              <Field id="name" name="name" />
              {errors.name && touched.name && <p>{errors.name}</p>}
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" />
              {errors.email && touched.email && <p>{errors.email}</p>}
              <label htmlFor="message">Message</label>
              <Field component="textarea" id="message" name="message" />
              {errors.message && touched.message && <p>{errors.message}</p>}
              <button type="submit" className="border-2 bg-black text-white">
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <Toaster />
      </div>
    </div>
  );
};

export default Contact;
