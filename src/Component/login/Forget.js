import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Formik, Field, Form } from "formik";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Forget = () => {
  const [getfield, setfield] = useState(true);
  const [getempid, setempid] = useState("");
  // console.log(getempid);
  const history = useHistory();
  const notify = (message, type = "success") => {
    toast[type](message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <Formik
          initialValues={{
            email: "",
            mno: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
            axios
              .post("https://backend-rust-eta.vercel.app/signup/forgetpass", values)
              .then((res) => {
                console.log(res);
                setempid(res.data.data[0]._id);
                setfield(false);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <div>
            <Form className="forget-form">
              <h3 style={{ color: "#c0869d" }}>Forget Password?</h3>
              <hr style={{ color: "white" }} />
              <Field
                className="forget"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email Address..."
                required="true"
              />
              <Field
                type="tel"
                name="mno"
                id="mno"
                placeholder="Enter your Mobile No... "
                maxlength="10"
                required="true"
                className="forget"
              />

              <button
                className="forget-btn"
                type="submit"
                style={{ display: getfield === true ? "block" : "none" }}
              >
                Submit
              </button>
            </Form>
          </div>
        </Formik>
        <Formik
          initialValues={{
            password: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
            axios
              .put(`https://backend-rust-eta.vercel.app/signup/update/${getempid}`, values)
              .then((res) => {
                console.log(res);
                history.push("/signup");
                // resetForm()
                // notify(res.data.status);
              })
              .catch((error) => {
                console.log(error);
                notify("Something went wrong!", "error");
              });
          }}
        >
          <Form
            className="forget-form"
            style={{ display: getfield === true ? "none" : "block" }}
          >
            <Field
              className="forget"
              type="password"
              name="password"
              id="password"
              placeholder="enter a new password..."
              required="true"
            />

            <button className="forget-btn" type="submit">
              Submit
            </button>
            {/* <button className="user_button" type="submit">
              Submit
            </button> */}
          </Form>
        </Formik>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default Forget;
