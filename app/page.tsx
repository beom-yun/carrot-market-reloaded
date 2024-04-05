export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-screen-sm shadow-lg p-5 rounded-3xl flex flex-col md:flex-row gap-2">
        <input
          required
          type="email"
          placeholder="Email address"
          className="w-full rounded-full h-10 bg-gray-100 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
        />
        <span className="px-2 text-red-500 font-medium hidden peer-invalid:block">Email is required...</span>
        <button className="text-white py-2 rounded-full active:scale-90 transition-transform font-medium outline-none md:px-10 bg-gradient-to-tr from-cyan-500 to-purple-500">
          Search
        </button>
      </div>
    </main>
  );
}
