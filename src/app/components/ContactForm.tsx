// This is a regular JavaScript comment outside JSX
const ContactForm = () => {
  /* This is also a regular JavaScript comment */
  return (
    <form className="bg-[var(--card-bg)] text-[var(--text)]">
      {/* This is a proper JSX comment */}
      <input 
        className="bg-[var(--container-bg)] border-[var(--accent-1)]"
        type="text"
       
      />
      <button className="bg-[var(--primary)] hover:bg-[var(--hover)] text-white">
        Submit
      </button>
    </form> 
  );
};

export default ContactForm;