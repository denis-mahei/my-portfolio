'use client';

import * as React from 'react';
import { useWatch } from 'react-hook-form';
import { ContactFormValues } from '@/lib/schemas/form';

function LiveCodePreview() {
  const today = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  });
  const values = useWatch<ContactFormValues>();
  return (
    <div className="flex gap-6 font-mono py-3 px-1">
      <div className="flex flex-col gap-1 text-foreground text-right">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
      </div>
      <div className="[&>p]:text-indigo-500 flex flex-col gap-1">
        <p>
          <span className="text-purple-400">const</span> button =
          document.querySelector(
          <span className="text-primary">&#39;#sendBtn&#39;</span>);
        </p>
        <p>&nbsp;</p>
        <p>
          <span className="text-purple-400">const</span> message ={' '}
          <span className="text-foreground">{'{'}</span>
        </p>
        <p>
          &nbsp; name:{' '}
          <span className="text-primary">
            &#34;{values.name}&#34;{','}
          </span>
        </p>
        <p>
          &nbsp; email:{' '}
          <span className="text-primary">
            &#34;{values.email}&#34;{','}
          </span>
        </p>
        <p>
          &nbsp; message:{' '}
          <span className="text-primary">
            &#34;{values.message}&#34;,
          </span>
        </p>
        <p>
          &nbsp; date:{' '}
          <span className="text-primary">&#34;{today}&#34;</span>
        </p>
        <span className="text-foreground">{'}'}</span>
        <p>&nbsp;</p>
        <p>
          button.addEventListener(
          <span className="text-primary">&#39;click&#39;</span>,{' '}
          <span className="text-foreground">()</span>{' '}
          <span className="text-purple-400">{'=>'}</span>{' '}
          <span className="text-foreground">{'{'}</span>
          <span> &nbsp;form.send(message);</span>
        </p>
        <span className="text-foreground">{'})'}</span>
      </div>
    </div>
  );
}
export default LiveCodePreview;
