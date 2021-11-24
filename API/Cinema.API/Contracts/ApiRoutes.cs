namespace Cinema.API.Contracts
{
    public class ApiRoutes
    {
        public const string Version = "v1";
        public const string Root = "api";
        public const string Base = Root + "/" + Version;

        public static class Movie
        {
            public const string MovieBase = Base + "/movies";
        }
    }
}
