namespace Cinema.API.Contracts
{
    public class ApiRoutes
    {
        public const string Version = "v1";
        public const string Root = "api";
        public const string Base = Root + "/" + Version;

        public static class Movie
        {
            private const string MovieBase = Base + "/movies";

            public const string Create = MovieBase;

            public const string Edit = MovieBase + "/{id}";
        }

        public static class Shows
        {
            private const string ShowsBase = Base + "/shows";

            public const string GetShowByDay = ShowsBase + "/{year}/{month}/{day}";

            public const string Edit = ShowsBase + "/{id}";
        }
    }
}
