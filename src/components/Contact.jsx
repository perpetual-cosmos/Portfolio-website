import { useRef } from "react";
import useEmailSender from "../hooks/useEmailSender";

export default function Contact() {
  const formRef = useRef();
  const { sendForm, loading, success, error } = useEmailSender();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendForm(formRef.current);
      formRef.current.reset();
    } catch (err) {
      console.error("Failed to send email", err);
    }
  };

  return (
    <div className="max-w-2xl w-full">
      <h2 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold">
        LET'S <span className="text-white">WORK</span>
      </h2>
      <h2 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-9xl font-bold text-gray-600">TOGETHER</h2>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400">Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your@email.com"
              className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        <label className="block mt-4 text-gray-400">Budget</label>
        <select
          name="user_budget"
          className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:border-orange-500"
        >
          <option className="bg-black text-white">Select...</option>
          <option className="bg-black text-white">Free consult</option>
          <option className="bg-black text-white">$6 - $57</option>
          <option className="bg-black text-white">$57 - $114</option>
          <option className="bg-black text-white">$114+</option>
        </select>

        <label className="block mt-4 text-gray-400">Message</label>
        <textarea
          name="message"
          required
          placeholder="Message"
          className="w-full px-4 py-2 mt-1 bg-transparent border border-gray-600 text-white rounded-lg focus:outline-none focus:border-orange-500 h-32"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {success && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
      {error && <p className="text-red-400 text-center mt-4">Failed to send message. Try again.</p>}
    </div>
  );
}