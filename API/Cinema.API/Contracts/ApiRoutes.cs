namespace Cinema.API.Contracts
{
    public class ApiRoutes
    {
        private const string Version = "v1";
        private const string Root = "api";
        private const string Base = Root + "/" + Version;

        public static class Movies
        {
            private const string MoviesBase = Base + "/movies";

            public const string Create = MoviesBase;

            public const string Delete = MoviesBase + "/{id}";

            public const string Edit = MoviesBase + "/{id}";

            public const string GetMovieById = MoviesBase + "/{id}";
            
            public const string GetMovies = MoviesBase;

            public const string GetPopularityOfMovieByDate = MoviesBase + "/{id}/{year}/{month}/{day}";
        }

        public static class Shows
        {
            private const string ShowsBase = Base + "/shows";

            public const string Edit = ShowsBase + "/{id}";

            public const string Create = ShowsBase;

            public const string GetByDate = ShowsBase + "/{year}/{month}/{day}";

            public const string GetById = ShowsBase + "/{id}";

            public const string GetAll = ShowsBase;

            public const string Delete = ShowsBase + "/{id}";

            public const string GetCurrentShows = ShowsBase + "/now";
        }

        public static class Auditoriums
        {
            private const string AuditoriumsBase = Base + "/auditoriums";

            public const string GetAuditoriumById = AuditoriumsBase + "/{id}";

            public const string GetAuditoriums = AuditoriumsBase;
        }
    }
}
