// eslint-disable-next-line
const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, obj) => sum + obj.likes, 0);
};

const favoriteBlog = (blogs) => {
  let max = 0;
  let favorite = null;
  for (let blog of blogs) {
    if (blog.likes > max) {
      max = blog.likes;
      favorite = blog;
    }
  }
  return favorite;
};

const mostBlogs = (blogs) => {
  const result = {
    author: '',
    blogs: 0
  };
  const authors = {};
  for (let blog of blogs) {
    if (!authors[blog.author]) {
      authors[blog.author] = 1;
    } else {
      authors[blog.author]++;
    }
    if (authors[blog.author] > result.blogs) {
      result.blogs = authors[blog.author];
      result.author = blog.author;
    }
  }
  return result;
};

const mostLikes = (blogs) => {
  const result = {
    author: '',
    likes: 0
  };
  const authors = {};
  for (let blog of blogs) {
    if (!authors[blog.author]) {
      authors[blog.author] = blog.likes;
    } else {
      authors[blog.author] += blog.likes;
    }
    if (authors[blog.author] > result.likes) {
      result.likes = authors[blog.author];
      result.author = blog.author;
    }
  }
  return result;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};