using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Words_Api.Services;

namespace Words_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordsController : ControllerBase
    {
        private readonly WordsService wordsService;

        public WordsController(WordsService wordsService)
        {
            this.wordsService = wordsService;
        }

        [HttpGet]
        public string GetWord()
        {
            return this.wordsService.PickRandomWord();
        }

        [HttpGet("{word}")]
        public bool TryIfExist(string word)
        {
            return this.wordsService.WordExist(word);
        }
    }
}
