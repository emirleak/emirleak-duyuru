import "./style.css";

export const metadata = {
  title: "EMİRLEAK DUYURU PANELİ",
  description: "Emirleak topluluk duyuru paneli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
