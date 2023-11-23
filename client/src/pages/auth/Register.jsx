import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { signup } from '../../services/users';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/reducers/userReducers';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return signup({ name, email, password });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem('account', JSON.stringify(data));
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  useEffect(() => {
    if (userState.userInfo) {
      // navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
    mode: 'onChange',
  });
  const submitHandler = (data) => {
    const { name, email, password } = data;
    mutate({ name, email, password });
  };
  const password = watch('password');

  return (
    <section className="container mx-auto px-5 py-10">
      <div className="w-full max-w-sm mx-auto">
        <h1 className="font-inter text-2xl font-bold text-center text-dark-hard mb-8">
          Register User
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="name"
              className="text-[#5a7184] font-semibold block"
            >
              Name
            </label>
            <input
              id="name"
              {...register('name', {
                minLength: {
                  value: 2,
                  message: 'Name length must be atleast 2 character',
                },
                required: {
                  value: true,
                  message: 'Name is required',
                },
              })}
              placeholder="Name"
              type="text"
              className={`placeholder:text-[#595ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                errors.name ? 'border-red-500' : 'border-[#c3cad9]'
              }`}
            />
            {errors.name?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="Email"
              className="text-[#5a7184] font-semibold block"
            >
              Email
            </label>
            <input
              id="email"
              {...register('email', {
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Enter a valid email',
                },
                required: {
                  value: true,
                  message: 'Email is required',
                },
              })}
              placeholder="Email Address"
              type="text"
              className={`placeholder:text-[#595ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                errors.email ? 'border-red-500' : ' border-[#c3cad9]'
              } `}
            />
            {errors.email?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="password"
              className="text-[#5a7184] font-semibold block"
            >
              Enter password
            </label>
            <input
              id="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password id required',
                },
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              placeholder="Enter password"
              type="password"
              className={`placeholder:text-[#595ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                errors.password ? 'border-red-500' : ' border-[#c3cad9]'
              }`}
            />
            {errors.password?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-6 w-full">
            <label
              htmlFor="confirmPassword"
              className="text-[#5a7184] font-semibold block"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'confirm password is required',
                },
                validate: (value) => {
                  if (value !== password) {
                    return 'Password do not match';
                  }
                },
              })}
              placeholder="Confirm Password"
              type="password"
              className={`placeholder:text-[#595ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${
                errors.confirmPassword ? 'border-red-500' : ' border-[#c3cad9]'
              }`}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
          <button
            disabled={!isValid || isLoading}
            type="submit"
            className="bg-secondary text-white font-normal text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Register User
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
