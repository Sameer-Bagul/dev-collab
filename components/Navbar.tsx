import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const navbar = async () => {

  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          
          {/* Ternary operator starts here  */}
          {/* check if user is logged in or not */}
          
          {session && session?.user ? (  
            // option 1: if user is logged in
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ):(
            // option 2 : if user is not logged in
            <form action={async () => {
                "use server";
                await signIn('github')
              }}>
                 
              <button type="submit">
                Login
              </button>
            </form>
          )}

        </div>
      </nav>
    </header>
  )
}

export default navbar;
