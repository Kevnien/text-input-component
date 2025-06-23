"use client";

import { useState } from "react";
import TextInput from "./text-input";
import { FiMail } from "react-icons/fi";
import { FaRegCircleQuestion } from "react-icons/fa6";

export default function Home() {
  const [values, setValues] = useState(["", "", "", ""]);
  function handleChange(newValue: string, index: number) {
    const updatedValues = [...values];
    updatedValues[index] = newValue;
    setValues(updatedValues);
    console.log("Input value changed:", newValue);
  }
  const label1 = "Email";
  const hint1 = "This is a hint text.";
  const placeholder1 = "name@email.com";
  const error4 = "This is an error message.";

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <TextInput
        label={label1}
        placeholder={placeholder1}
        hint={hint1}
        value={values[0]}
        onChange={(value) => handleChange(value, 0)}
        iconRight={<FaRegCircleQuestion className="w-4 h-4" />}
      />
      <TextInput
        label={label1}
        placeholder={placeholder1}
        hint={hint1}
        value={values[1]}
        onChange={(value) => handleChange(value, 1)}
        iconLeft={<FiMail className="w-4 h-4" />}
        iconRight={<FaRegCircleQuestion className="w-4 h-4" />}
      />
      <TextInput
        label={label1}
        placeholder={placeholder1}
        hint={hint1}
        value={values[2]}
        onChange={(value) => handleChange(value, 2)}
        disabled
        iconRight={<FaRegCircleQuestion className="w-4 h-4" />}
      />
      <TextInput
        label={label1}
        placeholder={placeholder1}
        hint={hint1}
        value={values[3]}
        onChange={(value) => handleChange(value, 3)}
        iconRight={<FaRegCircleQuestion color="red" className="w-4 h-4" />}
        error={error4}
      />
      <footer>
        <div className="credits">
          A challenge by
          <a
            href="https://www.greatfrontend.com/projects?ref=challenges"
            target="_blank"
          >
            GreatFrontEnd Projects
          </a>
          . Built by
          <a href="https://www.greatfrontend.com/u/kevnien" target="_blank">
            Kevin Nguyen
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
