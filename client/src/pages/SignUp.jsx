import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex max-w-3xl mx-auto p-3 flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 rounded-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Bougoudimi's
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm">
            This is a demo project. You can sign up with your email and password
            or your Google account
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex text-sm mt-4 gap-2">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
