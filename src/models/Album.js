const albums = [
  {
    id: 1,
    title: "Duke",
    artist: "OpenJDK",
    price: 56.99,
    image_url: "http://cr.openjdk.java.net/~jeff/Duke/png/Hips.png",
  },
  {
    id: 2,
    title: "Duchess",
    artist: "OpenJDK",
    price: 17.99,
    image_url: "http://cr.openjdk.java.net/~jeff/Duke/png/Duchess.png",
  },
  {
    id: 3,
    title: "Swing",
    artist: "OpenJDK",
    price: 39.99,
    image_url: "http://cr.openjdk.java.net/~jeff/Duke/png/Swing.png",
  },
  {
    id: 4,
    title: "Snooze",
    artist: "OpenJDK",
    price: 39.99,
    image_url: "http://cr.openjdk.java.net/~jeff/Duke/png/Snooze.png",
  },
  {
    id: 5,
    title: "Juggle",
    artist: "OpenJDK",
    price: 39.99,
    image_url: "http://cr.openjdk.java.net/~jeff/Duke/png/Juggler.png",
  },
  {
    id: 6,
    title: "Thinking",
    artist: "OpenJDK",
    price: 39.99,
    image_url: "http://cr.openjdk.java.net/~jeff/Duke/png/Thinking.png",
  },
];

const getAlbums = async function () {
  return Promise.resolve(albums);
};

exports.getAlbums = getAlbums;
