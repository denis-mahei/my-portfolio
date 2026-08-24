import * as React from 'react';
import { contactsData } from '@/components/contacts/data';

function ContactsList() {
  return (
    <ul>
      {contactsData.map((contact) => (
        <li key={contact.id}>
          <a
            href={contact.href}
            target={
              contact.href.startsWith('http') ? '_blank' : undefined
            }
            rel={
              contact.href.startsWith('http')
                ? 'noopener noreferrer'
                : undefined
            }
            className="flex items-center gap-1 py-2 px-4 text-link-foreground"
          >
            <contact.icon size={24} className="text-slate-500" />
            {contact.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default ContactsList;
