import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const fullName = formData.get('fullName')?.toString() || '';
    const orgName = formData.get('orgName')?.toString() || '';
    const workEmail = formData.get('workEmail')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const facilityType = formData.get('facilityType')?.toString() || '';
    const patientPop = formData.getAll('patientPop').map(p => p.toString()).join(', ');
    const mountingPref = formData.get('mountingPref')?.toString() || '';
    const ceilingHeight = formData.get('ceilingHeight')?.toString() || '';
    const wallConstruction = formData.get('wallConstruction')?.toString() || '';
    const notes = formData.get('notes')?.toString() || '';

    if (!workEmail || !fullName) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Process uploaded photo attachments
    const attachments: Array<{ filename: string; content: Buffer }> = [];
    const photoFiles = formData.getAll('spacePhotos');

    for (const fileItem of photoFiles) {
      if (fileItem instanceof File && fileItem.size > 0) {
        const arrayBuffer = await fileItem.arrayBuffer();
        attachments.push({
          filename: fileItem.name,
          content: Buffer.from(arrayBuffer),
        });
      }
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY environment variable is not configured.');
      // Return 200 in development so submission completes smoothly even before key is provided
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully (demo mode: API key pending).' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(resendApiKey);

    // Send email to Robert / CMT Systems Notification Desk
    const recipient = process.env.NOTIFICATION_EMAIL || 'robert@cognitivemotortraining.com';

    await resend.emails.send({
      from: 'CMT Systems Leads <onboarding@resend.dev>',
      to: recipient,
      replyTo: workEmail,
      subject: `🚨 New Photo Fit Review Request: ${orgName || fullName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
          <h2 style="color: #0c2044; margin-top: 0;">New Facility Photo Fit Review Request</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          
          <h3 style="color: #FF6500; margin-bottom: 8px;">1. Contact Information</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Organization:</strong> ${orgName}</p>
          <p><strong>Email:</strong> <a href="mailto:${workEmail}">${workEmail}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>

          <h3 style="color: #FF6500; margin-bottom: 8px;">2. Facility & Clinical Objectives</h3>
          <p><strong>Facility Type:</strong> ${facilityType || 'Not specified'}</p>
          <p><strong>Patient Population:</strong> ${patientPop || 'Not specified'}</p>

          <h3 style="color: #FF6500; margin-bottom: 8px;">3. Structural & Space Fit</h3>
          <p><strong>Mounting Preference:</strong> ${mountingPref || 'Not specified'}</p>
          <p><strong>Ceiling Height:</strong> ${ceilingHeight || 'Not specified'}</p>
          <p><strong>Wall Construction:</strong> ${wallConstruction || 'Not specified'}</p>

          <h3 style="color: #FF6500; margin-bottom: 8px;">4. Notes / Questions</h3>
          <p style="background: #f8fafc; padding: 12px; border-radius: 6px;">${notes || 'None provided'}</p>

          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="font-size: 0.85rem; color: #64748b;">
            Attached Photos: ${attachments.length} file(s) attached.
          </p>
        </div>
      `,
      attachments: attachments.map(a => ({
        filename: a.filename,
        content: a.content,
      })),
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Your Photo Fit Review request has been received. Robert will review your room specs within 24 hours.' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error processing Photo Fit form:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

