module.exports = async function (context, req) {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: "Missing required fields"
        };
        return;
    }

    // Simulate email sending (replace with SendGrid/NodeMailer in production)
    context.log(`Email would be sent to: ${email}`);
    
    context.res = {
        status: 200,
        body: "Message received (simulated in demo)"
    };
};