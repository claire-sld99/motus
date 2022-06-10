using System.Linq;
using Words_Api.Models;
using Words_Api.Repository;

namespace Words_Api.Services
{
    public class WordsService
    {
        private readonly IWordsRepository wordsRepository;

        public WordsService(IWordsRepository wordsRepository)
        {
            this.wordsRepository = wordsRepository;
        }

        public string PickRandomWord()
        {
            Random rdn = new Random();

            return this.wordsRepository.GetWord(rdn.Next(0, 1499).ToString());
        }

        public bool WordExist(string word)
        {
            var list = this.wordsRepository.GetList();

            return list.ContainsValue(word);
        }
    }
}
