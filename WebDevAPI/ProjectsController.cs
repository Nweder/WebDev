using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]  
public class ProjectsController : ControllerBase
{
    private static readonly List<Project> Projects = new()
    {
        new Project { Id = 1, Title = "Find Word in File", Description = "Helps to find words in text.", Image = "word-file.png" },
        new Project { Id = 2, Title = "Chat App", Description = "Real-time chat using WebSockets.", Image = "chat-app.png" },
        new Project { Id = 3, Title = "Portfolio Website", Description = "Showcasing my projects.", Image = "portfolio.png" }
    };

    [HttpGet]
    public IActionResult GetProjects()
    {
        return Ok(Projects);
    }
}

public class Project
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public string? Image { get; set; }
}
