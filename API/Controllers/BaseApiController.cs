using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")] // https://localhost:5000/api/users Get /api/users

    public class BaseApiController : ControllerBase
    {
    }
}