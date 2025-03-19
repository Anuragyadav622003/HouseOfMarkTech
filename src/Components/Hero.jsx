export default function Hero() {
    return (
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070.mp4" />
        </video>
        
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to Marktech</h1>
          <p className="text-xl mb-8">Innovative Web Solutions</p>
        </div>
      </section>
    );
  }