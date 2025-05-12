import emailjs from '@emailjs/browser';
import { sanitizeInput, isValidEmail } from './securityHelpers';

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};

export const sendEmail = async (params: EmailParams): Promise<void> => {
  try {
    const validationErrors: string[] = [];
    
    if (!params.name || params.name.trim().length === 0) {
      validationErrors.push('Name is required');
    }
    
    if (!params.email || !isValidEmail(params.email)) {
      validationErrors.push('Valid email address is required');
    }
    
    if (!params.message || params.message.trim().length === 0) {
      validationErrors.push('Message is required');
    }

    if (validationErrors.length > 0) {
      throw new Error(validationErrors.join(', '));
    }

    const templateParams = {
      from_name: sanitizeInput(params.name),
      reply_to: sanitizeInput(params.email),
      subject: sanitizeInput(params.subject),
      message: sanitizeInput(params.message)
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};