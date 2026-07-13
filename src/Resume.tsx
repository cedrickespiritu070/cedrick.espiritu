export default function Resume() {
  return (
    <section className="bg-[#f1f1ee] dark:bg-[#111110] min-h-[calc(100svh-72px)] px-6 py-6 max-[640px]:px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="bg-white dark:bg-[#0f0f0f] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10" style={{ height: 'calc(100svh - 170px)' }}>
          <iframe
            src="/Cedrick_Espiritu_resume.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none', display: 'block' }}
            title="Resume"
          />
        </div>
      </div>
    </section>
  )
}
