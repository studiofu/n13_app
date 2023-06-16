'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const Page = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FieldValues>(
        {
            defaultValues: {
                email: '',
                password: ''
            }
        }
      );
    
      const onSubmit : SubmitHandler<FieldValues> = ( data  ) => {
        console.log(data);
      };

      return (
        <div className="p-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-2">
              <label className='p-2'>Email</label>
              <input className='
                bg-gray-200 shadow-inner rounded-l p-2 flex-1
              'type="text" id="email" {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })} />
          {errors.email && errors.email.type === "required" && (
            <p className='
              text-red-500
            '>Email is required.</p>
          )}

            {errors.email && errors.email.type === "pattern" && (
            <p className='
            text-red-500
            '>Email is not valid.</p>
          )}   
            </div>
            <div className="p-2">
              <label className='p-2'>Password</label>
              <input className='
                bg-gray-200 shadow-inner rounded-l p-2 flex-1
              'type="password" id="password" {...register("password")} />
            </div>
            <div className="form-control">
              <label></label>
              <button type="submit" className='
              bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r
              '>Login</button>
            </div>
          </form>
        </div>
      );
}

export default Page;