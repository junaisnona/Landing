import React from "react";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <div>
      <main className="w-full mx-auto flex flex-col lg:flex-row justify-between items-center xs:my-8 lg:my-18">
        <section className="w-full lg:w-4/12 pl-20 text-left">
          <div>
            <h2 className="text-3xl lg:text-4xl font-normal">Ready to get started?</h2>
            <h3 className="text-xl lg:text-3xl font-light">Contact us</h3>
          </div>
        </section>
        <section className="w-full lg:w-8/12 p-10 pt-5 lg:p-10">
          <ContactForm />
        </section>
      </main>
      <hr />
    </div>
  );
}

export default ContactUs;
