import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen  bg-slate-900">
      <form className="flex flex-col gap-4 w-96 p-10 bg-slate-950 rounded-lg text-white">
        <div>
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              className="text-white"
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="remember" className="text-blue-600">
            Forgot Password?
          </Label>
        </div>
        <Button gradientDuoTone="purpleToBlue">Login</Button>
      </form>
    </div>
  );
};

export default Login;
