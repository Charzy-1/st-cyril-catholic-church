import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

const Register = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    ageRange: "",
    occupation: "",
    gender: "",
    houseAddress: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Uncomment and setup emailjs if ready
    // try {
    //   await emailjs.sendForm(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     formRef.current,
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   );

    //   setForm({ 
    //     name: "", email: "", phoneNumber: "", ageRange: "", 
    //     occupation: "", gender: "", houseAddress: "", message: "" 
    //   });
    // } catch (error) {
    //   console.error("EmailJS Error:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="register" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-2">

        {/* Page Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome! – Let’s know you better</h2>
          <p className="text-lg text-gray-600">💬 Have questions or ideas? Let’s talk! 🚀</p>
        </div>

        <div className="grid-12-cols mt-16">
          {/* Form Section */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-3">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your Fullname</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter as it is on your certificates"
                    required
                  />
                </div>

                {/* Email and PhoneNumber in one row */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What’s your email address?"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Age Range and Occupation in one row */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="ageRange">Age Range</label>
                    <select
                      id="ageRange"
                      name="ageRange"
                      value={form.ageRange}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#cd7c2e]"
                    >
                      <option value="">Select Age Range</option>
                      <option value="Under 18">Under 18</option>
                      <option value="18-25">18-25</option>
                      <option value="26-35">26-35</option>
                      <option value="36-45">36-45</option>
                      <option value="46 and above">46 and above</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="occupation">Occupation</label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={form.occupation}
                      onChange={handleChange}
                      placeholder="Enter your occupation"
                      required
                    />
                  </div>
                </div>

                {/* Gender and House Address in one row */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#cd7c2e]"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="houseAddress">House Address</label>
                    <input
                      type="text"
                      id="houseAddress"
                      name="houseAddress"
                      value={form.houseAddress}
                      onChange={handleChange}
                      placeholder="Enter your house address"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="5"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Parish Office Hours Section */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-amber-500 w-full h-full flex flex-col justify-center items-start gap-6 p-10 rounded-5xl text-white">
              <h2 className="text-2xl font-bold">Parish Office Hours</h2>
              <p>General Office: Mondays - Fridays (9am - 4pm) | Sundays (9am - 12 noon)</p>
              <p>Office is closed on Thursdays & Saturdays</p>
              <p>Very Rev. Fr. Melvis Mayaki - Parish Priest: Tuesdays & Fridays (10:00 am - 1pm)</p>
              <p>Rev. Fr. Hilary Ogunyemi - Asst Parish Priest: Mondays & Wednesdays (10:00 am - 1pm)</p>

              <button type="button" onClick={scrollToForm}>
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">
                    Send a Message
                  </p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Register;
