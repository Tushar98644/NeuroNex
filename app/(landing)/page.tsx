import Link from "next/link";

const Home = () => {
  return (  
    <div className="flex items-center w-screen min-h-screen justify-center">
      <Link href={'/sign-in'}>
        sign-in
      </Link>
      <Link href={'/sign-up'}>
        sign-up
      </Link>
    </div>
  );
}
 
export default Home;