import "./globals.css";

export const metadata = {
  title: "Prode Pruebas",
  description: "¡Acertá las notas de tus compañeros y coronate como el mejor!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-us">
      <body>{children}</body>
    </html>
  );
}
