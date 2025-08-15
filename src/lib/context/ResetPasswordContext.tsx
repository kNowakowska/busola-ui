"use client";
import { createContext, useState, useContext, PropsWithChildren } from "react";

interface ResetPasswordContextState {
  email: string;
  code: string;
  initialPassword: string;
  setEmail: (email: string) => void;
  setCode: (code: string) => void;
  setInitialPassword: (initialPassword: string) => void;
}

const defaultState: ResetPasswordContextState = {
  email: "",
  code: "",
  initialPassword: "",
  setEmail: () => {},
  setCode: () => {},
  setInitialPassword: () => {},
};

export const ResetPasswordContext = createContext(defaultState);

export const ResetPasswordProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [initialPassword, setInitialPassword] = useState<string>("");

  return (
    <ResetPasswordContext.Provider
      value={{
        email,
        code,
        initialPassword,
        setEmail,
        setCode,
        setInitialPassword,
      }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};

export const useResetPasswordContext = () => useContext(ResetPasswordContext);
