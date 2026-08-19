import * as React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div>
      <h2 className="p-6 text-heading-foreground text-sm lg:hidden">
        _projects
      </h2>
      <Image
        src="https://res.cloudinary.com/contactscloud/image/upload/v1787059163/readjourneyimg.png"
        alt="pic"
        width={300}
        height={400}
        className="rounded-xl"
        unoptimized
      />
    </div>
  );
}
export default Page;
