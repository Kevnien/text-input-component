export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Text Input Component</h1>
      <footer>
        <div className="credits">
          A challenge by
          <a
            href="https://www.greatfrontend.com/projects?ref=challenges"
            target="_blank"
          >
            GreatFrontEnd Projects
          </a>
          . Built by
          <a href="https://www.greatfrontend.com/u/kevnien" target="_blank">
            Kevin Nguyen
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
