import "@styles/globals.css";

export const metadata = {
  title: "Prompt Hub",
  description: "Create & Share your awesome AI prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
