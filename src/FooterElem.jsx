
export default function FooterElem() {
  return (
    <footer className="flex flex-wrap justify-around px-4 py-4 bg-gray-800 text-gray-500">
  <div className="w-full md:w-1/3">
    <a href="#" className="text-3xl font-bold mb-2 ">Penta AI</a>
  </div>
  <div className="w-full md:w-1/3 flex justify-end">
    <nav className="flex flex-col text-3xl space-y-2">
      <a href="#" className="text-base hover:underline">About Us</a>
      <a href="#" className="text-base hover:underline">Contact Us</a>
      <a href="#" className="text-base hover:underline">Help Center</a>
      <a href="#" className="text-base hover:underline">Sign Up</a>
    </nav>
  </div>

</footer>

  );
}
