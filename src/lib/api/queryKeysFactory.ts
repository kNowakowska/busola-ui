export const userKeys = {
  currentUser: ["currentUser"] as const,
};

export const courseKeys = {
  all: ["courses"] as const,
  lists: () => [...courseKeys.all, "list"] as const,
  details: (uuid: string) => [...courseKeys.all, "details", uuid] as const,
  image: (imageCMSId: string) =>
    [...courseKeys.all, "images", imageCMSId] as const,
};

export const lessonKeys = {
  all: ["lessons"] as const,
  lists: () => [...lessonKeys.all, "list"] as const,
  details: (uuid: string) => [...lessonKeys.all, "details", uuid] as const,
  quiz: (lessonUuid: string, uuid: string) =>
    [...lessonKeys.details(lessonUuid), "quiz", uuid] as const,
  saveNotes: (uuid: string) =>
    [...lessonKeys.details(uuid), "saveNotes"] as const,
  markAsCompleted: (uuid: string) =>
    [...lessonKeys.details(uuid), "markAsCompleted"] as const,
};
