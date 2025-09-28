import { useState, useCallback } from "react";
import { sendEmail as clientSendEmail, sendForm as clientSendForm } from "../lib/emailClient";

export default function useEmailSender() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const reset = useCallback(() => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  }, []);

  const send = useCallback(async (templateParams, opts = {}) => {
    const { serviceId, templateId } = opts;
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await clientSendEmail(templateParams, serviceId, templateId);
      setSuccess(true);
      return res;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const sendForm = useCallback(async (form, opts = {}) => {
    const { serviceId, templateId } = opts;
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await clientSendForm(form, serviceId, templateId);
      setSuccess(true);
      return res;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    success,
    error,
    send,
    sendForm,
    reset,
  };
}
