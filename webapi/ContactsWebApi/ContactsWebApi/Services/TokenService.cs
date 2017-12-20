using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using ContactsWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactsWebApi.Services
{
    public class TokenService : ITokenService
    {
        public async Task<AccessToken> RequestAccessToken(AuthenticationRequest authenticationRequest)
        {
            AccessToken token= null;
            var requestParams = new List<KeyValuePair<string, string>>
            {
                new KeyValuePair<string, string>("client_id", "3ac8700d-6c1b-45c4-a00a-b6e6a9b24978"),
                new KeyValuePair<string, string>("resource", "3ac8700d-6c1b-45c4-a00a-b6e6a9b24978"),
                new KeyValuePair<string, string>("username", authenticationRequest.UserName),
                new KeyValuePair<string, string>("password", authenticationRequest.Password),
                new KeyValuePair<string, string>("grant_type", "password"),
                new KeyValuePair<string, string>("client_secret", "vyea3heQkaCOzt6hOx4bO2tce2oLR64xvnEQVmp8IEM=")
            };

            string endpoint = "https://login.windows.net/c3cf5f23-800c-4530-874c-86506f21d500/oauth2/token";

            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Cache-Control", "no-cache");
                HttpContent content = new FormUrlEncodedContent(requestParams);
                var response = await httpClient.PostAsync(endpoint, content);

                if (response.IsSuccessStatusCode)
                {
                    var data = await response.Content.ReadAsStringAsync();
                    token = JsonConvert.DeserializeObject<AccessToken>(data);
                }
            }
            return token;
        }
    }
}