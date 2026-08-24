'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ContactFormValues } from '@/lib/schemas/form';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <div className="p-6 md:p-20 mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-w-93 flex flex-col [&_label]:mb-2 gap-6 [&>div]:flex [&>div]:flex-col"
      >
        <div>
          <label htmlFor="name">_name:</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email">_email:</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="johndoe@mail.com"
          />
        </div>
        <div>
          <label htmlFor="message">_message:</label>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="Your message..."
          ></textarea>
        </div>
        <button className="px-3 py-2.5 self-start bg-primary text-slate-950 text-sm rounded-lg">
          submit-message
        </button>
      </form>
    </div>
  );
}
export default Form;
