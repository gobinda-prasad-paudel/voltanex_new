import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Diameter, Globe } from 'lucide-react';
import { useForm, ValidationError } from "@formspree/react";
import Section from '../ui/Section';
import Button from '../ui/Button';
import { contactInfo, faqs } from '../../utils/constants';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xovplebw");
  const initialFormData = { name: "", email: "", subject: "", message: "" };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };



  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubmitted(true);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       subject: '',
  //       message: '',
  //     });

  //     // Reset success message after 5 seconds
  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //     }, 5000);
  //   }, 1500);
  // };

  return (
    <Section
      id="contact"
      className="bg-gray-50"
      title="Get in Touch"
      subtitle="Have questions or want to collaborate? Reach out to us using any of the methods below."
      centered
    >
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> */}
        {/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>

            {state.succeeded ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6 animate-fadeIn">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : null}

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Research Opportunity">Research Opportunity</option>
                  <option value="Job Application">Job Application</option>
                  <option value="Other">Other</option>
                </select>
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={state.submitting}
                className="w-full flex items-center justify-center"
              >
                {state.submitting ? "Sending..." : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div> */}

        <div>
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg shadow-md p-8 text-white mb-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start space-x-4">
                <Phone size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div> */}
              {/* <div className="flex items-start space-x-4">
                <Globe size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Discord</h4>
                  <a
                    href={`tel:${contactInfo.discord}`} target='_blank'
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    {contactInfo.discord}
                  </a>
                </div>
              </div> */}

              <div className="flex items-start space-x-4">
                <MapPin size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Visit Us</h4>
                  <p className="text-blue-100">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>


            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </Section>
  );
};

export default Contact;