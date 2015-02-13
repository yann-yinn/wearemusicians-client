
/**
 * A simple example service that returns some data.
 */
angular.module('okc.persons').factory('Persons', function() {


    // Some fake testing data
    var persons;

    persons = [
        {
            id: 0,
            name: 'Nyl auster',
            notes: 'Enjoys drawing things',
            face: 'https://i1.sndcdn.com/avatars-000009333825-5oim09-t500x500.jpg',
            soundcloud:
            [
                {
                    url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68310811&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
                }
            ]
        },
        {
            id: 1,
            name: 'Max Lynx',
            notes: 'Odd obsession with everything',
            face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        },
        {
            id: 2,
            name: 'Andrew Jostlen',
            notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
            face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
        },
        {
            id: 3,
            name: 'Adam Bradleyson',
            notes: 'I think he needs to buy a boat',
            face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        },
        {
            id: 4,
            name: 'Perry Governor',
            notes: 'Just the nicest guy',
            face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
        }
    ];

    return {

        all: function() {
            return persons;
        },
        get: function(personId) {
            // Simple index lookup
            return persons[personId];
        }

    }

});

