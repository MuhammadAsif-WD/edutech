import React, { useState } from "react";
import { send } from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, set_message] = useState("");
  const handleNameChange = (e) => {
    set_sender_name(e.target.value);
  };
  const handleEmailChange = (e) => {
    set_sender_email(e.target.value);
  };
  const handleMessageChange = (e) => {
    set_message(e.target.value);
  };
  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_zmaj1df",
      "template_k09abfs",
      { sender_name, sender_email, message },
      "WpMgcyC3aVAAi8KPa"
    )
      .then((response) =>
        toast.success("Send your massage", console.log(response))
      )

      .catch((err) => toast.error("Failed send your mail", err));
  };

  return (
    <div className="xl:pt-36 lg:pt-36 pb-5 pt-6 md:pt-10 lg:grid xl:grid grid-cols-2 gap-10">
      <div className=" w-5/6 mx-auto">
        <img src="https://i.ibb.co/89wL1Ly/7366336.png" alt="" />
      </div>
      <div className="p-5 w-4/5 mx-auto max-w-[780px] pt-20">
        <form onSubmit={sendMail}>
          <div className="grid grid-cols-1">
            <label htmlFor="name" className="pt-4 text-[#b1b1b1]">
              Name
            </label>
            <input
              className="border p-1 bg-inherit text-[#598790] border-[#b1b1b1] outline-none"
              type="text"
              name="sender_name"
              id=""
              value={sender_name}
              onChange={handleNameChange}
              required
            />
            <label className="pt-4 text-[#b1b1b1]" htmlFor="email">
              Email
            </label>
            <input
              className="border p-1 bg-inherit text-[#598790] border-[#b1b1b1] outline-none"
              type="email"
              name="sender_email"
              onChange={handleEmailChange}
              value={sender_email}
              id=""
              required
            />
            <label className="pt-4 text-[#b1b1b1]" htmlFor="massage">
              Massage
            </label>
            <textarea
              className=" text-[#598790] p-1 border-[#b1b1b1] outline-none bg-inherit border"
              name="massage"
              value={message}
              onChange={handleMessageChange}
              id=""
              cols="5"
              rows="4"
              required
            ></textarea>
            <input
              type="submit"
              bg-inherit
              value="Submit Now"
              className="w-full py-2 cursor-pointer border rounded hover:bg-[#598790] hover:text-white ease-in duration-300 xl:button mt-5 button"
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
