using Words_Api.Models;

namespace Words_Api.Repository
{
    public interface IWordsRepository
    {
        string GetWord(string id);

        Dictionary<string, string> GetList();
    }
}
