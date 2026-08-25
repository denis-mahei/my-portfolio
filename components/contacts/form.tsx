'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ContactFormValues } from '@/lib/schemas/form';
import { cn } from '@/lib/utils';
import { sendMessage } from '@/lib/actions/send-message';
import ThankYou from '@/components/contacts/thank-you';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useFormContext<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    await sendMessage(data);
    reset();
  };

  return (
    <div className="p-6 md:p-20 mx-auto">
      {isSubmitSuccessful ? (
        <ThankYou onReset={() => reset()} />
      ) : (
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
              className={cn(
                errors.name &&
                  'border-error bg-error-alpha hover:border-error-hover',
              )}
            />
            {errors.name?.message && (
              <small>{errors.name?.message}</small>
            )}
          </div>
          <div>
            <label htmlFor="email">_email:</label>
            <input
              id="email"
              type="email"
              {...register('email')}
              placeholder="johndoe@mail.com"
              className={cn(
                errors.email &&
                  'border-error bg-error-alpha hover:border-error-hover',
              )}
            />
            {errors.email?.message && (
              <small>{errors.email?.message}</small>
            )}
          </div>
          <div>
            <label htmlFor="message">_message:</label>
            <textarea
              {...register('message')}
              rows={5}
              placeholder="Your message..."
              className={cn(
                errors.message &&
                  'border-error bg-error-alpha hover:border-error-hover',
              )}
            ></textarea>
            {errors.message?.message && (
              <small>{errors.message?.message}</small>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              'px-3 py-2.5 self-start text-sm rounded-lg bg-slate-500',
              isSubmitting
                ? 'bg-slate-500'
                : 'bg-primary text-slate-950',
            )}
          >
            submit-message
          </button>
        </form>
      )}
    </div>
  );
}
export default Form;
