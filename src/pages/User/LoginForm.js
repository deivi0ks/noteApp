export default function RegisterForm() {
  document.title = "Note-App prisijungimas";
  return (
    <div class="container mx-auto p-4 bg-white">
      <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
        <h1 class="text-lg font-bold">Prisijungimas</h1>
        <form class="flex flex-col mt-4">
          <input
            type="email"
            name="email"
            class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="El.Paštas"
          />
          <input
            type="password"
            name="password"
            class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Slaptažodis"
          />
          <button
            type="submit"
            class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
          >
            Prisijungti
          </button>
          <div class="flex flex-col items-center mt-5">
            <p class="mt-1 text-xs font-light text-gray-500">
              Naujas vartotojas?
              <a href="/registracija" class="ml-1 font-medium text-blue-400">
                užsiregistruoti
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
