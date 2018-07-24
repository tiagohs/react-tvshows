import { BaseTVShow } from '@app/core/models/TVShow';

export const BaseTvSHow: BaseTVShow = {
    'original_name': 'The Big Bang Theory',
    'id': 1418,
    'name': 'Big Bang: A Teoria',
    'popularity': 271.704,
    'vote_count': 3039,
    'vote_average': 6.8,
    'first_air_date': '2007-09-24',
    'poster_path': '\/y47TQybIv7GqrrAkmnt6jFciP7a.jpg',
    'genre_ids': [
        35
    ],
    'original_language': 'en',
    'backdrop_path': '\/nGsNruW3W27V6r4gkyc3iiEGsKR.jpg',
    // tslint:disable-next-line:max-line-length
    'overview': 'Leonard e Sheldon são dois jovens cientistas que moram juntos, sabem tudo de física, mas não parecem saber como se relacionar com mulheres. Seus únicos amigos são Howard e Rajesh, mas tudo pode mudar quando conhecem a nova vizinha, a bela Penny, que logo encanta Leonard.',
    'origin_country': [
        'US'
    ]
};

const ListItem = (id: number): BaseTVShow => {
    
    return {
        'original_name': 'The Big Bang Theory',
        'id': id,
        'name': 'Big Bang: A Teoria',
        'popularity': 271.704,
        'vote_count': 3039,
        'vote_average': 6.8,
        'first_air_date': '2007-09-24',
        'poster_path': '\/y47TQybIv7GqrrAkmnt6jFciP7a.jpg',
        'genre_ids': [
            35
        ],
        'original_language': 'en',
        'backdrop_path': '\/nGsNruW3W27V6r4gkyc3iiEGsKR.jpg',
        // tslint:disable-next-line:max-line-length
        'overview': 'Leonard e Sheldon são dois jovens cientistas que moram juntos, sabem tudo de física, mas não parecem saber como se relacionar com mulheres. Seus únicos amigos são Howard e Rajesh, mas tudo pode mudar quando conhecem a nova vizinha, a bela Penny, que logo encanta Leonard.',
        'origin_country': [
            'US'
        ]
    };
};

export const TVSHowList = {
    'page': 1,
    'total_results': 20078,
    'total_pages': 1004,
    'results': [ListItem(100), ListItem(122), ListItem(123), ListItem(124), ListItem(125), ListItem(126)]
};