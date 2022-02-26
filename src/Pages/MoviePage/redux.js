import { createStore } from 'redux';
import axios from 'axios';
import { apiKey } from './credentials.js';

const movieStore = createStore(initialState);

const initialState = {
  id: "movieId",
  actorList: [
    {
      id: "nm0001041",
      asCharacter: "Su Li-zhen - Mrs. Chan",
      image: "https://imdb-api.com/images/original/MV5BMTI0ODczMjM1Nl5BMl5BanBnXkFtZTYwODA1Mjgy._V1_Ratio0.7727_AL_.jpg",
      name: "Maggie Cheung"
    }
  ],
  image: "https://imdb-api.com/images/original/MV5BYjZjODRlMjQtMjJlYy00ZDBjLTkyYTQtZGQxZTk5NzJhYmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.7046_AL_.jpg",
  images: {
    items: [
      {
        image: "https://imdb-api.com/images/original/MV5BNTgxMTU4ODE0NF5BMl5BanBnXkFtZTYwMDc4MzM3._V1_Ratio1.0000_AL_.jpg",
        title: "Chow Mo-wan & Mrs. Chan"
      }
    ]
  },
  plot: "Set in Hong Kong, 1962, Chow Mo-Wan is a newspaper editor who moves into a new building with his wife. At the same time, Su Li-zhen, a beautiful secretary and her executive husband also move in to the crowded building. With their spouses often away, Chow and Li-zhen spend most of their time together as friends. They have everything in common from noodle shops to martial arts. Soon, they are shocked to discover that their spouses are having an affair. Hurt and angry, they find comfort in their growing friendship even as they resolve not to be like their unfaithful mates."
};


export { movieStore };
