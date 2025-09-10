import "dotenv/config";
import { init, send } from "@emailjs/nodejs";

export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  const { user_name, user_email, user_budget, message } = JSON.parse(event.body);

  // Basic validation
  if (!user_name || !user_email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing required fields" }),
    };
  }

  try {
    // Initialize EmailJS with your public key
    init(process.env.EMAILJS_PUBLIC_KEY);

    const result = await send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        user_name,
        user_email,
        user_budget,
        message,
      },
      process.env.EMAILJS_PRIVATE_KEY // Pass private key as third parameter
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully!" }),
    };
  } catch (error) {
    console.error("EmailJS error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send message", error: error.message }),
    };
  }
};
