'use client';

import React from 'react';
import Wrapper from '@/components/layout/wrapper';
import Sidebar from '@/components/contacts/sidebar';
import Form from '@/components/contacts/form';
import LiveCodePreview from '@/components/contacts/live-code-preview';
import { FormProvider, useForm } from 'react-hook-form';
import {
  contactFormSchema,
  ContactFormValues,
} from '@/lib/schemas/form';
import { zodResolver } from '@hookform/resolvers/zod';

function Page() {
  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });
  return (
    <FormProvider {...methods}>
      <Wrapper title="_contacts-me" layout={3}>
        <Sidebar />
        <Form />
        <LiveCodePreview />
      </Wrapper>
    </FormProvider>
  );
}
export default Page;
