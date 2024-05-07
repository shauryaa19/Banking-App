//layout for all of the auth pages

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          {children}
      </main>
    );
  }
  