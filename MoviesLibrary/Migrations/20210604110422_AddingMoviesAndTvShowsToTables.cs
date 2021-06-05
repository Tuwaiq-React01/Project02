using Microsoft.EntityFrameworkCore.Migrations;

namespace MoviesLibrary.Migrations
{
    public partial class AddingMoviesAndTvShowsToTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Date", "Poster", "Rating", "Summary", "Title" },
                values: new object[,]
                {
                    { 1, "2021-05-26", "https://image.tmdb.org/t/p/w300/A0knvX7rlwTyZSKj8H5NiARb45.jpg", 9, "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.", "Cruella" },
                    { 19, "2021-03-18", "https://image.tmdb.org/t/p/w300/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg", 8, "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.", "Zack Snyder's Justice League" },
                    { 18, "2021-05-14", "https://image.tmdb.org/t/p/w300/w6n1pu9thpCVHILejsuhKf3tNCV.jpg", 7, "Before he built a drug empire, Ferry Bouman returns to his hometown on a revenge mission that finds his loyalty tested — and a love that alters his life.", "Ferry" },
                    { 17, "2021-04-02", "https://image.tmdb.org/t/p/w300/dkokENeY5Ka30BFgWAqk14mbnGs.jpg", 8, "Drac tries out some new monster pets to help occupy Tinkles for playtime.", "Monster Pets: A Hotel Transylvania Short" },
                    { 16, "2020-10-16", "https://image.tmdb.org/t/p/w300/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg", 8, "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!", "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train" },
                    { 15, "2021-04-04", "https://image.tmdb.org/t/p/w300/msI5a9TPnepx47JUb2vl88hb80R.jpg", 8, "On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!", "Miraculous World: Shanghai – The Legend of Ladydragon" },
                    { 14, "2021-05-21", "https://image.tmdb.org/t/p/w300/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg", 7, "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.", "A Quiet Place Part II" },
                    { 13, "2021-03-26", "https://image.tmdb.org/t/p/w300/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg", 8, "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.", "Nobody" },
                    { 12, "2021-03-03", "https://image.tmdb.org/t/p/w300/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg", 8, "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.", "Raya and the Last Dragon" },
                    { 11, "2021-05-27", "https://image.tmdb.org/t/p/w300/bT3c4TSOP8vBmMoXZRDPTII6eDa.jpg", 9, "The cast of Friends reunites for a once-in-a-lifetime celebration of the hit series, an unforgettable evening filled with iconic memories, uncontrollable laughter, happy tears, and special guests.", "Friends: The Reunion" },
                    { 20, "2021-04-16", "https://image.tmdb.org/t/p/w300/AoWY1gkcNzabh229Icboa1Ff0BM.jpg", 6, "Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters—or she may never see her child again.", "Vanquish" },
                    { 9, "2021-04-30", "https://image.tmdb.org/t/p/w300/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg", 6, "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.", "The Virtuoso" },
                    { 8, "2021-03-24", "https://image.tmdb.org/t/p/w300/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg", 8, "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.", "Godzilla vs. Kong" },
                    { 7, "2021-05-14", "https://image.tmdb.org/t/p/w300/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg", 7, "A special crimes investigator forms an unlikely bond with a serial killer to bring down a global child sex trafficking syndicate.", "I Am All Girls" },
                    { 6, "2021-04-29", "https://image.tmdb.org/t/p/w300/rEm96ib0sPiZBADNKBHKBv5bve9.jpg", 7, "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.", "Tom Clancy's Without Remorse" },
                    { 5, "2021-04-07", "https://image.tmdb.org/t/p/w300/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg", 8, "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.", "Mortal Kombat" },
                    { 4, "2021-05-14", "https://image.tmdb.org/t/p/w300/z8CExJekGrEThbpMXAmCFvvgoJR.jpg", 7, "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.", "Army of the Dead" },
                    { 3, "2021-04-22", "https://image.tmdb.org/t/p/w300/YxopfHpsCV1oF8CZaL4M3Eodqa.jpg", 8, "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.", "Wrath of Man" },
                    { 2, "2021-03-31", "https://image.tmdb.org/t/p/w300/bShgiEQoPnWdw4LBrYT5u18JF34.jpg", 7, "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.", "The Unholy" },
                    { 10, "2021-05-05", "https://image.tmdb.org/t/p/w300/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg", 7, "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all.", "Those Who Wish Me Dead" }
                });

            migrationBuilder.InsertData(
                table: "TvShows",
                columns: new[] { "Id", "Date", "Poster", "Rating", "Summary", "Title" },
                values: new object[,]
                {
                    { 12, "2017-01-26", "https://image.tmdb.org/t/p/w300/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg", 9, "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.", "Riverdale" },
                    { 13, "2011-04-17", "https://image.tmdb.org/t/p/w300/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg", 8, "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.", "Game of Thrones" },
                    { 14, "2017-04-26", "https://image.tmdb.org/t/p/w300/oIkxqt6ug5zT5ZSUUyc1Iqopf02.jpg", 8, "Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship. A TV adaptation of Margaret Atwood's novel.", "The Handmaid's Tale" },
                    { 18, "2009-09-10", "https://image.tmdb.org/t/p/w300/kLEha9zVVv8acGFKTX4gjvSR2Q0.jpg", 8, "The story of two vampire brothers obsessed with the same girl, who bears a striking resemblance to the beautiful but ruthless vampire they knew and loved in 1864.", "The Vampire Diaries" },
                    { 16, "2010-10-31", "https://image.tmdb.org/t/p/w300/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg", 8, "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.", "The Walking Dead" },
                    { 17, "2021-05-07", "https://image.tmdb.org/t/p/w300/9yxep7oJdkj3Pla9TD9gKflRApY.jpg", 8, "As the world's first generation of superheroes (who received their powers in the 1930s) become the revered elder guard in the present, their superpowered children struggle to live up to the legendary feats of their parents.", "Jupiter's Legacy" },
                    { 11, "2015-08-23", "https://image.tmdb.org/t/p/w300/4UjiPdFKJGJYdxwRs2Rzg7EmWqr.jpg", 8, "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.", "Fear the Walking Dead" },
                    { 15, "2018-04-22", "https://image.tmdb.org/t/p/w300/34FaY8qpjBAVysSfrJ1l7nrAQaD.jpg", 8, "The series dramatizes the life story of Mexican superstar singer Luis Miguel, who has captivated audiences in Latin America and beyond for decades.", "Luis Miguel: The Series" },
                    { 10, "2021-03-26", "https://image.tmdb.org/t/p/w300/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg", 9, "Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.", "Invincible" },
                    { 6, "2021-02-23", "https://image.tmdb.org/t/p/w300/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg", 8, "After years of facing megalomaniacal supervillains, monsters wreaking havoc on Metropolis, and alien invaders intent on wiping out the human race, The Man of Steel aka Clark Kent and Lois Lane come face to face with one of their greatest challenges ever: dealing with all the stress, pressures and complexities that come with being working parents in today's society.", "Superman & Lois" },
                    { 8, "2021-03-19", "https://image.tmdb.org/t/p/w300/6kbAMLteGO8yyewYau6bJ683sw7.jpg", 8, "Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.", "The Falcon and the Winter Soldier" },
                    { 7, "2005-03-27", "https://image.tmdb.org/t/p/w300/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg", 8, "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.", "Grey's Anatomy" },
                    { 5, "2021-03-24", "https://image.tmdb.org/t/p/w300/o7uk5ChRt3quPIv8PcvPfzyXdMw.jpg", 8, "Hell-bent on exacting revenge and proving he was framed for his sister's murder, Álex sets out to unearth much more than the crime's real culprit.", "Who Killed Sara?" },
                    { 4, "2017-09-25", "https://image.tmdb.org/t/p/w300/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg", 9, "A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives", "The Good Doctor" },
                    { 3, "2014-10-07", "https://image.tmdb.org/t/p/w300/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg", 8, "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.", "The Flash" },
                    { 2, "2020-01-31", "https://image.tmdb.org/t/p/w300/xUtOM1QO4r8w8yeE00QvBdq58N5.jpg", 8, "A small Norwegian town experiencing warm winters and violent downpours seems to be headed for another Ragnarök -- unless someone intervenes in time.", "Ragnarok" },
                    { 1, "2016-01-25", "https://image.tmdb.org/t/p/w300/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg", 8, "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.", "Lucifer" },
                    { 19, "2018-10-25", "https://image.tmdb.org/t/p/w300/qTZIgXrBKURBK1KrsT7fe3qwtl9.jpg", 9, "In a place where young witches, vampires, and werewolves are nurtured to be their best selves in spite of their worst impulses, Klaus Mikaelson’s daughter, 17-year-old Hope Mikaelson, Alaric Saltzman’s twins, Lizzie and Josie Saltzman, among others, come of age into heroes and villains at The Salvatore School for the Young and Gifted.", "Legacies" },
                    { 9, "2018-06-12", "https://image.tmdb.org/t/p/w300/fuVuDYrs8sxvEolnYr0wCSvtyTi.jpg", 8, "After spending seventeen years in prison unfairly, a talented songwriter seeks revenge on the men who sank her and killed her family.", "The Queen of Flow" },
                    { 20, "2021-05-04", "https://image.tmdb.org/t/p/w300/WjQmEWFrOf98nT5aEfUfVYz9N2.jpg", 9, "Follow the elite and experimental Clones of the Bad Batch as they find their way in a rapidly changing galaxy in the aftermath of the Clone Wars.", "The Bad Batch" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "TvShows",
                keyColumn: "Id",
                keyValue: 20);
        }
    }
}
