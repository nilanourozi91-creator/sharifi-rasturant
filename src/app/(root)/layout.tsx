import Index from "@/components/shared";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="h-screen flex flex-col">
    <main className=" wrapper">
      <Index/>
      {children}
    </main>
   </div>
  );
}