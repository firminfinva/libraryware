"use client";

import Button from "@/ui/button";
import Input from "@/ui/input";
import Logo from "@/ui/logo";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { toastError } from "@/lib/toast";

type Props = {};

export default function Page({}: Props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // const response = await axios.post("/api/signin", data);
      // if (data.remember) {
      //   localStorage.setItem("token", response.data.token);
      // }
      // if (response.status === 200) {
      //   router.push("/user/dashboard");
      // }
    } catch (error: any) {
      toastError(error.message);
    }
  };

  const onError = (errors: FieldValues) => {
    Object.values(errors).forEach((error) => {
      toastError(error.message);
    });
  };
  return (
    <main className="flex items-center h-[100vh] gap-[8%]">
      <div className="m-[3%]">
        <Logo />
      </div>
      <div className="bg-[#576980] h-auto p-[4%] rounded-[30px] w-[30vw]">
        <div className="flex flex-col items-center text-white gap-2 mb-3">
          <svg
            width="100"
            height="100"
            viewBox="0 0 170 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M85 0.833313C38.5148 0.833313 0.833374 38.5147 0.833374 85C0.833374 131.485 38.5148 169.167 85 169.167C131.485 169.167 169.167 131.485 169.167 85C169.167 38.5147 131.485 0.833313 85 0.833313Z"
              stroke="#F6F6E9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9476 138.412C19.9476 138.412 38.7084 114.458 85.0001 114.458C131.292 114.458 150.061 138.412 150.061 138.412M85.0001 85C91.6968 85 98.1192 82.3397 102.855 77.6044C107.59 72.8691 110.25 66.4467 110.25 59.75C110.25 53.0533 107.59 46.6308 102.855 41.8955C98.1192 37.1602 91.6968 34.5 85.0001 34.5C78.3033 34.5 71.8809 37.1602 67.1456 41.8955C62.4103 46.6308 59.7501 53.0533 59.7501 59.75C59.7501 66.4467 62.4103 72.8691 67.1456 77.6044C71.8809 82.3397 78.3033 85 85.0001 85Z"
              stroke="#F6F6E9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="text-center text-lg text-[#2D7DC4]">{`T'inquiete pas, tout le monde oublie le mot de passe !`}</h1>
          <p className="text-sm text-center">{`Entrer votre email, on vous enverra le code par mail pour confirmer
            l'appartenance du compte`}</p>
        </div>
        <form
          className="flex flex-col items-center"
          action=""
          method=""
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <Input
            text=" Votre Email"
            type="email"
            placeholder="ex:libraryware@gmail.com"
            register={register}
            required={"Email obligatoire"}
            errors={errors}
            typedata="email"
          />
          <Button submit={true} text={"Connexion"} active={true} />
          <div className=" flex items-center justify-between w-full pt-2">
            <Link
              href="/login"
              className="text-[0.8rem] text-white hover:text-[#2D7DC4]"
            >
              Tu te rappelles de ton mot de passe? Retour
            </Link>
            <Link href="/" className="text-sm text-white hover:text-[#F4555A]">
              Quitter
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
