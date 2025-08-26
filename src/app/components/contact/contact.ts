import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  title = 'Contact';
  subtitle = "Let's build something great together.";
  email = 'adrinbershik.2201008@srec.ac.in';

  formData: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;
  submitMessage = '';

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.submitMessage = 'Please fill in all fields.';
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    // Create mailto link with form data
    const subject = `Portfolio Contact from ${this.formData.name}`;
    const body = `Hi Adrin,

My name is ${this.formData.name} and I wanted to reach out to you.

${this.formData.message}

Best regards,
${this.formData.name}
Email: ${this.formData.email}`;

    const mailtoLink = `mailto:${this.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open user's email client
    window.location.href = mailtoLink;

    // Reset form after a brief delay
    setTimeout(() => {
      this.formData = { name: '', email: '', message: '' };
      this.isSubmitting = false;
      this.submitMessage =
        'Email client opened! Please send the message from your email app.';
    }, 1000);
  }

  // Alternative method using a direct email service (requires backend)
  sendDirectEmail() {
    // This would require a backend service to actually send emails
    // For now, it falls back to mailto
    this.onSubmit();
  }
}
