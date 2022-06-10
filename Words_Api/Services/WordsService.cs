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

    public List<string> PickRandomWord()
    {
      Random rdn = new Random();
      var test = new List<string>();
      var word = this.wordsRepository.GetWord(rdn.Next(0, 474).ToString());

      foreach (var item in word)
      {
        test.Add(item.ToString());
      }

      return test;
    }

    public bool WordExist(string word)
    {
      var list = this.wordsRepository.GetList();

      return list.ContainsValue(word);
    }
  }
}
