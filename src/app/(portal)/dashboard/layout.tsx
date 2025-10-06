export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {
  return <div className="h-full min-h-[50vh] w-full pt-10">{children}</div>;
}
