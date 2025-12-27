"use client";
import toast from "react-hot-toast";

import LoadingSpinner from "@/lib/components/LoadingSpinner";

import CoursesList from "./CoursesList";
import { useAuthContext } from "@/lib/providers/AuthProvider";

export default function Dashboard() {
  const { currentUser, isLoadingCurrentUser, fetchCurrentUserError } =
    useAuthContext();

  if (fetchCurrentUserError) {
    toast.error(fetchCurrentUserError.message);
  }

  if (isLoadingCurrentUser) {
    return <LoadingSpinner message="Wczytywanie kursów" />;
  }
  return <CoursesList courses={currentUser?.courses || []} />;
}
