import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="">
      <section className="p-5">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-28">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-32 w-auto"
            src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/306846572_587849596460147_6593134690579058355_n.png?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH0YmV2S9f-HvP5TWS5WkPsfHGhb_yoOK18caFv_Kg4rX6C-N5UdiZRXuHcz_7oFlWQPtMtC184WebDwezLooTR&_nc_ohc=APKjDT6K_2EAX_eN2hH&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfCXgKwZwM2dVyQ_PiXUN1mWcr8ci8i2qWB_1rzN5fxF_w&oe=65EB4B0E"
            alt="CCA Logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-green-800 hover: text-green-600">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
            <Link href="/dashboard">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log In
                
              </button></Link>
            </div>
          </form>
        </div>
      </div>

      </section>
    </main>
  );
}
