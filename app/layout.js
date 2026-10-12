export const metadata = {
  title: 'GrungeBot',
  description: 'A grunge songwriting assistant for lyrics, guitar riffs, and drum parts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
