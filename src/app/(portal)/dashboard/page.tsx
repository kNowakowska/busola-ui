"use client";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import apiClient from "@/lib/api/apiClient";
import { authKeys } from "@/lib/api/queryKeysFactory";
import { User } from "@/lib/types/courses";
import LoadingSpinner from "@/lib/components/LoadingSpinner";

import CoursesList from "./CoursesList";

export default function Dashboard() {
  const {
    data: currentUser,
    isPending,
    error,
  } = useQuery({
    queryKey: authKeys.currentUser,
    queryFn: () => apiClient<User>("/dashboard/current-user"),
  });

  if (error) {
    toast.error(error.message);
  }

  if (isPending) {
    return <LoadingSpinner message="Wczytywanie kursów" />;
  }
  return <CoursesList courses={currentUser?.courses || []} />;
}
