"use client";
import { createContext, useState, useContext, PropsWithChildren } from "react";

interface ResetPasswordContextState {
  email: string;
  code: string;
  setEmail: (email: string) => void;
  setCode: (code: string) => void;
}

const defaultState: ResetPasswordContextState = {
  email: "",
  code: "",
  setEmail: () => {},
  setCode: () => {},
};

export const ResetPasswordContext = createContext(defaultState);

export const ResetPasswordProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");

  return (
    <ResetPasswordContext.Provider value={{ email, code, setEmail, setCode }}>
      {children}
    </ResetPasswordContext.Provider>
  );
};

export const useResetPasswordContext = () => useContext(ResetPasswordContext);
