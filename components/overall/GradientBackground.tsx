export default function GradientBackground() {
    return (
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-r from-transparent to-cyan-500" />
      </div>
    );
  }
  