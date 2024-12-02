const mockPosts = [
    {
      username: 'Artist01',
      profilePic: 'https://via.placeholder.com/50',
      media: 'https://via.placeholder.com/600x400', // Replace with your image URL
      mediaType: 'image', // 'image' or 'video'
      caption: 'Just finished this amazing piece of art!',
      category: 'Art',
      tags: ['art', 'painting', 'creative'],
      visibility: 'Public',
    },
    {
      username: 'Musician42',
      profilePic: 'https://via.placeholder.com/50',
      media: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with your video URL
      mediaType: 'video',
      caption: 'Check out my latest track!',
      category: 'Music',
      tags: ['music', 'track', 'audio'],
      visibility: 'Public',
    },
    {
      username: 'Writer88',
      profilePic: 'https://via.placeholder.com/50',
      media: 'https://via.placeholder.com/600x400',
      mediaType: 'image',
      caption: 'A glimpse of my upcoming story...',
      category: 'Writing',
      tags: ['writing', 'story', 'poetry'],
      visibility: 'Public',
    },
  ];
  
  export default mockPosts;
  