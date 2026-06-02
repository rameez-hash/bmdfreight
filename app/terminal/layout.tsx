export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  );
}
