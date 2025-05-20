export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-gradient-to-br from-teal-100 to-green-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
