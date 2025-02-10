using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.AspNetCore.Mvc;

[Route("api/email")]
[ApiController]
public class EmailController : ControllerBase
{
    [HttpPost("send")]
    public IActionResult SendEmail([FromBody] EmailRequest request)
    {
        if (string.IsNullOrEmpty(request.UserEmail))
        {
            return BadRequest("Email is required.");
        }

        try
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress("Your Name", "your-email@gmail.com"));
            emailMessage.To.Add(new MailboxAddress("", "your-email@gmail.com"));
            emailMessage.Subject = "Request to See Your CV";
            emailMessage.Body = new TextPart("plain")
            {
                Text = $"Hello, I am {request.UserEmail}. I would like to see your CV."
            };

            using (var client = new SmtpClient())
            {
                client.Connect("smtp.gmail.com", 587, false);
                client.Authenticate("your-email@gmail.com", "your-app-password");
                client.Send(emailMessage);
                client.Disconnect(true);
            }

            return Ok(new { message = "Email sent successfully!" });
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error: {ex.Message}");
        }
    }
}

public class EmailRequest
{
    public string UserEmail { get; set; }
}
