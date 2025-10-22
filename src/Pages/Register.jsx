
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const{createUser,setUser} =use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
     createUser(email, password)
      .then(result => {
        setUser(result.user);
        toast.success("User created:", result.user);
        navigate('/')
      })
      .catch(error => {
        toast.error("Firebase Error:", error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-center">
        <h2 className="font-semibold text-3xl p-4">Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter your name"
              required
            />

            {/* email  */}

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Photo  */}

            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* password  */}

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <div className="p-5 ">
              <p>
                Already have an account?
                <Link
                  to="/login"
                  className=" font-semibold hover:underline hover:text-[#4338ca] ml-2"
                >
                  Login
                </Link>
              </p>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
