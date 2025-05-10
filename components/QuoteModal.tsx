'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useModal } from './ModalContext';

export function QuoteModal() {
  const { isModalOpen, closeModal } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    if (!formData.details.trim()) {
      newErrors.details = 'Project details are required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mnndzwgz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          details: formData.details,
          _subject: `New Quote Request: ${formData.service}`
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', service: '', details: '' });
        setErrors({});
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }
    } catch (error) {
      setErrors({ form: error instanceof Error ? error.message : 'An unknown error occurred' });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-white/10"
      >
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Request a Quote</h2>
          
          {errors.form && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
              {errors.form}
            </div>
          )}

          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Thank you for your request!</h3>
              <p className="text-gray-600 dark:text-gray-300">We'll get back to you soon.</p>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name* {errors.name && <span className="text-red-500 text-xs"> - {errors.name}</span>}
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-brand-blue'
                  }`}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email* {errors.email && <span className="text-red-500 text-xs"> - {errors.email}</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-brand-blue'
                  }`}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1">
                  Service* {errors.service && <span className="text-red-500 text-xs"> - {errors.service}</span>}
                </label>
                <select
                  id="service"
                  className={`w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 ${
                    errors.service ? 'border-red-500 focus:ring-red-500' : 'focus:ring-brand-blue'
                  }`}
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Consulting">Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium mb-1">
                  Project Details* {errors.details && <span className="text-red-500 text-xs"> - {errors.details}</span>}
                </label>
                <textarea
                  id="details"
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 ${
                    errors.details ? 'border-red-500 focus:ring-red-500' : 'focus:ring-brand-blue'
                  }`}
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-2 rounded-lg flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Request Quote'
                )}
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
