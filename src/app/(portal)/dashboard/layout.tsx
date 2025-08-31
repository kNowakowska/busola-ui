export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {
  return <div className="w-full h-full pt-10">{children}</div>;
}
