import React from "react";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <div>
      <main className="w-10/12 mx-auto flex justify-around items-center my-28">
        <section className="w-[35%] text-left">
          <div>
            <h2 className="text-4xl font-semibold">Ready to get started?</h2>
            <h3 className="text-3xl font-light">Contact us</h3>
          </div>
        </section>
        <section className="w-[65%]">
          <ContactForm />
        </section>
      </main>
      <hr />
    </div>
  );
}

export default ContactUs;
