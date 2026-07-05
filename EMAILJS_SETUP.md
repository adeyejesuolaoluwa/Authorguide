# EmailJS Setup Guide

To enable email notifications for project applications and contact submissions, follow these steps:

## 1. Create an EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up"
3. Create a free account (no credit card required for free tier)

## 2. Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click "Add Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup steps to connect your email account
5. Copy the **Service ID** (you'll need this)

## 3. Create Email Templates

### Template 1: Project Application
1. Go to **Email Templates**
2. Click "Create Template"
3. Name it something like "Project Application"
4. Set **To Email**: `{{to_email}}`
5. Set **Subject**: `New Project Application: {{project_name}}`
6. Use this template body:

```
New project application received!

Name: {{from_name}}
Email: {{from_email}}
Project: {{project_name}}

Details:
{{project_details}}
```

7. Save and copy the **Template ID** (e.g., template_abc123)

### Template 2: Contact Request
1. Create another template named "Contact Request"
2. Set **To Email**: `{{to_email}}`
3. Set **Subject**: `New Contact Request from {{from_name}}`
4. Use this template body:

```
New contact request received!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

7. Copy the **Template ID** for this template as well

## 4. Get Your Public Key

1. In EmailJS dashboard, go to **Account**
2. Copy your **Public Key**

## 5. Update the AuthorGuide Code

Open `src/App.jsx` and replace these values at the top:

```javascript
// Line 5 - Replace with your public key
emailjs.init('YOUR_PUBLIC_KEY_HERE')

// Line 16 - Replace with your service ID
'YOUR_SERVICE_ID_HERE',
// Line 17 - Replace with your application template ID
'YOUR_APP_TEMPLATE_ID_HERE',

// Line 26 - Replace with your service ID
'YOUR_SERVICE_ID_HERE',
// Line 27 - Replace with your contact template ID
'YOUR_CONTACT_TEMPLATE_ID_HERE',

// Line 35 and 45 - Replace with your team email
'YOUR_TEAM_EMAIL@example.com',
```

Example:
```javascript
emailjs.init('k1234567890abcdef')

const result = await emailjs.send(
  'service_abc123',
  'template_project_app',
  { ... },
  { from_name: appForm.name, ... }
)
```

## 6. Test the Forms

1. Run `npm run dev` locally
2. Fill out the application form and submit
3. Check your team email for the notification
4. If it doesn't work, check the browser console for error messages

## Free Tier Limits

- 200 emails per month
- Perfect for small teams

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact: support@emailjs.com
