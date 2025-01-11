import { useState } from "react";
import { CustomInput } from "../../../generalComponents/CustomInput";
import { CustomTextArea } from "../../../generalComponents/CustomTextArea";
import { CustomCheckbox } from "../../../generalComponents/CustomCheckbox";
import { Button } from "../../../generalComponents/Button";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <form className="w-full flex flex-col gap-6 items-start">
      <CustomInput placeholder="Name" value={name} setValue={setName} />
      <CustomInput
        placeholder="Email Address"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        placeholder="Company Name"
        value={companyName}
        setValue={setCompanyName}
      />
      <CustomInput placeholder="Title" value={title} setValue={setTitle} />
      <CustomTextArea value={message} setValue={setMessage} />

      <div className="flex items-center gap-[26px]">
        <CustomCheckbox checked={checked} handleChange={handleCheckboxChange} />
        <p
          className="text-[15px] leading-[25px] tracking-[-0.115px] text-secondary-san-juan-blue cursor-pointer"
          onClick={handleCheckboxChange}
        >
          Stay up-to-date with company announcements and updates to our API
        </p>
      </div>

      <Button type="submit" label="Submit" variant="secondaryDark" />
    </form>
  );
};
