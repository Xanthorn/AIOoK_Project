namespace Cinema.API.Contracts
{
    public class ApiRoutes
    {
        public const string Version = "v1";
        public const string Root = "api";
        public const string Base = Root + "/" + Version;

        public static class Movies
        {
            private const string MoviesBase = Base + "/movies";

            public const string Create = MoviesBase;

            public const string Delete = MoviesBase + "/{id}";

            public const string Edit = MoviesBase + "/{id}";

            public const string GetMovies = MoviesBase + "/";
        }

        public static class Shows
        {
            private const string ShowsBase = Base + "/shows";

            public const string Edit = ShowsBase + "/{id}";

            public const string Create = ShowsBase;

            public const string GetShowByDate = ShowsBase + "/{year}/{month}/{day}";
        }
    }
}
