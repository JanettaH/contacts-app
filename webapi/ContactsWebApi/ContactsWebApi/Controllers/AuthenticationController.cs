using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using ContactsWebApi.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactsWebApi.Controllers
{
    [Route("api/authenticate")]
    public class AuthenticationController : Controller
    {
        private readonly ITokenService _tokenService;

        public AuthenticationController(ITokenService tokenService)
        {
            _tokenService = tokenService;
        }


        [HttpPost]
        public async Task<IActionResult> Authentication([FromBody] AuthenticationRequest authenticationRequest)
        {
            var token = await _tokenService.RequestAccessToken(authenticationRequest);
            if (token == null)
            {
                return new UnauthorizedResult();
            }
            return new JsonResult(token);
        }
    }
}