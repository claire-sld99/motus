using System.Text.Json;
using Words_Api.Models;

namespace Words_Api.Repository
{
    public class WordsRepository : IWordsRepository
    {
        private readonly Dictionary<string, string> WordsList;

        public WordsRepository()
        {
            using (StreamReader r = new StreamReader("C:\\Users\\sbena\\Desktop\\Nouveau dossier (2)\\motus\\Words_Api\\Models\\words(300000).json"))
            {
                string json = r.ReadToEnd();
                WordsList = JsonSerializer.Deserialize<Dictionary<string, string>>(json);
            }
        }

        public Dictionary<string, string> GetList()
        {
            return this.WordsList;
        }

        public string GetWord(string id)
        {
            return this.WordsList[id];
        }
    }
}
