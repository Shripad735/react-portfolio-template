# How to Fix Your EmailJS Contact Form

The issue you're facing is a common configuration problem within the EmailJS dashboard. Your code is working correctly, but your EmailJS template is set up as an "auto-responder" that only sends an email back to the person who filled out the form, not to you.

Here’s how to fix it so that you receive the contact form messages.

## Step 1: Reconfigure Your Main Email Template

This will change your existing template (`template_im1bms6`) to send the form submission details to your email address.

1.  **Log in to your EmailJS account.**
2.  Navigate to the **Email Templates** section.
3.  Click on your existing template, `template_im1bms6`, to edit it.
4.  **Update the Email Content:** Change the body of the email to be the message you want to receive. Use the template variables `{{name}}`, `{{email}}`, and `{{message}}`.

    **Example Email Body:**
    ```
    You have a new message from your portfolio website!

    From: {{name}}
    Email: {{email}}

    Message:
    {{message}}
    ```

5.  **Update the Template Settings:** On the right side of the template editor, go to the **Settings** tab.
    *   **To Email:** Change this from `{{email}}` to your own email address (e.g., `shripad.khandare@mitaoe.ac.in`).
    *   **Reply-To:** Set this to `{{email}}`. This is very important! It allows you to click "Reply" in your email client and have the response go directly to the person who contacted you.
    *   **From Name** (Optional): You can set this to `{{name}}` or "Portfolio Contact Form".
    *   **From Email** (Optional): Leave this as the default from your connected email service.

6.  **Save the template.**

Now, when someone submits the form, you will receive their message at your email address.

## Step 2: (Optional) Create a New Auto-Reply Template

The change in Step 1 will stop the confirmation email from being sent to the user. If you still want to send them an auto-reply, the correct way is to create a *second* template for that purpose.

1.  **Create a New Template** in EmailJS. Let's call it `auto_reply_template`.
2.  **Configure the Auto-Reply Template:**
    *   **To Email:** Set this to `{{email}}`.
    *   **Subject:** "Thanks for your message!" or similar.
    *   **Email Body:** Write the confirmation message you want users to receive.
        ```
        Hi {{name}},

        Thank you for reaching out! I have received your message and will get back to you as soon as possible.

        Best regards,
        Shripad Khandare
        ```
3.  **Link the Auto-Reply Template:**
    *   Go back to your main notification template (`template_im1bms6`).
    *   In the **Settings** tab, find the **Auto-Reply** section.
    *   Select your new `auto_reply_template` from the dropdown.
4.  **Save everything.**

With this setup, when a user submits the form:
-   EmailJS will use `template_im1bms6` to send the user's message to **you**.
-   EmailJS will then use `auto_reply_template` to send a confirmation email to the **user**.

This is the standard and most effective way to configure a contact form with EmailJS.
