"use client";
import { useQuery } from "@tanstack/react-query";

import apiClient from "@/lib/api/apiClient";
import { userKeys } from "@/lib/api/queryKeysFactory";
import { User } from "@/lib/types/courses";

import CoursesList from "./CoursesList";

export default function Dashboard() {
  const { data: currentUser, isPending } = useQuery({
    queryKey: userKeys.currentUser,
    queryFn: () => apiClient<User>("/dashboard/current-user"),
  });

  if (isPending) {
    return <div>Ładowanie...</div>;
  }
  return <CoursesList courses={currentUser?.courses || []} />;
}
