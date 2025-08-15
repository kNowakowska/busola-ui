"use client";
import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/api/apiClient";

import CoursesList from "./CoursesList";

export default function Dashboard() {
  const { data: currentUser, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: () => apiClient("/user/current-user"),
  });

  if (isPending) {
    return <div>Ładowanie...</div>;
  }
  return <CoursesList courses={currentUser?.courses || []} />;
}
