export default function VideoSektion() {
  return (
    <section className="w-full py-16 bg-white">
      {/* Containeren holder indholdet på plads og flugter med dine andre sektioner */}
      <div className="max-w-7xl mx-auto px-8 md:px-10 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Tekst-sektion: Altid venstrestillet (text-left og items-start) */}
        <div className="w-full lg:w-2/5 text-left flex flex-col items-start">
          <h2 className="text-navy text-3xl font-bold mb-2">
            Співпраця з організаціями Копенгагена
          </h2>
          <p className="text-navy text-lg italic opacity-80 mb-4">
            I Samarbejde med foreninger i København
          </p>
          <p className="text-navy text-base italic opacity-80">
            Ми співпрацюємо з місцевими організаціями та клубами по всьому місту, 
            щоб ви могли легко долучитися до активного життя.
          </p>
        </div>

        {/* Video-sektion: Fylder 60% på desktop */}
        <div className="w-full lg:w-3/5 aspect-video bg-gray-100 shadow-2xl overflow-hidden rounded-sm">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/DIN_VIDEO_ID" 
            title="Video om samarbejde"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}