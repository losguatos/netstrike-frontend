const styles = {
  container: 'flex flex-col items-center justify-center min-h-screen bg-black text-green-400 text-center font-mono px-4',
  title: 'text-4xl md:text-6xl font-bold mb-6 tracking-wider',
  subtitle: 'text-base md:text-lg mb-8 leading-relaxed max-w-lg md:max-w-2xl',
  section: 'mb-8 text-center px-4 md:px-0', //Ajustar márgenes en pantallas más pequeñas
  sectionTitle: 'text-xl md:text-2xl font-bold mb-4 underline',
  list: 'list-none space-y-2 text-sm md:text-base', //Ajustar tamaño de texto según la pantalla
  footerText: 'text-sm md:text-lg mb-6',
  ctaContainer: 'flex flex-col md:flex-row gap-4', //Botones en columna en pantallas pequeñas
  cta: 'w-full md:w-auto px-4 py-2 bg-green-600 text-black font-bold rounded hover:bg-green-500 cursor-pointer transition-colors duration-300',
};

export default styles;

  