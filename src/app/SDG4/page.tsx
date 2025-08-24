// app/page.tsx

export default function IframePage() {
  const websiteUrl = "https://v0-ai-course-builder-flame.vercel.app/";

  return (
    <div className="fixed inset-0 w-screen h-screen">
      <iframe
        src={websiteUrl}
        title="AI Course Builder"
        className="w-full h-full border-0"
        // Relax sandbox if the site needs cookies, auth, or navigation
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
        allowFullScreen
      />
    </div>
  );
}
