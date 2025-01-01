"use client";
export default function CodingProfiles() {
  return (
    <section className="py-20 px-10 relative overflow-hidden">
      <div className="relative">
        {/* Iframe */}
        <iframe
          src="https://codolio.com/profile/Cleveridiot07"
          className="w-full h-80 border rounded-md"
          loading="lazy"
          title="Embedded Website"
        />

        {/* Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-md pointer-events-none"></div>

        {/* Button to Visit Link */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <a
            href="https://codolio.com/profile/Cleveridiot07"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md shadow-lg font-semibold hover:bg-gray-200 transition"
          >
            Visit Profile
          </a>
        </div>
      </div>
    </section>
  );
}
