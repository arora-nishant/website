# Netlify Forms Setup Guide

Your contact form is already configured and ready to work! Here's everything you need to know.

## How It Works

The contact form uses **Netlify Forms** - a completely free feature that comes with your Netlify hosting. No backend code needed!

### Current Status

✅ Form is already configured in `contact.html`
✅ Has spam protection (honeypot field)
✅ Ready to work as soon as you deploy to Netlify

### Important: The Form Only Works When Deployed!

The form **will not work** when you test locally (using `python -m http.server` or similar). It **only works** when the site is deployed to Netlify.

## After You Deploy to Netlify

### Step 1: Verify Form is Detected

1. Deploy your site to Netlify (as we discussed earlier)
2. Go to your Netlify dashboard
3. Click on your site
4. Go to **Forms** tab in the left sidebar
5. You should see your "contact" form listed there

If you don't see it:
- Make sure you deployed the latest code
- Netlify scans for forms on deploy, so you may need to trigger a new deploy

### Step 2: Configure Email Notifications

By default, Netlify shows form submissions in the dashboard, but doesn't email you. To get emails:

1. In your Netlify dashboard, go to **Site settings** → **Forms**
2. Click **Form notifications**
3. Click **Add notification** → **Email notification**
4. Choose:
   - **Form**: contact (your form name)
   - **Email to notify**: your@email.com
   - **Event to listen for**: New form submission
5. Save

Now you'll get an email every time someone submits the form!

### Step 3: Test the Form

1. Visit your deployed website
2. Go to the Contact page
3. Fill out the form and submit
4. Check:
   - Netlify dashboard (Forms tab) - submission should appear
   - Your email - you should receive a notification

## What Information You'll Receive

When someone submits the form, you'll get:
- **Name** - from the Name field
- **Email** - from the Email field
- **Subject** - from the Subject field (optional)
- **Message** - from the Message field
- **Date/Time** - when submitted
- **Form name** - "contact"

## Netlify Forms Free Tier

✅ **100 submissions per month** - free!
✅ Spam filtering included
✅ Email notifications included
✅ Export submissions as CSV
✅ No credit card required

If you need more than 100/month, paid plans start at $19/month.

## Alternative: Using a Different Email

If you want form submissions to go to a specific email (different from your Netlify account email):

**Option 1: Email Notifications (as described above)**
- Add any email address in the notification settings

**Option 2: Zapier Integration**
- Connect Netlify Forms to Gmail, Slack, etc.
- Available on Netlify's Level 1 plan

**Option 3: Custom Form Handler**
- Use a service like Formspree (has a free tier)
- Replace the Netlify form with Formspree

## Troubleshooting

**Form not appearing in Netlify dashboard?**
- Make sure `data-netlify="true"` is in the `<form>` tag ✅ (already there)
- Make sure `name="contact"` is in the `<form>` tag ✅ (already there)
- Trigger a new deploy to force Netlify to scan for forms

**Not receiving emails?**
- Check Email notifications are set up in Netlify dashboard
- Check your spam folder
- Verify the email address is correct

**Getting spam submissions?**
- The honeypot field (`bot-field`) helps prevent spam ✅ (already configured)
- Netlify also has built-in spam filtering
- You can enable reCAPTCHA in Netlify settings if needed

## Current Form Code

Your form is already set up with:

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact">
    <!-- Hidden spam protection field -->
    <p style="display: none;">
        <label>Don't fill this out if you're human: <input name="bot-field"></label>
    </p>
    <!-- Rest of form fields -->
</form>
```

**Key attributes:**
- `name="contact"` - Form identifier
- `data-netlify="true"` - Enables Netlify Forms
- `netlify-honeypot="bot-field"` - Spam protection
- Hidden `form-name` field - Required by Netlify

## Summary

**To get the form working:**

1. ✅ Form is already configured in your code
2. 🚀 Deploy to Netlify
3. 📧 Set up email notifications in Netlify dashboard
4. ✉️ Receive form submissions via email!

**No backend, no server, no coding needed!** It's completely free with Netlify hosting.

---

For more details, see: https://docs.netlify.com/forms/setup/
