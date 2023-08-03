import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: '',
  //   });

  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();
  //     console.log(person)

  // if (nameRef.current !== null) {
  //   person.name = nameRef.current.value;
  // }
  // if (ageRef.current !== null) {
  //   person.age = parseInt(ageRef.current.value);
  // }
  // console.log(person);
  //   };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The Name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name must be at least 3 chars</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input {...register("age")} type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;