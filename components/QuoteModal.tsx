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
        {/* Modal content */}
        <div className="p-6">
          {errors.form && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">
              {errors.form}
            </div>
          )}

          {isSubmitted ? (
            <div className="text-center py-6">
              {/* Success message */}
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

              {/* Similar error handling for other fields */}

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
